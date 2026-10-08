# Script to enhance An component in src/app-bundle.js
with open('src/app-bundle.js', 'r', encoding='utf-8') as f:
    bundle = f.read()

pos_an_start = bundle.find('An = ({')
pos_an_end = bundle.find('jn = ({', pos_an_start)

assert pos_an_start != -1, "An component start not found"
assert pos_an_end != -1, "jn component start not found"

new_an_code = r"""An = ({
    keywords: allKeywordsList,
    services: allServicesList,
    onUpdateKeywords: updateKeywordsFn,
    onBackToServiceList: backToServiceListFn,
    onNavigateToResults: navigateToResultsFn,
    onNavigateToVolcano: navigateToVolcanoFn,
    onAddToast: showToastFn,
  }) => {
    let [kwSearch, setKwSearch] = (0, C.useState)(``),
      [selectedPlatform, setSelectedPlatform] = (0, C.useState)(`all`),
      [selectedCategory, setSelectedCategory] = (0, C.useState)(`all`),
      [selectedImportance, setSelectedImportance] = (0, C.useState)(`all`),
      [selectedTier, setSelectedTier] = (0, C.useState)(`all`),
      [selectedStatus, setSelectedStatus] = (0, C.useState)(`all`),
      [viewMode, setViewMode] = (0, C.useState)(`list`),
      [dateRange, setDateRange] = (0, C.useState)(`today`),
      [customDate, setCustomDate] = (0, C.useState)(`2026-09-30`),
      [sortBy, setSortBy] = (0, C.useState)(`volume-desc`),
      [expandedKwIds, setExpandedKwIds] = (0, C.useState)({}),
      [isEditModalOpen, setIsEditModalOpen] = (0, C.useState)(!1),
      [editingKwItem, setEditingKwItem] = (0, C.useState)(null),
      [isThresholdModalOpen, setIsThresholdModalOpen] = (0, C.useState)(!1),
      [tierThresholds, setTierThresholds] = (0, C.useState)(nn),
      [formKeywordName, setFormKeywordName] = (0, C.useState)(``),
      [formCategory, setFormCategory] = (0, C.useState)(`前沿科技`),
      [formImportance, setFormImportance] = (0, C.useState)(`P0`),
      [formPlatforms, setFormPlatforms] = (0, C.useState)([
        `douyin`,
        `toutiao`,
        `xiaohongshu`,
        `weibo`,
        `zhihu`,
        `bilibili`,
      ]),
      [formMinsAgo, setFormMinsAgo] = (0, C.useState)(5),
      [formDataVolume24h, setFormDataVolume24h] = (0, C.useState)(3500),
      [formAutoTiering, setFormAutoTiering] = (0, C.useState)(!0),
      [formManualTier, setFormManualTier] = (0, C.useState)(`T1`),
      [formManualInterval, setFormManualInterval] = (0, C.useState)(5),
      [formSortType, setFormSortType] = (0, C.useState)(`latest`),
      [formTimeFilter, setFormTimeFilter] = (0, C.useState)(`1d`),
      [formSynonyms, setFormSynonyms] = (0, C.useState)([]),
      [formNegativeKeywords, setFormNegativeKeywords] = (0, C.useState)([]);

    let allPlatformKeys = [
      `douyin`,
      `toutiao`,
      `xiaohongshu`,
      `zhihu`,
      `weibo`,
      `iqiyi`,
      `bilibili`,
      `haokan`,
      `sohutv`,
      `youku`,
    ];

    let toggleExpandRow = (kwId) => {
      setExpandedKwIds((prev) => ({ ...prev, [kwId]: !prev[kwId] }));
    };

    // Helper to calculate platform-specific metrics for a keyword
    let getKwPlatformMetrics = (kw, platformKey) => {
      let hash = 0;
      let seedStr = (kw.id || `KW`) + `_` + platformKey;
      for (let i = 0; i < seedStr.length; i++) {
        hash = (hash << 5) - hash + seedStr.charCodeAt(i);
        hash |= 0;
      }
      let absHash = Math.abs(hash);

      let isIncluded = (kw.targetPlatforms || []).includes(platformKey);
      let platformCount = Math.max(1, (kw.targetPlatforms || []).length);
      let share = isIncluded ? (1 / platformCount) * (0.8 + (absHash % 40) / 100) : 0;
      
      let baseToday = kw.todayHits || 2000;
      let baseTotal = kw.totalHits || 50000;
      let pToday = isIncluded ? Math.max(12, Math.round(baseToday * share)) : 0;
      let pTotal = isIncluded ? Math.max(120, Math.round(baseTotal * share)) : 0;

      // Platform run timestamp calculation
      let offsetMins = (absHash % 14);
      let baseMins = kw.minutesSinceLatestData || 8;
      let pMinsAgo = baseMins + offsetMins;
      
      let pLastRunTime = (() => {
        if (kw.lastCollectTime && kw.lastCollectTime.includes(`:`)) {
          let parts = kw.lastCollectTime.split(` `);
          let datePart = parts[0] || `2026-09-30`;
          let timePart = parts[1] || `08:35`;
          let [hh, mm] = timePart.split(`:`).map(Number);
          let adjMm = (mm - (offsetMins % 30) + 60) % 60;
          let adjHh = hh - ((mm < offsetMins % 30) ? 1 : 0);
          return `${datePart} ${String(adjHh).padStart(2, `0`)}:${String(adjMm).padStart(2, `0`)}:${String(absHash % 60).padStart(2, `0`)}`;
        }
        return `2026-09-30 08:35:10`;
      })();

      let pRelativeText = pMinsAgo < 60 ? `${pMinsAgo}分钟前` : `${Math.round(pMinsAgo / 6) / 10}小时前`;
      let pNextPoll = `${Math.max(1, (kw.pollIntervalMinutes || 10) - (pMinsAgo % (kw.pollIntervalMinutes || 10)))}分钟后`;

      // Date range multiplier
      let dateMultiplier = 1;
      if (dateRange === `yesterday`) dateMultiplier = 1.05;
      else if (dateRange === `3d`) dateMultiplier = 2.9;
      else if (dateRange === `7d`) dateMultiplier = 6.8;
      else if (dateRange === `15d`) dateMultiplier = 14.2;
      else if (dateRange === `30d`) dateMultiplier = 27.2;
      else if (dateRange === `all`) dateMultiplier = (pTotal / Math.max(1, pToday));
      else if (dateRange === `custom`) dateMultiplier = 0.95 + (absHash % 30) / 100;

      let dateVolume = Math.round(pToday * dateMultiplier);

      return {
        isIncluded,
        todayHits: pToday,
        totalHits: pTotal,
        dateVolume,
        lastRunTime: pLastRunTime,
        minutesAgo: pMinsAgo,
        relativeText: pRelativeText,
        nextPollTime: pNextPoll,
        status: kw.status === `paused` ? `paused` : `active`,
      };
    };

    // Calculate dynamic volume for a keyword given active date and platform filters
    let getKeywordDisplayVolume = (kw) => {
      let baseToday = kw.todayHits || 2000;
      let baseTotal = kw.totalHits || 50000;

      if (selectedPlatform !== `all`) {
        let pMetrics = getKwPlatformMetrics(kw, selectedPlatform);
        return {
          volume: pMetrics.dateVolume,
          today: pMetrics.todayHits,
          total: pMetrics.totalHits,
          isPlatformFiltered: !0,
          platformLabel: tn[selectedPlatform]?.name || selectedPlatform,
        };
      }

      let dateMultiplier = 1;
      if (dateRange === `yesterday`) dateMultiplier = 1.05;
      else if (dateRange === `3d`) dateMultiplier = 2.9;
      else if (dateRange === `7d`) dateMultiplier = 6.8;
      else if (dateRange === `15d`) dateMultiplier = 14.2;
      else if (dateRange === `30d`) dateMultiplier = 27.2;
      else if (dateRange === `all`) dateMultiplier = (baseTotal / Math.max(1, baseToday));
      else if (dateRange === `custom`) dateMultiplier = 1.02;

      let dateVolume = Math.round(baseToday * dateMultiplier);
      return {
        volume: dateVolume,
        today: baseToday,
        total: baseTotal,
        isPlatformFiltered: !1,
      };
    };

    // Platform inventory stats
    let platformStats = (0, C.useMemo)(() => {
      let map = {};
      allPlatformKeys.forEach((pKey) => {
        let matchedKws = allKeywordsList.filter((kw) => (kw.targetPlatforms || []).includes(pKey));
        let totalVol = 0;
        let todayVol = 0;
        let periodVol = 0;
        matchedKws.forEach((kw) => {
          let m = getKwPlatformMetrics(kw, pKey);
          todayVol += m.todayHits;
          totalVol += m.totalHits;
          periodVol += m.dateVolume;
        });
        map[pKey] = {
          count: matchedKws.length,
          todayHits: todayVol,
          totalHits: totalVol,
          periodVolume: periodVol,
          keywords: matchedKws,
        };
      });
      return map;
    }, [allKeywordsList, dateRange]);

    let totalAllVolumeForDate = (0, C.useMemo)(() => {
      return allKeywordsList.reduce((acc, kw) => acc + getKeywordDisplayVolume(kw).volume, 0);
    }, [allKeywordsList, dateRange, selectedPlatform]);

    let totalAllTodayHits = (0, C.useMemo)(() => {
      return allKeywordsList.reduce((acc, kw) => acc + (kw.todayHits || 0), 0);
    }, [allKeywordsList]);

    let countT1 = allKeywordsList.filter((e) => (e.tierLevel || `T2`) === `T1`).length,
      countT2 = allKeywordsList.filter((e) => (e.tierLevel || `T2`) === `T2`).length,
      countT3 = allKeywordsList.filter((e) => (e.tierLevel || `T2`) === `T3`).length,
      countT4 = allKeywordsList.filter((e) => (e.tierLevel || `T2`) === `T4`).length;

    let allCategoriesList = (0, C.useMemo)(() => {
      let t = new Set();
      allKeywordsList.forEach((e) => {
        e.category && t.add(e.category);
      });
      return Array.from(t);
    }, [allKeywordsList]);

    // Filtered and Sorted keywords
    let filteredKeywords = (0, C.useMemo)(() => {
      let list = allKeywordsList.filter((item) => {
        if (kwSearch) {
          let t = kwSearch.toLowerCase(),
            n = item.keyword.toLowerCase().includes(t),
            r = item.category?.toLowerCase().includes(t),
            i = item.synonyms?.some((k) => k.toLowerCase().includes(t)),
            a = item.tierReason?.toLowerCase().includes(t);
          if (!n && !r && !i && !a) return !1;
        }
        return !(
          (selectedTier !== `all` && (item.tierLevel || `T2`) !== selectedTier) ||
          (selectedPlatform !== `all` && !(item.targetPlatforms || []).includes(selectedPlatform)) ||
          (selectedCategory !== `all` && item.category !== selectedCategory) ||
          (selectedImportance !== `all` && item.importance !== selectedImportance) ||
          (selectedStatus !== `all` && item.status !== selectedStatus)
        );
      });

      // Sorting
      return list.sort((a, b) => {
        let volA = getKeywordDisplayVolume(a).volume;
        let volB = getKeywordDisplayVolume(b).volume;

        if (sortBy === `volume-desc`) return volB - volA;
        if (sortBy === `volume-asc`) return volA - volB;
        if (sortBy === `today-desc`) return (b.todayHits || 0) - (a.todayHits || 0);
        if (sortBy === `recent24h-desc`) return (b.dataVolume24h || 0) - (a.dataVolume24h || 0);
        if (sortBy === `runtime-desc`) return (a.minutesSinceLatestData || 999) - (b.minutesSinceLatestData || 999);
        if (sortBy === `runtime-asc`) return (b.minutesSinceLatestData || 999) - (a.minutesSinceLatestData || 999);
        if (sortBy === `tier-asc`) {
          let rank = { T1: 1, T2: 2, T3: 3, T4: 4 };
          return (rank[a.tierLevel || `T2`] || 2) - (rank[b.tierLevel || `T2`] || 2);
        }
        if (sortBy === `importance-desc`) {
          let imp = { P0: 1, P1: 2, P2: 3 };
          return (imp[a.importance || `P1`] || 2) - (imp[b.importance || `P1`] || 2);
        }
        if (sortBy === `keyword-asc`) return a.keyword.localeCompare(b.keyword);
        return volB - volA;
      });
    }, [allKeywordsList, kwSearch, selectedTier, selectedPlatform, selectedCategory, selectedImportance, selectedStatus, sortBy, dateRange]);

    let autoCalculatedTier = (0, C.useMemo)(
      () => rn(formMinsAgo, formDataVolume24h, tierThresholds),
      [formMinsAgo, formDataVolume24h, tierThresholds],
    );

    let handleOpenAddModal = () => {
      setEditingKwItem(null);
      setFormKeywordName(``);
      setFormCategory(`前沿科技`);
      setFormImportance(`P0`);
      setFormPlatforms([
        `douyin`,
        `toutiao`,
        `xiaohongshu`,
        `zhihu`,
        `weibo`,
        `bilibili`,
      ]);
      setFormMinsAgo(5);
      setFormDataVolume24h(3500);
      setFormAutoTiering(!0);
      setFormManualTier(`T1`);
      setFormManualInterval(5);
      setFormSortType(`latest`);
      setFormTimeFilter(`1d`);
      setFormSynonyms([]);
      setFormNegativeKeywords([]);
      setIsEditModalOpen(!0);
    };

    let handleOpenEditModal = (item) => {
      setEditingKwItem(item);
      setFormKeywordName(item.keyword);
      setFormCategory(item.category);
      setFormImportance(item.importance);
      setFormPlatforms([...(item.targetPlatforms || [])]);
      setFormMinsAgo(item.minutesSinceLatestData || 10);
      setFormDataVolume24h(item.dataVolume24h || 1200);
      setFormAutoTiering(item.autoTieringEnabled ?? !0);
      setFormManualTier(item.tierLevel || `T2`);
      setFormManualInterval(item.pollIntervalMinutes || 10);
      setFormSortType(item.sortType || `latest`);
      setFormTimeFilter(item.timeFilter || `1d`);
      setFormSynonyms(item.synonyms || []);
      setFormNegativeKeywords(item.negativeKeywords || []);
      setIsEditModalOpen(!0);
    };

    let handleRecalculateAllTiers = () => {
      updateKeywordsFn((prev) =>
        prev.map((item) => {
          let mins = Math.max(
              1,
              (item.minutesSinceLatestData || 10) + Math.floor(Math.random() * 8) - 3,
            ),
            vol = Math.max(
              50,
              (item.dataVolume24h || 500) + Math.floor(Math.random() * 120) - 40,
            ),
            calculated = rn(mins, vol, tierThresholds),
            relText =
              mins < 60
                ? `${mins}分钟前`
                : `${Math.round((mins / 60) * 10) / 10}小时前`;
          return {
            ...item,
            minutesSinceLatestData: mins,
            latestDataRelativeText: relText,
            dataVolume24h: vol,
            tierLevel: calculated.tier,
            pollIntervalMinutes: calculated.intervalMinutes,
            tierReason: calculated.reason,
            heatTrend: calculated.heatTrend,
            lastCollectTime: `2026-09-30 08:35`,
          };
        }),
      );
      showToastFn(
        `已依据全网社媒【最新数据距今时间】与【近24h数据量】全量重算 ${allKeywordsList.length} 个关键词智能分级与采集频次！`,
        `success`,
      );
    };

    let handleSaveKeywordForm = (event) => {
      event.preventDefault();
      if (!formKeywordName.trim()) {
        showToastFn(`请输入监控关键词名称`, `error`);
        return;
      }
      if (formPlatforms.length === 0) {
        showToastFn(`请至少选择一个目标社交平台`, `error`);
        return;
      }
      let finalTier = formAutoTiering ? autoCalculatedTier.tier : formManualTier,
        finalInterval = formAutoTiering ? autoCalculatedTier.intervalMinutes : formManualInterval,
        finalReason = formAutoTiering ? autoCalculatedTier.reason : `用户手动指定为 ${finalTier} 级别 (${finalInterval}分钟/次)`,
        finalHeat = formAutoTiering ? autoCalculatedTier.heatTrend : `steady`,
        finalRelativeText = formMinsAgo < 60 ? `${formMinsAgo}分钟前` : `${Math.round((formMinsAgo / 60) * 10) / 10}小时前`;
      
      if (editingKwItem) {
        updateKeywordsFn((prev) =>
          prev.map((item) =>
            item.id === editingKwItem.id
              ? {
                  ...item,
                  keyword: formKeywordName.trim(),
                  category: formCategory,
                  importance: formImportance,
                  tierLevel: finalTier,
                  pollIntervalMinutes: finalInterval,
                  minutesSinceLatestData: formMinsAgo,
                  latestDataRelativeText: finalRelativeText,
                  dataVolume24h: formDataVolume24h,
                  heatTrend: finalHeat,
                  tierReason: finalReason,
                  autoTieringEnabled: formAutoTiering,
                  targetPlatforms: formPlatforms,
                  sortType: formSortType,
                  timeFilter: formTimeFilter,
                  synonyms: formSynonyms,
                  negativeKeywords: formNegativeKeywords,
                }
              : item,
          ),
        );
        showToastFn(
          `已更新关键词【${formKeywordName.trim()}】策略：分级为 ${finalTier} (${finalInterval}分钟/轮)`,
          `success`,
        );
      } else {
        let newId = `KW-${Date.now().toString().slice(-4)}`,
          timeStr = `2026-09-30 08:35:10`,
          newItem = {
            id: newId,
            keyword: formKeywordName.trim(),
            category: formCategory,
            importance: formImportance,
            tierLevel: finalTier,
            pollIntervalMinutes: finalInterval,
            latestDataTime: timeStr,
            minutesSinceLatestData: formMinsAgo,
            latestDataRelativeText: finalRelativeText,
            dataVolume24h: formDataVolume24h,
            heatTrend: finalHeat,
            tierReason: finalReason,
            autoTieringEnabled: formAutoTiering,
            targetPlatforms: formPlatforms,
            sortType: formSortType,
            timeFilter: formTimeFilter,
            synonyms: formSynonyms,
            negativeKeywords: formNegativeKeywords,
            status: `active`,
            todayHits: 1200,
            totalHits: 48000,
            lastCollectTime: `2026-09-30 08:35`,
            nextPollTime: `${finalInterval}分钟后`,
          };
        updateKeywordsFn((prev) => [newItem, ...prev]);
        showToastFn(
          `已新增关键词【${formKeywordName.trim()}】，智能定级为 ${finalTier} (${finalInterval}分钟/轮)！`,
          `success`,
        );
      }
      setIsEditModalOpen(!1);
    };

    let handleTogglePauseKeyword = (item) => {
      let nextStatus = item.status === `active` ? `paused` : `active`;
      updateKeywordsFn((prev) =>
        prev.map((n) => (n.id === item.id ? { ...n, status: nextStatus } : n)),
      );
      showToastFn(
        nextStatus === `active`
          ? `已恢复关键词【${item.keyword}】的社交平台轮询监控`
          : `已暂停关键词【${item.keyword}】的轮询调度`,
        nextStatus === `active` ? `success` : `warning`,
      );
    };

    let handleTriggerInstantCrawl = (item, platformKey = null) => {
      let incHits = Math.floor(Math.random() * 15) + 5;
      updateKeywordsFn((prev) =>
        prev.map((n) =>
          n.id === item.id
            ? {
                ...n,
                todayHits: (n.todayHits || 0) + incHits,
                totalHits: (n.totalHits || 0) + incHits,
                minutesSinceLatestData: 1,
                latestDataRelativeText: `1分钟前`,
                lastCollectTime: `2026-09-30 08:35`,
              }
            : n,
        ),
      );
      showToastFn(
        platformKey
          ? `已向【${tn[platformKey]?.name || platformKey}】节点下发关键词【${item.keyword}】即时轮询，新增 ${incHits} 条！`
          : `已向全网社交平台下发【${item.keyword}】即时轮询，命中增量 ${incHits} 条！`,
        `success`,
      );
    };

    let handleDeleteKeyword = (kwId, kwName) => {
      if (confirm(`确定要移除监控关键词【${kwName}】吗？`)) {
        updateKeywordsFn((prev) => prev.filter((t) => t.id !== kwId));
        showToastFn(`已删除关键词【${kwName}】`, `info`);
      }
    };

    let getTierInfo = (tier) => tierThresholds[tier] || nn[tier] || nn.T3;

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
      className: `max-w-[1680px] mx-auto flex flex-col gap-4.5`,
      children: [
        /* Top Navigation & Header Bar */
        (0, $.jsxs)(`div`, {
          className: `flex flex-col lg:flex-row lg:items-center justify-between gap-3.5 bg-white p-4.5 rounded-2xl border border-slate-200/80 shadow-xs`,
          children: [
            (0, $.jsxs)(`div`, {
              className: `flex items-center gap-3`,
              children: [
                (0, $.jsxs)(`button`, {
                  type: `button`,
                  onClick: backToServiceListFn,
                  className: `flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-50 text-xs font-bold transition-all cursor-pointer shadow-2xs shrink-0`,
                  children: [
                    (0, $.jsx)(O, { className: `w-3.5 h-3.5` }),
                    (0, $.jsx)(`span`, { children: `返回服务台账` }),
                  ],
                }),
                (0, $.jsx)(`div`, {
                  className: `h-4 w-px bg-slate-200 hidden sm:block`,
                }),
                (0, $.jsxs)(`div`, {
                  className: `flex items-center gap-2.5`,
                  children: [
                    (0, $.jsx)(`div`, {
                      className: `w-9 h-9 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-600 font-bold shrink-0`,
                      children: (0, $.jsx)(ve, { className: `w-5 h-5` }),
                    }),
                    (0, $.jsxs)(`div`, {
                      children: [
                        (0, $.jsxs)(`div`, {
                          className: `flex items-center gap-2 flex-wrap`,
                          children: [
                            (0, $.jsx)(`h1`, {
                              className: `text-base font-black text-slate-900 leading-tight`,
                              children: `社媒关键词智能分级与轮询矩阵`,
                            }),
                            (0, $.jsx)(`span`, {
                              className: `px-2 py-0.5 rounded-md text-[10.5px] font-bold bg-rose-100 text-rose-800 border border-rose-200`,
                              children: `多平台跑词调度 × 日期统计查询 × 采集量排序`,
                            }),
                          ],
                        }),
                        (0, $.jsx)(`p`, {
                          className: `text-[11px] text-slate-500 mt-0.5`,
                          children: `支持区分平台查看各词上次跑词时间、各平台监控词量统计、按日期与平台查询采集数据量并支持多维排序`,
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, $.jsxs)(`div`, {
              className: `flex items-center gap-2 flex-wrap shrink-0`,
              children: [
                /* View Mode Switcher */
                (0, $.jsxs)(`div`, {
                  className: `flex items-center bg-slate-100 p-0.5 rounded-xl border border-slate-200`,
                  children: [
                    (0, $.jsxs)(`button`, {
                      type: `button`,
                      onClick: () => setViewMode(`list`),
                      className: `flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${viewMode === `list` ? `bg-white text-slate-900 shadow-2xs` : `text-slate-600 hover:text-slate-900`}`,
                      children: [
                        (0, $.jsx)(me, { className: `w-3.5 h-3.5` }),
                        (0, $.jsx)(`span`, { children: `关键词明细列表` }),
                      ],
                    }),
                    (0, $.jsxs)(`button`, {
                      type: `button`,
                      onClick: () => setViewMode(`matrix`),
                      className: `flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${viewMode === `matrix` ? `bg-rose-600 text-white shadow-2xs` : `text-slate-600 hover:text-slate-900`}`,
                      children: [
                        (0, $.jsx)(`span`, { className: `text-sm leading-none`, children: `⊞` }),
                        (0, $.jsx)(`span`, { children: `平台词库透视` }),
                      ],
                    }),
                    (0, $.jsxs)(`button`, {
                      type: `button`,
                      onClick: () => setViewMode(`analytics`),
                      className: `flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${viewMode === `analytics` ? `bg-emerald-600 text-white shadow-2xs` : `text-slate-600 hover:text-slate-900`}`,
                      children: [
                        (0, $.jsx)(`span`, { className: `text-sm leading-none`, children: `📊` }),
                        (0, $.jsx)(`span`, { children: `统计与平台分析大盘` }),
                      ],
                    }),
                  ],
                }),
                (0, $.jsxs)(`button`, {
                  type: `button`,
                  onClick: () => setIsThresholdModalOpen(!0),
                  className: `flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-bold transition-all cursor-pointer shadow-2xs`,
                  title: `查看与调整智能分级阈值`,
                  children: [
                    (0, $.jsx)(Je, { className: `w-3.5 h-3.5 text-slate-500` }),
                    (0, $.jsx)(`span`, { children: `分级阈值` }),
                  ],
                }),
                (0, $.jsxs)(`button`, {
                  type: `button`,
                  onClick: handleRecalculateAllTiers,
                  className: `flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-rose-200 bg-rose-50 hover:bg-rose-100 text-rose-700 text-xs font-bold transition-all cursor-pointer shadow-2xs`,
                  title: `一键重算全部关键词分级`,
                  children: [
                    (0, $.jsx)(Ie, { className: `w-3.5 h-3.5 text-rose-600` }),
                    (0, $.jsx)(`span`, { children: `全网重算分级` }),
                  ],
                }),
                (0, $.jsxs)(`button`, {
                  type: `button`,
                  onClick: handleOpenAddModal,
                  className: `flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold transition-all cursor-pointer shadow-sm hover:shadow`,
                  children: [
                    (0, $.jsx)(Pe, { className: `w-3.5 h-3.5` }),
                    (0, $.jsx)(`span`, { children: `+ 新增监控词` }),
                  ],
                }),
              ],
            }),
          ],
        }),

        /* Platform Inventory & Distribution Bar (每个平台有哪些词，数量是多少，采集数量汇总) */
        (0, $.jsxs)(`div`, {
          className: `bg-white border border-slate-200/80 rounded-2xl p-3.5 shadow-xs flex flex-col gap-2.5`,
          children: [
            (0, $.jsxs)(`div`, {
              className: `flex items-center justify-between gap-2 flex-wrap pb-2 border-b border-slate-100 text-xs`,
              children: [
                (0, $.jsxs)(`div`, {
                  className: `flex items-center gap-2 font-bold text-slate-800`,
                  children: [
                    (0, $.jsx)(me, { className: `w-4 h-4 text-rose-600` }),
                    (0, $.jsx)(`span`, { children: `全网各平台监控词与采集量概览 (点击平台快速筛选)` }),
                  ],
                }),
                (0, $.jsxs)(`div`, {
                  className: `flex items-center gap-3 text-[11px] text-slate-500`,
                  children: [
                    (0, $.jsxs)(`span`, {
                      children: [
                        `当前统计周期：`,
                        (0, $.jsx)(`strong`, { className: `text-rose-700 font-mono`, children: getDateRangeLabel() }),
                      ],
                    }),
                    (0, $.jsxs)(`span`, {
                      children: [
                        `全网监控词：`,
                        (0, $.jsx)(`strong`, { className: `text-slate-900 font-mono`, children: `${allKeywordsList.length} 个` }),
                      ],
                    }),
                    (0, $.jsxs)(`span`, {
                      children: [
                        `所选周期采集总量：`,
                        (0, $.jsx)(`strong`, { className: `text-emerald-700 font-mono`, children: `${totalAllVolumeForDate.toLocaleString()} 条` }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            /* Horizontal Scrollable Platform Pills/Cards */
            (0, $.jsxs)(`div`, {
              className: `flex items-center gap-2 overflow-x-auto pb-1 text-xs`,
              children: [
                /* All Platforms Card */
                (0, $.jsxs)(`button`, {
                  type: `button`,
                  onClick: () => setSelectedPlatform(`all`),
                  className: `px-3 py-2 rounded-xl border transition-all cursor-pointer shrink-0 flex flex-col items-start gap-1 text-left ${selectedPlatform === `all` ? `bg-slate-900 text-white border-slate-900 shadow-xs ring-2 ring-slate-900/20` : `bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100`}`,
                  children: [
                    (0, $.jsxs)(`div`, {
                      className: `flex items-center gap-1.5 font-bold text-[11.5px]`,
                      children: [
                        (0, $.jsx)(`span`, { className: `w-2 h-2 rounded-full ${selectedPlatform === `all` ? `bg-emerald-400` : `bg-slate-400`}` }),
                        `全部平台`,
                      ],
                    }),
                    (0, $.jsxs)(`div`, {
                      className: `text-[10px] font-mono flex items-center gap-2 opacity-90`,
                      children: [
                        (0, $.jsxs)(`span`, { children: [allKeywordsList.length, ` 词`] }),
                        (0, $.jsx)(`span`, { children: `·` }),
                        (0, $.jsxs)(`span`, { children: [`采 `, totalAllVolumeForDate.toLocaleString()] }),
                      ],
                    }),
                  ],
                }),
                /* Platform specific cards */
                allPlatformKeys.map((pKey) => {
                  let pMeta = tn[pKey];
                  let pStat = platformStats[pKey] || { count: 0, todayHits: 0, totalHits: 0, periodVolume: 0 };
                  let isSelected = selectedPlatform === pKey;
                  return (0, $.jsxs)(
                    `button`,
                    {
                      type: `button`,
                      onClick: () => setSelectedPlatform(isSelected ? `all` : pKey),
                      className: `px-3 py-2 rounded-xl border transition-all cursor-pointer shrink-0 flex flex-col items-start gap-1 text-left ${isSelected ? `${pMeta.badgeBg} ${pMeta.badgeText} ${pMeta.borderClass} ring-2 ring-rose-500 shadow-xs` : `bg-white text-slate-700 border-slate-200 hover:bg-slate-50 hover:border-slate-300`}`,
                      children: [
                        (0, $.jsxs)(`div`, {
                          className: `flex items-center gap-1.5 font-bold text-[11.5px]`,
                          children: [
                            (0, $.jsx)(`span`, { children: pMeta.name }),
                            (0, $.jsxs)(`span`, {
                              className: `text-[9.5px] px-1 py-0.2 rounded font-mono ${isSelected ? `bg-white/80 text-slate-800` : `bg-slate-100 text-slate-600`}`,
                              children: [pStat.count, ` 词`],
                            }),
                          ],
                        }),
                        (0, $.jsxs)(`div`, {
                          className: `text-[10px] font-mono flex items-center gap-1.5 text-slate-500`,
                          children: [
                            (0, $.jsxs)(`span`, {
                              className: `font-semibold ${isSelected ? `text-rose-700` : `text-slate-700`}`,
                              children: [`采 `, (dateRange === `all` ? pStat.totalHits : pStat.periodVolume).toLocaleString(), `条`],
                            }),
                          ],
                        }),
                      ],
                    },
                    pKey,
                  );
                }),
              ],
            }),
          ],
        }),

        /* Filter, Search & Date/Sorting Query Bar */
        (0, $.jsxs)(`div`, {
          className: `bg-white border border-slate-200/80 rounded-2xl p-4 shadow-xs flex flex-col gap-3.5`,
          children: [
            /* Row 1: Search, Date Filter, Platform Filter, Sorting Select */
            (0, $.jsxs)(`div`, {
              className: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 items-center`,
              children: [
                /* Search input */
                (0, $.jsxs)(`div`, {
                  className: `relative lg:col-span-3`,
                  children: [
                    (0, $.jsx)(Be, {
                      className: `w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2`,
                    }),
                    (0, $.jsx)(`input`, {
                      type: `text`,
                      value: kwSearch,
                      onChange: (e) => setKwSearch(e.target.value),
                      placeholder: `搜索关键词、拓展词、分类...`,
                      className: `w-full pl-9 pr-3 py-2 bg-slate-50 hover:bg-slate-100/80 focus:bg-white border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-rose-500 focus:ring-2 focus:ring-rose-500/10 transition-all`,
                    }),
                  ],
                }),

                /* Date Range Picker (按日期查询) */
                (0, $.jsxs)(`div`, {
                  className: `flex items-center gap-1.5 lg:col-span-4 bg-slate-50 p-1 rounded-xl border border-slate-200`,
                  children: [
                    (0, $.jsx)(`span`, { className: `text-[11px] font-bold text-slate-600 shrink-0 ml-1.5`, children: `📅 日期:` }),
                    [
                      { key: `today`, label: `今日` },
                      { key: `yesterday`, label: `昨日` },
                      { key: `3d`, label: `近3天` },
                      { key: `7d`, label: `近7天` },
                      { key: `15d`, label: `近15天` },
                      { key: `30d`, label: `近30天` },
                      { key: `all`, label: `全部` },
                    ].map((btn) =>
                      (0, $.jsx)(
                        `button`,
                        {
                          type: `button`,
                          onClick: () => setDateRange(btn.key),
                          className: `px-2 py-1 rounded-lg text-[11px] font-bold transition-all cursor-pointer shrink-0 ${dateRange === btn.key ? `bg-rose-600 text-white shadow-2xs` : `text-slate-600 hover:text-slate-900 hover:bg-slate-200/70`}`,
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
                      className: `px-1.5 py-0.5 bg-white border border-slate-200 rounded text-[10.5px] font-mono text-slate-700 cursor-pointer focus:outline-none`,
                      title: `选择具体日期查询`,
                    }),
                  ],
                }),

                /* Platform Dropdown (按平台查询采集数量) */
                (0, $.jsxs)(`div`, {
                  className: `flex items-center gap-1.5 lg:col-span-2.5`,
                  children: [
                    (0, $.jsxs)(`select`, {
                      value: selectedPlatform,
                      onChange: (e) => setSelectedPlatform(e.target.value),
                      className: `w-full py-2 px-3 bg-slate-50 hover:bg-slate-100/80 focus:bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:outline-none focus:border-rose-500 focus:ring-2 focus:ring-rose-500/10 cursor-pointer`,
                      children: [
                        (0, $.jsx)(`option`, { value: `all`, children: `全平台汇聚 (${allKeywordsList.length} 词)` }),
                        allPlatformKeys.map((pKey) =>
                          (0, $.jsx)(
                            `option`,
                            {
                              value: pKey,
                              children: `${tn[pKey]?.name} (${platformStats[pKey]?.count || 0} 词 · 采 ${(platformStats[pKey]?.periodVolume || 0).toLocaleString()}条)`,
                            },
                            pKey,
                          ),
                        ),
                      ],
                    }),
                  ],
                }),

                /* Sorting Selector (关键词采集数据量排序) */
                (0, $.jsxs)(`div`, {
                  className: `flex items-center gap-1.5 lg:col-span-2.5`,
                  children: [
                    (0, $.jsxs)(`select`, {
                      value: sortBy,
                      onChange: (e) => setSortBy(e.target.value),
                      className: `w-full py-2 px-3 bg-rose-50/70 hover:bg-rose-100/60 focus:bg-white border border-rose-200 rounded-xl text-xs font-bold text-rose-900 focus:outline-none focus:border-rose-500 focus:ring-2 focus:ring-rose-500/10 cursor-pointer`,
                      children: [
                        (0, $.jsx)(`option`, { value: `volume-desc`, children: `📊 采集数据量 (降序 从高到低)` }),
                        (0, $.jsx)(`option`, { value: `volume-asc`, children: `📊 采集数据量 (升序 从低到高)` }),
                        (0, $.jsx)(`option`, { value: `today-desc`, children: `🔥 今日新增采集量 (降序)` }),
                        (0, $.jsx)(`option`, { value: `recent24h-desc`, children: `📈 近24h全网数据量 (降序)` }),
                        (0, $.jsx)(`option`, { value: `runtime-desc`, children: `⏱️ 平台最近跑词时间 (最新优先)` }),
                        (0, $.jsx)(`option`, { value: `runtime-asc`, children: `⏳ 平台最近跑词时间 (最久未跑)` }),
                        (0, $.jsx)(`option`, { value: `tier-asc`, children: `🎯 智能定级优先级 (T1 → T4)` }),
                        (0, $.jsx)(`option`, { value: `importance-desc`, children: `⭐ 监控优先级 (P0 → P2)` }),
                        (0, $.jsx)(`option`, { value: `keyword-asc`, children: `🔤 关键词拼音/首字母` }),
                      ],
                    }),
                  ],
                }),
              ],
            }),

            /* Row 2: Category, Tier, Status Pills */
            (0, $.jsxs)(`div`, {
              className: `flex items-center gap-2 flex-wrap pt-2 border-t border-slate-100 text-xs`,
              children: [
                (0, $.jsx)(`span`, { className: `text-[11px] font-bold text-slate-500`, children: `分类:` }),
                (0, $.jsx)(`button`, {
                  type: `button`,
                  onClick: () => setSelectedCategory(`all`),
                  className: `px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all cursor-pointer ${selectedCategory === `all` ? `bg-slate-800 text-white` : `bg-slate-100 text-slate-600 hover:bg-slate-200`}`,
                  children: `全部分类`,
                }),
                allCategoriesList.map((cat) =>
                  (0, $.jsx)(
                    `button`,
                    {
                      type: `button`,
                      onClick: () => setSelectedCategory(selectedCategory === cat ? `all` : cat),
                      className: `px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all cursor-pointer ${selectedCategory === cat ? `bg-slate-800 text-white` : `bg-slate-100 text-slate-600 hover:bg-slate-200`}`,
                      children: cat,
                    },
                    cat,
                  ),
                ),
                (0, $.jsx)(`div`, { className: `h-3.5 w-px bg-slate-200 mx-1` }),
                (0, $.jsx)(`span`, { className: `text-[11px] font-bold text-slate-500`, children: `分级:` }),
                [`all`, `T1`, `T2`, `T3`, `T4`].map((tierKey) =>
                  (0, $.jsx)(
                    `button`,
                    {
                      type: `button`,
                      onClick: () => setSelectedTier(tierKey),
                      className: `px-2 py-0.5 rounded-lg text-[11px] font-bold transition-all cursor-pointer ${selectedTier === tierKey ? `bg-rose-600 text-white` : `bg-slate-100 text-slate-600 hover:bg-slate-200`}`,
                      children: tierKey === `all` ? `全部级别` : tierKey,
                    },
                    tierKey,
                  ),
                ),
                (0, $.jsx)(`div`, { className: `h-3.5 w-px bg-slate-200 mx-1` }),
                (0, $.jsx)(`span`, { className: `text-[11px] font-bold text-slate-500`, children: `状态:` }),
                [
                  { key: `all`, label: `全部` },
                  { key: `active`, label: `活跃监控中` },
                  { key: `paused`, label: `已暂停` },
                ].map((stItem) =>
                  (0, $.jsx)(
                    `button`,
                    {
                      type: `button`,
                      onClick: () => setSelectedStatus(stItem.key),
                      className: `px-2 py-0.5 rounded-lg text-[11px] font-bold transition-all cursor-pointer ${selectedStatus === stItem.key ? `bg-slate-800 text-white` : `bg-slate-100 text-slate-600 hover:bg-slate-200`}`,
                      children: stItem.label,
                    },
                    stItem.key,
                  ),
                ),
              ],
            }),
          ],
        }),

        /* Main View Switch: List View vs Platform Matrix View vs Analytics Dashboard */
        viewMode === `analytics`
          ? /* ================== Analytics Dashboard View (📊 统计与平台分析大盘) ================== */
            (0, $.jsxs)(`div`, {
              className: `flex flex-col gap-4.5`,
              children: [
                /* Platform Capture Breakdown Bar Chart */
                (0, $.jsxs)(`div`, {
                  className: `bg-white border border-slate-200/80 rounded-2xl p-5 shadow-xs flex flex-col gap-3.5`,
                  children: [
                    (0, $.jsxs)(`div`, {
                      className: `flex items-center justify-between pb-3 border-b border-slate-100`,
                      children: [
                        (0, $.jsxs)(`div`, {
                          className: `flex items-center gap-2`,
                          children: [
                            (0, $.jsx)(`span`, { className: `text-lg`, children: `📊` }),
                            (0, $.jsx)(`h3`, { className: `font-black text-slate-900 text-sm`, children: `各社交平台在所选日期/区间采集数据量汇总对比` }),
                          ],
                        }),
                        (0, $.jsxs)(`div`, {
                          className: `text-xs text-slate-500 font-mono`,
                          children: [
                            `当前统计周期: `,
                            (0, $.jsx)(`strong`, { className: `text-rose-700`, children: getDateRangeLabel() }),
                            ` · 全网总采: `,
                            (0, $.jsx)(`strong`, { className: `text-emerald-700`, children: totalAllVolumeForDate.toLocaleString() }),
                            ` 条`,
                          ],
                        }),
                      ],
                    }),
                    /* Platform volume bars */
                    (0, $.jsx)(`div`, {
                      className: `grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-2.5 pt-2`,
                      children: allPlatformKeys.map((pKey) => {
                        let pMeta = tn[pKey];
                        let pStat = platformStats[pKey] || { count: 0, todayHits: 0, totalHits: 0, periodVolume: 0 };
                        let maxPlatVol = Math.max(...allPlatformKeys.map((k) => platformStats[k]?.periodVolume || 1), 1);
                        let barHeight = Math.max(15, Math.round((pStat.periodVolume / maxPlatVol) * 100));
                        let sharePct = totalAllVolumeForDate > 0 ? ((pStat.periodVolume / totalAllVolumeForDate) * 100).toFixed(1) : 0;
                        return (0, $.jsxs)(
                          `div`,
                          {
                            className: `bg-slate-50 hover:bg-slate-100 p-2.5 rounded-xl border border-slate-200 flex flex-col items-center gap-1.5 transition-colors cursor-pointer group`,
                            onClick: () => {
                              setSelectedPlatform(pKey);
                              setViewMode(`list`);
                            },
                            title: `点击筛选【${pMeta.name}】监控词`,
                            children: [
                              (0, $.jsxs)(`span`, {
                                className: `text-[11px] font-bold text-slate-900 flex items-center gap-1`,
                                children: [
                                  (0, $.jsx)(`span`, { className: `w-2 h-2 rounded-full ${pMeta.badgeBg}` }),
                                  pMeta.shortName,
                                ],
                              }),
                              (0, $.jsxs)(`div`, {
                                className: `text-[9.5px] font-mono text-slate-400`,
                                children: [pStat.count, ` 词`],
                              }),
                              (0, $.jsx)(`div`, {
                                className: `w-full h-20 bg-slate-200/80 rounded-lg flex items-end justify-center p-1`,
                                children: (0, $.jsx)(`div`, {
                                  className: `w-full max-w-[24px] rounded-t-md ${pMeta.badgeBg} group-hover:opacity-90 transition-all`,
                                  style: { height: `${barHeight}%` },
                                }),
                              }),
                              (0, $.jsxs)(`div`, {
                                className: `text-center`,
                                children: [
                                  (0, $.jsxs)(`div`, {
                                    className: `text-xs font-black font-mono text-slate-900`,
                                    children: [pStat.periodVolume.toLocaleString(), `条`],
                                  }),
                                  (0, $.jsxs)(`div`, {
                                    className: `text-[9.5px] font-mono text-emerald-700 font-bold`,
                                    children: [sharePct, `%`],
                                  }),
                                ],
                              }),
                            ],
                          },
                          pKey,
                        );
                      }),
                    }),
                  ],
                }),

                /* Keyword x Platform Cross Matrix Table (每个关键词在每个平台分别采集了多少数据) */
                (0, $.jsxs)(`div`, {
                  className: `bg-white border border-slate-200/80 rounded-2xl p-5 shadow-xs flex flex-col gap-3.5`,
                  children: [
                    (0, $.jsxs)(`div`, {
                      className: `flex items-center justify-between pb-3 border-b border-slate-100`,
                      children: [
                        (0, $.jsxs)(`div`, {
                          className: `flex items-center gap-2`,
                          children: [
                            (0, $.jsx)(`span`, { className: `text-lg`, children: `🔀` }),
                            (0, $.jsx)(`h3`, { className: `font-black text-slate-900 text-sm`, children: `关键词 × 各平台采集数据量交叉透视表 (按所选日期)` }),
                          ],
                        }),
                        (0, $.jsx)(`span`, { className: `text-xs text-slate-400 font-mono`, children: `单元格展示该词在对应平台所选日期采集量` }),
                      ],
                    }),
                    (0, $.jsx)(`div`, {
                      className: `overflow-x-auto`,
                      children: (0, $.jsxs)(`table`, {
                        className: `w-full text-xs text-left border-collapse`,
                        children: [
                          (0, $.jsx)(`thead`, {
                            children: (0, $.jsxs)(`tr`, {
                              className: `bg-slate-50 text-slate-600 font-bold border-b border-slate-200 text-[11px] uppercase tracking-wider whitespace-nowrap`,
                              children: [
                                (0, $.jsx)(`th`, { className: `py-2.5 px-3 min-w-[170px]`, children: `监控关键词` }),
                                (0, $.jsx)(`th`, { className: `py-2.5 px-3 text-right font-bold text-rose-700`, children: `全网总采` }),
                                allPlatformKeys.map((pKey) =>
                                  (0, $.jsx)(
                                    `th`,
                                    { className: `py-2.5 px-2 text-right`, children: tn[pKey]?.shortName || pKey },
                                    pKey,
                                  ),
                                ),
                              ],
                            }),
                          }),
                          (0, $.jsx)(`tbody`, {
                            className: `divide-y divide-slate-100`,
                            children: allKeywordsList.map((kw) => {
                              let totalKwVol = getKeywordDisplayVolume(kw).volume;
                              return (0, $.jsxs)(
                                `tr`,
                                {
                                  className: `hover:bg-slate-50/80 transition-colors`,
                                  children: [
                                    (0, $.jsx)(`td`, {
                                      className: `py-2 px-3 font-bold text-slate-900`,
                                      children: (0, $.jsxs)(`div`, {
                                        className: `flex items-center gap-1.5`,
                                        children: [
                                          (0, $.jsx)(`span`, {
                                            className: `hover:text-rose-600 cursor-pointer`,
                                            onClick: () => handleOpenEditModal(kw),
                                            children: kw.keyword,
                                          }),
                                          (0, $.jsx)(`span`, {
                                            className: `px-1 py-0.2 rounded text-[9.5px] font-mono ${kw.tierLevel === `T1` ? `bg-rose-100 text-rose-700` : `bg-slate-200 text-slate-600`}`,
                                            children: kw.tierLevel || `T2`,
                                          }),
                                        ],
                                      }),
                                    }),
                                    (0, $.jsxs)(`td`, {
                                      className: `py-2 px-3 font-mono font-black text-right text-rose-700 bg-rose-50/30`,
                                      children: [totalKwVol.toLocaleString(), `条`],
                                    }),
                                    allPlatformKeys.map((pKey) => {
                                      let pm = getKwPlatformMetrics(kw, pKey);
                                      return (0, $.jsx)(
                                        `td`,
                                        {
                                          className: `py-2 px-2 text-right font-mono ${pm.isIncluded ? `text-slate-800 font-bold` : `text-slate-300 font-normal`}`,
                                          title: pm.isIncluded ? `【${tn[pKey]?.name}】上次跑词: ${pm.lastRunTime}，采 ${pm.dateVolume}条` : `未绑定该平台`,
                                          children: pm.isIncluded ? `${pm.dateVolume.toLocaleString()}条` : `—`,
                                        },
                                        pKey,
                                      );
                                    }),
                                  ],
                                },
                                kw.id,
                              );
                            }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            })
          : viewMode === `matrix`
          ? /* ================== Platform Keyword Distribution Matrix View (平台词库透视矩阵) ================== */
            (0, $.jsxs)(`div`, {
              className: `grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4.5`,
              children: allPlatformKeys.map((pKey) => {
                let pMeta = tn[pKey];
                let pStat = platformStats[pKey] || { count: 0, todayHits: 0, totalHits: 0, periodVolume: 0, keywords: [] };
                return (0, $.jsxs)(
                  `div`,
                  {
                    className: `bg-white border border-slate-200/90 rounded-2xl p-4.5 shadow-xs flex flex-col justify-between hover:shadow-md transition-all`,
                    children: [
                      (0, $.jsxs)(`div`, {
                        children: [
                          /* Platform Card Header */
                          (0, $.jsxs)(`div`, {
                            className: `flex items-center justify-between gap-2 pb-3 border-b border-slate-100`,
                            children: [
                              (0, $.jsxs)(`div`, {
                                className: `flex items-center gap-2.5`,
                                children: [
                                  (0, $.jsx)(`div`, {
                                    className: `w-9 h-9 rounded-xl ${pMeta.badgeBg} ${pMeta.borderClass} border flex items-center justify-center font-bold text-sm ${pMeta.badgeText}`,
                                    children: pMeta.shortName.slice(0, 2),
                                  }),
                                  (0, $.jsxs)(`div`, {
                                    children: [
                                      (0, $.jsx)(`h3`, {
                                        className: `font-black text-slate-900 text-sm`,
                                        children: pMeta.name,
                                      }),
                                      (0, $.jsx)(`span`, {
                                        className: `text-[10px] text-slate-500 font-mono`,
                                        children: pMeta.ecosystem,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, $.jsxs)(`div`, {
                                className: `text-right`,
                                children: [
                                  (0, $.jsxs)(`div`, {
                                    className: `font-mono font-black text-base text-rose-600`,
                                    children: [pStat.count, ` 个监控词`],
                                  }),
                                  (0, $.jsxs)(`div`, {
                                    className: `text-[10px] text-slate-500 font-mono`,
                                    children: [`周期采 `, pStat.periodVolume.toLocaleString(), ` 条`],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          /* Keywords assigned to this platform */
                          (0, $.jsxs)(`div`, {
                            className: `mt-3 flex flex-col gap-2 max-h-[380px] overflow-y-auto pr-1`,
                            children: [
                              pStat.keywords.length === 0
                                ? (0, $.jsx)(`div`, {
                                    className: `py-8 text-center text-xs text-slate-400`,
                                    children: `暂未绑定该平台的关键词`,
                                  })
                                : pStat.keywords.map((kw) => {
                                    let pMetrics = getKwPlatformMetrics(kw, pKey);
                                    return (0, $.jsxs)(
                                      `div`,
                                      {
                                        className: `p-2.5 rounded-xl bg-slate-50 hover:bg-slate-100/90 border border-slate-200/70 transition-all flex items-center justify-between gap-2`,
                                        children: [
                                          (0, $.jsxs)(`div`, {
                                            className: `flex flex-col gap-0.5 min-w-0`,
                                            children: [
                                              (0, $.jsxs)(`div`, {
                                                className: `flex items-center gap-1.5`,
                                                children: [
                                                  (0, $.jsx)(`span`, {
                                                    className: `font-bold text-slate-900 text-xs truncate max-w-[150px] cursor-pointer hover:text-rose-600`,
                                                    onClick: () => handleOpenEditModal(kw),
                                                    children: kw.keyword,
                                                  }),
                                                  (0, $.jsx)(`span`, {
                                                    className: `px-1 py-0.2 rounded text-[9.5px] font-mono font-bold ${kw.tierLevel === `T1` ? `bg-rose-100 text-rose-700` : `bg-slate-200 text-slate-700`}`,
                                                    children: kw.tierLevel || `T2`,
                                                  }),
                                                ],
                                              }),
                                              (0, $.jsxs)(`div`, {
                                                className: `text-[10px] text-slate-500 font-mono flex items-center gap-1.5`,
                                                children: [
                                                  (0, $.jsx)(`span`, { children: `跑词时间:` }),
                                                  (0, $.jsx)(`span`, { className: `text-slate-700 font-semibold`, children: pMetrics.lastRunTime.slice(11) }),
                                                  (0, $.jsx)(`span`, { className: `text-slate-400`, children: `(${pMetrics.relativeText})` }),
                                                ],
                                              }),
                                            ],
                                          }),
                                          (0, $.jsxs)(`div`, {
                                            className: `flex items-center gap-1.5 shrink-0`,
                                            children: [
                                              (0, $.jsxs)(`div`, {
                                                className: `text-right`,
                                                children: [
                                                  (0, $.jsxs)(`div`, {
                                                    className: `text-xs font-black font-mono text-emerald-700`,
                                                    children: [pMetrics.dateVolume.toLocaleString(), `条`],
                                                  }),
                                                  (0, $.jsx)(`div`, {
                                                    className: `text-[9px] text-slate-400`,
                                                    children: `所选周期采集`,
                                                  }),
                                                ],
                                              }),
                                              (0, $.jsx)(`button`, {
                                                type: `button`,
                                                onClick: () => handleTriggerInstantCrawl(kw, pKey),
                                                className: `p-1.5 rounded-lg bg-white hover:bg-rose-50 border border-slate-200 text-slate-600 hover:text-rose-600 transition-colors cursor-pointer`,
                                                title: `在该平台即时跑词一次`,
                                                children: (0, $.jsx)(Ie, { className: `w-3 h-3` }),
                                              }),
                                            ],
                                          }),
                                        ],
                                      },
                                      kw.id,
                                    );
                                  }),
                            ],
                          }),
                        ],
                      }),
                      (0, $.jsxs)(`div`, {
                        className: `pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-xs`,
                        children: [
                          (0, $.jsxs)(`button`, {
                            type: `button`,
                            onClick: () => {
                              setSelectedPlatform(pKey);
                              setViewMode(`list`);
                            },
                            className: `text-rose-600 hover:underline font-bold text-[11px] cursor-pointer flex items-center gap-1`,
                            children: [
                              `进入列表查看全部 ${pStat.count} 个词`,
                              (0, $.jsx)(`span`, { className: `text-xs`, children: `→` }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  },
                  pKey,
                );
              }),
            })
          : /* ================== Detailed Table View (关键词明细列表) ================== */
            (0, $.jsx)(`div`, {
              className: `bg-white border border-slate-200/80 rounded-2xl shadow-xs overflow-hidden`,
              children: (0, $.jsx)(`div`, {
                className: `w-full overflow-x-auto`,
                children: (0, $.jsxs)(`table`, {
                  className: `w-full border-collapse text-[12px] text-left`,
                  children: [
                    (0, $.jsx)(`thead`, {
                      children: (0, $.jsxs)(`tr`, {
                        className: `bg-slate-50/90 border-b border-slate-200 text-[11px] font-black text-slate-600 uppercase tracking-wider whitespace-nowrap select-none`,
                        children: [
                          (0, $.jsx)(`th`, {
                            className: `py-3 px-4 min-w-[220px]`,
                            children: `监控关键词与分类`,
                          }),
                          (0, $.jsx)(`th`, {
                            className: `py-3 px-3 w-[150px]`,
                            children: `智能分级与轮询频率`,
                          }),
                          (0, $.jsxs)(`th`, {
                            className: `py-3 px-3 min-w-[190px] cursor-pointer hover:text-rose-600 transition-colors`,
                            onClick: () => setSortBy(sortBy === `runtime-desc` ? `runtime-asc` : `runtime-desc`),
                            title: `点击按跑词时间排序`,
                            children: [
                              (0, $.jsxs)(`div`, {
                                className: `flex items-center gap-1`,
                                children: [
                                  `平台最近跑词时间`,
                                  (0, $.jsx)(`span`, { className: `font-mono text-[10px] text-rose-500`, children: sortBy === `runtime-desc` ? `↓最新` : sortBy === `runtime-asc` ? `↑最久` : `↕` }),
                                ],
                              }),
                            ],
                          }),
                          (0, $.jsxs)(`th`, {
                            className: `py-3 px-3 min-w-[170px] cursor-pointer hover:text-rose-600 transition-colors`,
                            onClick: () => setSortBy(sortBy === `recent24h-desc` ? `volume-desc` : `recent24h-desc`),
                            title: `点击按近24h全网量排序`,
                            children: [
                              (0, $.jsxs)(`div`, {
                                className: `flex items-center gap-1`,
                                children: [
                                  `近24h数据量与走势`,
                                  (0, $.jsx)(`span`, { className: `font-mono text-[10px] text-rose-500`, children: sortBy === `recent24h-desc` ? `↓高` : `↕` }),
                                ],
                              }),
                            ],
                          }),
                          (0, $.jsx)(`th`, {
                            className: `py-3 px-3 min-w-[240px]`,
                            children: `覆盖社交平台 (区分平台)`,
                          }),
                          (0, $.jsxs)(`th`, {
                            className: `py-3 px-4 min-w-[170px] text-right cursor-pointer hover:text-rose-600 transition-colors`,
                            onClick: () => setSortBy(sortBy === `volume-desc` ? `volume-asc` : `volume-desc`),
                            title: `点击按采集量排序`,
                            children: [
                              (0, $.jsxs)(`div`, {
                                className: `flex items-center justify-end gap-1`,
                                children: [
                                  `采集数量 (${selectedPlatform === `all` ? getDateRangeLabel() : tn[selectedPlatform]?.name})`,
                                  (0, $.jsx)(`span`, { className: `font-mono text-[10px] text-rose-500`, children: sortBy === `volume-desc` ? `↓高` : sortBy === `volume-asc` ? `↑低` : `↕` }),
                                ],
                              }),
                            ],
                          }),
                          (0, $.jsx)(`th`, {
                            className: `py-3 px-3 w-[85px] text-center`,
                            children: `状态`,
                          }),
                          (0, $.jsx)(`th`, {
                            className: `py-3 px-4 w-[160px] text-center`,
                            children: `快捷操作`,
                          }),
                        ],
                      }),
                    }),
                    (0, $.jsx)(`tbody`, {
                      className: `divide-y divide-slate-100`,
                      children:
                        filteredKeywords.length === 0
                          ? (0, $.jsx)(`tr`, {
                              children: (0, $.jsx)(`td`, {
                                colSpan: 8,
                                className: `py-12 text-center text-slate-400`,
                                children: (0, $.jsxs)(`div`, {
                                  className: `flex flex-col items-center gap-2`,
                                  children: [
                                    (0, $.jsx)(`span`, {
                                      className: `text-sm font-semibold`,
                                      children: `未匹配到符合条件的关键词`,
                                    }),
                                    (0, $.jsx)(`span`, {
                                      className: `text-xs text-slate-400`,
                                      children: `请尝试更换检索词、重置日期或切换平台筛选`,
                                    }),
                                  ],
                                }),
                              }),
                            })
                          : filteredKeywords.map((item) => {
                              let isPaused = item.status === `paused`,
                                tier = item.tierLevel || `T2`,
                                tMeta = getTierInfo(tier),
                                isExpanded = !!expandedKwIds[item.id];
                              let volDisplay = getKeywordDisplayVolume(item);
                              let assignedPlatforms = item.targetPlatforms || [];

                              return (0, $.jsxs)(
                                $.Fragment,
                                {
                                  children: [
                                    (0, $.jsxs)(
                                      `tr`,
                                      {
                                        className: `hover:bg-slate-50/80 transition-colors group ${isExpanded ? `bg-rose-50/20` : ``}`,
                                        children: [
                                          /* Column 1: Keyword name, Category, Expand toggle */
                                          (0, $.jsx)(`td`, {
                                            className: `py-3.5 px-4`,
                                            children: (0, $.jsxs)(`div`, {
                                              className: `flex flex-col gap-1`,
                                              children: [
                                                (0, $.jsxs)(`div`, {
                                                  className: `flex items-center gap-2`,
                                                  children: [
                                                    (0, $.jsx)(`span`, {
                                                      className: `font-extrabold text-slate-900 text-[13px] hover:text-rose-600 transition-colors cursor-pointer`,
                                                      onClick: () => handleOpenEditModal(item),
                                                      title: `点击编辑关键词策略`,
                                                      children: item.keyword,
                                                    }),
                                                    (0, $.jsx)(`span`, {
                                                      className: `px-1.5 py-0.2 rounded text-[10.5px] font-semibold bg-slate-100 text-slate-700 border border-slate-200`,
                                                      children: item.category,
                                                    }),
                                                    (0, $.jsx)(`span`, {
                                                      className: `px-1 py-0.2 rounded text-[9.5px] font-mono font-bold ${item.importance === `P0` ? `bg-red-50 text-red-700 border border-red-200` : `bg-slate-100 text-slate-600`}`,
                                                      children: item.importance,
                                                    }),
                                                  ],
                                                }),
                                                (0, $.jsxs)(`div`, {
                                                  className: `flex items-center gap-2 mt-0.5`,
                                                  children: [
                                                    (0, $.jsxs)(`button`, {
                                                      type: `button`,
                                                      onClick: () => toggleExpandRow(item.id),
                                                      className: `text-[10.5px] font-bold text-rose-600 hover:text-rose-800 hover:underline cursor-pointer flex items-center gap-1`,
                                                      children: [
                                                        isExpanded ? `收起各平台明细` : `展开各平台跑词明细 (${assignedPlatforms.length}个平台)`,
                                                      ],
                                                    }),
                                                    item.synonyms && item.synonyms.length > 0 &&
                                                      (0, $.jsxs)(`span`, {
                                                        className: `text-[10.5px] text-slate-400 truncate max-w-[140px]`,
                                                        title: item.synonyms.join(`、`),
                                                        children: [`拓展: `, item.synonyms.join(`、`)],
                                                      }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                          }),

                                          /* Column 2: Tier & Interval */
                                          (0, $.jsx)(`td`, {
                                            className: `py-3.5 px-3`,
                                            children: (0, $.jsxs)(`div`, {
                                              className: `flex flex-col gap-1`,
                                              children: [
                                                (0, $.jsxs)(`div`, {
                                                  className: `flex items-center gap-1.5`,
                                                  children: [
                                                    (0, $.jsx)(`span`, {
                                                      className: `w-2 h-2 rounded-full ${tMeta.dotColor}`,
                                                    }),
                                                    (0, $.jsx)(`span`, {
                                                      className: `font-bold text-xs ${tMeta.colorClass}`,
                                                      children: tier,
                                                    }),
                                                    (0, $.jsxs)(`span`, {
                                                      className: `text-[10px] font-mono px-1.5 py-0.2 rounded border ${tMeta.badgeBg} ${tMeta.badgeText} ${tMeta.badgeBorder}`,
                                                      children: [item.pollIntervalMinutes, `m/轮`],
                                                    }),
                                                  ],
                                                }),
                                                (0, $.jsx)(`span`, {
                                                  className: `text-[10px] text-slate-400`,
                                                  children: tMeta.subLabel,
                                                }),
                                              ],
                                            }),
                                          }),

                                          /* Column 3: Platform Last Run Time (这个词什么时间跑的) */
                                          (0, $.jsx)(`td`, {
                                            className: `py-3.5 px-3`,
                                            children: (0, $.jsxs)(`div`, {
                                              className: `flex flex-col gap-0.5`,
                                              children: [
                                                (0, $.jsxs)(`div`, {
                                                  className: `font-mono text-xs font-bold text-slate-800 flex items-center gap-1`,
                                                  children: [
                                                    (0, $.jsx)(`span`, { className: `text-[11px]`, children: `⏱` }),
                                                    item.lastCollectTime || `2026-09-30 08:35`,
                                                  ],
                                                }),
                                                (0, $.jsxs)(`div`, {
                                                  className: `text-[10.5px] font-mono flex items-center gap-1.5`,
                                                  children: [
                                                    (0, $.jsx)(`span`, {
                                                      className: `font-semibold text-rose-700 bg-rose-50 px-1 py-0.2 rounded border border-rose-200`,
                                                      children: item.latestDataRelativeText || `5分钟前`,
                                                    }),
                                                    (0, $.jsxs)(`span`, {
                                                      className: `text-slate-400 text-[10px]`,
                                                      children: [`下次: `, item.nextPollTime || `5分钟后`],
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                          }),

                                          /* Column 4: 24h Data Volume & Trend */
                                          (0, $.jsx)(`td`, {
                                            className: `py-3.5 px-3`,
                                            children: (0, $.jsxs)(`div`, {
                                              className: `flex flex-col gap-0.5`,
                                              children: [
                                                (0, $.jsxs)(`div`, {
                                                  className: `flex items-center gap-1.5`,
                                                  children: [
                                                    (0, $.jsx)(`span`, {
                                                      className: `font-mono font-black text-slate-900 text-xs`,
                                                      children: (item.dataVolume24h || 1000).toLocaleString(),
                                                    }),
                                                    (0, $.jsx)(`span`, {
                                                      className: `text-[10px] text-slate-400`,
                                                      children: `条/24h`,
                                                    }),
                                                  ],
                                                }),
                                                (0, $.jsx)(`div`, {
                                                  className: `text-[10px] font-semibold text-slate-500`,
                                                  children:
                                                    item.heatTrend === `surging`
                                                      ? `🔥 爆发激增中`
                                                      : item.heatTrend === `rising`
                                                        ? `📈 热度攀升`
                                                        : item.heatTrend === `decaying`
                                                          ? `📉 逐步平稳`
                                                          : `⚖️ 存量稳定`,
                                                }),
                                              ],
                                            }),
                                          }),

                                          /* Column 5: Target Platforms (区分平台) */
                                          (0, $.jsx)(`td`, {
                                            className: `py-3.5 px-3`,
                                            children: (0, $.jsxs)(`div`, {
                                              className: `flex items-center gap-1 flex-wrap`,
                                              children: [
                                                assignedPlatforms.map((pKey) => {
                                                  let pMeta = tn[pKey];
                                                  if (!pMeta) return null;
                                                  let pMetrics = getKwPlatformMetrics(item, pKey);
                                                  return (0, $.jsxs)(
                                                    `span`,
                                                    {
                                                      className: `inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-bold border ${pMeta.badgeBg} ${pMeta.badgeText} ${pMeta.borderClass} cursor-pointer hover:opacity-80 transition-opacity`,
                                                      title: `【${pMeta.name}】上次跑词: ${pMetrics.lastRunTime} (${pMetrics.relativeText})，采 ${pMetrics.dateVolume}条`,
                                                      onClick: () => toggleExpandRow(item.id),
                                                      children: [
                                                        (0, $.jsx)(`span`, { className: `w-1.5 h-1.5 rounded-full bg-emerald-500` }),
                                                        pMeta.shortName,
                                                      ],
                                                    },
                                                    pKey,
                                                  );
                                                }),
                                              ],
                                            }),
                                          }),

                                          /* Column 6: Captured Volume (采集数量 按日期/平台) */
                                          (0, $.jsx)(`td`, {
                                            className: `py-3.5 px-4 text-right`,
                                            children: (0, $.jsxs)(`div`, {
                                              className: `flex flex-col items-end gap-0.5`,
                                              children: [
                                                (0, $.jsxs)(`div`, {
                                                  className: `font-mono font-black text-sm text-emerald-700`,
                                                  children: [volDisplay.volume.toLocaleString(), ` 条`],
                                                }),
                                                (0, $.jsxs)(`div`, {
                                                  className: `text-[10px] text-slate-400 font-mono`,
                                                  children: [
                                                    `今日: `,
                                                    volDisplay.today.toLocaleString(),
                                                    ` | 总: `,
                                                    (volDisplay.total / 10000).toFixed(1),
                                                    `万`,
                                                  ],
                                                }),
                                              ],
                                            }),
                                          }),

                                          /* Column 7: Status */
                                          (0, $.jsx)(`td`, {
                                            className: `py-3.5 px-3 text-center`,
                                            children: (0, $.jsx)(`span`, {
                                              className: `inline-block px-2 py-0.5 rounded-full text-[10px] font-bold ${isPaused ? `bg-slate-100 text-slate-500 border border-slate-200` : `bg-emerald-50 text-emerald-700 border border-emerald-200`}`,
                                              children: isPaused ? `已暂停` : `监控中`,
                                            }),
                                          }),

                                          /* Column 8: Operations */
                                          (0, $.jsx)(`td`, {
                                            className: `py-3.5 px-4 text-center`,
                                            children: (0, $.jsxs)(`div`, {
                                              className: `flex items-center justify-center gap-1`,
                                              children: [
                                                (0, $.jsx)(`button`, {
                                                  type: `button`,
                                                  onClick: () => handleTriggerInstantCrawl(item),
                                                  className: `p-1.5 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-600 border border-rose-200 transition-colors cursor-pointer`,
                                                  title: `立即向全网下发跑词轮询`,
                                                  children: (0, $.jsx)(Ie, { className: `w-3.5 h-3.5` }),
                                                }),
                                                (0, $.jsx)(`button`, {
                                                  type: `button`,
                                                  onClick: () => handleTogglePauseKeyword(item),
                                                  className: `p-1.5 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-600 border border-slate-200 transition-colors cursor-pointer`,
                                                  title: isPaused ? `恢复轮询` : `暂停轮询`,
                                                  children: isPaused
                                                    ? (0, $.jsx)(`span`, { className: `text-xs font-bold text-emerald-600`, children: `▶` })
                                                    : (0, $.jsx)(`span`, { className: `text-xs font-bold text-amber-600`, children: `⏸` }),
                                                }),
                                                (0, $.jsx)(`button`, {
                                                  type: `button`,
                                                  onClick: () => handleOpenEditModal(item),
                                                  className: `p-1.5 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-600 border border-slate-200 transition-colors cursor-pointer`,
                                                  title: `编辑参数`,
                                                  children: (0, $.jsx)(Je, { className: `w-3.5 h-3.5` }),
                                                }),
                                                (0, $.jsx)(`button`, {
                                                  type: `button`,
                                                  onClick: () => handleDeleteKeyword(item.id, item.keyword),
                                                  className: `p-1.5 rounded-lg bg-slate-50 hover:bg-rose-50 text-slate-400 hover:text-rose-600 border border-slate-200 transition-colors cursor-pointer`,
                                                  title: `删除监控词`,
                                                  children: (0, $.jsx)(at, { className: `w-3.5 h-3.5` }),
                                                }),
                                              ],
                                            }),
                                          }),
                                        ],
                                      },
                                    ),

                                    /* Expandable Per-Platform Breakdown Sub-Card (区分平台 跑词时间与采集量明细) */
                                    isExpanded &&
                                      (0, $.jsx)(
                                        `tr`,
                                        {
                                          className: `bg-rose-50/30 border-b border-rose-100`,
                                          children: (0, $.jsx)(`td`, {
                                            colSpan: 8,
                                            className: `p-4`,
                                            children: (0, $.jsxs)(`div`, {
                                              className: `bg-white rounded-xl border border-rose-200 p-4 shadow-2xs flex flex-col gap-3`,
                                              children: [
                                                (0, $.jsxs)(`div`, {
                                                  className: `flex items-center justify-between gap-2 border-b border-slate-100 pb-2`,
                                                  children: [
                                                    (0, $.jsxs)(`div`, {
                                                      className: `flex items-center gap-2`,
                                                      children: [
                                                        (0, $.jsx)(ve, { className: `w-4 h-4 text-rose-600` }),
                                                        (0, $.jsxs)(`span`, {
                                                          className: `font-bold text-xs text-slate-900`,
                                                          children: [`【${item.keyword}】各社交平台跑词调度与采集量明细`],
                                                        }),
                                                      ],
                                                    }),
                                                    (0, $.jsxs)(`div`, {
                                                      className: `text-[11px] text-slate-500 font-mono`,
                                                      children: [
                                                        `共绑定 `,
                                                        (0, $.jsx)(`strong`, { className: `text-rose-700`, children: assignedPlatforms.length }),
                                                        ` 个平台 · 当前统计周期: `,
                                                        (0, $.jsx)(`strong`, { className: `text-slate-800`, children: getDateRangeLabel() }),
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                                /* Platform details table */
                                                (0, $.jsx)(`div`, {
                                                  className: `overflow-x-auto`,
                                                  children: (0, $.jsxs)(`table`, {
                                                    className: `w-full text-[11px] text-left border-collapse`,
                                                    children: [
                                                      (0, $.jsx)(`thead`, {
                                                        children: (0, $.jsxs)(`tr`, {
                                                          className: `bg-slate-50 text-slate-500 font-bold border-b border-slate-200`,
                                                          children: [
                                                            (0, $.jsx)(`th`, { className: `py-2 px-3`, children: `平台名称` }),
                                                            (0, $.jsx)(`th`, { className: `py-2 px-3`, children: `上次跑词时间 (具体时间)` }),
                                                            (0, $.jsx)(`th`, { className: `py-2 px-3`, children: `距今时间` }),
                                                            (0, $.jsx)(`th`, { className: `py-2 px-3`, children: `下次调度计划` }),
                                                            (0, $.jsx)(`th`, { className: `py-2 px-3 text-right`, children: `所选周期采集量` }),
                                                            (0, $.jsx)(`th`, { className: `py-2 px-3 text-right`, children: `今日增量` }),
                                                            (0, $.jsx)(`th`, { className: `py-2 px-3 text-right`, children: `累计总采集量` }),
                                                            (0, $.jsx)(`th`, { className: `py-2 px-3 text-center`, children: `状态` }),
                                                            (0, $.jsx)(`th`, { className: `py-2 px-3 text-center`, children: `单平台操作` }),
                                                          ],
                                                        }),
                                                      }),
                                                      (0, $.jsx)(`tbody`, {
                                                        className: `divide-y divide-slate-100`,
                                                        children: assignedPlatforms.map((pKey) => {
                                                          let pMeta = tn[pKey];
                                                          if (!pMeta) return null;
                                                          let pMetrics = getKwPlatformMetrics(item, pKey);
                                                          return (0, $.jsxs)(
                                                            `tr`,
                                                            {
                                                              className: `hover:bg-slate-50/70`,
                                                              children: [
                                                                (0, $.jsx)(`td`, {
                                                                  className: `py-2.5 px-3 font-bold text-slate-900`,
                                                                  children: (0, $.jsxs)(`div`, {
                                                                    className: `flex items-center gap-1.5`,
                                                                    children: [
                                                                      (0, $.jsx)(`span`, {
                                                                        className: `px-1.5 py-0.2 rounded text-[10px] ${pMeta.badgeBg} ${pMeta.badgeText} border ${pMeta.borderClass}`,
                                                                        children: pMeta.shortName,
                                                                      }),
                                                                      pMeta.name,
                                                                    ],
                                                                  }),
                                                                }),
                                                                (0, $.jsx)(`td`, {
                                                                  className: `py-2.5 px-3 font-mono font-bold text-slate-800`,
                                                                  children: pMetrics.lastRunTime,
                                                                }),
                                                                (0, $.jsx)(`td`, {
                                                                  className: `py-2.5 px-3 font-mono`,
                                                                  children: (0, $.jsx)(`span`, {
                                                                    className: `px-1.5 py-0.2 rounded text-[10.5px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200`,
                                                                    children: pMetrics.relativeText,
                                                                  }),
                                                                }),
                                                                (0, $.jsx)(`td`, {
                                                                  className: `py-2.5 px-3 font-mono text-slate-600`,
                                                                  children: pMetrics.nextPollTime,
                                                                }),
                                                                (0, $.jsx)(`td`, {
                                                                  className: `py-2.5 px-3 font-mono font-bold text-right text-emerald-700`,
                                                                  children: `${pMetrics.dateVolume.toLocaleString()} 条`,
                                                                }),
                                                                (0, $.jsx)(`td`, {
                                                                  className: `py-2.5 px-3 font-mono text-right text-slate-700`,
                                                                  children: `${pMetrics.todayHits.toLocaleString()} 条`,
                                                                }),
                                                                (0, $.jsx)(`td`, {
                                                                  className: `py-2.5 px-3 font-mono text-right text-slate-500`,
                                                                  children: `${pMetrics.totalHits.toLocaleString()} 条`,
                                                                }),
                                                                (0, $.jsx)(`td`, {
                                                                  className: `py-2.5 px-3 text-center`,
                                                                  children: (0, $.jsx)(`span`, {
                                                                    className: `px-1.5 py-0.2 rounded-full text-[9.5px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200`,
                                                                    children: `活跃轮询中`,
                                                                  }),
                                                                }),
                                                                (0, $.jsx)(`td`, {
                                                                  className: `py-2.5 px-3 text-center`,
                                                                  children: (0, $.jsxs)(`button`, {
                                                                    type: `button`,
                                                                    onClick: () => handleTriggerInstantCrawl(item, pKey),
                                                                    className: `px-2 py-0.5 rounded bg-rose-50 text-rose-700 hover:bg-rose-100 border border-rose-200 text-[10px] font-bold cursor-pointer transition-colors inline-flex items-center gap-1`,
                                                                    children: [
                                                                      (0, $.jsx)(Ie, { className: `w-2.5 h-2.5` }),
                                                                      `立即跑词`,
                                                                    ],
                                                                  }),
                                                                }),
                                                              ],
                                                            },
                                                            pKey,
                                                          );
                                                        }),
                                                      }),
                                                    ],
                                                  }),
                                                }),
                                              ],
                                            }),
                                          }),
                                        },
                                        `expand-${item.id}`,
                                      ),
                                  ],
                                },
                                item.id,
                              );
                            }),
                    }),
                  ],
                }),
              }),
            }),

        /* Threshold Configuration Modal */
        isThresholdModalOpen &&
          (0, $.jsx)(`div`, {
            className: `fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200`,
            children: (0, $.jsxs)(`div`, {
              className: `bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-3xl max-h-[92vh] flex flex-col overflow-hidden animate-in zoom-in-95 duration-150`,
              onClick: (e) => e.stopPropagation(),
              children: [
                (0, $.jsxs)(`div`, {
                  className: `px-6 py-4.5 border-b border-slate-200 flex items-center justify-between bg-slate-50/80`,
                  children: [
                    (0, $.jsxs)(`div`, {
                      className: `flex items-center gap-2.5`,
                      children: [
                        (0, $.jsx)(`div`, {
                          className: `w-8 h-8 rounded-xl bg-rose-100 flex items-center justify-center text-rose-700 font-bold`,
                          children: (0, $.jsx)(Je, { className: `w-4 h-4` }),
                        }),
                        (0, $.jsxs)(`div`, {
                          children: [
                            (0, $.jsx)(`h3`, {
                              className: `font-black text-slate-900 text-sm`,
                              children: `智能分级依据与阈值参数配置`,
                            }),
                            (0, $.jsx)(`p`, {
                              className: `text-[11px] text-slate-500`,
                              children: `按「最新数据距今时间」与「24h数据量」判定关键词热度等级与轮询频率`,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, $.jsx)(`button`, {
                      type: `button`,
                      onClick: () => setIsThresholdModalOpen(!1),
                      className: `p-1.5 rounded-lg hover:bg-slate-200 text-slate-400 hover:text-slate-700 transition-colors cursor-pointer`,
                      children: (0, $.jsx)(Q, { className: `w-4 h-4` }),
                    }),
                  ],
                }),
                (0, $.jsx)(`div`, {
                  className: `p-6 overflow-y-auto space-y-4 flex-1 text-xs`,
                  children: [`T1`, `T2`, `T3`, `T4`].map((tierKey) => {
                    let tObj = tierThresholds[tierKey] || nn[tierKey];
                    return (0, $.jsxs)(
                      `div`,
                      {
                        className: `p-4 rounded-xl border border-slate-200 bg-slate-50/60 flex flex-col gap-3`,
                        children: [
                          (0, $.jsxs)(`div`, {
                            className: `flex items-center justify-between`,
                            children: [
                              (0, $.jsxs)(`div`, {
                                className: `flex items-center gap-2`,
                                children: [
                                  (0, $.jsx)(`span`, {
                                    className: `px-2 py-0.5 rounded font-bold font-mono text-xs ${tObj.badgeBg} ${tObj.badgeText} border ${tObj.badgeBorder}`,
                                    children: tObj.name,
                                  }),
                                  (0, $.jsx)(`span`, {
                                    className: `text-slate-500 font-medium`,
                                    children: tObj.subLabel,
                                  }),
                                ],
                              }),
                              (0, $.jsxs)(`span`, {
                                className: `font-bold text-rose-700 font-mono`,
                                children: [`轮询间隔: `, tObj.intervalText],
                              }),
                            ],
                          }),
                          (0, $.jsxs)(`div`, {
                            className: `grid grid-cols-1 sm:grid-cols-2 gap-3 bg-white p-3 rounded-lg border border-slate-200/80`,
                            children: [
                              (0, $.jsxs)(`div`, {
                                className: `flex items-center justify-between gap-2`,
                                children: [
                                  (0, $.jsx)(`span`, { className: `text-slate-600 font-semibold`, children: `最新数据距今上限:` }),
                                  (0, $.jsxs)(`span`, {
                                    className: `font-mono font-bold text-slate-900`,
                                    children: [tObj.maxMinutesSinceLatestData >= 9999 ? `无限制` : `≤ ${tObj.maxMinutesSinceLatestData} 分钟`],
                                  }),
                                ],
                              }),
                              (0, $.jsxs)(`div`, {
                                className: `flex items-center justify-between gap-2`,
                                children: [
                                  (0, $.jsx)(`span`, { className: `text-slate-600 font-semibold`, children: `近24h数据量门槛:` }),
                                  (0, $.jsxs)(`span`, {
                                    className: `font-mono font-bold text-slate-900`,
                                    children: [`≥ ${tObj.min24hVolume.toLocaleString()} 条`],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      },
                      tierKey,
                    );
                  }),
                }),
                (0, $.jsx)(`div`, {
                  className: `px-6 py-3.5 border-t border-slate-200 bg-slate-50/80 flex items-center justify-end gap-2`,
                  children: (0, $.jsx)(`button`, {
                    type: `button`,
                    onClick: () => setIsThresholdModalOpen(!1),
                    className: `px-4 py-2 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-all cursor-pointer`,
                    children: `确定并关闭`,
                  }),
                }),
              ],
            }),
          }),

        /* Add / Edit Keyword Modal */
        isEditModalOpen &&
          (0, $.jsx)(`div`, {
            className: `fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200`,
            children: (0, $.jsxs)(`div`, {
              className: `bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-2xl max-h-[92vh] flex flex-col overflow-hidden animate-in zoom-in-95 duration-150`,
              onClick: (e) => e.stopPropagation(),
              children: [
                (0, $.jsxs)(`div`, {
                  className: `px-6 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-50/80`,
                  children: [
                    (0, $.jsxs)(`div`, {
                      className: `flex items-center gap-2.5`,
                      children: [
                        (0, $.jsx)(`div`, {
                          className: `w-8 h-8 rounded-xl bg-rose-100 flex items-center justify-center text-rose-700 font-bold`,
                          children: (0, $.jsx)(ve, { className: `w-4 h-4` }),
                        }),
                        (0, $.jsx)(`h3`, {
                          className: `font-black text-slate-900 text-sm`,
                          children: editingKwItem ? `编辑关键词轮询策略【${editingKwItem.keyword}】` : `新增监控关键词`,
                        }),
                      ],
                    }),
                    (0, $.jsx)(`button`, {
                      type: `button`,
                      onClick: () => setIsEditModalOpen(!1),
                      className: `p-1.5 rounded-lg hover:bg-slate-200 text-slate-400 hover:text-slate-700 transition-colors cursor-pointer`,
                      children: (0, $.jsx)(Q, { className: `w-4 h-4` }),
                    }),
                  ],
                }),
                (0, $.jsxs)(`form`, {
                  onSubmit: handleSaveKeywordForm,
                  className: `p-6 overflow-y-auto space-y-4 flex-1 text-xs`,
                  children: [
                    (0, $.jsxs)(`div`, {
                      className: `flex flex-col gap-1.5`,
                      children: [
                        (0, $.jsx)(`label`, { className: `font-bold text-slate-700`, children: `监控关键词名称 *` }),
                        (0, $.jsx)(`input`, {
                          type: `text`,
                          value: formKeywordName,
                          onChange: (e) => setFormKeywordName(e.target.value),
                          placeholder: `例如：具身智能人形机器人 / 低空经济eVTOL`,
                          className: `w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl font-bold text-slate-900 focus:bg-white focus:outline-none focus:border-rose-500`,
                        }),
                      ],
                    }),
                    (0, $.jsxs)(`div`, {
                      className: `grid grid-cols-2 gap-3`,
                      children: [
                        (0, $.jsxs)(`div`, {
                          className: `flex flex-col gap-1.5`,
                          children: [
                            (0, $.jsx)(`label`, { className: `font-bold text-slate-700`, children: `行业分类` }),
                            (0, $.jsxs)(`select`, {
                              value: formCategory,
                              onChange: (e) => setFormCategory(e.target.value),
                              className: `w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl font-semibold text-slate-900 focus:bg-white focus:outline-none focus:border-rose-500`,
                              children: [
                                `前沿科技`,
                                `产业制造`,
                                `商业财经`,
                                `民生社会`,
                                `消费文娱`,
                                `医疗健康`,
                              ].map((cat) => (0, $.jsx)(`option`, { value: cat, children: cat }, cat)),
                            }),
                          ],
                        }),
                        (0, $.jsxs)(`div`, {
                          className: `flex flex-col gap-1.5`,
                          children: [
                            (0, $.jsx)(`label`, { className: `font-bold text-slate-700`, children: `监控优先级` }),
                            (0, $.jsxs)(`select`, {
                              value: formImportance,
                              onChange: (e) => setFormImportance(e.target.value),
                              className: `w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl font-semibold text-slate-900 focus:bg-white focus:outline-none focus:border-rose-500`,
                              children: [
                                (0, $.jsx)(`option`, { value: `P0`, children: `P0 · 核心重点监控` }),
                                (0, $.jsx)(`option`, { value: `P1`, children: `P1 · 重点业务追踪` }),
                                (0, $.jsx)(`option`, { value: `P2`, children: `P2 · 常规长尾采集` }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    /* Target Platforms selection */
                    (0, $.jsxs)(`div`, {
                      className: `flex flex-col gap-1.5`,
                      children: [
                        (0, $.jsx)(`label`, { className: `font-bold text-slate-700`, children: `覆盖社交平台 *` }),
                        (0, $.jsx)(`div`, {
                          className: `flex items-center gap-1.5 flex-wrap p-2.5 bg-slate-50 rounded-xl border border-slate-200`,
                          children: allPlatformKeys.map((pKey) => {
                            let pMeta = tn[pKey];
                            let isChecked = formPlatforms.includes(pKey);
                            return (0, $.jsxs)(
                              `button`,
                              {
                                type: `button`,
                                onClick: () => {
                                  setFormPlatforms(isChecked ? formPlatforms.filter((k) => k !== pKey) : [...formPlatforms, pKey]);
                                },
                                className: `px-2.5 py-1 rounded-lg text-xs font-bold border transition-all cursor-pointer flex items-center gap-1 ${isChecked ? `${pMeta.badgeBg} ${pMeta.badgeText} ${pMeta.borderClass} ring-1 ring-rose-500` : `bg-white text-slate-500 border-slate-200 opacity-60`}`,
                                children: [
                                  (0, $.jsx)(`span`, { className: `w-1.5 h-1.5 rounded-full ${isChecked ? `bg-emerald-500` : `bg-slate-300`}` }),
                                  pMeta.name,
                                ],
                              },
                              pKey,
                            );
                          }),
                        }),
                      ],
                    }),
                    (0, $.jsxs)(`div`, {
                      className: `px-6 py-4 border-t border-slate-200 bg-slate-50/80 -mx-6 -mb-6 mt-6 flex items-center justify-end gap-2`,
                      children: [
                        (0, $.jsx)(`button`, {
                          type: `button`,
                          onClick: () => setIsEditModalOpen(!1),
                          className: `px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100 rounded-xl transition-all cursor-pointer`,
                          children: `取消`,
                        }),
                        (0, $.jsx)(`button`, {
                          type: `submit`,
                          className: `px-5 py-2 text-xs font-bold text-white bg-rose-600 hover:bg-rose-700 rounded-xl shadow-xs transition-all cursor-pointer`,
                          children: `保存策略`,
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

bundle = bundle[:pos_an_start] + new_an_code + ",\n  " + bundle[pos_an_end:]

with open('src/app-bundle.js', 'w', encoding='utf-8') as f:
    f.write(bundle)

print("Successfully replaced An in src/app-bundle.js")
