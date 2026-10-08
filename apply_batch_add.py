with open('src/app-bundle.js', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. State
old_state = "[phoneFormStatus, setPhoneFormStatus] = (0, C.useState)(`normal`);"
assert old_state in content, "old_state not found"
new_state = """[phoneFormStatus, setPhoneFormStatus] = (0, C.useState)(`normal`),
      [batchAddModalOpen, setBatchAddModalOpen] = (0, C.useState)(!1),
      [batchAccountsInput, setBatchAccountsInput] = (0, C.useState)(``),
      [batchSelectedPhoneId, setBatchSelectedPhoneId] = (0, C.useState)(``),
      [batchCategory, setBatchCategory] = (0, C.useState)(`时政要闻`),
      [batchScrapeFreq, setBatchScrapeFreq] = (0, C.useState)(`3分钟/轮`);"""
content = content.replace(old_state, new_state, 1)
print("1. Replaced state successfully")

# 2. Helpers
old_helpers_point = "let handleOpenAddPhone = () => {"
assert old_helpers_point in content, "old_helpers_point not found"
new_helpers = """// 获取关注数量最少的手机（负载最低，优先非异常机）
    let getLeastFollowedPhone = () => {
      if (!phoneList || phoneList.length === 0) return null;
      let nonAbnormal = phoneList.filter((p) => p.status !== `abnormal`);
      let candidates = nonAbnormal.length > 0 ? nonAbnormal : phoneList;
      return candidates.reduce((minP, curP) => {
        let minCount = minP.followedCount ?? 0;
        let curCount = curP.followedCount ?? 0;
        return curCount < minCount ? curP : minP;
      }, candidates[0]);
    };

    let handleOpenBatchAddModal = () => {
      let least = getLeastFollowedPhone();
      setBatchSelectedPhoneId(least ? least.id : (phoneList[0]?.id || ``));
      setBatchAccountsInput(``);
      setBatchCategory(`时政要闻`);
      setBatchScrapeFreq(`3分钟/轮`);
      setBatchAddModalOpen(!0);
    };

    let parseBatchAccounts = (rawText) => {
      if (!rawText || !rawText.trim()) return [];
      let lines = rawText.split(/\\r?\\n/).map((l) => l.trim()).filter(Boolean);
      return lines.map((line, idx) => {
        let urlMatch = line.match(/weibo\\.(?:com|cn)\\/(?:u\\/)?(\\d+)/i);
        let url = urlMatch ? `https://weibo.com/u/${urlMatch[1]}` : ``;
        let uid = urlMatch ? urlMatch[1] : ``;
        let tokens = line.split(/[\\s,，|\\t]+/).filter(Boolean);
        let numericToken = tokens.find((t) => /^\\d{7,12}$/.test(t));
        if (numericToken) {
          uid = numericToken;
        }
        let nameToken = tokens.find(
          (t) => t.startsWith(`@`) || (!/^\\d+$/.test(t) && !t.includes(`http`))
        );
        let name = ``;
        if (nameToken) {
          name = nameToken.startsWith(`@`) ? nameToken : `@${nameToken}`;
        } else if (uid) {
          name = `@微博用户_${uid.slice(-4)}`;
        } else {
          name = `@采集目标_${idx + 1}`;
        }
        let catToken = tokens.find(
          (t) => t !== numericToken && t !== nameToken && !t.includes(`http`) && !/^\\d+$/.test(t)
        );
        let category = catToken || batchCategory;
        if (!uid) {
          let hash = 0;
          for (let c = 0; c < name.length; c++) hash = (hash << 5) - hash + name.charCodeAt(c);
          uid = String(1000000000 + (Math.abs(hash) % 8999999999));
        }
        return {
          name,
          uid,
          url: url || `https://weibo.com/u/${uid}`,
          category,
        };
      });
    };

    let handleFillBatchSample = () => {
      setBatchAccountsInput(
        `@新华社 1699432410 时政要闻\\n@中国新闻网 1784473157 综合资讯\\n@新浪科技 1642634100 科技数码\\n@证券时报 1649173367 财经快讯\\n@极客公园 1656453912 科技数码`
      );
    };

    let handleBatchAddSubmit = (e) => {
      e.preventDefault();
      let parsed = parseBatchAccounts(batchAccountsInput);
      if (parsed.length === 0) {
        showToastFn(`请在文本框中输入至少一个微博博主名称或UID`, `warning`);
        return;
      }
      let least = getLeastFollowedPhone();
      let targetPhone = phoneList.find((p) => p.id === batchSelectedPhoneId) || least || phoneList[0];
      if (!targetPhone) {
        showToastFn(`未找到目标物理手机设备`, `error`);
        return;
      }
      let currentFollowed = targetPhone.followedCount || 0;
      let limit = targetPhone.maxFollowLimit || 100;
      let newTotal = currentFollowed + parsed.length;

      let newAccounts = parsed.map((item, i) => {
        let accNum = accountList.length + i + 1;
        return {
          id: `ACC-WB-${String(accNum).padStart(3, `0`)}`,
          weiboName: item.name,
          uid: item.uid,
          weiboUrl: item.url,
          category: item.category || batchCategory,
          phoneId: targetPhone.id,
          phoneModel: targetPhone.model,
          followIndex: currentFollowed + i + 1,
          followLimit: limit,
          phoneStatus: targetPhone.status || `normal`,
          scrapeFreq: batchScrapeFreq,
          latestPublishTime: `刚刚`,
          lastScrapeTime: `刚刚`,
          storageToday: 0,
          storageTotal: 0,
          status: `normal`,
        };
      });

      setAccountList((prev) => [...newAccounts, ...prev]);
      setPhoneList((prev) =>
        prev.map((p) => {
          if (p.id === targetPhone.id) {
            return {
              ...p,
              followedCount: (p.followedCount || 0) + parsed.length,
              boundAccountCount: (p.boundAccountCount || 0) + parsed.length,
            };
          }
          return p;
        })
      );
      setBatchAddModalOpen(!1);
      setActiveTab(`accounts`);
      showToastFn(
        `成功批量添加 ${newAccounts.length} 个采集账号至手机【${targetPhone.id}】(当前关注数更新为: ${newTotal}/${limit})！`,
        `success`
      );
    };

    let handleOpenAddPhone = () => {"""
content = content.replace(old_helpers_point, new_helpers, 1)
print("2. Replaced helpers successfully")

# 3. Header tabs
pos_stat = content.find("总统计与趋势大盘` }),")
assert pos_stat != -1, "pos_stat not found"
pos_tabs_end = content.find("],\n                }),", pos_stat)
assert pos_tabs_end != -1, "pos_tabs_end not found"

batch_btn_header = """,\n                (0, $.jsxs)(`button`, {
                  type: `button`,
                  onClick: handleOpenBatchAddModal,
                  className: `px-3.5 py-1.5 bg-[#0066FF] hover:bg-blue-700 text-white rounded-xl font-bold text-xs shadow-xs transition-colors cursor-pointer flex items-center gap-1.5`,
                  children: [
                    (0, $.jsx)(`span`, { className: `text-sm font-black`, children: `+` }),
                    (0, $.jsx)(`span`, { children: `批量添加新采集账号` }),
                  ],
                })"""

content = content[:pos_tabs_end + len("],\n                }),")] + batch_btn_header + content[pos_tabs_end + len("],\n                }),"):]
print("3. Replaced header tabs successfully")

# 4. Tab 1 Filter bar
pos_fb = content.find("placeholder: `搜索博主名称、UID、手机ID、分类...`")
assert pos_fb != -1, "pos_fb not found"
pos_match_acc = content.find("` 个账号`,", pos_fb)
assert pos_match_acc != -1, "pos_match_acc not found"
pos_div_start = content.rfind("(0, $.jsxs)(`div`,", pos_fb, pos_match_acc)
assert pos_div_start != -1, "pos_div_start not found"
pos_div_end = content.find("],\n                  }),", pos_match_acc) + len("],\n                  }),")

new_match_block = """(0, $.jsxs)(`div`, {
                    className: `flex items-center gap-3`,
                    children: [
                      (0, $.jsxs)(`div`, {
                        className: `text-xs text-slate-500`,
                        children: [
                          `已匹配 `,
                          (0, $.jsx)(`strong`, { className: `text-slate-900 font-mono`, children: filteredAccounts.length }),
                          ` 个账号`,
                        ],
                      }),
                      (0, $.jsxs)(`button`, {
                        type: `button`,
                        onClick: handleOpenBatchAddModal,
                        className: `px-3.5 py-1.5 bg-[#0066FF] hover:bg-blue-700 text-white rounded-xl font-bold text-xs shadow-xs transition-colors cursor-pointer flex items-center gap-1.5`,
                        children: [
                          (0, $.jsx)(`span`, { className: `text-sm font-black`, children: `+` }),
                          (0, $.jsx)(`span`, { children: `批量添加新采集账号` }),
                        ],
                      }),
                    ],
                  }),"""

content = content[:pos_div_start] + new_match_block + content[pos_div_end:]
print("4. Replaced filter bar in Tab 1 successfully")

# 5. Modals
old_modal_insertion = "/* Detail Trend History Modal (单账号/单手机每日抓取流水与趋势弹窗) */"
assert old_modal_insertion in content, "old_modal_insertion not found"

batch_add_modal_jsx = """/* Batch Add Crawl Accounts Modal (批量添加新采集账号 - 智能推荐/选中关注数量最少的手机) */
        batchAddModalOpen &&
          (() => {
            let leastPhone = getLeastFollowedPhone();
            let targetPhone =
              phoneList.find((p) => p.id === batchSelectedPhoneId) || leastPhone || phoneList[0];
            let parsed = parseBatchAccounts(batchAccountsInput);
            let curFollowed = targetPhone?.followedCount || 0;
            let maxLimit = targetPhone?.maxFollowLimit || 100;
            let remainSlots = Math.max(0, maxLimit - curFollowed);
            let isOverLimit = curFollowed + parsed.length > maxLimit;

            return (0, $.jsx)(`div`, {
              className: `fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200 overflow-y-auto`,
              onClick: () => setBatchAddModalOpen(!1),
              children: (0, $.jsxs)(`div`, {
                className: `bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-2xl overflow-hidden animate-in zoom-in-95 duration-150 my-8`,
                onClick: (e) => e.stopPropagation(),
                children: [
                  /* Modal Header */
                  (0, $.jsxs)(`div`, {
                    className: `px-6 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-50/80`,
                    children: [
                      (0, $.jsxs)(`div`, {
                        className: `flex items-center gap-2.5`,
                        children: [
                          (0, $.jsx)(`div`, {
                            className: `w-9 h-9 rounded-xl bg-blue-100 text-[#0066FF] flex items-center justify-center text-lg shadow-2xs font-bold`,
                            children: `👥`,
                          }),
                          (0, $.jsxs)(`div`, {
                            children: [
                              (0, $.jsx)(`h3`, {
                                className: `font-black text-slate-900 text-sm`,
                                children: `批量添加新采集账号`,
                              }),
                              (0, $.jsx)(`p`, {
                                className: `text-[11px] text-slate-500 mt-0.5`,
                                children: `支持批量录入微博采集目标，系统已自动推荐并选中关注数量最少的手机设备`,
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, $.jsx)(`button`, {
                        type: `button`,
                        onClick: () => setBatchAddModalOpen(!1),
                        className: `p-1 rounded text-slate-400 hover:text-slate-700 cursor-pointer`,
                        children: (0, $.jsx)(`span`, { children: `✕` }),
                      }),
                    ],
                  }),
                  /* Form */
                  (0, $.jsxs)(`form`, {
                    onSubmit: handleBatchAddSubmit,
                    className: `p-6 space-y-4 text-xs`,
                    children: [
                      /* Phone Allocation / Smart Recommendation Card */
                      (0, $.jsxs)(`div`, {
                        className: `p-4 rounded-xl border ${targetPhone?.id === leastPhone?.id ? `bg-blue-50/70 border-blue-200` : `bg-slate-50 border-slate-200`} space-y-2.5`,
                        children: [
                          (0, $.jsxs)(`div`, {
                            className: `flex items-center justify-between flex-wrap gap-2`,
                            children: [
                              (0, $.jsxs)(`div`, {
                                className: `flex items-center gap-2 font-bold text-slate-900`,
                                children: [
                                  (0, $.jsx)(`span`, { children: `📱` }),
                                  (0, $.jsx)(`span`, { children: `分配绑定实体手机：` }),
                                  targetPhone?.id === leastPhone?.id
                                    ? (0, $.jsx)(`span`, {
                                        className: `px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10.5px] font-bold border border-emerald-300 flex items-center gap-1`,
                                        children: [
                                          (0, $.jsx)(`span`, { className: `w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse` }),
                                          `已自动选中关注数量最少的手机（负载最低）`,
                                        ],
                                      })
                                    : (0, $.jsxs)(`button`, {
                                        type: `button`,
                                        onClick: () => setBatchSelectedPhoneId(leastPhone?.id || ``),
                                        className: `text-[11px] text-[#0066FF] hover:underline cursor-pointer font-bold flex items-center gap-1`,
                                        children: [
                                          `↺ 切回推荐设备【`,
                                          leastPhone?.id,
                                          ` (关注数最少: `,
                                          leastPhone?.followedCount,
                                          `)】`,
                                        ],
                                      }),
                                ],
                              }),
                              (0, $.jsxs)(`div`, {
                                className: `text-[11px] font-mono`,
                                children: [
                                  `剩余可用关注位: `,
                                  (0, $.jsxs)(`strong`, {
                                    className: remainSlots > 0 ? `text-emerald-700` : `text-rose-600`,
                                    children: [remainSlots, ` 个`],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          /* Phone Select Dropdown */
                          (0, $.jsxs)(`div`, {
                            className: `flex items-center gap-3`,
                            children: [
                              (0, $.jsx)(`select`, {
                                value: targetPhone?.id || ``,
                                onChange: (e) => setBatchSelectedPhoneId(e.target.value),
                                className: `flex-1 px-3 py-2 bg-white border border-slate-300 rounded-xl text-xs font-bold text-slate-800 focus:outline-none focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF]`,
                                children: phoneList.map((p) => {
                                  let isLeast = p.id === leastPhone?.id;
                                  return (0, $.jsxs)(
                                    `option`,
                                    {
                                      value: p.id,
                                      children: [
                                        p.id,
                                        ` (${p.model}) - 当前关注: `,
                                        p.followedCount,
                                        `/`,
                                        p.maxFollowLimit,
                                        ` 个 `,
                                        isLeast ? ` ★ 推荐(关注数最少/负载最低)` : ``,
                                        p.status === `abnormal` ? ` [异常]` : ``,
                                      ],
                                    },
                                    p.id
                                  );
                                }),
                              }),
                            ],
                          }),
                          /* Current Selected Phone Details Strip */
                          (0, $.jsxs)(`div`, {
                            className: `grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 text-[11px] text-slate-600 font-mono`,
                            children: [
                              (0, $.jsxs)(`div`, {
                                className: `bg-white/80 p-2 rounded-lg border border-slate-200/80`,
                                children: [
                                  (0, $.jsx)(`span`, { className: `text-slate-400 block text-[10px]`, children: `登录主账号` }),
                                  (0, $.jsx)(`span`, { className: `font-bold text-slate-800`, children: targetPhone?.weiboAccount }),
                                ],
                              }),
                              (0, $.jsxs)(`div`, {
                                className: `bg-white/80 p-2 rounded-lg border border-slate-200/80`,
                                children: [
                                  (0, $.jsx)(`span`, { className: `text-slate-400 block text-[10px]`, children: `设备型号` }),
                                  (0, $.jsx)(`span`, { className: `font-bold text-slate-800`, children: targetPhone?.model }),
                                ],
                              }),
                              (0, $.jsxs)(`div`, {
                                className: `bg-white/80 p-2 rounded-lg border border-slate-200/80`,
                                children: [
                                  (0, $.jsx)(`span`, { className: `text-slate-400 block text-[10px]`, children: `当前已关注数` }),
                                  (0, $.jsxs)(`span`, {
                                    className: `font-bold text-[#0066FF]`,
                                    children: [targetPhone?.followedCount || 0, ` / `, maxLimit],
                                  }),
                                ],
                              }),
                              (0, $.jsxs)(`div`, {
                                className: `bg-white/80 p-2 rounded-lg border border-slate-200/80`,
                                children: [
                                  (0, $.jsx)(`span`, { className: `text-slate-400 block text-[10px]`, children: `设备运行状态` }),
                                  (0, $.jsx)(`span`, {
                                    className: `font-bold ${targetPhone?.status === `abnormal` ? `text-rose-600` : `text-emerald-700`}`,
                                    children: targetPhone?.status === `abnormal` ? `异常风控` : `正常在线`,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      /* Accounts Input Textarea */
                      (0, $.jsxs)(`div`, {
                        className: `space-y-1.5`,
                        children: [
                          (0, $.jsxs)(`div`, {
                            className: `flex items-center justify-between flex-wrap gap-2`,
                            children: [
                              (0, $.jsxs)(`label`, {
                                className: `font-bold text-slate-800 flex items-center gap-1.5`,
                                children: [
                                  `输入待添加采集博主`,
                                  (0, $.jsx)(`span`, {
                                    className: `text-slate-400 font-normal text-[11px]`,
                                    children: `(每行一个，支持名称、UID、主页链接)`,
                                  }),
                                ],
                              }),
                              (0, $.jsxs)(`div`, {
                                className: `flex items-center gap-2`,
                                children: [
                                  (0, $.jsx)(`button`, {
                                    type: `button`,
                                    onClick: handleFillBatchSample,
                                    className: `text-[11px] text-[#0066FF] hover:bg-blue-50 px-2 py-0.5 rounded border border-blue-200 cursor-pointer font-bold transition-colors`,
                                    children: `填入测试示例`,
                                  }),
                                  (0, $.jsx)(`button`, {
                                    type: `button`,
                                    onClick: () => setBatchAccountsInput(``),
                                    className: `text-[11px] text-slate-500 hover:bg-slate-100 px-2 py-0.5 rounded border border-slate-200 cursor-pointer transition-colors`,
                                    children: `清空`,
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, $.jsx)(`textarea`, {
                            value: batchAccountsInput,
                            onChange: (e) => setBatchAccountsInput(e.target.value),
                            placeholder: `@新华社 1699432410 时政要闻\\n@中国新闻网 1784473157 综合资讯\\n@新浪科技 1642634100 科技数码\\n@证券时报 1649173367 财经快讯\\nhttps://weibo.com/u/1656453912`,
                            rows: 6,
                            className: `w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-mono focus:bg-white focus:outline-none focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF] transition-all`,
                          }),
                          (0, $.jsx)(`div`, {
                            className: `text-[10.5px] text-slate-400 flex items-center gap-1`,
                            children: `💡 支持格式：【博主名 UID 分类】、【纯UID】、【微博链接】或【@博主名】，系统智能提取解析`,
                          }),
                        ],
                      }),
                      /* Settings: Category & Frequency */
                      (0, $.jsxs)(`div`, {
                        className: `grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1`,
                        children: [
                          (0, $.jsxs)(`div`, {
                            className: `space-y-1`,
                            children: [
                              (0, $.jsx)(`label`, { className: `font-bold text-slate-700`, children: `默认业务分类` }),
                              (0, $.jsxs)(`select`, {
                                value: batchCategory,
                                onChange: (e) => setBatchCategory(e.target.value),
                                className: `w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 focus:bg-white focus:outline-none focus:border-[#0066FF]`,
                                children: [
                                  (0, $.jsx)(`option`, { value: `时政要闻`, children: `时政要闻` }),
                                  (0, $.jsx)(`option`, { value: `财经快讯`, children: `财经快讯` }),
                                  (0, $.jsx)(`option`, { value: `科技数码`, children: `科技数码` }),
                                  (0, $.jsx)(`option`, { value: `政务公开`, children: `政务公开` }),
                                  (0, $.jsx)(`option`, { value: `综合资讯`, children: `综合资讯` }),
                                  (0, $.jsx)(`option`, { value: `娱乐热点`, children: `娱乐热点` }),
                                ],
                              }),
                            ],
                          }),
                          (0, $.jsxs)(`div`, {
                            className: `space-y-1`,
                            children: [
                              (0, $.jsx)(`label`, { className: `font-bold text-slate-700`, children: `轮询采集频次` }),
                              (0, $.jsxs)(`select`, {
                                value: batchScrapeFreq,
                                onChange: (e) => setBatchScrapeFreq(e.target.value),
                                className: `w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 focus:bg-white focus:outline-none focus:border-[#0066FF]`,
                                children: [
                                  (0, $.jsx)(`option`, { value: `1分钟/轮`, children: `1分钟/轮 (极高频)` }),
                                  (0, $.jsx)(`option`, { value: `3分钟/轮`, children: `3分钟/轮 (推荐频次)` }),
                                  (0, $.jsx)(`option`, { value: `5分钟/轮`, children: `5分钟/轮 (常规)` }),
                                  (0, $.jsx)(`option`, { value: `10分钟/轮`, children: `10分钟/轮 (低频巡检)` }),
                                  (0, $.jsx)(`option`, { value: `15分钟/轮`, children: `15分钟/轮 (节能模式)` }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      /* Parsed Real-time Preview */
                      parsed.length > 0 &&
                        (0, $.jsxs)(`div`, {
                          className: `p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-2`,
                          children: [
                            (0, $.jsxs)(`div`, {
                              className: `flex items-center justify-between text-xs`,
                              children: [
                                (0, $.jsxs)(`span`, {
                                  className: `font-bold text-slate-800 flex items-center gap-1.5`,
                                  children: [
                                    (0, $.jsx)(`span`, { className: `w-2 h-2 rounded-full bg-emerald-500` }),
                                    `已解析识别待入库账号：`,
                                    (0, $.jsx)(`strong`, {
                                      className: `text-[#0066FF] font-mono text-sm`,
                                      children: parsed.length,
                                    }),
                                    ` 个`,
                                  ],
                                }),
                                (0, $.jsxs)(`span`, {
                                  className: `text-[11px] font-mono text-slate-500`,
                                  children: [
                                    `绑定设备后总关注数: `,
                                    (0, $.jsx)(`strong`, {
                                      className: isOverLimit ? `text-rose-600` : `text-slate-800`,
                                      children: curFollowed + parsed.length,
                                    }),
                                    `/`,
                                    maxLimit,
                                  ],
                                }),
                              ],
                            }),
                            isOverLimit &&
                              (0, $.jsxs)(`div`, {
                                className: `p-2 rounded-lg bg-amber-50 border border-amber-200 text-amber-800 text-[11px] flex items-center gap-1.5`,
                                children: [
                                  (0, $.jsx)(`span`, { children: `⚠️` }),
                                  (0, $.jsxs)(`span`, {
                                    children: [
                                      `添加后总数 (${curFollowed + parsed.length}) 将超出该设备关注上限 (${maxLimit})，建议切换设备或分批添加！`,
                                    ],
                                  }),
                                ],
                              }),
                            (0, $.jsx)(`div`, {
                              className: `max-h-28 overflow-y-auto space-y-1 pr-1`,
                              children: parsed.map((p, idx) =>
                                (0, $.jsxs)(
                                  `div`,
                                  {
                                    className: `px-2.5 py-1.5 bg-white rounded-lg border border-slate-200 flex items-center justify-between text-[11px]`,
                                    children: [
                                      (0, $.jsxs)(`div`, {
                                        className: `flex items-center gap-2`,
                                        children: [
                                          (0, $.jsx)(`span`, {
                                            className: `text-slate-400 font-mono text-[10px]`,
                                            children: `#${idx + 1}`,
                                          }),
                                          (0, $.jsx)(`span`, {
                                            className: `font-bold text-slate-900`,
                                            children: p.name,
                                          }),
                                          (0, $.jsxs)(`span`, {
                                            className: `text-slate-400 font-mono text-[10px]`,
                                            children: [`UID: `, p.uid],
                                          }),
                                        ],
                                      }),
                                      (0, $.jsxs)(`div`, {
                                        className: `flex items-center gap-2`,
                                        children: [
                                          (0, $.jsx)(`span`, {
                                            className: `px-1.5 py-0.2 rounded bg-slate-100 text-slate-600 text-[10px] font-medium`,
                                            children: p.category,
                                          }),
                                          (0, $.jsxs)(`span`, {
                                            className: `text-blue-700 font-mono text-[10px] font-bold bg-blue-50 px-1.5 py-0.2 rounded border border-blue-200/60`,
                                            children: [`关注位 #${curFollowed + idx + 1}`],
                                          }),
                                        ],
                                      }),
                                    ],
                                  },
                                  idx
                                )
                              ),
                            }),
                          ],
                        }),
                      /* Modal Footer / Buttons */
                      (0, $.jsxs)(`div`, {
                        className: `pt-3 border-t border-slate-100 flex items-center justify-end gap-2.5`,
                        children: [
                          (0, $.jsx)(`button`, {
                            type: `button`,
                            onClick: () => setBatchAddModalOpen(!1),
                            className: `px-4 py-2 rounded-xl text-slate-600 hover:bg-slate-100 font-bold cursor-pointer`,
                            children: `取消`,
                          }),
                          (0, $.jsxs)(`button`, {
                            type: `submit`,
                            disabled: parsed.length === 0,
                            className: `px-5 py-2 rounded-xl font-bold text-white shadow-xs transition-colors flex items-center gap-1.5 ${parsed.length === 0 ? `bg-slate-300 cursor-not-allowed` : `bg-[#0066FF] hover:bg-blue-700 cursor-pointer`}`,
                            children: [
                              (0, $.jsx)(`span`, { children: `✓` }),
                              (0, $.jsxs)(`span`, {
                                children: [
                                  `确认批量添加至【`,
                                  targetPhone?.id,
                                  `】 (`,
                                  parsed.length,
                                  ` 个账号)`,
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            });
          })(),
        /* Detail Trend History Modal (单账号/单手机每日抓取流水与趋势弹窗) */"""

content = content.replace(old_modal_insertion, batch_add_modal_jsx, 1)
print("5. Replaced modal successfully")

with open('src/app-bundle.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("All modifications written to src/app-bundle.js successfully!")
