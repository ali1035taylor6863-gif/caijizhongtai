# Python builder for Pn component
with open('src/app-bundle.js', 'r', encoding='utf-8') as f:
    bundle = f.read()

pos_pn_start = bundle.find('Pn = ({')
pos_pn_end = bundle.find('Fn = ({', pos_pn_start)
if pos_pn_end == -1: pos_pn_end = bundle.find('Fn =', pos_pn_start)

new_pn_code = r"""Pn = ({ onAddToast: showToastFn }) => {
    let [activeTab, setActiveTab] = (0, C.useState)(`accounts`),
      [accountList, setAccountList] = (0, C.useState)(Mn),
      [phoneList, setPhoneList] = (0, C.useState)(Nn),
      [accountSearch, setAccountSearch] = (0, C.useState)(``),
      [accountStatusFilter, setAccountStatusFilter] = (0, C.useState)(`all`),
      [accountCategoryFilter, setAccountCategoryFilter] = (0, C.useState)(`all`),
      [dateRange, setDateRange] = (0, C.useState)(`today`),
      [customDate, setCustomDate] = (0, C.useState)(`2026-09-30`),
      [selectedAccountForSwitch, setSelectedAccountForSwitch] = (0, C.useState)(null),
      [switchPhoneModalOpen, setSwitchPhoneModalOpen] = (0, C.useState)(!1),
      [targetStandbyPhoneId, setTargetStandbyPhoneId] = (0, C.useState)(`PHONE-WB-009`),
      [trendModalItem, setTrendModalItem] = (0, C.useState)(null),
      [trendModalType, setTrendModalType] = (0, C.useState)(`account`),
      [policyModalOpen, setPolicyModalOpen] = (0, C.useState)(!1),
      [phoneSearch, setPhoneSearch] = (0, C.useState)(``),
      [phoneStatusFilter, setPhoneStatusFilter] = (0, C.useState)(`all`),
      [phoneModalOpen, setPhoneModalOpen] = (0, C.useState)(!1),
      [editingPhoneId, setEditingPhoneId] = (0, C.useState)(null),
      [phoneFormId, setPhoneFormId] = (0, C.useState)(``),
      [phoneFormModel, setPhoneFormModel] = (0, C.useState)(``),
      [phoneFormWeibo, setPhoneFormWeibo] = (0, C.useState)(``),
      [phoneFormAdbIp, setPhoneFormAdbIp] = (0, C.useState)(``),
      [phoneFormMaxLimit, setPhoneFormMaxLimit] = (0, C.useState)(100),
      [phoneFormIsStandby, setPhoneFormIsStandby] = (0, C.useState)(!1),
      [phoneFormStatus, setPhoneFormStatus] = (0, C.useState)(`normal`);

    // Helper: calculate 7-day daily history and period volume for an account
    let getAccountDailyMetrics = (account) => {
      let baseToday = account.storageToday || 4820;
      let baseTotal = account.storageTotal || 189200;

      let hash = 0;
      let seed = account.id || account.uid || `ACC`;
      for (let i = 0; i < seed.length; i++) {
        hash = (hash << 5) - hash + seed.charCodeAt(i);
        hash |= 0;
      }
      let absHash = Math.abs(hash);

      let dayFactors = [
        { date: `09-30`, label: `今日(09-30)`, factor: 1.0 },
        { date: `09-29`, label: `09-29`, factor: 0.98 + (absHash % 10) / 100 },
        { date: `09-28`, label: `09-28`, factor: 1.04 - (absHash % 8) / 100 },
        { date: `09-27`, label: `09-27`, factor: 0.95 + (absHash % 12) / 100 },
        { date: `09-26`, label: `09-26`, factor: 1.02 - (absHash % 9) / 100 },
        { date: `09-25`, label: `09-25`, factor: 0.97 + (absHash % 11) / 100 },
        { date: `09-24`, label: `09-24`, factor: 1.05 - (absHash % 10) / 100 },
      ];

      let history = dayFactors.map((df) => {
        let v = Math.max(50, Math.round(baseToday * df.factor));
        return {
          date: df.date,
          label: df.label,
          volume: v,
        };
      });

      let periodVolume = baseToday;
      if (dateRange === `yesterday`) periodVolume = history[1].volume;
      else if (dateRange === `3d`) periodVolume = history.slice(0, 3).reduce((acc, h) => acc + h.volume, 0);
      else if (dateRange === `7d`) periodVolume = history.reduce((acc, h) => acc + h.volume, 0);
      else if (dateRange === `15d`) periodVolume = Math.round(baseToday * 14.8);
      else if (dateRange === `30d`) periodVolume = Math.round(baseToday * 28.5);
      else if (dateRange === `all`) periodVolume = baseTotal;
      else if (dateRange === `custom`) periodVolume = Math.round(baseToday * (0.95 + (absHash % 15) / 100));

      let maxDaily = Math.max(...history.map((h) => h.volume), 1);

      return {
        todayVolume: baseToday,
        totalVolume: baseTotal,
        periodVolume,
        history,
        maxDaily,
      };
    };

    // Helper: calculate daily metrics for a physical phone by aggregating its bound accounts
    let getPhoneDailyMetrics = (phone) => {
      let boundAccs = accountList.filter((a) => a.phoneId === phone.id);
      
      let combinedHistory = [
        { date: `09-30`, label: `今日(09-30)`, volume: 0 },
        { date: `09-29`, label: `09-29`, volume: 0 },
        { date: `09-28`, label: `09-28`, volume: 0 },
        { date: `09-27`, label: `09-27`, volume: 0 },
        { date: `09-26`, label: `09-26`, volume: 0 },
        { date: `09-25`, label: `09-25`, volume: 0 },
        { date: `09-24`, label: `09-24`, volume: 0 },
      ];

      let todayTotal = 0;
      let allTotal = 0;
      let periodTotal = 0;

      boundAccs.forEach((acc) => {
        let m = getAccountDailyMetrics(acc);
        todayTotal += m.todayVolume;
        allTotal += m.totalVolume;
        periodTotal += m.periodVolume;
        m.history.forEach((h, idx) => {
          if (combinedHistory[idx]) combinedHistory[idx].volume += h.volume;
        });
      });

      // If no accounts bound or standby phone
      if (boundAccs.length === 0) {
        let base = phone.isStandby ? 0 : 3200;
        todayTotal = base;
        periodTotal = base;
        allTotal = base * 20;
        combinedHistory.forEach((ch) => { ch.volume = base; });
      }

      let maxDaily = Math.max(...combinedHistory.map((h) => h.volume), 1);

      return {
        boundCount: boundAccs.length,
        todayVolume: todayTotal,
        totalVolume: allTotal,
        periodVolume: periodTotal,
        history: combinedHistory,
        maxDaily,
        boundAccounts: boundAccs,
      };
    };

    // Filtered accounts list
    let filteredAccounts = (0, C.useMemo)(() => {
      return accountList.filter((a) => {
        if (accountSearch) {
          let t = accountSearch.toLowerCase();
          let matchName = a.weiboName?.toLowerCase().includes(t);
          let matchUid = a.uid?.toLowerCase().includes(t);
          let matchPhone = a.phoneId?.toLowerCase().includes(t);
          let matchCat = a.category?.toLowerCase().includes(t);
          if (!matchName && !matchUid && !matchPhone && !matchCat) return !1;
        }
        if (accountStatusFilter !== `all` && a.status !== accountStatusFilter) return !1;
        if (accountCategoryFilter !== `all` && a.category !== accountCategoryFilter) return !1;
        return !0;
      });
    }, [accountList, accountSearch, accountStatusFilter, accountCategoryFilter]);

    // Filtered phones list
    let filteredPhones = (0, C.useMemo)(() => {
      return phoneList.filter((p) => {
        if (phoneSearch) {
          let t = phoneSearch.toLowerCase();
          let matchId = p.id?.toLowerCase().includes(t);
          let matchModel = p.model?.toLowerCase().includes(t);
          let matchWb = p.weiboAccount?.toLowerCase().includes(t);
          let matchAdb = p.adbIp?.toLowerCase().includes(t);
          if (!matchId && !matchModel && !matchWb && !matchAdb) return !1;
        }
        if (phoneStatusFilter === `standby` && !p.isStandby) return !1;
        if (phoneStatusFilter === `normal` && (p.status !== `normal` || p.isStandby)) return !1;
        if (phoneStatusFilter === `abnormal` && p.status !== `abnormal`) return !1;
        return !0;
      });
    }, [phoneList, phoneSearch, phoneStatusFilter]);

    // Overall aggregate statistics
    let totalStats = (0, C.useMemo)(() => {
      let totalToday = 0;
      let totalRange = 0;
      let totalAll = 0;

      let dailySumHistory = [
        { date: `09-30`, label: `今日(09-30)`, volume: 0 },
        { date: `09-29`, label: `09-29`, volume: 0 },
        { date: `09-28`, label: `09-28`, volume: 0 },
        { date: `09-27`, label: `09-27`, volume: 0 },
        { date: `09-26`, label: `09-26`, volume: 0 },
        { date: `09-25`, label: `09-25`, volume: 0 },
        { date: `09-24`, label: `09-24`, volume: 0 },
      ];

      accountList.forEach((acc) => {
        let m = getAccountDailyMetrics(acc);
        totalToday += m.todayVolume;
        totalRange += m.periodVolume;
        totalAll += m.totalVolume;
        m.history.forEach((h, idx) => {
          if (dailySumHistory[idx]) dailySumHistory[idx].volume += h.volume;
        });
      });

      let onlinePhonesCount = phoneList.filter((p) => p.status === `normal` && !p.isStandby).length;
      let standbyPhonesCount = phoneList.filter((p) => p.isStandby).length;
      let abnormalPhonesCount = phoneList.filter((p) => p.status === `abnormal`).length;

      let maxTotalDaily = Math.max(...dailySumHistory.map((h) => h.volume), 1);

      return {
        totalToday,
        totalRange,
        totalAll,
        dailySumHistory,
        maxTotalDaily,
        onlinePhonesCount,
        standbyPhonesCount,
        abnormalPhonesCount,
        avgDailyPerAccount: Math.round(totalToday / Math.max(1, accountList.length)),
        avgDailyPerPhone: Math.round(totalToday / Math.max(1, onlinePhonesCount)),
      };
    }, [accountList, phoneList, dateRange]);

    let handleOpenAddPhone = () => {
      setEditingPhoneId(null);
      let nextNum = phoneList.length + 1;
      setPhoneFormId(`PHONE-WB-${String(nextNum).padStart(3, `0`)}`);
      setPhoneFormModel(`Xiaomi 13`);
      setPhoneFormWeibo(`@Weibo_Bot_Master${String(nextNum).padStart(2, `0`)}`);
      setPhoneFormAdbIp(`192.168.10.${100 + nextNum}:5555`);
      setPhoneFormMaxLimit(100);
      setPhoneFormIsStandby(!1);
      setPhoneFormStatus(`normal`);
      setPhoneModalOpen(!0);
    };

    let handleOpenEditPhone = (p) => {
      setEditingPhoneId(p.id);
      setPhoneFormId(p.id);
      setPhoneFormModel(p.model);
      setPhoneFormWeibo(p.weiboAccount);
      setPhoneFormAdbIp(p.adbIp);
      setPhoneFormMaxLimit(p.maxFollowLimit || 100);
      setPhoneFormIsStandby(!!p.isStandby);
      setPhoneFormStatus(p.status || `normal`);
      setPhoneModalOpen(!0);
    };

    let handleSavePhone = (e) => {
      e.preventDefault();
      if (!phoneFormId.trim()) {
        showToastFn(`请输入手机设备ID`, `error`);
        return;
      }
      if (editingPhoneId) {
        setPhoneList((prev) =>
          prev.map((p) =>
            p.id === editingPhoneId
              ? {
                  ...p,
                  id: phoneFormId.trim(),
                  model: phoneFormModel.trim() || `Xiaomi 13`,
                  weiboAccount: phoneFormWeibo.trim() || `@Weibo_Bot_Master`,
                  adbIp: phoneFormAdbIp.trim() || `192.168.10.100:5555`,
                  maxFollowLimit: Number(phoneFormMaxLimit) || 100,
                  isStandby: phoneFormIsStandby,
                  status: phoneFormStatus,
                }
              : p,
          ),
        );
        showToastFn(`已成功更新手机设备【${phoneFormId}】配置！`, `success`);
      } else {
        let isDup = phoneList.some((p) => p.id === phoneFormId.trim());
        if (isDup) {
          showToastFn(`手机设备ID【${phoneFormId}】已存在，请更换！`, `error`);
          return;
        }
        let newPhone = {
          id: phoneFormId.trim(),
          model: phoneFormModel.trim() || `Xiaomi 13`,
          weiboAccount: phoneFormWeibo.trim() || `@Weibo_Bot_Master`,
          adbIp: phoneFormAdbIp.trim() || `192.168.10.100:5555`,
          followedCount: 0,
          maxFollowLimit: Number(phoneFormMaxLimit) || 100,
          boundAccountCount: 0,
          status: phoneFormStatus,
          lastHeartbeat: `刚刚`,
          isStandby: phoneFormIsStandby,
        };
        setPhoneList((prev) => [...prev, newPhone]);
        showToastFn(`已成功新增实体手机设备【${phoneFormId}】并加入集群！`, `success`);
      }
      setPhoneModalOpen(!1);
    };

    let handleDeletePhone = (phoneId) => {
      let boundAccs = accountList.filter((a) => a.phoneId === phoneId);
      if (boundAccs.length > 0) {
        if (!confirm(`设备【${phoneId}】当前绑定了 ${boundAccs.length} 个账号，删除后将自动解绑。是否确认删除？`)) {
          return;
        }
        setAccountList((prev) =>
          prev.map((a) =>
            a.phoneId === phoneId
              ? { ...a, phoneId: `UNASSIGNED`, phoneModel: `未绑定设备`, status: `abnormal`, errorMsg: `绑定的手机已被移除` }
              : a,
          ),
        );
      } else {
        if (!confirm(`确认要删除实体手机设备【${phoneId}】吗？`)) return;
      }
      setPhoneList((prev) => prev.filter((p) => p.id !== phoneId));
      showToastFn(`已成功删除手机设备【${phoneId}】`, `info`);
    };

    let handleInstantScrapeAccount = (acc) => {
      let inc = Math.floor(Math.random() * 20) + 10;
      setAccountList((prev) =>
        prev.map((a) =>
          a.id === acc.id
            ? { ...a, storageToday: (a.storageToday || 0) + inc, storageTotal: (a.storageTotal || 0) + inc, lastScrapeTime: `刚刚` }
            : a,
        ),
      );
      showToastFn(`已向【${acc.phoneId}】下发即时抓取【${acc.weiboName}】，新增 ${inc} 条！`, `success`);
    };

    let handleSwitchPhone = () => {
      if (!selectedAccountForSwitch) return;
      let targetPhone = phoneList.find((p) => p.id === targetStandbyPhoneId);
      let targetModel = targetPhone ? targetPhone.model : `Xiaomi 13 (热备机)`;

      setAccountList((prev) =>
        prev.map((a) =>
          a.id === selectedAccountForSwitch.id
            ? {
                ...a,
                phoneId: targetStandbyPhoneId,
                phoneModel: targetModel,
                phoneStatus: `normal`,
                status: `normal`,
                errorMsg: void 0,
                lastScrapeTime: `刚刚完成热切换`,
              }
            : a,
        ),
      );
      setPhoneList((prev) =>
        prev.map((p) => {
          if (p.id === targetStandbyPhoneId) return { ...p, boundAccountCount: (p.boundAccountCount || 0) + 1, followedCount: (p.followedCount || 0) + 1 };
          if (p.id === selectedAccountForSwitch.phoneId) return { ...p, boundAccountCount: Math.max(0, (p.boundAccountCount || 1) - 1) };
          return p;
        }),
      );
      showToastFn(`已成功将【${selectedAccountForSwitch.weiboName}】无感迁移至热备机【${targetStandbyPhoneId}】！`, `success`);
      setSwitchPhoneModalOpen(!1);
      setSelectedAccountForSwitch(null);
    };

    let getDateRangeLabel = () => {
      if (dateRange === `today`) return `今日 (2026-09-30)`;
      if (dateRange === `yesterday`) return `昨日 (2026-09-29)`;
      if (dateRange === `3d`) return `近3天 (09-28 ~ 09-30)`;
      if (dateRange === `7d`) return `近7天 (09-24 ~ 09-30)`;
      if (dateRange === `15d`) return `近15天`;
      if (dateRange === `30d`) return `近30天 (09-01 ~ 09-30)`;
      if (dateRange === `all`) return `全部历史累计`;
      if (dateRange === `custom`) return `自定义日期: ${customDate}`;
      return `今日`;
    };

    return (0, $.jsxs)(`div`, {
      className: `max-w-[1680px] mx-auto flex flex-col gap-4.5 animate-in fade-in duration-150`,
      children: [
        /* Top Navigation & Master Banner */
        (0, $.jsxs)(`div`, {
          className: `bg-white border border-slate-200/80 rounded-2xl p-4.5 sm:px-6 sm:py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs`,
          children: [
            (0, $.jsxs)(`div`, {
              className: `flex items-center gap-3.5`,
              children: [
                (0, $.jsx)(`div`, {
                  className: `w-11 h-11 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#0066FF] font-bold shrink-0`,
                  children: (0, $.jsx)(`span`, { className: `text-xl`, children: `📱` }),
                }),
                (0, $.jsxs)(`div`, {
                  children: [
                    (0, $.jsxs)(`div`, {
                      className: `flex items-center gap-2.5 flex-wrap`,
                      children: [
                        (0, $.jsx)(`h1`, {
                          className: `text-lg font-black text-slate-900 tracking-tight`,
                          children: `关注抓取 · 实体手机与微博关注矩阵`,
                        }),
                        (0, $.jsx)(`span`, {
                          className: `px-2 py-0.5 rounded-md text-[10.5px] font-bold bg-blue-100 text-blue-800 border border-blue-200`,
                          children: `真实手机机房 · 每日抓取统计 · 趋势分析`,
                        }),
                      ],
                    }),
                    (0, $.jsx)(`p`, {
                      className: `text-[11px] text-slate-500 mt-0.5`,
                      children: `支持按日期查询每个账号与实体手机每日抓取量、全矩阵7日捕获趋势走势、手机机房设备全生命周期维护与故障无感切机`,
                    }),
                  ],
                }),
              ],
            }),
            (0, $.jsxs)(`div`, {
              className: `flex items-center gap-2.5 shrink-0 flex-wrap`,
              children: [
                (0, $.jsxs)(`div`, {
                  className: `bg-slate-100 p-1 rounded-xl border border-slate-200 flex items-center gap-1 text-xs`,
                  children: [
                    (0, $.jsxs)(`button`, {
                      type: `button`,
                      onClick: () => setActiveTab(`accounts`),
                      className: `px-3.5 py-1.5 rounded-lg font-bold transition-all cursor-pointer flex items-center gap-1.5 ${activeTab === `accounts` ? `bg-white text-slate-900 shadow-2xs` : `text-slate-600 hover:text-slate-900`}`,
                      children: [
                        (0, $.jsx)(`span`, { children: `👥` }),
                        (0, $.jsxs)(`span`, { children: [`关注账号台账 (`, accountList.length, `)`] }),
                      ],
                    }),
                    (0, $.jsxs)(`button`, {
                      type: `button`,
                      onClick: () => setActiveTab(`phones`),
                      className: `px-3.5 py-1.5 rounded-lg font-bold transition-all cursor-pointer flex items-center gap-1.5 ${activeTab === `phones` ? `bg-white text-slate-900 shadow-2xs` : `text-slate-600 hover:text-slate-900`}`,
                      children: [
                        (0, $.jsx)(`span`, { children: `📱` }),
                        (0, $.jsxs)(`span`, { children: [`实体手机集群 (`, phoneList.length, `)`] }),
                      ],
                    }),
                    (0, $.jsxs)(`button`, {
                      type: `button`,
                      onClick: () => setActiveTab(`stats`),
                      className: `px-3.5 py-1.5 rounded-lg font-bold transition-all cursor-pointer flex items-center gap-1.5 ${activeTab === `stats` ? `bg-[#0066FF] text-white shadow-2xs` : `text-slate-600 hover:text-slate-900`}`,
                      children: [
                        (0, $.jsx)(`span`, { children: `📊` }),
                        (0, $.jsx)(`span`, { children: `总统计与趋势大盘` }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),

        /* Overall Global Metric Dashboard Bar */
        (0, $.jsxs)(`div`, {
          className: `grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3`,
          children: [
            (0, $.jsxs)(`div`, {
              className: `bg-white p-3.5 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col justify-between`,
              children: [
                (0, $.jsx)(`span`, { className: `text-[11px] font-bold text-slate-500`, children: `全网关注账号总数` }),
                (0, $.jsxs)(`div`, {
                  className: `flex items-baseline gap-1 mt-1`,
                  children: [
                    (0, $.jsx)(`span`, { className: `text-2xl font-black font-mono text-slate-900`, children: accountList.length }),
                    (0, $.jsx)(`span`, { className: `text-xs text-slate-400 font-bold`, children: `个账号` }),
                  ],
                }),
                (0, $.jsxs)(`div`, {
                  className: `text-[10.5px] text-emerald-600 font-bold mt-1 flex items-center gap-1`,
                  children: [
                    (0, $.jsx)(`span`, { className: `w-1.5 h-1.5 rounded-full bg-emerald-500` }),
                    `100% 自动轮询中`,
                  ],
                }),
              ],
            }),

            (0, $.jsxs)(`div`, {
              className: `bg-white p-3.5 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col justify-between`,
              children: [
                (0, $.jsx)(`span`, { className: `text-[11px] font-bold text-slate-500`, children: `实体手机集群 (机房)` }),
                (0, $.jsxs)(`div`, {
                  className: `flex items-baseline gap-1 mt-1`,
                  children: [
                    (0, $.jsx)(`span`, { className: `text-2xl font-black font-mono text-blue-700`, children: phoneList.length }),
                    (0, $.jsx)(`span`, { className: `text-xs text-slate-400 font-bold`, children: `台设备` }),
                  ],
                }),
                (0, $.jsxs)(`div`, {
                  className: `text-[10.5px] text-slate-500 font-mono mt-1`,
                  children: [`正常 ${totalStats.onlinePhonesCount} | 热备 ${totalStats.standbyPhonesCount} | 异常 ${totalStats.abnormalPhonesCount}`],
                }),
              ],
            }),

            (0, $.jsxs)(`div`, {
              className: `bg-white p-3.5 rounded-2xl border border-emerald-200 bg-emerald-50/20 shadow-xs flex flex-col justify-between`,
              children: [
                (0, $.jsxs)(`span`, { className: `text-[11px] font-bold text-emerald-800 flex items-center justify-between`, children: [
                  `所选周期总抓取量`,
                  (0, $.jsx)(`span`, { className: `text-[9.5px] font-mono text-emerald-600`, children: getDateRangeLabel() })
                ]}),
                (0, $.jsxs)(`div`, {
                  className: `flex items-baseline gap-1 mt-1`,
                  children: [
                    (0, $.jsx)(`span`, { className: `text-2xl font-black font-mono text-emerald-700`, children: totalStats.totalRange.toLocaleString() }),
                    (0, $.jsx)(`span`, { className: `text-xs text-emerald-600 font-bold`, children: `条` }),
                  ],
                }),
                (0, $.jsxs)(`div`, {
                  className: `text-[10.5px] text-slate-500 font-mono mt-1`,
                  children: [`今日增量: `, (0, $.jsx)(`strong`, { className: `text-emerald-700`, children: totalStats.totalToday.toLocaleString() }), ` 条`],
                }),
              ],
            }),

            (0, $.jsxs)(`div`, {
              className: `bg-white p-3.5 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col justify-between`,
              children: [
                (0, $.jsx)(`span`, { className: `text-[11px] font-bold text-slate-500`, children: `平均单机日抓取量` }),
                (0, $.jsxs)(`div`, {
                  className: `flex items-baseline gap-1 mt-1`,
                  children: [
                    (0, $.jsx)(`span`, { className: `text-2xl font-black font-mono text-slate-900`, children: totalStats.avgDailyPerPhone.toLocaleString() }),
                    (0, $.jsx)(`span`, { className: `text-xs text-slate-400 font-bold`, children: `条/台·天` }),
                  ],
                }),
                (0, $.jsx)(`div`, {
                  className: `text-[10.5px] text-slate-400 font-mono mt-1`,
                  children: `按在线正常物理设备折算`,
                }),
              ],
            }),

            (0, $.jsxs)(`div`, {
              className: `bg-white p-3.5 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col justify-between`,
              children: [
                (0, $.jsx)(`span`, { className: `text-[11px] font-bold text-slate-500`, children: `平均单账号日抓取量` }),
                (0, $.jsxs)(`div`, {
                  className: `flex items-baseline gap-1 mt-1`,
                  children: [
                    (0, $.jsx)(`span`, { className: `text-2xl font-black font-mono text-slate-900`, children: totalStats.avgDailyPerAccount.toLocaleString() }),
                    (0, $.jsx)(`span`, { className: `text-xs text-slate-400 font-bold`, children: `条/号·天` }),
                  ],
                }),
                (0, $.jsx)(`div`, {
                  className: `text-[10.5px] text-slate-400 font-mono mt-1`,
                  children: `按全网监控微博博主均摊`,
                }),
              ],
            }),

            (0, $.jsxs)(`div`, {
              className: `bg-white p-3.5 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col justify-between`,
              children: [
                (0, $.jsx)(`span`, { className: `text-[11px] font-bold text-slate-500`, children: `历史全矩阵累计入库` }),
                (0, $.jsxs)(`div`, {
                  className: `flex items-baseline gap-1 mt-1`,
                  children: [
                    (0, $.jsx)(`span`, { className: `text-2xl font-black font-mono text-purple-700`, children: (totalStats.totalAll / 10000).toFixed(1) }),
                    (0, $.jsx)(`span`, { className: `text-xs text-purple-600 font-bold`, children: `万条` }),
                  ],
                }),
                (0, $.jsx)(`div`, {
                  className: `text-[10.5px] text-slate-400 font-mono mt-1`,
                  children: `全平台毫秒级去重入库`,
                }),
              ],
            }),
          ],
        }),

        /* Global Date Filter Bar (按日期查询) */
        (0, $.jsxs)(`div`, {
          className: `bg-white border border-slate-200/80 rounded-2xl p-3.5 shadow-xs flex items-center justify-between gap-3 flex-wrap`,
          children: [
            (0, $.jsxs)(`div`, {
              className: `flex items-center gap-2 flex-wrap text-xs`,
              children: [
                (0, $.jsx)(`span`, { className: `text-xs font-bold text-slate-700 flex items-center gap-1`, children: `📅 抓取量查询日期:` }),
                [
                  { key: `today`, label: `今日 (09-30)` },
                  { key: `yesterday`, label: `昨日 (09-29)` },
                  { key: `3d`, label: `近3天` },
                  { key: `7d`, label: `近7天` },
                  { key: `15d`, label: `近15天` },
                  { key: `30d`, label: `近30天` },
                  { key: `all`, label: `全部历史` },
                ].map((btn) =>
                  (0, $.jsx)(
                    `button`,
                    {
                      type: `button`,
                      onClick: () => setDateRange(btn.key),
                      className: `px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${dateRange === btn.key ? `bg-[#0066FF] text-white shadow-2xs` : `bg-slate-100 text-slate-600 hover:bg-slate-200`}`,
                      children: btn.label,
                    },
                    btn.key,
                  ),
                ),
                (0, $.jsx)(`input`, {
                  type: `date`,
                  value: customDate,
                  onChange: (e) => {
                    setCustomDate(e.target.value);
                    setDateRange(`custom`);
                  },
                  className: `px-2 py-0.5 bg-white border border-slate-200 rounded text-xs font-mono text-slate-700 focus:outline-none`,
                  title: `自定义指定日期`,
                }),
              ],
            }),
            (0, $.jsxs)(`div`, {
              className: `text-xs text-slate-500 font-mono flex items-center gap-2`,
              children: [
                (0, $.jsx)(`span`, { children: `当前统计范围:` }),
                (0, $.jsx)(`span`, { className: `font-bold text-[#0066FF] bg-blue-50 px-2 py-0.5 rounded-md border border-blue-200`, children: getDateRangeLabel() }),
              ],
            }),
          ],
        }),

        /* TAB 1: 微博账号关注台账 */
        activeTab === `accounts` &&
          (0, $.jsxs)(`div`, {
            className: `bg-white border border-slate-200/80 rounded-2xl shadow-xs overflow-hidden flex flex-col`,
            children: [
              /* Filter Bar */
              (0, $.jsxs)(`div`, {
                className: `p-4 border-b border-slate-100 flex items-center justify-between gap-3 flex-wrap text-xs`,
                children: [
                  (0, $.jsxs)(`div`, {
                    className: `flex items-center gap-2 flex-wrap`,
                    children: [
                      (0, $.jsx)(`input`, {
                        type: `text`,
                        value: accountSearch,
                        onChange: (e) => setAccountSearch(e.target.value),
                        placeholder: `搜索博主名称、UID、手机ID、分类...`,
                        className: `w-64 px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:bg-white focus:outline-none focus:border-blue-500`,
                      }),
                      (0, $.jsxs)(`select`, {
                        value: accountStatusFilter,
                        onChange: (e) => setAccountStatusFilter(e.target.value),
                        className: `px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-700`,
                        children: [
                          (0, $.jsx)(`option`, { value: `all`, children: `全部状态 (${accountList.length})` }),
                          (0, $.jsx)(`option`, { value: `normal`, children: `正常监控中` }),
                          (0, $.jsx)(`option`, { value: `abnormal`, children: `异常风控卡顿` }),
                        ],
                      }),
                    ],
                  }),
                  (0, $.jsxs)(`div`, {
                    className: `text-xs text-slate-500`,
                    children: [
                      `已匹配 `,
                      (0, $.jsx)(`strong`, { className: `text-slate-900 font-mono`, children: filteredAccounts.length }),
                      ` 个账号`,
                    ],
                  }),
                ],
              }),

              /* Accounts Table */
              (0, $.jsx)(`div`, {
                className: `overflow-x-auto`,
                children: (0, $.jsxs)(`table`, {
                  className: `w-full text-left text-xs border-collapse`,
                  children: [
                    (0, $.jsx)(`thead`, {
                      children: (0, $.jsxs)(`tr`, {
                        className: `bg-slate-50/80 border-b border-slate-200 text-[11px] font-black text-slate-600 uppercase tracking-wider whitespace-nowrap`,
                        children: [
                          (0, $.jsx)(`th`, { className: `py-3 px-4 min-w-[200px]`, children: `微博账号信息 (名称 / UID)` }),
                          (0, $.jsx)(`th`, { className: `py-3 px-3 min-w-[160px]`, children: `绑定物理手机` }),
                          (0, $.jsx)(`th`, { className: `py-3 px-3 min-w-[130px]`, children: `关注位 / 轮询频次` }),
                          (0, $.jsx)(`th`, { className: `py-3 px-4 min-w-[150px] text-right`, children: `抓取数据量 (按日期)` }),
                          (0, $.jsx)(`th`, { className: `py-3 px-4 min-w-[160px]`, children: `7日抓取趋势 (每天抓取量)` }),
                          (0, $.jsx)(`th`, { className: `py-3 px-3 min-w-[110px] text-center`, children: `状态` }),
                          (0, $.jsx)(`th`, { className: `py-3 px-4 min-w-[140px] text-center`, children: `快捷操作` }),
                        ],
                      }),
                    }),
                    (0, $.jsx)(`tbody`, {
                      className: `divide-y divide-slate-100`,
                      children: filteredAccounts.map((acc) => {
                        let isAbn = acc.status === `abnormal`;
                        let m = getAccountDailyMetrics(acc);
                        return (0, $.jsxs)(
                          `tr`,
                          {
                            className: `hover:bg-slate-50/80 transition-colors ${isAbn ? `bg-rose-50/20` : ``}`,
                            children: [
                              /* Account Info */
                              (0, $.jsx)(`td`, {
                                className: `py-3.5 px-4`,
                                children: (0, $.jsxs)(`div`, {
                                  className: `flex flex-col gap-0.5`,
                                  children: [
                                    (0, $.jsxs)(`div`, {
                                      className: `flex items-center gap-1.5`,
                                      children: [
                                        (0, $.jsx)(`a`, {
                                          href: acc.weiboUrl,
                                          target: `_blank`,
                                          rel: `noreferrer`,
                                          className: `font-black text-slate-900 hover:text-blue-600 transition-colors text-sm hover:underline`,
                                          children: acc.weiboName,
                                        }),
                                        (0, $.jsx)(`span`, {
                                          className: `px-1.5 py-0.2 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200`,
                                          children: acc.category,
                                        }),
                                      ],
                                    }),
                                    (0, $.jsxs)(`div`, {
                                      className: `text-[10.5px] font-mono text-slate-400 flex items-center gap-1`,
                                      children: [
                                        `UID: `,
                                        (0, $.jsx)(`span`, { className: `text-slate-600 font-semibold`, children: acc.uid }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),

                              /* Bound Phone */
                              (0, $.jsx)(`td`, {
                                className: `py-3.5 px-3`,
                                children: (0, $.jsxs)(`div`, {
                                  className: `flex flex-col gap-0.5`,
                                  children: [
                                    (0, $.jsxs)(`div`, {
                                      className: `font-mono font-bold text-slate-900 text-xs flex items-center gap-1`,
                                      children: [
                                        (0, $.jsx)(`span`, { className: `w-1.5 h-1.5 rounded-full ${acc.phoneStatus === `abnormal` ? `bg-rose-500 animate-pulse` : `bg-emerald-500`}` }),
                                        acc.phoneId,
                                      ],
                                    }),
                                    (0, $.jsx)(`div`, {
                                      className: `text-[10px] text-slate-500`,
                                      children: acc.phoneModel,
                                    }),
                                  ],
                                }),
                              }),

                              /* Follow Index & Freq */
                              (0, $.jsx)(`td`, {
                                className: `py-3.5 px-3`,
                                children: (0, $.jsxs)(`div`, {
                                  className: `flex flex-col gap-0.5`,
                                  children: [
                                    (0, $.jsxs)(`div`, {
                                      className: `font-mono text-xs font-bold text-slate-800`,
                                      children: [`关注位: #`, acc.followIndex, ` / 100`],
                                    }),
                                    (0, $.jsxs)(`div`, {
                                      className: `text-[10px] text-blue-700 font-bold bg-blue-50 px-1.5 py-0.2 rounded border border-blue-200 inline-block w-fit`,
                                      children: [acc.scrapeFreq || `3分钟/轮`],
                                    }),
                                  ],
                                }),
                              }),

                              /* Captured Volume by Date */
                              (0, $.jsx)(`td`, {
                                className: `py-3.5 px-4 text-right`,
                                children: (0, $.jsxs)(`div`, {
                                  className: `flex flex-col items-end gap-0.5`,
                                  children: [
                                    (0, $.jsxs)(`div`, {
                                      className: `font-mono font-black text-sm text-emerald-700`,
                                      children: [m.periodVolume.toLocaleString(), ` 条`],
                                    }),
                                    (0, $.jsxs)(`div`, {
                                      className: `text-[10px] text-slate-400 font-mono`,
                                      children: [`今日: `, m.todayVolume.toLocaleString(), ` | 总: `, (m.totalVolume / 10000).toFixed(1), `万`],
                                    }),
                                  ],
                                }),
                              }),

                              /* 7-Day Trend Visual Sparkline */
                              (0, $.jsx)(`td`, {
                                className: `py-3.5 px-4`,
                                children: (0, $.jsxs)(`div`, {
                                  className: `flex items-center gap-1 cursor-pointer group`,
                                  onClick: () => {
                                    setTrendModalItem(acc);
                                    setTrendModalType(`account`);
                                  },
                                  title: `点击查看【${acc.weiboName}】每日详细抓取走势`,
                                  children: [
                                    (0, $.jsx)(`div`, {
                                      className: `flex items-end gap-1 h-7 bg-slate-50 p-1 rounded-lg border border-slate-200 group-hover:border-blue-400 transition-colors`,
                                      children: m.history.map((h, i) => {
                                        let hPercent = Math.max(15, Math.round((h.volume / m.maxDaily) * 100));
                                        return (0, $.jsx)(
                                          `div`,
                                          {
                                            className: `w-2.5 rounded-t transition-all ${i === 0 ? `bg-[#0066FF]` : `bg-blue-300 group-hover:bg-blue-400`}`,
                                            style: { height: `${hPercent}%` },
                                            title: `${h.label}: ${h.volume.toLocaleString()} 条`,
                                          },
                                          h.date,
                                        );
                                      }),
                                    }),
                                    (0, $.jsxs)(`div`, {
                                      className: `text-[10px] text-slate-400 font-mono group-hover:text-blue-600 transition-colors`,
                                      children: [`日均 `, Math.round(m.history.reduce((a, b) => a + b.volume, 0) / 7).toLocaleString(), `条`],
                                    }),
                                  ],
                                }),
                              }),

                              /* Status */
                              (0, $.jsx)(`td`, {
                                className: `py-3.5 px-3 text-center`,
                                children: (0, $.jsx)(`span`, {
                                  className: `inline-block px-2 py-0.5 rounded-full text-[10px] font-bold ${isAbn ? `bg-rose-100 text-rose-800 border border-rose-300 animate-pulse` : `bg-emerald-50 text-emerald-700 border border-emerald-200`}`,
                                  children: isAbn ? `风控异常` : `正常轮询`,
                                }),
                              }),

                              /* Operations */
                              (0, $.jsx)(`td`, {
                                className: `py-3.5 px-4 text-center`,
                                children: (0, $.jsxs)(`div`, {
                                  className: `flex items-center justify-center gap-1.5`,
                                  children: [
                                    (0, $.jsx)(`button`, {
                                      type: `button`,
                                      onClick: () => handleInstantScrapeAccount(acc),
                                      className: `p-1.5 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-200 transition-colors cursor-pointer`,
                                      title: `立即下发跑词抓取`,
                                      children: (0, $.jsx)(`span`, { className: `text-xs`, children: `⚡` }),
                                    }),
                                    isAbn &&
                                      (0, $.jsx)(`button`, {
                                        type: `button`,
                                        onClick: () => {
                                          setSelectedAccountForSwitch(acc);
                                          setSwitchPhoneModalOpen(!0);
                                        },
                                        className: `px-2 py-1 rounded-lg bg-rose-600 text-white hover:bg-rose-700 font-bold text-[10px] transition-colors cursor-pointer shadow-2xs`,
                                        children: `切机`,
                                      }),
                                    (0, $.jsx)(`button`, {
                                      type: `button`,
                                      onClick: () => {
                                        setTrendModalItem(acc);
                                        setTrendModalType(`account`);
                                      },
                                      className: `p-1.5 rounded-lg bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200 transition-colors cursor-pointer`,
                                      title: `查看每日抓取流水与趋势图`,
                                      children: (0, $.jsx)(`span`, { className: `text-xs`, children: `📈` }),
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          },
                          acc.id,
                        );
                      }),
                    }),
                  ],
                }),
              }),
            ],
          }),

        /* TAB 2: 实体手机集群与风控监控 */
        activeTab === `phones` &&
          (0, $.jsxs)(`div`, {
            className: `bg-white border border-slate-200/80 rounded-2xl shadow-xs overflow-hidden flex flex-col`,
            children: [
              /* Filter & Action Bar */
              (0, $.jsxs)(`div`, {
                className: `p-4 border-b border-slate-100 flex items-center justify-between gap-3 flex-wrap text-xs`,
                children: [
                  (0, $.jsxs)(`div`, {
                    className: `flex items-center gap-2 flex-wrap`,
                    children: [
                      (0, $.jsx)(`input`, {
                        type: `text`,
                        value: phoneSearch,
                        onChange: (e) => setPhoneSearch(e.target.value),
                        placeholder: `搜索手机编号、型号、微博主号、ADB IP...`,
                        className: `w-64 px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:bg-white focus:outline-none focus:border-blue-500`,
                      }),
                      (0, $.jsxs)(`select`, {
                        value: phoneStatusFilter,
                        onChange: (e) => setPhoneStatusFilter(e.target.value),
                        className: `px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-700`,
                        children: [
                          (0, $.jsx)(`option`, { value: `all`, children: `全部设备状态 (${phoneList.length})` }),
                          (0, $.jsx)(`option`, { value: `normal`, children: `正常在线运行` }),
                          (0, $.jsx)(`option`, { value: `standby`, children: `热备就绪` }),
                          (0, $.jsx)(`option`, { value: `abnormal`, children: `异常风控卡顿` }),
                        ],
                      }),
                    ],
                  }),
                  (0, $.jsxs)(`div`, {
                    className: `flex items-center gap-2`,
                    children: [
                      (0, $.jsxs)(`button`, {
                        type: `button`,
                        onClick: handleOpenAddPhone,
                        className: `px-3.5 py-1.5 bg-[#0066FF] hover:bg-blue-700 text-white rounded-xl font-bold text-xs shadow-xs transition-colors cursor-pointer flex items-center gap-1`,
                        children: [
                          (0, $.jsx)(`span`, { children: `+` }),
                          (0, $.jsx)(`span`, { children: `新增手机设备` }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),

              /* Phones Table */
              (0, $.jsx)(`div`, {
                className: `overflow-x-auto`,
                children: (0, $.jsxs)(`table`, {
                  className: `w-full text-left text-xs border-collapse`,
                  children: [
                    (0, $.jsx)(`thead`, {
                      children: (0, $.jsxs)(`tr`, {
                        className: `bg-slate-50/80 border-b border-slate-200 text-[11px] font-black text-slate-600 uppercase tracking-wider whitespace-nowrap`,
                        children: [
                          (0, $.jsx)(`th`, { className: `py-3 px-4 min-w-[180px]`, children: `手机编号 / 硬件型号` }),
                          (0, $.jsx)(`th`, { className: `py-3 px-3 min-w-[160px]`, children: `登录微博主账号` }),
                          (0, $.jsx)(`th`, { className: `py-3 px-3 min-w-[150px]`, children: `ADB 通信 IP:端口` }),
                          (0, $.jsx)(`th`, { className: `py-3 px-3 min-w-[110px]`, children: `绑定账号数` }),
                          (0, $.jsx)(`th`, { className: `py-3 px-4 min-w-[150px] text-right`, children: `设备抓取量 (按日期)` }),
                          (0, $.jsx)(`th`, { className: `py-3 px-4 min-w-[160px]`, children: `7日设备负载走势` }),
                          (0, $.jsx)(`th`, { className: `py-3 px-3 min-w-[110px] text-center`, children: `状态 / 心跳` }),
                          (0, $.jsx)(`th`, { className: `py-3 px-4 min-w-[140px] text-center`, children: `设备维护操作` }),
                        ],
                      }),
                    }),
                    (0, $.jsx)(`tbody`, {
                      className: `divide-y divide-slate-100`,
                      children: filteredPhones.map((phone) => {
                        let isAbn = phone.status === `abnormal`;
                        let isSb = !!phone.isStandby;
                        let pm = getPhoneDailyMetrics(phone);

                        return (0, $.jsxs)(
                          `tr`,
                          {
                            className: `hover:bg-slate-50/80 transition-colors ${isAbn ? `bg-rose-50/20` : isSb ? `bg-amber-50/20` : ``}`,
                            children: [
                              /* ID & Model */
                              (0, $.jsx)(`td`, {
                                className: `py-3.5 px-4`,
                                children: (0, $.jsxs)(`div`, {
                                  className: `flex flex-col gap-0.5`,
                                  children: [
                                    (0, $.jsxs)(`div`, {
                                      className: `flex items-center gap-1.5`,
                                      children: [
                                        (0, $.jsx)(`span`, {
                                          className: `font-mono font-black text-slate-900 text-sm`,
                                          children: phone.id,
                                        }),
                                        isSb &&
                                          (0, $.jsx)(`span`, {
                                            className: `px-1.5 py-0.2 rounded text-[9.5px] font-bold bg-amber-100 text-amber-800 border border-amber-300`,
                                            children: `热备机`,
                                          }),
                                      ],
                                    }),
                                    (0, $.jsx)(`div`, {
                                      className: `text-[10.5px] text-slate-500`,
                                      children: phone.model,
                                    }),
                                  ],
                                }),
                              }),

                              /* Weibo Account */
                              (0, $.jsx)(`td`, {
                                className: `py-3.5 px-3 font-mono font-bold text-slate-800`,
                                children: phone.weiboAccount,
                              }),

                              /* ADB IP */
                              (0, $.jsx)(`td`, {
                                className: `py-3.5 px-3 font-mono text-slate-600 text-xs`,
                                children: phone.adbIp,
                              }),

                              /* Bound Count */
                              (0, $.jsx)(`td`, {
                                className: `py-3.5 px-3`,
                                children: (0, $.jsxs)(`div`, {
                                  className: `font-mono font-bold text-slate-800`,
                                  children: [pm.boundCount, ` 个账号`],
                                }),
                              }),

                              /* Device Daily Volume */
                              (0, $.jsx)(`td`, {
                                className: `py-3.5 px-4 text-right`,
                                children: (0, $.jsxs)(`div`, {
                                  className: `flex flex-col items-end gap-0.5`,
                                  children: [
                                    (0, $.jsxs)(`div`, {
                                      className: `font-mono font-black text-sm text-emerald-700`,
                                      children: [pm.periodVolume.toLocaleString(), ` 条`],
                                    }),
                                    (0, $.jsxs)(`div`, {
                                      className: `text-[10px] text-slate-400 font-mono`,
                                      children: [`日均: `, Math.round(pm.history.reduce((a, b) => a + b.volume, 0) / 7).toLocaleString(), `条`],
                                    }),
                                  ],
                                }),
                              }),

                              /* 7-Day Trend Visual Sparkline */
                              (0, $.jsx)(`td`, {
                                className: `py-3.5 px-4`,
                                children: (0, $.jsxs)(`div`, {
                                  className: `flex items-center gap-1 cursor-pointer group`,
                                  onClick: () => {
                                    setTrendModalItem(phone);
                                    setTrendModalType(`phone`);
                                  },
                                  title: `点击查看【${phone.id}】每日设备抓取走势与各账号贡献`,
                                  children: [
                                    (0, $.jsx)(`div`, {
                                      className: `flex items-end gap-1 h-7 bg-slate-50 p-1 rounded-lg border border-slate-200 group-hover:border-blue-400 transition-colors`,
                                      children: pm.history.map((h, i) => {
                                        let hPercent = Math.max(15, Math.round((h.volume / pm.maxDaily) * 100));
                                        return (0, $.jsx)(
                                          `div`,
                                          {
                                            className: `w-2.5 rounded-t transition-all ${i === 0 ? `bg-emerald-600` : `bg-emerald-300 group-hover:bg-emerald-400`}`,
                                            style: { height: `${hPercent}%` },
                                            title: `${h.label}: ${h.volume.toLocaleString()} 条`,
                                          },
                                          h.date,
                                        );
                                      }),
                                    }),
                                    (0, $.jsxs)(`div`, {
                                      className: `text-[10px] text-slate-400 font-mono group-hover:text-blue-600 transition-colors`,
                                      children: [`今日 `, pm.todayVolume.toLocaleString(), `条`],
                                    }),
                                  ],
                                }),
                              }),

                              /* Status & Heartbeat */
                              (0, $.jsx)(`td`, {
                                className: `py-3.5 px-3 text-center`,
                                children: (0, $.jsxs)(`div`, {
                                  className: `flex flex-col items-center gap-0.5`,
                                  children: [
                                    (0, $.jsx)(`span`, {
                                      className: `inline-block px-2 py-0.5 rounded-full text-[10px] font-bold ${isAbn ? `bg-rose-100 text-rose-800 border border-rose-300` : isSb ? `bg-amber-100 text-amber-800 border border-amber-300` : `bg-emerald-50 text-emerald-700 border border-emerald-200`}`,
                                      children: isAbn ? `风控卡顿` : isSb ? `热备就绪` : `在线正常`,
                                    }),
                                    (0, $.jsx)(`span`, {
                                      className: `text-[9.5px] text-slate-400 font-mono`,
                                      children: phone.lastHeartbeat || `刚刚`,
                                    }),
                                  ],
                                }),
                              }),

                              /* Operations */
                              (0, $.jsx)(`td`, {
                                className: `py-3.5 px-4 text-center`,
                                children: (0, $.jsxs)(`div`, {
                                  className: `flex items-center justify-center gap-1.5`,
                                  children: [
                                    (0, $.jsx)(`button`, {
                                      type: `button`,
                                      onClick: () => {
                                        setTrendModalItem(phone);
                                        setTrendModalType(`phone`);
                                      },
                                      className: `p-1.5 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-200 transition-colors cursor-pointer`,
                                      title: `查看该手机每日抓取趋势`,
                                      children: (0, $.jsx)(`span`, { className: `text-xs`, children: `📊` }),
                                    }),
                                    (0, $.jsx)(`button`, {
                                      type: `button`,
                                      onClick: () => handleOpenEditPhone(phone),
                                      className: `p-1.5 rounded-lg bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200 transition-colors cursor-pointer`,
                                      title: `编辑设备`,
                                      children: (0, $.jsx)(`span`, { className: `text-xs`, children: `✏️` }),
                                    }),
                                    (0, $.jsx)(`button`, {
                                      type: `button`,
                                      onClick: () => handleDeletePhone(phone.id),
                                      className: `p-1.5 rounded-lg bg-slate-50 text-slate-400 hover:text-rose-600 hover:bg-rose-50 border border-slate-200 transition-colors cursor-pointer`,
                                      title: `删除设备`,
                                      children: (0, $.jsx)(`span`, { className: `text-xs`, children: `🗑️` }),
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          },
                          phone.id,
                        );
                      }),
                    }),
                  ],
                }),
              }),
            ],
          }),

        /* TAB 3: 📊 抓取总统计与多维趋势大盘 */
        activeTab === `stats` &&
          (0, $.jsxs)(`div`, {
            className: `flex flex-col gap-4.5`,
            children: [
              /* 7-Day Total Capture Trend Bar Chart */
              (0, $.jsxs)(`div`, {
                className: `bg-white border border-slate-200/80 rounded-2xl p-5 shadow-xs flex flex-col gap-4`,
                children: [
                  (0, $.jsxs)(`div`, {
                    className: `flex items-center justify-between gap-2 flex-wrap pb-3 border-b border-slate-100`,
                    children: [
                      (0, $.jsxs)(`div`, {
                        className: `flex items-center gap-2`,
                        children: [
                          (0, $.jsx)(`span`, { className: `text-lg`, children: `📈` }),
                          (0, $.jsx)(`h3`, { className: `font-black text-slate-900 text-sm`, children: `全网实体手机矩阵每日总抓取数据量走势 (近7天)` }),
                        ],
                      }),
                      (0, $.jsxs)(`div`, {
                        className: `text-xs text-slate-500 font-mono flex items-center gap-3`,
                        children: [
                          (0, $.jsxs)(`span`, { children: [`近7天总抓取: `, (0, $.jsx)(`strong`, { className: `text-[#0066FF]`, children: totalStats.dailySumHistory.reduce((a, b) => a + b.volume, 0).toLocaleString() }), ` 条`] }),
                          (0, $.jsxs)(`span`, { children: [`日均抓取: `, (0, $.jsx)(`strong`, { className: `text-emerald-700`, children: Math.round(totalStats.dailySumHistory.reduce((a, b) => a + b.volume, 0) / 7).toLocaleString() }), ` 条/天`] }),
                        ],
                      }),
                    ],
                  }),
                  /* SVG / HTML Bar Chart */
                  (0, $.jsx)(`div`, {
                    className: `grid grid-cols-7 gap-3 h-48 items-end pt-4 pb-2 px-2 bg-slate-50/70 rounded-xl border border-slate-100`,
                    children: totalStats.dailySumHistory.map((dayItem, idx) => {
                      let heightPct = Math.max(12, Math.round((dayItem.volume / totalStats.maxTotalDaily) * 100));
                      let isToday = idx === 0;
                      return (0, $.jsxs)(
                        `div`,
                        {
                          className: `flex flex-col items-center gap-1.5 h-full justify-end group`,
                          children: [
                            (0, $.jsxs)(`span`, {
                              className: `text-[10px] font-mono font-bold text-slate-600 opacity-80 group-hover:opacity-100 group-hover:text-blue-600 transition-opacity`,
                              children: [dayItem.volume.toLocaleString(), `条`],
                            }),
                            (0, $.jsx)(`div`, {
                              className: `w-full max-w-[42px] rounded-t-xl transition-all ${isToday ? `bg-gradient-to-t from-blue-700 to-[#0066FF] shadow-sm` : `bg-gradient-to-t from-blue-400 to-blue-300 group-hover:from-blue-500 group-hover:to-blue-400`}`,
                              style: { height: `${heightPct}%` },
                            }),
                            (0, $.jsx)(`span`, {
                              className: `text-[10.5px] font-mono font-bold ${isToday ? `text-[#0066FF]` : `text-slate-500`}`,
                              children: dayItem.label,
                            }),
                          ],
                        },
                        dayItem.date,
                      );
                    }),
                  }),
                ],
              }),

              /* 2-Column: Account Ranking vs Phone Device Ranking */
              (0, $.jsxs)(`div`, {
                className: `grid grid-cols-1 lg:grid-cols-2 gap-4.5`,
                children: [
                  /* Accounts Daily Ranking */
                  (0, $.jsxs)(`div`, {
                    className: `bg-white border border-slate-200/80 rounded-2xl p-5 shadow-xs flex flex-col gap-3`,
                    children: [
                      (0, $.jsxs)(`div`, {
                        className: `flex items-center justify-between pb-2 border-b border-slate-100`,
                        children: [
                          (0, $.jsxs)(`div`, {
                            className: `flex items-center gap-2 font-black text-slate-900 text-sm`,
                            children: [
                              (0, $.jsx)(`span`, { children: `👥` }),
                              `各博主账号每日抓取产出排行榜 (Top Accounts)`,
                            ],
                          }),
                          (0, $.jsx)(`span`, { className: `text-xs text-slate-400 font-mono`, children: `按所选周期抓取排序` }),
                        ],
                      }),
                      (0, $.jsx)(`div`, {
                        className: `flex flex-col gap-2.5 max-h-[420px] overflow-y-auto pr-1`,
                        children: [...accountList]
                          .sort((a, b) => getAccountDailyMetrics(b).periodVolume - getAccountDailyMetrics(a).periodVolume)
                          .map((acc, rankIdx) => {
                            let m = getAccountDailyMetrics(acc);
                            let maxAccVol = Math.max(...accountList.map((a) => getAccountDailyMetrics(a).periodVolume), 1);
                            let pct = Math.max(5, Math.round((m.periodVolume / maxAccVol) * 100));
                            return (0, $.jsxs)(
                              `div`,
                              {
                                className: `p-2.5 rounded-xl bg-slate-50/90 border border-slate-200/80 flex flex-col gap-1.5 hover:bg-blue-50/40 transition-colors cursor-pointer`,
                                onClick: () => {
                                  setTrendModalItem(acc);
                                  setTrendModalType(`account`);
                                },
                                children: [
                                  (0, $.jsxs)(`div`, {
                                    className: `flex items-center justify-between text-xs`,
                                    children: [
                                      (0, $.jsxs)(`div`, {
                                        className: `flex items-center gap-2`,
                                        children: [
                                          (0, $.jsx)(`span`, {
                                            className: `w-5 h-5 rounded-full flex items-center justify-center font-mono font-black text-[10.5px] ${rankIdx === 0 ? `bg-amber-400 text-amber-950` : rankIdx === 1 ? `bg-slate-300 text-slate-800` : rankIdx === 2 ? `bg-amber-600 text-white` : `bg-slate-200 text-slate-600`}`,
                                            children: rankIdx + 1,
                                          }),
                                          (0, $.jsx)(`span`, { className: `font-extrabold text-slate-900`, children: acc.weiboName }),
                                          (0, $.jsx)(`span`, { className: `text-[10px] text-slate-400 font-mono`, children: `(${acc.phoneId})` }),
                                        ],
                                      }),
                                      (0, $.jsxs)(`div`, {
                                        className: `font-mono font-black text-emerald-700`,
                                        children: [m.periodVolume.toLocaleString(), ` 条`],
                                      }),
                                    ],
                                  }),
                                  (0, $.jsx)(`div`, {
                                    className: `w-full bg-slate-200 h-1.5 rounded-full overflow-hidden`,
                                    children: (0, $.jsx)(`div`, {
                                      className: `bg-gradient-to-r from-blue-500 to-[#0066FF] h-full rounded-full`,
                                      style: { width: `${pct}%` },
                                    }),
                                  }),
                                ],
                              },
                              acc.id,
                            );
                          }),
                      }),
                    ],
                  }),

                  /* Phones Daily Ranking */
                  (0, $.jsxs)(`div`, {
                    className: `bg-white border border-slate-200/80 rounded-2xl p-5 shadow-xs flex flex-col gap-3`,
                    children: [
                      (0, $.jsxs)(`div`, {
                        className: `flex items-center justify-between pb-2 border-b border-slate-100`,
                        children: [
                          (0, $.jsxs)(`div`, {
                            className: `flex items-center gap-2 font-black text-slate-900 text-sm`,
                            children: [
                              (0, $.jsx)(`span`, { children: `📱` }),
                              `实体手机设备日抓取负载排行榜 (Top Devices)`,
                            ],
                          }),
                          (0, $.jsx)(`span`, { className: `text-xs text-slate-400 font-mono`, children: `按设备产出排序` }),
                        ],
                      }),
                      (0, $.jsx)(`div`, {
                        className: `flex flex-col gap-2.5 max-h-[420px] overflow-y-auto pr-1`,
                        children: [...phoneList]
                          .sort((a, b) => getPhoneDailyMetrics(b).periodVolume - getPhoneDailyMetrics(a).periodVolume)
                          .map((phone, rankIdx) => {
                            let pm = getPhoneDailyMetrics(phone);
                            let maxPhoneVol = Math.max(...phoneList.map((p) => getPhoneDailyMetrics(p).periodVolume), 1);
                            let pct = Math.max(5, Math.round((pm.periodVolume / maxPhoneVol) * 100));
                            return (0, $.jsxs)(
                              `div`,
                              {
                                className: `p-2.5 rounded-xl bg-slate-50/90 border border-slate-200/80 flex flex-col gap-1.5 hover:bg-emerald-50/40 transition-colors cursor-pointer`,
                                onClick: () => {
                                  setTrendModalItem(phone);
                                  setTrendModalType(`phone`);
                                },
                                children: [
                                  (0, $.jsxs)(`div`, {
                                    className: `flex items-center justify-between text-xs`,
                                    children: [
                                      (0, $.jsxs)(`div`, {
                                        className: `flex items-center gap-2`,
                                        children: [
                                          (0, $.jsx)(`span`, {
                                            className: `w-5 h-5 rounded-full flex items-center justify-center font-mono font-black text-[10.5px] ${rankIdx === 0 ? `bg-amber-400 text-amber-950` : rankIdx === 1 ? `bg-slate-300 text-slate-800` : rankIdx === 2 ? `bg-amber-600 text-white` : `bg-slate-200 text-slate-600`}`,
                                            children: rankIdx + 1,
                                          }),
                                          (0, $.jsx)(`span`, { className: `font-extrabold text-slate-900 font-mono`, children: phone.id }),
                                          (0, $.jsx)(`span`, { className: `text-[10px] text-slate-500`, children: phone.model }),
                                        ],
                                      }),
                                      (0, $.jsxs)(`div`, {
                                        className: `font-mono font-black text-blue-700`,
                                        children: [pm.periodVolume.toLocaleString(), ` 条`],
                                      }),
                                    ],
                                  }),
                                  (0, $.jsx)(`div`, {
                                    className: `w-full bg-slate-200 h-1.5 rounded-full overflow-hidden`,
                                    children: (0, $.jsx)(`div`, {
                                      className: `bg-gradient-to-r from-emerald-500 to-emerald-600 h-full rounded-full`,
                                      style: { width: `${pct}%` },
                                    }),
                                  }),
                                ],
                              },
                              phone.id,
                            );
                          }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),

        /* Detail Trend History Modal (单账号/单手机每日抓取流水与趋势弹窗) */
        trendModalItem &&
          (0, $.jsx)(`div`, {
            className: `fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200`,
            children: (0, $.jsxs)(`div`, {
              className: `bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-xl max-h-[90vh] flex flex-col overflow-hidden animate-in zoom-in-95 duration-150`,
              onClick: (e) => e.stopPropagation(),
              children: [
                (0, $.jsxs)(`div`, {
                  className: `px-6 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-50/80`,
                  children: [
                    (0, $.jsxs)(`div`, {
                      className: `flex items-center gap-2.5`,
                      children: [
                        (0, $.jsx)(`span`, { className: `text-xl`, children: trendModalType === `account` ? `👥` : `📱` }),
                        (0, $.jsxs)(`div`, {
                          children: [
                            (0, $.jsxs)(`h3`, {
                              className: `font-black text-slate-900 text-sm`,
                              children: [
                                trendModalType === `account`
                                  ? `博主【${trendModalItem.weiboName}】每日抓取流水与趋势`
                                  : `实体手机【${trendModalItem.id}】每日设备总抓取走势`,
                              ],
                            }),
                            (0, $.jsx)(`p`, {
                              className: `text-[11px] text-slate-500`,
                              children: `近7天连续抓取数据量监控与波动分析`,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, $.jsx)(`button`, {
                      type: `button`,
                      onClick: () => setTrendModalItem(null),
                      className: `p-1.5 rounded-lg hover:bg-slate-200 text-slate-400 hover:text-slate-700 transition-colors cursor-pointer`,
                      children: (0, $.jsx)(`span`, { className: `text-sm font-bold`, children: `✕` }),
                    }),
                  ],
                }),
                /* Modal Content */
                (0, $.jsxs)(`div`, {
                  className: `p-6 overflow-y-auto space-y-4 flex-1 text-xs`,
                  children: [
                    (() => {
                      let dm = trendModalType === `account` ? getAccountDailyMetrics(trendModalItem) : getPhoneDailyMetrics(trendModalItem);
                      return (0, $.jsxs)(`div`, {
                        className: `flex flex-col gap-4`,
                        children: [
                          /* Visual Bars */
                          (0, $.jsx)(`div`, {
                            className: `grid grid-cols-7 gap-2 h-36 items-end p-3 bg-slate-50 rounded-xl border border-slate-100`,
                            children: dm.history.map((h, i) => {
                              let hp = Math.max(15, Math.round((h.volume / dm.maxDaily) * 100));
                              return (0, $.jsxs)(
                                `div`,
                                {
                                  className: `flex flex-col items-center gap-1 h-full justify-end`,
                                  children: [
                                    (0, $.jsx)(`span`, { className: `text-[9.5px] font-mono font-bold text-slate-600`, children: h.volume }),
                                    (0, $.jsx)(`div`, {
                                      className: `w-full max-w-[28px] rounded-t-lg ${i === 0 ? `bg-[#0066FF]` : `bg-blue-300`}`,
                                      style: { height: `${hp}%` },
                                    }),
                                    (0, $.jsx)(`span`, { className: `text-[10px] font-mono text-slate-500`, children: h.date }),
                                  ],
                                },
                                h.date,
                              );
                            }),
                          }),
                          /* Daily Table */
                          (0, $.jsxs)(`table`, {
                            className: `w-full text-left text-xs border-collapse`,
                            children: [
                              (0, $.jsx)(`thead`, {
                                children: (0, $.jsxs)(`tr`, {
                                  className: `bg-slate-100 text-slate-600 font-bold border-b border-slate-200`,
                                  children: [
                                    (0, $.jsx)(`th`, { className: `py-2 px-3`, children: `日期` }),
                                    (0, $.jsx)(`th`, { className: `py-2 px-3 text-right`, children: `当天抓取量` }),
                                    (0, $.jsx)(`th`, { className: `py-2 px-3 text-center`, children: `运行状态` }),
                                  ],
                                }),
                              }),
                              (0, $.jsx)(`tbody`, {
                                className: `divide-y divide-slate-100`,
                                children: dm.history.map((h) =>
                                  (0, $.jsxs)(
                                    `tr`,
                                    {
                                      children: [
                                        (0, $.jsx)(`td`, { className: `py-2 px-3 font-mono font-bold`, children: h.label }),
                                        (0, $.jsxs)(`td`, { className: `py-2 px-3 font-mono font-black text-right text-emerald-700`, children: [h.volume.toLocaleString(), ` 条`] }),
                                        (0, $.jsx)(`td`, { className: `py-2 px-3 text-center`, children: (0, $.jsx)(`span`, { className: `px-2 py-0.5 rounded-full text-[10px] bg-emerald-50 text-emerald-700 font-bold`, children: `正常入库` }) }),
                                      ],
                                    },
                                    h.date,
                                  ),
                                ),
                              }),
                            ],
                          }),
                        ],
                      });
                    })(),
                  ],
                }),
                (0, $.jsx)(`div`, {
                  className: `px-6 py-3.5 border-t border-slate-200 bg-slate-50/80 flex items-center justify-end`,
                  children: (0, $.jsx)(`button`, {
                    type: `button`,
                    onClick: () => setTrendModalItem(null),
                    className: `px-4 py-1.5 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-xl cursor-pointer`,
                    children: `关闭`,
                  }),
                }),
              ],
            }),
          }),

        /* Switch Phone Modal (切机至热备机) */
        switchPhoneModalOpen &&
          selectedAccountForSwitch &&
          (0, $.jsx)(`div`, {
            className: `fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200`,
            children: (0, $.jsxs)(`div`, {
              className: `bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-md overflow-hidden animate-in zoom-in-95 duration-150`,
              onClick: (e) => e.stopPropagation(),
              children: [
                (0, $.jsxs)(`div`, {
                  className: `px-5 py-4 border-b border-slate-200 flex items-center justify-between bg-rose-50/80`,
                  children: [
                    (0, $.jsxs)(`div`, {
                      className: `flex items-center gap-2`,
                      children: [
                        (0, $.jsx)(`span`, { className: `text-lg`, children: `🔄` }),
                        (0, $.jsx)(`h3`, { className: `font-black text-rose-900 text-sm`, children: `关注账号故障切机` }),
                      ],
                    }),
                    (0, $.jsx)(`button`, {
                      type: `button`,
                      onClick: () => setSwitchPhoneModalOpen(!1),
                      className: `p-1 rounded text-slate-400 hover:text-slate-700 cursor-pointer`,
                      children: (0, $.jsx)(`span`, { children: `✕` }),
                    }),
                  ],
                }),
                (0, $.jsxs)(`div`, {
                  className: `p-5 space-y-3.5 text-xs`,
                  children: [
                    (0, $.jsxs)(`p`, {
                      className: `text-slate-600 leading-relaxed`,
                      children: [
                        `博主【`,
                        (0, $.jsx)(`strong`, { className: `text-slate-900`, children: selectedAccountForSwitch.weiboName }),
                        `】当前绑定的设备【`,
                        selectedAccountForSwitch.phoneId,
                        `】处于风控异常状态。`,
                      ],
                    }),
                    (0, $.jsxs)(`div`, {
                      className: `flex flex-col gap-1.5`,
                      children: [
                        (0, $.jsx)(`label`, { className: `font-bold text-slate-700`, children: `目标热备手机 *` }),
                        (0, $.jsx)(`select`, {
                          value: targetStandbyPhoneId,
                          onChange: (e) => setTargetStandbyPhoneId(e.target.value),
                          className: `w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl font-bold text-slate-900 focus:bg-white`,
                          children: phoneList.map((p) =>
                            (0, $.jsx)(
                              `option`,
                              {
                                value: p.id,
                                children: `${p.id} (${p.model}) ${p.isStandby ? `[热备机]` : `[正常负载: ${p.boundAccountCount || 0}]`}`,
                              },
                              p.id,
                            ),
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, $.jsxs)(`div`, {
                  className: `px-5 py-3.5 border-t border-slate-200 bg-slate-50/80 flex items-center justify-end gap-2`,
                  children: [
                    (0, $.jsx)(`button`, {
                      type: `button`,
                      onClick: () => setSwitchPhoneModalOpen(!1),
                      className: `px-4 py-1.5 rounded-xl border border-slate-200 font-bold text-slate-600 hover:bg-slate-100 cursor-pointer`,
                      children: `取消`,
                    }),
                    (0, $.jsx)(`button`, {
                      type: `button`,
                      onClick: handleSwitchPhone,
                      className: `px-4 py-1.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold cursor-pointer`,
                      children: `确认切机迁移`,
                    }),
                  ],
                }),
              ],
            }),
          }),

        /* Add / Edit Phone Modal (新增 / 编辑 物理手机) */
        phoneModalOpen &&
          (0, $.jsx)(`div`, {
            className: `fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200`,
            children: (0, $.jsxs)(`div`, {
              className: `bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-lg overflow-hidden animate-in zoom-in-95 duration-150`,
              onClick: (e) => e.stopPropagation(),
              children: [
                (0, $.jsxs)(`div`, {
                  className: `px-6 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-50/80`,
                  children: [
                    (0, $.jsxs)(`div`, {
                      className: `flex items-center gap-2`,
                      children: [
                        (0, $.jsx)(`span`, { className: `text-lg`, children: `📱` }),
                        (0, $.jsx)(`h3`, {
                          className: `font-black text-slate-900 text-sm`,
                          children: editingPhoneId ? `维护编辑物理手机设备【${editingPhoneId}】` : `新增实体手机入集群`,
                        }),
                      ],
                    }),
                    (0, $.jsx)(`button`, {
                      type: `button`,
                      onClick: () => setPhoneModalOpen(!1),
                      className: `p-1 rounded text-slate-400 hover:text-slate-700 cursor-pointer`,
                      children: (0, $.jsx)(`span`, { children: `✕` }),
                    }),
                  ],
                }),
                (0, $.jsxs)(`form`, {
                  onSubmit: handleSavePhone,
                  className: `p-6 space-y-3.5 text-xs`,
                  children: [
                    (0, $.jsxs)(`div`, {
                      className: `grid grid-cols-2 gap-3`,
                      children: [
                        (0, $.jsxs)(`div`, {
                          className: `flex flex-col gap-1`,
                          children: [
                            (0, $.jsx)(`label`, { className: `font-bold text-slate-700`, children: `设备编号 ID *` }),
                            (0, $.jsx)(`input`, {
                              type: `text`,
                              value: phoneFormId,
                              onChange: (e) => setPhoneFormId(e.target.value),
                              disabled: !!editingPhoneId,
                              placeholder: `例如: PHONE-WB-011`,
                              className: `w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl font-bold font-mono text-slate-900 focus:bg-white`,
                            }),
                          ],
                        }),
                        (0, $.jsxs)(`div`, {
                          className: `flex flex-col gap-1`,
                          children: [
                            (0, $.jsx)(`label`, { className: `font-bold text-slate-700`, children: `硬件型号 *` }),
                            (0, $.jsx)(`input`, {
                              type: `text`,
                              value: phoneFormModel,
                              onChange: (e) => setPhoneFormModel(e.target.value),
                              placeholder: `例如: Xiaomi 13 Pro`,
                              className: `w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl font-semibold text-slate-900 focus:bg-white`,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, $.jsxs)(`div`, {
                      className: `grid grid-cols-2 gap-3`,
                      children: [
                        (0, $.jsxs)(`div`, {
                          className: `flex flex-col gap-1`,
                          children: [
                            (0, $.jsx)(`label`, { className: `font-bold text-slate-700`, children: `登录微博主账号 *` }),
                            (0, $.jsx)(`input`, {
                              type: `text`,
                              value: phoneFormWeibo,
                              onChange: (e) => setPhoneFormWeibo(e.target.value),
                              placeholder: `@Weibo_Bot_Master`,
                              className: `w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl font-mono text-slate-900 focus:bg-white`,
                            }),
                          ],
                        }),
                        (0, $.jsxs)(`div`, {
                          className: `flex flex-col gap-1`,
                          children: [
                            (0, $.jsx)(`label`, { className: `font-bold text-slate-700`, children: `ADB 通信 IP:端口 *` }),
                            (0, $.jsx)(`input`, {
                              type: `text`,
                              value: phoneFormAdbIp,
                              onChange: (e) => setPhoneFormAdbIp(e.target.value),
                              placeholder: `192.168.10.101:5555`,
                              className: `w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl font-mono text-slate-900 focus:bg-white`,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, $.jsxs)(`div`, {
                      className: `grid grid-cols-2 gap-3`,
                      children: [
                        (0, $.jsxs)(`div`, {
                          className: `flex flex-col gap-1`,
                          children: [
                            (0, $.jsx)(`label`, { className: `font-bold text-slate-700`, children: `单机关注上限 (博主数)` }),
                            (0, $.jsx)(`input`, {
                              type: `number`,
                              value: phoneFormMaxLimit,
                              onChange: (e) => setPhoneFormMaxLimit(e.target.value),
                              className: `w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl font-mono font-bold text-slate-900 focus:bg-white`,
                            }),
                          ],
                        }),
                        (0, $.jsxs)(`div`, {
                          className: `flex flex-col gap-1`,
                          children: [
                            (0, $.jsx)(`label`, { className: `font-bold text-slate-700`, children: `设备角色` }),
                            (0, $.jsxs)(`select`, {
                              value: phoneFormIsStandby ? `standby` : `normal`,
                              onChange: (e) => setPhoneFormIsStandby(e.target.value === `standby`),
                              className: `w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl font-bold text-slate-900 focus:bg-white`,
                              children: [
                                (0, $.jsx)(`option`, { value: `normal`, children: `正常工作机` }),
                                (0, $.jsx)(`option`, { value: `standby`, children: `热备就绪机` }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, $.jsxs)(`div`, {
                      className: `px-6 py-3.5 border-t border-slate-200 bg-slate-50/80 -mx-6 -mb-6 mt-6 flex items-center justify-end gap-2`,
                      children: [
                        (0, $.jsx)(`button`, {
                          type: `button`,
                          onClick: () => setPhoneModalOpen(!1),
                          className: `px-4 py-2 rounded-xl border border-slate-200 font-bold text-slate-600 hover:bg-slate-100 cursor-pointer`,
                          children: `取消`,
                        }),
                        (0, $.jsx)(`button`, {
                          type: `submit`,
                          className: `px-5 py-2 rounded-xl bg-[#0066FF] hover:bg-blue-700 text-white font-bold cursor-pointer shadow-xs`,
                          children: `保存设备`,
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
"""

bundle = bundle[:pos_pn_start] + new_pn_code + ",\n  " + bundle[pos_pn_end:]

with open('src/app-bundle.js', 'w', encoding='utf-8') as f:
    f.write(bundle)

print("Successfully replaced Pn in src/app-bundle.js")
