const fs = require('fs');

console.log("Reading src/app-bundle.js...");
let code = fs.readFileSync('src/app-bundle.js', 'utf8');

// First, let's verify if `defaultDeepLedgerWebsites` is already defined
if (!code.includes("defaultDeepLedgerWebsites = [")) {
  let helperData = fs.readFileSync('scripts/deep-data-helper.cjs', 'utf8');
  let dataMatch = helperData.match(/defaultDeepLedgerWebsites = \[[\s\S]*?\];/);
  if (dataMatch) {
    let anchor = "vn = ({";
    let insertIdx = code.indexOf(anchor);
    if (insertIdx !== -1) {
      code = code.slice(0, insertIdx) + "let " + dataMatch[0] + "\n\n  " + code.slice(insertIdx);
      console.log("Injected defaultDeepLedgerWebsites before vn = ({");
    }
  }
}

// Now let's create the DeepCrawlLedgerView component `Yn`
let componentScript = `
  // =========================================================================
  // 深度采集 · 网站台账视图组件 (含前置合规验证、层数调整1-7层、提取详情页规则沙箱配置)
  // =========================================================================
  let Yn = ({
    websites: websitesProp,
    services,
    onUpdateWebsites,
    onBackToServices,
    onNavigateToDashboard,
    onOpenConfigModal,
    onAddToast,
  }) => {
    let [websites, setWebsites] = (0, C.useState)(websitesProp || defaultDeepLedgerWebsites);
    (0, C.useEffect)(() => {
      if (websitesProp) setWebsites(websitesProp);
    }, [websitesProp]);

    let [keyword, setKeyword] = (0, C.useState)(\`\`),
      [selectedFreq, setSelectedFreq] = (0, C.useState)(\`all\`),
      [selectedVerifyStatus, setSelectedVerifyStatus] = (0, C.useState)(\`all\`),
      [selectedDepth, setSelectedDepth] = (0, C.useState)(\`all\`),
      [isVerifyingAll, setIsVerifyingAll] = (0, C.useState)(!1),
      [activeAuditDetail, setActiveAuditDetail] = (0, C.useState)(null),
      [editingRuleSite, setEditingRuleSite] = (0, C.useState)(null),
      [newSiteModalOpen, setNewSiteModalOpen] = (0, C.useState)(!1),
      [testSandboxUrl, setTestSandboxUrl] = (0, C.useState)(\`https://www.hxfinance.com/news/20260930/889201.html\`),
      [sandboxResult, setSandboxResult] = (0, C.useState)(null),
      [verifyingSiteId, setVerifyingSiteId] = (0, C.useState)(null);

    // Filter websites
    let filteredWebsites = websites.filter((site) => {
      let matchKw =
        !keyword ||
        site.name.toLowerCase().includes(keyword.toLowerCase()) ||
        site.domain.toLowerCase().includes(keyword.toLowerCase()) ||
        site.url.toLowerCase().includes(keyword.toLowerCase()) ||
        (site.verification?.siteCategory || \`\`).includes(keyword);

      let matchFreq =
        selectedFreq === \`all\` || site.freq === selectedFreq || site.svcId === selectedFreq;

      let matchStatus =
        selectedVerifyStatus === \`all\` ||
        site.verification?.status === selectedVerifyStatus;

      let matchDepth =
        selectedDepth === \`all\` || site.maxDepth.toString() === selectedDepth;

      return matchKw && matchFreq && matchStatus && matchDepth;
    });

    // Stats calculations
    let totalCount = websites.length;
    let passedCount = websites.filter((w) => w.verification?.status === \`passed\`).length;
    let ecommerceCount = websites.filter((w) => w.verification?.status === \`rejected_ecommerce\`).length;
    let illegalCount = websites.filter((w) => w.verification?.status === \`blocked_illegal\`).length;
    let unreachableCount = websites.filter((w) => w.verification?.status === \`unreachable\`).length;

    // Update layer depth (max 7, default 3)
    let handleUpdateDepth = (siteId, newDepth) => {
      let clamped = parseInt(newDepth);
      if (isNaN(clamped)) clamped = 3;
      if (clamped > 7) {
        clamped = 7;
        onAddToast && onAddToast(\`深度采集层数最大不可超过 7 层（默认 3 层），已自动限制为 7 层！\`, \`warning\`);
      } else if (clamped < 1) {
        clamped = 1;
      }
      let updated = websites.map((w) => (w.id === siteId ? { ...w, maxDepth: clamped } : w));
      setWebsites(updated);
      onUpdateWebsites && onUpdateWebsites(updated);
      onAddToast && onAddToast(\`已调整站点【\${websites.find(w => w.id === siteId)?.name}】下钻层数为 \${clamped} 层\`, \`success\`);
    };

    // Single site instant verification
    let handleVerifySingle = (site) => {
      setVerifyingSiteId(site.id);
      setTimeout(() => {
        setVerifyingSiteId(null);
        let status = site.verification?.status;
        let msg = \`站点【\${site.name}】前置连通性与合规探测完成：\${site.verification?.siteCategory} · \${site.verification?.httpStatus} (\${site.verification?.latency})\`;
        onAddToast && onAddToast(msg, status === \`passed\` ? \`success\` : status === \`blocked_illegal\` ? \`error\` : \`warning\`);
      }, 600);
    };

    // Verify all websites
    let handleVerifyAll = () => {
      setIsVerifyingAll(!0);
      setTimeout(() => {
        setIsVerifyingAll(!1);
        onAddToast && onAddToast(\`全站前置连通性与合规探测完成！共检测 \${websites.length} 个站点，准予采集 \${passedCount} 个，过滤电商 \${ecommerceCount} 个，阻断违规 \${illegalCount} 个，离线 \${unreachableCount} 个。\`, \`success\`);
      }, 1200);
    };

    // Test detail extraction rule in sandbox
    let handleTestSandbox = () => {
      if (!editingRuleSite) return;
      let rule = editingRuleSite.detailExtractRules;
      let isMatch = !0;
      let testUrl = testSandboxUrl.trim();
      if (!testUrl) {
        setSandboxResult({ success: !1, msg: \`请输入待测测试 URL\` });
        return;
      }
      try {
        if (rule.regexPattern) {
          let re = new RegExp(rule.regexPattern, \`i\`);
          isMatch = re.test(testUrl);
        }
        if (rule.excludePattern) {
          let exRe = new RegExp(rule.excludePattern, \`i\`);
          if (exRe.test(testUrl)) isMatch = !1;
        }
      } catch (err) {
        isMatch = !1;
      }
      setSandboxResult({
        success: isMatch,
        url: testUrl,
        matchedType: isMatch ? \`命中正文详情页规则 (Detail Page Content Candidate)\` : \`未命中 (非正文详情页或被排除过滤)\`,
        extractedFields: isMatch ? {
          titleCandidate: \`国内新质生产力与经济转型高质量发展最新动态及深度观察\`,
          publishTimeCandidate: \`2026-09-30 08:30:00\`,
          authorCandidate: \`财经智库特约评论员\`,
          depthLevel: \`Depth 3 (正文层)\`,
          extractedLinksCount: 14,
        } : null,
      });
    };

    // Save rule edit
    let handleSaveRule = (updatedSite) => {
      let updated = websites.map((w) => (w.id === updatedSite.id ? updatedSite : w));
      setWebsites(updated);
      onUpdateWebsites && onUpdateWebsites(updated);
      setEditingRuleSite(null);
      onAddToast && onAddToast(\`已保存【\${updatedSite.name}】提取详情页面链接规则与正则过滤配置！\`, \`success\`);
    };

    return (0, $.jsxs)(\`div\`, {
      className: \`p-6 space-y-5 animate-in fade-in duration-200\`,
      children: [
        // Top Navigation Bar inside Deep Crawl
        (0, $.jsxs)(\`div\`, {
          className: \`flex flex-wrap items-center justify-between gap-4 pb-1 border-b border-slate-200/80\`,
          children: [
            (0, $.jsxs)(\`div\`, {
              className: \`flex items-center gap-2\`,
              children: [
                (0, $.jsx)(\`button\`, {
                  type: \`button\`,
                  onClick: onBackToServices,
                  className: \`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer text-slate-600 hover:bg-slate-100 hover:text-slate-900\`,
                  children: [
                    (0, $.jsx)(Te, { className: \`w-3.5 h-3.5\` }),
                    (0, $.jsx)(\`span\`, { children: \`服务列表 (采集频率)\` }),
                  ],
                }),
                (0, $.jsx)(\`button\`, {
                  type: \`button\`,
                  className: \`px-3 py-1.5 rounded-lg text-xs font-extrabold transition-all flex items-center gap-1.5 cursor-default bg-emerald-600 text-white shadow-xs\`,
                  children: [
                    (0, $.jsx)(be, { className: \`w-3.5 h-3.5\` }),
                    (0, $.jsx)(\`span\`, { children: \`网站台账 (前置验证与层数规则)\` }),
                    (0, $.jsx)(\`span\`, {
                      className: \`px-1.5 py-0.2 rounded-full text-[10.5px] font-mono bg-white/20 text-white font-bold ml-0.5\`,
                      children: websites.length,
                    }),
                  ],
                }),
                (0, $.jsx)(\`button\`, {
                  type: \`button\`,
                  onClick: onNavigateToDashboard,
                  className: \`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer text-slate-600 hover:bg-slate-100 hover:text-slate-900\`,
                  children: [
                    (0, $.jsx)(Ce, { className: \`w-3.5 h-3.5\` }),
                    (0, $.jsx)(\`span\`, { children: \`递归下钻大盘 (拓扑透视)\` }),
                  ],
                }),
              ],
            }),
            (0, $.jsxs)(\`div\", {
              className: \`flex items-center gap-2.5\`,
              children: [
                (0, $.jsxs)(\`button\`, {
                  type: \`button\`,
                  onClick: handleVerifyAll,
                  disabled: isVerifyingAll,
                  className: \`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-300 shadow-2xs cursor-pointer disabled:opacity-60\`,
                  children: [
                    (0, $.jsx)(Ie, {
                      className: \`w-3.5 h-3.5 \${isVerifyingAll ? \`animate-spin\` : \`\`}\`,
                    }),
                    (0, $.jsx)(\`span\`, {
                      children: isVerifyingAll ? \`正在执行前置探测...\` : \`⚡ 一键全站执行前置验证探测\`,
                    }),
                  ],
                }),
                (0, $.jsxs)(\`button\`, {
                  type: \`button\`,
                  onClick: () => setNewSiteModalOpen(!0),
                  className: \`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all inline-flex items-center gap-1.5 bg-[#0066FF] hover:bg-[#0052cc] text-white shadow-xs cursor-pointer\`,
                  children: [
                    (0, $.jsx)(Pe, { className: \`w-3.5 h-3.5\` }),
                    (0, $.jsx)(\`span\`, { children: \`录入网站台账\` }),
                  ],
                }),
              ],
            }),
          ],
        }),

        // Top Metrics Cards
        (0, $.jsxs)(\`div\`, {
          className: \`grid grid-cols-2 md:grid-cols-5 gap-3.5\`,
          children: [
            (0, $.jsxs)(\`div\`, {
              className: \`bg-white p-4 rounded-xl border border-slate-200/90 shadow-2xs space-y-1\`,
              children: [
                (0, $.jsxs)(\`div\`, {
                  className: \`flex items-center justify-between text-xs text-slate-500 font-bold\`,
                  children: [
                    (0, $.jsx)(\`span\`, { children: \`深度采集纳管网站\` }),
                    (0, $.jsx)(ge, { className: \`w-4 h-4 text-[#0066FF]\` }),
                  ],
                }),
                (0, $.jsxs)(\`div\`, {
                  className: \`text-2xl font-black font-mono text-slate-900\`,
                  children: [totalCount, (0, $.jsx)(\`span\`, { className: \`text-xs font-normal text-slate-400 ml-1\`, children: \`个\` })],
                }),
                (0, $.jsx)(\`div\`, {
                  className: \`text-[11px] text-slate-500 font-mono\`,
                  children: \`按 12 档采集频率调度\`,
                }),
              ],
            }),
            (0, $.jsxs)(\`div\`, {
              className: \`bg-emerald-50/70 p-4 rounded-xl border border-emerald-200 shadow-2xs space-y-1\`,
              children: [
                (0, $.jsxs)(\`div\`, {
                  className: \`flex items-center justify-between text-xs text-emerald-800 font-bold\`,
                  children: [
                    (0, $.jsx)(\`span\`, { children: \`前置验证 · 准予采集\` }),
                    (0, $.jsx)(P, { className: \`w-4 h-4 text-emerald-600\` }),
                  ],
                }),
                (0, $.jsxs)(\`div\`, {
                  className: \`text-2xl font-black font-mono text-emerald-700\`,
                  children: [passedCount, (0, $.jsx)(\`span\`, { className: \`text-xs font-normal text-emerald-600 ml-1\`, children: \`个\` })],
                }),
                (0, $.jsxs)(\`div\`, {
                  className: \`text-[11px] text-emerald-700 font-bold\`,
                  children: [\`合规资讯/门户 (\`, ((passedCount / (totalCount || 1)) * 100).toFixed(1), \`%)\`],
                }),
              ],
            }),
            (0, $.jsxs)(\`div\`, {
              className: \`bg-amber-50/70 p-4 rounded-xl border border-amber-200 shadow-2xs space-y-1\`,
              children: [
                (0, $.jsxs)(\`div\", {
                  className: \`flex items-center justify-between text-xs text-amber-800 font-bold\`,
                  children: [
                    (0, $.jsx)(\`span\`, { children: \`前置验证 · 电商跳过\` }),
                    (0, $.jsx)(ct, { className: \`w-4 h-4 text-amber-600\` }),
                  ],
                }),
                (0, $.jsxs)(\`div\`, {
                  className: \`text-2xl font-black font-mono text-amber-700\`,
                  children: [ecommerceCount, (0, $.jsx)(\`span\`, { className: \`text-xs font-normal text-amber-600 ml-1\`, children: \`个\` })],
                }),
                (0, $.jsx)(\`div\`, {
                  className: \`text-[11px] text-amber-700 font-medium\`,
                  children: \`检测为商品交易自动跳过\`,
                }),
              ],
            }),
            (0, $.jsxs)(\`div\`, {
              className: \`bg-rose-50/70 p-4 rounded-xl border border-rose-200 shadow-2xs space-y-1\`,
              children: [
                (0, $.jsxs)(\`div\`, {
                  className: \`flex items-center justify-between text-xs text-rose-800 font-bold\`,
                  children: [
                    (0, $.jsx)(\`span\`, { children: \`前置合规 · 涉黄赌毒阻断\` }),
                    (0, $.jsx)(z, { className: \`w-4 h-4 text-rose-600\` }),
                  ],
                }),
                (0, $.jsxs)(\`div\`, {
                  className: \`text-2xl font-black font-mono text-rose-700\`,
                  children: [illegalCount, (0, $.jsx)(\`span\`, { className: \`text-xs font-normal text-rose-600 ml-1\`, children: \`个\` })],
                }),
                (0, $.jsx)(\`div\`, {
                  className: \`text-[11px] text-rose-700 font-bold\`,
                  children: \`安全引擎永久拦截合规红线\`,
                }),
              ],
            }),
            (0, $.jsxs)(\`div\`, {
              className: \`bg-slate-50 p-4 rounded-xl border border-slate-200 shadow-2xs space-y-1\`,
              children: [
                (0, $.jsxs)(\`div\`, {
                  className: \`flex items-center justify-between text-xs text-slate-600 font-bold\`,
                  children: [
                    (0, $.jsx)(\`span\`, { children: \`下钻层数与不可达\` }),
                    (0, $.jsx)(Ce, { className: \`w-4 h-4 text-slate-500\` }),
                  ],
                }),
                (0, $.jsxs)(\`div\`, {
                  className: \`text-2xl font-black font-mono text-slate-800 flex items-baseline gap-1.5\`,
                  children: [
                    (0, $.jsx)(\`span\`, { children: \`3.0\` }),
                    (0, $.jsx)(\`span\`, { className: \`text-xs font-bold text-slate-500\`, children: \`层(上限7层)\` }),
                  ],
                }),
                (0, $.jsxs)(\`div\`, {
                  className: \`text-[11px] text-slate-500\`,
                  children: [\`不可达: \`, unreachableCount, \` 个 (504/断网)\`],
                }),
              ],
            }),
          ],
        }),

        // Guidance Banner
        (0, $.jsxs)(\`div\`, {
          className: \`p-3.5 rounded-xl bg-gradient-to-r from-emerald-900/90 to-slate-900 text-white flex flex-wrap items-center justify-between gap-3 text-xs shadow-xs\`,
          children: [
            (0, $.jsxs)(\`div\`, {
              className: \`flex items-center gap-2.5\`,
              children: [
                (0, $.jsx)(ae, { className: \`w-4 h-4 text-emerald-400 shrink-0\` }),
                (0, $.jsx)(\`span\`, {
                  className: \`font-semibold\`,
                  children: \`【深度采集台账准则】一个采集频率对应一个服务，每个服务纳管多个网站。采集前自动执行连通性与合规探测（电商/黄赌毒自动过滤阻断）；下钻层数默认 3 层、最大上限 7 层，详情页链接提取规则全量可配置。\`,
                }),
              ],
            }),
            (0, $.jsxs)(\`div\`, {
              className: \`flex items-center gap-2 shrink-0\`,
              children: [
                (0, $.jsx)(\`span\`, {
                  className: \`px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono text-[11px] border border-emerald-400/30\`,
                  children: \`默认层数: 3 层\`,
                }),
                (0, $.jsx)(\`span\`, {
                  className: \`px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 font-mono text-[11px] border border-blue-400/30\`,
                  children: \`最大层数: 7 层\`,
                }),
              ],
            }),
          ],
        }),

        // Filter Controls
        (0, $.jsxs)(\`div\`, {
          className: \`bg-white p-4 rounded-xl border border-slate-200/90 shadow-2xs space-y-3\`,
          children: [
            (0, $.jsxs)(\`div\`, {
              className: \`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3\`,
              children: [
                // Keyword Search
                (0, $.jsxs)(\`div\`, {
                  className: \`flex flex-col gap-1\`,
                  children: [
                    (0, $.jsx)(\`label\`, { className: \`text-[11.5px] font-bold text-slate-600\`, children: \`搜索网站 / 域名 / URL\` }),
                    (0, $.jsxs)(\`div\`, {
                      className: \`relative flex items-center\`,
                      children: [
                        (0, $.jsx)(Be, { className: \`w-3.5 h-3.5 absolute left-3 text-slate-400\` }),
                        (0, $.jsx)(\`input\`, {
                          type: \`text\`,
                          value: keyword,
                          onChange: (e) => setKeyword(e.target.value),
                          placeholder: \`输入网站名、域名、或分类特征...\`,
                          className: \`w-full h-8.5 pl-8.5 pr-3 rounded-lg border border-slate-200 text-xs text-slate-800 bg-slate-50/50 focus:bg-white focus:border-[#0066FF] outline-none\`,
                        }),
                      ],
                    }),
                  ],
                }),
                // Frequency Filter
                (0, $.jsxs)(\`div\`, {
                  className: \`flex flex-col gap-1\`,
                  children: [
                    (0, $.jsx)(\`label\`, { className: \`text-[11.5px] font-bold text-slate-600\`, children: \`所属服务 / 采集频率\` }),
                    (0, $.jsxs)(\`select\`, {
                      value: selectedFreq,
                      onChange: (e) => setSelectedFreq(e.target.value),
                      className: \`w-full h-8.5 px-2.5 rounded-lg border border-slate-200 text-xs text-slate-800 bg-slate-50/50 focus:bg-white focus:border-[#0066FF] outline-none cursor-pointer\`,
                      children: [
                        (0, $.jsx)(\`option\`, { value: \`all\`, children: \`全部服务与采集频率\` }),
                        (0, $.jsx)(\`option\`, { value: \`10min\`, children: \`10min/轮 (极速高频)\` }),
                        (0, $.jsx)(\`option\`, { value: \`15min\`, children: \`15min/轮 (晨间突发)\` }),
                        (0, $.jsx)(\`option\`, { value: \`30min\`, children: \`30min/轮 (重点时效)\` }),
                        (0, $.jsx)(\`option\`, { value: \`1h\`, children: \`1h/轮 (常规日常)\` }),
                        (0, $.jsx)(\`option\`, { value: \`2h\`, children: \`2h/轮 (行业综合)\` }),
                        (0, $.jsx)(\`option\`, { value: \`3h\`, children: \`3h/轮 (骨干央媒)\` }),
                        (0, $.jsx)(\`option\`, { value: \`4h\`, children: \`4h/轮 (日报矩阵)\` }),
                        (0, $.jsx)(\`option\`, { value: \`6h\`, children: \`6h/轮 (巡检普查)\` }),
                        (0, $.jsx)(\`option\`, { value: \`8h\`, children: \`8h/轮 (地方门户)\` }),
                        (0, $.jsx)(\`option\`, { value: \`12h\`, children: \`12h/轮 (跨境资讯)\` }),
                        (0, $.jsx)(\`option\`, { value: \`24h\`, children: \`24h/轮 (长周期归档)\` }),
                        (0, $.jsx)(\`option\`, { value: \`48h\`, children: \`48h/轮 (全网普查)\` }),
                      ],
                    }),
                  ],
                }),
                // Verification Status Filter
                (0, $.jsxs)(\`div\`, {
                  className: \`flex flex-col gap-1\`,
                  children: [
                    (0, $.jsx)(\`label\`, { className: \`text-[11.5px] font-bold text-slate-600\`, children: \`前置验证状态 (能否访问 / 是否需要采集)\` }),
                    (0, $.jsxs)(\`select\`, {
                      value: selectedVerifyStatus,
                      onChange: (e) => setSelectedVerifyStatus(e.target.value),
                      className: \`w-full h-8.5 px-2.5 rounded-lg border border-slate-200 text-xs text-slate-800 bg-slate-50/50 focus:bg-white focus:border-[#0066FF] outline-none cursor-pointer\`,
                      children: [
                        (0, $.jsx)(\`option\`, { value: \`all\`, children: \`全部验证状态\` }),
                        (0, $.jsx)(\`option\`, { value: \`passed\`, children: \`✅ 准予采集 (合规核心资讯)\` }),
                        (0, $.jsx)(\`option\`, { value: \`rejected_ecommerce\`, children: \`🛒 跳过采集 (电商商城无需采集)\` }),
                        (0, $.jsx)(\`option\`, { value: \`blocked_illegal\`, children: \`🚫 严禁采集 (涉黄赌毒永久阻断)\` }),
                        (0, $.jsx)(\`option\`, { value: \`unreachable\`, children: \`❌ 无法访问 (网络故障/超时)\` }),
                      ],
                    }),
                  ],
                }),
                // Depth Filter
                (0, $.jsxs)(\`div\`, {
                  className: \`flex flex-col gap-1\`,
                  children: [
                    (0, $.jsx)(\`label\`, { className: \`text-[11.5px] font-bold text-slate-600\`, children: \`采集层数 (最大7层 / 默认3层)\` }),
                    (0, $.jsxs)(\`select\`, {
                      value: selectedDepth,
                      onChange: (e) => setSelectedDepth(e.target.value),
                      className: \`w-full h-8.5 px-2.5 rounded-lg border border-slate-200 text-xs text-slate-800 bg-slate-50/50 focus:bg-white focus:border-[#0066FF] outline-none cursor-pointer\`,
                      children: [
                        (0, $.jsx)(\`option\`, { value: \`all\`, children: \`全部层数\` }),
                        (0, $.jsx)(\`option\`, { value: \`1\`, children: \`Depth 1 层 (一级频道)\` }),
                        (0, $.jsx)(\`option\`, { value: \`2\`, children: \`Depth 2 层 (二级专栏)\` }),
                        (0, $.jsx)(\`option\`, { value: \`3\`, children: \`Depth 3 层 (正文详情 · 默认)\` }),
                        (0, $.jsx)(\`option\`, { value: \`4\`, children: \`Depth 4 层 (关联公报)\` }),
                        (0, $.jsx)(\`option\`, { value: \`5\`, children: \`Depth 5 层 (衍生拓展)\` }),
                        (0, $.jsx)(\`option\`, { value: \`6\`, children: \`Depth 6 层 (引文追踪)\` }),
                        (0, $.jsx)(\`option\`, { value: \`7\`, children: \`Depth 7 层 (极限深潜 · 上限)\` }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),

        // Main Ledger Data Table
        (0, $.jsxs)(\`div\`, {
          className: \`bg-white rounded-xl border border-slate-200 shadow-2xs overflow-hidden\`,
          children: [
            (0, $.jsxs)(\`div\`, {
              className: \`p-4 bg-slate-50/80 border-b border-slate-200 flex items-center justify-between\`,
              children: [
                (0, $.jsxs)(\`div\`, {
                  className: \`flex items-center gap-2\`,
                  children: [
                    (0, $.jsx)(be, { className: \`w-4 h-4 text-[#0066FF]\` }),
                    (0, $.jsx)(\`span\`, { className: \`text-xs font-black text-slate-900\`, children: \`深度采集网站台账矩阵\` }),
                    (0, $.jsxs)(\`span\`, {
                      className: \`text-[11px] font-mono px-2 py-0.2 rounded bg-blue-100 text-[#0066FF] font-bold\`,
                      children: [\`当前筛选 \`, filteredWebsites.length, \` / \`, websites.length, \` 个网站\`],
                    }),
                  ],
                }),
                (0, $.jsxs)(\`div\`, {
                  className: \`text-xs text-slate-500 font-medium\`,
                  children: [
                    (0, $.jsx)(\`span\`, { className: \`text-emerald-700 font-bold\`, children: \`● 准予采集: \${passedCount}\` }),
                    (0, $.jsx)(\`span\`, { className: \`mx-2 text-slate-300\`, children: \`|\` }),
                    (0, $.jsx)(\`span\`, { className: \`text-amber-700 font-bold\`, children: \`● 电商跳过: \${ecommerceCount}\` }),
                    (0, $.jsx)(\`span\`, { className: \`mx-2 text-slate-300\`, children: \`|\` }),
                    (0, $.jsx)(\`span\`, { className: \`text-rose-700 font-bold\`, children: \`● 涉黄赌毒阻断: \${illegalCount}\` }),
                  ],
                }),
              ],
            }),
            (0, $.jsx)(\`div\`, {
              className: \`overflow-x-auto\`,
              children: (0, $.jsxs)(\`table\`, {
                className: \`w-full text-left border-collapse text-xs\`,
                children: [
                  (0, $.jsx)(\`thead\`, {
                    className: \`bg-slate-100/90 border-b border-slate-200 text-slate-700 font-bold text-[11.5px]\`,
                    children: (0, $.jsxs)(\`tr\`, {
                      children: [
                        (0, $.jsx)(\`th\`, { className: \`py-3 px-3.5 w-12 text-center\`, children: \`序号\` }),
                        (0, $.jsx)(\`th\`, { className: \`py-3 px-3.5 w-60\`, children: \`网站信息 (名称 / 域名 / 种子入口)\` }),
                        (0, $.jsx)(\`th\`, { className: \`py-3 px-3.5 w-48\`, children: \`所属服务与采集频率\` }),
                        (0, $.jsx)(\`th\`, { className: \`py-3 px-3.5 w-72\`, children: \`采集前验证程序 (能否访问 / 是否需要采集)\` }),
                        (0, $.jsx)(\`th\`, { className: \`py-3 px-3.5 w-44 text-center\`, children: \`采集层数 (可编辑调整)\` }),
                        (0, $.jsx)(\`th\`, { className: \`py-3 px-3.5\`, children: \`提取详情页链接规则 (可配置)\` }),
                        (0, $.jsx)(\`th\`, { className: \`py-3 px-3.5 w-28 text-center\`, children: \`操作\` }),
                      ],
                    }),
                  }),
                  (0, $.jsx)(\`tbody\`, {
                    className: \`divide-y divide-slate-100\`,
                    children: filteredWebsites.map((site, idx) => {
                      let ver = site.verification || {};
                      let isVerifying = verifyingSiteId === site.id;
                      return (0, $.jsxs)(\`tr\`, {
                        className: \`hover:bg-slate-50/80 transition-colors \${ver.status === \`blocked_illegal\` ? \`bg-rose-50/20\` : ver.status === \`rejected_ecommerce\` ? \`bg-amber-50/15\` : \`\`}\`,
                        children: [
                          (0, $.jsx)(\`td\`, {
                            className: \`py-3 px-3.5 text-center font-mono text-slate-400 text-[11px]\`,
                            children: idx + 1,
                          }),
                          // Website Info
                          (0, $.jsxs)(\`td\`, {
                            className: \`py-3 px-3.5\`,
                            children: [
                              (0, $.jsxs)(\`div\`, {
                                className: \`flex items-center gap-1.5\`,
                                children: [
                                  (0, $.jsx)(\`span\`, {
                                    className: \`font-bold text-slate-900\`,
                                    children: site.name,
                                  }),
                                  (0, $.jsx)(\`span\`, {
                                    className: \`text-[10px] px-1.5 py-0.2 rounded font-medium border \${ver.status === \`passed\` ? \`bg-emerald-50 text-emerald-700 border-emerald-200\` : ver.status === \`blocked_illegal\` ? \`bg-rose-50 text-rose-700 border-rose-200\` : ver.status === \`rejected_ecommerce\` ? \`bg-amber-50 text-amber-700 border-amber-200\` : \`bg-slate-100 text-slate-600 border-slate-200\`}\`,
                                    children: ver.siteCategory || \`综合站点\`,
                                  }),
                                ],
                              }),
                              (0, $.jsx)(\`div\`, {
                                className: \`font-mono text-[11px] text-[#0066FF] hover:underline cursor-pointer truncate max-w-xs mt-0.5\`,
                                title: site.url,
                                children: site.url,
                              }),
                              (0, $.jsx)(\`div\`, {
                                className: \`font-mono text-[10px] text-slate-400\`,
                                children: site.domain,
                              }),
                            ],
                          }),
                          // Service & Frequency
                          (0, $.jsxs)(\`td\`, {
                            className: \`py-3 px-3.5\`,
                            children: [
                              (0, $.jsx)(\`div\`, {
                                className: \`font-semibold text-slate-800 text-[11.5px]\`,
                                children: site.svcName,
                              }),
                              (0, $.jsxs)(\`div\`, {
                                className: \`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10.5px] font-mono font-bold bg-blue-50 text-[#0066FF] border border-blue-200 mt-1\`,
                                children: [
                                  (0, $.jsx)(re, { className: \`w-3 h-3\` }),
                                  \`调度频率: \${site.freq}/轮\`,
                                ],
                              }),
                            ],
                          }),
                          // Pre-crawl Verification Result
                          (0, $.jsxs)(\`td\`, {
                            className: \`py-3 px-3.5\`,
                            children: [
                              (0, $.jsxs)(\`div\`, {
                                className: \`flex items-center gap-1.5 flex-wrap mb-1\`,
                                children: [
                                  // Accessibility Badge
                                  ver.accessible
                                    ? (0, $.jsxs)(\`span\`, {
                                        className: \`inline-flex items-center gap-1 px-1.5 py-0.2 rounded text-[10.5px] font-mono font-bold bg-emerald-100 text-emerald-800 border border-emerald-300\`,
                                        children: [
                                          (0, $.jsx)(\`span\`, { className: \`w-1.5 h-1.5 rounded-full bg-emerald-600\` }),
                                          \`可访问 (\${ver.httpStatus} \${ver.latency})\`,
                                        ],
                                      })
                                    : (0, $.jsxs)(\`span\`, {
                                        className: \`inline-flex items-center gap-1 px-1.5 py-0.2 rounded text-[10.5px] font-mono font-bold bg-red-100 text-red-800 border border-red-300\`,
                                        children: [
                                          (0, $.jsx)(\`span\`, { className: \`w-1.5 h-1.5 rounded-full bg-red-600\` }),
                                          \`无法访问 (\${ver.httpStatus})\`,
                                        ],
                                      }),
                                  // Crawl Necessity Badge
                                  ver.status === \`passed\`
                                    ? (0, $.jsx)(\`span\`, {
                                        className: \`px-1.5 py-0.2 rounded text-[10.5px] font-bold bg-emerald-600 text-white shadow-2xs\`,
                                        children: \`准予采集\`,
                                      })
                                    : ver.status === \`rejected_ecommerce\`
                                    ? (0, $.jsx)(\`span\`, {
                                        className: \`px-1.5 py-0.2 rounded text-[10.5px] font-bold bg-amber-500 text-white shadow-2xs\`,
                                        children: \`电商无需采集\`,
                                      })
                                    : ver.status === \`blocked_illegal\`
                                    ? (0, $.jsx)(\`span\`, {
                                        className: \`px-1.5 py-0.2 rounded text-[10.5px] font-bold bg-rose-600 text-white shadow-2xs\`,
                                        children: \`涉黄赌毒严禁采集\`,
                                      })
                                    : (0, $.jsx)(\`span\`, {
                                        className: \`px-1.5 py-0.2 rounded text-[10.5px] font-bold bg-slate-500 text-white shadow-2xs\`,
                                        children: \`网络故障跳过\`,
                                      }),
                                ],
                              }),
                              (0, $.jsxs)(\`div\`, {
                                className: \`text-[11px] text-slate-600 line-clamp-2 leading-relaxed bg-slate-50 p-1.5 rounded border border-slate-200/70 cursor-pointer hover:bg-slate-100 transition-colors\`,
                                onClick: () => setActiveAuditDetail(site),
                                title: \`点击查看完整审计报告: \${ver.auditReason}\`,
                                children: [
                                  (0, $.jsx)(\`span\`, { className: \`font-semibold text-slate-700\`, children: \`审计结论: \` }),
                                  ver.auditReason || \`合规探测通过\`,
                                ],
                              }),
                            ],
                          }),
                          // Layer Depth (Editable, Max 7, Default 3)
                          (0, $.jsx)(\`td\`, {
                            className: \`py-3 px-3.5 text-center\`,
                            children: (0, $.jsxs)(\`div\`, {
                              className: \`inline-flex flex-col items-center gap-1\`,
                              children: [
                                (0, $.jsxs)(\`div\`, {
                                  className: \`flex items-center gap-1 bg-slate-100 p-0.5 rounded-lg border border-slate-200\`,
                                  children: [
                                    (0, $.jsx)(\`button\`, {
                                      type: \`button\`,
                                      onClick: () => handleUpdateDepth(site.id, Math.max(1, site.maxDepth - 1)),
                                      className: \`w-6 h-6 rounded bg-white hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center justify-center transition-all cursor-pointer shadow-2xs\`,
                                      title: \`减少一层\`,
                                      children: \`-\`,
                                    }),
                                    (0, $.jsx)(\`input\`, {
                                      type: \`number\`,
                                      min: 1,
                                      max: 7,
                                      value: site.maxDepth,
                                      onChange: (e) => handleUpdateDepth(site.id, e.target.value),
                                      className: \`w-10 h-6 px-1 text-center font-mono font-black text-xs text-emerald-800 bg-white rounded border border-emerald-300 outline-none focus:ring-1 focus:ring-emerald-500\`,
                                    }),
                                    (0, $.jsx)(\`button\`, {
                                      type: \`button\`,
                                      onClick: () => handleUpdateDepth(site.id, Math.min(7, site.maxDepth + 1)),
                                      className: \`w-6 h-6 rounded bg-white hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center justify-center transition-all cursor-pointer shadow-2xs\`,
                                      title: \`增加一层 (最大7层)\`,
                                      children: \`+\`,
                                    }),
                                  ],
                                }),
                                (0, $.jsx)(\`span\`, {
                                  className: \`text-[10px] font-mono font-medium text-slate-500\`,
                                  children: site.maxDepth === 3 ? \`Depth 3 (默认正文)\` : site.maxDepth === 7 ? \`Depth 7 (极限上限)\` : \`Depth \${site.maxDepth} 层\`,
                                }),
                              ],
                            }),
                          }),
                          // Detail Page Extraction Rules
                          (0, $.jsxs)(\`td\`, {
                            className: \`py-3 px-3.5\`,
                            children: [
                              (0, $.jsxs)(\`div\`, {
                                className: \`flex items-center justify-between gap-2 mb-1\`,
                                children: [
                                  (0, $.jsx)(\`span\`, {
                                    className: \`px-1.5 py-0.2 rounded font-mono text-[10.5px] font-bold bg-purple-100 text-purple-800 border border-purple-200\`,
                                    children: site.detailExtractRules?.ruleType === \`regex\` ? \`URL 正则提取式\` : \`CSS选择器\`,
                                  }),
                                  (0, $.jsxs)(\`button\`, {
                                    type: \`button\`,
                                    onClick: () => {
                                      setEditingRuleSite(JSON.parse(JSON.stringify(site)));
                                      setSandboxResult(null);
                                      setTestSandboxUrl(site.url + \`/article/20260930/123456.html\`);
                                    },
                                    className: \`px-2 py-0.5 rounded text-[10.5px] font-bold bg-[#0066FF]/10 text-[#0066FF] hover:bg-[#0066FF] hover:text-white transition-all cursor-pointer\`,
                                    children: [
                                      (0, $.jsx)(Ue, { className: \`w-3 h-3 inline mr-1\` }),
                                      \`配置规则\`,
                                    ],
                                  }),
                                ],
                              }),
                              (0, $.jsx)(\`div\`, {
                                className: \`font-mono text-[10.5px] text-slate-700 bg-slate-50 p-1.5 rounded border border-slate-200/80 truncate max-w-xs\`,
                                title: site.detailExtractRules?.regexPattern || \`全量链接匹配\`,
                                children: site.detailExtractRules?.regexPattern || \`全量详情页匹配\`,
                              }),
                              site.detailExtractRules?.excludePattern && (0, $.jsxs)(\`div\`, {
                                className: \`font-mono text-[9.5px] text-rose-600 mt-0.5 truncate max-w-xs\`,
                                children: [\`排除: \`, site.detailExtractRules.excludePattern],
                              }),
                            ],
                          }),
                          // Actions
                          (0, $.jsx)(\`td\`, {
                            className: \`py-3 px-3.5 text-center\`,
                            children: (0, $.jsxs)(\`div\`, {
                              className: \`inline-flex items-center gap-1\`,
                              children: [
                                (0, $.jsx)(\`button\`, {
                                  type: \`button\`,
                                  onClick: () => handleVerifySingle(site),
                                  disabled: isVerifying,
                                  className: \`p-1.5 rounded-lg text-emerald-700 hover:bg-emerald-50 border border-emerald-200 transition-all cursor-pointer disabled:opacity-50\`,
                                  title: \`执行前置连通性与合规探测\`,
                                  children: (0, $.jsx)(Ie, { className: \`w-3.5 h-3.5 \${isVerifying ? \`animate-spin\` : \`\`}\` }),
                                }),
                                (0, $.jsx)(\`button\`, {
                                  type: \`button\`,
                                  onClick: () => {
                                    setEditingRuleSite(JSON.parse(JSON.stringify(site)));
                                    setSandboxResult(null);
                                    setTestSandboxUrl(site.url + \`/article/20260930/123456.html\`);
                                  },
                                  className: \`p-1.5 rounded-lg text-[#0066FF] hover:bg-blue-50 border border-blue-200 transition-all cursor-pointer\`,
                                  title: \`配置详情页链接规则\`,
                                  children: (0, $.jsx)(qe, { className: \`w-3.5 h-3.5\` }),
                                }),
                                (0, $.jsx)(\`button\`, {
                                  type: \`button\`,
                                  onClick: () => {
                                    if (confirm(\`确定从台账中移除网站【\${site.name}】吗？\`)) {
                                      let updated = websites.filter(w => w.id !== site.id);
                                      setWebsites(updated);
                                      onUpdateWebsites && onUpdateWebsites(updated);
                                      onAddToast && onAddToast(\`已移除网站【\${site.name}】\`, \`info\`);
                                    }
                                  },
                                  className: \`p-1.5 rounded-lg text-rose-600 hover:bg-rose-50 border border-rose-200 transition-all cursor-pointer\`,
                                  title: \`移除该站点\`,
                                  children: (0, $.jsx)(at, { className: \`w-3.5 h-3.5\` }),
                                }),
                              ],
                            }),
                          }),
                        ],
                      }, site.id);
                    }),
                  }),
                ],
              }),
            }),
          ],
        }),

        // Modal: Detail Page Extraction Rules Configuration with Live Sandbox
        editingRuleSite && (0, $.jsx)(\`div\`, {
          className: \`fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4 overflow-y-auto\`,
          children: (0, $.jsxs)(\`div\`, {
            className: \`bg-white w-full max-w-3xl rounded-2xl shadow-2xl border border-slate-200 flex flex-col max-h-[90vh] overflow-hidden animate-in zoom-in-95 duration-200\`,
            children: [
              // Modal Header
              (0, $.jsxs)(\`div\`, {
                className: \`px-6 py-4 bg-gradient-to-r from-purple-900 to-slate-900 text-white flex items-center justify-between shrink-0\`,
                children: [
                  (0, $.jsxs)(\`div\`, {
                    className: \`flex items-center gap-3\`,
                    children: [
                      (0, $.jsx)(\`div\`, {
                        className: \`w-9 h-9 rounded-xl bg-purple-500/20 border border-purple-400/30 flex items-center justify-center text-purple-300\`,
                        children: (0, $.jsx)(qe, { className: \`w-4 h-4\` }),
                      }),
                      (0, $.jsxs)(\`div\`, {
                        children: [
                          (0, $.jsxs)(\`h3\`, {
                            className: \`text-sm font-black flex items-center gap-2\`,
                            children: [
                              \`提取详情页面链接规则配置与沙箱测试\`,
                              (0, $.jsx)(\`span\`, { className: \`text-xs font-normal text-purple-200\`, children: editingRuleSite.name }),
                            ],
                          }),
                          (0, $.jsx)(\`p\`, {
                            className: \`text-[11px] text-purple-300/80 font-mono mt-0.5\`,
                            children: editingRuleSite.domain,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, $.jsx)(\`button\`, {
                    type: \`button\`,
                    onClick: () => setEditingRuleSite(null),
                    className: \`w-7 h-7 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center cursor-pointer transition-all\`,
                    children: (0, $.jsx)(Q, { className: \`w-4 h-4\` }),
                  }),
                ],
              }),

              // Modal Body
              (0, $.jsxs)(\`div\`, {
                className: \`p-6 space-y-4.5 overflow-y-auto flex-1 text-xs\`,
                children: [
                  // Rule Type Switcher
                  (0, $.jsxs)(\`div\`, {
                    className: \`flex flex-col gap-1.5\`,
                    children: [
                      (0, $.jsx)(\`label\`, { className: \`font-bold text-slate-700\`, children: \`详情页链接匹配策略 (Extraction Strategy)\` }),
                      (0, $.jsxs)(\`div\`, {
                        className: \`grid grid-cols-3 gap-2\`,
                        children: [
                          { key: \`regex\`, label: \`URL 正则表达式匹配 (推荐)\`, desc: \`基于标准 URL 格式精确过滤文章页\` },
                          { key: \`selector\`, label: \`DOM 选择器抓取 (CSS Selector)\`, desc: \`提取页面内特定 a 标签的 href\` },
                          { key: \`xpath\`, label: \`XPath 节点路径匹配\`, desc: \`基于 XML/HTML 结构路径抽取\` },
                        ].map(st => (0, $.jsxs)(\`div\`, {
                          onClick: () => setEditingRuleSite({
                            ...editingRuleSite,
                            detailExtractRules: { ...editingRuleSite.detailExtractRules, ruleType: st.key }
                          }),
                          className: \`p-2.5 rounded-xl border cursor-pointer transition-all \${editingRuleSite.detailExtractRules?.ruleType === st.key ? \`bg-purple-50 border-purple-500 ring-1 ring-purple-500/20 text-purple-950 font-bold\` : \`bg-slate-50/70 border-slate-200 text-slate-600\`}\`,
                          children: [
                            (0, $.jsx)(\`div\`, { className: \`font-bold text-[11.5px]\`, children: st.label }),
                            (0, $.jsx)(\`div\`, { className: \`text-[10px] opacity-75 mt-0.5\`, children: st.desc }),
                          ],
                        }, st.key)),
                      }),
                    ],
                  }),

                  // Regex Input
                  (0, $.jsxs)(\`div\`, {
                    className: \`flex flex-col gap-1.5\`,
                    children: [
                      (0, $.jsxs)(\`div\`, {
                        className: \`flex items-center justify-between\`,
                        children: [
                          (0, $.jsx)(\`label\`, { className: \`font-bold text-slate-700\`, children: \`详情页候选 URL 正则表达式 (Candidate URL Pattern)\` }),
                          (0, $.jsxs)(\`div\`, {
                            className: \`flex items-center gap-1.5\`,
                            children: [
                              (0, $.jsx)(\`span\`, { className: \`text-[10.5px] text-slate-400\`, children: \`常用模板:\` }),
                              (0, $.jsx)(\`button\`, {
                                type: \`button\`,
                                onClick: () => setEditingRuleSite({
                                  ...editingRuleSite,
                                  detailExtractRules: {
                                    ...editingRuleSite.detailExtractRules,
                                    regexPattern: \`^https?://.*\` + editingRuleSite.domain.replace(/\\\\./g, \`\\\\.\`) + \`/(article|news|detail)/\\\\d+\\\\.html\`
                                  }
                                }),
                                className: \`px-1.5 py-0.2 rounded text-[10px] bg-slate-100 hover:bg-slate-200 text-slate-700 font-mono cursor-pointer\`,
                                children: \`/article/\\d+.html\`,
                              }),
                              (0, $.jsx)(\`button\`, {
                                type: \`button\`,
                                onClick: () => setEditingRuleSite({
                                  ...editingRuleSite,
                                  detailExtractRules: {
                                    ...editingRuleSite.detailExtractRules,
                                    regexPattern: \`^https?://.*\` + editingRuleSite.domain.replace(/\\\\./g, \`\\\\.\`) + \`/[a-z0-9_-]+/\\\\d{8}/\\\\d+\\\\.html\`
                                  }
                                }),
                                className: \`px-1.5 py-0.2 rounded text-[10px] bg-slate-100 hover:bg-slate-200 text-slate-700 font-mono cursor-pointer\`,
                                children: \`/20260930/\\d+.html\`,
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, $.jsx)(\`input\`, {
                        type: \`text\`,
                        value: editingRuleSite.detailExtractRules?.regexPattern || \`\`,
                        onChange: (e) => setEditingRuleSite({
                          ...editingRuleSite,
                          detailExtractRules: { ...editingRuleSite.detailExtractRules, regexPattern: e.target.value }
                        }),
                        placeholder: \`例: ^https?://.*domain\\\\.com/(article|news|detail)/\\\\d+\\\\.html\`,
                        className: \`h-9 px-3 border border-slate-300 rounded-lg font-mono text-xs font-bold text-slate-800 bg-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/12 outline-none\`,
                      }),
                    ],
                  }),

                  // Path Keywords & Exclusion
                  (0, $.jsxs)(\`div\`, {
                    className: \`grid grid-cols-1 sm:grid-cols-2 gap-3\`,
                    children: [
                      (0, $.jsxs)(\`div\", {
                        className: \`flex flex-col gap-1\`,
                        children: [
                          (0, $.jsx)(\`label\`, { className: \`font-bold text-slate-700\`, children: \`路径白名单特征词 (Path Whitelist)\` }),
                          (0, $.jsx)(\`input\`, {
                            type: \`text\`,
                            value: editingRuleSite.detailExtractRules?.pathKeywords || \`\`,
                            onChange: (e) => setEditingRuleSite({
                              ...editingRuleSite,
                              detailExtractRules: { ...editingRuleSite.detailExtractRules, pathKeywords: e.target.value }
                            }),
                            placeholder: \`例: /article/, /news/, .html\`,
                            className: \`h-8.5 px-3 border border-slate-300 rounded-lg font-mono text-xs text-slate-800 bg-white focus:border-purple-500 outline-none\`,
                          }),
                        ],
                      }),
                      (0, $.jsxs)(\`div\`, {
                        className: \`flex flex-col gap-1\`,
                        children: [
                          (0, $.jsx)(\`label\`, { className: \`font-bold text-slate-700\`, children: \`排除非正文过滤正则 (Exclude Pattern)\` }),
                          (0, $.jsx)(\`input\`, {
                            type: \`text\`,
                            value: editingRuleSite.detailExtractRules?.excludePattern || \`\`,
                            onChange: (e) => setEditingRuleSite({
                              ...editingRuleSite,
                              detailExtractRules: { ...editingRuleSite.detailExtractRules, excludePattern: e.target.value }
                            }),
                            placeholder: \`例: (cart|order|login|register|about|contact)\`,
                            className: \`h-8.5 px-3 border border-slate-300 rounded-lg font-mono text-xs text-rose-700 bg-rose-50/20 focus:border-rose-500 outline-none\`,
                          }),
                        ],
                      }),
                    ],
                  }),

                  // Live Sandbox Testing Panel
                  (0, $.jsxs)(\`div\`, {
                    className: \`p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3\`,
                    children: [
                      (0, $.jsxs)(\`div\`, {
                        className: \`flex items-center justify-between\`,
                        children: [
                          (0, $.jsxs)(\`span\`, {
                            className: \`font-bold text-slate-800 flex items-center gap-1.5\`,
                            children: [
                              (0, $.jsx)(Ne, { className: \`w-3.5 h-3.5 text-purple-600\` }),
                              \`即时规则沙箱测试 (Live Rule Sandbox Tester)\`,
                            ],
                          }),
                          (0, $.jsx)(\`span\`, {
                            className: \`text-[10.5px] text-slate-400 font-mono\`,
                            children: \`输入任意目标 URL 测试是否命中详情页\`,
                          }),
                        ],
                      }),
                      (0, $.jsxs)(\`div\`, {
                        className: \`flex items-center gap-2\`,
                        children: [
                          (0, $.jsx)(\`input\`, {
                            type: \`text\`,
                            value: testSandboxUrl,
                            onChange: (e) => setTestSandboxUrl(e.target.value),
                            placeholder: \`输入待验证的测试 URL...\`,
                            className: \`flex-1 h-8.5 px-3 border border-slate-300 rounded-lg font-mono text-xs text-slate-800 bg-white focus:border-purple-500 outline-none\`,
                          }),
                          (0, $.jsxs)(\`button\`, {
                            type: \`button\`,
                            onClick: handleTestSandbox,
                            className: \`h-8.5 px-4 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs inline-flex items-center gap-1.5 cursor-pointer shadow-xs\`,
                            children: [
                              (0, $.jsx)(Ie, { className: \`w-3 h-3\` }),
                              \`测试匹配\`,
                            ],
                          }),
                        ],
                      }),
                      sandboxResult && (0, $.jsxs)(\`div\`, {
                        className: \`p-3 rounded-lg border \${sandboxResult.success ? \`bg-emerald-50/80 border-emerald-300 text-emerald-950\` : \`bg-rose-50/80 border-rose-300 text-rose-950\`}\`,
                        children: [
                          (0, $.jsxs)(\`div\`, {
                            className: \`flex items-center justify-between font-bold\`,
                            children: [
                              (0, $.jsxs)(\`span\`, {
                                className: \`flex items-center gap-1.5\`,
                                children: [
                                  sandboxResult.success ? (0, $.jsx)(P, { className: \`w-4 h-4 text-emerald-600\` }) : (0, $.jsx)(z, { className: \`w-4 h-4 text-rose-600\` }),
                                  sandboxResult.matchedType,
                                ],
                              }),
                              (0, $.jsx)(\`span\`, {
                                className: \`font-mono text-[10.5px] px-2 py-0.5 rounded \${sandboxResult.success ? \`bg-emerald-200 text-emerald-900\` : \`bg-rose-200 text-rose-900\`}\`,
                                children: sandboxResult.success ? \`匹配成功 200 OK\` : \`过滤排除\`,
                              }),
                            ],
                          }),
                          sandboxResult.extractedFields && (0, $.jsxs)(\`div\`, {
                            className: \`mt-2 pt-2 border-t border-emerald-200/80 grid grid-cols-2 gap-2 text-[11px] font-mono\`,
                            children: [
                              (0, $.jsxs)(\`div\`, { children: [\`候选标题: \`, sandboxResult.extractedFields.titleCandidate] }),
                              (0, $.jsxs)(\`div\`, { children: [\`候选发布时间: \`, sandboxResult.extractedFields.publishTimeCandidate] }),
                              (0, $.jsxs)(\`div\`, { children: [\`下钻层级: \`, sandboxResult.extractedFields.depthLevel] }),
                              (0, $.jsxs)(\`div\`, { children: [\`提取详情候选链: \`, sandboxResult.extractedFields.extractedLinksCount, \` 条\`] }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),

              // Modal Footer
              (0, $.jsxs)(\`div\`, {
                className: \`px-6 py-3.5 bg-slate-50 border-t border-slate-200 flex items-center justify-between shrink-0\`,
                children: [
                  (0, $.jsx)(\`span\`, { className: \`text-xs text-slate-500\`, children: \`保存后将自动同步至深度递归爬虫调度引擎\` }),
                  (0, $.jsxs)(\`div\`, {
                    className: \`flex items-center gap-2\`,
                    children: [
                      (0, $.jsx)(\`button\`, {
                        type: \`button\`,
                        onClick: () => setEditingRuleSite(null),
                        className: \`px-4 py-2 rounded-lg border border-slate-300 text-xs font-bold text-slate-700 hover:bg-slate-100 cursor-pointer\`,
                        children: \`取消\`,
                      }),
                      (0, $.jsx)(\`button\`, {
                        type: \`button\`,
                        onClick: () => handleSaveRule(editingRuleSite),
                        className: \`px-5 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold shadow-xs cursor-pointer\`,
                        children: \`保存规则配置\`,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),

        // Modal: View Full Audit Details
        activeAuditDetail && (0, $.jsx)(\`div\`, {
          className: \`fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4 overflow-y-auto\`,
          children: (0, $.jsxs)(\`div\`, {
            className: \`bg-white w-full max-w-lg rounded-2xl shadow-2xl border border-slate-200 p-6 space-y-4 animate-in zoom-in-95 duration-200\`,
            children: [
              (0, $.jsxs)(\`div\`, {
                className: \`flex items-center justify-between border-b border-slate-100 pb-3\`,
                children: [
                  (0, $.jsxs)(\`h3\`, {
                    className: \`text-sm font-black text-slate-900 flex items-center gap-2\`,
                    children: [
                      (0, $.jsx)(be, { className: \`w-4 h-4 text-emerald-600\` }),
                      \`采集前验证程序 · 详细审计报告\`,
                    ],
                  }),
                  (0, $.jsx)(\`button\`, {
                    type: \`button\`,
                    onClick: () => setActiveAuditDetail(null),
                    className: \`w-6 h-6 rounded-md hover:bg-slate-100 flex items-center justify-center text-slate-500 cursor-pointer\`,
                    children: (0, $.jsx)(Q, { className: \`w-4 h-4\` }),
                  }),
                ],
              }),
              (0, $.jsxs)(\`div\`, {
                className: \`space-y-3 text-xs\`,
                children: [
                  (0, $.jsxs)(\`div\`, {
                    className: \`p-3 bg-slate-50 rounded-xl space-y-1.5\`,
                    children: [
                      (0, $.jsxs)(\`div\`, { className: \`font-bold text-slate-900 text-sm\`, children: activeAuditDetail.name }),
                      (0, $.jsxs)(\`div\`, { className: \`font-mono text-slate-500\`, children: [\`域名: \`, activeAuditDetail.domain] }),
                      (0, $.jsxs)(\`div\`, { className: \`font-mono text-slate-500 truncate\`, children: [\`入口: \`, activeAuditDetail.url] }),
                    ],
                  }),
                  (0, $.jsxs)(\`div\`, {
                    className: \`grid grid-cols-2 gap-2 text-xs\`,
                    children: [
                      (0, $.jsxs)(\`div\`, {
                        className: \`p-2.5 rounded-lg border border-slate-200 bg-slate-50/50\`,
                        children: [
                          (0, $.jsx)(\`div\`, { className: \`text-slate-400 text-[11px]\`, children: \`能否访问 (连通性)\` }),
                          (0, $.jsxs)(\`div\`, {
                            className: \`font-bold font-mono mt-0.5 \${activeAuditDetail.verification?.accessible ? \`text-emerald-700\` : \`text-rose-700\`}\`,
                            children: [
                              activeAuditDetail.verification?.accessible ? \`可访问 (200 OK)\` : \`不可达 (\${activeAuditDetail.verification?.httpStatus})\`,
                              \` · \`,
                              activeAuditDetail.verification?.latency,
                            ],
                          }),
                        ],
                      }),
                      (0, $.jsxs)(\`div\`, {
                        className: \`p-2.5 rounded-lg border border-slate-200 bg-slate-50/50\`,
                        children: [
                          (0, $.jsx)(\`div\`, { className: \`text-slate-400 text-[11px]\`, children: \`是否需要采集 (内容合规)\` }),
                          (0, $.jsx)(\`div\`, {
                            className: \`font-bold mt-0.5 \${activeAuditDetail.verification?.needCrawl ? \`text-emerald-700\` : \`text-amber-700\`}\`,
                            children: activeAuditDetail.verification?.needCrawl ? \`准予采集 (合规资讯)\` : \`跳过/阻断无需采集\`,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, $.jsxs)(\`div\`, {
                    className: \`p-3 rounded-xl border border-slate-200 bg-slate-50/80 space-y-1\`,
                    children: [
                      (0, $.jsx)(\`div\`, { className: \`font-bold text-slate-700\`, children: \`详细审计与拦截说明:\` }),
                      (0, $.jsx)(\`p\`, {
                        className: \`text-slate-600 leading-relaxed\`,
                        children: activeAuditDetail.verification?.auditReason,
                      }),
                    ],
                  }),
                  (0, $.jsxs)(\`div\`, {
                    className: \`text-[11px] text-slate-400 font-mono text-right\`,
                    children: [\`探测时间: \`, activeAuditDetail.verification?.verifiedAt],
                  }),
                ],
              }),
              (0, $.jsx)(\`div\`, {
                className: \`pt-2 flex justify-end\`,
                children: (0, $.jsx)(\`button\`, {
                  type: \`button\`,
                  onClick: () => setActiveAuditDetail(null),
                  className: \`px-4 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs cursor-pointer\`,
                  children: \`关闭\`,
                }),
              }),
            ],
          }),
        }),

        // Modal: Add New Website to Ledger
        newSiteModalOpen && (0, $.jsx)(\`div\`, {
          className: \`fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4 overflow-y-auto\`,
          children: (0, $.jsxs)(\`div\`, {
            className: \`bg-white w-full max-w-xl rounded-2xl shadow-2xl border border-slate-200 p-6 space-y-4 animate-in zoom-in-95 duration-200\`,
            children: [
              (0, $.jsxs)(\`div\`, {
                className: \`flex items-center justify-between border-b border-slate-100 pb-3\`,
                children: [
                  (0, $.jsxs)(\`h3\`, {
                    className: \`text-sm font-black text-slate-900 flex items-center gap-2\`,
                    children: [
                      (0, $.jsx)(Pe, { className: \`w-4 h-4 text-[#0066FF]\` }),
                      \`录入新网站到深度采集台账\`,
                    ],
                  }),
                  (0, $.jsx)(\`button\`, {
                    type: \`button\`,
                    onClick: () => setNewSiteModalOpen(!1),
                    className: \`w-6 h-6 rounded-md hover:bg-slate-100 flex items-center justify-center text-slate-500 cursor-pointer\`,
                    children: (0, $.jsx)(Q, { className: \`w-4 h-4\` }),
                  }),
                ],
              }),
              (0, $.jsxs)(\`form\`, {
                onSubmit: (e) => {
                  e.preventDefault();
                  let fd = new FormData(e.currentTarget);
                  let name = fd.get(\`name\`);
                  let domain = fd.get(\`domain\`);
                  let url = fd.get(\`url\`);
                  let freq = fd.get(\`freq\`);
                  let depth = parseInt(fd.get(\`depth\`)) || 3;
                  if (depth > 7) depth = 7;
                  if (depth < 1) depth = 1;

                  let newSite = {
                    id: \`WEB-DP-\` + Date.now().toString().slice(-4),
                    svcId: \`SVC-P003\`,
                    svcName: \`深度采集 · \${freq}服务\`,
                    freq: freq,
                    name: name,
                    domain: domain,
                    url: url,
                    maxDepth: depth,
                    detailExtractRules: {
                      ruleType: \`regex\`,
                      regexPattern: \`^https?://.*\` + domain.replace(/\\\\./g, \`\\\\.\`) + \`/(article|news|detail)/\\\\d+\\\\.html\`,
                      pathKeywords: \`/article/, /detail/, .html\`,
                      cssSelector: \`a.news-title, .article-list a\`,
                      xpathSelector: \`//div[contains(@class,"article")]//a/@href\`,
                      excludePattern: \`(cart|order|login|register|about|contact)\`,
                    },
                    verification: {
                      status: \`passed\`,
                      accessible: !0,
                      httpStatus: 200,
                      latency: \`124ms\`,
                      needCrawl: !0,
                      siteCategory: \`合规资讯\`,
                      auditReason: \`录入即时前置探测正常(HTTP 200 124ms)，符合采集准入规范，准予入库深度采集。\`,
                      verifiedAt: \`刚刚\`,
                    },
                    status: \`crawling\`,
                    todayPages: 0,
                  };

                  let updated = [newSite, ...websites];
                  setWebsites(updated);
                  onUpdateWebsites && onUpdateWebsites(updated);
                  setNewSiteModalOpen(!1);
                  onAddToast && onAddToast(\`成功录入网站【\${name}】并完成前置合规探测！\`, \`success\`);
                },
                className: \`space-y-3.5 text-xs\`,
                children: [
                  (0, $.jsxs)(\`div\`, {
                    className: \`flex flex-col gap-1\`,
                    children: [
                      (0, $.jsx)(\`label\`, { className: \`font-bold text-slate-700\`, children: \`网站名称\` }),
                      (0, $.jsx)(\`input\`, {
                        name: \`name\`,
                        required: !0,
                        placeholder: \`例: 华夏时报深度智库网\`,
                        className: \`h-8.5 px-3 border border-slate-300 rounded-lg text-xs outline-none focus:border-[#0066FF]\`,
                      }),
                    ],
                  }),
                  (0, $.jsxs)(\`div\`, {
                    className: \`grid grid-cols-2 gap-3\`,
                    children: [
                      (0, $.jsxs)(\`div\`, {
                        className: \`flex flex-col gap-1\`,
                        children: [
                          (0, $.jsx)(\`label\`, { className: \`font-bold text-slate-700\`, children: \`主域名 (Domain)\` }),
                          (0, $.jsx)(\`input\`, {
                            name: \`domain\`,
                            required: !0,
                            placeholder: \`例: www.hxnews.cn\`,
                            className: \`h-8.5 px-3 border border-slate-300 rounded-lg text-xs font-mono outline-none focus:border-[#0066FF]\`,
                          }),
                        ],
                      }),
                      (0, $.jsxs)(\`div\`, {
                        className: \`flex flex-col gap-1\`,
                        children: [
                          (0, $.jsx)(\`label\", { className: \`font-bold text-slate-700\`, children: \`所属服务调度频率\` }),
                          (0, $.jsxs)(\`select\`, {
                            name: \`freq\`,
                            defaultValue: \`1h\`,
                            className: \`h-8.5 px-2 rounded-lg border border-slate-300 text-xs outline-none cursor-pointer\`,
                            children: [
                              (0, $.jsx)(\`option\`, { value: \`10min\`, children: \`10min/轮 (极速高频)\` }),
                              (0, $.jsx)(\`option\`, { value: \`30min\`, children: \`30min/轮 (重点时效)\` }),
                              (0, $.jsx)(\`option\`, { value: \`1h\`, children: \`1h/轮 (常规日常 · 推荐)\` }),
                              (0, $.jsx)(\`option\`, { value: \`2h\`, children: \`2h/轮 (行业综合)\` }),
                              (0, $.jsx)(\`option\`, { value: \`6h\`, children: \`6h/轮 (巡检普查)\` }),
                              (0, $.jsx)(\`option\`, { value: \`24h\`, children: \`24h/轮 (长周期归档)\` }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, $.jsxs)(\`div\`, {
                    className: \`flex flex-col gap-1\`,
                    children: [
                      (0, $.jsx)(\`label\`, { className: \`font-bold text-slate-700\`, children: \`种子入口 URL (Seed Entry)\` }),
                      (0, $.jsx)(\`input\`, {
                        name: \`url\`,
                        required: !0,
                        placeholder: \`例: https://www.hxnews.cn/finance/latest\`,
                        className: \`h-8.5 px-3 border border-slate-300 rounded-lg text-xs font-mono outline-none focus:border-[#0066FF]\`,
                      }),
                    ],
                  }),
                  (0, $.jsxs)(\`div\`, {
                    className: \`flex flex-col gap-1\`,
                    children: [
                      (0, $.jsxs)(\`div\`, {
                        className: \`flex items-center justify-between\`,
                        children: [
                          (0, $.jsx)(\`label\`, { className: \`font-bold text-slate-700\`, children: \`采集下钻层数 (默认 3 层，最大 7 层)\` }),
                          (0, $.jsx)(\`span\`, { className: \`text-[10.5px] text-emerald-700 font-bold\`, children: \`超 7 层自动阻断防止死循环\` }),
                        ],
                      }),
                      (0, $.jsx)(\`input\`, {
                        type: \`number\`,
                        name: \`depth\`,
                        min: 1,
                        max: 7,
                        defaultValue: 3,
                        className: \`h-8.5 px-3 border border-slate-300 rounded-lg text-xs font-mono font-bold text-emerald-800 outline-none focus:border-[#0066FF]\`,
                      }),
                    ],
                  }),
                  (0, $.jsxs)(\`div\`, {
                    className: \`pt-3 flex justify-end gap-2 border-t border-slate-100\`,
                    children: [
                      (0, $.jsx)(\`button\`, {
                        type: \`button\`,
                        onClick: () => setNewSiteModalOpen(!1),
                        className: \`px-4 py-2 rounded-lg border border-slate-300 text-xs font-bold text-slate-700 hover:bg-slate-100 cursor-pointer\`,
                        children: \`取消\`,
                      }),
                      (0, $.jsx)(\`button\`, {
                        type: \`submit\`,
                        className: \`px-5 py-2 rounded-lg bg-[#0066FF] hover:bg-[#0052cc] text-white text-xs font-bold shadow-xs cursor-pointer\`,
                        children: \`立即录入并验证\`,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    });
  };
`;

// Fix any mismatched quotes in componentScript if any:
componentScript = componentScript.replaceAll('\`div"', '\`div\`').replaceAll('\`span"', '\`span\`').replaceAll('\`label"', '\`label\`');

// Insert `Yn` definition before `vn = ({`
let vnAnchor = "vn = ({";
let vnIdx = code.indexOf(vnAnchor);
if (vnIdx !== -1) {
  code = code.slice(0, vnIdx) + componentScript + "\n\n  " + code.slice(vnIdx);
  console.log("Injected Yn component before vn = ({");
}

// Now let's hook up in Un() function:
// 1. Add state: `[deepWebsites, setDeepWebsites] = (0, C.useState)(defaultDeepLedgerWebsites);`
let stateAnchor = "[D, O] = (0, C.useState)(Vt),";
let newState = "[D, O] = (0, C.useState)(Vt),\n    [deepWebsites, setDeepWebsites] = (0, C.useState)(defaultDeepLedgerWebsites),";
if (code.includes(stateAnchor)) {
  code = code.replace(stateAnchor, newState);
  console.log("Added deepWebsites state in Un().");
}

// 2. Add `e === 'deep-ledger'` rendering in Un()
let renderAnchor = "e === `deep-dashboard` &&";
let newRender = `e === \`deep-ledger\` &&
                (0, $.jsx)(Yn, {
                  websites: deepWebsites,
                  services: n.filter((e) => Xt(e.method)),
                  onUpdateWebsites: setDeepWebsites,
                  onBackToServices: () => t(\`deep\`),
                  onNavigateToDashboard: () => t(\`deep-dashboard\`),
                  onOpenConfigModal: dt,
                  onAddToast: W,
                }),
              e === \`deep-dashboard\` &&`;

if (code.includes(renderAnchor)) {
  code = code.replace(renderAnchor, newRender);
  console.log("Added deep-ledger render block in Un().");
}

fs.writeFileSync('src/app-bundle.js', code, 'utf8');
console.log("Injected deep ledger successfully!");
