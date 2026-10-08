 = ({ onAddToast: e }) => {
    let [t, n] = (0, C.useState)(`accounts`),
      [r, i] = (0, C.useState)(Mn),
      [a, o] = (0, C.useState)(Nn),
      [s, c] = (0, C.useState)(``),
      [l, u] = (0, C.useState)(`all`),
      [d, f] = (0, C.useState)(null),
      [p, m] = (0, C.useState)(null),
      [h, g] = (0, C.useState)(`PHONE-WB-009`),
      [_, v] = (0, C.useState)(!1),
      [y, b] = (0, C.useState)(!1),
      [x, S] = (0, C.useState)(``),
      [w, T] = (0, C.useState)(``),
      [E, D] = (0, C.useState)(`时政要闻`),
      [O, A] = (0, C.useState)(`PHONE-WB-001`),
      [j, ee] = (0, C.useState)(100),
      [M, N] = (0, C.useState)(180),
      [P, F] = (0, C.useState)(!0),
      [I, L] = (0, C.useState)(!0),
      R = a.length,
      te = a.filter(
        (e) => e.status === `normal` || e.status === `standby`,
      ).length,
      z = a.filter(
        (e) => e.status === `abnormal` || e.status === `offline`,
      ).length,
      ne = Math.round(
        a.reduce((e, t) => e + t.followedCount, 0) / (a.length || 1),
      ),
      V = r.reduce((e, t) => e + t.storageToday, 0) + 38400,
      re = r.filter((e) => {
        let t =
          e.weiboName.toLowerCase().includes(s.toLowerCase()) ||
          e.uid.includes(s) ||
          e.phoneId.toLowerCase().includes(s.toLowerCase());
        return l === `normal`
          ? t && e.status === `normal`
          : l === `abnormal`
            ? t && e.status === `abnormal`
            : t;
      });
    return (0, $.jsxs)(`div`, {
      className: `space-y-4 pb-12`,
      children: [
        (0, $.jsxs)(`div`, {
          className: `bg-gradient-to-r from-[#1e376b] via-[#162e5c] to-[#0f2144] rounded-2xl p-4 text-white shadow-md border border-[#2b4b84]`,
          children: [
            (0, $.jsxs)(`div`, {
              className: `flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-3 border-b border-blue-400/20`,
              children: [
                (0, $.jsxs)(`div`, {
                  className: `flex items-center gap-3`,
                  children: [
                    (0, $.jsx)(`div`, {
                      className: `w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center shrink-0`,
                      children: (0, $.jsx)(Ye, {
                        className: `w-5 h-5 text-blue-300`,
                      }),
                    }),
                    (0, $.jsxs)(`div`, {
                      children: [
                        (0, $.jsxs)(`div`, {
                          className: `flex items-center gap-2`,
                          children: [
                            (0, $.jsx)(`h1`, {
                              className: `text-lg font-black tracking-tight`,
                              children: `关注抓取 (实体手机机房)`,
                            }),
                            (0, $.jsx)(`span`, {
                              className: `px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-200 border border-blue-400/30 text-[11px] font-bold`,
                              children: `实体设备 · 自动关注 · 故障无感切机`,
                            }),
                          ],
                        }),
                        (0, $.jsx)(`p`, {
                          className: `text-[12px] text-blue-200/80 mt-0.5`,
                          children: `基于实体手机机房群控自动化关注微博账号，实时监控设备健康与风控状态，支持手机异常自动/手动热切换`,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, $.jsx)(`div`, {
                  className: `flex items-center gap-2`,
                  children: (0, $.jsxs)(`button`, {
                    type: `button`,
                    onClick: () => b(!0),
                    className: `px-3.5 py-1.5 rounded-xl bg-[#0066FF] hover:bg-blue-600 text-white font-bold text-xs inline-flex items-center gap-1.5 shadow-sm transition-all cursor-pointer`,
                    children: [
                      (0, $.jsx)(Pe, { className: `w-3.5 h-3.5` }),
                      (0, $.jsx)(`span`, { children: `新增关注抓取台账` }),
                    ],
                  }),
                }),
              ],
            }),
            (0, $.jsxs)(`div`, {
              className: `grid grid-cols-2 md:grid-cols-5 gap-3 mt-3 pt-1`,
              children: [
                (0, $.jsxs)(`div`, {
                  className: `bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/10 flex flex-col justify-between`,
                  children: [
                    (0, $.jsxs)(`span`, {
                      className: `text-[11px] text-blue-200/90 font-bold flex items-center gap-1`,
                      children: [
                        (0, $.jsx)(ut, {
                          className: `w-3.5 h-3.5 text-blue-300`,
                        }),
                        (0, $.jsx)(`span`, { children: `关注抓取台账数` }),
                      ],
                    }),
                    (0, $.jsxs)(`div`, {
                      className: `mt-2 flex items-baseline justify-between`,
                      children: [
                        (0, $.jsx)(`span`, {
                          className: `font-mono font-black text-xl text-white`,
                          children: (1280).toLocaleString(),
                        }),
                        (0, $.jsx)(`span`, {
                          className: `text-[10px] text-blue-200 font-sans`,
                          children: `个微博账号`,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, $.jsxs)(`div`, {
                  className: `bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/10 flex flex-col justify-between`,
                  children: [
                    (0, $.jsxs)(`span`, {
                      className: `text-[11px] text-blue-200/90 font-bold flex items-center gap-1`,
                      children: [
                        (0, $.jsx)(Ye, {
                          className: `w-3.5 h-3.5 text-emerald-300`,
                        }),
                        (0, $.jsx)(`span`, { children: `实体手机总数 / 在线` }),
                      ],
                    }),
                    (0, $.jsxs)(`div`, {
                      className: `mt-2 flex items-baseline justify-between`,
                      children: [
                        (0, $.jsxs)(`span`, {
                          className: `font-mono font-black text-xl text-white`,
                          children: [
                            te,
                            ` `,
                            (0, $.jsxs)(`span`, {
                              className: `text-sm font-semibold text-blue-200`,
                              children: [`/ `, R],
                            }),
                          ],
                        }),
                        (0, $.jsxs)(`span`, {
                          className: `text-[10px] font-bold text-emerald-300 bg-emerald-500/20 px-1.5 py-0.2 rounded border border-emerald-400/30`,
                          children: [Math.round((te / R) * 100), `% 正常`],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, $.jsxs)(`div`, {
                  className: `bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/10 flex flex-col justify-between`,
                  children: [
                    (0, $.jsxs)(`span`, {
                      className: `text-[11px] text-blue-200/90 font-bold flex items-center gap-1`,
                      children: [
                        (0, $.jsx)(de, {
                          className: `w-3.5 h-3.5 text-amber-300`,
                        }),
                        (0, $.jsx)(`span`, { children: `单机平均关注数` }),
                      ],
                    }),
                    (0, $.jsxs)(`div`, {
                      className: `mt-2 flex items-baseline justify-between`,
                      children: [
                        (0, $.jsxs)(`span`, {
                          className: `font-mono font-black text-xl text-amber-300`,
                          children: [
                            ne,
                            ` `,
                            (0, $.jsxs)(`span`, {
                              className: `text-xs font-normal text-blue-200`,
                              children: [`/ `, j],
                            }),
                          ],
                        }),
                        (0, $.jsx)(`span`, {
                          className: `text-[10px] text-blue-200 font-sans`,
                          children: `账号/台`,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, $.jsxs)(`div`, {
                  className: `backdrop-blur-md rounded-xl p-3 border flex flex-col justify-between transition-all ${z > 0 ? `bg-rose-500/20 border-rose-400/40 text-white` : `bg-white/10 border-white/10 text-white`}`,
                  children: [
                    (0, $.jsxs)(`span`, {
                      className: `text-[11px] text-blue-200/90 font-bold flex items-center gap-1`,
                      children: [
                        (0, $.jsx)(ct, {
                          className: `w-3.5 h-3.5 text-rose-300`,
                        }),
                        (0, $.jsx)(`span`, { children: `异常/待切换手机` }),
                      ],
                    }),
                    (0, $.jsxs)(`div`, {
                      className: `mt-2 flex items-baseline justify-between`,
                      children: [
                        (0, $.jsxs)(`span`, {
                          className: `font-mono font-black text-xl text-rose-300`,
                          children: [
                            z,
                            ` `,
                            (0, $.jsx)(`span`, {
                              className: `text-xs font-normal text-blue-200`,
                              children: `台`,
                            }),
                          ],
                        }),
                        z > 0
                          ? (0, $.jsx)(`button`, {
                              type: `button`,
                              onClick: () => n(`phones`),
                              className: `text-[10px] font-bold text-rose-200 bg-rose-500/30 hover:bg-rose-500/50 px-1.5 py-0.5 rounded border border-rose-400/40 transition-colors cursor-pointer`,
                              children: `一键故障切机 →`,
                            })
                          : (0, $.jsx)(`span`, {
                              className: `text-[10px] text-emerald-300 font-sans`,
                              children: `良好无异常`,
                            }),
                      ],
                    }),
                  ],
                }),
                (0, $.jsxs)(`div`, {
                  className: `bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/10 flex flex-col justify-between`,
                  children: [
                    (0, $.jsxs)(`span`, {
                      className: `text-[11px] text-blue-200/90 font-bold flex items-center gap-1`,
                      children: [
                        (0, $.jsx)(pt, {
                          className: `w-3.5 h-3.5 text-yellow-300`,
                        }),
                        (0, $.jsx)(`span`, { children: `今日抓取博文量` }),
                      ],
                    }),
                    (0, $.jsxs)(`div`, {
                      className: `mt-2 flex items-baseline justify-between`,
                      children: [
                        (0, $.jsxs)(`span`, {
                          className: `font-mono font-black text-xl text-yellow-300`,
                          children: [`+`, V.toLocaleString()],
                        }),
                        (0, $.jsx)(`span`, {
                          className: `text-[10px] text-blue-200 font-sans`,
                          children: `篇数据`,
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        (0, $.jsxs)(`div`, {
          className: `bg-white border border-slate-200/80 rounded-xl p-2 shadow-2xs flex items-center justify-between gap-3`,
          children: [
            (0, $.jsxs)(`div`, {
              className: `inline-flex rounded-lg border border-slate-200 p-0.5 bg-slate-50`,
              children: [
                (0, $.jsxs)(`button`, {
                  type: `button`,
                  onClick: () => n(`accounts`),
                  className: `px-4 py-2 rounded-md text-xs font-bold transition-all cursor-pointer inline-flex items-center gap-1.5 ${t === `accounts` ? `bg-[#1e376b] text-white shadow-2xs` : `text-slate-600 hover:text-slate-900`}`,
                  children: [
                    (0, $.jsx)(ut, { className: `w-3.5 h-3.5` }),
                    (0, $.jsxs)(`span`, {
                      children: [`关注抓取台账清单 (`, r.length, `)`],
                    }),
                  ],
                }),
                (0, $.jsxs)(`button`, {
                  type: `button`,
                  onClick: () => n(`phones`),
                  className: `px-4 py-2 rounded-md text-xs font-bold transition-all cursor-pointer inline-flex items-center gap-1.5 relative ${t === `phones` ? `bg-[#1e376b] text-white shadow-2xs` : `text-slate-600 hover:text-slate-900`}`,
                  children: [
                    (0, $.jsx)(Ye, { className: `w-3.5 h-3.5` }),
                    (0, $.jsxs)(`span`, {
                      children: [`实体手机集群与风控监控 (`, a.length, ` 台)`],
                    }),
                    z > 0 &&
                      (0, $.jsx)(`span`, {
                        className: `w-2 h-2 rounded-full bg-rose-500 animate-ping absolute top-1 right-1`,
                      }),
                  ],
                }),
                (0, $.jsxs)(`button`, {
                  type: `button`,
                  onClick: () => n(`policy`),
                  className: `px-4 py-2 rounded-md text-xs font-bold transition-all cursor-pointer inline-flex items-center gap-1.5 ${t === `policy` ? `bg-[#1e376b] text-white shadow-2xs` : `text-slate-600 hover:text-slate-900`}`,
                  children: [
                    (0, $.jsx)(Ue, { className: `w-3.5 h-3.5` }),
                    (0, $.jsx)(`span`, {
                      children: `自动化关注与故障切换策略`,
                    }),
                  ],
                }),
              ],
            }),
            t === `accounts` &&
              (0, $.jsxs)(`div`, {
                className: `flex items-center gap-2`,
                children: [
                  (0, $.jsxs)(`div`, {
                    className: `relative`,
                    children: [
                      (0, $.jsx)(Be, {
                        className: `w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5`,
                      }),
                      (0, $.jsx)(`input`, {
                        type: `text`,
                        placeholder: `搜索微博账号 / UID / 手机号...`,
                        value: s,
                        onChange: (e) => c(e.target.value),
                        className: `h-8.5 pl-8 pr-3 w-56 border border-slate-200 rounded-lg text-xs bg-white text-slate-800 focus:border-[#0066FF] outline-none`,
                      }),
                    ],
                  }),
                  (0, $.jsxs)(`select`, {
                    value: l,
                    onChange: (e) => u(e.target.value),
                    className: `h-8.5 px-2.5 border border-slate-200 rounded-lg text-xs font-semibold text-slate-700 bg-white focus:border-[#0066FF] outline-none cursor-pointer`,
                    children: [
                      (0, $.jsx)(`option`, {
                        value: `all`,
                        children: `全部台账状态`,
                      }),
                      (0, $.jsx)(`option`, {
                        value: `normal`,
                        children: `🟢 正常抓取`,
                      }),
                      (0, $.jsx)(`option`, {
                        value: `abnormal`,
                        children: `🔴 手机风控异常`,
                      }),
                    ],
                  }),
                ],
              }),
          ],
        }),
        t === `accounts` &&
          (0, $.jsx)(`div`, {
            className: `bg-white border border-slate-200 rounded-xl shadow-xs overflow-hidden`,
            children: (0, $.jsx)(`div`, {
              className: `overflow-x-auto`,
              children: (0, $.jsxs)(`table`, {
                className: `w-full text-left border-collapse text-[12px]`,
                children: [
                  (0, $.jsx)(`thead`, {
                    className: `bg-slate-50 border-b border-slate-200 text-slate-600 font-extrabold uppercase text-[11px] tracking-wider`,
                    children: (0, $.jsxs)(`tr`, {
                      children: [
                        (0, $.jsx)(`th`, {
                          className: `py-3 px-4 min-w-[180px]`,
                          children: `微博账号 / 台账名称`,
                        }),
                        (0, $.jsx)(`th`, {
                          className: `py-3 px-4 min-w-[210px]`,
                          children: `绑定的实体手机 / 序号`,
                        }),
                        (0, $.jsx)(`th`, {
                          className: `py-3 px-4 w-28`,
                          children: `采集频率`,
                        }),
                        (0, $.jsx)(`th`, {
                          className: `py-3 px-4 min-w-[150px]`,
                          children: `最新发博时间`,
                        }),
                        (0, $.jsx)(`th`, {
                          className: `py-3 px-4 min-w-[140px] text-right`,
                          children: `今日增量 / 累计博文`,
                        }),
                        (0, $.jsx)(`th`, {
                          className: `py-3 px-4 w-32`,
                          children: `台账状态`,
                        }),
                        (0, $.jsx)(`th`, {
                          className: `py-3 px-4 w-44 text-center`,
                          children: `调度操作`,
                        }),
                      ],
                    }),
                  }),
                  (0, $.jsx)(`tbody`, {
                    className: `divide-y divide-slate-100`,
                    children: re.map((t) =>
                      (0, $.jsxs)(
                        `tr`,
                        {
                          className: `hover:bg-slate-50/80 transition-colors`,
                          children: [
                            (0, $.jsx)(`td`, {
                              className: `py-3 px-4`,
                              children: (0, $.jsxs)(`div`, {
                                className: `flex flex-col gap-0.5`,
                                children: [
                                  (0, $.jsxs)(`div`, {
                                    className: `flex items-center gap-1.5`,
                                    children: [
                                      (0, $.jsx)(`span`, {
                                        className: `font-extrabold text-[13px] text-slate-900`,
                                        children: t.weiboName,
                                      }),
                                      (0, $.jsx)(`span`, {
                                        className: `text-[10px] font-bold px-1.5 py-0.2 rounded bg-purple-50 text-purple-700 border border-purple-200/80`,
                                        children: t.category,
                                      }),
                                    ],
                                  }),
                                  (0, $.jsxs)(`div`, {
                                    className: `flex items-center gap-1 font-mono text-[11px] text-slate-400`,
                                    children: [
                                      (0, $.jsxs)(`span`, {
                                        children: [`UID: `, t.uid],
                                      }),
                                      (0, $.jsx)(`a`, {
                                        href: t.weiboUrl,
                                        target: `_blank`,
                                        rel: `noreferrer`,
                                        className: `text-slate-400 hover:text-[#0066FF]`,
                                        title: `打开微博主页`,
                                        children: (0, $.jsx)(ce, {
                                          className: `w-3 h-3`,
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                            (0, $.jsx)(`td`, {
                              className: `py-3 px-4`,
                              children: (0, $.jsxs)(`div`, {
                                className: `flex flex-col gap-1`,
                                children: [
                                  (0, $.jsxs)(`div`, {
                                    className: `flex items-center gap-1.5 font-mono`,
                                    children: [
                                      (0, $.jsxs)(`span`, {
                                        className: `font-extrabold text-slate-800 text-[12px] flex items-center gap-1 bg-slate-100 px-2 py-0.5 rounded border border-slate-200`,
                                        children: [
                                          (0, $.jsx)(Ye, {
                                            className: `w-3.5 h-3.5 text-[#0066FF]`,
                                          }),
                                          (0, $.jsx)(`span`, {
                                            children: t.phoneId,
                                          }),
                                        ],
                                      }),
                                      (0, $.jsx)(`span`, {
                                        className: `text-[11px] font-semibold text-slate-600`,
                                        children: t.phoneModel,
                                      }),
                                    ],
                                  }),
                                  (0, $.jsxs)(`div`, {
                                    className: `flex items-center gap-2 text-[10.5px]`,
                                    children: [
                                      (0, $.jsxs)(`span`, {
                                        className: `font-mono text-slate-500`,
                                        children: [
                                          `关注次序: 第 `,
                                          (0, $.jsx)(`strong`, {
                                            className: `text-[#0066FF] font-black`,
                                            children: t.followIndex,
                                          }),
                                          ` / `,
                                          t.followLimit,
                                          ` 关注`,
                                        ],
                                      }),
                                      t.phoneStatus === `abnormal` &&
                                        (0, $.jsxs)(`span`, {
                                          className: `text-rose-600 font-bold bg-rose-50 px-1.5 py-0.2 rounded border border-rose-200 flex items-center gap-0.5`,
                                          children: [
                                            (0, $.jsx)(ct, {
                                              className: `w-3 h-3`,
                                            }),
                                            (0, $.jsx)(`span`, {
                                              children: `手机风控`,
                                            }),
                                          ],
                                        }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                            (0, $.jsx)(`td`, {
                              className: `py-3 px-4 whitespace-nowrap`,
                              children: (0, $.jsxs)(`span`, {
                                className: `inline-flex items-center gap-1 font-mono text-[11px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200/80`,
                                children: [
                                  (0, $.jsx)(Ie, {
                                    className: `w-3 h-3 text-[#0066FF]`,
                                  }),
                                  (0, $.jsx)(`span`, {
                                    children: t.scrapeFreq,
                                  }),
                                ],
                              }),
                            }),
                            (0, $.jsx)(`td`, {
                              className: `py-3 px-4 whitespace-nowrap`,
                              children: (0, $.jsxs)(`div`, {
                                className: `flex flex-col gap-0.5`,
                                children: [
                                  (0, $.jsx)(`span`, {
                                    className: `font-mono text-[11.5px] font-bold text-slate-800`,
                                    children: t.latestPublishTime,
                                  }),
                                  (0, $.jsxs)(`span`, {
                                    className: `text-[10.5px] text-slate-400 font-mono`,
                                    children: [`采集于: `, t.lastScrapeTime],
                                  }),
                                ],
                              }),
                            }),
                            (0, $.jsx)(`td`, {
                              className: `py-3 px-4 text-right whitespace-nowrap`,
                              children: (0, $.jsxs)(`div`, {
                                className: `flex flex-col items-end gap-0.5`,
                                children: [
                                  (0, $.jsxs)(`span`, {
                                    className: `font-mono text-xs font-black text-emerald-600`,
                                    children: [
                                      `+`,
                                      t.storageToday.toLocaleString(),
                                    ],
                                  }),
                                  (0, $.jsxs)(`span`, {
                                    className: `font-mono text-[10.5px] text-slate-400 font-medium`,
                                    children: [
                                      `累计: `,
                                      t.storageTotal.toLocaleString(),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                            (0, $.jsx)(`td`, {
                              className: `py-3 px-4 whitespace-nowrap`,
                              children:
                                t.status === `normal`
                                  ? (0, $.jsxs)(`span`, {
                                      className: `inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200`,
                                      children: [
                                        (0, $.jsx)(B, {
                                          className: `w-3.5 h-3.5 text-emerald-600`,
                                        }),
                                        (0, $.jsx)(`span`, {
                                          children: `正常抓取中`,
                                        }),
                                      ],
                                    })
                                  : t.status === `switched`
                                    ? (0, $.jsxs)(`span`, {
                                        className: `inline-flex items-center gap-1 text-[11px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200`,
                                        children: [
                                          (0, $.jsx)(k, {
                                            className: `w-3.5 h-3.5 text-[#0066FF]`,
                                          }),
                                          (0, $.jsx)(`span`, {
                                            children: `已故障切机`,
                                          }),
                                        ],
                                      })
                                    : (0, $.jsxs)(`span`, {
                                        className: `inline-flex items-center gap-1 text-[11px] font-bold text-rose-700 bg-rose-50 px-2 py-0.5 rounded-full border border-rose-200 animate-pulse`,
                                        children: [
                                          (0, $.jsx)(ct, {
                                            className: `w-3.5 h-3.5 text-rose-600`,
                                          }),
                                          (0, $.jsx)(`span`, {
                                            children: `手机异常需切机`,
                                          }),
                                        ],
                                      }),
                            }),
                            (0, $.jsx)(`td`, {
                              className: `py-3 px-4 text-center whitespace-nowrap`,
                              children: (0, $.jsxs)(`div`, {
                                className: `inline-flex items-center gap-1.5`,
                                children: [
                                  (0, $.jsxs)(`button`, {
                                    type: `button`,
                                    onClick: () => f(t),
                                    className: `h-7 px-2.5 rounded-md bg-[#0066FF] hover:bg-blue-700 text-white font-bold text-[11px] inline-flex items-center gap-1 shadow-2xs transition-all cursor-pointer`,
                                    title: `手机出现风控/故障时，无感切换关注至备用机`,
                                    children: [
                                      (0, $.jsx)(k, { className: `w-3 h-3` }),
                                      (0, $.jsx)(`span`, {
                                        children: `切换手机`,
                                      }),
                                    ],
                                  }),
                                  (0, $.jsxs)(`button`, {
                                    type: `button`,
                                    onClick: () => {
                                      e &&
                                        e(
                                          `已触发【${t.weiboName}】实体手机关注 Feed 立即抓取！`,
                                          `success`,
                                        );
                                    },
                                    className: `h-7 px-2 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-[11px] inline-flex items-center gap-1 transition-all cursor-pointer`,
                                    title: `立即触发手机关注 Feed 刷新抓取`,
                                    children: [
                                      (0, $.jsx)(pt, {
                                        className: `w-3 h-3 text-amber-600`,
                                      }),
                                      (0, $.jsx)(`span`, { children: `抓取` }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          ],
                        },
                        t.id,
                      ),
                    ),
                  }),
                ],
              }),
            }),
          }),
        t === `phones` &&
          (0, $.jsxs)(`div`, {
            className: `space-y-3`,
            children: [
              (0, $.jsxs)(`div`, {
                className: `p-3 bg-blue-50/80 border border-blue-200/90 rounded-xl text-xs text-blue-900 flex items-center justify-between gap-3`,
                children: [
                  (0, $.jsxs)(`div`, {
                    className: `flex items-center gap-2`,
                    children: [
                      (0, $.jsx)(be, {
                        className: `w-4 h-4 text-[#0066FF] shrink-0`,
                      }),
                      (0, $.jsxs)(`span`, {
                        children: [
                          (0, $.jsx)(`strong`, {
                            children: `实体手机监控集群 (ADB Automation Farm)`,
                          }),
                          `：系统实时通过 ADB 指令监测手机硬件连通性、微博 APP 进程与关注动作风控。当设备触及风控规则，可直接进行`,
                          (0, $.jsx)(`strong`, { children: `一键整机热切换` }),
                          `。`,
                        ],
                      }),
                    ],
                  }),
                  (0, $.jsx)(`span`, {
                    className: `text-[11px] font-mono font-bold text-blue-700 bg-white px-2 py-0.5 rounded border border-blue-200`,
                    children: `在线机房: 18 / 20 台`,
                  }),
                ],
              }),
              (0, $.jsx)(`div`, {
                className: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5`,
                children: a.map((t) => {
                  let n = Math.round(
                    (t.followedCount / t.maxFollowLimit) * 100,
                  );
                  return (0, $.jsxs)(
                    `div`,
                    {
                      className: `bg-white rounded-xl border p-4 space-y-3 transition-all shadow-xs relative ${t.status === `abnormal` ? `border-rose-300 ring-2 ring-rose-500/20 bg-rose-50/20` : t.status === `offline` ? `border-slate-300 bg-slate-50/50 opacity-75` : t.isStandby ? `border-emerald-300 bg-emerald-50/20` : `border-slate-200 hover:border-blue-300`}`,
                      children: [
                        (0, $.jsxs)(`div`, {
                          className: `flex items-center justify-between pb-2 border-b border-slate-100`,
                          children: [
                            (0, $.jsxs)(`div`, {
                              className: `flex items-center gap-2`,
                              children: [
                                (0, $.jsx)(`div`, {
                                  className: `w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs ${t.status === `normal` ? `bg-blue-100 text-[#0066FF]` : t.status === `abnormal` ? `bg-rose-100 text-rose-700` : t.isStandby ? `bg-emerald-100 text-emerald-800` : `bg-slate-200 text-slate-700`}`,
                                  children: (0, $.jsx)(Ye, {
                                    className: `w-4 h-4`,
                                  }),
                                }),
                                (0, $.jsxs)(`div`, {
                                  children: [
                                    (0, $.jsxs)(`div`, {
                                      className: `flex items-center gap-1.5`,
                                      children: [
                                        (0, $.jsx)(`span`, {
                                          className: `font-mono font-extrabold text-slate-900 text-[13px]`,
                                          children: t.id,
                                        }),
                                        t.isStandby &&
                                          (0, $.jsx)(`span`, {
                                            className: `text-[10px] font-bold px-1.5 py-0.2 rounded bg-emerald-100 text-emerald-800`,
                                            children: `热备闲置机`,
                                          }),
                                      ],
                                    }),
                                    (0, $.jsx)(`span`, {
                                      className: `text-[11px] text-slate-500 font-medium`,
                                      children: t.model,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, $.jsx)(`div`, {
                              children:
                                t.status === `normal`
                                  ? (0, $.jsxs)(`span`, {
                                      className: `inline-flex items-center gap-1 text-[10.5px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200`,
                                      children: [
                                        (0, $.jsx)(B, {
                                          className: `w-3 h-3 text-emerald-600`,
                                        }),
                                        (0, $.jsx)(`span`, {
                                          children: `正常在线`,
                                        }),
                                      ],
                                    })
                                  : t.status === `abnormal`
                                    ? (0, $.jsxs)(`span`, {
                                        className: `inline-flex items-center gap-1 text-[10.5px] font-bold text-rose-700 bg-rose-50 px-2 py-0.5 rounded-full border border-rose-200 animate-pulse`,
                                        children: [
                                          (0, $.jsx)(ct, {
                                            className: `w-3.5 h-3.5 text-rose-600`,
                                          }),
                                          (0, $.jsx)(`span`, {
                                            children: `风控受限`,
                                          }),
                                        ],
                                      })
                                    : t.status === `offline`
                                      ? (0, $.jsx)(`span`, {
                                          className: `inline-flex items-center gap-1 text-[10.5px] font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-full border border-slate-300`,
                                          children: (0, $.jsx)(`span`, {
                                            children: `离线卡死`,
                                          }),
                                        })
                                      : (0, $.jsx)(`span`, {
                                          className: `inline-flex items-center gap-1 text-[10.5px] font-bold text-emerald-800 bg-emerald-100/80 px-2 py-0.5 rounded-full border border-emerald-300`,
                                          children: (0, $.jsx)(`span`, {
                                            children: `待命就绪`,
                                          }),
                                        }),
                            }),
                          ],
                        }),
                        (0, $.jsxs)(`div`, {
                          className: `space-y-2 text-[11.5px]`,
                          children: [
                            (0, $.jsxs)(`div`, {
                              className: `flex items-center justify-between text-slate-600`,
                              children: [
                                (0, $.jsx)(`span`, {
                                  className: `text-slate-500`,
                                  children: `登录微博账号:`,
                                }),
                                (0, $.jsx)(`span`, {
                                  className: `font-mono font-bold text-slate-800`,
                                  children: t.weiboAccount,
                                }),
                              ],
                            }),
                            (0, $.jsxs)(`div`, {
                              className: `flex items-center justify-between text-slate-600`,
                              children: [
                                (0, $.jsx)(`span`, {
                                  className: `text-slate-500`,
                                  children: `ADB 通信 IP:`,
                                }),
                                (0, $.jsx)(`span`, {
                                  className: `font-mono text-slate-700 bg-slate-100 px-1.5 py-0.2 rounded`,
                                  children: t.adbIp,
                                }),
                              ],
                            }),
                            (0, $.jsxs)(`div`, {
                              className: `space-y-1 pt-1`,
                              children: [
                                (0, $.jsxs)(`div`, {
                                  className: `flex items-center justify-between text-[11px]`,
                                  children: [
                                    (0, $.jsxs)(`span`, {
                                      className: `font-semibold text-slate-700`,
                                      children: [
                                        `当前关注负载 (`,
                                        t.followedCount,
                                        ` / `,
                                        t.maxFollowLimit,
                                        `)`,
                                      ],
                                    }),
                                    (0, $.jsxs)(`span`, {
                                      className: `font-mono font-bold text-slate-900`,
                                      children: [n, `%`],
                                    }),
                                  ],
                                }),
                                (0, $.jsx)(`div`, {
                                  className: `w-full h-2 rounded-full bg-slate-100 overflow-hidden`,
                                  children: (0, $.jsx)(`div`, {
                                    className: `h-full transition-all rounded-full ${n >= 90 ? `bg-amber-500` : t.status === `abnormal` ? `bg-rose-500` : `bg-[#0066FF]`}`,
                                    style: { width: `${n}%` },
                                  }),
                                }),
                              ],
                            }),
                            t.issueType &&
                              (0, $.jsxs)(`div`, {
                                className: `p-2 bg-rose-50 border border-rose-200 rounded-lg text-[11px] text-rose-800 leading-snug flex items-start gap-1.5`,
                                children: [
                                  (0, $.jsx)(ct, {
                                    className: `w-3.5 h-3.5 text-rose-600 shrink-0 mt-0.5`,
                                  }),
                                  (0, $.jsx)(`span`, { children: t.issueType }),
                                ],
                              }),
                          ],
                        }),
                        (0, $.jsxs)(`div`, {
                          className: `pt-2 border-t border-slate-100 flex items-center justify-between gap-2`,
                          children: [
                            (0, $.jsxs)(`span`, {
                              className: `text-[10px] text-slate-400 font-mono`,
                              children: [`心跳: `, t.lastHeartbeat],
                            }),
                            (0, $.jsxs)(`div`, {
                              className: `flex items-center gap-1.5`,
                              children: [
                                (t.status === `abnormal` ||
                                  t.status === `offline`) &&
                                  (0, $.jsxs)(`button`, {
                                    type: `button`,
                                    onClick: () => m(t),
                                    className: `px-2.5 py-1 rounded bg-rose-600 hover:bg-rose-700 text-white font-bold text-[11px] inline-flex items-center gap-1 shadow-2xs cursor-pointer transition-all`,
                                    children: [
                                      (0, $.jsx)(k, { className: `w-3 h-3` }),
                                      (0, $.jsx)(`span`, {
                                        children: `一键故障切机`,
                                      }),
                                    ],
                                  }),
                                (0, $.jsx)(`button`, {
                                  type: `button`,
                                  onClick: () => {
                                    e &&
                                      e(
                                        `已向手机设备 [${t.id}] 发送 ADB 重启与脚本重连指令！`,
                                        `success`,
                                      );
                                  },
                                  className: `px-2 py-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-[11px] cursor-pointer transition-all`,
                                  children: `重启ADB`,
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    },
                    t.id,
                  );
                }),
              }),
            ],
          }),
        t === `policy` &&
          (0, $.jsxs)(`div`, {
            className: `bg-white rounded-xl border border-slate-200 p-5 space-y-5 shadow-xs max-w-4xl`,
            children: [
              (0, $.jsxs)(`div`, {
                className: `flex items-center gap-2.5 pb-3 border-b border-slate-100`,
                children: [
                  (0, $.jsx)(Ue, { className: `w-5 h-5 text-[#0066FF]` }),
                  (0, $.jsxs)(`div`, {
                    children: [
                      (0, $.jsx)(`h3`, {
                        className: `font-extrabold text-slate-900 text-sm`,
                        children: `实体手机关注抓取与故障无感切机策略`,
                      }),
                      (0, $.jsx)(`p`, {
                        className: `text-[11.5px] text-slate-500`,
                        children: `配置实体手机自动化抓取的参数边界、自动风控离线探测以及热备手机池切换规则`,
                      }),
                    ],
                  }),
                ],
              }),
              (0, $.jsxs)(`div`, {
                className: `space-y-4 text-xs`,
                children: [
                  (0, $.jsxs)(`div`, {
                    className: `grid grid-cols-1 md:grid-cols-2 gap-4 bg-slate-50/80 border border-slate-200/80 p-3.5 rounded-xl`,
                    children: [
                      (0, $.jsxs)(`div`, {
                        className: `space-y-1`,
                        children: [
                          (0, $.jsx)(`label`, {
                            className: `font-bold text-slate-800`,
                            children: `单台实体手机最大关注上限 (账号数)`,
                          }),
                          (0, $.jsx)(`p`, {
                            className: `text-[11px] text-slate-500`,
                            children: `为防止触发微博单个账号关注上限与流控限制，建议设为 100~150 账号/台`,
                          }),
                        ],
                      }),
                      (0, $.jsxs)(`div`, {
                        className: `flex items-center gap-2`,
                        children: [
                          (0, $.jsx)(`input`, {
                            type: `number`,
                            min: 10,
                            max: 500,
                            value: j,
                            onChange: (e) => ee(Number(e.target.value) || 100),
                            className: `h-8.5 w-32 px-3 border border-slate-300 rounded-lg font-mono font-bold text-[#0066FF] bg-white outline-none focus:border-[#0066FF]`,
                          }),
                          (0, $.jsx)(`span`, {
                            className: `font-semibold text-slate-600`,
                            children: `账号 / 台`,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, $.jsxs)(`div`, {
                    className: `grid grid-cols-1 md:grid-cols-2 gap-4 bg-slate-50/80 border border-slate-200/80 p-3.5 rounded-xl`,
                    children: [
                      (0, $.jsxs)(`div`, {
                        className: `space-y-1`,
                        children: [
                          (0, $.jsx)(`label`, {
                            className: `font-bold text-slate-800`,
                            children: `关注 Feed 流轮训刷新频率 (秒)`,
                          }),
                          (0, $.jsx)(`p`, {
                            className: `text-[11px] text-slate-500`,
                            children: `手机自动化脚本刷新关注页最新博文的时间间隔（默认 180 秒/轮）`,
                          }),
                        ],
                      }),
                      (0, $.jsxs)(`div`, {
                        className: `flex items-center gap-2`,
                        children: [
                          (0, $.jsx)(`input`, {
                            type: `number`,
                            min: 30,
                            max: 3600,
                            value: M,
                            onChange: (e) => N(Number(e.target.value) || 180),
                            className: `h-8.5 w-32 px-3 border border-slate-300 rounded-lg font-mono font-bold text-purple-700 bg-white outline-none focus:border-purple-600`,
                          }),
                          (0, $.jsxs)(`span`, {
                            className: `font-semibold text-slate-600`,
                            children: [`秒 (`, Math.round(M / 60), ` 分钟/轮)`],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, $.jsxs)(`div`, {
                    className: `flex items-center justify-between bg-blue-50/60 border border-blue-200/80 p-3.5 rounded-xl`,
                    children: [
                      (0, $.jsxs)(`div`, {
                        className: `space-y-0.5`,
                        children: [
                          (0, $.jsx)(`span`, {
                            className: `font-bold text-slate-800 block`,
                            children: `开启设备风控/离线自动无感热切机`,
                          }),
                          (0, $.jsx)(`p`, {
                            className: `text-[11px] text-slate-500`,
                            children: `当实体手机被微博风控限制关注、或 ADB 心跳断开超过 10 分钟时，系统自动将关注任务无缝转移至备用手机池`,
                          }),
                        ],
                      }),
                      (0, $.jsx)(`input`, {
                        type: `checkbox`,
                        checked: P,
                        onChange: (e) => F(e.target.checked),
                        className: `w-4 h-4 text-[#0066FF] rounded border-slate-300 focus:ring-[#0066FF] cursor-pointer`,
                      }),
                    ],
                  }),
                  (0, $.jsxs)(`div`, {
                    className: `flex items-center justify-between bg-slate-50/80 border border-slate-200/80 p-3.5 rounded-xl`,
                    children: [
                      (0, $.jsxs)(`div`, {
                        className: `space-y-0.5`,
                        children: [
                          (0, $.jsx)(`span`, {
                            className: `font-bold text-slate-800 block`,
                            children: `手机异常与切机事件告警推送`,
                          }),
                          (0, $.jsx)(`p`, {
                            className: `text-[11px] text-slate-500`,
                            children: `手机发生故障切换或热备机不足时，向管理员发送钉钉/邮件实时通知`,
                          }),
                        ],
                      }),
                      (0, $.jsx)(`input`, {
                        type: `checkbox`,
                        checked: I,
                        onChange: (e) => L(e.target.checked),
                        className: `w-4 h-4 text-[#0066FF] rounded border-slate-300 focus:ring-[#0066FF] cursor-pointer`,
                      }),
                    ],
                  }),
                  (0, $.jsx)(`div`, {
                    className: `pt-2 flex justify-end`,
                    children: (0, $.jsx)(`button`, {
                      type: `button`,
                      onClick: () => {
                        e &&
                          e(
                            `已成功保存【关注抓取与实体手机故障切换策略】！`,
                            `success`,
                          );
                      },
                      className: `h-9 px-5 rounded-xl bg-[#0066FF] hover:bg-blue-700 text-white font-bold text-xs shadow-xs transition-all cursor-pointer`,
                      children: `保存策略配置`,
                    }),
                  }),
                ],
              }),
            ],
          }),
        d &&
          (0, $.jsx)(`div`, {
            className: `fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-150`,
            children: (0, $.jsxs)(`div`, {
              className: `bg-white rounded-2xl border border-slate-200 shadow-2xl w-full max-w-md p-5 space-y-4`,
              children: [
                (0, $.jsxs)(`div`, {
                  className: `flex items-center justify-between pb-3 border-b border-slate-100`,
                  children: [
                    (0, $.jsxs)(`h3`, {
                      className: `font-black text-slate-900 text-sm flex items-center gap-2`,
                      children: [
                        (0, $.jsx)(k, { className: `w-4 h-4 text-[#0066FF]` }),
                        (0, $.jsx)(`span`, {
                          children: `故障切换手机 (关注转移)`,
                        }),
                      ],
                    }),
                    (0, $.jsx)(`button`, {
                      type: `button`,
                      onClick: () => f(null),
                      className: `text-slate-400 hover:text-slate-600 text-xs font-bold`,
                      children: `✕`,
                    }),
                  ],
                }),
                (0, $.jsxs)(`div`, {
                  className: `space-y-3 text-xs`,
                  children: [
                    (0, $.jsxs)(`div`, {
                      className: `bg-slate-50 border border-slate-200 rounded-xl p-3 space-y-1`,
                      children: [
                        (0, $.jsxs)(`div`, {
                          className: `flex items-center justify-between`,
                          children: [
                            (0, $.jsx)(`span`, {
                              className: `text-slate-500 font-semibold`,
                              children: `目标微博台账:`,
                            }),
                            (0, $.jsx)(`span`, {
                              className: `font-extrabold text-slate-900`,
                              children: d.weiboName,
                            }),
                          ],
                        }),
                        (0, $.jsxs)(`div`, {
                          className: `flex items-center justify-between`,
                          children: [
                            (0, $.jsx)(`span`, {
                              className: `text-slate-500 font-semibold`,
                              children: `当前绑定手机:`,
                            }),
                            (0, $.jsxs)(`span`, {
                              className: `font-mono text-rose-700 font-bold`,
                              children: [d.phoneId, ` (`, d.phoneModel, `)`],
                            }),
                          ],
                        }),
                      ],
                    }),
                    d.errorMsg &&
                      (0, $.jsxs)(`div`, {
                        className: `p-2.5 bg-rose-50 border border-rose-200 rounded-xl text-rose-800 text-[11px] leading-relaxed`,
                        children: [`⚠️ 异常检测: `, d.errorMsg],
                      }),
                    (0, $.jsxs)(`div`, {
                      className: `space-y-1.5`,
                      children: [
                        (0, $.jsx)(`label`, {
                          className: `font-bold text-slate-800`,
                          children: `选择目标健康/备用手机设备:`,
                        }),
                        (0, $.jsx)(`select`, {
                          value: h,
                          onChange: (e) => g(e.target.value),
                          className: `w-full h-9 px-3 border border-slate-300 rounded-xl font-mono text-xs font-semibold text-slate-800 bg-white focus:border-[#0066FF] outline-none cursor-pointer`,
                          children: a
                            .filter(
                              (e) =>
                                e.status === `normal` || e.status === `standby`,
                            )
                            .map((e) =>
                              (0, $.jsxs)(
                                `option`,
                                {
                                  value: e.id,
                                  children: [
                                    e.id,
                                    ` (`,
                                    e.model,
                                    `) - 当前已关注 `,
                                    e.followedCount,
                                    `/`,
                                    e.maxFollowLimit,
                                    ` `,
                                    e.isStandby ? `[热备空闲]` : ``,
                                  ],
                                },
                                e.id,
                              ),
                            ),
                        }),
                      ],
                    }),
                    (0, $.jsxs)(`p`, {
                      className: `text-[11px] text-slate-500 leading-snug`,
                      children: [
                        `💡 提示: 确认切换后，系统将自动驱动新手机完成对【`,
                        d.weiboName,
                        `】的关注并接管抓取任务。`,
                      ],
                    }),
                  ],
                }),
                (0, $.jsxs)(`div`, {
                  className: `pt-2 flex items-center justify-end gap-2 border-t border-slate-100`,
                  children: [
                    (0, $.jsx)(`button`, {
                      type: `button`,
                      onClick: () => f(null),
                      className: `h-8.5 px-4 rounded-xl border border-slate-300 text-slate-700 font-bold text-xs hover:bg-slate-50 cursor-pointer`,
                      children: `取消`,
                    }),
                    (0, $.jsxs)(`button`, {
                      type: `button`,
                      disabled: _,
                      onClick: () => {
                        d &&
                          (v(!0),
                          setTimeout(() => {
                            let t = a.find((e) => e.id === h),
                              n = t ? t.model : h;
                            (i((e) =>
                              e.map((e) =>
                                e.id === d.id
                                  ? {
                                      ...e,
                                      phoneId: h,
                                      phoneModel: n,
                                      phoneStatus: `normal`,
                                      status: `switched`,
                                      errorMsg: void 0,
                                    }
                                  : e,
                              ),
                            ),
                              o((e) =>
                                e.map((e) =>
                                  e.id === d.phoneId
                                    ? {
                                        ...e,
                                        followedCount: Math.max(
                                          0,
                                          e.followedCount - 1,
                                        ),
                                      }
                                    : e.id === h
                                      ? {
                                          ...e,
                                          followedCount: e.followedCount + 1,
                                        }
                                      : e,
                                ),
                              ),
                              v(!1),
                              e &&
                                e(
                                  `已成功将【${d.weiboName}】的关注抓取迁移至备用手机 [${h} (${n})]`,
                                  `success`,
                                ),
                              f(null));
                          }, 600));
                      },
                      className: `h-8.5 px-4 rounded-xl bg-[#0066FF] hover:bg-blue-700 text-white font-bold text-xs inline-flex items-center gap-1.5 shadow-2xs cursor-pointer disabled:opacity-50`,
                      children: [
                        _
                          ? (0, $.jsx)(Ie, {
                              className: `w-3.5 h-3.5 animate-spin`,
                            })
                          : (0, $.jsx)(k, { className: `w-3.5 h-3.5` }),
                        (0, $.jsx)(`span`, { children: `确认迁移关注` }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        p &&
          (0, $.jsx)(`div`, {
            className: `fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-150`,
            children: (0, $.jsxs)(`div`, {
              className: `bg-white rounded-2xl border border-slate-200 shadow-2xl w-full max-w-md p-5 space-y-4`,
              children: [
                (0, $.jsxs)(`div`, {
                  className: `flex items-center justify-between pb-3 border-b border-slate-100`,
                  children: [
                    (0, $.jsxs)(`h3`, {
                      className: `font-black text-slate-900 text-sm flex items-center gap-2`,
                      children: [
                        (0, $.jsx)(ct, { className: `w-4 h-4 text-rose-600` }),
                        (0, $.jsx)(`span`, {
                          children: `整机故障批量无感切机`,
                        }),
                      ],
                    }),
                    (0, $.jsx)(`button`, {
                      type: `button`,
                      onClick: () => m(null),
                      className: `text-slate-400 hover:text-slate-600 text-xs font-bold`,
                      children: `✕`,
                    }),
                  ],
                }),
                (0, $.jsxs)(`div`, {
                  className: `space-y-3 text-xs`,
                  children: [
                    (0, $.jsxs)(`div`, {
                      className: `bg-rose-50/70 border border-rose-200 rounded-xl p-3 space-y-1 text-rose-900`,
                      children: [
                        (0, $.jsxs)(`div`, {
                          className: `flex items-center justify-between font-bold`,
                          children: [
                            (0, $.jsx)(`span`, { children: `故障故障设备:` }),
                            (0, $.jsxs)(`span`, {
                              className: `font-mono text-rose-700`,
                              children: [p.id, ` (`, p.model, `)`],
                            }),
                          ],
                        }),
                        (0, $.jsxs)(`div`, {
                          className: `flex items-center justify-between`,
                          children: [
                            (0, $.jsx)(`span`, { children: `待迁移账号总数:` }),
                            (0, $.jsxs)(`span`, {
                              className: `font-mono font-black text-rose-700`,
                              children: [p.boundAccountCount, ` 个微博台账`],
                            }),
                          ],
                        }),
                        p.issueType &&
                          (0, $.jsxs)(`p`, {
                            className: `text-[11px] text-rose-700 pt-1 border-t border-rose-200/60 mt-1`,
                            children: [`原因: `, p.issueType],
                          }),
                      ],
                    }),
                    (0, $.jsxs)(`div`, {
                      className: `space-y-1.5`,
                      children: [
                        (0, $.jsx)(`label`, {
                          className: `font-bold text-slate-800`,
                          children: `选择接管热备手机设备:`,
                        }),
                        (0, $.jsx)(`select`, {
                          value: h,
                          onChange: (e) => g(e.target.value),
                          className: `w-full h-9 px-3 border border-slate-300 rounded-xl font-mono text-xs font-semibold text-slate-800 bg-white focus:border-[#0066FF] outline-none cursor-pointer`,
                          children: a
                            .filter(
                              (e) =>
                                e.id !== p.id &&
                                (e.status === `normal` ||
                                  e.status === `standby`),
                            )
                            .map((e) =>
                              (0, $.jsxs)(
                                `option`,
                                {
                                  value: e.id,
                                  children: [
                                    e.id,
                                    ` (`,
                                    e.model,
                                    `) - 已有关注 `,
                                    e.followedCount,
                                    `/`,
                                    e.maxFollowLimit,
                                    ` `,
                                    e.isStandby ? `[热备空闲]` : ``,
                                  ],
                                },
                                e.id,
                              ),
                            ),
                        }),
                      ],
                    }),
                    (0, $.jsxs)(`p`, {
                      className: `text-[11px] text-slate-500 leading-snug`,
                      children: [
                        `💡 确认后将自动驱动目标手机无感接收该手机上的 `,
                        p.boundAccountCount,
                        ` 个关注微博，原设备将被标记为停机排查。`,
                      ],
                    }),
                  ],
                }),
                (0, $.jsxs)(`div`, {
                  className: `pt-2 flex items-center justify-end gap-2 border-t border-slate-100`,
                  children: [
                    (0, $.jsx)(`button`, {
                      type: `button`,
                      onClick: () => m(null),
                      className: `h-8.5 px-4 rounded-xl border border-slate-300 text-slate-700 font-bold text-xs hover:bg-slate-50 cursor-pointer`,
                      children: `取消`,
                    }),
                    (0, $.jsxs)(`button`, {
                      type: `button`,
                      disabled: _,
                      onClick: () => {
                        p &&
                          (v(!0),
                          setTimeout(() => {
                            let t = a.find((e) => e.id === h),
                              n = t ? t.model : h,
                              r = p.boundAccountCount;
                            (i((e) =>
                              e.map((e) =>
                                e.phoneId === p.id
                                  ? {
                                      ...e,
                                      phoneId: h,
                                      phoneModel: n,
                                      phoneStatus: `normal`,
                                      status: `switched`,
                                      errorMsg: void 0,
                                    }
                                  : e,
                              ),
                            ),
                              o((e) =>
                                e.map((e) =>
                                  e.id === p.id
                                    ? {
                                        ...e,
                                        status: `offline`,
                                        issueType: `已一键无感迁移至备用手机`,
                                        followedCount: 0,
                                        boundAccountCount: 0,
                                      }
                                    : e.id === h
                                      ? {
                                          ...e,
                                          followedCount: e.followedCount + r,
                                          boundAccountCount:
                                            e.boundAccountCount + r,
                                          status: `normal`,
                                        }
                                      : e,
                                ),
                              ),
                              v(!1),
                              e &&
                                e(
                                  `已成功将异常设备 [${p.id}] 上的 ${r} 个关注台账批量转移至 [${h} (${n})]`,
                                  `success`,
                                ),
                              m(null));
                          }, 700));
                      },
                      className: `h-8.5 px-4 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs inline-flex items-center gap-1.5 shadow-2xs cursor-pointer disabled:opacity-50`,
                      children: [
                        _
                          ? (0, $.jsx)(Ie, {
                              className: `w-3.5 h-3.5 animate-spin`,
                            })
                          : (0, $.jsx)(k, { className: `w-3.5 h-3.5` }),
                        (0, $.jsx)(`span`, { children: `一键批量接管转移` }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        y &&
          (0, $.jsx)(`div`, {
            className: `fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-150`,
            children: (0, $.jsxs)(`form`, {
              onSubmit: (t) => {
                if ((t.preventDefault(), !x || !w)) return;
                let n = a.find((e) => e.id === O),
                  r = n ? n.model : O,
                  s = {
                    id: `ACC-WB-${Date.now().toString().slice(-4)}`,
                    weiboName: x.startsWith(`@`) ? x : `@${x}`,
                    uid: w,
                    weiboUrl: `https://weibo.com/u/${w}`,
                    category: E,
                    phoneId: O,
                    phoneModel: r,
                    followIndex: (n?.followedCount || 0) + 1,
                    followLimit: j,
                    phoneStatus: `normal`,
                    scrapeFreq: `${Math.round(M / 60)}分钟/轮`,
                    latestPublishTime: `2026-09-29 00:25:00`,
                    lastScrapeTime: `刚刚`,
                    storageToday: 0,
                    storageTotal: 0,
                    status: `normal`,
                  };
                (i((e) => [s, ...e]),
                  o((e) =>
                    e.map((e) =>
                      e.id === O
                        ? {
                            ...e,
                            followedCount: e.followedCount + 1,
                            boundAccountCount: e.boundAccountCount + 1,
                          }
                        : e,
                    ),
                  ),
                  b(!1),
                  S(``),
                  T(``),
                  e &&
                    e(
                      `已成功将【${s.weiboName}】分配至手机 [${O}] 并开启关注抓取！`,
                      `success`,
                    ));
              },
              className: `bg-white rounded-2xl border border-slate-200 shadow-2xl w-full max-w-md p-5 space-y-4`,
              children: [
                (0, $.jsxs)(`div`, {
                  className: `flex items-center justify-between pb-3 border-b border-slate-100`,
                  children: [
                    (0, $.jsxs)(`h3`, {
                      className: `font-black text-slate-900 text-sm flex items-center gap-2`,
                      children: [
                        (0, $.jsx)(Pe, { className: `w-4 h-4 text-[#0066FF]` }),
                        (0, $.jsx)(`span`, { children: `新增关注抓取台账` }),
                      ],
                    }),
                    (0, $.jsx)(`button`, {
                      type: `button`,
                      onClick: () => b(!1),
                      className: `text-slate-400 hover:text-slate-600 text-xs font-bold`,
                      children: `✕`,
                    }),
                  ],
                }),
                (0, $.jsxs)(`div`, {
                  className: `space-y-3 text-xs`,
                  children: [
                    (0, $.jsxs)(`div`, {
                      className: `space-y-1`,
                      children: [
                        (0, $.jsx)(`label`, {
                          className: `font-bold text-slate-800`,
                          children: `微博账号名称 / 昵称 *`,
                        }),
                        (0, $.jsx)(`input`, {
                          type: `text`,
                          required: !0,
                          placeholder: `例: @财联社APP 或 央视新闻`,
                          value: x,
                          onChange: (e) => S(e.target.value),
                          className: `w-full h-8.5 px-3 border border-slate-300 rounded-lg text-xs font-semibold text-slate-800 outline-none focus:border-[#0066FF]`,
                        }),
                      ],
                    }),
                    (0, $.jsxs)(`div`, {
                      className: `space-y-1`,
                      children: [
                        (0, $.jsx)(`label`, {
                          className: `font-bold text-slate-800`,
                          children: `微博 UID *`,
                        }),
                        (0, $.jsx)(`input`, {
                          type: `text`,
                          required: !0,
                          placeholder: `例: 2656274875`,
                          value: w,
                          onChange: (e) => T(e.target.value),
                          className: `w-full h-8.5 px-3 border border-slate-300 rounded-lg text-xs font-mono text-slate-800 outline-none focus:border-[#0066FF]`,
                        }),
                      ],
                    }),
                    (0, $.jsxs)(`div`, {
                      className: `space-y-1`,
                      children: [
                        (0, $.jsx)(`label`, {
                          className: `font-bold text-slate-800`,
                          children: `所属分类标签`,
                        }),
                        (0, $.jsxs)(`select`, {
                          value: E,
                          onChange: (e) => D(e.target.value),
                          className: `w-full h-8.5 px-3 border border-slate-300 rounded-lg text-xs font-semibold text-slate-800 outline-none focus:border-[#0066FF]`,
                          children: [
                            (0, $.jsx)(`option`, {
                              value: `时政要闻`,
                              children: `时政要闻`,
                            }),
                            (0, $.jsx)(`option`, {
                              value: `财经快讯`,
                              children: `财经快讯`,
                            }),
                            (0, $.jsx)(`option`, {
                              value: `科技前沿`,
                              children: `科技前沿`,
                            }),
                            (0, $.jsx)(`option`, {
                              value: `深度宏观`,
                              children: `深度宏观`,
                            }),
                            (0, $.jsx)(`option`, {
                              value: `股市舆情`,
                              children: `股市舆情`,
                            }),
                            (0, $.jsx)(`option`, {
                              value: `社会热点`,
                              children: `社会热点`,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, $.jsxs)(`div`, {
                      className: `space-y-1`,
                      children: [
                        (0, $.jsx)(`label`, {
                          className: `font-bold text-slate-800`,
                          children: `分配关注的实体手机设备 *`,
                        }),
                        (0, $.jsx)(`select`, {
                          value: O,
                          onChange: (e) => A(e.target.value),
                          className: `w-full h-8.5 px-3 border border-slate-300 rounded-lg font-mono text-xs font-semibold text-slate-800 outline-none focus:border-[#0066FF]`,
                          children: a.map((e) =>
                            (0, $.jsxs)(
                              `option`,
                              {
                                value: e.id,
                                children: [
                                  e.id,
                                  ` (`,
                                  e.model,
                                  `) - 关注负载 `,
                                  e.followedCount,
                                  `/`,
                                  e.maxFollowLimit,
                                ],
                              },
                              e.id,
                            ),
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, $.jsxs)(`div`, {
                  className: `pt-2 flex items-center justify-end gap-2 border-t border-slate-100`,
                  children: [
                    (0, $.jsx)(`button`, {
                      type: `button`,
                      onClick: () => b(!1),
                      className: `h-8.5 px-4 rounded-xl border border-slate-300 text-slate-700 font-bold text-xs hover:bg-slate-50 cursor-pointer`,
                      children: `取消`,
                    }),
                    (0, $.jsxs)(`button`, {
                      type: `submit`,
                      className: `h-8.5 px-4 rounded-xl bg-[#0066FF] hover:bg-blue-700 text-white font-bold text-xs inline-flex items-center gap-1 shadow-2xs cursor-pointer`,
                      children: [
                        (0, $.jsx)(Pe, { className: `w-3.5 h-3.5` }),
                        (0, $.jsx)(`span`, { children: `立即创建并开启关注` }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
      ],
    });
  },
  Fn = ({
    keywords: e,
    pushes: t,
    accountInfo: n,
    onUpdateKeywords: r,
    onUpdatePushes: i,
    onUpdateAccountInfo: a,
    initialSubTab: o = `keywords`,
    onSubTabChange: s,
    onBackToServiceList: c,
    onAddToast: l,
  }) => {
    let [u, d] = (0, C.useState)(o),
      [f, p] = (0, C.useState)(null),
      [m, h] = (0, C.useState)(`pushes`),
      [g, _] = (0, C.useState)(``),
      [v, y] = (0, C.useState)(`all`),
      [b, x] = (0, C.useState)(`newest`),
      [S, w] = (0, C.useState)(`all`),
      [T, E] = (0, C.useState)(null),
      [D, k] = (0, C.useState)(!1),
      [A, j] = (0, C.useState)(`苏熙良`),
      [M, N] = (0, C.useState)(`规则变更`),
      [F, I] = (0, C.useState)(``),
      [L, R] = (0, C.useState)(``);
    C.useEffect(() => {
      o && o !== u && d(o);
    }, [o]);
    let te = (e) => {
        (d(e), s && s(e));
      },
      [z, ne] = (0, C.useState)(``),
      [V, re] = (0, C.useState)(`all`),
      [ie, ae] = (0, C.useState)(`all`),
      [oe, se] = (0, C.useState)(`todayCost`),
      [U, W] = (0, C.useState)(!1),
      [q, J] = (0, C.useState)(null),
      [fe, pe] = (0, C.useState)(!1),
      [me, he] = (0, C.useState)(5e3),
      [ge, _e] = (0, C.useState)(``),
      [ye, be] = (0, C.useState)([`douyin`, `toutiao`]),
      [xe, Se] = (0, C.useState)(`exact`),
      [Ce, we] = (0, C.useState)(5e3),
      [Te, Ee] = (0, C.useState)(0.015),
      [X, De] = (0, C.useState)([]),
      [Oe, ke] = (0, C.useState)(``),
      [Ae, je] = (0, C.useState)(`苏熙良`),
      [Me, Ne] = (0, C.useState)(``),
      Ie = e.length,
      Le = e.filter((e) => e.status === `active`).length,
      Re = e.reduce((e, t) => e + (t.todayTotalPushes || 0), 0),
      ze = e.reduce((e, t) => e + (t.todayCost || 0), 0);
    e.reduce((e, t) => e + (t.totalCost || 0), 0);
    let Z = (0, C.useMemo)(
        () => (f && e.find((e) => e.id === f)) || null,
        [e, f],
      ),
      Ve = (0, C.useMemo)(
        () =>
          Z
            ? t
                .filter((e) => {
                  if (e.keyword !== Z.keyword) return !1;
                  if (g) {
                    let t = g.toLowerCase(),
                      n = e.title.toLowerCase().includes(t),
                      r = e.contentSnippet.toLowerCase().includes(t),
                      i = e.author.toLowerCase().includes(t);
                    if (!n && !r && !i) return !1;
                  }
                  return v === `all` || e.platform === v;
                })
                .sort((e, t) =>
                  b === `likes`
                    ? Number(t.likes) - Number(e.likes)
                    : b === `cost`
                      ? t.charge - e.charge
                      : new Date(t.receivedTime).getTime() -
                        new Date(e.receivedTime).getTime(),
                )
            : [],
        [t, Z, g, v, b],
      ),
      Ue = (0, C.useMemo)(
        () =>
          !Z || !Z.logs
            ? []
            : Z.logs.filter((e) => S === `all` || e.actionType === S),
        [Z, S],
      ),
      We = (0, C.useMemo)(
        () =>
          e
            .filter((e) => {
              if (z) {
                let t = z.toLowerCase(),
                  n = e.keyword.toLowerCase().includes(t),
                  r = e.id.toLowerCase().includes(t),
                  i = e.creator.toLowerCase().includes(t),
                  a = (e.remark || ``).toLowerCase().includes(t);
                if (!n && !r && !i && !a) return !1;
              }
              return !(
                (V !== `all` && !e.scope.includes(V)) ||
                (ie !== `all` && e.status !== ie)
              );
            })
            .sort((e, t) =>
              oe === `todayCost`
                ? (t.todayCost || 0) - (e.todayCost || 0)
                : oe === `todayPushes`
                  ? (t.todayTotalPushes || 0) - (e.todayTotalPushes || 0)
                  : (t.totalPushes || 0) - (e.totalPushes || 0),
            ),
        [e, z, V, ie, oe],
      ),
      Ge = () => {
        (J(null),
          _e(``),
          be([`douyin`, `toutiao`]),
          Se(`exact`),
          we(5e3),
          Ee(0.015),
          De([]),
          je(`苏熙良`),
          Ne(``),
          W(!0));
      },
      Ke = (e, t) => {
        (t && t.stopPropagation(),
          J(e),
          _e(e.keyword),
          be([...e.scope]),
          Se(e.matchMode),
          we(e.dailyLimit),
          Ee(e.billingUnitPrice),
          De(e.excludeKeywords || []),
          je(e.creator),
          Ne(e.remark || ``),
          W(!0));
      },
      Je = (e, t = `pushes`) => {
        (p(e.id), h(t));
      },
      Ye = (t) => {
        t.preventDefault();
        let n = ge.trim();
        if (!n) {
          l(`请输入要由火山官方监听的关键词`, `error`);
          return;
        }
        if (ye.length === 0) {
          l(`请至少勾选一个官方数据传送渠道（抖音或今日头条）`, `error`);
          return;
        }
        let i = new Date().toISOString().replace(`T`, ` `).substring(0, 19);
        if (q) {
          let e = {
            id: `LOG-${q.id.replace(`VOKW-`, ``)}-${Date.now().toString().slice(-4)}`,
            timestamp: i,
            operator: Ae,
            actionType: `update`,
            actionTitle: `修改台账监控策略与配额参数`,
            details: `更新订阅渠道: [${ye.join(`, `)}]，匹配模式: ${xe}，单日熔断上限: ${Ce}条，排除词: [${X.join(`, `) || `无`}]。`,
            tag: `规则变更`,
            payloadSnippet: JSON.stringify({
              keyword: n,
              channels: ye,
              matchMode: xe,
              dailyLimit: Ce,
              excludeKeywords: X,
              operator: Ae,
            }),
          };
          (r((t) =>
            t.map((t) =>
              t.id === q.id
                ? {
                    ...t,
                    keyword: n,
                    scope: ye,
                    matchMode: xe,
                    dailyLimit: Ce,
                    billingUnitPrice: Te,
                    unitPriceLabel: `${Te}元/条 (${Te * 1e3}元/千条)`,
                    excludeKeywords: X,
                    creator: Ae,
                    remark: Me,
                    logs: [e, ...(t.logs || [])],
                  }
                : t,
            ),
          ),
            l(
              `已同步修改关键词订阅台账【${n}】的监听策略与熔断配额，已记录操作审计日志！`,
              `success`,
            ));
        } else {
          let t = `VOKW-${800 + e.length + 1}`,
            a = {
              id: `LOG-${800 + e.length + 1}-01`,
              timestamp: i,
              operator: Ae,
              actionType: `create`,
              actionTitle: `创建关键词订阅台账并下发火山官方监听`,
              details: `录入监控词【${n}】，订阅平台: [${ye.join(`, `)}]；匹配模式: ${xe}；单条计费单价: ${Te}元/条；每日推送上限: ${Ce.toLocaleString()}条。已下发火山引擎 DataBridge 网关双向校验。`,
              tag: `台账新建`,
              payloadSnippet: JSON.stringify({
                event: `ledger.create`,
                ledgerId: t,
                keyword: n,
                channels: ye,
                dailyLimit: Ce,
                billingUnitPrice: Te,
                creator: Ae,
                timestamp: i,
              }),
            },
            o = {
              id: `LOG-${800 + e.length + 1}-02`,
              timestamp: i,
              operator: `火山官方网关`,
              actionType: `sync`,
              actionTitle: `火山 DataBridge 官方网关双向握手校验成功`,
              details: `官方推流通道绑定就绪，分配专线通道 ID: ch_volc_${Math.floor(Math.random() * 89999 + 1e4)}_dytt，回调地址校验通过 (HTTP 200 OK)。`,
              tag: `通道就绪`,
            },
            s = {
              id: t,
              keyword: n,
              scope: ye,
              matchMode: xe,
              status: `active`,
              billingUnitPrice: Te,
              unitPriceLabel: `${Te}元/条 (${Te * 1e3}元/千条)`,
              todayDouyinPushes: 0,
              todayToutiaoPushes: 0,
              todayTotalPushes: 0,
              totalPushes: 0,
              todayCost: 0,
              totalCost: 0,
              dailyLimit: Ce,
              excludeKeywords: X,
              webhookUrl: `https://crawler-gateway.internal/api/v1/volcengine/webhook/stream`,
              createTime: i.substring(0, 16),
              lastPushTime: `待官方首次传送`,
              creator: Ae,
              remark: Me || `通过系统录入下发至火山官方订阅通道`,
              logs: [o, a],
            };
          (r((e) => [s, ...e]),
            l(
              `已向火山引擎官方API登记关键词订阅台账【${n}】，官方已开启抖音与头条数据监听并按量计费！`,
              `success`,
            ));
        }
        W(!1);
      },
      Xe = (e, t) => {
        (t && t.stopPropagation(),
          confirm(
            `【停止扣费警告】\n\n确定要向火山引擎官方注销关键词订阅台账【${e.keyword}】(${e.id}) 吗？\n\n注销后，火山官方将立即停止向本系统传送抖音和今日头条数据，不再产生后续按量扣费。`,
          ) &&
            (r((t) => t.filter((t) => t.id !== e.id)),
            f === e.id && p(null),
            l(
              `已成功向火山官方API注销【${e.keyword}】，官方通道已停止数据推送与计费！`,
              `info`,
            )));
      },
      Ze = (e, t) => {
        t && t.stopPropagation();
        let n = e.status === `active` ? `paused` : `active`,
          i = new Date().toISOString().replace(`T`, ` `).substring(0, 19),
          a = {
            id: `LOG-${e.id.replace(`VOKW-`, ``)}-${Date.now().toString().slice(-4)}`,
            timestamp: i,
            operator: `苏熙良`,
            actionType: n === `active` ? `resume` : `pause`,
            actionTitle:
              n === `active`
                ? `恢复火山官方数据推流与扣费`
                : `主动暂停火山官方数据推送 (停止扣费)`,
            details:
              n === `active`
                ? `向火山引擎 DataBridge 下发 resume 监听指令，恢复该关键词在抖音短视频与今日头条全量通道的主动传送。`
                : `下发 pause 暂停指令至火山官方网关，即刻停止该词推流与余额扣减，保留历史台账数据。`,
            tag: `状态切换`,
          };
        (r((t) =>
          t.map((t) =>
            t.id === e.id
              ? { ...t, status: n, logs: [a, ...(t.logs || [])] }
              : t,
          ),
        ),
          l(
            n === `active`
              ? `已恢复火山官方对【${e.keyword}】的数据监听传送（已记入台账操作日志）`
              : `已向火山官方下发【${e.keyword}】暂停监听指令，期间不产生数据扣费（已记入台账操作日志）`,
            n === `active` ? `success` : `warning`,
          ));
      },
      Qe = (t, n) => {
        n && n.stopPropagation();
        let o = t || Z || e.find((e) => e.status === `active`) || e[0];
        if (!o) return;
        let s =
            o.scope.includes(`douyin`) &&
            (!o.scope.includes(`toutiao`) || Math.random() > 0.4)
              ? `douyin`
              : `toutiao`,
          c = o.billingUnitPrice,
          u = new Date(),
          d = `${u.getFullYear()}-${String(u.getMonth() + 1).padStart(2, `0`)}-${String(u.getDate()).padStart(2, `0`)} ${String(u.getHours()).padStart(2, `0`)}:${String(u.getMinutes()).padStart(2, `0`)}:${String(u.getSeconds()).padStart(2, `0`)}`,
          f = {
            id: `VPUSH-${Date.now().toString().slice(-6)}`,
            volcEventId: `evt_${s === `douyin` ? `dy` : `tt`}_${Date.now()}`,
            platform: s,
            keyword: o.keyword,
            title:
              s === `douyin`
                ? `【官方实时直连】围绕“${o.keyword}”的最新热门视频创作已推送入库`
                : `【官方头条快讯】关于“${o.keyword}”的权威报道与微头条解读已送达`,
            contentSnippet: `火山引擎官方 DataBridge 数据直连网关实时分发：在${s === `douyin` ? `抖音` : `今日头条`}平台检索并捕获与【${o.keyword}】高度匹配的原创内容，已通过官方数字签名校验并完成系统自动对账入库。`,
            author: s === `douyin` ? `火山创作者_官方源` : `头条热点直报`,
            authorAvatar: s === `douyin` ? `抖` : `头`,
            publishTime: d,
            receivedTime: d,
            latencyMs: Math.floor(Math.random() * 50) + 35,
            charge: c,
            url:
              s === `douyin`
                ? `https://www.douyin.com/`
                : `https://www.toutiao.com/`,
            contentType: s === `douyin` ? `短视频` : `头条资讯`,
            likes: Math.floor(Math.random() * 5e3) + 800,
            comments: Math.floor(Math.random() * 300) + 40,
            shares: Math.floor(Math.random() * 150) + 10,
            reads: Math.floor(Math.random() * 5e4) + 1e4,
            verified: !0,
          };
        i((e) => [f, ...e]);
        let p = {
          id: `LOG-${o.id.replace(`VOKW-`, ``)}-${Date.now().toString().slice(-4)}`,
          timestamp: d,
          operator: `火山官方网关`,
          actionType: `push_ingest`,
          actionTitle: `接收官方实时推流并按量扣费 ¥${c.toFixed(3)}`,
          details: `[${s === `douyin` ? `抖音短视频` : `今日头条`}] 命中关键词【${o.keyword}】，作者【${f.author}】，时延 ${f.latencyMs}ms，验签通过，系统自动扣费。`,
          tag: `推流扣费`,
          payloadSnippet: JSON.stringify({
            eventId: f.volcEventId,
            platform: f.platform,
            keyword: o.keyword,
            title: f.title,
            charge: c,
            latencyMs: f.latencyMs,
          }),
        };
        (r((e) =>
          e.map((e) => {
            if (e.id === o.id) {
              let t =
                  s === `douyin`
                    ? e.todayDouyinPushes + 1
                    : e.todayDouyinPushes,
                n =
                  s === `toutiao`
                    ? e.todayToutiaoPushes + 1
                    : e.todayToutiaoPushes;
              return {
                ...e,
                todayDouyinPushes: t,
                todayToutiaoPushes: n,
                todayTotalPushes: e.todayTotalPushes + 1,
                totalPushes: e.totalPushes + 1,
                todayCost: Number((e.todayCost + c).toFixed(3)),
                totalCost: Number((e.totalCost + c).toFixed(3)),
                lastPushTime: d,
                logs: [p, ...(e.logs || [])],
              };
            }
            return e;
          }),
        ),
          a((e) => ({
            ...e,
            balance: Number((e.balance - c).toFixed(2)),
            todayCost: Number((e.todayCost + c).toFixed(2)),
            deliveredTodayTotal: e.deliveredTodayTotal + 1,
          })),
          l(
            `收到火山官方推流【${o.keyword}】(${s === `douyin` ? `抖音` : `今日头条`})，扣费 ￥${c.toFixed(3)}，已更新台账历史数据与操作日志！`,
            `success`,
          ));
      };
    return (0, $.jsxs)(`div`, {
      className: `max-w-[1600px] mx-auto flex flex-col gap-5`,
      children: [
        (0, $.jsxs)(`div`, {
          className: `flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-4.5 rounded-2xl border border-slate-200/80 shadow-xs`,
          children: [
            (0, $.jsxs)(`div`, {
              className: `flex items-center gap-3`,
              children: [
                c &&
                  (0, $.jsxs)(`button`, {
                    type: `button`,
                    onClick: c,
                    className: `flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-50 text-xs font-bold transition-all cursor-pointer shadow-2xs shrink-0`,
                    children: [
                      (0, $.jsx)(O, { className: `w-3.5 h-3.5` }),
                      (0, $.jsx)(`span`, { children: `返回服务矩阵` }),
                    ],
                  }),
                (0, $.jsx)(`div`, {
                  className: `w-10 h-10 rounded-xl bg-gradient-to-br from-rose-500 to-red-600 flex items-center justify-center text-white font-bold shadow-sm shrink-0`,
                  children: (0, $.jsx)(de, {
                    className: `w-5 h-5 fill-current`,
                  }),
                }),
                (0, $.jsxs)(`div`, {
                  children: [
                    (0, $.jsxs)(`div`, {
                      className: `flex items-center gap-2 flex-wrap`,
                      children: [
                        (0, $.jsx)(`h1`, {
                          className: `text-base font-black text-slate-900 leading-tight`,
                          children: `火山官方数据直推 · 关键词订阅台账`,
                        }),
                        (0, $.jsxs)(`span`, {
                          className: `px-2 py-0.5 rounded-md text-[10.5px] font-bold bg-rose-50 text-rose-700 border border-rose-200 flex items-center gap-1`,
                          children: [
                            (0, $.jsx)(B, {
                              className: `w-3 h-3 text-rose-600`,
                            }),
                            (0, $.jsx)(`span`, {
                              children: `字节跳动 · 火山官方直连网关`,
                            }),
                          ],
                        }),
                        (0, $.jsx)(`span`, {
                          className: `px-2 py-0.5 rounded-md text-[10.5px] font-mono font-bold bg-amber-50 text-amber-800 border border-amber-200`,
                          children: `按数据量计费 · 台账全生命周期维护`,
                        }),
                      ],
                    }),
                    (0, $.jsx)(`p`, {
                      className: `text-[11px] text-slate-500 mt-0.5`,
                      children: `以关键词为核心管理订阅台账，记录操作变更审计日志，展示各台账历史推送数据与扣费明细`,
                    }),
                  ],
                }),
              ],
            }),
            (0, $.jsxs)(`div`, {
              className: `flex items-center gap-2.5 flex-wrap shrink-0`,
              children: [
                (0, $.jsxs)(`button`, {
                  type: `button`,
                  onClick: (e) => Qe(void 0, e),
                  className: `flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-rose-200 bg-rose-50 hover:bg-rose-100 text-rose-700 text-xs font-bold transition-all cursor-pointer shadow-2xs`,
                  title: `模拟火山官方下发一条推送并触发按量扣费`,
                  children: [
                    (0, $.jsx)(pt, {
                      className: `w-3.5 h-3.5 text-rose-600 fill-rose-600`,
                    }),
                    (0, $.jsx)(`span`, { children: `模拟官方推流 (+1条扣费)` }),
                  ],
                }),
                (0, $.jsxs)(`button`, {
                  type: `button`,
                  onClick: Ge,
                  className: `flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-700 hover:to-red-700 text-white text-xs font-bold transition-all cursor-pointer shadow-sm`,
                  children: [
                    (0, $.jsx)(Pe, { className: `w-3.5 h-3.5` }),
                    (0, $.jsx)(`span`, { children: `新建订阅台账` }),
                  ],
                }),
              ],
            }),
          ],
        }),
        (0, $.jsxs)(`div`, {
          className: `grid grid-cols-2 md:grid-cols-4 gap-3.5`,
          children: [
            (0, $.jsxs)(`div`, {
              className: `bg-white border border-slate-200/80 rounded-xl p-4 shadow-xs relative overflow-hidden`,
              children: [
                (0, $.jsxs)(`div`, {
                  className: `flex items-center justify-between`,
                  children: [
                    (0, $.jsxs)(`span`, {
                      className: `text-xs font-bold text-slate-600 flex items-center gap-1.5`,
                      children: [
                        (0, $.jsx)(dt, {
                          className: `w-4 h-4 text-emerald-600`,
                        }),
                        (0, $.jsx)(`span`, { children: `官方账户可用余额` }),
                      ],
                    }),
                    (0, $.jsx)(`button`, {
                      type: `button`,
                      onClick: () => pe(!0),
                      className: `text-[10.5px] text-emerald-700 font-bold hover:underline cursor-pointer bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200`,
                      children: `充值 / 阈值`,
                    }),
                  ],
                }),
                (0, $.jsxs)(`div`, {
                  className: `flex items-baseline gap-1 mt-2`,
                  children: [
                    (0, $.jsx)(`span`, {
                      className: `text-xs font-sans text-slate-400`,
                      children: `￥`,
                    }),
                    (0, $.jsx)(`span`, {
                      className: `text-2xl font-black font-mono text-emerald-600`,
                      children: n.balance.toLocaleString(`zh-CN`, {
                        minimumFractionDigits: 2,
                      }),
                    }),
                  ],
                }),
                (0, $.jsxs)(`span`, {
                  className: `text-[10px] text-slate-400 mt-1 block`,
                  children: [
                    `绑定火山 AppId: `,
                    (0, $.jsx)(`span`, {
                      className: `font-mono`,
                      children: n.appId,
                    }),
                  ],
                }),
              ],
            }),
            (0, $.jsxs)(`div`, {
              className: `bg-white border border-slate-200/80 rounded-xl p-4 shadow-xs`,
              children: [
                (0, $.jsxs)(`span`, {
                  className: `text-xs font-bold text-slate-600 flex items-center gap-1.5`,
                  children: [
                    (0, $.jsx)(Fe, {
                      className: `w-4 h-4 text-rose-600 animate-pulse`,
                    }),
                    (0, $.jsx)(`span`, { children: `今日官方传送数据总数` }),
                  ],
                }),
                (0, $.jsxs)(`div`, {
                  className: `flex items-baseline gap-1 mt-2`,
                  children: [
                    (0, $.jsx)(`span`, {
                      className: `text-2xl font-black font-mono text-slate-900`,
                      children: Re.toLocaleString(),
                    }),
                    (0, $.jsx)(`span`, {
                      className: `text-xs font-medium text-slate-400`,
                      children: `条`,
                    }),
                  ],
                }),
                (0, $.jsxs)(`span`, {
                  className: `text-[10px] text-slate-400 mt-1 block font-mono`,
                  children: [
                    `抖音 `,
                    e
                      .reduce((e, t) => e + (t.todayDouyinPushes || 0), 0)
                      .toLocaleString(),
                    ` 条 · 头条 `,
                    e
                      .reduce((e, t) => e + (t.todayToutiaoPushes || 0), 0)
                      .toLocaleString(),
                    ` 条`,
                  ],
                }),
              ],
            }),
            (0, $.jsxs)(`div`, {
              className: `bg-white border border-rose-200/80 bg-gradient-to-br from-white to-rose-50/30 rounded-xl p-4 shadow-xs`,
              children: [
                (0, $.jsxs)(`span`, {
                  className: `text-xs font-bold text-rose-900 flex items-center gap-1.5`,
                  children: [
                    (0, $.jsx)(H, { className: `w-4 h-4 text-rose-600` }),
                    (0, $.jsx)(`span`, { children: `今日按量扣费金额` }),
                  ],
                }),
                (0, $.jsxs)(`div`, {
                  className: `flex items-baseline gap-1 mt-2`,
                  children: [
                    (0, $.jsx)(`span`, {
                      className: `text-xs font-sans text-rose-700`,
                      children: `￥`,
                    }),
                    (0, $.jsx)(`span`, {
                      className: `text-2xl font-black font-mono text-rose-950`,
                      children: ze.toLocaleString(`zh-CN`, {
                        minimumFractionDigits: 2,
                      }),
                    }),
                    (0, $.jsx)(`span`, {
                      className: `text-xs font-medium text-rose-700`,
                      children: `元`,
                    }),
                  ],
                }),
                (0, $.jsx)(`span`, {
                  className: `text-[10px] text-rose-600/80 mt-1 block`,
                  children: `标准单价：0.015元/条 (15元/千条) · 实时扣减`,
                }),
              ],
            }),
            (0, $.jsxs)(`div`, {
              className: `bg-white border border-slate-200/80 rounded-xl p-4 shadow-xs`,
              children: [
                (0, $.jsxs)(`div`, {
                  className: `flex items-center justify-between`,
                  children: [
                    (0, $.jsxs)(`span`, {
                      className: `text-xs font-bold text-slate-600 flex items-center gap-1.5`,
                      children: [
                        (0, $.jsx)(He, { className: `w-4 h-4 text-sky-600` }),
                        (0, $.jsx)(`span`, { children: `关键词订阅台账在役` }),
                      ],
                    }),
                    (0, $.jsx)(`span`, {
                      className: `px-1.5 py-0.2 rounded text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200`,
                      children: `网关握手正常`,
                    }),
                  ],
                }),
                (0, $.jsxs)(`div`, {
                  className: `flex items-baseline gap-1 mt-2`,
                  children: [
                    (0, $.jsx)(`span`, {
                      className: `text-2xl font-black font-mono text-slate-900`,
                      children: Le,
                    }),
                    (0, $.jsxs)(`span`, {
                      className: `text-xs font-medium text-slate-400`,
                      children: [`/ `, Ie, ` 个台账正在监听`],
                    }),
                  ],
                }),
                (0, $.jsxs)(`span`, {
                  className: `text-[10px] text-slate-400 mt-1 block`,
                  children: [
                    `QPS 吞吐配额: `,
                    (0, $.jsxs)(`span`, {
                      className: `font-mono font-bold text-slate-600`,
                      children: [n.qpsLimit, ` QPS`],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        (0, $.jsxs)(`div`, {
          className: `flex items-center gap-2 border-b border-slate-200 pb-2`,
          children: [
            (0, $.jsxs)(`button`, {
              type: `button`,
              onClick: () => te(`keywords`),
              className: `flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${u === `keywords` ? `bg-[#1e376b] text-white shadow-xs` : `bg-white text-slate-700 hover:bg-slate-100 border border-slate-200`}`,
              children: [
                (0, $.jsx)(ve, { className: `w-3.5 h-3.5` }),
                (0, $.jsxs)(`span`, {
                  children: [`关键词订阅台账 (`, Ie, `)`],
                }),
              ],
            }),
            (0, $.jsxs)(`button`, {
              type: `button`,
              onClick: () => te(`stream`),
              className: `flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${u === `stream` ? `bg-[#1e376b] text-white shadow-xs` : `bg-white text-slate-700 hover:bg-slate-100 border border-slate-200`}`,
              children: [
                (0, $.jsx)(Fe, {
                  className: `w-3.5 h-3.5 text-rose-500 animate-pulse`,
                }),
                (0, $.jsxs)(`span`, {
                  children: [`全量抖音与头条直连推流池 (`, t.length, `)`],
                }),
              ],
            }),
            (0, $.jsxs)(`button`, {
              type: `button`,
              onClick: () => te(`billing`),
              className: `flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${u === `billing` ? `bg-[#1e376b] text-white shadow-xs` : `bg-white text-slate-700 hover:bg-slate-100 border border-slate-200`}`,
              children: [
                (0, $.jsx)(ee, { className: `w-3.5 h-3.5` }),
                (0, $.jsx)(`span`, { children: `按量计费与对账账单` }),
              ],
            }),
          ],
        }),
        u === `keywords` &&
          (0, $.jsxs)(`div`, {
            className: `flex flex-col gap-4`,
            children: [
              (0, $.jsxs)(`div`, {
                className: `bg-white border border-slate-200/80 rounded-xl p-3.5 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3`,
                children: [
                  (0, $.jsxs)(`div`, {
                    className: `flex items-center gap-2.5 flex-1 flex-wrap`,
                    children: [
                      (0, $.jsxs)(`div`, {
                        className: `relative flex-1 min-w-[240px] max-w-md`,
                        children: [
                          (0, $.jsx)(Be, {
                            className: `w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2`,
                          }),
                          (0, $.jsx)(`input`, {
                            type: `text`,
                            value: z,
                            onChange: (e) => ne(e.target.value),
                            placeholder: `搜索订阅台账名称、编号、责任人、备注...`,
                            className: `w-full h-8.5 pl-8 pr-3 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:border-rose-500 focus:outline-none placeholder:text-slate-400`,
                          }),
                        ],
                      }),
                      (0, $.jsxs)(`select`, {
                        value: V,
                        onChange: (e) => re(e.target.value),
                        className: `h-8.5 px-3 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:border-rose-500 focus:outline-none cursor-pointer`,
                        children: [
                          (0, $.jsx)(`option`, {
                            value: `all`,
                            children: `全部渠道 (抖音/头条)`,
                          }),
                          (0, $.jsx)(`option`, {
                            value: `douyin`,
                            children: `包含抖音短视频`,
                          }),
                          (0, $.jsx)(`option`, {
                            value: `toutiao`,
                            children: `包含今日头条`,
                          }),
                        ],
                      }),
                      (0, $.jsxs)(`select`, {
                        value: ie,
                        onChange: (e) => ae(e.target.value),
                        className: `h-8.5 px-3 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:border-rose-500 focus:outline-none cursor-pointer`,
                        children: [
                          (0, $.jsx)(`option`, {
                            value: `all`,
                            children: `全部状态`,
                          }),
                          (0, $.jsx)(`option`, {
                            value: `active`,
                            children: `监听中 (产生扣费)`,
                          }),
                          (0, $.jsx)(`option`, {
                            value: `paused`,
                            children: `已暂停 (停止扣费)`,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, $.jsxs)(`div`, {
                    className: `flex items-center gap-2 text-xs`,
                    children: [
                      (0, $.jsx)(`span`, {
                        className: `text-slate-400 font-semibold text-[11px]`,
                        children: `排序:`,
                      }),
                      (0, $.jsxs)(`select`, {
                        value: oe,
                        onChange: (e) => se(e.target.value),
                        className: `h-8 px-2.5 text-xs bg-slate-50 border border-slate-200 rounded-lg cursor-pointer`,
                        children: [
                          (0, $.jsx)(`option`, {
                            value: `todayCost`,
                            children: `按今日扣费最高`,
                          }),
                          (0, $.jsx)(`option`, {
                            value: `todayPushes`,
                            children: `按今日推送条数`,
                          }),
                          (0, $.jsx)(`option`, {
                            value: `totalPushes`,
                            children: `按累计接收总量`,
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, $.jsx)(`div`, {
                className: `bg-white border border-slate-200/80 rounded-xl shadow-xs overflow-hidden`,
                children: (0, $.jsx)(`div`, {
                  className: `w-full overflow-x-auto`,
                  children: (0, $.jsxs)(`table`, {
                    className: `w-full border-collapse text-[12px] text-left`,
                    children: [
                      (0, $.jsx)(`thead`, {
                        children: (0, $.jsxs)(`tr`, {
                          className: `bg-slate-50/85 border-b border-slate-200 text-[11px] font-extrabold text-slate-500 uppercase tracking-wider whitespace-nowrap`,
                          children: [
                            (0, $.jsx)(`th`, {
                              className: `py-3 px-4 min-w-[240px]`,
                              children: `订阅关键词与台账`,
                            }),
                            (0, $.jsx)(`th`, {
                              className: `py-3 px-4 w-[140px]`,
                              children: `订阅官方渠道`,
                            }),
                            (0, $.jsx)(`th`, {
                              className: `py-3 px-4 w-[100px]`,
                              children: `计费单价`,
                            }),
                            (0, $.jsx)(`th`, {
                              className: `py-3 px-4 w-[140px] text-right`,
                              children: `今日推送条数`,
                            }),
                            (0, $.jsx)(`th`, {
                              className: `py-3 px-4 w-[130px] text-right`,
                              children: `今日产生扣费`,
                            }),
                            (0, $.jsx)(`th`, {
                              className: `py-3 px-4 w-[150px]`,
                              children: `每日预算上限 (防超支熔断)`,
                            }),
                            (0, $.jsx)(`th`, {
                              className: `py-3 px-4 w-[120px] text-center`,
                              children: `台账审计日志`,
                            }),
                            (0, $.jsx)(`th`, {
                              className: `py-3 px-4 w-[85px] text-center`,
                              children: `状态`,
                            }),
                            (0, $.jsx)(`th`, {
                              className: `py-3 px-4 w-[180px] text-center`,
                              children: `台账管理与操作`,
                            }),
                          ],
                        }),
                      }),
                      (0, $.jsx)(`tbody`, {
                        className: `divide-y divide-slate-100`,
                        children:
                          We.length === 0
                            ? (0, $.jsx)(`tr`, {
                                children: (0, $.jsx)(`td`, {
                                  colSpan: 9,
                                  className: `py-12 text-center text-slate-400`,
                                  children: (0, $.jsxs)(`div`, {
                                    className: `flex flex-col items-center gap-2`,
                                    children: [
                                      (0, $.jsx)(`span`, {
                                        className: `text-sm`,
                                        children: `未找到符合条件的关键词订阅台账`,
                                      }),
                                      (0, $.jsx)(`span`, {
                                        className: `text-xs text-slate-400`,
                                        children: `点击右上角“新建订阅台账”录入关键词并下发火山官方监听`,
                                      }),
                                    ],
                                  }),
                                }),
                              })
                            : We.map((e) => {
                                let n = e.status === `paused`,
                                  r = Math.min(
                                    100,
                                    Math.round(
                                      (e.todayTotalPushes / e.dailyLimit) * 100,
                                    ),
                                  ),
                                  i = e.logs?.length || 0,
                                  a = t.filter(
                                    (t) => t.keyword === e.keyword,
                                  ).length;
                                return (0, $.jsxs)(
                                  `tr`,
                                  {
                                    onClick: () => Je(e, `pushes`),
                                    className: `hover:bg-rose-50/30 transition-colors cursor-pointer group`,
                                    children: [
                                      (0, $.jsx)(`td`, {
                                        className: `py-3.5 px-4`,
                                        children: (0, $.jsxs)(`div`, {
                                          className: `flex flex-col gap-1`,
                                          children: [
                                            (0, $.jsxs)(`div`, {
                                              className: `flex items-center gap-2 flex-wrap`,
                                              children: [
                                                (0, $.jsx)(`span`, {
                                                  className: `font-extrabold text-slate-900 text-[13px] group-hover:text-rose-600 transition-colors`,
                                                  children: e.keyword,
                                                }),
                                                (0, $.jsx)(`span`, {
                                                  className: `px-1.5 py-0.2 rounded text-[10px] font-mono font-bold bg-slate-100 text-slate-600 border border-slate-200`,
                                                  children: e.id,
                                                }),
                                              ],
                                            }),
                                            (0, $.jsxs)(`div`, {
                                              className: `flex items-center gap-2 text-[10.5px] text-slate-400`,
                                              children: [
                                                (0, $.jsxs)(`span`, {
                                                  children: [
                                                    `责任人: `,
                                                    e.creator,
                                                  ],
                                                }),
                                                (0, $.jsx)(`span`, {
                                                  children: `·`,
                                                }),
                                                (0, $.jsxs)(`span`, {
                                                  children: [
                                                    `创建时间: `,
                                                    e.createTime,
                                                  ],
                                                }),
                                                (0, $.jsx)(`span`, {
                                                  children: `·`,
                                                }),
                                                (0, $.jsxs)(`span`, {
                                                  children: [
                                                    `历史推流: `,
                                                    (0, $.jsx)(`strong`, {
                                                      className: `text-slate-600 font-mono`,
                                                      children: a,
                                                    }),
                                                    ` 条`,
                                                  ],
                                                }),
                                              ],
                                            }),
                                            e.excludeKeywords &&
                                              e.excludeKeywords.length > 0 &&
                                              (0, $.jsxs)(`div`, {
                                                className: `text-[10px] text-rose-500 truncate max-w-[280px]`,
                                                children: [
                                                  `负向排除: `,
                                                  e.excludeKeywords.join(`、`),
                                                ],
                                              }),
                                          ],
                                        }),
                                      }),
                                      (0, $.jsx)(`td`, {
                                        className: `py-3.5 px-4 whitespace-nowrap`,
                                        children: (0, $.jsxs)(`div`, {
                                          className: `flex items-center gap-1.5`,
                                          children: [
                                            e.scope.includes(`douyin`) &&
                                              (0, $.jsx)(`span`, {
                                                className: `inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10.5px] font-bold bg-neutral-900 text-white`,
                                                children: (0, $.jsx)(`span`, {
                                                  children: `抖音短视频`,
                                                }),
                                              }),
                                            e.scope.includes(`toutiao`) &&
                                              (0, $.jsx)(`span`, {
                                                className: `inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10.5px] font-bold bg-rose-50 text-rose-700 border border-rose-200`,
                                                children: (0, $.jsx)(`span`, {
                                                  children: `今日头条`,
                                                }),
                                              }),
                                          ],
                                        }),
                                      }),
                                      (0, $.jsx)(`td`, {
                                        className: `py-3.5 px-4 whitespace-nowrap font-mono`,
                                        children: (0, $.jsxs)(`div`, {
                                          className: `flex flex-col`,
                                          children: [
                                            (0, $.jsxs)(`span`, {
                                              className: `font-bold text-slate-900 text-[12px]`,
                                              children: [
                                                `￥`,
                                                e.billingUnitPrice.toFixed(3),
                                              ],
                                            }),
                                            (0, $.jsx)(`span`, {
                                              className: `text-[9.5px] text-slate-400`,
                                              children: `元/条`,
                                            }),
                                          ],
                                        }),
                                      }),
                                      (0, $.jsx)(`td`, {
                                        className: `py-3.5 px-4 text-right whitespace-nowrap font-mono`,
                                        children: (0, $.jsxs)(`div`, {
                                          className: `flex flex-col items-end`,
                                          children: [
                                            (0, $.jsx)(`span`, {
                                              className: `font-bold text-slate-900 text-[13px]`,
                                              children:
                                                e.todayTotalPushes.toLocaleString(),
                                            }),
                                            (0, $.jsxs)(`span`, {
                                              className: `text-[10px] text-slate-400`,
                                              children: [
                                                `抖 `,
                                                e.todayDouyinPushes.toLocaleString(),
                                                ` · 头 `,
                                                e.todayToutiaoPushes.toLocaleString(),
                                              ],
                                            }),
                                          ],
                                        }),
                                      }),
                                      (0, $.jsx)(`td`, {
                                        className: `py-3.5 px-4 text-right whitespace-nowrap font-mono`,
                                        children: (0, $.jsxs)(`div`, {
                                          className: `flex flex-col items-end`,
                                          children: [
                                            (0, $.jsxs)(`span`, {
                                              className: `font-black text-rose-600 text-[13px]`,
                                              children: [
                                                `￥`,
                                                e.todayCost.toFixed(2),
                                              ],
                                            }),
                                            (0, $.jsxs)(`span`, {
                                              className: `text-[10px] text-slate-400`,
                                              children: [
                                                `累计 ￥`,
                                                e.totalCost.toFixed(2),
                                              ],
                                            }),
                                          ],
                                        }),
                                      }),
                                      (0, $.jsx)(`td`, {
                                        className: `py-3.5 px-4 whitespace-nowrap`,
                                        children: (0, $.jsxs)(`div`, {
                                          className: `flex flex-col gap-1 w-32`,
                                          children: [
                                            (0, $.jsxs)(`div`, {
                                              className: `flex justify-between text-[10px] font-mono text-slate-500`,
                                              children: [
                                                (0, $.jsx)(`span`, {
                                                  children: e.todayTotalPushes,
                                                }),
                                                (0, $.jsxs)(`span`, {
                                                  children: [
                                                    `上限 `,
                                                    e.dailyLimit,
                                                    ` 条`,
                                                  ],
                                                }),
                                              ],
                                            }),
                                            (0, $.jsx)(`div`, {
                                              className: `w-full h-1.5 bg-slate-100 rounded-full overflow-hidden`,
                                              children: (0, $.jsx)(`div`, {
                                                className: `h-full rounded-full ${r >= 90 ? `bg-red-500` : r >= 60 ? `bg-amber-500` : `bg-emerald-500`}`,
                                                style: { width: `${r}%` },
                                              }),
                                            }),
                                          ],
                                        }),
                                      }),
                                      (0, $.jsx)(`td`, {
                                        className: `py-3.5 px-4 text-center whitespace-nowrap`,
                                        children: (0, $.jsxs)(`button`, {
                                          type: `button`,
                                          onClick: (t) => {
                                            (t.stopPropagation(),
                                              Je(e, `logs`));
                                          },
                                          className: `inline-flex items-center gap-1 px-2 py-0.5 rounded-lg text-[11px] font-bold bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer`,
                                          title: `查看该台账操作与增加的日志`,
                                          children: [
                                            (0, $.jsx)(Y, {
                                              className: `w-3 h-3 text-slate-500`,
                                            }),
                                            (0, $.jsxs)(`span`, {
                                              children: [i, ` 条日志`],
                                            }),
                                          ],
                                        }),
                                      }),
                                      (0, $.jsx)(`td`, {
                                        className: `py-3.5 px-4 text-center whitespace-nowrap`,
                                        children: (0, $.jsxs)(`button`, {
                                          type: `button`,
                                          onClick: (t) => Ze(e, t),
                                          className: `inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10.5px] font-bold border cursor-pointer transition-all ${n ? `bg-slate-100 text-slate-600 border-slate-200 hover:bg-slate-200` : `bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100`}`,
                                          children: [
                                            (0, $.jsx)(`span`, {
                                              className: `w-1.5 h-1.5 rounded-full ${n ? `bg-slate-400` : `bg-emerald-500 animate-pulse`}`,
                                            }),
                                            (0, $.jsx)(`span`, {
                                              children: n ? `已暂停` : `监听中`,
                                            }),
                                          ],
                                        }),
                                      }),
                                      (0, $.jsx)(`td`, {
                                        className: `py-3.5 px-4 text-center whitespace-nowrap`,
                                        children: (0, $.jsxs)(`div`, {
                                          className: `inline-flex items-center justify-center gap-1.5`,
                                          children: [
                                            (0, $.jsxs)(`button`, {
                                              type: `button`,
                                              onClick: (t) => {
                                                (t.stopPropagation(),
                                                  Je(e, `pushes`));
                                              },
                                              className: `px-2 py-1 text-[11px] font-bold text-rose-700 bg-rose-50 hover:bg-rose-100 rounded-lg border border-rose-200 transition-colors cursor-pointer flex items-center gap-1`,
                                              title: `进入台账：查看历史推流列表与操作日志`,
                                              children: [
                                                (0, $.jsx)(le, {
                                                  className: `w-3 h-3`,
                                                }),
                                                (0, $.jsx)(`span`, {
                                                  children: `台账明细`,
                                                }),
                                              ],
                                            }),
                                            (0, $.jsx)(`button`, {
                                              type: `button`,
                                              onClick: (t) => Qe(e, t),
                                              className: `p-1.5 text-rose-600 hover:bg-rose-100 rounded-md transition-colors cursor-pointer`,
                                              title: `模拟官方推送一条数据入库并扣费`,
                                              children: (0, $.jsx)(pt, {
                                                className: `w-3.5 h-3.5`,
                                              }),
                                            }),
                                            (0, $.jsx)(`button`, {
                                              type: `button`,
                                              onClick: (t) => Ke(e, t),
                                              className: `p-1.5 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-md transition-colors cursor-pointer`,
                                              title: `编辑配额上限、排除词与渠道`,
                                              children: (0, $.jsx)(qe, {
                                                className: `w-3.5 h-3.5`,
                                              }),
                                            }),
                                            (0, $.jsx)(`button`, {
                                              type: `button`,
                                              onClick: (t) => Xe(e, t),
                                              className: `p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors cursor-pointer`,
                                              title: `向火山官方注销此台账，停止数据下发与扣费`,
                                              children: (0, $.jsx)(at, {
                                                className: `w-3.5 h-3.5`,
                                              }),
                                            }),
                                          ],
                                        }),
                                      }),
                                    ],
                                  },
                                  e.id,
                                );
                              }),
                      }),
                    ],
                  }),
                }),
              }),
            ],
          }),
        u === `stream` &&
          (0, $.jsxs)(`div`, {
            className: `flex flex-col gap-4`,
            children: [
              (0, $.jsxs)(`div`, {
                className: `bg-white border border-slate-200/80 rounded-xl p-3.5 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3`,
                children: [
                  (0, $.jsxs)(`div`, {
                    className: `flex items-center gap-2`,
                    children: [
                      (0, $.jsx)(`span`, {
                        className: `text-xs font-bold text-slate-700`,
                        children: `火山官方推送日志流水池：`,
                      }),
                      (0, $.jsx)(`span`, {
                        className: `text-xs text-slate-500`,
                        children: `汇总展示所有关键词订阅台账实时接收到的抖音与今日头条推流（含扣费流水与验签时延）`,
                      }),
                    ],
                  }),
                  (0, $.jsxs)(`button`, {
                    type: `button`,
                    onClick: (e) => Qe(void 0, e),
                    className: `flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold transition-all cursor-pointer shadow-xs shrink-0`,
                    children: [
                      (0, $.jsx)(pt, { className: `w-3 h-3 fill-current` }),
                      (0, $.jsx)(`span`, { children: `模拟官方推流一条` }),
                    ],
                  }),
                ],
              }),
              (0, $.jsx)(`div`, {
                className: `space-y-3`,
                children:
                  t.length === 0
                    ? (0, $.jsx)(`div`, {
                        className: `bg-white p-12 text-center text-slate-400 rounded-xl border border-slate-200`,
                        children: `暂无推送日志流水`,
                      })
                    : t.map((t) => {
                        let n = t.platform === `douyin`,
                          r = e.find((e) => e.keyword === t.keyword);
                        return (0, $.jsxs)(
                          `div`,
                          {
                            className: `bg-white border border-slate-200/90 hover:border-rose-300 rounded-xl p-4 shadow-xs flex flex-col gap-2.5 transition-all`,
                            children: [
                              (0, $.jsxs)(`div`, {
                                className: `flex items-center justify-between gap-3 flex-wrap`,
                                children: [
                                  (0, $.jsxs)(`div`, {
                                    className: `flex items-center gap-2 flex-wrap`,
                                    children: [
                                      n
                                        ? (0, $.jsx)(`span`, {
                                            className: `px-2 py-0.5 rounded text-[11px] font-bold bg-neutral-900 text-white`,
                                            children: `抖音短视频直连`,
                                          })
                                        : (0, $.jsx)(`span`, {
                                            className: `px-2 py-0.5 rounded text-[11px] font-bold bg-rose-50 text-rose-700 border border-rose-200`,
                                            children: `今日头条资讯直连`,
                                          }),
                                      (0, $.jsxs)(`button`, {
                                        type: `button`,
                                        onClick: () => r && Je(r, `pushes`),
                                        className: `px-2 py-0.5 rounded text-[11px] font-bold bg-rose-50 hover:bg-rose-100 text-rose-800 font-mono border border-rose-200 cursor-pointer flex items-center gap-1 transition-colors`,
                                        title: `点击打开所属关键词订阅台账`,
                                        children: [
                                          (0, $.jsx)(ve, {
                                            className: `w-3 h-3 text-rose-600`,
                                          }),
                                          (0, $.jsx)(`span`, {
                                            children: t.keyword,
                                          }),
                                          r &&
                                            (0, $.jsxs)(`span`, {
                                              className: `opacity-70 text-[9.5px]`,
                                              children: [`(`, r.id, `)`],
                                            }),
                                        ],
                                      }),
                                      (0, $.jsxs)(`span`, {
                                        className: `text-[10.5px] px-1.5 py-0.2 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 font-mono flex items-center gap-1`,
                                        children: [
                                          (0, $.jsx)(B, {
                                            className: `w-3 h-3`,
                                          }),
                                          (0, $.jsx)(`span`, {
                                            children: `官方数字签名验证通过`,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, $.jsxs)(`div`, {
                                    className: `flex items-center gap-3 text-xs font-mono`,
                                    children: [
                                      (0, $.jsxs)(`span`, {
                                        className: `text-slate-400`,
                                        children: [
                                          `时延: `,
                                          (0, $.jsxs)(`span`, {
                                            className: `font-bold text-emerald-600`,
                                            children: [t.latencyMs, `ms`],
                                          }),
                                        ],
                                      }),
                                      (0, $.jsxs)(`span`, {
                                        className: `text-rose-600 font-bold bg-rose-50 px-2 py-0.5 rounded border border-rose-200`,
                                        children: [
                                          `扣费: -￥`,
                                          t.charge.toFixed(3),
                                        ],
                                      }),
                                      (0, $.jsx)(`span`, {
                                        className: `text-slate-400`,
                                        children: t.receivedTime,
                                      }),
                                      (0, $.jsx)(`button`, {
                                        type: `button`,
                                        onClick: () =>
                                          E({
                                            title: `火山官方推流原始报文 [${t.volcEventId}]`,
                                            json: JSON.stringify(t, null, 2),
                                          }),
                                        className: `text-[11px] text-slate-500 hover:text-slate-800 font-bold underline cursor-pointer`,
                                        children: `查看报文`,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, $.jsxs)(`div`, {
                                className: `flex flex-col gap-1`,
                                children: [
                                  (0, $.jsxs)(`a`, {
                                    href: t.url,
                                    target: `_blank`,
                                    rel: `noreferrer`,
                                    className: `text-[13.5px] font-bold text-slate-900 hover:text-rose-600 flex items-center gap-1.5 transition-colors`,
                                    children: [
                                      (0, $.jsx)(`span`, { children: t.title }),
                                      (0, $.jsx)(ce, {
                                        className: `w-3.5 h-3.5 text-slate-400`,
                                      }),
                                    ],
                                  }),
                                  (0, $.jsx)(`p`, {
                                    className: `text-xs text-slate-600 leading-relaxed`,
                                    children: t.contentSnippet,
                                  }),
                                ],
                              }),
                              (0, $.jsxs)(`div`, {
                                className: `flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-100 flex-wrap gap-2`,
                                children: [
                                  (0, $.jsxs)(`div`, {
                                    className: `flex items-center gap-2`,
                                    children: [
                                      (0, $.jsx)(`span`, {
                                        className: `font-semibold text-slate-700`,
                                        children: t.author,
                                      }),
                                      (0, $.jsx)(`span`, { children: `·` }),
                                      (0, $.jsxs)(`span`, {
                                        children: [`发布时间: `, t.publishTime],
                                      }),
                                      (0, $.jsx)(`span`, { children: `·` }),
                                      (0, $.jsxs)(`span`, {
                                        className: `font-mono text-[10px]`,
                                        children: [`事件ID: `, t.volcEventId],
                                      }),
                                    ],
                                  }),
                                  (0, $.jsxs)(`div`, {
                                    className: `flex items-center gap-3 font-mono text-[11px]`,
                                    children: [
                                      (0, $.jsxs)(`span`, {
                                        children: [
                                          `赞 `,
                                          t.likes.toLocaleString(),
                                        ],
                                      }),
                                      (0, $.jsxs)(`span`, {
                                        children: [
                                          `评 `,
                                          t.comments.toLocaleString(),
                                        ],
                                      }),
                                      t.shares !== void 0 &&
                                        (0, $.jsxs)(`span`, {
                                          children: [
                                            `转 `,
                                            t.shares.toLocaleString(),
                                          ],
                                        }),
                                      t.reads !== void 0 &&
                                        (0, $.jsxs)(`span`, {
                                          children: [
                                            `播/读 `,
                                            t.reads.toLocaleString(),
                                          ],
                                        }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          },
                          t.id,
                        );
                      }),
              }),
            ],
          }),
        u === `billing` &&
          (0, $.jsx)(`div`, {
            className: `flex flex-col gap-4`,
            children: (0, $.jsxs)(`div`, {
              className: `bg-white border border-slate-200/80 rounded-xl p-5 shadow-xs flex flex-col gap-4`,
              children: [
                (0, $.jsxs)(`div`, {
                  className: `flex items-center justify-between pb-3 border-b border-slate-200`,
                  children: [
                    (0, $.jsxs)(`div`, {
                      children: [
                        (0, $.jsx)(`h3`, {
                          className: `text-sm font-black text-slate-900`,
                          children: `火山引擎官方数据直连费用对账中心`,
                        }),
                        (0, $.jsx)(`p`, {
                          className: `text-xs text-slate-500 mt-0.5`,
                          children: `透明按量计费协议：每日自动汇总各台账推送数据量，按结算单价扣减开发者预存余额`,
                        }),
                      ],
                    }),
                    (0, $.jsxs)(`button`, {
                      type: `button`,
                      onClick: () =>
                        l(
                          `已导出本月火山官方数据推送费用审计清单 (CSV/Excel格式)`,
                          `success`,
                        ),
                      className: `flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-xs font-bold text-slate-700 cursor-pointer shadow-2xs`,
                      children: [
                        (0, $.jsx)(K, { className: `w-3.5 h-3.5` }),
                        (0, $.jsx)(`span`, { children: `导出对账明细清单` }),
                      ],
                    }),
                  ],
                }),
                (0, $.jsxs)(`div`, {
                  className: `grid grid-cols-1 sm:grid-cols-3 gap-3`,
                  children: [
                    (0, $.jsxs)(`div`, {
                      className: `p-3.5 rounded-xl bg-slate-50 border border-slate-200`,
                      children: [
                        (0, $.jsx)(`span`, {
                          className: `text-xs text-slate-500`,
                          children: `本月累计扣费金额`,
                        }),
                        (0, $.jsxs)(`div`, {
                          className: `text-xl font-black font-mono text-slate-900 mt-1`,
                          children: [
                            `￥`,
                            n.monthCost.toLocaleString(`zh-CN`, {
                              minimumFractionDigits: 2,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, $.jsxs)(`div`, {
                      className: `p-3.5 rounded-xl bg-slate-50 border border-slate-200`,
                      children: [
                        (0, $.jsx)(`span`, {
                          className: `text-xs text-slate-500`,
                          children: `累计接收官方数据总量`,
                        }),
                        (0, $.jsxs)(`div`, {
                          className: `text-xl font-black font-mono text-slate-900 mt-1`,
                          children: [
                            (n.deliveredTodayTotal + 248e3).toLocaleString(),
                            ` 条`,
                          ],
                        }),
                      ],
                    }),
                    (0, $.jsxs)(`div`, {
                      className: `p-3.5 rounded-xl bg-slate-50 border border-slate-200`,
                      children: [
                        (0, $.jsx)(`span`, {
                          className: `text-xs text-slate-500`,
                          children: `平均单条结算价格`,
                        }),
                        (0, $.jsx)(`div`, {
                          className: `text-xl font-black font-mono text-emerald-600 mt-1`,
                          children: `￥0.0148 元/条`,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, $.jsxs)(`div`, {
                  className: `text-xs text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1.5`,
                  children: [
                    (0, $.jsx)(`span`, {
                      className: `font-bold block text-slate-800`,
                      children: `计费协议与台账熔断说明：`,
                    }),
                    (0, $.jsxs)(`p`, {
                      children: [
                        `1. `,
                        (0, $.jsx)(`strong`, { children: `计费模式` }),
                        `：完全按数据推送成功条数结算（0.015元/条，折合15元/千条），不产生推送则不计费。`,
                      ],
                    }),
                    (0, $.jsxs)(`p`, {
                      children: [
                        `2. `,
                        (0, $.jsx)(`strong`, { children: `防超支熔断保护` }),
                        `：各关键词订阅台账均具备“单日推送上限”配置，当当日接收数据达到限额后，官方网关将自动熔断停止推送，杜绝突发爆款造成巨额账单。`,
                      ],
                    }),
                    (0, $.jsxs)(`p`, {
                      children: [
                        `3. `,
                        (0, $.jsx)(`strong`, { children: `台账随删随停` }),
                        `：用户随时可以注销删除或暂停任一关键词台账，下发注销指令后官方立即解除监听并停止计费，并在操作日志中永久存证。`,
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        Z &&
          (0, $.jsx)(`div`, {
            className: `fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200`,
            children: (0, $.jsxs)(`div`, {
              className: `bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-5xl h-[92vh] flex flex-col overflow-hidden animate-in zoom-in-95 duration-150`,
              onClick: (e) => e.stopPropagation(),
              children: [
                (0, $.jsxs)(`div`, {
                  className: `px-6 py-4 border-b border-slate-200 flex items-center justify-between shrink-0 bg-slate-50/90`,
                  children: [
                    (0, $.jsxs)(`div`, {
                      className: `flex items-center gap-3`,
                      children: [
                        (0, $.jsx)(`div`, {
                          className: `w-10 h-10 rounded-xl bg-gradient-to-br from-rose-500 to-red-600 flex items-center justify-center text-white font-bold shadow-xs`,
                          children: (0, $.jsx)(ve, { className: `w-5 h-5` }),
                        }),
                        (0, $.jsxs)(`div`, {
                          children: [
                            (0, $.jsxs)(`div`, {
                              className: `flex items-center gap-2 flex-wrap`,
                              children: [
                                (0, $.jsxs)(`span`, {
                                  className: `text-sm font-black text-slate-900`,
                                  children: [`【`, Z.keyword, `】订阅台账`],
                                }),
                                (0, $.jsx)(`span`, {
                                  className: `px-2 py-0.5 rounded text-[10.5px] font-mono font-bold bg-slate-200 text-slate-700`,
                                  children: Z.id,
                                }),
                                (0, $.jsx)(`span`, {
                                  className: `px-2 py-0.5 rounded-full text-[10.5px] font-bold border ${Z.status === `active` ? `bg-emerald-50 text-emerald-700 border-emerald-200` : `bg-slate-100 text-slate-600 border-slate-200`}`,
                                  children:
                                    Z.status === `active`
                                      ? `🟢 官方监听中`
                                      : `⚪ 已暂停`,
                                }),
                              ],
                            }),
                            (0, $.jsxs)(`div`, {
                              className: `flex items-center gap-2 text-[11px] text-slate-500 mt-0.5`,
                              children: [
                                (0, $.jsxs)(`span`, {
                                  children: [`录入人: `, Z.creator],
                                }),
                                (0, $.jsx)(`span`, { children: `·` }),
                                (0, $.jsxs)(`span`, {
                                  children: [`建账时间: `, Z.createTime],
                                }),
                                (0, $.jsx)(`span`, { children: `·` }),
                                (0, $.jsxs)(`span`, {
                                  children: [
                                    `计费单价: ￥`,
                                    Z.billingUnitPrice,
                                    `元/条`,
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, $.jsxs)(`div`, {
                      className: `flex items-center gap-2`,
                      children: [
                        (0, $.jsxs)(`button`, {
                          type: `button`,
                          onClick: (e) => Qe(Z, e),
                          className: `flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-rose-200 bg-rose-50 hover:bg-rose-100 text-rose-700 text-xs font-bold transition-all cursor-pointer shadow-2xs`,
                          title: `为当前台账模拟下发一条官方推送`,
                          children: [
                            (0, $.jsx)(pt, {
                              className: `w-3.5 h-3.5 fill-rose-600 text-rose-600`,
                            }),
                            (0, $.jsx)(`span`, {
                              children: `模拟官方推流 (+1条扣费)`,
                            }),
                          ],
                        }),
                        (0, $.jsxs)(`button`, {
                          type: `button`,
                          onClick: () => k(!0),
                          className: `flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-bold transition-all cursor-pointer shadow-2xs`,
                          title: `为本台账手动记录操作变更日志`,
                          children: [
                            (0, $.jsx)(Pe, {
                              className: `w-3.5 h-3.5 text-slate-500`,
                            }),
                            (0, $.jsx)(`span`, { children: `记录操作日志` }),
                          ],
                        }),
                        (0, $.jsx)(`button`, {
                          type: `button`,
                          onClick: () => p(null),
                          className: `w-8 h-8 rounded-xl flex items-center justify-center text-slate-400 hover:text-slate-600 hover:bg-slate-200 cursor-pointer transition-colors`,
                          children: (0, $.jsx)(Q, { className: `w-5 h-5` }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, $.jsxs)(`div`, {
                  className: `px-6 py-3 bg-slate-100/60 border-b border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-3 shrink-0`,
                  children: [
                    (0, $.jsxs)(`div`, {
                      className: `bg-white p-2.5 rounded-xl border border-slate-200/80 shadow-2xs flex flex-col`,
                      children: [
                        (0, $.jsx)(`span`, {
                          className: `text-[10.5px] text-slate-400 font-medium`,
                          children: `今日推送条数 / 上限`,
                        }),
                        (0, $.jsxs)(`div`, {
                          className: `flex items-baseline gap-1 mt-1`,
                          children: [
                            (0, $.jsx)(`span`, {
                              className: `text-base font-black font-mono text-slate-900`,
                              children: Z.todayTotalPushes.toLocaleString(),
                            }),
                            (0, $.jsxs)(`span`, {
                              className: `text-[10px] text-slate-400`,
                              children: [
                                `/ `,
                                Z.dailyLimit.toLocaleString(),
                                ` 条`,
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, $.jsxs)(`div`, {
                      className: `bg-white p-2.5 rounded-xl border border-slate-200/80 shadow-2xs flex flex-col`,
                      children: [
                        (0, $.jsx)(`span`, {
                          className: `text-[10.5px] text-slate-400 font-medium`,
                          children: `今日按量扣费`,
                        }),
                        (0, $.jsxs)(`div`, {
                          className: `flex items-baseline gap-1 mt-1`,
                          children: [
                            (0, $.jsxs)(`span`, {
                              className: `text-base font-black font-mono text-rose-600`,
                              children: [`￥`, Z.todayCost.toFixed(2)],
                            }),
                            (0, $.jsx)(`span`, {
                              className: `text-[10px] text-slate-400`,
                              children: `元`,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, $.jsxs)(`div`, {
                      className: `bg-white p-2.5 rounded-xl border border-slate-200/80 shadow-2xs flex flex-col`,
                      children: [
                        (0, $.jsx)(`span`, {
                          className: `text-[10.5px] text-slate-400 font-medium`,
                          children: `累计推送总量 / 累计扣费`,
                        }),
                        (0, $.jsxs)(`div`, {
                          className: `flex items-baseline gap-1 mt-1`,
                          children: [
                            (0, $.jsx)(`span`, {
                              className: `text-base font-black font-mono text-slate-900`,
                              children: Z.totalPushes.toLocaleString(),
                            }),
                            (0, $.jsxs)(`span`, {
                              className: `text-[10px] text-slate-400 font-mono`,
                              children: [`条 (￥`, Z.totalCost.toFixed(2), `)`],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, $.jsxs)(`div`, {
                      className: `bg-white p-2.5 rounded-xl border border-slate-200/80 shadow-2xs flex flex-col`,
                      children: [
                        (0, $.jsx)(`span`, {
                          className: `text-[10.5px] text-slate-400 font-medium`,
                          children: `台账操作日志存证`,
                        }),
                        (0, $.jsxs)(`div`, {
                          className: `flex items-baseline gap-1 mt-1`,
                          children: [
                            (0, $.jsx)(`span`, {
                              className: `text-base font-black font-mono text-sky-700`,
                              children: Z.logs?.length || 0,
                            }),
                            (0, $.jsx)(`span`, {
                              className: `text-[10px] text-slate-400`,
                              children: `条变更记录`,
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, $.jsxs)(`div`, {
                  className: `px-6 pt-2 border-b border-slate-200 bg-white flex items-center justify-between gap-4 shrink-0`,
                  children: [
                    (0, $.jsxs)(`div`, {
                      className: `flex items-center gap-2`,
                      children: [
                        (0, $.jsxs)(`button`, {
                          type: `button`,
                          onClick: () => h(`pushes`),
                          className: `pb-2.5 px-3 text-xs font-bold border-b-2 transition-all cursor-pointer flex items-center gap-1.5 ${m === `pushes` ? `border-rose-600 text-rose-600` : `border-transparent text-slate-500 hover:text-slate-900`}`,
                          children: [
                            (0, $.jsx)(Fe, { className: `w-3.5 h-3.5` }),
                            (0, $.jsxs)(`span`, {
                              children: [`历史推送数据列表 (`, Ve.length, `)`],
                            }),
                          ],
                        }),
                        (0, $.jsxs)(`button`, {
                          type: `button`,
                          onClick: () => h(`logs`),
                          className: `pb-2.5 px-3 text-xs font-bold border-b-2 transition-all cursor-pointer flex items-center gap-1.5 ${m === `logs` ? `border-rose-600 text-rose-600` : `border-transparent text-slate-500 hover:text-slate-900`}`,
                          children: [
                            (0, $.jsx)(Y, { className: `w-3.5 h-3.5` }),
                            (0, $.jsxs)(`span`, {
                              children: [
                                `操作与变更日志 (`,
                                Z.logs?.length || 0,
                                `)`,
                              ],
                            }),
                          ],
                        }),
                        (0, $.jsxs)(`button`, {
                          type: `button`,
                          onClick: () => h(`config`),
                          className: `pb-2.5 px-3 text-xs font-bold border-b-2 transition-all cursor-pointer flex items-center gap-1.5 ${m === `config` ? `border-rose-600 text-rose-600` : `border-transparent text-slate-500 hover:text-slate-900`}`,
                          children: [
                            (0, $.jsx)(qe, { className: `w-3.5 h-3.5` }),
                            (0, $.jsx)(`span`, {
                              children: `台账规则与官方配置`,
                            }),
                          ],
                        }),
                        (0, $.jsxs)(`button`, {
                          type: `button`,
                          onClick: () => h(`billing`),
                          className: `pb-2.5 px-3 text-xs font-bold border-b-2 transition-all cursor-pointer flex items-center gap-1.5 ${m === `billing` ? `border-rose-600 text-rose-600` : `border-transparent text-slate-500 hover:text-slate-900`}`,
                          children: [
                            (0, $.jsx)(G, { className: `w-3.5 h-3.5` }),
                            (0, $.jsx)(`span`, { children: `计费与消耗分析` }),
                          ],
                        }),
                      ],
                    }),
                    m === `pushes` &&
                      Ve.length > 0 &&
                      (0, $.jsxs)(`button`, {
                        type: `button`,
                        onClick: () => {
                          if (!Z) return;
                          let e = Ve.map((e) => ({
                              台账编号: Z.id,
                              关键词: e.keyword,
                              平台:
                                e.platform === `douyin`
                                  ? `抖音短视频`
                                  : `今日头条`,
                              内容类型: e.contentType,
                              标题: e.title,
                              摘要: e.contentSnippet,
                              作者: e.author,
                              发布时间: e.publishTime,
                              官方接收时间: e.receivedTime,
                              时延毫秒: e.latencyMs,
                              单条扣费金额: e.charge,
                              点赞数: e.likes,
                              评论数: e.comments,
                              分享数: e.shares || 0,
                              阅读量: e.reads || 0,
                              原文链接: e.url,
                              火山事件ID: e.volcEventId,
                            })),
                            t =
                              `data:text/json;charset=utf-8,` +
                              encodeURIComponent(JSON.stringify(e, null, 2)),
                            n = document.createElement(`a`);
                          (n.setAttribute(`href`, t),
                            n.setAttribute(
                              `download`,
                              `Volcano_Push_Ledger_${Z.id}_${Z.keyword}.json`,
                            ),
                            document.body.appendChild(n),
                            n.click(),
                            n.remove(),
                            l(
                              `已导出台账【${Z.keyword}】的历史推送数据（共 ${Ve.length} 条）`,
                              `success`,
                            ));
                        },
                        className: `flex items-center gap-1 px-2.5 py-1 text-[11px] font-bold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer mb-2`,
                        children: [
                          (0, $.jsx)(K, { className: `w-3 h-3` }),
                          (0, $.jsx)(`span`, {
                            children: `导出推流数据 (JSON)`,
                          }),
                        ],
                      }),
                  ],
                }),
                (0, $.jsxs)(`div`, {
                  className: `flex-1 overflow-y-auto p-6 bg-slate-50/50`,
                  children: [
                    m === `pushes` &&
                      (0, $.jsxs)(`div`, {
                        className: `space-y-4`,
                        children: [
                          (0, $.jsxs)(`div`, {
                            className: `bg-white p-3 rounded-xl border border-slate-200/80 shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-3`,
                            children: [
                              (0, $.jsxs)(`div`, {
                                className: `flex items-center gap-2 flex-1`,
                                children: [
                                  (0, $.jsxs)(`div`, {
                                    className: `relative flex-1 max-w-sm`,
                                    children: [
                                      (0, $.jsx)(Be, {
                                        className: `w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2`,
                                      }),
                                      (0, $.jsx)(`input`, {
                                        type: `text`,
                                        value: g,
                                        onChange: (e) => _(e.target.value),
                                        placeholder: `搜索此台账内的推送标题、摘要、作者...`,
                                        className: `w-full h-8 pl-8 pr-3 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:border-rose-500 focus:outline-none`,
                                      }),
                                    ],
                                  }),
                                  (0, $.jsxs)(`select`, {
                                    value: v,
                                    onChange: (e) => y(e.target.value),
                                    className: `h-8 px-2.5 text-xs bg-slate-50 border border-slate-200 rounded-lg cursor-pointer`,
                                    children: [
                                      (0, $.jsx)(`option`, {
                                        value: `all`,
                                        children: `全部平台 (抖音/头条)`,
                                      }),
                                      (0, $.jsx)(`option`, {
                                        value: `douyin`,
                                        children: `仅看抖音短视频`,
                                      }),
                                      (0, $.jsx)(`option`, {
                                        value: `toutiao`,
                                        children: `仅看今日头条`,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, $.jsxs)(`div`, {
                                className: `flex items-center gap-2 text-xs`,
                                children: [
                                  (0, $.jsx)(`span`, {
                                    className: `text-slate-400 text-[11px]`,
                                    children: `排序:`,
                                  }),
                                  (0, $.jsxs)(`select`, {
                                    value: b,
                                    onChange: (e) => x(e.target.value),
                                    className: `h-8 px-2.5 text-xs bg-slate-50 border border-slate-200 rounded-lg cursor-pointer`,
                                    children: [
                                      (0, $.jsx)(`option`, {
                                        value: `newest`,
                                        children: `按接收时间倒序`,
                                      }),
                                      (0, $.jsx)(`option`, {
                                        value: `likes`,
                                        children: `按互动热度(点赞)`,
                                      }),
                                      (0, $.jsx)(`option`, {
                                        value: `cost`,
                                        children: `按扣费单价`,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          Ve.length === 0
                            ? (0, $.jsxs)(`div`, {
                                className: `bg-white p-12 text-center rounded-2xl border border-slate-200 shadow-2xs flex flex-col items-center gap-3`,
                                children: [
                                  (0, $.jsx)(`div`, {
                                    className: `w-12 h-12 rounded-2xl bg-rose-50 flex items-center justify-center text-rose-500`,
                                    children: (0, $.jsx)(Fe, {
                                      className: `w-6 h-6`,
                                    }),
                                  }),
                                  (0, $.jsxs)(`div`, {
                                    className: `flex flex-col gap-1`,
                                    children: [
                                      (0, $.jsx)(`span`, {
                                        className: `text-sm font-bold text-slate-700`,
                                        children: `该台账暂未收到官方推流数据`,
                                      }),
                                      (0, $.jsx)(`span`, {
                                        className: `text-xs text-slate-400`,
                                        children: `可点击下方按钮模拟火山官方网关传送一条数据并扣费测试`,
                                      }),
                                    ],
                                  }),
                                  (0, $.jsxs)(`button`, {
                                    type: `button`,
                                    onClick: (e) => Qe(Z, e),
                                    className: `mt-2 px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold rounded-xl transition-all cursor-pointer shadow-xs flex items-center gap-1.5`,
                                    children: [
                                      (0, $.jsx)(pt, {
                                        className: `w-3.5 h-3.5`,
                                      }),
                                      (0, $.jsx)(`span`, {
                                        children: `模拟火山官方下发数据`,
                                      }),
                                    ],
                                  }),
                                ],
                              })
                            : (0, $.jsx)(`div`, {
                                className: `space-y-3`,
                                children: Ve.map((e) => {
                                  let t = e.platform === `douyin`;
                                  return (0, $.jsxs)(
                                    `div`,
                                    {
                                      className: `bg-white border border-slate-200/90 hover:border-rose-300 rounded-xl p-4 shadow-xs flex flex-col gap-2.5 transition-all`,
                                      children: [
                                        (0, $.jsxs)(`div`, {
                                          className: `flex items-center justify-between gap-3 flex-wrap`,
                                          children: [
                                            (0, $.jsxs)(`div`, {
                                              className: `flex items-center gap-2`,
                                              children: [
                                                t
                                                  ? (0, $.jsx)(`span`, {
                                                      className: `px-2 py-0.5 rounded text-[11px] font-bold bg-neutral-900 text-white`,
                                                      children: `抖音短视频`,
                                                    })
                                                  : (0, $.jsx)(`span`, {
                                                      className: `px-2 py-0.5 rounded text-[11px] font-bold bg-rose-50 text-rose-700 border border-rose-200`,
                                                      children: `今日头条资讯`,
                                                    }),
                                                (0, $.jsxs)(`span`, {
                                                  className: `text-[10.5px] px-1.5 py-0.2 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 font-mono flex items-center gap-1`,
                                                  children: [
                                                    (0, $.jsx)(B, {
                                                      className: `w-3 h-3`,
                                                    }),
                                                    (0, $.jsx)(`span`, {
                                                      children: `官方数字签名验签通过`,
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                            (0, $.jsxs)(`div`, {
                                              className: `flex items-center gap-3 text-xs font-mono`,
                                              children: [
                                                (0, $.jsxs)(`span`, {
                                                  className: `text-slate-400`,
                                                  children: [
                                                    `时延: `,
                                                    (0, $.jsxs)(`strong`, {
                                                      className: `text-emerald-600`,
                                                      children: [
                                                        e.latencyMs,
                                                        `ms`,
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                                (0, $.jsxs)(`span`, {
                                                  className: `text-rose-600 font-bold bg-rose-50 px-2 py-0.5 rounded border border-rose-200`,
                                                  children: [
                                                    `扣费: -￥`,
                                                    e.charge.toFixed(3),
                                                  ],
                                                }),
                                                (0, $.jsx)(`span`, {
                                                  className: `text-slate-400`,
                                                  children: e.receivedTime,
                                                }),
                                                (0, $.jsx)(`button`, {
                                                  type: `button`,
                                                  onClick: () =>
                                                    E({
                                                      title: `火山官方推流原始报文 [${e.volcEventId}]`,
                                                      json: JSON.stringify(
                                                        e,
                                                        null,
                                                        2,
                                                      ),
                                                    }),
                                                  className: `text-[11px] text-slate-500 hover:text-slate-800 font-bold underline cursor-pointer`,
                                                  children: `查看报文`,
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        (0, $.jsxs)(`div`, {
                                          className: `flex flex-col gap-1`,
                                          children: [
                                            (0, $.jsxs)(`a`, {
                                              href: e.url,
                                              target: `_blank`,
                                              rel: `noreferrer`,
                                              className: `text-[13.5px] font-bold text-slate-900 hover:text-rose-600 flex items-center gap-1.5 transition-colors`,
                                              children: [
                                                (0, $.jsx)(`span`, {
                                                  children: e.title,
                                                }),
                                                (0, $.jsx)(ce, {
                                                  className: `w-3.5 h-3.5 text-slate-400`,
                                                }),
                                              ],
                                            }),
                                            (0, $.jsx)(`p`, {
                                              className: `text-xs text-slate-600 leading-relaxed`,
                                              children: e.contentSnippet,
                                            }),
                                          ],
                                        }),
                                        (0, $.jsxs)(`div`, {
                                          className: `flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-100 flex-wrap gap-2`,
                                          children: [
                                            (0, $.jsxs)(`div`, {
                                              className: `flex items-center gap-2`,
                                              children: [
                                                (0, $.jsx)(`span`, {
                                                  className: `font-semibold text-slate-700`,
                                                  children: e.author,
                                                }),
                                                (0, $.jsx)(`span`, {
                                                  children: `·`,
                                                }),
                                                (0, $.jsxs)(`span`, {
                                                  children: [
                                                    `发布时间: `,
                                                    e.publishTime,
                                                  ],
                                                }),
                                                (0, $.jsx)(`span`, {
                                                  children: `·`,
                                                }),
                                                (0, $.jsxs)(`span`, {
                                                  className: `font-mono text-[10px]`,
                                                  children: [
                                                    `事件ID: `,
                                                    e.volcEventId,
                                                  ],
                                                }),
                                              ],
                                            }),
                                            (0, $.jsxs)(`div`, {
                                              className: `flex items-center gap-3 font-mono text-[11px]`,
                                              children: [
                                                (0, $.jsxs)(`span`, {
                                                  children: [
                                                    `赞 `,
                                                    e.likes.toLocaleString(),
                                                  ],
                                                }),
                                                (0, $.jsxs)(`span`, {
                                                  children: [
                                                    `评 `,
                                                    e.comments.toLocaleString(),
                                                  ],
                                                }),
                                                e.shares !== void 0 &&
                                                  (0, $.jsxs)(`span`, {
                                                    children: [
                                                      `转 `,
                                                      e.shares.toLocaleString(),
                                                    ],
                                                  }),
                                                e.reads !== void 0 &&
                                                  (0, $.jsxs)(`span`, {
                                                    children: [
                                                      `播/读 `,
                                                      e.reads.toLocaleString(),
                                                    ],
                                                  }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    },
                                    e.id,
                                  );
                                }),
                              }),
                        ],
                      }),
                    m === `logs` &&
                      (0, $.jsxs)(`div`, {
                        className: `space-y-4`,
                        children: [
                          (0, $.jsxs)(`div`, {
                            className: `bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-2xs flex items-center justify-between`,
                            children: [
                              (0, $.jsxs)(`div`, {
                                className: `flex items-center gap-2`,
                                children: [
                                  (0, $.jsx)(Y, {
                                    className: `w-4 h-4 text-sky-600`,
                                  }),
                                  (0, $.jsx)(`span`, {
                                    className: `text-xs font-bold text-slate-800`,
                                    children: `台账全生命周期操作与变更存证日志`,
                                  }),
                                ],
                              }),
                              (0, $.jsxs)(`div`, {
                                className: `flex items-center gap-2`,
                                children: [
                                  (0, $.jsxs)(`select`, {
                                    value: S,
                                    onChange: (e) => w(e.target.value),
                                    className: `h-8 px-2.5 text-xs bg-slate-50 border border-slate-200 rounded-lg cursor-pointer`,
                                    children: [
                                      (0, $.jsx)(`option`, {
                                        value: `all`,
                                        children: `全部日志类型`,
                                      }),
                                      (0, $.jsx)(`option`, {
                                        value: `create`,
                                        children: `台账新建`,
                                      }),
                                      (0, $.jsx)(`option`, {
                                        value: `update`,
                                        children: `规则变更`,
                                      }),
                                      (0, $.jsx)(`option`, {
                                        value: `pause`,
                                        children: `暂停监听`,
                                      }),
                                      (0, $.jsx)(`option`, {
                                        value: `resume`,
                                        children: `恢复监听`,
                                      }),
                                      (0, $.jsx)(`option`, {
                                        value: `push_ingest`,
                                        children: `推流扣费`,
                                      }),
                                      (0, $.jsx)(`option`, {
                                        value: `manual_note`,
                                        children: `手动日志`,
                                      }),
                                    ],
                                  }),
                                  (0, $.jsxs)(`button`, {
                                    type: `button`,
                                    onClick: () => k(!0),
                                    className: `flex items-center gap-1 px-3 py-1.5 rounded-lg bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold transition-all cursor-pointer shadow-2xs`,
                                    children: [
                                      (0, $.jsx)(Pe, {
                                        className: `w-3.5 h-3.5`,
                                      }),
                                      (0, $.jsx)(`span`, {
                                        children: `手动增加日志`,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          Ue.length === 0
                            ? (0, $.jsx)(`div`, {
                                className: `bg-white p-12 text-center text-slate-400 rounded-xl border border-slate-200`,
                                children: `暂无相关操作日志`,
                              })
                            : (0, $.jsx)(`div`, {
                                className: `relative pl-6 space-y-6 before:content-[''] before:absolute before:left-2.5 before:top-3 before:bottom-3 before:w-0.5 before:bg-slate-200`,
                                children: Ue.map((e) => {
                                  let t = e.actionType === `push_ingest`,
                                    n = e.actionType === `create`,
                                    r = e.actionType === `pause`,
                                    i = e.actionType === `resume`;
                                  return (0, $.jsxs)(
                                    `div`,
                                    {
                                      className: `relative group`,
                                      children: [
                                        (0, $.jsx)(`div`, {
                                          className: `absolute -left-6 top-1.5 w-5 h-5 rounded-full border-2 border-white flex items-center justify-center text-[10px] font-bold shadow-xs ${n ? `bg-emerald-500 text-white` : t ? `bg-rose-500 text-white` : r ? `bg-amber-500 text-white` : i ? `bg-blue-500 text-white` : `bg-slate-700 text-white`}`,
                                          children: n
                                            ? `建`
                                            : t
                                              ? `流`
                                              : r
                                                ? `停`
                                                : i
                                                  ? `启`
                                                  : `记`,
                                        }),
                                        (0, $.jsxs)(`div`, {
                                          className: `bg-white p-4 rounded-xl border border-slate-200/90 shadow-2xs hover:border-slate-300 transition-all flex flex-col gap-1.5`,
                                          children: [
                                            (0, $.jsxs)(`div`, {
                                              className: `flex items-center justify-between gap-2 flex-wrap`,
                                              children: [
                                                (0, $.jsxs)(`div`, {
                                                  className: `flex items-center gap-2`,
                                                  children: [
                                                    (0, $.jsx)(`span`, {
                                                      className: `text-xs font-extrabold text-slate-900`,
                                                      children: e.actionTitle,
                                                    }),
                                                    e.tag &&
                                                      (0, $.jsx)(`span`, {
                                                        className: `px-2 py-0.2 rounded text-[10px] font-bold bg-slate-100 text-slate-600 border border-slate-200`,
                                                        children: e.tag,
                                                      }),
                                                  ],
                                                }),
                                                (0, $.jsxs)(`div`, {
                                                  className: `flex items-center gap-2 text-[11px] font-mono text-slate-400`,
                                                  children: [
                                                    (0, $.jsxs)(`span`, {
                                                      children: [
                                                        `操作人: `,
                                                        (0, $.jsx)(`strong`, {
                                                          className: `text-slate-700`,
                                                          children: e.operator,
                                                        }),
                                                      ],
                                                    }),
                                                    (0, $.jsx)(`span`, {
                                                      children: `·`,
                                                    }),
                                                    (0, $.jsx)(`span`, {
                                                      children: e.timestamp,
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                            (0, $.jsx)(`p`, {
                                              className: `text-xs text-slate-600 leading-relaxed`,
                                              children: e.details,
                                            }),
                                            e.payloadSnippet &&
                                              (0, $.jsx)(`div`, {
                                                className: `mt-1`,
                                                children: (0, $.jsxs)(
                                                  `button`,
                                                  {
                                                    type: `button`,
                                                    onClick: () =>
                                                      E({
                                                        title: `操作日志报文详情 [${e.id}]`,
                                                        json:
                                                          e.payloadSnippet ||
                                                          ``,
                                                      }),
                                                    className: `text-[11px] text-sky-600 hover:text-sky-800 font-bold flex items-center gap-1 cursor-pointer`,
                                                    children: [
                                                      (0, $.jsx)(ue, {
                                                        className: `w-3 h-3`,
                                                      }),
                                                      (0, $.jsx)(`span`, {
                                                        children: `查看操作参数报文 Payload`,
                                                      }),
                                                    ],
                                                  },
                                                ),
                                              }),
                                          ],
                                        }),
                                      ],
                                    },
                                    e.id,
                                  );
                                }),
                              }),
                        ],
                      }),
                    m === `config` &&
                      (0, $.jsxs)(`div`, {
                        className: `bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-5`,
                        children: [
                          (0, $.jsxs)(`div`, {
                            className: `flex items-center justify-between pb-3 border-b border-slate-100`,
                            children: [
                              (0, $.jsxs)(`div`, {
                                children: [
                                  (0, $.jsx)(`h4`, {
                                    className: `text-sm font-black text-slate-900`,
                                    children: `官方直连网关规则配置`,
                                  }),
                                  (0, $.jsx)(`p`, {
                                    className: `text-xs text-slate-500 mt-0.5`,
                                    children: `下发至火山引擎 DataBridge 网关的参数配置`,
                                  }),
                                ],
                              }),
                              (0, $.jsxs)(`button`, {
                                type: `button`,
                                onClick: () => Ke(Z),
                                className: `px-3.5 py-1.5 bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-xs font-bold cursor-pointer transition-all flex items-center gap-1.5 shadow-xs`,
                                children: [
                                  (0, $.jsx)(qe, { className: `w-3.5 h-3.5` }),
                                  (0, $.jsx)(`span`, {
                                    children: `修改订阅规则与配额`,
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, $.jsxs)(`div`, {
                            className: `grid grid-cols-1 md:grid-cols-2 gap-4 text-xs`,
                            children: [
                              (0, $.jsxs)(`div`, {
                                className: `p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col gap-1`,
                                children: [
                                  (0, $.jsx)(`span`, {
                                    className: `text-slate-400 font-medium text-[11px]`,
                                    children: `监控关键词`,
                                  }),
                                  (0, $.jsx)(`span`, {
                                    className: `font-bold text-slate-900 text-sm`,
                                    children: Z.keyword,
                                  }),
                                ],
                              }),
                              (0, $.jsxs)(`div`, {
                                className: `p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col gap-1`,
                                children: [
                                  (0, $.jsx)(`span`, {
                                    className: `text-slate-400 font-medium text-[11px]`,
                                    children: `订阅平台渠道`,
                                  }),
                                  (0, $.jsx)(`div`, {
                                    className: `flex items-center gap-1.5 mt-0.5`,
                                    children: Z.scope.map((e) =>
                                      (0, $.jsx)(
                                        `span`,
                                        {
                                          className: `px-2 py-0.5 rounded text-[11px] font-bold bg-slate-900 text-white`,
                                          children:
                                            e === `douyin`
                                              ? `抖音短视频`
                                              : `今日头条资讯`,
                                        },
                                        e,
                                      ),
                                    ),
                                  }),
                                ],
                              }),
                              (0, $.jsxs)(`div`, {
                                className: `p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col gap-1`,
                                children: [
                                  (0, $.jsx)(`span`, {
                                    className: `text-slate-400 font-medium text-[11px]`,
                                    children: `匹配模式`,
                                  }),
                                  (0, $.jsx)(`span`, {
                                    className: `font-bold text-slate-900`,
                                    children:
                                      Z.matchMode === `exact`
                                        ? `精准匹配 (Strict Exact Match)`
                                        : Z.matchMode === `fuzzy`
                                          ? `模糊匹配 (Token Fuzzy Match)`
                                          : `语义召回 (Semantic Deep Recall)`,
                                  }),
                                ],
                              }),
                              (0, $.jsxs)(`div`, {
                                className: `p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col gap-1`,
                                children: [
                                  (0, $.jsx)(`span`, {
                                    className: `text-slate-400 font-medium text-[11px]`,
                                    children: `单日推送上限 (熔断防超支)`,
                                  }),
                                  (0, $.jsxs)(`span`, {
                                    className: `font-bold font-mono text-slate-900`,
                                    children: [
                                      Z.dailyLimit.toLocaleString(),
                                      ` 条/日`,
                                    ],
                                  }),
                                ],
                              }),
                              (0, $.jsxs)(`div`, {
                                className: `p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col gap-1`,
                                children: [
                                  (0, $.jsx)(`span`, {
                                    className: `text-slate-400 font-medium text-[11px]`,
                                    children: `按量计费单价标准`,
                                  }),
                                  (0, $.jsxs)(`span`, {
                                    className: `font-bold font-mono text-rose-600`,
                                    children: [
                                      `￥`,
                                      Z.billingUnitPrice.toFixed(3),
                                      ` 元/条 (`,
                                      Z.billingUnitPrice * 1e3,
                                      `元/千条)`,
                                    ],
                                  }),
                                ],
                              }),
                              (0, $.jsxs)(`div`, {
                                className: `p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col gap-1`,
                                children: [
                                  (0, $.jsx)(`span`, {
                                    className: `text-slate-400 font-medium text-[11px]`,
                                    children: `火山接收 Webhook 回调地址`,
                                  }),
                                  (0, $.jsx)(`span`, {
                                    className: `font-mono text-[11px] text-slate-700 truncate`,
                                    children: Z.webhookUrl,
                                  }),
                                ],
                              }),
                              (0, $.jsxs)(`div`, {
                                className: `p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col gap-1 md:col-span-2`,
                                children: [
                                  (0, $.jsx)(`span`, {
                                    className: `text-slate-400 font-medium text-[11px]`,
                                    children: `负向排除过滤词`,
                                  }),
                                  (0, $.jsx)(`div`, {
                                    className: `flex flex-wrap gap-1.5 mt-0.5`,
                                    children:
                                      Z.excludeKeywords &&
                                      Z.excludeKeywords.length > 0
                                        ? Z.excludeKeywords.map((e) =>
                                            (0, $.jsx)(
                                              `span`,
                                              {
                                                className: `px-2 py-0.5 rounded text-[11px] bg-rose-50 text-rose-700 border border-rose-200 font-medium`,
                                                children: e,
                                              },
                                              e,
                                            ),
                                          )
                                        : (0, $.jsx)(`span`, {
                                            className: `text-slate-400`,
                                            children: `未设置负向过滤词`,
                                          }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    m === `billing` &&
                      (0, $.jsx)(`div`, {
                        className: `space-y-4`,
                        children: (0, $.jsxs)(`div`, {
                          className: `bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-4`,
                          children: [
                            (0, $.jsx)(`h4`, {
                              className: `text-sm font-black text-slate-900`,
                              children: `本台账财务消耗与对账明细`,
                            }),
                            (0, $.jsxs)(`div`, {
                              className: `grid grid-cols-1 sm:grid-cols-3 gap-3`,
                              children: [
                                (0, $.jsxs)(`div`, {
                                  className: `p-4 rounded-xl bg-slate-50 border border-slate-200`,
                                  children: [
                                    (0, $.jsx)(`span`, {
                                      className: `text-xs text-slate-400`,
                                      children: `今日累计扣费`,
                                    }),
                                    (0, $.jsxs)(`div`, {
                                      className: `text-2xl font-black font-mono text-rose-600 mt-1`,
                                      children: [`￥`, Z.todayCost.toFixed(2)],
                                    }),
                                    (0, $.jsxs)(`span`, {
                                      className: `text-[10px] text-slate-400 mt-1 block`,
                                      children: [
                                        `今日接收 `,
                                        Z.todayTotalPushes.toLocaleString(),
                                        ` 条`,
                                      ],
                                    }),
                                  ],
                                }),
                                (0, $.jsxs)(`div`, {
                                  className: `p-4 rounded-xl bg-slate-50 border border-slate-200`,
                                  children: [
                                    (0, $.jsx)(`span`, {
                                      className: `text-xs text-slate-400`,
                                      children: `累计产生扣费 (建账至今)`,
                                    }),
                                    (0, $.jsxs)(`div`, {
                                      className: `text-2xl font-black font-mono text-slate-900 mt-1`,
                                      children: [`￥`, Z.totalCost.toFixed(2)],
                                    }),
                                    (0, $.jsxs)(`span`, {
                                      className: `text-[10px] text-slate-400 mt-1 block`,
                                      children: [
                                        `累计推送 `,
                                        Z.totalPushes.toLocaleString(),
                                        ` 条`,
                                      ],
                                    }),
                                  ],
                                }),
                                (0, $.jsxs)(`div`, {
                                  className: `p-4 rounded-xl bg-slate-50 border border-slate-200`,
                                  children: [
                                    (0, $.jsx)(`span`, {
                                      className: `text-xs text-slate-400`,
                                      children: `计费结算费率`,
                                    }),
                                    (0, $.jsxs)(`div`, {
                                      className: `text-2xl font-black font-mono text-emerald-600 mt-1`,
                                      children: [`￥`, Z.billingUnitPrice],
                                    }),
                                    (0, $.jsx)(`span`, {
                                      className: `text-[10px] text-slate-400 mt-1 block`,
                                      children: `元/条 (官方实时直连通道)`,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                  ],
                }),
                (0, $.jsxs)(`div`, {
                  className: `px-6 py-3 border-t border-slate-200 bg-white flex items-center justify-between shrink-0`,
                  children: [
                    (0, $.jsxs)(`div`, {
                      className: `flex items-center gap-2 text-xs text-slate-400 font-mono`,
                      children: [
                        (0, $.jsxs)(`span`, {
                          children: [`台账唯一标识: `, Z.id],
                        }),
                        (0, $.jsx)(`span`, { children: `·` }),
                        (0, $.jsxs)(`span`, {
                          children: [`最近推流时间: `, Z.lastPushTime],
                        }),
                      ],
                    }),
                    (0, $.jsxs)(`div`, {
                      className: `flex items-center gap-2`,
                      children: [
                        (0, $.jsx)(`button`, {
                          type: `button`,
                          onClick: (e) => Ze(Z, e),
                          className: `px-3.5 py-1.5 text-xs font-bold rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 cursor-pointer transition-colors`,
                          children:
                            Z.status === `active`
                              ? `暂停此台账`
                              : `恢复监听此台账`,
                        }),
                        (0, $.jsx)(`button`, {
                          type: `button`,
                          onClick: (e) => Xe(Z, e),
                          className: `px-3.5 py-1.5 text-xs font-bold text-red-600 hover:bg-red-50 rounded-xl border border-red-200 cursor-pointer transition-colors`,
                          children: `注销此台账 (停止扣费)`,
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        U &&
          (0, $.jsx)(`div`, {
            className: `fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200`,
            children: (0, $.jsxs)(`div`, {
              className: `bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-xl max-h-[92vh] flex flex-col overflow-hidden animate-in zoom-in-95 duration-150`,
              onClick: (e) => e.stopPropagation(),
              children: [
                (0, $.jsxs)(`div`, {
                  className: `px-6 py-4 border-b border-slate-200 flex items-center justify-between shrink-0 bg-slate-50`,
                  children: [
                    (0, $.jsxs)(`div`, {
                      className: `flex items-center gap-2.5`,
                      children: [
                        (0, $.jsx)(`div`, {
                          className: `w-8 h-8 rounded-lg bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-600 font-bold`,
                          children: (0, $.jsx)(de, {
                            className: `w-4.5 h-4.5 fill-current`,
                          }),
                        }),
                        (0, $.jsxs)(`div`, {
                          children: [
                            (0, $.jsx)(`h3`, {
                              className: `text-sm font-black text-slate-900`,
                              children: q
                                ? `编辑关键词订阅台账`
                                : `新建关键词订阅台账 (火山官方直连)`,
                            }),
                            (0, $.jsx)(`p`, {
                              className: `text-[11px] text-slate-500`,
                              children: `向火山官方直通网关登记关键词台账，由官方实时下发命中数据并按量计费`,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, $.jsx)(`button`, {
                      type: `button`,
                      onClick: () => W(!1),
                      className: `w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:text-slate-600 hover:bg-slate-100 cursor-pointer`,
                      children: (0, $.jsx)(Q, { className: `w-4 h-4` }),
                    }),
                  ],
                }),
                (0, $.jsxs)(`form`, {
                  onSubmit: Ye,
                  className: `p-6 space-y-4 text-xs overflow-y-auto flex-1`,
                  children: [
                    (0, $.jsxs)(`div`, {
                      className: `flex flex-col gap-1.5`,
                      children: [
                        (0, $.jsxs)(`label`, {
                          className: `font-bold text-slate-700`,
                          children: [
                            `官方监听关键词 `,
                            (0, $.jsx)(`span`, {
                              className: `text-rose-500`,
                              children: `*`,
                            }),
                          ],
                        }),
                        (0, $.jsx)(`input`, {
                          type: `text`,
                          required: !0,
                          value: ge,
                          onChange: (e) => _e(e.target.value),
                          placeholder: `例如：具身智能与人形机器人研发进展 / 新能源汽车出海`,
                          className: `h-9 px-3 bg-white border border-slate-200 rounded-lg focus:border-rose-500 focus:outline-none`,
                        }),
                      ],
                    }),
                    (0, $.jsxs)(`div`, {
                      className: `flex flex-col gap-2`,
                      children: [
                        (0, $.jsxs)(`label`, {
                          className: `font-bold text-slate-700`,
                          children: [
                            `官方数据传送渠道 (至少勾选一项) `,
                            (0, $.jsx)(`span`, {
                              className: `text-rose-500`,
                              children: `*`,
                            }),
                          ],
                        }),
                        (0, $.jsxs)(`div`, {
                          className: `grid grid-cols-2 gap-3`,
                          children: [
                            (0, $.jsxs)(`label`, {
                              onClick: () => {
                                ye.includes(`douyin`)
                                  ? be((e) => e.filter((e) => e !== `douyin`))
                                  : be((e) => [...e, `douyin`]);
                              },
                              className: `p-3 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${ye.includes(`douyin`) ? `bg-neutral-900 text-white border-neutral-900 font-bold` : `bg-white border-slate-200 text-slate-600 hover:bg-slate-50`}`,
                              children: [
                                (0, $.jsxs)(`div`, {
                                  className: `flex flex-col`,
                                  children: [
                                    (0, $.jsx)(`span`, {
                                      className: `text-xs`,
                                      children: `抖音平台`,
                                    }),
                                    (0, $.jsx)(`span`, {
                                      className: `text-[10px] opacity-75 font-normal`,
                                      children: `短视频、图文笔记、热搜榜单`,
                                    }),
                                  ],
                                }),
                                ye.includes(`douyin`) &&
                                  (0, $.jsx)(P, { className: `w-4 h-4` }),
                              ],
                            }),
                            (0, $.jsxs)(`label`, {
                              onClick: () => {
                                ye.includes(`toutiao`)
                                  ? be((e) => e.filter((e) => e !== `toutiao`))
                                  : be((e) => [...e, `toutiao`]);
                              },
                              className: `p-3 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${ye.includes(`toutiao`) ? `bg-rose-50 text-rose-800 border-rose-300 font-bold` : `bg-white border-slate-200 text-slate-600 hover:bg-slate-50`}`,
                              children: [
                                (0, $.jsxs)(`div`, {
                                  className: `flex flex-col`,
                                  children: [
                                    (0, $.jsx)(`span`, {
                                      className: `text-xs`,
                                      children: `今日头条`,
                                    }),
                                    (0, $.jsx)(`span`, {
                                      className: `text-[10px] opacity-75 font-normal`,
                                      children: `资讯头条、微头条、头条问答`,
                                    }),
                                  ],
                                }),
                                ye.includes(`toutiao`) &&
                                  (0, $.jsx)(P, {
                                    className: `w-4 h-4 text-rose-600`,
                                  }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, $.jsxs)(`div`, {
                      className: `grid grid-cols-2 gap-3.5 p-3.5 bg-rose-50/50 rounded-xl border border-rose-200`,
                      children: [
                        (0, $.jsxs)(`div`, {
                          className: `flex flex-col gap-1`,
                          children: [
                            (0, $.jsx)(`label`, {
                              className: `font-bold text-rose-900 text-[11.5px]`,
                              children: `按量计费单价标准`,
                            }),
                            (0, $.jsxs)(`div`, {
                              className: `h-8.5 px-3 bg-white border border-rose-200 rounded-lg flex items-center font-mono font-bold text-rose-700 text-xs`,
                              children: [
                                `￥`,
                                Te.toFixed(3),
                                ` 元/条 (15元/千条)`,
                              ],
                            }),
                            (0, $.jsx)(`span`, {
                              className: `text-[10px] text-rose-600/80`,
                              children: `官方标准企业直连接口费率`,
                            }),
                          ],
                        }),
                        (0, $.jsxs)(`div`, {
                          className: `flex flex-col gap-1`,
                          children: [
                            (0, $.jsx)(`label`, {
                              className: `font-bold text-rose-900 text-[11.5px]`,
                              children: `每日推送上限 (熔断保护)`,
                            }),
                            (0, $.jsx)(`input`, {
                              type: `number`,
                              min: 100,
                              max: 1e5,
                              value: Ce,
                              onChange: (e) => we(Number(e.target.value)),
                              className: `h-8.5 px-3 bg-white border border-rose-200 rounded-lg font-mono font-bold text-xs focus:border-rose-500 focus:outline-none`,
                            }),
                            (0, $.jsx)(`span`, {
                              className: `text-[10px] text-rose-600/80`,
                              children: `当日达到此上限后停止接收防超额扣费`,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, $.jsxs)(`div`, {
                      className: `grid grid-cols-2 gap-3.5`,
                      children: [
                        (0, $.jsxs)(`div`, {
                          className: `flex flex-col gap-1.5`,
                          children: [
                            (0, $.jsx)(`label`, {
                              className: `font-bold text-slate-700`,
                              children: `命中匹配模式`,
                            }),
                            (0, $.jsxs)(`select`, {
                              value: xe,
                              onChange: (e) => Se(e.target.value),
                              className: `h-9 px-3 bg-slate-50 border border-slate-200 rounded-lg cursor-pointer`,
                              children: [
                                (0, $.jsx)(`option`, {
                                  value: `exact`,
                                  children: `精准匹配 (标题/正文严格包含)`,
                                }),
                                (0, $.jsx)(`option`, {
                                  value: `fuzzy`,
                                  children: `模糊匹配 (核心分词匹配)`,
                                }),
                                (0, $.jsx)(`option`, {
                                  value: `semantic`,
                                  children: `语义召回 (行业大模型同义扩展)`,
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, $.jsxs)(`div`, {
                          className: `flex flex-col gap-1.5`,
                          children: [
                            (0, $.jsx)(`label`, {
                              className: `font-bold text-slate-700`,
                              children: `录入责任人`,
                            }),
                            (0, $.jsxs)(`select`, {
                              value: Ae,
                              onChange: (e) => je(e.target.value),
                              className: `h-9 px-3 bg-slate-50 border border-slate-200 rounded-lg cursor-pointer`,
                              children: [
                                (0, $.jsx)(`option`, {
                                  value: `苏熙良`,
                                  children: `苏熙良`,
                                }),
                                (0, $.jsx)(`option`, {
                                  value: `刘锡科`,
                                  children: `刘锡科`,
                                }),
                                (0, $.jsx)(`option`, {
                                  value: `胡俨`,
                                  children: `胡俨`,
                                }),
                                (0, $.jsx)(`option`, {
                                  value: `郑雁`,
                                  children: `郑雁`,
                                }),
                                (0, $.jsx)(`option`, {
                                  value: `邓雁`,
                                  children: `邓雁`,
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, $.jsxs)(`div`, {
                      className: `flex flex-col gap-1.5`,
                      children: [
                        (0, $.jsx)(`label`, {
                          className: `font-bold text-slate-700`,
                          children: `负向排除词 (选填，避免无效扣费)`,
                        }),
                        (0, $.jsxs)(`div`, {
                          className: `flex items-center gap-2`,
                          children: [
                            (0, $.jsx)(`input`, {
                              type: `text`,
                              value: Oe,
                              onChange: (e) => ke(e.target.value),
                              onKeyDown: (e) => {
                                e.key === `Enter` &&
                                  (e.preventDefault(),
                                  Oe.trim() &&
                                    !X.includes(Oe.trim()) &&
                                    (De((e) => [...e, Oe.trim()]), ke(``)));
                              },
                              placeholder: `输入排除词按回车添加，如：玩具、二手、电影解说...`,
                              className: `flex-1 h-8.5 px-3 bg-white border border-slate-200 rounded-lg focus:border-rose-500 focus:outline-none`,
                            }),
                            (0, $.jsx)(`button`, {
                              type: `button`,
                              onClick: () => {
                                Oe.trim() &&
                                  !X.includes(Oe.trim()) &&
                                  (De((e) => [...e, Oe.trim()]), ke(``));
                              },
                              className: `h-8.5 px-3 rounded-lg bg-slate-100 hover:bg-slate-200 font-bold text-slate-700 cursor-pointer`,
                              children: `添加`,
                            }),
                          ],
                        }),
                        X.length > 0 &&
                          (0, $.jsx)(`div`, {
                            className: `flex flex-wrap gap-1.5 mt-1`,
                            children: X.map((e) =>
                              (0, $.jsxs)(
                                `span`,
                                {
                                  className: `inline-flex items-center gap-1 px-2 py-0.5 rounded bg-rose-50 text-rose-700 border border-rose-200 text-[11px]`,
                                  children: [
                                    (0, $.jsx)(`span`, { children: e }),
                                    (0, $.jsx)(Q, {
                                      className: `w-3 h-3 text-slate-400 hover:text-red-600 cursor-pointer`,
                                      onClick: () =>
                                        De((t) => t.filter((t) => t !== e)),
                                    }),
                                  ],
                                },
                                e,
                              ),
                            ),
                          }),
                      ],
                    }),
                    (0, $.jsxs)(`div`, {
                      className: `flex flex-col gap-1.5`,
                      children: [
                        (0, $.jsx)(`label`, {
                          className: `font-bold text-slate-700`,
                          children: `备注说明`,
                        }),
                        (0, $.jsx)(`input`, {
                          type: `text`,
                          value: Me,
                          onChange: (e) => Ne(e.target.value),
                          placeholder: `说明业务用途、重点跟踪项目等...`,
                          className: `h-8.5 px-3 bg-white border border-slate-200 rounded-lg focus:border-rose-500 focus:outline-none`,
                        }),
                      ],
                    }),
                    (0, $.jsxs)(`div`, {
                      className: `pt-4 border-t border-slate-200 flex justify-end gap-2.5`,
                      children: [
                        (0, $.jsx)(`button`, {
                          type: `button`,
                          onClick: () => W(!1),
                          className: `px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-xl cursor-pointer`,
                          children: `取消`,
                        }),
                        (0, $.jsxs)(`button`, {
                          type: `submit`,
                          className: `px-5 py-2 text-xs font-bold text-white bg-rose-600 hover:bg-rose-700 rounded-xl shadow-sm cursor-pointer flex items-center gap-1.5`,
                          children: [
                            (0, $.jsx)(P, { className: `w-3.5 h-3.5` }),
                            (0, $.jsx)(`span`, {
                              children: q
                                ? `保存修改并记入日志`
                                : `确认建账并下发官方订阅`,
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        D &&
          Z &&
          (0, $.jsx)(`div`, {
            className: `fixed inset-0 z-60 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200`,
            children: (0, $.jsxs)(`div`, {
              className: `bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-md overflow-hidden animate-in zoom-in-95 duration-150`,
              onClick: (e) => e.stopPropagation(),
              children: [
                (0, $.jsxs)(`div`, {
                  className: `px-5 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-50`,
                  children: [
                    (0, $.jsxs)(`div`, {
                      className: `flex items-center gap-2`,
                      children: [
                        (0, $.jsx)(Y, { className: `w-4 h-4 text-sky-600` }),
                        (0, $.jsxs)(`h4`, {
                          className: `text-xs font-black text-slate-900`,
                          children: [`为台账【`, Z.keyword, `】新增操作日志`],
                        }),
                      ],
                    }),
                    (0, $.jsx)(`button`, {
                      type: `button`,
                      onClick: () => k(!1),
                      className: `w-7 h-7 rounded-lg flex items-center justify-center text-slate-400 hover:bg-slate-200 cursor-pointer`,
                      children: (0, $.jsx)(Q, { className: `w-3.5 h-3.5` }),
                    }),
                  ],
                }),
                (0, $.jsxs)(`form`, {
                  onSubmit: (e) => {
                    if ((e.preventDefault(), !Z)) return;
                    if (!F.trim()) {
                      l(`请输入操作日志标题`, `error`);
                      return;
                    }
                    let t = new Date()
                        .toISOString()
                        .replace(`T`, ` `)
                        .substring(0, 19),
                      n = {
                        id: `LOG-${Z.id.replace(`VOKW-`, ``)}-${Date.now().toString().slice(-4)}`,
                        timestamp: t,
                        operator: A,
                        actionType: `manual_note`,
                        actionTitle: F.trim(),
                        details:
                          L.trim() || `操作人员手动记录的运维/规则调整备注。`,
                        tag: M,
                      };
                    (r((e) =>
                      e.map((e) =>
                        e.id === Z.id
                          ? { ...e, logs: [n, ...(e.logs || [])] }
                          : e,
                      ),
                    ),
                      k(!1),
                      I(``),
                      R(``),
                      l(
                        `已成功为台账【${Z.keyword}】增加操作日志！`,
                        `success`,
                      ));
                  },
                  className: `p-5 space-y-3.5 text-xs`,
                  children: [
                    (0, $.jsxs)(`div`, {
                      className: `flex flex-col gap-1`,
                      children: [
                        (0, $.jsx)(`label`, {
                          className: `font-bold text-slate-700`,
                          children: `操作人`,
                        }),
                        (0, $.jsxs)(`select`, {
                          value: A,
                          onChange: (e) => j(e.target.value),
                          className: `h-8.5 px-3 bg-slate-50 border border-slate-200 rounded-lg cursor-pointer`,
                          children: [
                            (0, $.jsx)(`option`, {
                              value: `苏熙良`,
                              children: `苏熙良`,
                            }),
                            (0, $.jsx)(`option`, {
                              value: `刘锡科`,
                              children: `刘锡科`,
                            }),
                            (0, $.jsx)(`option`, {
                              value: `胡俨`,
                              children: `胡俨`,
                            }),
                            (0, $.jsx)(`option`, {
                              value: `邓雁`,
                              children: `邓雁`,
                            }),
                            (0, $.jsx)(`option`, {
                              value: `管理员`,
                              children: `管理员`,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, $.jsxs)(`div`, {
                      className: `flex flex-col gap-1`,
                      children: [
                        (0, $.jsx)(`label`, {
                          className: `font-bold text-slate-700`,
                          children: `日志标签`,
                        }),
                        (0, $.jsxs)(`select`, {
                          value: M,
                          onChange: (e) => N(e.target.value),
                          className: `h-8.5 px-3 bg-slate-50 border border-slate-200 rounded-lg cursor-pointer`,
                          children: [
                            (0, $.jsx)(`option`, {
                              value: `规则变更`,
                              children: `规则变更`,
                            }),
                            (0, $.jsx)(`option`, {
                              value: `配额调整`,
                              children: `配额调整`,
                            }),
                            (0, $.jsx)(`option`, {
                              value: `业务沟通`,
                              children: `业务沟通`,
                            }),
                            (0, $.jsx)(`option`, {
                              value: `异常核查`,
                              children: `异常核查`,
                            }),
                            (0, $.jsx)(`option`, {
                              value: `数据审计`,
                              children: `数据审计`,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, $.jsxs)(`div`, {
                      className: `flex flex-col gap-1`,
                      children: [
                        (0, $.jsxs)(`label`, {
                          className: `font-bold text-slate-700`,
                          children: [
                            `操作日志标题 `,
                            (0, $.jsx)(`span`, {
                              className: `text-rose-500`,
                              children: `*`,
                            }),
                          ],
                        }),
                        (0, $.jsx)(`input`, {
                          type: `text`,
                          required: !0,
                          value: F,
                          onChange: (e) => I(e.target.value),
                          placeholder: `例如：核对抖音推流质量，追加负向过滤词`,
                          className: `h-8.5 px-3 bg-white border border-slate-200 rounded-lg focus:border-rose-500 focus:outline-none`,
                        }),
                      ],
                    }),
                    (0, $.jsxs)(`div`, {
                      className: `flex flex-col gap-1`,
                      children: [
                        (0, $.jsx)(`label`, {
                          className: `font-bold text-slate-700`,
                          children: `详细记录与说明`,
                        }),
                        (0, $.jsx)(`textarea`, {
                          rows: 3,
                          value: L,
                          onChange: (e) => R(e.target.value),
                          placeholder: `输入具体操作背景、变更原因与处理结果...`,
                          className: `p-2.5 bg-white border border-slate-200 rounded-lg focus:border-rose-500 focus:outline-none resize-none`,
                        }),
                      ],
                    }),
                    (0, $.jsxs)(`div`, {
                      className: `pt-3 border-t border-slate-200 flex justify-end gap-2`,
                      children: [
                        (0, $.jsx)(`button`, {
                          type: `button`,
                          onClick: () => k(!1),
                          className: `px-3.5 py-1.5 text-xs font-semibold text-slate-600 hover:bg-slate-200 rounded-lg cursor-pointer`,
                          children: `取消`,
                        }),
                        (0, $.jsx)(`button`, {
                          type: `submit`,
                          className: `px-4 py-1.5 text-xs font-bold text-white bg-rose-600 hover:bg-rose-700 rounded-lg cursor-pointer shadow-xs`,
                          children: `确认增加日志`,
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        T &&
          (0, $.jsx)(`div`, {
            className: `fixed inset-0 z-60 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200`,
            children: (0, $.jsxs)(`div`, {
              className: `bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-2xl max-h-[85vh] flex flex-col overflow-hidden animate-in zoom-in-95 duration-150`,
              onClick: (e) => e.stopPropagation(),
              children: [
                (0, $.jsxs)(`div`, {
                  className: `px-5 py-3.5 border-b border-slate-200 flex items-center justify-between bg-slate-50`,
                  children: [
                    (0, $.jsxs)(`div`, {
                      className: `flex items-center gap-2`,
                      children: [
                        (0, $.jsx)(ue, { className: `w-4 h-4 text-rose-600` }),
                        (0, $.jsx)(`h4`, {
                          className: `text-xs font-black text-slate-900 truncate max-w-md`,
                          children: T.title,
                        }),
                      ],
                    }),
                    (0, $.jsx)(`button`, {
                      type: `button`,
                      onClick: () => E(null),
                      className: `w-7 h-7 rounded-lg flex items-center justify-center text-slate-400 hover:bg-slate-200 cursor-pointer`,
                      children: (0, $.jsx)(Q, { className: `w-3.5 h-3.5` }),
                    }),
                  ],
                }),
                (0, $.jsx)(`div`, {
                  className: `p-4 overflow-y-auto flex-1 bg-slate-950 font-mono text-[11px] text-emerald-400 leading-relaxed`,
                  children: (0, $.jsx)(`pre`, {
                    className: `whitespace-pre-wrap`,
                    children: T.json,
                  }),
                }),
                (0, $.jsx)(`div`, {
                  className: `px-5 py-3 bg-slate-50 border-t border-slate-200 flex justify-end`,
                  children: (0, $.jsx)(`button`, {
                    type: `button`,
                    onClick: () => E(null),
                    className: `px-4 py-1.5 text-xs font-bold text-slate-700 bg-white border border-slate-200 hover:bg-slate-100 rounded-lg cursor-pointer shadow-2xs`,
                    children: `关闭`,
                  }),
                }),
              ],
            }),
          }),
        fe &&
          (0, $.jsx)(`div`, {
            className: `fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200`,
            children: (0, $.jsxs)(`div`, {
              className: `bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-md overflow-hidden animate-in zoom-in-95 duration-150`,
              onClick: (e) => e.stopPropagation(),
              children: [
                (0, $.jsxs)(`div`, {
                  className: `px-5 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-50`,
                  children: [
                    (0, $.jsxs)(`div`, {
                      className: `flex items-center gap-2`,
                      children: [
                        (0, $.jsx)(dt, {
                          className: `w-4 h-4 text-emerald-600`,
                        }),
                        (0, $.jsx)(`h4`, {
                          className: `text-xs font-black text-slate-900`,
                          children: `火山引擎官方账户资金充值`,
                        }),
                      ],
                    }),
                    (0, $.jsx)(`button`, {
                      type: `button`,
                      onClick: () => pe(!1),
                      className: `w-7 h-7 rounded-lg flex items-center justify-center text-slate-400 hover:bg-slate-200 cursor-pointer`,
                      children: (0, $.jsx)(Q, { className: `w-3.5 h-3.5` }),
                    }),
                  ],
                }),
                (0, $.jsxs)(`div`, {
                  className: `p-5 space-y-4 text-xs`,
                  children: [
                    (0, $.jsxs)(`div`, {
                      className: `p-3 rounded-xl bg-slate-50 border border-slate-200 flex justify-between items-center`,
                      children: [
                        (0, $.jsx)(`span`, {
                          className: `text-slate-500`,
                          children: `当前可用余额：`,
                        }),
                        (0, $.jsxs)(`span`, {
                          className: `font-black text-emerald-600 font-mono text-base`,
                          children: [
                            `￥`,
                            n.balance.toLocaleString(`zh-CN`, {
                              minimumFractionDigits: 2,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, $.jsxs)(`div`, {
                      className: `space-y-2`,
                      children: [
                        (0, $.jsx)(`label`, {
                          className: `font-bold text-slate-700`,
                          children: `快速充值面额：`,
                        }),
                        (0, $.jsx)(`div`, {
                          className: `grid grid-cols-3 gap-2`,
                          children: [2e3, 5e3, 1e4, 2e4, 5e4].map((e) =>
                            (0, $.jsxs)(
                              `button`,
                              {
                                type: `button`,
                                onClick: () => he(e),
                                className: `p-2.5 rounded-lg border font-mono font-bold text-xs cursor-pointer transition-all ${me === e ? `bg-emerald-50 border-emerald-500 text-emerald-700 ring-2 ring-emerald-500/20` : `bg-white border-slate-200 text-slate-700 hover:bg-slate-50`}`,
                                children: [`￥`, e.toLocaleString()],
                              },
                              e,
                            ),
                          ),
                        }),
                      ],
                    }),
                    (0, $.jsx)(`div`, {
                      className: `text-[11px] text-slate-500 leading-relaxed bg-amber-50 p-3 rounded-lg border border-amber-200 text-amber-900`,
                      children: `余额充足时系统自动扣费。若余额低于 ￥500 元，系统将向责任人发送短信/邮件充值预警，避免官方暂停推送。`,
                    }),
                  ],
                }),
                (0, $.jsxs)(`div`, {
                  className: `px-5 py-3 bg-slate-50 border-t border-slate-200 flex justify-end gap-2`,
                  children: [
                    (0, $.jsx)(`button`, {
                      type: `button`,
                      onClick: () => pe(!1),
                      className: `px-3.5 py-1.5 text-xs font-semibold text-slate-600 hover:bg-slate-200 rounded-lg cursor-pointer`,
                      children: `取消`,
                    }),
                    (0, $.jsxs)(`button`, {
                      type: `button`,
                      onClick: () => {
                        (a((e) => ({ ...e, balance: e.balance + me })),
                          pe(!1),
                          l(
                            `已成功为火山引擎官方专户充值 ￥${me.toLocaleString()} 元！当前余额 ￥${(n.balance + me).toLocaleString()}`,
                            `success`,
                          ));
                      },
                      className: `px-4 py-1.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg cursor-pointer shadow-xs`,
                      children: [`确认充值 ￥`, me.toLocaleString()],
                    }),
                  ],
                }),
              ],
            }),
          }),
      ],
    });
  },
  In = ({ isOpen: e, initialVendorKey: t, onClose: n, onLocateService: r }) => {
    let [i, a] = (0, C.useState)(Mt),
      [o, s] = (0, C.useState)(t),
      [c, l] = (0, C.useState)(`all`),
      [u, d] = (0, C.useState)(``),
      [f, p] = (0, C.useState)(`all`),
      [m, h] = (0, C.useState)(null),
      [g, _] = (0, C.useState)(``),
      [v, y] = (0, C.useState)(`key`),
      [b, x] = (0, C.useState)(``),
      [S, w] = (0, C.useState)(``),
      [T, D] = (0, C.useState)(``),
      [O, k] = (0, C.useState)(``),
      [A, j] = (0, C.useState)(!1),
      [ee, M] = (0, C.useState)(!1),
      [N, F] = (0, C.useState)(!1),
      [I, L] = (0, C.useState)(t),
      [R, te] = (0, C.useState)(``),
      [z, B] = (0, C.useState)(``),
      [ne, V] = (0, C.useState)(``),
      [re, ie] = (0, C.useState)(``),
      [H, ae] = (0, C.useState)(``),
      [se, U] = (0, C.useState)(`key`),
      [W, G] = (0, C.useState)(``),
      [K, ce] = (0, C.useState)(``),
      [J, ue] = (0, C.useState)(``),
      [Y, de] = (0, C.useState)(!1),
      [fe, pe] = (0, C.useState)(!1),
      [me, he] = (0, C.useState)(`20 ms`),
      [ge, _e] = (0, C.useState)(`99.8%`),
      [ve, ye] = (0, C.useState)(null),
      [xe, we] = (0, C.useState)(null),
      [Te, Ee] = (0, C.useState)(!1),
      [X, De] = (0, C.useState)(null),
      ke = (e) => {
        (ye(e),
          setTimeout(() => {
            ye(null);
          }, 3e3));
      },
      Ae = (e, t) => {
        e &&
          (navigator.clipboard.writeText(e),
          we(t),
          setTimeout(() => we(null), 1800));
      };
    if (!e) return null;
    let je = i[o] || i.kuai,
      Me = (e, t) => {
        if (!t || t === `all`) return !0;
        let n = (e || ``).toLowerCase();
        return t === `auto`
          ? n.includes(`自增`) || n.includes(`auto`)
          : t === `plate`
            ? n.includes(`板块`) || n.includes(`plate`)
            : t === `deep`
              ? n.includes(`深度`) || n.includes(`deep`)
              : n === t.toLowerCase();
      },
      Ne = [];
    if (c === `all`)
      je.channels.forEach((e) => {
        e.sites.forEach((t) => {
          Ne.push({
            ...t,
            channelName: e.name,
            channelShort: e.shortName,
            channelAlias: e.alias,
            authType: e.authType,
            authKey: e.authKey,
            authUsername: e.authUsername,
          });
        });
      });
    else {
      let e = je.channels.find((e) => e.id === c);
      e &&
        e.sites.forEach((t) => {
          Ne.push({
            ...t,
            channelName: e.name,
            channelShort: e.shortName,
            channelAlias: e.alias,
            authType: e.authType,
            authKey: e.authKey,
            authUsername: e.authUsername,
          });
        });
    }
    let Fe = Ne.filter((e) => {
        if (!Me(e.method, f)) return !1;
        if (!u.trim()) return !0;
        let t = u.toLowerCase();
        return (
          e.id.toLowerCase().includes(t) ||
          e.name.toLowerCase().includes(t) ||
          e.url.toLowerCase().includes(t) ||
          (e.channelName && e.channelName.toLowerCase().includes(t)) ||
          (e.channelAlias && e.channelAlias.toLowerCase().includes(t)) ||
          e.method.toLowerCase().includes(t)
        );
      }),
      Ie = (e) => {
        (s(e), l(`all`), d(``), p(`all`));
      },
      Le = (e, t) => {
        (t && t.stopPropagation(),
          h(e),
          _(e.alias || ``),
          y(e.authType || `key`),
          x(e.authKey || ``),
          w(e.authUsername || ``),
          D(e.authPassword || ``),
          k(e.proxyHost || ``),
          j(!1),
          M(!1),
          De(null));
      },
      Re = () => {
        if (!m) return;
        let e = je.channels.map((e) =>
            e.id === m.id
              ? {
                  ...e,
                  alias: g.trim() || void 0,
                  authType: v,
                  authKey: b.trim(),
                  authUsername: S.trim(),
                  authPassword: T.trim(),
                  proxyHost: O.trim() || e.proxyHost,
                }
              : e,
          ),
          t = { ...je, channels: e };
        (a((e) => ({ ...e, [o]: t })),
          ke(`已成功保存【${m.shortName}】通道别名与认证凭证！`),
          h(null));
      },
      ze = (e) => {
        let t = e || o;
        L(t);
        let n = i[t].channels.length + 1,
          r = `${t === `kuai` ? `KP-CH` : t === `zhima` ? `ZM-CH` : `AB-CH`}-0${n}`;
        (te(r),
          B(`${r} 新建业务专属通道`),
          V(`业务专线 0${n}`),
          ie(`专用于高频业务数据采集与高可用负载均衡`),
          ae(
            t === `kuai`
              ? `gateway-east.qingguo.com:188${n}0`
              : t === `zhima`
                ? `res-cluster.paapa.com:210${n}0`
                : `tunnel-pro.yawen.com:90${n}0`,
          ),
          U(`key`),
          G(`${t}_sec_token_${Math.random().toString(36).slice(2, 10)}`),
          ce(`user_${t}_0${n}`),
          ue(`Pwd#${t.toUpperCase()}_2026!Live`),
          he(`19 ms`),
          _e(`99.9%`),
          de(!1),
          pe(!1),
          De(null),
          F(!0));
      },
      Z = () => {
        if (!ne.trim()) {
          ke(`请输入通道别名！`);
          return;
        }
        let e = i[I].channels.length + 1,
          t = I === `kuai` ? `KP-CH` : I === `zhima` ? `ZM-CH` : `AB-CH`,
          n = R.trim() || `${t}-0${e}`,
          r = ne.trim(),
          c = {
            id: n,
            name: r,
            shortName: n,
            alias: r,
            desc: `${r} 业务通道`,
            siteCount: 0,
            latency: me || `20 ms`,
            successRate: ge || `99.8%`,
            todayReq: `0 万`,
            authType: se,
            authKey: W.trim(),
            authUsername: K.trim(),
            authPassword: J.trim(),
            proxyHost: H.trim() || `gateway.proxy.com:8080`,
            sites: [],
          },
          u = i[I],
          d = [...u.channels, c],
          f = { ...u, channels: d };
        (a((e) => ({ ...e, [I]: f })),
          o !== I && s(I),
          l(c.id),
          F(!1),
          ke(`🎉 成功创建通道【${c.shortName} · ${c.alias || ``}】！`));
      },
      Ve = () => {
        (Ee(!0),
          De(null),
          setTimeout(() => {
            (Ee(!1), De(`success`));
          }, 600));
      };
    return (
      je.channels.find((e) => e.id === c),
      (0, $.jsxs)(`div`, {
        className: `fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4`,
        children: [
          (0, $.jsxs)(`div`, {
            className: `bg-white rounded-2xl border border-slate-200/80 shadow-2xl overflow-hidden max-w-[1150px] w-full flex flex-col max-h-[92vh] animate-in fade-in zoom-in-95 duration-150 relative`,
            children: [
              ve &&
                (0, $.jsxs)(`div`, {
                  className: `absolute top-4 left-1/2 -translate-x-1/2 z-70 bg-slate-900 text-white px-4 py-2 rounded-lg text-xs font-semibold shadow-xl flex items-center gap-2 border border-slate-700 animate-in fade-in slide-from-top-2`,
                  children: [
                    (0, $.jsx)(P, { className: `w-4 h-4 text-emerald-400` }),
                    (0, $.jsx)(`span`, { children: ve }),
                  ],
                }),
              (0, $.jsxs)(`div`, {
                className: `px-6 py-3.5 border-b border-slate-200 bg-slate-50/85 flex items-center justify-between`,
                children: [
                  (0, $.jsxs)(`div`, {
                    className: `flex flex-col`,
                    children: [
                      (0, $.jsxs)(`h3`, {
                        className: `text-[15px] font-extrabold text-slate-900 flex items-center gap-2`,
                        children: [
                          (0, $.jsx)(Ce, {
                            className: `w-4 h-4 text-[#0066FF]`,
                          }),
                          (0, $.jsx)(`span`, {
                            children: `代理应用情况与供应商矩阵`,
                          }),
                          (0, $.jsx)(`span`, {
                            className: `text-[10px] font-bold px-2 py-0.5 bg-blue-50 text-[#0066FF] border border-blue-200 rounded`,
                            children: `通道认证与别名管理`,
                          }),
                        ],
                      }),
                      (0, $.jsx)(`p`, {
                        className: `text-[11px] text-slate-500 mt-0.5`,
                        children: `下钻查看 3 大供应商所提供的独立通道矩阵，支持针对每个通道独立设置账号密码/Key认证凭据及通道别名`,
                      }),
                    ],
                  }),
                  (0, $.jsxs)(`div`, {
                    className: `flex items-center gap-2`,
                    children: [
                      (0, $.jsxs)(`button`, {
                        type: `button`,
                        onClick: () => ze(o),
                        className: `h-7.5 px-3 rounded-lg bg-[#0066FF] hover:bg-[#0052cc] text-white text-xs font-bold transition-all shadow-2xs flex items-center gap-1 cursor-pointer`,
                        children: [
                          (0, $.jsx)(Pe, { className: `w-3.5 h-3.5` }),
                          (0, $.jsx)(`span`, { children: `新建通道` }),
                        ],
                      }),
                      (0, $.jsx)(`button`, {
                        type: `button`,
                        onClick: n,
                        className: `w-7.5 h-7.5 rounded-lg flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-200/80 transition-colors cursor-pointer`,
                        children: (0, $.jsx)(Q, { className: `w-4 h-4` }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, $.jsx)(`div`, {
                className: `flex items-center gap-2 px-6 border-b border-slate-200 bg-slate-50/50`,
                children: [`kuai`, `zhima`, `abuyun`].map((e) => {
                  let t = i[e],
                    n = o === e;
                  return (0, $.jsxs)(
                    `button`,
                    {
                      type: `button`,
                      onClick: () => Ie(e),
                      className: `py-2.5 px-4 text-xs font-bold border-b-2 flex items-center gap-2 transition-all cursor-pointer ${n ? `border-[#0066FF] text-[#0066FF]` : `border-transparent text-slate-600 hover:text-slate-900`}`,
                      children: [
                        (0, $.jsx)(`span`, {
                          style: { backgroundColor: t.color },
                          className: `w-2 h-2 rounded-full shrink-0`,
                        }),
                        (0, $.jsx)(`span`, { children: t.name }),
                        (0, $.jsxs)(`span`, {
                          className: `text-[10px] font-mono px-1.5 py-0.5 rounded-full ${n ? `bg-blue-50 text-[#0066FF] border border-blue-200` : `bg-slate-200 text-slate-600`}`,
                          children: [
                            t.totalSites,
                            ` 站 · `,
                            t.channels.length,
                            ` 通道`,
                          ],
                        }),
                      ],
                    },
                    e,
                  );
                }),
              }),
              (0, $.jsxs)(`div`, {
                className: `p-5 overflow-y-auto space-y-3.5`,
                children: [
                  (0, $.jsxs)(`div`, {
                    children: [
                      (0, $.jsx)(`div`, {
                        className: `text-[11.5px] font-bold text-slate-700 mb-2`,
                        children: (0, $.jsx)(`span`, {
                          children: `选择通道下钻查询绑定的网站（点击卡片即时切换）：`,
                        }),
                      }),
                      (0, $.jsxs)(`div`, {
                        className: `grid grid-cols-2 sm:grid-cols-4 gap-2.5`,
                        children: [
                          (0, $.jsx)(`div`, {
                            onClick: () => l(`all`),
                            className: `border rounded-lg p-2.5 bg-white cursor-pointer transition-all flex flex-col justify-between ${c === `all` ? `border-[#0066FF] bg-blue-50/40 ring-2 ring-[#0066FF]/20 shadow-xs` : `border-slate-200 hover:border-blue-300 hover:bg-slate-50/70`}`,
                            children: (0, $.jsxs)(`div`, {
                              children: [
                                (0, $.jsxs)(`div`, {
                                  className: `flex items-center justify-between`,
                                  children: [
                                    (0, $.jsxs)(`span`, {
                                      className: `text-xs font-extrabold text-slate-900 flex items-center gap-1.5`,
                                      children: [
                                        (0, $.jsx)(`span`, {
                                          style: { backgroundColor: je.color },
                                          className: `w-1.5 h-1.5 rounded-full`,
                                        }),
                                        `全部通道 (汇总)`,
                                      ],
                                    }),
                                    (0, $.jsxs)(`span`, {
                                      className: `text-[10px] font-mono px-1.5 py-0.2 rounded bg-slate-100 text-slate-600 font-bold`,
                                      children: [je.totalSites, ` 站`],
                                    }),
                                  ],
                                }),
                                (0, $.jsxs)(`p`, {
                                  className: `text-[10.5px] text-slate-500 line-clamp-1 mt-1`,
                                  children: [
                                    `汇总查看全部 `,
                                    je.channels.length,
                                    ` 个通道`,
                                  ],
                                }),
                              ],
                            }),
                          }),
                          je.channels.map((e) => {
                            let t = c === e.id,
                              n = e.authType === `key`;
                            return (0, $.jsx)(
                              `div`,
                              {
                                onClick: () => l(e.id),
                                className: `border rounded-lg p-2.5 bg-white cursor-pointer transition-all flex flex-col justify-between relative group ${t ? `border-[#0066FF] bg-blue-50/40 ring-2 ring-[#0066FF]/20 shadow-xs` : `border-slate-200 hover:border-blue-300 hover:bg-slate-50/70`}`,
                                children: (0, $.jsxs)(`div`, {
                                  children: [
                                    (0, $.jsxs)(`div`, {
                                      className: `flex items-start justify-between gap-1`,
                                      children: [
                                        (0, $.jsx)(`div`, {
                                          className: `flex flex-col`,
                                          children: (0, $.jsx)(`span`, {
                                            className: `text-xs font-bold text-slate-900 flex items-center gap-1`,
                                            children: (0, $.jsx)(`span`, {
                                              children: e.alias || e.shortName,
                                            }),
                                          }),
                                        }),
                                        (0, $.jsxs)(`div`, {
                                          className: `flex items-center gap-1`,
                                          children: [
                                            (0, $.jsx)(`button`, {
                                              type: `button`,
                                              onClick: (t) => Le(e, t),
                                              className: `p-1 text-slate-400 hover:text-[#0066FF] hover:bg-blue-50 rounded transition-colors`,
                                              title: `设置【${e.alias || e.shortName}】账号密码/Key与别名`,
                                              children: (0, $.jsx)(Ue, {
                                                className: `w-3.5 h-3.5`,
                                              }),
                                            }),
                                            (0, $.jsxs)(`span`, {
                                              style: { color: je.color },
                                              className: `text-[10px] font-mono px-1.5 py-0.2 rounded bg-slate-100 font-bold shrink-0`,
                                              children: [e.siteCount, ` 站`],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, $.jsx)(`div`, {
                                      className: `mt-1 flex items-center gap-1 flex-wrap`,
                                      children: n
                                        ? (0, $.jsxs)(`span`, {
                                            className: `inline-flex items-center gap-1 text-[10px] font-mono px-1.5 py-0.2 bg-purple-50 text-purple-700 border border-purple-200 rounded font-bold`,
                                            title: `Key认证: ${e.authKey || `已配置`}`,
                                            children: [
                                              (0, $.jsx)(Se, {
                                                className: `w-2.5 h-2.5`,
                                              }),
                                              (0, $.jsxs)(`span`, {
                                                children: [
                                                  `Key: `,
                                                  e.authKey
                                                    ? `${e.authKey.slice(0, 6)}***`
                                                    : `已配置`,
                                                ],
                                              }),
                                            ],
                                          })
                                        : (0, $.jsxs)(`span`, {
                                            className: `inline-flex items-center gap-1 text-[10px] font-mono px-1.5 py-0.2 bg-amber-50 text-amber-800 border border-amber-200 rounded font-bold`,
                                            title: `账密认证: ${e.authUsername || `已配置`}`,
                                            children: [
                                              (0, $.jsx)(lt, {
                                                className: `w-2.5 h-2.5`,
                                              }),
                                              (0, $.jsxs)(`span`, {
                                                children: [
                                                  `账密: `,
                                                  e.authUsername || `已配置`,
                                                ],
                                              }),
                                            ],
                                          }),
                                    }),
                                  ],
                                }),
                              },
                              e.id,
                            );
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, $.jsxs)(`div`, {
                    className: `flex flex-col lg:flex-row lg:items-center justify-between gap-3 bg-slate-50 p-2.5 px-3.5 rounded-lg border border-slate-200`,
                    children: [
                      (0, $.jsxs)(`div`, {
                        className: `flex flex-wrap items-center gap-2.5 flex-1`,
                        children: [
                          (0, $.jsxs)(`div`, {
                            className: `relative flex-1 min-w-[240px] max-w-[340px]`,
                            children: [
                              (0, $.jsx)(Be, {
                                className: `w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none`,
                              }),
                              (0, $.jsx)(`input`, {
                                type: `text`,
                                value: u,
                                onChange: (e) => d(e.target.value),
                                placeholder: `输入网站名称、台账ID、通道别名或域名检索...`,
                                className: `w-full h-8 pl-8 pr-3 rounded-md border border-slate-200 bg-white text-xs text-slate-800 focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF] transition-all outline-none`,
                              }),
                            ],
                          }),
                          (0, $.jsxs)(`div`, {
                            className: `flex items-center gap-1.5`,
                            children: [
                              (0, $.jsx)(`span`, {
                                className: `text-[11.5px] font-bold text-slate-600 shrink-0`,
                                children: `采集方式:`,
                              }),
                              (0, $.jsxs)(`select`, {
                                value: f,
                                onChange: (e) => p(e.target.value),
                                className: `h-8 px-2.5 py-1 text-xs border border-slate-200 bg-white rounded-md text-slate-800 font-medium focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF] outline-none cursor-pointer hover:border-slate-300 transition-colors shadow-2xs`,
                                children: [
                                  (0, $.jsx)(`option`, {
                                    value: `all`,
                                    children: `全部采集方式`,
                                  }),
                                  (0, $.jsx)(`option`, {
                                    value: `auto`,
                                    children: `ID自增长`,
                                  }),
                                  (0, $.jsx)(`option`, {
                                    value: `plate`,
                                    children: `板块轮询`,
                                  }),
                                  (0, $.jsx)(`option`, {
                                    value: `deep`,
                                    children: `深度采集`,
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (u || f !== `all`) &&
                            (0, $.jsx)(`button`, {
                              type: `button`,
                              onClick: () => {
                                (d(``), p(`all`));
                              },
                              className: `h-8 px-2.5 text-xs text-slate-500 hover:text-slate-800 hover:bg-slate-200/70 rounded-md transition-colors font-medium cursor-pointer`,
                              children: `重置筛选`,
                            }),
                        ],
                      }),
                      (0, $.jsxs)(`div`, {
                        className: `flex items-center gap-2 text-xs text-slate-600 shrink-0`,
                        children: [
                          (0, $.jsxs)(`span`, {
                            children: [
                              `当前筛选通道：`,
                              (0, $.jsx)(`strong`, {
                                className: `text-[#0066FF]`,
                                children:
                                  c === `all`
                                    ? `全部通道`
                                    : `${je.channels.find((e) => e.id === c)?.shortName}${je.channels.find((e) => e.id === c)?.alias ? ` (${je.channels.find((e) => e.id === c)?.alias})` : ``}`,
                              }),
                            ],
                          }),
                          (0, $.jsx)(`span`, {
                            className: `text-slate-300`,
                            children: `|`,
                          }),
                          (0, $.jsxs)(`span`, {
                            children: [
                              `绑定网站：共 `,
                              (0, $.jsx)(`strong`, {
                                className: `font-mono text-slate-800`,
                                children: Ne.length,
                              }),
                              ` 个（匹配显示：`,
                              (0, $.jsx)(`strong`, {
                                className: `font-mono text-[#0066FF]`,
                                children: Fe.length,
                              }),
                              ` 个）`,
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, $.jsx)(`div`, {
                    className: `border border-slate-200 rounded-lg overflow-hidden bg-white max-h-[380px] overflow-y-auto`,
                    children: (0, $.jsxs)(`table`, {
                      className: `w-full border-collapse text-[12px] text-left`,
                      children: [
                        (0, $.jsx)(`thead`, {
                          className: `sticky top-0 bg-slate-50/95 shadow-xs z-10 border-b border-slate-200`,
                          children: (0, $.jsxs)(`tr`, {
                            className: `text-[11px] font-extrabold text-slate-500 uppercase tracking-wide`,
                            children: [
                              (0, $.jsx)(`th`, {
                                className: `py-2.5 px-3 w-[100px]`,
                                children: `台账ID`,
                              }),
                              (0, $.jsx)(`th`, {
                                className: `py-2.5 px-3 min-w-[180px]`,
                                children: `绑定网站服务名称`,
                              }),
                              (0, $.jsx)(`th`, {
                                className: `py-2.5 px-3 min-w-[220px]`,
                                children: `目标域名 / 采集入口URL`,
                              }),
                              (0, $.jsx)(`th`, {
                                className: `py-2.5 px-3 min-w-[190px]`,
                                children: `绑定通道 (别名 / 凭据)`,
                              }),
                              (0, $.jsx)(`th`, {
                                className: `py-2.5 px-3 w-[100px]`,
                                children: `采集解析方式`,
                              }),
                              (0, $.jsx)(`th`, {
                                className: `py-2.5 px-3 w-[70px] text-center`,
                                children: `状态`,
                              }),
                              (0, $.jsx)(`th`, {
                                className: `py-2.5 px-3 w-[75px] text-right`,
                                children: `操作`,
                              }),
                            ],
                          }),
                        }),
                        (0, $.jsx)(`tbody`, {
                          className: `divide-y divide-slate-100`,
                          children:
                            Fe.length === 0
                              ? (0, $.jsx)(`tr`, {
                                  children: (0, $.jsxs)(`td`, {
                                    colSpan: 7,
                                    className: `py-10 text-center text-slate-400`,
                                    children: [
                                      `未检索到匹配的绑定网站（当前通道共绑定 `,
                                      Ne.length,
                                      ` 个网站）`,
                                    ],
                                  }),
                                })
                              : Fe.map((e) =>
                                  (0, $.jsxs)(
                                    `tr`,
                                    {
                                      className: `hover:bg-slate-50/70 transition-colors`,
                                      children: [
                                        (0, $.jsx)(`td`, {
                                          className: `py-2 px-3 whitespace-nowrap`,
                                          children: (0, $.jsx)(`span`, {
                                            className: `font-mono text-[11px] font-bold text-[#1e376b] bg-[#D5EBFE]/30 border border-[#c2dffc] px-1.5 py-0.5 rounded inline-block`,
                                            children: e.id,
                                          }),
                                        }),
                                        (0, $.jsx)(`td`, {
                                          className: `py-2 px-3 font-bold text-slate-900`,
                                          children: (0, $.jsx)(`button`, {
                                            type: `button`,
                                            onClick: () => {
                                              (r(e.id), n());
                                            },
                                            className: `hover:text-[#0066FF] hover:underline cursor-pointer text-left`,
                                            title: `点击在主列表中定位此服务`,
                                            children: e.name,
                                          }),
                                        }),
                                        (0, $.jsx)(`td`, {
                                          className: `py-2 px-3 font-mono text-[11px] text-slate-600 break-all`,
                                          children: e.url,
                                        }),
                                        (0, $.jsx)(`td`, {
                                          className: `py-2 px-3`,
                                          children: (0, $.jsxs)(`div`, {
                                            className: `flex flex-col gap-1`,
                                            children: [
                                              (0, $.jsxs)(`span`, {
                                                className: `inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-bold bg-blue-50 text-blue-900 border border-blue-200/90 w-fit`,
                                                children: [
                                                  (0, $.jsx)(`span`, {
                                                    style: {
                                                      backgroundColor: je.color,
                                                    },
                                                    className: `w-1.5 h-1.5 rounded-full shrink-0`,
                                                  }),
                                                  (0, $.jsx)(`span`, {
                                                    children:
                                                      e.channelAlias ||
                                                      `境内自增长-专线`,
                                                  }),
                                                ],
                                              }),
                                              e.authType === `key`
                                                ? (0, $.jsxs)(`span`, {
                                                    className: `inline-flex items-center gap-1 text-[10px] font-mono px-1.5 py-0.2 bg-purple-50 text-purple-700 border border-purple-200 rounded font-semibold w-fit`,
                                                    title: `API Key: ${e.authKey || `已配置`}`,
                                                    children: [
                                                      (0, $.jsx)(Se, {
                                                        className: `w-2.5 h-2.5 shrink-0 text-purple-600`,
                                                      }),
                                                      (0, $.jsxs)(`span`, {
                                                        children: [
                                                          `Key: `,
                                                          e.authKey
                                                            ? `${e.authKey.slice(0, 8)}...`
                                                            : `已配置`,
                                                        ],
                                                      }),
                                                    ],
                                                  })
                                                : (0, $.jsxs)(`span`, {
                                                    className: `inline-flex items-center gap-1 text-[10px] font-mono px-1.5 py-0.2 bg-amber-50 text-amber-800 border border-amber-200 rounded font-semibold w-fit`,
                                                    title: `账号: ${e.authUsername || `已配置`}`,
                                                    children: [
                                                      (0, $.jsx)(lt, {
                                                        className: `w-2.5 h-2.5 shrink-0 text-amber-700`,
                                                      }),
                                                      (0, $.jsxs)(`span`, {
                                                        children: [
                                                          `账号: `,
                                                          e.authUsername ||
                                                            `已配置`,
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                            ],
                                          }),
                                        }),
                                        (0, $.jsx)(`td`, {
                                          className: `py-2 px-3 whitespace-nowrap`,
                                          children: (0, $.jsx)(`span`, {
                                            className: `px-1.5 py-0.5 rounded text-[10.5px] font-bold bg-slate-100 text-slate-700`,
                                            children: e.method,
                                          }),
                                        }),
                                        (0, $.jsx)(`td`, {
                                          className: `py-2 px-3 text-center whitespace-nowrap`,
                                          children: (0, $.jsxs)(`span`, {
                                            className: `inline-flex items-center gap-1 px-1.5 py-0.2 rounded text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200`,
                                            children: [
                                              (0, $.jsx)(`span`, {
                                                className: `w-1 h-1 rounded-full bg-emerald-500`,
                                              }),
                                              `正常`,
                                            ],
                                          }),
                                        }),
                                        (0, $.jsx)(`td`, {
                                          className: `py-2 px-3 text-right whitespace-nowrap`,
                                          children: (0, $.jsx)(`button`, {
                                            type: `button`,
                                            onClick: () => {
                                              (r(e.id), n());
                                            },
                                            className: `px-2 py-0.5 rounded text-[11px] font-bold text-[#0066FF] bg-blue-50 hover:bg-[#0066FF] hover:text-white border border-blue-200 transition-colors cursor-pointer`,
                                            children: `定位`,
                                          }),
                                        }),
                                      ],
                                    },
                                    e.id,
                                  ),
                                ),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              (0, $.jsxs)(`div`, {
                className: `px-6 py-3.5 bg-slate-50/85 border-t border-slate-200 flex items-center justify-between`,
                children: [
                  (0, $.jsxs)(`div`, {
                    className: `flex items-center gap-1.5 text-[11.5px] text-slate-500`,
                    children: [
                      (0, $.jsx)(be, {
                        className: `w-3.5 h-3.5 text-slate-400 shrink-0`,
                      }),
                      (0, $.jsx)(`span`, {
                        children: `支持为每个供应商通道单独配置【通道别名】与【账号密码 / Key凭据】；支持点击右上角【新建通道】随时扩充通道。`,
                      }),
                    ],
                  }),
                  (0, $.jsx)(`button`, {
                    type: `button`,
                    onClick: n,
                    className: `h-8 px-4 rounded-lg bg-white border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer`,
                    children: `关闭`,
                  }),
                ],
              }),
            ],
          }),
          N &&
            (0, $.jsx)(`div`, {
              className: `fixed inset-0 z-60 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4`,
              children: (0, $.jsxs)(`div`, {
                className: `bg-white rounded-2xl border border-slate-200 shadow-2xl max-w-lg w-full p-5 space-y-4 animate-in fade-in zoom-in-95`,
                children: [
                  (0, $.jsxs)(`div`, {
                    className: `flex items-center justify-between pb-2 border-b border-slate-100`,
                    children: [
                      (0, $.jsxs)(`div`, {
                        className: `flex items-center gap-2`,
                        children: [
                          (0, $.jsx)(`div`, {
                            className: `w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center`,
                            children: (0, $.jsx)(Pe, {
                              className: `w-4 h-4 stroke-[2.5]`,
                            }),
                          }),
                          (0, $.jsxs)(`div`, {
                            children: [
                              (0, $.jsx)(`h4`, {
                                className: `font-extrabold text-slate-900 text-sm`,
                                children: `新建代理通道与认证凭证`,
                              }),
                              (0, $.jsx)(`span`, {
                                className: `text-xs text-slate-500`,
                                children: `为供应商创建全新专属隧道通道`,
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, $.jsx)(`button`, {
                        type: `button`,
                        onClick: () => F(!1),
                        className: `text-slate-400 hover:text-slate-700 p-1 cursor-pointer`,
                        children: (0, $.jsx)(Q, { className: `w-4 h-4` }),
                      }),
                    ],
                  }),
                  (0, $.jsxs)(`div`, {
                    className: `space-y-3 text-xs max-h-[65vh] overflow-y-auto pr-1`,
                    children: [
                      (0, $.jsxs)(`div`, {
                        className: `space-y-1`,
                        children: [
                          (0, $.jsx)(`label`, {
                            className: `text-slate-700 font-bold block`,
                            children: `归属代理供应商:`,
                          }),
                          (0, $.jsx)(`div`, {
                            className: `grid grid-cols-3 gap-2`,
                            children: [`kuai`, `zhima`, `abuyun`].map((e) => {
                              let t = i[e];
                              return (0, $.jsxs)(
                                `button`,
                                {
                                  type: `button`,
                                  onClick: () => {
                                    L(e);
                                    let t =
                                        e === `kuai`
                                          ? `KP-CH`
                                          : e === `zhima`
                                            ? `ZM-CH`
                                            : `AB-CH`,
                                      n = i[e].channels.length + 1;
                                    (te(`${t}-0${n}`),
                                      B(`${t}-0${n} 新建业务专属通道`));
                                  },
                                  className: `p-2 rounded-lg border text-center font-bold text-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer ${I === e ? `border-[#0066FF] bg-blue-50/60 text-[#0066FF] ring-1 ring-[#0066FF]` : `border-slate-200 hover:bg-slate-50 text-slate-700`}`,
                                  children: [
                                    (0, $.jsx)(`span`, {
                                      style: { backgroundColor: t.color },
                                      className: `w-2 h-2 rounded-full`,
                                    }),
                                    (0, $.jsx)(`span`, { children: t.name }),
                                  ],
                                },
                                e,
                              );
                            }),
                          }),
                        ],
                      }),
                      (0, $.jsxs)(`div`, {
                        className: `space-y-1`,
                        children: [
                          (0, $.jsx)(`label`, {
                            className: `text-slate-700 font-bold flex items-center justify-between`,
                            children: (0, $.jsx)(`span`, {
                              children: `通道别名 (Alias) *`,
                            }),
                          }),
                          (0, $.jsx)(`input`, {
                            type: `text`,
                            value: ne,
                            onChange: (e) => V(e.target.value),
                            placeholder: `例如: 境内自增长-专线 / 境内高频专线`,
                            className: `w-full h-8.5 px-3 bg-white border border-slate-300 rounded-lg text-xs font-semibold text-slate-900 outline-none focus:border-[#0066FF]`,
                          }),
                        ],
                      }),
                      (0, $.jsxs)(`div`, {
                        className: `space-y-1.5 pt-1`,
                        children: [
                          (0, $.jsx)(`label`, {
                            className: `text-slate-700 font-bold block`,
                            children: `设置通道认证方式:`,
                          }),
                          (0, $.jsxs)(`div`, {
                            className: `grid grid-cols-2 gap-2.5`,
                            children: [
                              (0, $.jsxs)(`div`, {
                                onClick: () => U(`key`),
                                className: `p-2.5 rounded-lg border cursor-pointer transition-all flex items-center gap-2 ${se === `key` ? `border-[#0066FF] bg-blue-50/50 ring-2 ring-[#0066FF]/20 text-[#0066FF]` : `border-slate-200 hover:border-slate-300 text-slate-700`}`,
                                children: [
                                  (0, $.jsx)(Se, {
                                    className: `w-4 h-4 shrink-0`,
                                  }),
                                  (0, $.jsxs)(`div`, {
                                    children: [
                                      (0, $.jsx)(`div`, {
                                        className: `font-bold text-xs`,
                                        children: `API Key / Token`,
                                      }),
                                      (0, $.jsx)(`div`, {
                                        className: `text-[10px] text-slate-400`,
                                        children: `密钥令牌认证`,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, $.jsxs)(`div`, {
                                onClick: () => U(`user_pwd`),
                                className: `p-2.5 rounded-lg border cursor-pointer transition-all flex items-center gap-2 ${se === `user_pwd` ? `border-[#0066FF] bg-blue-50/50 ring-2 ring-[#0066FF]/20 text-[#0066FF]` : `border-slate-200 hover:border-slate-300 text-slate-700`}`,
                                children: [
                                  (0, $.jsx)(lt, {
                                    className: `w-4 h-4 shrink-0`,
                                  }),
                                  (0, $.jsxs)(`div`, {
                                    children: [
                                      (0, $.jsx)(`div`, {
                                        className: `font-bold text-xs`,
                                        children: `账号密码认证`,
                                      }),
                                      (0, $.jsx)(`div`, {
                                        className: `text-[10px] text-slate-400`,
                                        children: `用户名+密码授权`,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      se === `key`
                        ? (0, $.jsxs)(`div`, {
                            className: `space-y-1 p-3 bg-purple-50/40 rounded-xl border border-purple-200/80`,
                            children: [
                              (0, $.jsxs)(`label`, {
                                className: `text-purple-950 font-bold flex items-center justify-between`,
                                children: [
                                  (0, $.jsxs)(`span`, {
                                    className: `flex items-center gap-1`,
                                    children: [
                                      (0, $.jsx)(Se, {
                                        className: `w-3.5 h-3.5 text-purple-600`,
                                      }),
                                      (0, $.jsx)(`span`, {
                                        children: `API Key / Secret Token`,
                                      }),
                                    ],
                                  }),
                                  (0, $.jsxs)(`button`, {
                                    type: `button`,
                                    onClick: () => pe(!fe),
                                    className: `text-purple-700 hover:underline flex items-center gap-1 text-[11px] cursor-pointer`,
                                    children: [
                                      fe
                                        ? (0, $.jsx)(q, {
                                            className: `w-3 h-3`,
                                          })
                                        : (0, $.jsx)(le, {
                                            className: `w-3 h-3`,
                                          }),
                                      (0, $.jsx)(`span`, {
                                        children: fe ? `隐藏` : `显示明文`,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, $.jsx)(`input`, {
                                type: fe ? `text` : `password`,
                                value: W,
                                onChange: (e) => G(e.target.value),
                                placeholder: `例如: kuaidaili_secret_live_9f81a73b`,
                                className: `w-full h-8.5 px-3 bg-white border border-purple-300 rounded-lg text-xs font-mono font-bold text-purple-900 outline-none focus:border-purple-600`,
                              }),
                            ],
                          })
                        : (0, $.jsxs)(`div`, {
                            className: `p-3 bg-amber-50/40 rounded-xl border border-amber-200/80 space-y-2.5`,
                            children: [
                              (0, $.jsxs)(`div`, {
                                className: `space-y-1`,
                                children: [
                                  (0, $.jsx)(`label`, {
                                    className: `text-amber-950 font-bold block`,
                                    children: `授权账号 / 用户名 (Username)`,
                                  }),
                                  (0, $.jsx)(`input`, {
                                    type: `text`,
                                    value: K,
                                    onChange: (e) => ce(e.target.value),
                                    placeholder: `例如: crawl_enterprise_user01`,
                                    className: `w-full h-8.5 px-3 bg-white border border-amber-300 rounded-lg text-xs font-mono font-bold text-amber-950 outline-none focus:border-amber-600`,
                                  }),
                                ],
                              }),
                              (0, $.jsxs)(`div`, {
                                className: `space-y-1`,
                                children: [
                                  (0, $.jsxs)(`label`, {
                                    className: `text-amber-950 font-bold flex items-center justify-between`,
                                    children: [
                                      (0, $.jsx)(`span`, {
                                        children: `授权密码 (Password)`,
                                      }),
                                      (0, $.jsxs)(`button`, {
                                        type: `button`,
                                        onClick: () => de(!Y),
                                        className: `text-amber-800 hover:underline flex items-center gap-1 text-[11px] cursor-pointer`,
                                        children: [
                                          Y
                                            ? (0, $.jsx)(q, {
                                                className: `w-3 h-3`,
                                              })
                                            : (0, $.jsx)(le, {
                                                className: `w-3 h-3`,
                                              }),
                                          (0, $.jsx)(`span`, {
                                            children: Y ? `隐藏` : `显示密码`,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, $.jsx)(`input`, {
                                    type: Y ? `text` : `password`,
                                    value: J,
                                    onChange: (e) => ue(e.target.value),
                                    placeholder: `例如: P@ssw0rd#2026!Sec`,
                                    className: `w-full h-8.5 px-3 bg-white border border-amber-300 rounded-lg text-xs font-mono font-bold text-amber-950 outline-none focus:border-amber-600`,
                                  }),
                                ],
                              }),
                            ],
                          }),
                      (0, $.jsxs)(`div`, {
                        className: `flex items-center justify-between pt-1`,
                        children: [
                          (0, $.jsxs)(`button`, {
                            type: `button`,
                            onClick: Ve,
                            disabled: Te,
                            className: `px-3 py-1.5 rounded-lg border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer disabled:opacity-50`,
                            children: [
                              (0, $.jsx)(E, {
                                className: `w-3.5 h-3.5 text-blue-600 ${Te ? `animate-spin` : ``}`,
                              }),
                              (0, $.jsx)(`span`, {
                                children: Te
                                  ? `正在测试连接...`
                                  : `测试通道握手`,
                              }),
                            ],
                          }),
                          X === `success` &&
                            (0, $.jsxs)(`span`, {
                              className: `text-[11px] text-emerald-600 font-bold flex items-center gap-1`,
                              children: [
                                (0, $.jsx)(P, { className: `w-3.5 h-3.5` }),
                                (0, $.jsx)(`span`, {
                                  children: `网关握手成功 (延迟 19ms · 凭据有效)`,
                                }),
                              ],
                            }),
                        ],
                      }),
                    ],
                  }),
                  (0, $.jsxs)(`div`, {
                    className: `flex items-center justify-end gap-2 pt-3 border-t border-slate-100`,
                    children: [
                      (0, $.jsx)(`button`, {
                        type: `button`,
                        onClick: () => F(!1),
                        className: `h-8.5 px-4 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-50 font-bold text-xs cursor-pointer transition-colors`,
                        children: `取消`,
                      }),
                      (0, $.jsxs)(`button`, {
                        type: `button`,
                        onClick: Z,
                        className: `h-8.5 px-5 rounded-lg bg-[#0066FF] hover:bg-[#0052cc] text-white font-bold text-xs shadow-xs cursor-pointer transition-colors flex items-center gap-1.5`,
                        children: [
                          (0, $.jsx)(P, { className: `w-3.5 h-3.5` }),
                          (0, $.jsx)(`span`, { children: `确认新建通道` }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          m &&
            (0, $.jsx)(`div`, {
              className: `fixed inset-0 z-60 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4`,
              children: (0, $.jsxs)(`div`, {
                className: `bg-white rounded-2xl border border-slate-200 shadow-2xl max-w-lg w-full p-5 space-y-4 animate-in fade-in zoom-in-95`,
                children: [
                  (0, $.jsxs)(`div`, {
                    className: `flex items-center justify-between pb-2 border-b border-slate-100`,
                    children: [
                      (0, $.jsxs)(`div`, {
                        className: `flex items-center gap-2`,
                        children: [
                          (0, $.jsx)(`div`, {
                            className: `w-7 h-7 rounded-lg bg-blue-50 text-[#0066FF] flex items-center justify-center`,
                            children: (0, $.jsx)(Ue, { className: `w-4 h-4` }),
                          }),
                          (0, $.jsxs)(`div`, {
                            children: [
                              (0, $.jsx)(`h4`, {
                                className: `font-extrabold text-slate-900 text-sm`,
                                children: `通道凭证与别名配置`,
                              }),
                              (0, $.jsxs)(`span`, {
                                className: `font-mono text-xs text-slate-500 font-bold`,
                                children: [m.id, ` · `, m.name],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, $.jsx)(`button`, {
                        type: `button`,
                        onClick: () => h(null),
                        className: `text-slate-400 hover:text-slate-700 p-1 cursor-pointer`,
                        children: (0, $.jsx)(Q, { className: `w-4 h-4` }),
                      }),
                    ],
                  }),
                  (0, $.jsxs)(`div`, {
                    className: `space-y-3.5 text-xs`,
                    children: [
                      (0, $.jsxs)(`div`, {
                        className: `space-y-1`,
                        children: [
                          (0, $.jsxs)(`label`, {
                            className: `text-slate-700 font-bold flex items-center justify-between`,
                            children: [
                              (0, $.jsx)(`span`, {
                                children: `通道别名 (Alias)`,
                              }),
                              (0, $.jsx)(`span`, {
                                className: `text-[11px] text-slate-400 font-normal`,
                                children: `方便团队业务识别`,
                              }),
                            ],
                          }),
                          (0, $.jsx)(`input`, {
                            type: `text`,
                            value: g,
                            onChange: (e) => _(e.target.value),
                            placeholder: `例如: 核心政务长效专线 / 招投标高频动态池`,
                            className: `w-full h-8.5 px-3 bg-white border border-slate-300 rounded-lg text-xs font-semibold text-slate-800 outline-none focus:border-[#0066FF]`,
                          }),
                        ],
                      }),
                      (0, $.jsxs)(`div`, {
                        className: `space-y-1`,
                        children: [
                          (0, $.jsx)(`label`, {
                            className: `text-slate-700 font-bold flex items-center justify-between`,
                            children: (0, $.jsx)(`span`, {
                              children: `代理接入网关 / 主机端口 (Proxy Gateway)`,
                            }),
                          }),
                          (0, $.jsxs)(`div`, {
                            className: `relative`,
                            children: [
                              (0, $.jsx)(He, {
                                className: `w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2`,
                              }),
                              (0, $.jsx)(`input`, {
                                type: `text`,
                                value: O,
                                onChange: (e) => k(e.target.value),
                                placeholder: `例如: gateway-bj.qingguo.com:18888`,
                                className: `w-full h-8.5 pl-8 pr-3 bg-white border border-slate-300 rounded-lg text-xs font-mono font-medium text-slate-800 outline-none focus:border-[#0066FF]`,
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, $.jsxs)(`div`, {
                        className: `space-y-1.5 pt-1`,
                        children: [
                          (0, $.jsx)(`label`, {
                            className: `text-slate-700 font-bold block`,
                            children: `选择通道认证方式:`,
                          }),
                          (0, $.jsxs)(`div`, {
                            className: `grid grid-cols-2 gap-2.5`,
                            children: [
                              (0, $.jsxs)(`div`, {
                                onClick: () => y(`key`),
                                className: `p-2.5 rounded-lg border cursor-pointer transition-all flex items-center gap-2 ${v === `key` ? `border-[#0066FF] bg-blue-50/50 ring-2 ring-[#0066FF]/20 text-[#0066FF]` : `border-slate-200 hover:border-slate-300 text-slate-700`}`,
                                children: [
                                  (0, $.jsx)(Se, {
                                    className: `w-4 h-4 shrink-0`,
                                  }),
                                  (0, $.jsxs)(`div`, {
                                    children: [
                                      (0, $.jsx)(`div`, {
                                        className: `font-bold text-xs`,
                                        children: `API Key / Token`,
                                      }),
                                      (0, $.jsx)(`div`, {
                                        className: `text-[10px] text-slate-400`,
                                        children: `密钥令牌认证`,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, $.jsxs)(`div`, {
                                onClick: () => y(`user_pwd`),
                                className: `p-2.5 rounded-lg border cursor-pointer transition-all flex items-center gap-2 ${v === `user_pwd` ? `border-[#0066FF] bg-blue-50/50 ring-2 ring-[#0066FF]/20 text-[#0066FF]` : `border-slate-200 hover:border-slate-300 text-slate-700`}`,
                                children: [
                                  (0, $.jsx)(lt, {
                                    className: `w-4 h-4 shrink-0`,
                                  }),
                                  (0, $.jsxs)(`div`, {
                                    children: [
                                      (0, $.jsx)(`div`, {
                                        className: `font-bold text-xs`,
                                        children: `账号密码认证`,
                                      }),
                                      (0, $.jsx)(`div`, {
                                        className: `text-[10px] text-slate-400`,
                                        children: `用户名+密码授权`,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      v === `key`
                        ? (0, $.jsxs)(`div`, {
                            className: `space-y-1 p-3 bg-purple-50/40 rounded-xl border border-purple-200/80`,
                            children: [
                              (0, $.jsxs)(`label`, {
                                className: `text-purple-950 font-bold flex items-center justify-between`,
                                children: [
                                  (0, $.jsxs)(`span`, {
                                    className: `flex items-center gap-1`,
                                    children: [
                                      (0, $.jsx)(Se, {
                                        className: `w-3.5 h-3.5 text-purple-600`,
                                      }),
                                      (0, $.jsx)(`span`, {
                                        children: `API Key / Secret Token`,
                                      }),
                                    ],
                                  }),
                                  (0, $.jsxs)(`button`, {
                                    type: `button`,
                                    onClick: () => M(!ee),
                                    className: `text-purple-700 hover:underline flex items-center gap-1 text-[11px] cursor-pointer`,
                                    children: [
                                      ee
                                        ? (0, $.jsx)(q, {
                                            className: `w-3 h-3`,
                                          })
                                        : (0, $.jsx)(le, {
                                            className: `w-3 h-3`,
                                          }),
                                      (0, $.jsx)(`span`, {
                                        children: ee ? `隐藏` : `显示明文`,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, $.jsxs)(`div`, {
                                className: `relative`,
                                children: [
                                  (0, $.jsx)(`input`, {
                                    type: ee ? `text` : `password`,
                                    value: b,
                                    onChange: (e) => x(e.target.value),
                                    placeholder: `例如: kuaidaili_secret_live_9f81a73b`,
                                    className: `w-full h-8.5 px-3 pr-8 bg-white border border-purple-300 rounded-lg text-xs font-mono font-bold text-purple-900 outline-none focus:border-purple-600`,
                                  }),
                                  b &&
                                    (0, $.jsx)(`button`, {
                                      type: `button`,
                                      onClick: () => Ae(b, `key`),
                                      className: `absolute right-2 top-1/2 -translate-y-1/2 text-purple-500 hover:text-purple-800 p-1 cursor-pointer`,
                                      title: `复制 Key`,
                                      children:
                                        xe === `key`
                                          ? (0, $.jsx)(P, {
                                              className: `w-3.5 h-3.5 text-emerald-600`,
                                            })
                                          : (0, $.jsx)(oe, {
                                              className: `w-3.5 h-3.5`,
                                            }),
                                    }),
                                ],
                              }),
                            ],
                          })
                        : (0, $.jsxs)(`div`, {
                            className: `p-3 bg-amber-50/40 rounded-xl border border-amber-200/80 space-y-2.5`,
                            children: [
                              (0, $.jsxs)(`div`, {
                                className: `space-y-1`,
                                children: [
                                  (0, $.jsx)(`label`, {
                                    className: `text-amber-950 font-bold flex items-center justify-between`,
                                    children: (0, $.jsxs)(`span`, {
                                      className: `flex items-center gap-1`,
                                      children: [
                                        (0, $.jsx)(lt, {
                                          className: `w-3.5 h-3.5 text-amber-700`,
                                        }),
                                        (0, $.jsx)(`span`, {
                                          children: `授权账号 / 用户名 (Username)`,
                                        }),
                                      ],
                                    }),
                                  }),
                                  (0, $.jsx)(`input`, {
                                    type: `text`,
                                    value: S,
                                    onChange: (e) => w(e.target.value),
                                    placeholder: `例如: crawl_enterprise_user01`,
                                    className: `w-full h-8.5 px-3 bg-white border border-amber-300 rounded-lg text-xs font-mono font-bold text-amber-950 outline-none focus:border-amber-600`,
                                  }),
                                ],
                              }),
                              (0, $.jsxs)(`div`, {
                                className: `space-y-1`,
                                children: [
                                  (0, $.jsxs)(`label`, {
                                    className: `text-amber-950 font-bold flex items-center justify-between`,
                                    children: [
                                      (0, $.jsxs)(`span`, {
                                        className: `flex items-center gap-1`,
                                        children: [
                                          (0, $.jsx)(Oe, {
                                            className: `w-3.5 h-3.5 text-amber-700`,
                                          }),
                                          (0, $.jsx)(`span`, {
                                            children: `授权密码 (Password)`,
                                          }),
                                        ],
                                      }),
                                      (0, $.jsxs)(`button`, {
                                        type: `button`,
                                        onClick: () => j(!A),
                                        className: `text-amber-800 hover:underline flex items-center gap-1 text-[11px] cursor-pointer`,
                                        children: [
                                          A
                                            ? (0, $.jsx)(q, {
                                                className: `w-3 h-3`,
                                              })
                                            : (0, $.jsx)(le, {
                                                className: `w-3 h-3`,
                                              }),
                                          (0, $.jsx)(`span`, {
                                            children: A ? `隐藏` : `显示密码`,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, $.jsxs)(`div`, {
                                    className: `relative`,
                                    children: [
                                      (0, $.jsx)(`input`, {
                                        type: A ? `text` : `password`,
                                        value: T,
                                        onChange: (e) => D(e.target.value),
                                        placeholder: `例如: P@ssw0rd#2026!Sec`,
                                        className: `w-full h-8.5 px-3 pr-8 bg-white border border-amber-300 rounded-lg text-xs font-mono font-bold text-amber-950 outline-none focus:border-amber-600`,
                                      }),
                                      T &&
                                        (0, $.jsx)(`button`, {
                                          type: `button`,
                                          onClick: () => Ae(T, `pwd`),
                                          className: `absolute right-2 top-1/2 -translate-y-1/2 text-amber-600 hover:text-amber-900 p-1 cursor-pointer`,
                                          title: `复制密码`,
                                          children:
                                            xe === `pwd`
                                              ? (0, $.jsx)(P, {
                                                  className: `w-3.5 h-3.5 text-emerald-600`,
                                                })
                                              : (0, $.jsx)(oe, {
                                                  className: `w-3.5 h-3.5`,
                                                }),
                                        }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                      (0, $.jsxs)(`div`, {
                        className: `flex items-center justify-between pt-1`,
                        children: [
                          (0, $.jsxs)(`button`, {
                            type: `button`,
                            onClick: Ve,
                            disabled: Te,
                            className: `px-3 py-1.5 rounded-lg border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer disabled:opacity-50`,
                            children: [
                              (0, $.jsx)(E, {
                                className: `w-3.5 h-3.5 text-blue-600 ${Te ? `animate-spin` : ``}`,
                              }),
                              (0, $.jsx)(`span`, {
                                children: Te
                                  ? `正在握手测速...`
                                  : `测试通道连通性`,
                              }),
                            ],
                          }),
                          X === `success` &&
                            (0, $.jsxs)(`span`, {
                              className: `text-[11px] text-emerald-600 font-bold flex items-center gap-1`,
                              children: [
                                (0, $.jsx)(P, { className: `w-3.5 h-3.5` }),
                                (0, $.jsx)(`span`, {
                                  children: `网关连通正常 (延迟 18ms · 认证通过)`,
                                }),
                              ],
                            }),
                        ],
                      }),
                    ],
                  }),
                  (0, $.jsxs)(`div`, {
                    className: `flex items-center justify-end gap-2 pt-3 border-t border-slate-100`,
                    children: [
                      (0, $.jsx)(`button`, {
                        type: `button`,
                        onClick: () => h(null),
                        className: `h-8.5 px-4 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-50 font-bold text-xs cursor-pointer transition-colors`,
                        children: `取消`,
                      }),
                      (0, $.jsx)(`button`, {
                        type: `button`,
                        onClick: Re,
                        className: `h-8.5 px-4 rounded-lg bg-[#0066FF] hover:bg-[#0052cc] text-white font-bold text-xs shadow-xs cursor-pointer transition-colors`,
                        children: `保存通道配置`,
                      }),
                    ],
                  }),
                ],
              }),
            }),
        ],
      })
    );
  },
  Ln = ({ isOpen: e, service: t, onClose: n }) => {
    let [r, i] = (0, C.useState)(`table`),
      [a, o] = (0, C.useState)(`ALL`),
      [s, c] = (0, C.useState)(`ALL`),
      [l, u] = (0, C.useState)(`ALL`),
      [d, f] = (0, C.useState)(``),
      [p, m] = (0, C.useState)(``),
      [h, g] = (0, C.useState)(``),
      [_, v] = (0, C.useState)(``),
      [y, b] = (0, C.useState)(!0),
      [x, S] = (0, C.useState)(null),
      [w, T] = (0, C.useState)([]),
      [E, D] = (0, C.useState)([]),
      [O, k] = (0, C.useState)([]),
      [A, ee] = (0, C.useState)(`ALL`),
      [M, F] = (0, C.useState)(`ALL`),
      [I, L] = (0, C.useState)(`ALL`),
      [R, te] = (0, C.useState)(null),
      z = Qt(t?.method),
      V = Zt(t?.method),
      ie = $t(t?.method),
      H = Xt(t?.method) || (!z && !V && !ie);
    if (
      ((0, C.useEffect)(() => {
        if (!t) return;
        let e = t.domain || (t.url ? new URL(t.url).hostname : `mofcom.gov.cn`),
          n = new Date();
        if (z) {
          let r = [],
            i = parseInt(t.id.replace(/\D/g, ``) || `10`, 10) * 1e4 + 4800;
          for (let a = 0; a < 28; a++) {
            let o = a * 35 + Math.floor(Math.random() * 15),
              s = new Date(n.getTime() - o * 1e3),
              c = s.toISOString().replace(`T`, ` `).substring(0, 19),
              l = String(i + 28 - a),
              u = t.url
                ? t.url.replace(`{id}`, l)
                : `https://${e}/detail/${l}.html`,
              d = 200,
              f = `success`,
              p = `${130 + Math.floor(Math.random() * 90)}ms`,
              m = `抓取成功，提取正文 2,850 字并已校验入库`,
              h = 42100 + Math.floor(Math.random() * 12e3);
            a % 6 == 2
              ? ((d = 404),
                (f = `404_empty`),
                (p = `${85 + Math.floor(Math.random() * 40)}ms`),
                (m = `目标源端返回 404 Not Found (序列空洞，自动录入重试库)`),
                (h = 1420))
              : a % 8 == 5
                ? ((d = 504),
                  (f = `timeout`),
                  (p = `1200ms`),
                  (m = `代理出口网关 504 超时，已记录并挂起等待下一轮自动重试`),
                  (h = 0))
                : a === 1 &&
                  ((d = 200),
                  (f = `retrying`),
                  (p = `180ms`),
                  (m = `第二轮定时重试命中，已成功修复历史空洞数据`),
                  (h = 36800));
            let g =
              f === `success` || f === `retrying`
                ? new Date(s.getTime() + 1200)
                    .toISOString()
                    .replace(`T`, ` `)
                    .substring(0, 19)
                : `-`;
            r.push({
              id: `AUTO-LOG-${1e3 + a}`,
              targetId: l,
              collectTime: c,
              inboundTime: g,
              url: u,
              latency: p,
              statusCode: d,
              status: f,
              resultDetails: m,
              proxyIp: `117.143.88.204:9020 (上海BGP高速隧道)`,
              byteSize: h,
            });
          }
          D(r);
        } else if (H) k(jt(e, t.id));
        else if (V) {
          let t = [
              `重大招商项目推介`,
              `产业经济要闻`,
              `招投标与采购公示`,
              `政策法规解读`,
              `民生与政务热线`,
            ],
            r = [
              `2026年高质量发展重点任务与要素保障协同推进会发布纪要`,
              `关于进一步优化外商投资环境加大吸引外商投资力度的若干措施`,
              `第三季度全国重点产业园区投资运行指数专项报告 (全文)`,
              `国家重大科技专项研发攻关成果推介会日程安排与参会通知`,
              `关于公布2026年度智能制造示范工厂揭榜单位名单的通告`,
              `推进新型工业化培育新质生产力高端对话闭门研讨会议程`,
              `数字经贸创新合作区建设总体规划及配套产业扶持细则`,
              `优化政务服务提升行政效能深化“高效办成一件事”实施方案`,
              `战略性新兴产业集群发展专项资金申报指南 (2026版)`,
              `国际贸易与供应链韧性国际研讨会在京举行成果公报`,
              `知识产权海外保护与合规指引培训系列讲座通知`,
              `绿色低碳转型重点示范工程首批立项清单公示`,
            ],
            i = [];
          for (let a = 0; a < 24; a++) {
            let o = a * 45 + Math.floor(Math.random() * 20),
              s = new Date(n.getTime() - o * 1e3)
                .toISOString()
                .replace(`T`, ` `)
                .substring(0, 19),
              c = t[a % t.length],
              l = r[a % r.length],
              u = `http://${e}/article/${{ 重大招商项目推介: `zsxm`, 产业经济要闻: `jjyw`, 招投标与采购公示: `ztb`, 政策法规解读: `zcjd`, 民生与政务热线: `msrx` }[c] || `news`}/202609/2026090349${800 + a}.shtml`,
              d = `success`,
              f = 200,
              p = `${120 + Math.floor(Math.random() * 160)}ms`,
              m = `正文解析完整，已通过哈希验重写入存储库`,
              h = 2100 + Math.floor(Math.random() * 1200);
            (a === 3 || a === 11
              ? ((d = `duplicate`),
                (f = 200),
                (m = `增量熔断：命中已入库记录指纹，跳过无需重复写入`),
                (h = 0))
              : a === 6
                ? ((d = `retry`),
                  (f = 200),
                  (p = `480ms`),
                  (m = `出口专线首发超时，触发智能重试 (第 2 次直连成功)`))
                : a === 17 &&
                  ((d = `warning`),
                  (f = 200),
                  (m = `发布时间缺少时分秒，已启动正文正则回退格式化`)),
              i.push({
                id: `LOG-${1e3 + a}`,
                channel: c,
                collectTime: s,
                url: u,
                title: l,
                status: d,
                statusCode: f,
                latency: p,
                details: m,
                recordCount: h,
              }));
          }
          T(i);
        }
      }, [t, z, V, H]),
      (0, C.useEffect)(() => {
        if (!y || !e || !t) return;
        let n = setInterval(() => {
          let e = new Date().toISOString().replace(`T`, ` `).substring(0, 19),
            n = t.domain || (t.url ? new URL(t.url).hostname : `mofcom.gov.cn`);
          z
            ? D((r) => {
                if (r.length === 0) return r;
                let i = parseInt(r[0].targetId, 10) || 104828,
                  a = String(i + 1),
                  o = t.url
                    ? t.url.replace(`{id}`, a)
                    : `https://${n}/detail/${a}.html`,
                  s = Math.random() > 0.2;
                return [
                  {
                    id: `AUTO-LOG-${Date.now().toString().slice(-5)}`,
                    targetId: a,
                    url: o,
                    collectTime: e,
                    inboundTime: s ? e : `-`,
                    latency: `${120 + Math.floor(Math.random() * 80)}ms`,
                    statusCode: s ? 200 : 404,
                    status: s ? `success` : `404_empty`,
                    resultDetails: s
                      ? `实时自增探测成功，字段清洗完整已入库`
                      : `目标源端返回 404 Not Found (空洞已记录至重试库)`,
                    proxyIp: `117.143.88.204:9020 (上海BGP高速隧道)`,
                    byteSize: s ? 32400 : 1200,
                  },
                  ...r.slice(0, 49),
                ];
              })
            : H
              ? k((t) => {
                  let r = Math.floor(Math.random() * 8e3) + 1e3;
                  return [
                    Math.random() > 0.35
                      ? {
                          id: `DEEP-LOG-${Date.now().toString().slice(-5)}`,
                          depth: 3,
                          depthLabel: `Depth 3 · 详情`,
                          pageType: `detail`,
                          pageTypeLabel: `正文详情`,
                          collectTime: e,
                          url: `http://${n}/article/20260928/${891300 + r}.html`,
                          parentUrl: `http://${n}/finance/macro/page/1`,
                          title: `【实时下钻】最新经济体制改革重大推进成果通报-${r}`,
                          action: `ingested`,
                          actionLabel: `正文入库`,
                          statusCode: 200,
                          latency: `${18 + Math.floor(Math.random() * 20)}ms`,
                          contentSize: `${1800 + Math.floor(Math.random() * 1500)} 字`,
                          details: `触发 DOM / Readability 算法解析，正文清洗完毕校验入库`,
                        }
                      : {
                          id: `DEEP-LOG-${Date.now().toString().slice(-5)}`,
                          depth: 2,
                          depthLabel: `Depth 2 · 列表`,
                          pageType: `list`,
                          pageTypeLabel: `分页列表`,
                          collectTime: e,
                          url: `http://${n}/finance/industry/semi?page=${Math.floor(Math.random() * 5) + 1}`,
                          parentUrl: `http://${n}/finance/industry`,
                          title: `先进半导体与芯片产业链滚动分页`,
                          action: `discovered`,
                          actionLabel: `发散超链接`,
                          statusCode: 200,
                          latency: `${22 + Math.floor(Math.random() * 15)}ms`,
                          discoveredCount: Math.floor(Math.random() * 20) + 10,
                          details: `提取分页中正文链接，推进 Frontier 队列`,
                        },
                    ...t.slice(0, 49),
                  ];
                })
              : T((t) => {
                  if (t.length === 0) return t;
                  let r = Array.from(new Set(t.map((e) => e.channel))),
                    i = r[Math.floor(Math.random() * r.length)],
                    a = Math.floor(Math.random() * 9e3) + 1e3;
                  return [
                    {
                      id: `LOG-${Date.now().toString().slice(-5)}`,
                      channel: i,
                      collectTime: e,
                      url: `http://${n}/article/instant/202609/2026090349${a}.shtml`,
                      title: `【最新实时抓取】重点战略任务落地进展与政策红利监测-${a}`,
                      status: Math.random() > 0.15 ? `success` : `duplicate`,
                      statusCode: 200,
                      latency: `${110 + Math.floor(Math.random() * 140)}ms`,
                      details: `调度任务下发执行，DOM 结构化字段清洗合格`,
                      recordCount: 2400 + Math.floor(Math.random() * 800),
                    },
                    ...t.slice(0, 49),
                  ];
                });
        }, 3500);
        return () => clearInterval(n);
      }, [y, e, t, z, H]),
      !e || !t)
    )
      return null;
    let U = Array.from(new Set(w.map((e) => e.channel))),
      W = w.filter((e) => {
        if (
          (a !== `ALL` && e.channel !== a) ||
          (s !== `ALL` && e.status !== s) ||
          (h && e.collectTime.slice(0, 10) < h) ||
          (_ && e.collectTime.slice(0, 10) > _)
        )
          return !1;
        if (d.trim()) {
          let t = d.toLowerCase(),
            n = e.url.toLowerCase().includes(t),
            r = e.title?.toLowerCase().includes(t),
            i = e.channel.toLowerCase().includes(t);
          if (!n && !r && !i) return !1;
        }
        return !0;
      }),
      G = E.filter((e) => {
        let t = e.status === `success` || e.status === `retrying`;
        if (
          (l === `success_only` && !t) ||
          (l === `failed_only` && t) ||
          (l !== `ALL` &&
            l !== `success_only` &&
            l !== `failed_only` &&
            e.status !== l) ||
          (h && e.collectTime.slice(0, 10) < h) ||
          (_ && e.collectTime.slice(0, 10) > _)
        )
          return !1;
        if (p.trim()) {
          let t = p.trim().toLowerCase(),
            n = e.targetId.toLowerCase().includes(t),
            r = e.url.toLowerCase().includes(t);
          if (!n && !r) return !1;
        }
        return !0;
      }),
      K = O.filter((e) => {
        if (
          (A !== `ALL` && String(e.depth) !== A) ||
          (M !== `ALL` && e.action !== M) ||
          (I !== `ALL` && e.pageType !== I) ||
          (h && e.collectTime.slice(0, 10) < h) ||
          (_ && e.collectTime.slice(0, 10) > _)
        )
          return !1;
        if (d.trim()) {
          let t = d.toLowerCase(),
            n = e.url.toLowerCase().includes(t),
            r = (e.parentUrl || ``).toLowerCase().includes(t),
            i = (e.title || ``).toLowerCase().includes(t);
          if (!n && !r && !i) return !1;
        }
        return !0;
      }),
      q = E.filter(
        (e) => e.status === `success` || e.status === `retrying`,
      ).length,
      le = E.filter((e) => e.status === `404_empty`).length,
      J = E.filter((e) => e.status === `timeout`).length,
      Y = w.filter((e) => e.status === `success`).length,
      de = w.filter((e) => e.status === `duplicate`).length,
      fe = w.length,
      pe = O.filter((e) => e.action === `ingested`).length,
      me = O.reduce((e, t) => e + (t.discoveredCount || 0), 0),
      he = O.filter((e) => e.action === `dedup_skipped`).length,
      ge = O.filter((e) => e.action === `regex_filtered`).length,
      _e = (e) => {
        (navigator.clipboard.writeText(e),
          S(e),
          setTimeout(() => S(null), 1500));
      };
    return (0, $.jsx)(`div`, {
      className: `fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4 overflow-y-auto`,
      children: (0, $.jsxs)(`div`, {
        className: `bg-white w-full max-w-6xl rounded-2xl shadow-2xl border border-slate-200 flex flex-col max-h-[92vh] overflow-hidden animate-in fade-in zoom-in-95 duration-200`,
        children: [
          (0, $.jsxs)(`div`, {
            className: `px-6 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-50/60 shrink-0`,
            children: [
              (0, $.jsxs)(`div`, {
                className: `flex items-center gap-3`,
                children: [
                  (0, $.jsx)(`div`, {
                    className: `w-9 h-9 rounded-xl border flex items-center justify-center shadow-2xs ${z ? `bg-amber-50 border-amber-200 text-amber-700` : H ? `bg-emerald-50 border-emerald-200 text-emerald-600` : `bg-purple-50 border-purple-200 text-purple-600`}`,
                    children: z
                      ? (0, $.jsx)(ve, { className: `w-5 h-5` })
                      : H
                        ? (0, $.jsx)(ae, {
                            className: `w-5 h-5 animate-spin-slow`,
                          })
                        : (0, $.jsx)(Z, { className: `w-5 h-5` }),
                  }),
                  (0, $.jsxs)(`div`, {
                    className: `flex flex-col`,
                    children: [
                      (0, $.jsxs)(`div`, {
                        className: `flex items-center gap-2 flex-wrap`,
                        children: [
                          (0, $.jsx)(`h3`, {
                            className: `text-[15px] font-extrabold text-slate-900`,
                            children: z
                              ? `ID自增长 · 逐ID实时执行日志看板`
                              : H
                                ? `全站深度采集 · 递归下钻实时执行日志看板`
                                : `全流程板块轮巡监控日志看板`,
                          }),
                          (0, $.jsx)(`span`, {
                            className: `text-[11px] font-mono font-bold px-2 py-0.5 bg-blue-50 text-[#0066FF] border border-blue-200 rounded-md`,
                            children: t.id,
                          }),
                          (0, $.jsx)(`span`, {
                            className: `text-[11px] font-bold text-slate-700 bg-slate-100 border border-slate-200 px-2 py-0.5 rounded-md`,
                            children: t.name,
                          }),
                          (0, $.jsx)(`span`, {
                            className: `text-[10px] font-bold px-1.5 py-0.5 rounded border ${t.method === `plate` ? `bg-blue-50 text-blue-700 border-blue-200` : t.method === `auto` ? `bg-amber-50 text-amber-800 border-amber-200` : `bg-emerald-50 text-emerald-800 border-emerald-200`}`,
                            children:
                              t.method === `plate`
                                ? `板块轮巡`
                                : t.method === `auto`
                                  ? `ID自增长`
                                  : `全站深度采集`,
                          }),
                          (0, $.jsxs)(`span`, {
                            className: `text-[10.5px] font-mono text-slate-700 bg-slate-100 border border-slate-200 px-2 py-0.5 rounded-md flex items-center gap-1 shadow-2xs`,
                            title: `日志超时告警阈值`,
                            children: [
                              (0, $.jsx)(re, {
                                className: `w-3 h-3 text-slate-500`,
                              }),
                              (0, $.jsxs)(`span`, {
                                children: [
                                  `日志超时: `,
                                  (0, $.jsxs)(`strong`, {
                                    className: `font-bold`,
                                    children: [xt(t.logTimeout), `分钟`],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, $.jsxs)(`p`, {
                        className: `text-[11px] text-slate-500 mt-0.5 flex items-center gap-2`,
                        children: [
                          (0, $.jsxs)(`span`, {
                            children: [
                              `目标域名: `,
                              (0, $.jsx)(`strong`, {
                                className: `font-mono text-slate-700`,
                                children: t.domain || `mofcom.gov.cn`,
                              }),
                            ],
                          }),
                          (0, $.jsx)(`span`, {
                            className: `text-slate-300`,
                            children: `|`,
                          }),
                          (0, $.jsxs)(`span`, {
                            className: `flex items-center gap-1.5 text-emerald-600 font-semibold`,
                            children: [
                              (0, $.jsxs)(`span`, {
                                className: `relative flex h-2 w-2`,
                                children: [
                                  (0, $.jsx)(`span`, {
                                    className: `animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75`,
                                  }),
                                  (0, $.jsx)(`span`, {
                                    className: `relative inline-flex rounded-full h-2 w-2 bg-emerald-500`,
                                  }),
                                ],
                              }),
                              (0, $.jsx)(`span`, {
                                children: z
                                  ? `ID自增长序列执行流水监听中`
                                  : H
                                    ? `全站递归下钻与URL待爬队列流水监听中`
                                    : `实时板块轮询流水监听中`,
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, $.jsxs)(`div`, {
                className: `flex items-center gap-2.5`,
                children: [
                  (0, $.jsxs)(`div`, {
                    className: `inline-flex rounded-lg border border-slate-200 bg-slate-50 p-0.5 text-xs`,
                    children: [
                      (0, $.jsxs)(`button`, {
                        type: `button`,
                        onClick: () => i(`table`),
                        className: `px-2.5 py-1 rounded-md font-bold transition-all flex items-center gap-1.5 cursor-pointer ${r === `table` ? `bg-white text-emerald-700 shadow-2xs` : `text-slate-600 hover:text-slate-900`}`,
                        children: [
                          (0, $.jsx)(et, { className: `w-3.5 h-3.5` }),
                          (0, $.jsx)(`span`, { children: `流水明细` }),
                        ],
                      }),
                      (0, $.jsxs)(`button`, {
                        type: `button`,
                        onClick: () => i(`terminal`),
                        className: `px-2.5 py-1 rounded-md font-bold transition-all flex items-center gap-1.5 cursor-pointer ${r === `terminal` ? `bg-white text-emerald-700 shadow-2xs` : `text-slate-600 hover:text-slate-900`}`,
                        children: [
                          (0, $.jsx)(rt, { className: `w-3.5 h-3.5` }),
                          (0, $.jsx)(`span`, { children: `原始终端` }),
                        ],
                      }),
                    ],
                  }),
                  (0, $.jsx)(`button`, {
                    type: `button`,
                    onClick: n,
                    className: `w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer`,
                    children: (0, $.jsx)(Q, { className: `w-4 h-4` }),
                  }),
                ],
              }),
            ],
          }),
          z
            ? (0, $.jsxs)(`div`, {
                className: `px-6 py-3 bg-slate-50/80 border-b border-slate-200 grid grid-cols-2 gap-3 text-xs`,
                children: [
                  (0, $.jsxs)(`div`, {
                    className: `bg-white border border-slate-200 rounded-xl p-2.5 shadow-2xs flex items-center justify-between`,
                    children: [
                      (0, $.jsxs)(`div`, {
                        children: [
                          (0, $.jsx)(`div`, {
                            className: `text-[11px] text-emerald-600 font-medium`,
                            children: `有效数据入库 (200 OK)`,
                          }),
                          (0, $.jsxs)(`div`, {
                            className: `text-base font-extrabold text-emerald-700 font-mono mt-0.5`,
                            children: [q, ` 条`],
                          }),
                        ],
                      }),
                      (0, $.jsx)(`div`, {
                        className: `w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center`,
                        children: (0, $.jsx)(B, { className: `w-3.5 h-3.5` }),
                      }),
                    ],
                  }),
                  (0, $.jsxs)(`div`, {
                    className: `bg-white border border-slate-200 rounded-xl p-2.5 shadow-2xs flex items-center justify-between`,
                    children: [
                      (0, $.jsxs)(`div`, {
                        children: [
                          (0, $.jsx)(`div`, {
                            className: `text-[11px] text-amber-700 font-medium`,
                            children: `404 空洞 (自动录入重试库)`,
                          }),
                          (0, $.jsxs)(`div`, {
                            className: `text-base font-extrabold text-amber-800 font-mono mt-0.5`,
                            children: [le, ` 条`],
                          }),
                        ],
                      }),
                      (0, $.jsx)(`div`, {
                        className: `w-7 h-7 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center`,
                        children: (0, $.jsx)(Le, { className: `w-3.5 h-3.5` }),
                      }),
                    ],
                  }),
                ],
              })
            : H
              ? (0, $.jsxs)(`div`, {
                  className: `px-6 py-3 bg-slate-50/80 border-b border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs`,
                  children: [
                    (0, $.jsxs)(`div`, {
                      className: `bg-white border border-slate-200 rounded-xl p-2.5 shadow-2xs flex items-center justify-between`,
                      children: [
                        (0, $.jsxs)(`div`, {
                          children: [
                            (0, $.jsx)(`div`, {
                              className: `text-[11px] text-purple-700 font-medium`,
                              children: `全站最高下钻深度`,
                            }),
                            (0, $.jsx)(`div`, {
                              className: `text-base font-extrabold text-purple-800 font-mono mt-0.5`,
                              children: `Depth 4 层`,
                            }),
                            (0, $.jsx)(`div`, {
                              className: `text-[10px] text-slate-400`,
                              children: `涵盖种子到关联文书附件`,
                            }),
                          ],
                        }),
                        (0, $.jsx)(`div`, {
                          className: `w-7 h-7 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center`,
                          children: (0, $.jsx)(Ce, {
                            className: `w-3.5 h-3.5`,
                          }),
                        }),
                      ],
                    }),
                    (0, $.jsxs)(`div`, {
                      className: `bg-white border border-slate-200 rounded-xl p-2.5 shadow-2xs flex items-center justify-between`,
                      children: [
                        (0, $.jsxs)(`div`, {
                          children: [
                            (0, $.jsx)(`div`, {
                              className: `text-[11px] text-emerald-600 font-medium`,
                              children: `正文详情数据入库`,
                            }),
                            (0, $.jsxs)(`div`, {
                              className: `text-base font-extrabold text-emerald-700 font-mono mt-0.5`,
                              children: [pe, ` 篇`],
                            }),
                            (0, $.jsx)(`div`, {
                              className: `text-[10px] text-emerald-600 font-medium`,
                              children: `DOM 结构化字段清洗合格`,
                            }),
                          ],
                        }),
                        (0, $.jsx)(`div`, {
                          className: `w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center`,
                          children: (0, $.jsx)(B, { className: `w-3.5 h-3.5` }),
                        }),
                      ],
                    }),
                    (0, $.jsxs)(`div`, {
                      className: `bg-white border border-slate-200 rounded-xl p-2.5 shadow-2xs flex items-center justify-between`,
                      children: [
                        (0, $.jsxs)(`div`, {
                          children: [
                            (0, $.jsx)(`div`, {
                              className: `text-[11px] text-blue-600 font-medium`,
                              children: `新发现超链接`,
                            }),
                            (0, $.jsxs)(`div`, {
                              className: `text-base font-extrabold text-blue-700 font-mono mt-0.5`,
                              children: [me, ` 条`],
                            }),
                            (0, $.jsx)(`div`, {
                              className: `text-[10px] text-slate-400`,
                              children: `已推入 Frontier 待爬队列`,
                            }),
                          ],
                        }),
                        (0, $.jsx)(`div`, {
                          className: `w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center`,
                          children: (0, $.jsx)(se, {
                            className: `w-3.5 h-3.5`,
                          }),
                        }),
                      ],
                    }),
                    (0, $.jsxs)(`div`, {
                      className: `bg-white border border-slate-200 rounded-xl p-2.5 shadow-2xs flex items-center justify-between`,
                      children: [
                        (0, $.jsxs)(`div`, {
                          children: [
                            (0, $.jsx)(`div`, {
                              className: `text-[11px] text-amber-700 font-medium`,
                              children: `布隆去重 / 黑名单拦截`,
                            }),
                            (0, $.jsxs)(`div`, {
                              className: `text-base font-extrabold text-amber-800 font-mono mt-0.5`,
                              children: [he + ge, ` 条`],
                            }),
                            (0, $.jsx)(`div`, {
                              className: `text-[10px] text-slate-400`,
                              children: `节省 36.8% 冗余请求`,
                            }),
                          ],
                        }),
                        (0, $.jsx)(`div`, {
                          className: `w-7 h-7 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center`,
                          children: (0, $.jsx)(Ge, {
                            className: `w-3.5 h-3.5`,
                          }),
                        }),
                      ],
                    }),
                  ],
                })
              : (0, $.jsxs)(`div`, {
                  className: `px-6 py-3 bg-slate-50/80 border-b border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs`,
                  children: [
                    (0, $.jsxs)(`div`, {
                      className: `bg-white border border-slate-200 rounded-xl p-2.5 shadow-2xs flex items-center justify-between`,
                      children: [
                        (0, $.jsxs)(`div`, {
                          children: [
                            (0, $.jsx)(`div`, {
                              className: `text-[11px] text-slate-500 font-medium`,
                              children: `当前缓存流水`,
                            }),
                            (0, $.jsxs)(`div`, {
                              className: `text-base font-extrabold text-slate-900 font-mono mt-0.5`,
                              children: [fe, ` 项`],
                            }),
                          ],
                        }),
                        (0, $.jsx)(`div`, {
                          className: `w-7 h-7 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center`,
                          children: (0, $.jsx)(Ce, {
                            className: `w-3.5 h-3.5`,
                          }),
                        }),
                      ],
                    }),
                    (0, $.jsxs)(`div`, {
                      className: `bg-white border border-slate-200 rounded-xl p-2.5 shadow-2xs flex items-center justify-between`,
                      children: [
                        (0, $.jsxs)(`div`, {
                          children: [
                            (0, $.jsx)(`div`, {
                              className: `text-[11px] text-emerald-600 font-medium`,
                              children: `抓取入库成功`,
                            }),
                            (0, $.jsxs)(`div`, {
                              className: `text-base font-extrabold text-emerald-700 font-mono mt-0.5`,
                              children: [Y, ` 条`],
                            }),
                          ],
                        }),
                        (0, $.jsx)(`div`, {
                          className: `w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center`,
                          children: (0, $.jsx)(B, { className: `w-3.5 h-3.5` }),
                        }),
                      ],
                    }),
                    (0, $.jsxs)(`div`, {
                      className: `bg-white border border-slate-200 rounded-xl p-2.5 shadow-2xs flex items-center justify-between`,
                      children: [
                        (0, $.jsxs)(`div`, {
                          children: [
                            (0, $.jsx)(`div`, {
                              className: `text-[11px] text-blue-600 font-medium`,
                              children: `增量去重熔断`,
                            }),
                            (0, $.jsxs)(`div`, {
                              className: `text-base font-extrabold text-blue-700 font-mono mt-0.5`,
                              children: [de, ` 条`],
                            }),
                          ],
                        }),
                        (0, $.jsx)(`div`, {
                          className: `w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center`,
                          children: (0, $.jsx)(N, { className: `w-3.5 h-3.5` }),
                        }),
                      ],
                    }),
                    (0, $.jsxs)(`div`, {
                      className: `bg-white border border-slate-200 rounded-xl p-2.5 shadow-2xs flex items-center justify-between`,
                      children: [
                        (0, $.jsxs)(`div`, {
                          children: [
                            (0, $.jsx)(`div`, {
                              className: `text-[11px] text-purple-600 font-medium`,
                              children: `涉及监控板块`,
                            }),
                            (0, $.jsxs)(`div`, {
                              className: `text-base font-extrabold text-purple-700 font-mono mt-0.5`,
                              children: [U.length, ` 个`],
                            }),
                          ],
                        }),
                        (0, $.jsx)(`div`, {
                          className: `w-7 h-7 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center`,
                          children: (0, $.jsx)(Z, { className: `w-3.5 h-3.5` }),
                        }),
                      ],
                    }),
                  ],
                }),
          (0, $.jsxs)(`div`, {
            className: `px-6 py-2.5 bg-white border-b border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs`,
            children: [
              (0, $.jsxs)(`div`, {
                className: `flex flex-wrap items-center gap-2.5 flex-1`,
                children: [
                  z
                    ? (0, $.jsxs)($.Fragment, {
                        children: [
                          (0, $.jsxs)(`div`, {
                            className: `flex items-center gap-1.5`,
                            children: [
                              (0, $.jsx)(`span`, {
                                className: `text-[11.5px] font-bold text-slate-700`,
                                children: `执行状态:`,
                              }),
                              (0, $.jsxs)(`select`, {
                                value: l,
                                onChange: (e) => u(e.target.value),
                                className: `h-8 px-2.5 border border-slate-300 rounded-lg text-xs font-semibold text-slate-800 bg-white focus:border-[#0066FF] outline-none cursor-pointer`,
                                children: [
                                  (0, $.jsxs)(`option`, {
                                    value: `ALL`,
                                    children: [`全部状态 (`, E.length, `)`],
                                  }),
                                  (0, $.jsxs)(`option`, {
                                    value: `success_only`,
                                    children: [`成功 (`, q, `)`],
                                  }),
                                  (0, $.jsxs)(`option`, {
                                    value: `failed_only`,
                                    children: [`失败 (`, le + J, `)`],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, $.jsxs)(`div`, {
                            className: `relative flex-1 min-w-[200px] max-w-[300px]`,
                            children: [
                              (0, $.jsx)(Be, {
                                className: `w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5`,
                              }),
                              (0, $.jsx)(`input`, {
                                type: `text`,
                                value: p,
                                onChange: (e) => m(e.target.value),
                                placeholder: `搜索目标 ID 或抓取 URL...`,
                                className: `w-full h-8 pl-8 pr-3 border border-slate-300 rounded-lg text-xs text-slate-800 bg-white focus:border-[#0066FF] outline-none placeholder:text-slate-400 font-mono`,
                              }),
                            ],
                          }),
                        ],
                      })
                    : H
                      ? (0, $.jsxs)($.Fragment, {
                          children: [
                            (0, $.jsxs)(`div`, {
                              className: `flex items-center gap-1.5`,
                              children: [
                                (0, $.jsxs)(`span`, {
                                  className: `text-[11.5px] font-bold text-slate-700 flex items-center gap-1`,
                                  children: [
                                    (0, $.jsx)(Ce, {
                                      className: `w-3.5 h-3.5 text-emerald-600`,
                                    }),
                                    (0, $.jsx)(`span`, {
                                      children: `下钻深度:`,
                                    }),
                                  ],
                                }),
                                (0, $.jsxs)(`select`, {
                                  value: A,
                                  onChange: (e) => ee(e.target.value),
                                  className: `h-8 px-2.5 border border-slate-300 rounded-lg text-xs font-bold text-slate-800 bg-white focus:border-emerald-500 outline-none cursor-pointer`,
                                  children: [
                                    (0, $.jsx)(`option`, {
                                      value: `ALL`,
                                      children: `全部深度 (D0 ~ D4)`,
                                    }),
                                    (0, $.jsx)(`option`, {
                                      value: `0`,
                                      children: `Depth 0 · 种子入口 (首页/Sitemap)`,
                                    }),
                                    (0, $.jsx)(`option`, {
                                      value: `1`,
                                      children: `Depth 1 · 一级频道导航`,
                                    }),
                                    (0, $.jsx)(`option`, {
                                      value: `2`,
                                      children: `Depth 2 · 二级专栏/分页列表`,
                                    }),
                                    (0, $.jsx)(`option`, {
                                      value: `3`,
                                      children: `Depth 3 · 正文与数据详情`,
                                    }),
                                    (0, $.jsx)(`option`, {
                                      value: `4`,
                                      children: `Depth 4 · 关联文书与附件`,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, $.jsxs)(`div`, {
                              className: `flex items-center gap-1.5`,
                              children: [
                                (0, $.jsx)(`span`, {
                                  className: `text-[11.5px] font-bold text-slate-700`,
                                  children: `调度动作:`,
                                }),
                                (0, $.jsxs)(`select`, {
                                  value: M,
                                  onChange: (e) => F(e.target.value),
                                  className: `h-8 px-2.5 border border-slate-300 rounded-lg text-xs font-bold text-slate-800 bg-white focus:border-emerald-500 outline-none cursor-pointer`,
                                  children: [
                                    (0, $.jsx)(`option`, {
                                      value: `ALL`,
                                      children: `全部动作与状态`,
                                    }),
                                    (0, $.jsx)(`option`, {
                                      value: `ingested`,
                                      children: `正文入库 (200 OK)`,
                                    }),
                                    (0, $.jsx)(`option`, {
                                      value: `discovered`,
                                      children: `发散超链接 (推进队列)`,
                                    }),
                                    (0, $.jsx)(`option`, {
                                      value: `dedup_skipped`,
                                      children: `布隆去重拦截`,
                                    }),
                                    (0, $.jsx)(`option`, {
                                      value: `regex_filtered`,
                                      children: `正则黑名单过滤`,
                                    }),
                                    (0, $.jsx)(`option`, {
                                      value: `retry`,
                                      children: `重试已恢复`,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, $.jsxs)(`div`, {
                              className: `flex items-center gap-1.5`,
                              children: [
                                (0, $.jsx)(`span`, {
                                  className: `text-[11.5px] font-bold text-slate-700`,
                                  children: `页面角色:`,
                                }),
                                (0, $.jsxs)(`select`, {
                                  value: I,
                                  onChange: (e) => L(e.target.value),
                                  className: `h-8 px-2.5 border border-slate-300 rounded-lg text-xs font-semibold text-slate-800 bg-white focus:border-emerald-500 outline-none cursor-pointer`,
                                  children: [
                                    (0, $.jsx)(`option`, {
                                      value: `ALL`,
                                      children: `全部页面类型`,
                                    }),
                                    (0, $.jsx)(`option`, {
                                      value: `detail`,
                                      children: `正文详情页 (Detail)`,
                                    }),
                                    (0, $.jsx)(`option`, {
                                      value: `list`,
                                      children: `分页列表页 (List)`,
                                    }),
                                    (0, $.jsx)(`option`, {
                                      value: `hub_index`,
                                      children: `一级频道导航 (Hub)`,
                                    }),
                                    (0, $.jsx)(`option`, {
                                      value: `seed`,
                                      children: `种子入口 (Seed)`,
                                    }),
                                    (0, $.jsx)(`option`, {
                                      value: `attachment`,
                                      children: `关联文书附件 (Attachment)`,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, $.jsxs)(`div`, {
                              className: `relative flex-1 min-w-[220px] max-w-[340px]`,
                              children: [
                                (0, $.jsx)(Be, {
                                  className: `w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5`,
                                }),
                                (0, $.jsx)(`input`, {
                                  type: `text`,
                                  value: d,
                                  onChange: (e) => f(e.target.value),
                                  placeholder: `搜索 URL、页面标题或上级回溯来源...`,
                                  className: `w-full h-8 pl-8 pr-3 border border-slate-300 rounded-lg text-xs text-slate-800 bg-white focus:border-emerald-500 outline-none placeholder:text-slate-400 font-mono`,
                                }),
                              ],
                            }),
                          ],
                        })
                      : (0, $.jsxs)($.Fragment, {
                          children: [
                            (0, $.jsxs)(`div`, {
                              className: `flex items-center gap-1.5`,
                              children: [
                                (0, $.jsx)(`span`, {
                                  className: `text-[11.5px] font-bold text-slate-700`,
                                  children: `板块:`,
                                }),
                                (0, $.jsxs)(`select`, {
                                  value: a,
                                  onChange: (e) => o(e.target.value),
                                  className: `h-8 px-2.5 border border-slate-300 rounded-lg text-xs font-semibold text-slate-800 bg-white focus:border-purple-500 outline-none cursor-pointer`,
                                  children: [
                                    (0, $.jsxs)(`option`, {
                                      value: `ALL`,
                                      children: [`全部板块 (`, U.length, `)`],
                                    }),
                                    U.map((e) =>
                                      (0, $.jsx)(
                                        `option`,
                                        { value: e, children: e },
                                        e,
                                      ),
                                    ),
                                  ],
                                }),
                              ],
                            }),
                            (0, $.jsxs)(`div`, {
                              className: `flex items-center gap-1.5`,
                              children: [
                                (0, $.jsx)(`span`, {
                                  className: `text-[11.5px] font-bold text-slate-700`,
                                  children: `状态:`,
                                }),
                                (0, $.jsxs)(`select`, {
                                  value: s,
                                  onChange: (e) => c(e.target.value),
                                  className: `h-8 px-2.5 border border-slate-300 rounded-lg text-xs font-semibold text-slate-800 bg-white focus:border-purple-500 outline-none cursor-pointer`,
                                  children: [
                                    (0, $.jsx)(`option`, {
                                      value: `ALL`,
                                      children: `全部状态`,
                                    }),
                                    (0, $.jsx)(`option`, {
                                      value: `success`,
                                      children: `抓取成功 (200 OK)`,
                                    }),
                                    (0, $.jsx)(`option`, {
                                      value: `duplicate`,
                                      children: `增量去重跳过`,
                                    }),
                                    (0, $.jsx)(`option`, {
                                      value: `retry`,
                                      children: `重试已恢复`,
                                    }),
                                    (0, $.jsx)(`option`, {
                                      value: `warning`,
                                      children: `字段缺失预警`,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, $.jsxs)(`div`, {
                              className: `relative flex-1 min-w-[200px] max-w-[280px]`,
                              children: [
                                (0, $.jsx)(Be, {
                                  className: `w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5`,
                                }),
                                (0, $.jsx)(`input`, {
                                  type: `text`,
                                  value: d,
                                  onChange: (e) => f(e.target.value),
                                  placeholder: `搜索文章标题或 URL...`,
                                  className: `w-full h-8 pl-8 pr-3 border border-slate-300 rounded-lg text-xs text-slate-800 bg-white focus:border-purple-500 outline-none placeholder:text-slate-400`,
                                }),
                              ],
                            }),
                          ],
                        }),
                  (0, $.jsxs)(`div`, {
                    className: `flex items-center gap-1 text-[11px] text-slate-600`,
                    children: [
                      (0, $.jsx)(j, {
                        className: `w-3.5 h-3.5 text-slate-400`,
                      }),
                      (0, $.jsx)(`input`, {
                        type: `date`,
                        value: h,
                        onChange: (e) => g(e.target.value),
                        className: `h-8 px-2 border border-slate-300 rounded-lg text-xs font-medium text-slate-700 bg-white outline-none cursor-pointer`,
                      }),
                      (0, $.jsx)(`span`, {
                        className: `text-slate-400`,
                        children: `至`,
                      }),
                      (0, $.jsx)(`input`, {
                        type: `date`,
                        value: _,
                        onChange: (e) => v(e.target.value),
                        className: `h-8 px-2 border border-slate-300 rounded-lg text-xs font-medium text-slate-700 bg-white outline-none cursor-pointer`,
                      }),
                      (h || _) &&
                        (0, $.jsx)(`button`, {
                          type: `button`,
                          onClick: () => {
                            (g(``), v(``));
                          },
                          className: `h-8 px-2 text-[11px] text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded border border-slate-200 transition-colors cursor-pointer`,
                          children: `重置`,
                        }),
                    ],
                  }),
                ],
              }),
              (0, $.jsx)(`div`, {
                className: `flex items-center gap-2`,
                children: (0, $.jsxs)(`button`, {
                  type: `button`,
                  onClick: () => b(!y),
                  className: `h-8 px-2.5 rounded-lg border text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${y ? `bg-emerald-50 text-emerald-700 border-emerald-300` : `bg-white text-slate-600 border-slate-300 hover:bg-slate-50`}`,
                  children: [
                    (0, $.jsx)(Ie, {
                      className: `w-3.5 h-3.5 ${y ? `animate-spin` : ``}`,
                    }),
                    (0, $.jsx)(`span`, {
                      children: y ? `自动流已开启` : `已暂停自动流`,
                    }),
                  ],
                }),
              }),
            ],
          }),
          (0, $.jsx)(`div`, {
            className: `flex-1 overflow-y-auto min-h-[380px] bg-white`,
            children:
              r === `table`
                ? z
                  ? (0, $.jsx)(`div`, {
                      className: `w-full overflow-x-auto`,
                      children: (0, $.jsxs)(`table`, {
                        className: `w-full text-left text-xs border-collapse`,
                        children: [
                          (0, $.jsx)(`thead`, {
                            className: `bg-slate-100/80 border-b border-slate-200 text-slate-600 font-bold sticky top-0 z-10 backdrop-blur-xs`,
                            children: (0, $.jsxs)(`tr`, {
                              children: [
                                (0, $.jsx)(`th`, {
                                  className: `py-2.5 px-4 w-36 whitespace-nowrap`,
                                  children: `目标 ID`,
                                }),
                                (0, $.jsx)(`th`, {
                                  className: `py-2.5 px-4 w-44 whitespace-nowrap`,
                                  children: `采集时间`,
                                }),
                                (0, $.jsx)(`th`, {
                                  className: `py-2.5 px-4 w-44 whitespace-nowrap`,
                                  children: `入库时间`,
                                }),
                                (0, $.jsx)(`th`, {
                                  className: `py-2.5 px-4 min-w-[360px]`,
                                  children: `抓取 URL`,
                                }),
                                (0, $.jsx)(`th`, {
                                  className: `py-2.5 px-4 w-28 text-center whitespace-nowrap`,
                                  children: `状态`,
                                }),
                              ],
                            }),
                          }),
                          (0, $.jsx)(`tbody`, {
                            className: `divide-y divide-slate-100 font-mono text-[11.5px]`,
                            children:
                              G.length === 0
                                ? (0, $.jsx)(`tr`, {
                                    children: (0, $.jsx)(`td`, {
                                      colSpan: 5,
                                      className: `py-12 text-center text-slate-400 font-sans`,
                                      children: `未检索到符合条件的 ID 抓取流水记录`,
                                    }),
                                  })
                                : G.map((e) => {
                                    let t =
                                      e.status === `success` ||
                                      e.status === `retrying`;
                                    return (0, $.jsxs)(
                                      `tr`,
                                      {
                                        className: `hover:bg-slate-50 transition-colors group`,
                                        children: [
                                          (0, $.jsx)(`td`, {
                                            className: `py-3 px-4 font-bold text-slate-900 align-top whitespace-nowrap`,
                                            children: (0, $.jsxs)(`span`, {
                                              className: `px-2 py-0.5 rounded bg-slate-100 text-slate-800 border border-slate-200 font-mono`,
                                              children: [`#`, e.targetId],
                                            }),
                                          }),
                                          (0, $.jsx)(`td`, {
                                            className: `py-3 px-4 text-slate-700 align-top whitespace-nowrap`,
                                            children: e.collectTime,
                                          }),
                                          (0, $.jsx)(`td`, {
                                            className: `py-3 px-4 text-slate-700 align-top whitespace-nowrap`,
                                            children:
                                              t &&
                                              e.inboundTime &&
                                              e.inboundTime !== `-`
                                                ? (0, $.jsx)(`span`, {
                                                    className: `font-semibold text-emerald-700`,
                                                    children: e.inboundTime,
                                                  })
                                                : (0, $.jsx)(`span`, {
                                                    className: `text-slate-400 font-sans`,
                                                    children: `-`,
                                                  }),
                                          }),
                                          (0, $.jsx)(`td`, {
                                            className: `py-3 px-4 align-top`,
                                            children: (0, $.jsxs)(`div`, {
                                              className: `flex items-center gap-2 text-[12px] text-slate-700`,
                                              children: [
                                                (0, $.jsx)(`span`, {
                                                  className: `truncate max-w-[420px]`,
                                                  title: e.url,
                                                  children: e.url,
                                                }),
                                                (0, $.jsx)(`button`, {
                                                  type: `button`,
                                                  onClick: () => _e(e.url),
                                                  className: `p-1 hover:bg-slate-200 rounded text-slate-500 cursor-pointer`,
                                                  children:
                                                    x === e.url
                                                      ? (0, $.jsx)(P, {
                                                          className: `w-3 h-3 text-emerald-600`,
                                                        })
                                                      : (0, $.jsx)(oe, {
                                                          className: `w-3 h-3`,
                                                        }),
                                                }),
                                              ],
                                            }),
                                          }),
                                          (0, $.jsx)(`td`, {
                                            className: `py-3 px-4 text-center align-top whitespace-nowrap`,
                                            children: t
                                              ? (0, $.jsxs)(`span`, {
                                                  className: `inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200`,
                                                  children: [
                                                    (0, $.jsx)(B, {
                                                      className: `w-3 h-3 text-emerald-600`,
                                                    }),
                                                    (0, $.jsx)(`span`, {
                                                      children: `成功`,
                                                    }),
                                                  ],
                                                })
                                              : (0, $.jsxs)(`span`, {
                                                  className: `inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-rose-50 text-rose-700 border border-rose-200`,
                                                  children: [
                                                    (0, $.jsx)(ne, {
                                                      className: `w-3 h-3 text-rose-600`,
                                                    }),
                                                    (0, $.jsx)(`span`, {
                                                      children: `失败`,
                                                    }),
                                                  ],
                                                }),
                                          }),
                                        ],
                                      },
                                      e.id,
                                    );
                                  }),
                          }),
                        ],
                      }),
                    })
                  : H
                    ? (0, $.jsx)(`div`, {
                        className: `w-full overflow-x-auto`,
                        children: (0, $.jsxs)(`table`, {
                          className: `w-full text-left text-xs border-collapse`,
                          children: [
                            (0, $.jsx)(`thead`, {
                              className: `bg-slate-100/80 border-b border-slate-200 text-slate-600 font-bold sticky top-0 z-10 backdrop-blur-xs`,
                              children: (0, $.jsxs)(`tr`, {
                                children: [
                                  (0, $.jsx)(`th`, {
                                    className: `py-2.5 px-3 w-28 whitespace-nowrap`,
                                    children: `下钻深度`,
                                  }),
                                  (0, $.jsx)(`th`, {
                                    className: `py-2.5 px-3 w-28 whitespace-nowrap`,
                                    children: `页面角色`,
                                  }),
                                  (0, $.jsx)(`th`, {
                                    className: `py-2.5 px-3 w-40 whitespace-nowrap`,
                                    children: `采集时刻`,
                                  }),
                                  (0, $.jsx)(`th`, {
                                    className: `py-2.5 px-4 min-w-[380px]`,
                                    children: `目标 URL 与上级回溯来源 (Referer)`,
                                  }),
                                  (0, $.jsx)(`th`, {
                                    className: `py-2.5 px-3 w-32 whitespace-nowrap text-center`,
                                    children: `调度动作与状态`,
                                  }),
                                  (0, $.jsx)(`th`, {
                                    className: `py-2.5 px-3 w-28 whitespace-nowrap text-right`,
                                    children: `耗时与产出`,
                                  }),
                                  (0, $.jsx)(`th`, {
                                    className: `py-2.5 px-3 w-24 whitespace-nowrap text-center`,
                                    children: `操作`,
                                  }),
                                ],
                              }),
                            }),
                            (0, $.jsx)(`tbody`, {
                              className: `divide-y divide-slate-100 font-mono text-[11.5px]`,
                              children:
                                K.length === 0
                                  ? (0, $.jsx)(`tr`, {
                                      children: (0, $.jsx)(`td`, {
                                        colSpan: 7,
                                        className: `py-12 text-center text-slate-400 font-sans`,
                                        children: `未检索到符合条件的深度递归下钻日志记录`,
                                      }),
                                    })
                                  : K.map((e) => {
                                      let t = [
                                          `bg-purple-100 text-purple-800 border-purple-300`,
                                          `bg-blue-100 text-blue-800 border-blue-300`,
                                          `bg-indigo-100 text-indigo-800 border-indigo-300`,
                                          `bg-emerald-100 text-emerald-800 border-emerald-300`,
                                          `bg-amber-100 text-amber-800 border-amber-300`,
                                        ],
                                        n = t[Math.min(e.depth, t.length - 1)];
                                      return (0, $.jsxs)(
                                        `tr`,
                                        {
                                          className: `hover:bg-slate-50 transition-colors group`,
                                          children: [
                                            (0, $.jsx)(`td`, {
                                              className: `py-3 px-3 align-top whitespace-nowrap`,
                                              children: (0, $.jsxs)(`span`, {
                                                className: `px-2 py-0.5 rounded font-black text-[10.5px] border ${n}`,
                                                children: [
                                                  `D`,
                                                  e.depth,
                                                  ` · `,
                                                  e.depth === 0
                                                    ? `种子`
                                                    : e.depth === 1
                                                      ? `导航`
                                                      : e.depth === 2
                                                        ? `列表`
                                                        : e.depth === 3
                                                          ? `详情`
                                                          : `附件`,
                                                ],
                                              }),
                                            }),
                                            (0, $.jsx)(`td`, {
                                              className: `py-3 px-3 align-top whitespace-nowrap`,
                                              children: (0, $.jsx)(`span`, {
                                                className: `text-[11px] font-sans font-semibold text-slate-700 bg-slate-100 px-2 py-0.5 rounded`,
                                                children: e.pageTypeLabel,
                                              }),
                                            }),
                                            (0, $.jsx)(`td`, {
                                              className: `py-3 px-3 align-top whitespace-nowrap text-slate-600`,
                                              children: e.collectTime,
                                            }),
                                            (0, $.jsx)(`td`, {
                                              className: `py-3 px-4 align-top`,
                                              children: (0, $.jsxs)(`div`, {
                                                className: `flex flex-col gap-1`,
                                                children: [
                                                  e.title &&
                                                    (0, $.jsx)(`span`, {
                                                      className: `font-sans font-bold text-slate-900 text-xs`,
                                                      children: e.title,
                                                    }),
                                                  (0, $.jsxs)(`div`, {
                                                    className: `flex items-center gap-2 text-slate-700`,
                                                    children: [
                                                      (0, $.jsx)(`span`, {
                                                        className: `truncate max-w-[480px]`,
                                                        title: e.url,
                                                        children: e.url,
                                                      }),
                                                      (0, $.jsxs)(`div`, {
                                                        className: `flex items-center gap-1 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity`,
                                                        children: [
                                                          (0, $.jsx)(`button`, {
                                                            type: `button`,
                                                            onClick: () =>
                                                              _e(e.url),
                                                            className: `p-1 hover:bg-slate-200 rounded text-slate-500 cursor-pointer`,
                                                            title: `复制链接`,
                                                            children:
                                                              x === e.url
                                                                ? (0, $.jsx)(
                                                                    P,
                                                                    {
                                                                      className: `w-3 h-3 text-emerald-600`,
                                                                    },
                                                                  )
                                                                : (0, $.jsx)(
                                                                    oe,
                                                                    {
                                                                      className: `w-3 h-3`,
                                                                    },
                                                                  ),
                                                          }),
                                                          (0, $.jsx)(`a`, {
                                                            href: e.url,
                                                            target: `_blank`,
                                                            rel: `noreferrer`,
                                                            className: `p-1 hover:bg-slate-200 rounded text-slate-500 cursor-pointer`,
                                                            title: `在新窗口预览`,
                                                            children: (0,
                                                            $.jsx)(ce, {
                                                              className: `w-3 h-3`,
                                                            }),
                                                          }),
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                  e.parentUrl &&
                                                    (0, $.jsxs)(`div`, {
                                                      className: `flex items-center gap-1.5 text-[10.5px] text-slate-400 font-sans`,
                                                      children: [
                                                        (0, $.jsx)(se, {
                                                          className: `w-3 h-3 text-slate-400 shrink-0`,
                                                        }),
                                                        (0, $.jsx)(`span`, {
                                                          children: `发现自上级:`,
                                                        }),
                                                        (0, $.jsx)(`span`, {
                                                          className: `font-mono text-slate-600 truncate max-w-sm`,
                                                          title: e.parentUrl,
                                                          children: e.parentUrl,
                                                        }),
                                                      ],
                                                    }),
                                                  (0, $.jsx)(`div`, {
                                                    className: `text-[10.5px] text-slate-500 font-sans mt-0.5`,
                                                    children: e.details,
                                                  }),
                                                ],
                                              }),
                                            }),
                                            (0, $.jsxs)(`td`, {
                                              className: `py-3 px-3 align-top whitespace-nowrap text-center`,
                                              children: [
                                                e.action === `ingested` &&
                                                  (0, $.jsxs)(`span`, {
                                                    className: `inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-800 border border-emerald-200`,
                                                    children: [
                                                      (0, $.jsx)(B, {
                                                        className: `w-3 h-3 text-emerald-600`,
                                                      }),
                                                      (0, $.jsx)(`span`, {
                                                        children: `正文入库`,
                                                      }),
                                                    ],
                                                  }),
                                                e.action === `discovered` &&
                                                  (0, $.jsxs)(`span`, {
                                                    className: `inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-blue-50 text-blue-800 border border-blue-200`,
                                                    children: [
                                                      (0, $.jsx)(se, {
                                                        className: `w-3 h-3 text-blue-600`,
                                                      }),
                                                      (0, $.jsxs)(`span`, {
                                                        children: [
                                                          `发散 `,
                                                          e.discoveredCount,
                                                          ` 链`,
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                e.action === `dedup_skipped` &&
                                                  (0, $.jsxs)(`span`, {
                                                    className: `inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-50 text-amber-800 border border-amber-200`,
                                                    children: [
                                                      (0, $.jsx)(Ge, {
                                                        className: `w-3 h-3 text-amber-600`,
                                                      }),
                                                      (0, $.jsx)(`span`, {
                                                        children: `布隆去重`,
                                                      }),
                                                    ],
                                                  }),
                                                e.action === `regex_filtered` &&
                                                  (0, $.jsxs)(`span`, {
                                                    className: `inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-rose-50 text-rose-800 border border-rose-200`,
                                                    children: [
                                                      (0, $.jsx)(ne, {
                                                        className: `w-3 h-3 text-rose-600`,
                                                      }),
                                                      (0, $.jsx)(`span`, {
                                                        children: `正则过滤`,
                                                      }),
                                                    ],
                                                  }),
                                                e.action === `retry` &&
                                                  (0, $.jsxs)(`span`, {
                                                    className: `inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-sky-50 text-sky-800 border border-sky-200`,
                                                    children: [
                                                      (0, $.jsx)(Le, {
                                                        className: `w-3 h-3 text-sky-600`,
                                                      }),
                                                      (0, $.jsx)(`span`, {
                                                        children: `重试恢复`,
                                                      }),
                                                    ],
                                                  }),
                                              ],
                                            }),
                                            (0, $.jsxs)(`td`, {
                                              className: `py-3 px-3 align-top whitespace-nowrap text-right`,
                                              children: [
                                                (0, $.jsx)(`div`, {
                                                  className: `font-bold text-slate-800`,
                                                  children: e.latency,
                                                }),
                                                e.contentSize &&
                                                  (0, $.jsx)(`div`, {
                                                    className: `text-[10.5px] text-emerald-700 font-bold`,
                                                    children: e.contentSize,
                                                  }),
                                              ],
                                            }),
                                            (0, $.jsx)(`td`, {
                                              className: `py-3 px-3 align-top whitespace-nowrap text-center`,
                                              children: (0, $.jsx)(`button`, {
                                                type: `button`,
                                                onClick: () => te(e),
                                                className: `px-2 py-1 rounded bg-slate-100 hover:bg-emerald-50 hover:text-emerald-700 text-slate-700 text-[11px] font-bold transition-colors cursor-pointer`,
                                                children: `血缘详情`,
                                              }),
                                            }),
                                          ],
                                        },
                                        e.id,
                                      );
                                    }),
                            }),
                          ],
                        }),
                      })
                    : (0, $.jsx)(`div`, {
                        className: `w-full overflow-x-auto`,
                        children: (0, $.jsxs)(`table`, {
                          className: `w-full text-left text-xs border-collapse`,
                          children: [
                            (0, $.jsx)(`thead`, {
                              className: `bg-slate-100/80 border-b border-slate-200 text-slate-600 font-bold sticky top-0 z-10 backdrop-blur-xs`,
                              children: (0, $.jsxs)(`tr`, {
                                children: [
                                  (0, $.jsx)(`th`, {
                                    className: `py-2.5 px-4 w-40 whitespace-nowrap`,
                                    children: `板块`,
                                  }),
                                  (0, $.jsx)(`th`, {
                                    className: `py-2.5 px-4 w-44 whitespace-nowrap`,
                                    children: `采集时间`,
                                  }),
                                  (0, $.jsx)(`th`, {
                                    className: `py-2.5 px-4 min-w-[380px]`,
                                    children: `链接`,
                                  }),
                                  (0, $.jsx)(`th`, {
                                    className: `py-2.5 px-4 w-32 whitespace-nowrap`,
                                    children: `状态`,
                                  }),
                                ],
                              }),
                            }),
                            (0, $.jsx)(`tbody`, {
                              className: `divide-y divide-slate-100 text-[12px]`,
                              children:
                                W.length === 0
                                  ? (0, $.jsx)(`tr`, {
                                      children: (0, $.jsx)(`td`, {
                                        colSpan: 4,
                                        className: `py-12 text-center text-slate-400`,
                                        children: `未检索到符合条件的板块采集流水记录`,
                                      }),
                                    })
                                  : W.map((e) =>
                                      (0, $.jsxs)(
                                        `tr`,
                                        {
                                          className: `hover:bg-slate-50 transition-colors group`,
                                          children: [
                                            (0, $.jsx)(`td`, {
                                              className: `py-3 px-4 font-semibold text-slate-900 align-top whitespace-nowrap`,
                                              children: (0, $.jsx)(`span`, {
                                                className: `px-2 py-0.5 rounded bg-purple-50 text-purple-700 border border-purple-200 text-xs`,
                                                children: e.channel,
                                              }),
                                            }),
                                            (0, $.jsx)(`td`, {
                                              className: `py-3 px-4 text-slate-600 font-mono align-top whitespace-nowrap`,
                                              children: e.collectTime,
                                            }),
                                            (0, $.jsx)(`td`, {
                                              className: `py-3 px-4 align-top`,
                                              children: (0, $.jsxs)(`div`, {
                                                className: `flex flex-col gap-1`,
                                                children: [
                                                  e.title &&
                                                    (0, $.jsx)(`span`, {
                                                      className: `font-medium text-slate-800 text-[12.5px] leading-tight`,
                                                      children: e.title,
                                                    }),
                                                  (0, $.jsxs)(`div`, {
                                                    className: `flex items-center gap-2 text-slate-500 font-mono text-[11px]`,
                                                    children: [
                                                      (0, $.jsx)(`span`, {
                                                        className: `truncate max-w-[420px]`,
                                                        title: e.url,
                                                        children: e.url,
                                                      }),
                                                      (0, $.jsx)(`button`, {
                                                        type: `button`,
                                                        onClick: () =>
                                                          _e(e.url),
                                                        className: `p-1 hover:bg-slate-200 rounded text-slate-500 cursor-pointer`,
                                                        children:
                                                          x === e.url
                                                            ? (0, $.jsx)(P, {
                                                                className: `w-3 h-3 text-emerald-600`,
                                                              })
                                                            : (0, $.jsx)(oe, {
                                                                className: `w-3 h-3`,
                                                              }),
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                            }),
                                            (0, $.jsxs)(`td`, {
                                              className: `py-3 px-4 align-top whitespace-nowrap`,
                                              children: [
                                                e.status === `success` &&
                                                  (0, $.jsxs)(`span`, {
                                                    className: `inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200`,
                                                    children: [
                                                      (0, $.jsx)(B, {
                                                        className: `w-3.5 h-3.5`,
                                                      }),
                                                      (0, $.jsx)(`span`, {
                                                        children: `抓取成功`,
                                                      }),
                                                    ],
                                                  }),
                                                e.status === `duplicate` &&
                                                  (0, $.jsxs)(`span`, {
                                                    className: `inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-blue-50 text-blue-700 border border-blue-200`,
                                                    children: [
                                                      (0, $.jsx)(N, {
                                                        className: `w-3.5 h-3.5`,
                                                      }),
                                                      (0, $.jsx)(`span`, {
                                                        children: `去重跳过`,
                                                      }),
                                                    ],
                                                  }),
                                                e.status === `retry` &&
                                                  (0, $.jsxs)(`span`, {
                                                    className: `inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-50 text-amber-700 border border-amber-200`,
                                                    children: [
                                                      (0, $.jsx)(Le, {
                                                        className: `w-3.5 h-3.5`,
                                                      }),
                                                      (0, $.jsx)(`span`, {
                                                        children: `重试恢复`,
                                                      }),
                                                    ],
                                                  }),
                                                e.status === `warning` &&
                                                  (0, $.jsxs)(`span`, {
                                                    className: `inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-orange-50 text-orange-700 border border-orange-200`,
                                                    children: [
                                                      (0, $.jsx)(ct, {
                                                        className: `w-3.5 h-3.5`,
                                                      }),
                                                      (0, $.jsx)(`span`, {
                                                        children: `字段告警`,
                                                      }),
                                                    ],
                                                  }),
                                              ],
                                            }),
                                          ],
                                        },
                                        e.id,
                                      ),
                                    ),
                            }),
                          ],
                        }),
                      })
                : (0, $.jsxs)(`div`, {
                    className: `p-5 bg-slate-950 text-slate-200 font-mono text-xs overflow-y-auto space-y-2.5 min-h-[380px]`,
                    children: [
                      (0, $.jsxs)(`div`, {
                        className: `flex items-center gap-2 text-slate-400 pb-2 border-b border-slate-800`,
                        children: [
                          (0, $.jsx)(rt, {
                            className: `w-4 h-4 text-emerald-400`,
                          }),
                          (0, $.jsxs)(`span`, {
                            children: [
                              `=== `,
                              z
                                ? `ID自增长序列管道探测日志回显`
                                : H
                                  ? `全站深度递归下钻爬虫引擎调度日志回显`
                                  : `板块轮巡采集集群执行流水回显`,
                              ` (Tail `,
                              z ? E.length : H ? O.length : w.length,
                              ` lines) ===`,
                            ],
                          }),
                        ],
                      }),
                      z
                        ? G.map((e, t) =>
                            (0, $.jsxs)(
                              `div`,
                              {
                                className: `flex items-start gap-2 leading-relaxed text-xs`,
                                children: [
                                  (0, $.jsx)(`span`, {
                                    className: `text-slate-500 select-none`,
                                    children: e.collectTime.slice(11),
                                  }),
                                  (0, $.jsxs)(`span`, {
                                    className: `text-amber-400 font-bold`,
                                    children: [`[ID:`, e.targetId, `]`],
                                  }),
                                  (0, $.jsxs)(`span`, {
                                    className: `px-1 py-0.2 rounded text-[10px] font-bold select-none ${e.statusCode === 200 ? `bg-emerald-950 text-emerald-300` : e.statusCode === 404 ? `bg-amber-950 text-amber-300` : `bg-rose-950 text-rose-300`}`,
                                    children: [`[HTTP `, e.statusCode, `]`],
                                  }),
                                  (0, $.jsx)(`span`, {
                                    className: `text-slate-300 truncate max-w-xl`,
                                    children: e.url,
                                  }),
                                  (0, $.jsxs)(`span`, {
                                    className: `text-slate-500`,
                                    children: [`(`, e.latency, `)`],
                                  }),
                                ],
                              },
                              t,
                            ),
                          )
                        : H
                          ? K.map((e, t) =>
                              (0, $.jsxs)(
                                `div`,
                                {
                                  className: `flex items-start gap-2 leading-relaxed text-xs`,
                                  children: [
                                    (0, $.jsx)(`span`, {
                                      className: `text-slate-500 select-none`,
                                      children: e.collectTime.slice(11),
                                    }),
                                    (0, $.jsxs)(`span`, {
                                      className: `px-1 py-0.2 rounded text-[10px] font-bold select-none ${e.depth === 0 ? `bg-purple-900 text-purple-200` : e.depth === 1 ? `bg-blue-900 text-blue-200` : e.depth === 2 ? `bg-indigo-900 text-indigo-200` : e.depth === 3 ? `bg-emerald-900 text-emerald-200` : `bg-amber-900 text-amber-200`}`,
                                      children: [`[Depth: `, e.depth, `]`],
                                    }),
                                    (0, $.jsxs)(`span`, {
                                      className: `text-slate-400 font-bold`,
                                      children: [
                                        `[`,
                                        e.pageType.toUpperCase(),
                                        `]`,
                                      ],
                                    }),
                                    (0, $.jsxs)(`span`, {
                                      className: `px-1 py-0.2 rounded text-[10px] font-bold select-none ${e.action === `ingested` ? `bg-emerald-950 text-emerald-300` : e.action === `discovered` ? `bg-blue-950 text-blue-300` : e.action === `dedup_skipped` ? `bg-amber-950 text-amber-300` : `bg-rose-950 text-rose-300`}`,
                                      children: [`[`, e.actionLabel, `]`],
                                    }),
                                    (0, $.jsx)(`span`, {
                                      className: `text-slate-300 truncate max-w-lg`,
                                      children: e.url,
                                    }),
                                    e.parentUrl &&
                                      (0, $.jsxs)(`span`, {
                                        className: `text-slate-500 text-[10.5px] truncate max-w-xs`,
                                        children: [`Referer: `, e.parentUrl],
                                      }),
                                    (0, $.jsx)(`span`, {
                                      className: `text-emerald-400 font-semibold`,
                                      children: e.latency,
                                    }),
                                    e.contentSize &&
                                      (0, $.jsxs)(`span`, {
                                        className: `text-blue-300`,
                                        children: [`(`, e.contentSize, `)`],
                                      }),
                                  ],
                                },
                                t,
                              ),
                            )
                          : W.map((e, t) =>
                              (0, $.jsxs)(
                                `div`,
                                {
                                  className: `flex items-start gap-2 leading-relaxed text-xs`,
                                  children: [
                                    (0, $.jsx)(`span`, {
                                      className: `text-slate-500 select-none`,
                                      children: e.collectTime.slice(11),
                                    }),
                                    (0, $.jsxs)(`span`, {
                                      className: `text-purple-400 font-bold`,
                                      children: [`[`, e.channel, `]`],
                                    }),
                                    (0, $.jsxs)(`span`, {
                                      className: `px-1 py-0.2 rounded text-[10px] font-bold select-none ${e.status === `success` ? `bg-emerald-950 text-emerald-300` : e.status === `duplicate` ? `bg-blue-950 text-blue-300` : `bg-amber-950 text-amber-300`}`,
                                      children: [
                                        `[`,
                                        e.status.toUpperCase(),
                                        `]`,
                                      ],
                                    }),
                                    (0, $.jsx)(`span`, {
                                      className: `text-slate-300 truncate max-w-xl`,
                                      children: e.url,
                                    }),
                                    (0, $.jsxs)(`span`, {
                                      className: `text-slate-500`,
                                      children: [`(`, e.latency, `)`],
                                    }),
                                  ],
                                },
                                t,
                              ),
                            ),
                    ],
                  }),
          }),
          (0, $.jsxs)(`div`, {
            className: `px-6 py-3.5 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs`,
            children: [
              (0, $.jsxs)(`div`, {
                className: `flex items-center gap-2 text-slate-500`,
                children: [
                  (0, $.jsx)(Ie, {
                    className: `w-3.5 h-3.5 text-emerald-600 ${y ? `animate-spin` : ``}`,
                  }),
                  (0, $.jsxs)(`span`, {
                    children: [
                      `已加载 `,
                      (0, $.jsx)(`strong`, {
                        className: `text-slate-800 font-mono`,
                        children: z ? G.length : H ? K.length : W.length,
                      }),
                      ` 条实时采集流水记录`,
                    ],
                  }),
                ],
              }),
              (0, $.jsx)(`button`, {
                type: `button`,
                onClick: n,
                className: `h-8.5 px-4 rounded-lg bg-white border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer shadow-2xs`,
                children: `关闭看板`,
              }),
            ],
          }),
          R &&
            (0, $.jsx)(`div`, {
              className: `fixed inset-0 z-60 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150`,
              children: (0, $.jsxs)(`div`, {
                className: `bg-white rounded-2xl max-w-2xl w-full border border-slate-200 shadow-2xl p-6 space-y-4 max-h-[85vh] overflow-y-auto`,
                children: [
                  (0, $.jsxs)(`div`, {
                    className: `flex items-center justify-between border-b border-slate-200 pb-3`,
                    children: [
                      (0, $.jsxs)(`div`, {
                        className: `flex items-center gap-2`,
                        children: [
                          (0, $.jsxs)(`span`, {
                            className: `px-2 py-0.5 rounded text-xs font-mono font-bold bg-emerald-100 text-emerald-800`,
                            children: [`D`, R.depth, ` · `, R.pageTypeLabel],
                          }),
                          (0, $.jsx)(`h4`, {
                            className: `text-sm font-black text-slate-900`,
                            children: `深度采集下钻链路与 DOM 抽取成果详情`,
                          }),
                        ],
                      }),
                      (0, $.jsx)(`button`, {
                        type: `button`,
                        onClick: () => te(null),
                        className: `p-1 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100`,
                        children: (0, $.jsx)(Q, { className: `w-4 h-4` }),
                      }),
                    ],
                  }),
                  (0, $.jsxs)(`div`, {
                    className: `bg-slate-50 rounded-xl p-3.5 border border-slate-200 text-xs space-y-2`,
                    children: [
                      (0, $.jsxs)(`div`, {
                        className: `flex items-center justify-between`,
                        children: [
                          (0, $.jsx)(`span`, {
                            className: `text-slate-400`,
                            children: `目标 URL:`,
                          }),
                          (0, $.jsx)(`span`, {
                            className: `font-mono text-slate-800 truncate max-w-md select-all`,
                            children: R.url,
                          }),
                        ],
                      }),
                      (0, $.jsxs)(`div`, {
                        className: `flex items-center justify-between`,
                        children: [
                          (0, $.jsx)(`span`, {
                            className: `text-slate-400`,
                            children: `页面标题:`,
                          }),
                          (0, $.jsx)(`span`, {
                            className: `font-bold text-slate-900`,
                            children: R.title || `—`,
                          }),
                        ],
                      }),
                      (0, $.jsxs)(`div`, {
                        className: `flex items-center justify-between`,
                        children: [
                          (0, $.jsx)(`span`, {
                            className: `text-slate-400`,
                            children: `调度结果:`,
                          }),
                          (0, $.jsxs)(`span`, {
                            className: `font-bold text-emerald-700`,
                            children: [
                              R.actionLabel,
                              ` (HTTP `,
                              R.statusCode,
                              ` / `,
                              R.latency,
                              `)`,
                            ],
                          }),
                        ],
                      }),
                      R.bloomHash &&
                        (0, $.jsxs)(`div`, {
                          className: `flex items-center justify-between`,
                          children: [
                            (0, $.jsx)(`span`, {
                              className: `text-slate-400`,
                              children: `布隆去重指纹:`,
                            }),
                            (0, $.jsx)(`span`, {
                              className: `font-mono text-slate-700`,
                              children: R.bloomHash,
                            }),
                          ],
                        }),
                    ],
                  }),
                  (0, $.jsxs)(`div`, {
                    className: `space-y-2`,
                    children: [
                      (0, $.jsxs)(`span`, {
                        className: `text-xs font-bold text-slate-800 flex items-center gap-1.5`,
                        children: [
                          (0, $.jsx)(ae, {
                            className: `w-3.5 h-3.5 text-emerald-600`,
                          }),
                          (0, $.jsx)(`span`, {
                            children: `有向图下钻血缘全链路回溯 (Hyperlink Ancestry Lineage):`,
                          }),
                        ],
                      }),
                      (0, $.jsx)(`div`, {
                        className: `bg-slate-950 text-slate-300 p-3.5 rounded-xl font-mono text-xs space-y-2`,
                        children: (
                          R.lineagePath || [
                            {
                              depth: 0,
                              role: `种子入口`,
                              url: `http://${t?.domain || `mofcom.gov.cn`}/finance/latest`,
                              title: `聚合首页`,
                            },
                            {
                              depth: R.depth,
                              role: R.pageTypeLabel,
                              url: R.url,
                              title: R.title || `当前节点`,
                            },
                          ]
                        ).map((e, t, n) =>
                          (0, $.jsxs)(
                            `div`,
                            {
                              className: `flex items-start gap-2`,
                              children: [
                                (0, $.jsxs)(`span`, {
                                  className: `text-emerald-400 font-bold shrink-0`,
                                  children: [`D`, e.depth, `:`],
                                }),
                                (0, $.jsxs)(`div`, {
                                  className: `flex-1 truncate`,
                                  children: [
                                    (0, $.jsxs)(`span`, {
                                      className: `text-slate-400`,
                                      children: [`[`, e.role, `]`],
                                    }),
                                    ` `,
                                    (0, $.jsx)(`span`, {
                                      className: `text-slate-200`,
                                      children: e.url,
                                    }),
                                  ],
                                }),
                                t < n.length - 1 &&
                                  (0, $.jsx)(`div`, {
                                    className: `text-slate-500 text-center pl-2`,
                                    children: `↓`,
                                  }),
                              ],
                            },
                            t,
                          ),
                        ),
                      }),
                    ],
                  }),
                  R.extractedFields &&
                    R.extractedFields.length > 0 &&
                    (0, $.jsxs)(`div`, {
                      className: `space-y-2`,
                      children: [
                        (0, $.jsxs)(`span`, {
                          className: `text-xs font-bold text-slate-800 flex items-center gap-1.5`,
                          children: [
                            (0, $.jsx)(ue, {
                              className: `w-3.5 h-3.5 text-blue-600`,
                            }),
                            (0, $.jsx)(`span`, {
                              children: `DOM 规则结构化抽取字段成果:`,
                            }),
                          ],
                        }),
                        (0, $.jsx)(`div`, {
                          className: `grid grid-cols-1 gap-2 text-xs`,
                          children: R.extractedFields.map((e, t) =>
                            (0, $.jsxs)(
                              `div`,
                              {
                                className: `bg-blue-50/50 border border-blue-100 rounded-lg p-2.5 flex items-center justify-between`,
                                children: [
                                  (0, $.jsx)(`span`, {
                                    className: `font-bold text-blue-900`,
                                    children: e.label,
                                  }),
                                  (0, $.jsx)(`span`, {
                                    className: `text-slate-800 font-mono`,
                                    children: e.value,
                                  }),
                                ],
                              },
                              t,
                            ),
                          ),
                        }),
                      ],
                    }),
                  R.discoveredUrls &&
                    R.discoveredUrls.length > 0 &&
                    (0, $.jsxs)(`div`, {
                      className: `space-y-2`,
                      children: [
                        (0, $.jsxs)(`span`, {
                          className: `text-xs font-bold text-slate-800 flex items-center gap-1.5`,
                          children: [
                            (0, $.jsx)(se, {
                              className: `w-3.5 h-3.5 text-purple-600`,
                            }),
                            (0, $.jsxs)(`span`, {
                              children: [
                                `本页提取并发散推入待爬队列的子超链接 (`,
                                R.discoveredUrls.length,
                                `条):`,
                              ],
                            }),
                          ],
                        }),
                        (0, $.jsx)(`div`, {
                          className: `bg-slate-50 border border-slate-200 rounded-xl p-3 font-mono text-[11px] text-slate-700 space-y-1`,
                          children: R.discoveredUrls.map((e, t) =>
                            (0, $.jsxs)(
                              `div`,
                              { className: `truncate`, children: [`• `, e] },
                              t,
                            ),
                          ),
                        }),
                      ],
                    }),
                  (0, $.jsx)(`div`, {
                    className: `flex justify-end pt-2`,
                    children: (0, $.jsx)(`button`, {
                      type: `button`,
                      onClick: () => te(null),
                      className: `px-4 py-2 rounded-xl text-xs font-bold bg-slate-900 text-white hover:bg-slate-800 cursor-pointer`,
                      children: `关闭`,
                    }),
                  }),
                ],
              }),
            }),
        ],
      }),
    });
  },
  Rn = ({ isOpen: e, service: t, config: n, onClose: r, onSaveRule: i }) => {
    let [a, o] = (0, C.useState)(``),
      [s, c] = (0, C.useState)(``),
      l = t?.method === `auto`,
      [u, d] = (0, C.useState)(`stage2`),
      [f, p] = (0, C.useState)(`CSS`),
      [m, h] = (0, C.useState)(`div.news-list > div.news-item`),
      [g, _] = (0, C.useState)(`CSS`),
      [v, y] = (0, C.useState)(`a.title-link@href`),
      [b, x] = (0, C.useState)(`URL参数`),
      [S, w] = (0, C.useState)(`?page={page+1}&cat=macro (Max: 5页)`),
      [stage1Rules, setStage1Rules] = (0, C.useState)([
        {
          id: `stg1-1`,
          key: `detail_link`,
          mode: `XPATH`,
          rule: `//div[@class="news-item"]//a[@class="title-link"]/@href`,
        },
        {
          id: `stg1-2`,
          key: `item_container`,
          mode: `CSS`,
          rule: `div.news-list > div.news-item`,
        },
        {
          id: `stg1-3`,
          key: `next_page`,
          mode: `RE`,
          rule: `href="([^"]+page=\\d+)"`,
        },
        {
          id: `stg1-4`,
          key: `api_data_extractor`,
          mode: `JSON_FUNC`,
          rule: `(res) => res.data?.list?.map(item => item.url) || []`,
        },
      ]),
      [T, E] = (0, C.useState)([
        {
          id: `f-1`,
          key: `title`,
          label: `文章主标题`,
          mode: `CSS`,
          selector: `article.post-detail h1.entry-title`,
          targetAttr: `纯文本内容 (Inner Text)`,
          fallback: ``,
          pipelines: [`去首尾空白`],
          required: !0,
        },
        {
          id: `f-2`,
          key: `author`,
          label: `作者/来源`,
          mode: `XPATH`,
          selector: `//div[@class="meta-author"]/span/text()`,
          targetAttr: `纯文本内容 (Inner Text)`,
          fallback: ``,
          pipelines: [`去首尾空白`],
          required: !1,
        },
        {
          id: `f-3`,
          key: `publish_time`,
          label: `发布时间戳`,
          mode: `CSS`,
          selector: `time.entry-date, span.meta-time`,
          targetAttr: `纯文本内容 (Inner Text)`,
          fallback: ``,
          pipelines: [`去首尾空白`, `标准化时间戳`],
          required: !0,
        },
        {
          id: `f-4`,
          key: `content_body`,
          label: `正文正文HTML`,
          mode: `CSS`,
          selector: `div.post-content, #articleBody`,
          targetAttr: `原始HTML排版 (Inner HTML)`,
          fallback: ``,
          pipelines: [`去首尾空白`, `剥除HTML标签`],
          required: !0,
        },
      ]),
      [D, O] = (0, C.useState)(`f-1`),
      k = T.find((e) => e.id === D) ||
        T[0] || {
          id: `f-1`,
          key: `title`,
          label: `文章主标题`,
          mode: `CSS`,
          selector: `article.post-detail h1.entry-title`,
          targetAttr: `纯文本内容 (Inner Text)`,
          fallback: ``,
          pipelines: [`去首尾空白`],
          required: !0,
        },
      [A, j] = (0, C.useState)(`dom`),
      [ee, M] = (0, C.useState)(`h1.article-title, .entry-title`),
      [N, P] = (0, C.useState)(null),
      [F, I] = (0, C.useState)(!1),
      [L, R] = (0, C.useState)(!1),
      [te, z] = (0, C.useState)(!1),
      [V, re] = (0, C.useState)(!1),
      [H, ae] = (0, C.useState)(!1),
      [se, U] = (0, C.useState)(null),
      [W, G] = (0, C.useState)(18),
      [K, ce] = (0, C.useState)(14),
      q = (e) => {
        (U(e), setTimeout(() => U(null), 2500));
      },
      J = (e) => {
        E((t) => t.map((t) => (t.id === k.id ? { ...t, ...e } : t)));
      },
      ue = () => {
        let e = T.length + 1,
          t = `f-${e}`,
          n = {
            id: t,
            key: `custom_field_${e}`,
            label: `扩展自定义字段 ${e}`,
            mode: l ? `XPATH` : `CSS`,
            selector: l
              ? `//div[contains(@class,"extra-info")]/text()`
              : `.extra-info-field`,
            targetAttr: l ? `html` : `纯文本内容 (Inner Text)`,
            fallback: ``,
            pipelines: [`去首尾空白`],
            required: !1,
          };
        (E((e) => [...e, n]), O(t), q(`已添加新字段: ${n.label}`));
      },
      Y = (e, t) => {
        if ((e.stopPropagation(), T.length <= 1)) {
          q(`至少需要保留一个提取字段`);
          return;
        }
        let n = T.filter((e) => e.id !== t);
        (E(n), D === t && O(n[0].id), q(`已删除指定字段`));
      },
      addStage1Rule = () => {
        let newId = `stg1-${Date.now()}`;
        let count = stage1Rules.length + 1;
        let newRule = {
          id: newId,
          key: ``,
          rule: ``,
        };
        setStage1Rules((prev) => [...prev, newRule]);
        q(`已新增阶段一规则项 #${count}`);
      },
      removeStage1Rule = (id) => {
        if (stage1Rules.length <= 1) {
          q(`阶段一至少需保留一个提取规则`);
          return;
        }
        setStage1Rules((prev) => prev.filter((item) => item.id !== id));
        q(`已删除该条规则`);
      },
      updateStage1Rule = (id, field, value) => {
        setStage1Rules((prev) =>
          prev.map((item) => (item.id === id ? { ...item, [field]: value } : item))
        );
      };
    if (
      ((0, C.useEffect)(() => {
        if (!t) return;
        I(!1);
        let e = t.method === `auto`,
          r = t.domain || (e ? `quote.eastmoney.com` : `www.hxfinance.com`),
          i = t.name || (e ? `东方财富证券` : `华夏财经网`),
          a = t.proxyVendor || (e ? `雅雯动态 / 独享代理` : `快代理`);
        e
          ? (d(`stage2`),
            o(`【ID自增长】${i} - 详情正文抽取 (绑定: ${a})`),
            c(
              n?.sampleUrl ||
                (t.urlPattern
                  ? t.urlPattern
                      .replace(`{id}`, `600519`)
                      .replace(`{page}`, `1`)
                  : `https://${r}/detail/600519.html`),
            ),
            E((e) =>
              e.map((e) => ({
                ...e,
                mode: e.mode === `CSS` ? `XPATH` : e.mode,
                targetAttr: e.targetAttr === `json` ? `json` : `html`,
              })),
            ))
          : (o(`【板块轮询】${i} - 列表翻页 + 详情抽取 (绑定: ${a})`),
            c(n?.sampleUrl || `https://${r}/news/macro?page=1`));
      }, [t, n]),
      !e || !t)
    )
      return null;
    let de = () => {
        (R(!0),
          setTimeout(() => {
            (R(!1),
              I(!0),
              G(Math.floor(Math.random() * 8 + 15)),
              ce(Math.floor(Math.random() * 6 + 11)),
              q(
                l
                  ? `自增详情页解析测试成功！已提取全部目标字段数据`
                  : `解析测试成功完成！已获取最新列表与详情结构数据`,
              ));
          }, 450));
      },
      fe = () => {
        (R(!0),
          setTimeout(() => {
            (R(!1), I(!0));
            let e = [
              {
                id: `f-title`,
                key: `title`,
                label: `标题`,
                mode: l ? `XPATH` : `CSS`,
                selector: l
                  ? `//h1[contains(@class,"title") or contains(@class,"heading") or contains(@class,"entry")]/text()`
                  : `h1.entry-title, h1.article-title, .post-title`,
                targetAttr: l ? `html` : `纯文本内容 (Inner Text)`,
                fallback: ``,
                pipelines: [`去首尾空白`],
                required: !0,
              },
              {
                id: `f-author`,
                key: `author`,
                label: `作者`,
                mode: l ? `XPATH` : `CSS`,
                selector: l
                  ? `//span[contains(@class,"author") or contains(@class,"source") or contains(@class,"meta")]/text()`
                  : `.meta-author, .author-name, .byline, .source-info`,
                targetAttr: l ? `html` : `纯文本内容 (Inner Text)`,
                fallback: `官方号`,
                pipelines: [`去首尾空白`],
                required: !1,
              },
              {
                id: `f-content`,
                key: `content`,
                label: `正文`,
                mode: l ? `XPATH` : `CSS`,
                selector: l
                  ? `//div[contains(@class,"content") or contains(@class,"article-body") or contains(@class,"main-text")]`
                  : `article.post-content, .entry-content, #articleBody, .main-article`,
                targetAttr: l ? `html` : `原始HTML排版 (Inner HTML)`,
                fallback: ``,
                pipelines: [`去首尾空白`],
                required: !0,
              },
            ];
            (E(e),
              O(`f-title`),
              P({
                title: e[0].selector,
                author: e[1].selector,
                content: e[2].selector,
              }),
              !l &&
                u === `stage1` &&
                (h(`div.news-list > div.news-item`),
                y(`a.title-link@href`),
                w(`?page={page+1}&cat=macro (Max: 5页)`)),
              q(
                `✨ AI 智能推导完成！已自动填充【标题】、【作者】、【正文】的提炼规则`,
              ));
          }, 400));
      },
      pe = (e, t, n) => {
        if ((M(e), n)) {
          let t = T.find(
            (e) =>
              e.key === n ||
              (n === `content_body` &&
                (e.key === `content` || e.key === `content_body`)),
          );
          if (t) {
            (O(t.id),
              E((n) =>
                n.map((n) => (n.id === t.id ? { ...n, selector: e } : n)),
              ),
              q(
                `已自动映射字段「${t.label} (${t.key})」，选择器已更新为 [${e}]`,
              ));
            return;
          }
        }
        (J({ selector: e }), q(`已将 DOM 选择器 [${e}] 填入「${k.label}」`));
      },
      me = () => {
        let e = JSON.stringify(
          !l && u === `stage1`
            ? {
                crawling_mode: `category_polling`,
                proxy_vendor: `KuaiProxy (Enterprise)`,
                list_items_found: 15,
                dedup_skipped: 11,
                new_articles_extracted: 4,
                first_item_detail: {
                  title: `央行宣布下调金融机构外汇存款准备金率 2 个百分点`,
                  url: `https://www.hxfinance.com/article/20260922/fin_9821.html`,
                  publish_time: `2026-09-22 14:15:30`,
                  author: `陈晓涵`,
                  content_length: 1842,
                },
              }
            : l
              ? {
                  crawling_mode: `id_increment_detail`,
                  task_name: t.name || `自增采集任务`,
                  sample_target_url: s,
                  extracted_data: {
                    title: `央行宣布下调金融机构外汇存款准备金率 2 个百分点`,
                    author: `陈晓涵`,
                    publish_time: `2026-09-22 14:15:30`,
                    content_body: `<p>为保持银行体系流动性合理充裕，中国人民银行决定下调金融机构外汇存款准备金率...</p>`,
                    content_length: 1842,
                  },
                  matrix_fields_extracted: T.map((e) => ({
                    key: e.key,
                    label: e.label,
                    matched: !0,
                    mode: e.mode,
                  })),
                  required_status: `ALL_PASSED`,
                  status: `SUCCESS`,
                }
              : {
                  crawling_mode: `detail_extraction`,
                  proxy_vendor: `KuaiProxy (Enterprise)`,
                  article_url: `https://www.hxfinance.com/article/20260922/fin_9821.html`,
                  title: `央行宣布下调金融机构外汇存款准备金率 2 个百分点`,
                  author: `陈晓涵`,
                  publish_time: `2026-09-22 14:15:30`,
                  content_body: `<p>为保持银行体系流动性合理充裕，中国人民银行决定下调金融机构外汇存款准备金率...</p>`,
                  content_length: 1842,
                  matrix_fields_extracted: T.map((e) => ({
                    key: e.key,
                    label: e.label,
                    matched: !0,
                    mode: e.mode,
                  })),
                  required_status: `ALL_PASSED`,
                },
          null,
          2,
        );
        (navigator.clipboard.writeText(e),
          re(!0),
          setTimeout(() => re(!1), 2e3),
          q(`JSON 结果已成功复制到剪贴板`));
      };
    return (0, $.jsxs)(`div`, {
      className: `fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 overflow-y-auto`,
      children: [
        se &&
          (0, $.jsxs)(`div`, {
            className: `fixed top-6 left-1/2 -translate-x-1/2 z-[9999] bg-slate-900 text-white px-4 py-2 rounded-lg text-xs font-semibold shadow-2xl flex items-center gap-2 animate-in fade-in slide-in-from-top-3`,
            children: [
              (0, $.jsx)(B, { className: `w-4 h-4 text-emerald-400 shrink-0` }),
              (0, $.jsx)(`span`, { children: se }),
            ],
          }),
        (0, $.jsxs)(`div`, {
          className: `bg-white rounded-2xl border border-slate-200/90 shadow-2xl overflow-hidden max-w-[1520px] w-full flex flex-col my-auto animate-in fade-in zoom-in-95 duration-150`,
          children: [
            (0, $.jsxs)(`div`, {
              className: `px-6 py-3.5 border-b border-slate-200 bg-white flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3 text-xs`,
              children: [
                (0, $.jsxs)(`div`, {
                  className: `flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 flex-1`,
                  children: [
                    (0, $.jsx)(`span`, {
                      className: `font-extrabold text-slate-800 whitespace-nowrap text-xs`,
                      children: `测试网址:`,
                    }),
                    (0, $.jsx)(`input`, {
                      type: `text`,
                      value: s,
                      onChange: (e) => c(e.target.value),
                      placeholder: `请输入测试网址`,
                      className: `flex-1 h-8.5 px-3 border border-slate-300 rounded-lg font-mono text-[11.5px] text-slate-800 bg-white focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF] outline-none min-w-[320px]`,
                    }),
                  ],
                }),
                (0, $.jsxs)(`div`, {
                  className: `flex items-center gap-2.5 shrink-0 justify-end`,
                  children: [
                    (0, $.jsxs)(`button`, {
                      type: `button`,
                      onClick: fe,
                      className: `h-8.5 px-3.5 rounded-lg border border-purple-200 bg-purple-50 text-purple-700 hover:bg-purple-100 text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-2xs`,
                      children: [
                        (0, $.jsx)(ft, {
                          className: `w-3.5 h-3.5 text-purple-600`,
                        }),
                        (0, $.jsx)(`span`, { children: `AI 智能推导规则` }),
                      ],
                    }),
                    (0, $.jsxs)(`button`, {
                      type: `button`,
                      onClick: de,
                      disabled: L,
                      className: `h-8.5 px-4 rounded-lg bg-[#0066FF] hover:bg-[#0052cc] text-white text-xs font-bold transition-all shadow-xs flex items-center gap-1.5 cursor-pointer disabled:opacity-50`,
                      children: [
                        (0, $.jsx)(pt, {
                          className: `w-3.5 h-3.5 fill-current ${L ? `animate-bounce` : ``}`,
                        }),
                        (0, $.jsx)(`span`, { children: `立即执行解析测试` }),
                      ],
                    }),
                    (0, $.jsxs)(`button`, {
                      type: `button`,
                      onClick: () => {
                        let e = T.find((e) => e.key === `title`),
                          n = T.find((e) => e.key === `author`),
                          a = T.find((e) => e.key === `publish_time`),
                          o = T.find((e) => e.key === `content_body`);
                        (i({
                          svcId: t.id,
                          siteName: t.name,
                          domain: t.domain || `www.hxfinance.com`,
                          sampleUrl: s.trim(),
                          encoding: `UTF-8`,
                          titleSelector:
                            e?.selector || `article.post-detail h1.entry-title`,
                          titleFallback: e?.fallback || ``,
                          titleCleanRegex: `-.*$`,
                          pubTimeSelector:
                            a?.selector || `time.entry-date, span.meta-time`,
                          pubTimeFallback: a?.fallback || ``,
                          pubTimeFormat: `YYYY-MM-DD HH:mm:ss`,
                          contentSelector:
                            o?.selector || `div.post-content, #articleBody`,
                          contentExcludeSelector: `script, style, .advertisement`,
                          contentFormat: `html_cleaned`,
                          sourceSelector:
                            n?.selector ||
                            `//div[@class="meta-author"]/span/text()`,
                          sourceDefault: n?.fallback || `${t.name}官方发布`,
                          authorSelector: n?.selector || ``,
                          authorRegex: ``,
                          attachmentSelector: `a[href$=".pdf"]`,
                          imageSelector: `div.article-content img::attr(src)`,
                          imageLazyAttr: `data-src, data-original`,
                          autoDownloadImages: !0,
                          filterSmallImages: !0,
                          removeInlineStyles: !0,
                          removeEmptyTags: !0,
                          stripCopyrightNotice: !0,
                          customReplaceRules: [],
                          customFields: T.map((e) => ({
                            id: e.id,
                            name: e.key,
                            label: e.label,
                            selector: e.selector,
                            method: e.mode.toLowerCase(),
                            extractAttr: e.targetAttr,
                            fallbackSelector: e.fallback,
                            regex: ``,
                            defaultValue: e.fallback,
                            required: e.required,
                          })),
                          updatedAt: new Date()
                            .toISOString()
                            .replace(`T`, ` `)
                            .substring(0, 16),
                          version: `v2.5.0`,
                        }),
                          q(`规则配置已保存并热发布至解析 Worker！`),
                          setTimeout(() => {
                            r();
                          }, 600));
                      },
                      className: `h-8.5 px-3.5 rounded-lg border border-slate-300 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-50 transition-all flex items-center gap-1.5 cursor-pointer shadow-2xs`,
                      children: [
                        (0, $.jsx)(ze, {
                          className: `w-3.5 h-3.5 text-slate-500`,
                        }),
                        (0, $.jsx)(`span`, { children: `保存发布规则` }),
                      ],
                    }),
                    (0, $.jsx)(`button`, {
                      type: `button`,
                      onClick: r,
                      className: `w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer ml-1`,
                      title: `关闭窗口`,
                      children: (0, $.jsx)(Q, { className: `w-4 h-4` }),
                    }),
                  ],
                }),
              ],
            }),
            (0, $.jsx)(`div`, {
              className: `p-4 sm:p-5 bg-slate-50/60 overflow-y-auto max-h-[calc(90vh-70px)]`,
              children: (0, $.jsxs)(`div`, {
                className: `grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch`,
                children: [
                  (0, $.jsxs)(`div`, {
                    className: `lg:col-span-4 bg-white rounded-2xl border border-slate-200 shadow-xs p-4 flex flex-col space-y-3.5`,
                    children: [
                      (0, $.jsx)(`div`, {
                        className: `flex items-center justify-between pb-2 border-b border-slate-100`,
                        children: (0, $.jsx)(`h3`, {
                          className: `font-extrabold text-slate-900 text-[13.5px]`,
                          children: `解析提取规则配置`,
                        }),
                      }),
                      !l &&
                        (0, $.jsxs)(`div`, {
                          className: `grid grid-cols-2 p-1 bg-slate-100 rounded-xl gap-1 text-xs font-bold`,
                          children: [
                            (0, $.jsx)(`button`, {
                              type: `button`,
                              onClick: () => d(`stage1`),
                              className: `py-1.5 rounded-lg transition-all cursor-pointer text-center ${u === `stage1` ? `bg-white text-slate-900 shadow-2xs` : `text-slate-500 hover:text-slate-800`}`,
                              children: `阶段一: 列表页翻页规则`,
                            }),
                            (0, $.jsx)(`button`, {
                              type: `button`,
                              onClick: () => d(`stage2`),
                              className: `py-1.5 rounded-lg transition-all cursor-pointer text-center ${u === `stage2` ? `bg-white text-slate-900 shadow-2xs` : `text-slate-500 hover:text-slate-800`}`,
                              children: `阶段二: 详情页正文规则`,
                            }),
                          ],
                        }),
                      !l && u === `stage1`
                        ? (0, $.jsxs)(`div`, {
                            className: `space-y-2.5 pt-0.5 animate-in fade-in duration-100`,
                            children: [
                              (0, $.jsxs)(`div`, {
                                className: `flex items-center justify-between bg-blue-50/80 border border-blue-200/80 p-2.5 rounded-xl`,
                                children: [
                                  (0, $.jsxs)(`div`, {
                                    children: [
                                      (0, $.jsxs)(`div`, {
                                        className: `flex items-center gap-1.5`,
                                        children: [
                                          (0, $.jsx)(`span`, {
                                            className: `w-1.5 h-1.5 rounded-full bg-[#0066FF]`,
                                          }),
                                          (0, $.jsx)(`span`, {
                                            className: `text-xs font-black text-slate-800`,
                                            children: `阶段一: 列表页翻页规则`,
                                          }),
                                          (0, $.jsxs)(`span`, {
                                            className: `text-[10px] font-mono px-1.5 py-0.2 rounded bg-blue-100 text-blue-800 font-bold`,
                                            children: [stage1Rules.length, ` 项规则`],
                                          }),
                                        ],
                                      }),
                                      (0, $.jsx)(`p`, {
                                        className: `text-[10.5px] text-slate-500 mt-0.5`,
                                        children: `每项包含 Key 字段标识与对应提取规则`,
                                      }),
                                    ],
                                  }),
                                  (0, $.jsxs)(`button`, {
                                    type: `button`,
                                    onClick: addStage1Rule,
                                    className: `h-7 px-2.5 rounded-lg bg-[#0066FF] hover:bg-[#0052cc] text-white text-[11px] font-bold flex items-center gap-1 transition-all cursor-pointer shadow-xs active:scale-95 shrink-0`,
                                    children: [
                                      (0, $.jsx)(Pe, { className: `w-3 h-3` }),
                                      (0, $.jsx)(`span`, { children: `新增添加` }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, $.jsx)(`div`, {
                                className: `space-y-2 max-h-[460px] overflow-y-auto pr-1`,
                                children: stage1Rules.map((item, idx) =>
                                  (0, $.jsxs)(
                                    `div`,
                                    {
                                      className: `bg-slate-50/90 border border-slate-200 rounded-xl p-2.5 space-y-1.5 hover:border-[#0066FF]/40 transition-all shadow-2xs`,
                                      children: [
                                        (0, $.jsxs)(`div`, {
                                          className: `flex items-center justify-between pb-1 border-b border-slate-200/50`,
                                          children: [
                                            (0, $.jsxs)(`div`, {
                                              className: `flex items-center gap-1.5`,
                                              children: [
                                                (0, $.jsx)(`span`, {
                                                  className: `w-4 h-4 rounded-full bg-blue-100 text-[#0066FF] flex items-center justify-center font-mono font-bold text-[10px]`,
                                                  children: idx + 1,
                                                }),
                                                (0, $.jsx)(`span`, {
                                                  className: `text-[11.5px] font-bold text-slate-700`,
                                                  children: `规则项 #${idx + 1}`,
                                                }),
                                              ],
                                            }),
                                            (0, $.jsx)(`button`, {
                                              type: `button`,
                                              onClick: () =>
                                                removeStage1Rule(item.id),
                                              className: `w-5 h-5 flex items-center justify-center text-slate-400 hover:text-red-600 hover:bg-red-50 rounded transition-colors cursor-pointer`,
                                              title: `删除该规则项`,
                                              children: (0, $.jsx)(Q, {
                                                className: `w-3 h-3`,
                                              }),
                                            }),
                                          ],
                                        }),
                                        (0, $.jsxs)(`div`, {
                                          className: `grid grid-cols-1 sm:grid-cols-12 gap-1.5`,
                                          children: [
                                            (0, $.jsxs)(`div`, {
                                              className: `sm:col-span-4 flex flex-col gap-0.5`,
                                              children: [
                                                (0, $.jsx)(`label`, {
                                                  className: `text-[10px] font-semibold text-slate-500`,
                                                  children: `Key 标识`,
                                                }),
                                                (0, $.jsx)(`input`, {
                                                  type: `text`,
                                                  value: item.key,
                                                  onChange: (e) =>
                                                    updateStage1Rule(
                                                      item.id,
                                                      `key`,
                                                      e.target.value,
                                                    ),
                                                  placeholder: `例如: detail_link`,
                                                  className: `h-7 px-2 border border-slate-200 rounded-md font-mono font-bold text-xs text-slate-800 bg-white focus:border-[#0066FF] outline-none focus:ring-1 focus:ring-[#0066FF]`,
                                                }),
                                              ],
                                            }),
                                            (0, $.jsxs)(`div`, {
                                              className: `sm:col-span-8 flex flex-col gap-0.5`,
                                              children: [
                                                (0, $.jsx)(`label`, {
                                                  className: `text-[10px] font-semibold text-slate-500`,
                                                  children: `提取规则 (XPath / 正则 / 函数)`,
                                                }),
                                                (0, $.jsx)(`input`, {
                                                  type: `text`,
                                                  value: item.rule,
                                                  onChange: (e) =>
                                                    updateStage1Rule(
                                                      item.id,
                                                      `rule`,
                                                      e.target.value,
                                                    ),
                                                  placeholder: `例如: //div[@class="news-item"]//a/@href`,
                                                  className: `h-7 px-2 border border-slate-200 rounded-md font-mono text-xs text-slate-800 bg-white focus:border-[#0066FF] outline-none focus:ring-1 focus:ring-[#0066FF]`,
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    },
                                    item.id,
                                  ),
                                ),
                              }),
                            ],
                          })
                        : (0, $.jsxs)(`div`, {
                            className: `space-y-3 pt-0.5 animate-in fade-in duration-100`,
                            children: [
                              (0, $.jsxs)(`div`, {
                                className: `bg-white border border-slate-200/90 rounded-xl p-3.5 space-y-3 shadow-2xs`,
                                children: [
                                  (0, $.jsxs)(`div`, {
                                    className: `flex items-center justify-between`,
                                    children: [
                                      (0, $.jsxs)(`div`, {
                                        className: `flex items-center gap-2`,
                                        children: [
                                          (0, $.jsx)(qe, {
                                            className: `w-4 h-4 text-[#0066FF] shrink-0`,
                                          }),
                                          (0, $.jsx)(`h4`, {
                                            className: `font-extrabold text-slate-900 text-[13px] tracking-wide`,
                                            children: `提取字段规则矩阵`,
                                          }),
                                        ],
                                      }),
                                      (0, $.jsxs)(`div`, {
                                        className: `flex items-center gap-1.5`,
                                        children: [
                                          (0, $.jsxs)(`button`, {
                                            type: `button`,
                                            onClick: fe,
                                            className: `h-7 px-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer shadow-xs active:scale-95`,
                                            children: [
                                              (0, $.jsx)(ft, {
                                                className: `w-3.5 h-3.5 text-blue-100`,
                                              }),
                                              (0, $.jsx)(`span`, {
                                                children: `AI智能推导规则`,
                                              }),
                                            ],
                                          }),
                                          (0, $.jsxs)(`button`, {
                                            type: `button`,
                                            onClick: ue,
                                            className: `h-7 px-2.5 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold flex items-center gap-1 transition-all cursor-pointer shadow-2xs`,
                                            children: [
                                              (0, $.jsx)(Pe, {
                                                className: `w-3.5 h-3.5 text-slate-600`,
                                              }),
                                              (0, $.jsx)(`span`, {
                                                children: `添加字段`,
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, $.jsx)(`div`, {
                                    className: `space-y-2 max-h-[190px] overflow-y-auto pr-1`,
                                    children: T.map((e) => {
                                      let t = e.id === k.id;
                                      return (0, $.jsxs)(
                                        `div`,
                                        {
                                          onClick: () => O(e.id),
                                          className: `rounded-xl p-2.5 flex items-center justify-between cursor-pointer transition-all ${t ? `border border-[#0066FF] bg-blue-50/50 shadow-xs ring-1 ring-[#0066FF]/60` : `border border-slate-200 bg-slate-50/50 hover:border-slate-300 hover:bg-slate-50`}`,
                                          children: [
                                            (0, $.jsxs)(`div`, {
                                              className: `flex items-center gap-2.5`,
                                              children: [
                                                (0, $.jsx)(`span`, {
                                                  className: `font-mono text-[10px] font-bold px-2 py-0.5 rounded border uppercase shrink-0 ${e.mode === `CSS` ? `bg-blue-50 text-blue-700 border-blue-200` : e.mode === `XPATH` ? `bg-purple-50 text-purple-700 border-purple-200` : e.mode === `REGEX` ? `bg-emerald-50 text-emerald-700 border-emerald-200` : `bg-amber-50 text-amber-700 border-amber-200`}`,
                                                  children: e.mode,
                                                }),
                                                (0, $.jsxs)(`div`, {
                                                  children: [
                                                    (0, $.jsx)(`div`, {
                                                      className: `text-xs font-bold ${t ? `text-slate-900` : `text-slate-800`}`,
                                                      children: e.label,
                                                    }),
                                                    (0, $.jsx)(`div`, {
                                                      className: `font-mono text-[11px] text-slate-500`,
                                                      children: e.key,
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                            (0, $.jsxs)(`div`, {
                                              className: `flex items-center gap-2 shrink-0`,
                                              children: [
                                                e.required &&
                                                  (0, $.jsx)(`span`, {
                                                    className: `text-red-500 text-xs font-semibold`,
                                                    children: `*必填`,
                                                  }),
                                                (0, $.jsx)(`button`, {
                                                  type: `button`,
                                                  onClick: (t) => Y(t, e.id),
                                                  title: `删除该字段`,
                                                  className: `text-slate-400 hover:text-red-500 p-1 rounded transition-colors cursor-pointer`,
                                                  children: (0, $.jsx)(at, {
                                                    className: `w-3.5 h-3.5`,
                                                  }),
                                                }),
                                              ],
                                            }),
                                          ],
                                        },
                                        e.id,
                                      );
                                    }),
                                  }),
                                ],
                              }),
                              (0, $.jsxs)(`div`, {
                                className: `bg-white border border-slate-200/90 rounded-xl p-4 space-y-3.5 text-xs shadow-2xs`,
                                children: [
                                  (0, $.jsxs)(`div`, {
                                    className: `flex items-center justify-between pb-2 border-b border-slate-100`,
                                    children: [
                                      (0, $.jsxs)(`div`, {
                                        className: `flex items-center gap-2 text-slate-900 font-extrabold text-[12.5px]`,
                                        children: [
                                          (0, $.jsx)(ie, {
                                            className: `w-4 h-4 text-[#0066FF] shrink-0`,
                                          }),
                                          (0, $.jsxs)(`span`, {
                                            children: [`编辑字段: `, k.label],
                                          }),
                                        ],
                                      }),
                                      (0, $.jsxs)(`span`, {
                                        className: `font-mono text-slate-400 text-xs`,
                                        children: [`ID: `, k.id],
                                      }),
                                    ],
                                  }),
                                  (0, $.jsxs)(`div`, {
                                    className: `grid grid-cols-2 gap-3`,
                                    children: [
                                      (0, $.jsxs)(`div`, {
                                        className: `space-y-1`,
                                        children: [
                                          (0, $.jsx)(`label`, {
                                            className: `text-slate-600 font-semibold text-xs block`,
                                            children: `字段英文键名 (Key)`,
                                          }),
                                          (0, $.jsx)(`input`, {
                                            type: `text`,
                                            value: k.key,
                                            onChange: (e) =>
                                              J({ key: e.target.value }),
                                            className: `w-full h-8.5 px-3 bg-white border border-slate-300 rounded-lg font-mono text-xs text-slate-800 focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF] outline-none`,
                                          }),
                                        ],
                                      }),
                                      (0, $.jsxs)(`div`, {
                                        className: `space-y-1`,
                                        children: [
                                          (0, $.jsx)(`label`, {
                                            className: `text-slate-600 font-semibold text-xs block`,
                                            children: `中文显示名 (Label)`,
                                          }),
                                          (0, $.jsx)(`input`, {
                                            type: `text`,
                                            value: k.label,
                                            onChange: (e) =>
                                              J({ label: e.target.value }),
                                            className: `w-full h-8.5 px-3 bg-white border border-slate-300 rounded-lg text-xs text-slate-800 focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF] outline-none`,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, $.jsxs)(`div`, {
                                    className: `space-y-1.5`,
                                    children: [
                                      (0, $.jsxs)(`div`, {
                                        className: `flex items-center justify-between gap-1 flex-wrap`,
                                        children: [
                                          (0, $.jsxs)(`div`, {
                                            className: `flex items-center gap-2`,
                                            children: [
                                              (0, $.jsx)(`label`, {
                                                className: `text-slate-600 font-semibold text-xs`,
                                                children: `选择器语法模式`,
                                              }),
                                              (0, $.jsxs)(`button`, {
                                                type: `button`,
                                                onClick: fe,
                                                className: `px-2 py-0.5 rounded-md bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-[10.5px] font-bold flex items-center gap-1 shadow-2xs cursor-pointer transition-all active:scale-95`,
                                                children: [
                                                  (0, $.jsx)(ft, {
                                                    className: `w-3 h-3 text-blue-100`,
                                                  }),
                                                  (0, $.jsx)(`span`, {
                                                    children: `AI智能推导规则`,
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                          (0, $.jsx)(`div`, {
                                            className: `flex items-center gap-1`,
                                            children: (l
                                              ? [`XPATH`, `REGEX`, `JSONPATH`]
                                              : [
                                                  `CSS`,
                                                  `XPATH`,
                                                  `REGEX`,
                                                  `JSONPATH`,
                                                ]
                                            ).map((e) => {
                                              let t = k.mode === e;
                                              return (0, $.jsx)(
                                                `button`,
                                                {
                                                  type: `button`,
                                                  onClick: () => J({ mode: e }),
                                                  className: `px-2 py-0.5 rounded text-[10.5px] font-bold transition-all cursor-pointer ${t ? `bg-[#0066FF] text-white shadow-2xs` : `bg-white text-slate-600 hover:text-slate-900 border border-slate-300`}`,
                                                  children: e,
                                                },
                                                e,
                                              );
                                            }),
                                          }),
                                        ],
                                      }),
                                      (0, $.jsx)(`input`, {
                                        type: `text`,
                                        value: k.selector,
                                        onChange: (e) =>
                                          J({ selector: e.target.value }),
                                        className: `w-full h-8.5 px-3 bg-white border border-slate-300 rounded-lg font-mono text-xs text-blue-700 font-semibold focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF] outline-none`,
                                      }),
                                    ],
                                  }),
                                  (0, $.jsxs)(`div`, {
                                    className: `grid grid-cols-2 gap-3`,
                                    children: [
                                      (0, $.jsxs)(`div`, {
                                        className: `space-y-1`,
                                        children: [
                                          (0, $.jsx)(`label`, {
                                            className: `text-slate-600 font-semibold text-xs block`,
                                            children: `抽取目标属性`,
                                          }),
                                          (0, $.jsx)(`select`, {
                                            value: k.targetAttr,
                                            onChange: (e) =>
                                              J({ targetAttr: e.target.value }),
                                            className: `w-full h-8.5 px-2.5 bg-white border border-slate-300 rounded-lg text-xs font-mono font-medium text-slate-800 focus:border-[#0066FF] outline-none cursor-pointer`,
                                            children: l
                                              ? (0, $.jsxs)($.Fragment, {
                                                  children: [
                                                    (0, $.jsx)(`option`, {
                                                      value: `html`,
                                                      children: `html`,
                                                    }),
                                                    (0, $.jsx)(`option`, {
                                                      value: `json`,
                                                      children: `json`,
                                                    }),
                                                  ],
                                                })
                                              : (0, $.jsxs)($.Fragment, {
                                                  children: [
                                                    (0, $.jsx)(`option`, {
                                                      value: `纯文本内容 (Inner Text)`,
                                                      children: `纯文本内容 (Inner Text)`,
                                                    }),
                                                    (0, $.jsx)(`option`, {
                                                      value: `原始HTML排版 (Inner HTML)`,
                                                      children: `原始HTML排版 (Inner HTML)`,
                                                    }),
                                                    (0, $.jsx)(`option`, {
                                                      value: `属性值 (href / src / content)`,
                                                      children: `属性值 (href / src / content)`,
                                                    }),
                                                    (0, $.jsx)(`option`, {
                                                      value: `纯数字解析 (Number)`,
                                                      children: `纯数字解析 (Number)`,
                                                    }),
                                                    (0, $.jsx)(`option`, {
                                                      value: `html`,
                                                      children: `html`,
                                                    }),
                                                    (0, $.jsx)(`option`, {
                                                      value: `json`,
                                                      children: `json`,
                                                    }),
                                                  ],
                                                }),
                                          }),
                                        ],
                                      }),
                                      (0, $.jsxs)(`div`, {
                                        className: `space-y-1`,
                                        children: [
                                          (0, $.jsx)(`label`, {
                                            className: `text-slate-600 font-semibold text-xs block`,
                                            children: `缺省兜底值 (Fallback)`,
                                          }),
                                          (0, $.jsx)(`input`, {
                                            type: `text`,
                                            value: k.fallback,
                                            onChange: (e) =>
                                              J({ fallback: e.target.value }),
                                            placeholder: `未提取到时默认值`,
                                            className: `w-full h-8.5 px-3 bg-white border border-slate-300 rounded-lg text-xs text-slate-800 placeholder-slate-400 focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF] outline-none`,
                                          }),
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
                  (0, $.jsxs)(`div`, {
                    className: `lg:col-span-5 bg-white rounded-2xl border border-slate-200 shadow-xs p-4 flex flex-col space-y-3`,
                    children: [
                      (0, $.jsxs)(`div`, {
                        className: `flex items-center justify-between pb-2 border-b border-slate-100`,
                        children: [
                          (0, $.jsxs)(`div`, {
                            className: `flex items-center gap-2 min-w-0`,
                            children: [
                              (0, $.jsx)(le, {
                                className: `w-4 h-4 text-[#0066FF] shrink-0`,
                              }),
                              (0, $.jsx)(`h3`, {
                                className: `font-extrabold text-slate-900 text-[13.5px] truncate`,
                                children: `网页结构可视化预览`,
                              }),
                            ],
                          }),
                          (0, $.jsxs)(`div`, {
                            className: `inline-flex p-0.5 bg-slate-100 rounded-lg border border-slate-200/80 shrink-0`,
                            children: [
                              (0, $.jsx)(`button`, {
                                type: `button`,
                                onClick: () => j(`dom`),
                                className: `px-2.5 py-1 text-xs rounded-md transition-all cursor-pointer ${A === `dom` ? `bg-[#0066FF] text-white font-bold shadow-xs` : `text-slate-600 hover:text-slate-900 font-semibold`}`,
                                children: `DOM渲染视窗`,
                              }),
                              (0, $.jsx)(`button`, {
                                type: `button`,
                                onClick: () => j(`html`),
                                className: `px-2.5 py-1 text-xs rounded-md transition-all cursor-pointer ${A === `html` ? `bg-[#0066FF] text-white font-bold shadow-xs` : `text-slate-600 hover:text-slate-900 font-semibold`}`,
                                children: `HTML源码`,
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, $.jsx)(`div`, {
                        className: `bg-[#F8FAFC] border border-slate-200/80 rounded-2xl p-3 sm:p-4 min-h-[460px] flex-1 flex flex-col justify-start overflow-y-auto max-h-[580px]`,
                        children:
                          A === `dom`
                            ? (0, $.jsxs)(`div`, {
                                className: `bg-white rounded-xl border border-slate-200/90 shadow-xs p-5 sm:p-6 space-y-4 text-xs font-sans text-slate-800 animate-in fade-in duration-100`,
                                children: [
                                  (0, $.jsxs)(`div`, {
                                    onClick: () =>
                                      pe(
                                        `article.post-detail h1.entry-title`,
                                        `文章主标题`,
                                        `title`,
                                      ),
                                    className: `relative rounded-lg p-3.5 transition-all cursor-pointer ${k.key === `title` || ee?.includes(`h1`) ? `border border-[#0066FF] bg-blue-50/15 ring-1 ring-[#0066FF]/60` : `border border-transparent hover:border-blue-300 hover:bg-slate-50`}`,
                                    children: [
                                      (k.key === `title` ||
                                        ee?.includes(`h1`)) &&
                                        (0, $.jsx)(`div`, {
                                          className: `absolute -top-3 right-4 bg-[#009E60] text-white text-[10.5px] font-mono font-bold px-2 py-0.5 rounded shadow-2xs`,
                                          children: `映射: title`,
                                        }),
                                      (0, $.jsx)(`h1`, {
                                        className: `text-[16px] font-black text-slate-900 leading-snug tracking-tight`,
                                        children: `2026年全球智能算力中心与边缘计算协同发展趋势白皮书发布`,
                                      }),
                                    ],
                                  }),
                                  (0, $.jsxs)(`div`, {
                                    className: `space-y-1.5 pt-0.5`,
                                    children: [
                                      (0, $.jsxs)(`div`, {
                                        className: `text-xs text-slate-600 font-medium flex flex-wrap items-center gap-x-6 gap-y-1`,
                                        children: [
                                          (0, $.jsx)(`span`, {
                                            onClick: () =>
                                              pe(
                                                `//div[@class="meta-author"]/span/text()`,
                                                `记者/作者`,
                                                `author`,
                                              ),
                                            className: `cursor-pointer transition-colors ${k.key === `author` ? `text-[#0066FF] font-bold bg-blue-50 px-1.5 py-0.5 rounded border border-blue-200` : `hover:text-blue-600`}`,
                                            children: `记者 张云清`,
                                          }),
                                          (0, $.jsx)(`span`, {
                                            onClick: () =>
                                              pe(
                                                `time.entry-date, span.meta-time`,
                                                `发布时间`,
                                                `publish_time`,
                                              ),
                                            className: `cursor-pointer transition-colors ${k.key === `publish_time` ? `text-[#0066FF] font-bold bg-blue-50 px-1.5 py-0.5 rounded border border-blue-200` : `hover:text-blue-600`}`,
                                            children: `发布时间: 2026-09-21 14:35:20`,
                                          }),
                                          (0, $.jsx)(`span`, {
                                            onClick: () =>
                                              pe(
                                                `span.meta-source, div.source`,
                                                `文章来源`,
                                                `source`,
                                              ),
                                            className: `cursor-pointer transition-colors ${k.key === `source` ? `text-[#0066FF] font-bold bg-blue-50 px-1.5 py-0.5 rounded border border-blue-200` : `hover:text-blue-600`}`,
                                            children: `来源: 全球算力协同创新联盟`,
                                          }),
                                        ],
                                      }),
                                      (0, $.jsx)(`div`, {
                                        className: `text-xs text-slate-600 font-medium`,
                                        children: (0, $.jsx)(`span`, {
                                          onClick: () =>
                                            pe(
                                              `span.read-count, .views-count`,
                                              `阅读量`,
                                              `views`,
                                            ),
                                          className: `cursor-pointer hover:text-blue-600 transition-colors`,
                                          children: `阅读量: 18,420 次`,
                                        }),
                                      }),
                                    ],
                                  }),
                                  (0, $.jsx)(`div`, {
                                    className: `border-b border-slate-100 my-1`,
                                  }),
                                  (0, $.jsxs)(`div`, {
                                    onClick: () =>
                                      pe(
                                        `div.summary-callout, .abstract-box`,
                                        `文章摘要`,
                                        `summary`,
                                      ),
                                    className: `relative bg-slate-50/80 border rounded-xl p-4 text-xs text-slate-700 leading-relaxed cursor-pointer transition-all ${k.key === `summary` || k.key === `abstract` ? `border-[#0066FF] bg-blue-50/20 ring-1 ring-[#0066FF]/60` : `border-slate-200/80 hover:border-blue-300`}`,
                                    children: [
                                      (k.key === `summary` ||
                                        k.key === `abstract`) &&
                                        (0, $.jsxs)(`div`, {
                                          className: `absolute -top-3 right-4 bg-[#009E60] text-white text-[10.5px] font-mono font-bold px-2 py-0.5 rounded shadow-2xs`,
                                          children: [`映射: `, k.key],
                                        }),
                                      (0, $.jsxs)(`p`, {
                                        children: [
                                          (0, $.jsx)(`strong`, {
                                            className: `text-slate-900 font-bold`,
                                            children: `【摘要】`,
                                          }),
                                          ` `,
                                          `昨日在亚洲数字基建峰会上，行业联盟联合头部研究机构正式发布《2026智能算力协同发展白皮书》，深入解析千亿参数模型在边缘微集群的低延迟调度方案。`,
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, $.jsxs)(`div`, {
                                    onClick: () =>
                                      pe(
                                        `div.post-content, #articleBody`,
                                        `正文内容HTML`,
                                        `content_body`,
                                      ),
                                    className: `relative space-y-3.5 text-xs text-slate-700 leading-relaxed cursor-pointer p-2.5 rounded-lg transition-all ${k.key === `content_body` || k.key === `content` ? `border border-[#0066FF] bg-blue-50/15 ring-1 ring-[#0066FF]/60` : `border border-transparent hover:border-blue-300 hover:bg-slate-50/60`}`,
                                    children: [
                                      (k.key === `content_body` ||
                                        k.key === `content`) &&
                                        (0, $.jsxs)(`div`, {
                                          className: `absolute -top-3 right-4 bg-[#009E60] text-white text-[10.5px] font-mono font-bold px-2 py-0.5 rounded shadow-2xs`,
                                          children: [`映射: `, k.key],
                                        }),
                                      (0, $.jsx)(`p`, {
                                        children: `伴随异构计算芯片架构演进，新一代算力网络正在突破传统中心化云端集群的传输瓶颈。根据白皮书统计，全球边缘侧微型算力节点的调度效率在过去18个月内提升了近240%。`,
                                      }),
                                      (0, $.jsx)(`p`, {
                                        children: `联盟首席技术专家指出，通过多级缓存与自适应权重传输协议，跨数据中心的模型蒸馏训练与实时边缘推理得以无缝协同。`,
                                      }),
                                    ],
                                  }),
                                ],
                              })
                            : (0, $.jsx)(`div`, {
                                className: `bg-[#0f172a] rounded-xl p-4 text-slate-300 font-mono text-[11px] leading-relaxed overflow-x-auto shadow-inner border border-slate-800 animate-in fade-in duration-100`,
                                children: (0, $.jsxs)(`pre`, {
                                  className: `whitespace-pre`,
                                  children: [
                                    (0, $.jsx)(`span`, {
                                      className: `text-slate-500`,
                                      children: `<!-- 网页源码沙箱视窗 (点击标签可拾取选择器) -->`,
                                    }),
                                    `
`,
                                    (0, $.jsx)(`span`, {
                                      className: `text-pink-400`,
                                      children: `<div`,
                                    }),
                                    ` `,
                                    (0, $.jsx)(`span`, {
                                      className: `text-amber-300`,
                                      children: `class=`,
                                    }),
                                    (0, $.jsx)(`span`, {
                                      className: `text-emerald-300`,
                                      children: `"breadcrumb"`,
                                    }),
                                    (0, $.jsx)(`span`, {
                                      className: `text-pink-400`,
                                      children: `>`,
                                    }),
                                    `首页 > 科技快讯 > 人工智能 > 产业前沿`,
                                    (0, $.jsx)(`span`, {
                                      className: `text-pink-400`,
                                      children: `</div>`,
                                    }),
                                    `
`,
                                    (0, $.jsx)(`span`, {
                                      className: `text-pink-400`,
                                      children: `<article`,
                                    }),
                                    ` `,
                                    (0, $.jsx)(`span`, {
                                      className: `text-amber-300`,
                                      children: `class=`,
                                    }),
                                    (0, $.jsx)(`span`, {
                                      className: `text-emerald-300`,
                                      children: `"post-detail"`,
                                    }),
                                    (0, $.jsx)(`span`, {
                                      className: `text-pink-400`,
                                      children: `>`,
                                    }),
                                    `
`,
                                    `  `,
                                    (0, $.jsxs)(`span`, {
                                      onClick: () =>
                                        pe(
                                          `article.post-detail h1.entry-title`,
                                          `文章主标题`,
                                          `title`,
                                        ),
                                      className: `cursor-pointer hover:bg-blue-900/50 rounded px-1`,
                                      children: [
                                        (0, $.jsx)(`span`, {
                                          className: `text-pink-400`,
                                          children: `<h1`,
                                        }),
                                        ` `,
                                        (0, $.jsx)(`span`, {
                                          className: `text-amber-300`,
                                          children: `class=`,
                                        }),
                                        (0, $.jsx)(`span`, {
                                          className: `text-emerald-300`,
                                          children: `"entry-title"`,
                                        }),
                                        (0, $.jsx)(`span`, {
                                          className: `text-pink-400`,
                                          children: `>`,
                                        }),
                                        `2026年全球智能算力中心与边缘计算协同发展趋势白皮书发布`,
                                        (0, $.jsx)(`span`, {
                                          className: `text-pink-400`,
                                          children: `</h1>`,
                                        }),
                                      ],
                                    }),
                                    `
`,
                                    `  `,
                                    (0, $.jsx)(`span`, {
                                      className: `text-pink-400`,
                                      children: `<div`,
                                    }),
                                    ` `,
                                    (0, $.jsx)(`span`, {
                                      className: `text-amber-300`,
                                      children: `class=`,
                                    }),
                                    (0, $.jsx)(`span`, {
                                      className: `text-emerald-300`,
                                      children: `"meta-info"`,
                                    }),
                                    (0, $.jsx)(`span`, {
                                      className: `text-pink-400`,
                                      children: `>`,
                                    }),
                                    `
`,
                                    `    `,
                                    (0, $.jsxs)(`span`, {
                                      onClick: () =>
                                        pe(
                                          `//div[@class="meta-author"]/span/text()`,
                                          `记者/作者`,
                                          `author`,
                                        ),
                                      className: `cursor-pointer hover:bg-blue-900/50 rounded px-1`,
                                      children: [
                                        (0, $.jsx)(`span`, {
                                          className: `text-pink-400`,
                                          children: `<span`,
                                        }),
                                        ` `,
                                        (0, $.jsx)(`span`, {
                                          className: `text-amber-300`,
                                          children: `class=`,
                                        }),
                                        (0, $.jsx)(`span`, {
                                          className: `text-emerald-300`,
                                          children: `"meta-author"`,
                                        }),
                                        (0, $.jsx)(`span`, {
                                          className: `text-pink-400`,
                                          children: `>`,
                                        }),
                                        `记者 张云清`,
                                        (0, $.jsx)(`span`, {
                                          className: `text-pink-400`,
                                          children: `</span>`,
                                        }),
                                      ],
                                    }),
                                    `
`,
                                    `    `,
                                    (0, $.jsxs)(`span`, {
                                      onClick: () =>
                                        pe(
                                          `time.entry-date, span.meta-time`,
                                          `发布时间`,
                                          `publish_time`,
                                        ),
                                      className: `cursor-pointer hover:bg-blue-900/50 rounded px-1`,
                                      children: [
                                        (0, $.jsx)(`span`, {
                                          className: `text-pink-400`,
                                          children: `<time`,
                                        }),
                                        ` `,
                                        (0, $.jsx)(`span`, {
                                          className: `text-amber-300`,
                                          children: `class=`,
                                        }),
                                        (0, $.jsx)(`span`, {
                                          className: `text-emerald-300`,
                                          children: `"entry-date"`,
                                        }),
                                        (0, $.jsx)(`span`, {
                                          className: `text-pink-400`,
                                          children: `>`,
                                        }),
                                        `发布时间: 2026-09-21 14:35:20`,
                                        (0, $.jsx)(`span`, {
                                          className: `text-pink-400`,
                                          children: `</time>`,
                                        }),
                                      ],
                                    }),
                                    `
`,
                                    `    `,
                                    (0, $.jsx)(`span`, {
                                      className: `text-pink-400`,
                                      children: `<span`,
                                    }),
                                    ` `,
                                    (0, $.jsx)(`span`, {
                                      className: `text-amber-300`,
                                      children: `class=`,
                                    }),
                                    (0, $.jsx)(`span`, {
                                      className: `text-emerald-300`,
                                      children: `"meta-source"`,
                                    }),
                                    (0, $.jsx)(`span`, {
                                      className: `text-pink-400`,
                                      children: `>`,
                                    }),
                                    `来源: 全球算力协同创新联盟`,
                                    (0, $.jsx)(`span`, {
                                      className: `text-pink-400`,
                                      children: `</span>`,
                                    }),
                                    `
`,
                                    `    `,
                                    (0, $.jsx)(`span`, {
                                      className: `text-pink-400`,
                                      children: `<span`,
                                    }),
                                    ` `,
                                    (0, $.jsx)(`span`, {
                                      className: `text-amber-300`,
                                      children: `class=`,
                                    }),
                                    (0, $.jsx)(`span`, {
                                      className: `text-emerald-300`,
                                      children: `"read-count"`,
                                    }),
                                    (0, $.jsx)(`span`, {
                                      className: `text-pink-400`,
                                      children: `>`,
                                    }),
                                    `阅读量: 18,420 次`,
                                    (0, $.jsx)(`span`, {
                                      className: `text-pink-400`,
                                      children: `</span>`,
                                    }),
                                    `
`,
                                    `  `,
                                    (0, $.jsx)(`span`, {
                                      className: `text-pink-400`,
                                      children: `</div>`,
                                    }),
                                    `
`,
                                    `  `,
                                    (0, $.jsxs)(`span`, {
                                      onClick: () =>
                                        pe(
                                          `div.summary-callout, .abstract-box`,
                                          `文章摘要`,
                                          `summary`,
                                        ),
                                      className: `cursor-pointer hover:bg-blue-900/50 rounded px-1`,
                                      children: [
                                        (0, $.jsx)(`span`, {
                                          className: `text-pink-400`,
                                          children: `<div`,
                                        }),
                                        ` `,
                                        (0, $.jsx)(`span`, {
                                          className: `text-amber-300`,
                                          children: `class=`,
                                        }),
                                        (0, $.jsx)(`span`, {
                                          className: `text-emerald-300`,
                                          children: `"summary-callout"`,
                                        }),
                                        (0, $.jsx)(`span`, {
                                          className: `text-pink-400`,
                                          children: `>`,
                                        }),
                                        `【摘要】昨日在亚洲数字基建峰会上，行业联盟联合头部研究机构...`,
                                        (0, $.jsx)(`span`, {
                                          className: `text-pink-400`,
                                          children: `</div>`,
                                        }),
                                      ],
                                    }),
                                    `
`,
                                    `  `,
                                    (0, $.jsxs)(`span`, {
                                      onClick: () =>
                                        pe(
                                          `div.post-content, #articleBody`,
                                          `正文内容HTML`,
                                          `content_body`,
                                        ),
                                      className: `cursor-pointer hover:bg-blue-900/50 rounded px-1`,
                                      children: [
                                        (0, $.jsx)(`span`, {
                                          className: `text-pink-400`,
                                          children: `<div`,
                                        }),
                                        ` `,
                                        (0, $.jsx)(`span`, {
                                          className: `text-amber-300`,
                                          children: `class=`,
                                        }),
                                        (0, $.jsx)(`span`, {
                                          className: `text-emerald-300`,
                                          children: `"post-content"`,
                                        }),
                                        ` `,
                                        (0, $.jsx)(`span`, {
                                          className: `text-amber-300`,
                                          children: `id=`,
                                        }),
                                        (0, $.jsx)(`span`, {
                                          className: `text-emerald-300`,
                                          children: `"articleBody"`,
                                        }),
                                        (0, $.jsx)(`span`, {
                                          className: `text-pink-400`,
                                          children: `>`,
                                        }),
                                        `
`,
                                        `    `,
                                        (0, $.jsx)(`span`, {
                                          className: `text-pink-400`,
                                          children: `<p>`,
                                        }),
                                        `伴随异构计算芯片架构演进，新一代算力网络正在突破传统中心化云端集群...`,
                                        (0, $.jsx)(`span`, {
                                          className: `text-pink-400`,
                                          children: `</p>`,
                                        }),
                                        `
`,
                                        `    `,
                                        (0, $.jsx)(`span`, {
                                          className: `text-pink-400`,
                                          children: `<p>`,
                                        }),
                                        `联盟首席技术专家指出，通过多级缓存与自适应权重传输协议...`,
                                        (0, $.jsx)(`span`, {
                                          className: `text-pink-400`,
                                          children: `</p>`,
                                        }),
                                        `
`,
                                        `  `,
                                        (0, $.jsx)(`span`, {
                                          className: `text-pink-400`,
                                          children: `</div>`,
                                        }),
                                      ],
                                    }),
                                    `
`,
                                    `  `,
                                    (0, $.jsx)(`span`, {
                                      className: `text-pink-400`,
                                      children: `<div`,
                                    }),
                                    ` `,
                                    (0, $.jsx)(`span`, {
                                      className: `text-amber-300`,
                                      children: `class=`,
                                    }),
                                    (0, $.jsx)(`span`, {
                                      className: `text-emerald-300`,
                                      children: `"tag-list"`,
                                    }),
                                    (0, $.jsx)(`span`, {
                                      className: `text-pink-400`,
                                      children: `>`,
                                    }),
                                    `
`,
                                    `    `,
                                    (0, $.jsx)(`span`, {
                                      className: `text-pink-400`,
                                      children: `<a`,
                                    }),
                                    ` `,
                                    (0, $.jsx)(`span`, {
                                      className: `text-amber-300`,
                                      children: `class=`,
                                    }),
                                    (0, $.jsx)(`span`, {
                                      className: `text-emerald-300`,
                                      children: `"tag-item"`,
                                    }),
                                    (0, $.jsx)(`span`, {
                                      className: `text-pink-400`,
                                      children: `>`,
                                    }),
                                    `人工智能`,
                                    (0, $.jsx)(`span`, {
                                      className: `text-pink-400`,
                                      children: `</a>`,
                                    }),
                                    `
`,
                                    `    `,
                                    (0, $.jsx)(`span`, {
                                      className: `text-pink-400`,
                                      children: `<a`,
                                    }),
                                    ` `,
                                    (0, $.jsx)(`span`, {
                                      className: `text-amber-300`,
                                      children: `class=`,
                                    }),
                                    (0, $.jsx)(`span`, {
                                      className: `text-emerald-300`,
                                      children: `"tag-item"`,
                                    }),
                                    (0, $.jsx)(`span`, {
                                      className: `text-pink-400`,
                                      children: `>`,
                                    }),
                                    `边缘计算`,
                                    (0, $.jsx)(`span`, {
                                      className: `text-pink-400`,
                                      children: `</a>`,
                                    }),
                                    `
`,
                                    `    `,
                                    (0, $.jsx)(`span`, {
                                      className: `text-pink-400`,
                                      children: `<a`,
                                    }),
                                    ` `,
                                    (0, $.jsx)(`span`, {
                                      className: `text-amber-300`,
                                      children: `class=`,
                                    }),
                                    (0, $.jsx)(`span`, {
                                      className: `text-emerald-300`,
                                      children: `"tag-item"`,
                                    }),
                                    (0, $.jsx)(`span`, {
                                      className: `text-pink-400`,
                                      children: `>`,
                                    }),
                                    `行业白皮书`,
                                    (0, $.jsx)(`span`, {
                                      className: `text-pink-400`,
                                      children: `</a>`,
                                    }),
                                    `
`,
                                    `  `,
                                    (0, $.jsx)(`span`, {
                                      className: `text-pink-400`,
                                      children: `</div>`,
                                    }),
                                    `
`,
                                    (0, $.jsx)(`span`, {
                                      className: `text-pink-400`,
                                      children: `</article>`,
                                    }),
                                  ],
                                }),
                              }),
                      }),
                      (0, $.jsxs)(`div`, {
                        className: `bg-slate-50 border border-slate-200/90 rounded-xl p-3 text-xs text-slate-700 flex flex-col gap-2 shadow-2xs`,
                        children: [
                          (0, $.jsxs)(`div`, {
                            className: `flex items-center justify-between`,
                            children: [
                              (0, $.jsxs)(`div`, {
                                className: `flex items-center gap-1.5 font-bold text-slate-800 text-[12px]`,
                                children: [
                                  (0, $.jsx)(nt, {
                                    className: `w-3.5 h-3.5 text-[#0066FF]`,
                                  }),
                                  (0, $.jsx)(`span`, {
                                    children: `探测指针 / AI 智能推导规则:`,
                                  }),
                                ],
                              }),
                              N &&
                                (0, $.jsx)(`span`, {
                                  className: `px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-bold`,
                                  children: `✨ 已智推 标题、作者、正文 规则`,
                                }),
                            ],
                          }),
                          N
                            ? (0, $.jsxs)(`div`, {
                                className: `space-y-1.5 font-mono text-[11px]`,
                                children: [
                                  (0, $.jsxs)(`div`, {
                                    className: `flex items-start gap-1.5 bg-white p-2 rounded-lg border border-slate-200/80 shadow-2xs`,
                                    children: [
                                      (0, $.jsx)(`span`, {
                                        className: `font-bold text-blue-600 shrink-0`,
                                        children: `[标题 title]:`,
                                      }),
                                      (0, $.jsx)(`span`, {
                                        className: `text-slate-800 font-semibold break-all`,
                                        children: N.title,
                                      }),
                                    ],
                                  }),
                                  (0, $.jsxs)(`div`, {
                                    className: `flex items-start gap-1.5 bg-white p-2 rounded-lg border border-slate-200/80 shadow-2xs`,
                                    children: [
                                      (0, $.jsx)(`span`, {
                                        className: `font-bold text-purple-600 shrink-0`,
                                        children: `[作者 author]:`,
                                      }),
                                      (0, $.jsx)(`span`, {
                                        className: `text-slate-800 font-semibold break-all`,
                                        children: N.author,
                                      }),
                                    ],
                                  }),
                                  (0, $.jsxs)(`div`, {
                                    className: `flex items-start gap-1.5 bg-white p-2 rounded-lg border border-slate-200/80 shadow-2xs`,
                                    children: [
                                      (0, $.jsx)(`span`, {
                                        className: `font-bold text-emerald-600 shrink-0`,
                                        children: `[正文 content]:`,
                                      }),
                                      (0, $.jsx)(`span`, {
                                        className: `text-slate-800 font-semibold break-all`,
                                        children: N.content,
                                      }),
                                    ],
                                  }),
                                ],
                              })
                            : (0, $.jsx)(`div`, {
                                className: `text-[11px] text-slate-500 font-mono py-1`,
                                children: ee
                                  ? (0, $.jsxs)(`div`, {
                                      className: `flex items-center gap-1`,
                                      children: [
                                        (0, $.jsx)(`span`, {
                                          className: `text-slate-600 font-medium`,
                                          children: `当前选中:`,
                                        }),
                                        (0, $.jsx)(`span`, {
                                          className: `text-blue-600 font-semibold break-all`,
                                          children: ee,
                                        }),
                                      ],
                                    })
                                  : (0, $.jsx)(`span`, {
                                      children: `点击【AI智能推导规则】在此处实时展示 标题、作者、正文 的解析表达式...`,
                                    }),
                              }),
                        ],
                      }),
                    ],
                  }),
                  (() => {
                    let e = !!(
                      t?.name?.includes(`区域政务公报数字档案库`) ||
                      t?.id === `SVC-P023` ||
                      s?.includes(`gov-gazette.org`)
                    );
                    return (0, $.jsxs)(`div`, {
                      className: `lg:col-span-3 bg-white rounded-2xl border border-slate-200 shadow-xs p-4 flex flex-col justify-between space-y-3`,
                      children: [
                        (0, $.jsxs)(`div`, {
                          className: `space-y-3`,
                          children: [
                            (0, $.jsxs)(`div`, {
                              className: `flex items-center justify-between pb-2 border-b border-slate-100`,
                              children: [
                                (0, $.jsx)(`h3`, {
                                  className: `font-extrabold text-slate-900 text-[13.5px]`,
                                  children: `解析测试输出`,
                                }),
                                F
                                  ? e
                                    ? (0, $.jsxs)(`span`, {
                                        className: `text-[11px] font-bold text-amber-800 bg-amber-50 border border-amber-300 px-2 py-0.5 rounded-md flex items-center gap-1`,
                                        children: [
                                          (0, $.jsx)(`span`, {
                                            className: `w-1.5 h-1.5 rounded-full bg-amber-500`,
                                          }),
                                          `规则告警 (4/6)`,
                                        ],
                                      })
                                    : (0, $.jsxs)(`span`, {
                                        className: `text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-md flex items-center gap-1`,
                                        children: [
                                          (0, $.jsx)(`span`, {
                                            className: `w-1.5 h-1.5 rounded-full bg-emerald-500`,
                                          }),
                                          `测试完成`,
                                        ],
                                      })
                                  : (0, $.jsx)(`span`, {
                                      className: `text-[11px] font-bold text-slate-500 bg-slate-100 border border-slate-200 px-2 py-0.5 rounded-md`,
                                      children: `待执行测试`,
                                    }),
                              ],
                            }),
                            F &&
                              (e
                                ? (0, $.jsxs)(`div`, {
                                    className: `bg-[#fffbeb] border border-amber-300/90 rounded-xl p-3 space-y-2 shadow-2xs animate-in fade-in duration-200`,
                                    children: [
                                      (0, $.jsxs)(`div`, {
                                        className: `flex items-center justify-between text-xs font-bold text-amber-900`,
                                        children: [
                                          (0, $.jsx)(`span`, {
                                            children: `规则健康度校验:`,
                                          }),
                                          (0, $.jsx)(`span`, {
                                            className: `font-extrabold text-amber-800 font-mono`,
                                            children: `命中: 4/6 (66.7%)`,
                                          }),
                                        ],
                                      }),
                                      (0, $.jsxs)(`div`, {
                                        className: `space-y-1.5 pt-1 border-t border-amber-200/70 text-xs`,
                                        children: [
                                          (0, $.jsxs)(`div`, {
                                            className: `flex items-start gap-1.5 text-rose-800 font-medium leading-relaxed`,
                                            children: [
                                              (0, $.jsx)(ne, {
                                                className: `w-3.5 h-3.5 text-rose-600 shrink-0 mt-0.5`,
                                              }),
                                              (0, $.jsxs)(`span`, {
                                                children: [
                                                  `必填缺失: `,
                                                  (0, $.jsx)(`strong`, {
                                                    className: `text-rose-950 font-bold font-mono`,
                                                    children: `content_html`,
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                          (0, $.jsxs)(`div`, {
                                            className: `flex items-start gap-1.5 text-amber-800 font-medium leading-relaxed`,
                                            children: [
                                              (0, $.jsx)(ct, {
                                                className: `w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5`,
                                              }),
                                              (0, $.jsxs)(`span`, {
                                                children: [
                                                  `可选为空: `,
                                                  (0, $.jsx)(`strong`, {
                                                    className: `text-amber-950 font-bold font-mono`,
                                                    children: `author`,
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                          (0, $.jsxs)(`div`, {
                                            className: `flex items-start gap-1.5 text-emerald-800 font-medium leading-relaxed`,
                                            children: [
                                              (0, $.jsx)(B, {
                                                className: `w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5`,
                                              }),
                                              (0, $.jsxs)(`span`, {
                                                children: [
                                                  `命中: `,
                                                  (0, $.jsx)(`span`, {
                                                    className: `font-mono text-emerald-950 text-[11px] font-semibold`,
                                                    children: `(title, publish_time, doc_num, dept)`,
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  })
                                : (0, $.jsxs)(`div`, {
                                    className: `bg-[#f2faf6] border border-emerald-200/90 rounded-xl p-3 space-y-1.5 shadow-2xs animate-in fade-in duration-200`,
                                    children: [
                                      (0, $.jsxs)(`div`, {
                                        className: `flex items-center justify-between text-xs font-bold text-[#166534]`,
                                        children: [
                                          (0, $.jsx)(`span`, {
                                            children: `规则健康度校验:`,
                                          }),
                                          (0, $.jsx)(`span`, {
                                            className: `font-extrabold text-[#166534] font-mono`,
                                            children: `命中: 6/6 (100%)`,
                                          }),
                                        ],
                                      }),
                                      (0, $.jsxs)(`div`, {
                                        className: `flex items-start gap-1.5 text-xs text-[#1e3a2b] font-medium leading-relaxed`,
                                        children: [
                                          (0, $.jsx)(B, {
                                            className: `w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5`,
                                          }),
                                          (0, $.jsxs)(`span`, {
                                            children: [
                                              `必填字段全部命中 `,
                                              (0, $.jsx)(`span`, {
                                                className: `font-sans text-slate-600`,
                                                children: `(title, publish_time, content_html)`,
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  })),
                          ],
                        }),
                        F
                          ? (0, $.jsxs)(`div`, {
                              className: `bg-[#0f172a] rounded-xl p-3.5 text-emerald-400 font-mono text-[11.5px] flex-1 flex flex-col min-h-[360px] max-h-[460px] border border-slate-800 shadow-inner overflow-hidden animate-in fade-in duration-150`,
                              children: [
                                (0, $.jsxs)(`div`, {
                                  className: `flex items-center justify-between pb-2 border-b border-slate-800/80 text-xs font-semibold text-slate-400 shrink-0`,
                                  children: [
                                    (0, $.jsx)(`span`, {
                                      children: `抽取结果 (JSON Payload)`,
                                    }),
                                    (0, $.jsx)(`button`, {
                                      type: `button`,
                                      onClick: me,
                                      title: `复制 JSON Payload`,
                                      className: `hover:text-white transition-colors cursor-pointer`,
                                      children: (0, $.jsx)(oe, {
                                        className: `w-3.5 h-3.5`,
                                      }),
                                    }),
                                  ],
                                }),
                                (0, $.jsx)(`pre`, {
                                  className: `whitespace-pre overflow-auto flex-1 pt-2 leading-relaxed`,
                                  children: e
                                    ? `{
  "crawling_mode": "id_increment_detail",
  "task_name": "区域政务公报数字档案库-ID自增长",
  "sample_target_url": "${s}",
  "extracted_data": {
    "title": "关于公布2026年度第一批政务数字化转型试点名单的通知",
    "publish_time": "2026-09-22 10:00:00",
    "doc_number": "厅发〔2026〕18号",
    "source_dept": "省人民政府办公厅",
    "author": null,
    "content_html": null
  },
  "matrix_fields_count": 6,
  "matched_fields_count": 4,
  "missing_required_fields": [
    "content_html"
  ],
  "missing_optional_fields": [
    "author"
  ],
  "required_fields_check": "FAILED (content_html missing)",
  "status": "VALIDATION_WARNING"
}`
                                    : !l && u === `stage1`
                                      ? `{
  "crawling_mode": "category_polling",
  "proxy_vendor": "KuaiProxy (Enterprise)",
  "list_items_found": 15,
  "dedup_skipped": 11,
  "new_articles_extracted": 4,
  "first_item_detail": {
    "title": "央行宣布下调金融机构外汇存款准备金率 2 个百分点",
    "url": "https://www.hxfinance.com/article/20260922/fin_9821.html",
    "publish_time": "2026-09-22 14:15:30",
    "author": "陈晓涵",
    "content_length": 1842
  }
}`
                                      : l
                                        ? `{
  "crawling_mode": "id_increment_detail",
  "task_name": "${t?.name || `自增采集任务`}",
  "sample_target_url": "${s}",
  "extracted_data": {
    "title": "央行宣布下调金融机构外汇存款准备金率 2 个百分点",
    "author": "陈晓涵",
    "publish_time": "2026-09-22 14:15:30",
    "content_body": "<p>为保持银行体系流动性合理充裕...</p>",
    "content_length": 1842
  },
  "matrix_fields_count": ${T.length},
  "required_fields_check": "ALL_PASSED",
  "status": "SUCCESS"
}`
                                        : `{
  "crawling_mode": "detail_extraction",
  "proxy_vendor": "KuaiProxy (Enterprise)",
  "article_url": "https://www.hxfinance.com/article/20260922/fin_9821.html",
  "title": "央行宣布下调金融机构外汇存款准备金率 2 个百分点",
  "author": "陈晓涵",
  "publish_time": "2026-09-22 14:15:30",
  "content_body": "<p>为保持银行体系流动性合理充裕...</p>",
  "content_length": 1842,
  "matrix_fields_count": ${T.length},
  "required_fields_check": "ALL_PASSED",
  "status": "SUCCESS"
}`,
                                }),
                              ],
                            })
                          : (0, $.jsxs)(`div`, {
                              className: `bg-slate-50 border border-dashed border-slate-300 rounded-xl p-5 flex-1 flex flex-col items-center justify-center text-center space-y-3 min-h-[360px]`,
                              children: [
                                (0, $.jsx)(`div`, {
                                  className: `w-10 h-10 rounded-full bg-blue-50 text-[#0066FF] flex items-center justify-center`,
                                  children: (0, $.jsx)(pt, {
                                    className: `w-5 h-5`,
                                  }),
                                }),
                                (0, $.jsxs)(`div`, {
                                  className: `text-xs text-slate-600 leading-relaxed max-w-[240px]`,
                                  children: [
                                    `尚未执行测试。点击右上角“`,
                                    (0, $.jsx)(`strong`, {
                                      className: `text-slate-900 font-bold`,
                                      children: `立即执行解析测试`,
                                    }),
                                    `”立即模拟执行真实抽取`,
                                  ],
                                }),
                                (0, $.jsxs)(`button`, {
                                  type: `button`,
                                  onClick: de,
                                  disabled: L,
                                  className: `px-3.5 py-1.5 bg-[#0066FF] hover:bg-[#0052cc] text-white text-xs font-bold rounded-lg shadow-2xs inline-flex items-center gap-1.5 cursor-pointer disabled:opacity-50 transition-colors`,
                                  children: [
                                    (0, $.jsx)(pt, {
                                      className: `w-3.5 h-3.5 fill-current ${L ? `animate-bounce` : ``}`,
                                    }),
                                    (0, $.jsx)(`span`, {
                                      children: `立即执行解析测试`,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                        (0, $.jsx)(`div`, {
                          className: `flex items-center justify-end pt-0.5`,
                          children: (0, $.jsxs)(`button`, {
                            type: `button`,
                            onClick: F
                              ? me
                              : () =>
                                  q(`请先执行解析测试后再复制 JSON Payload`),
                            className: `h-8 px-3.5 rounded-lg border text-xs font-semibold inline-flex items-center gap-1.5 transition-colors cursor-pointer w-full justify-center ${F ? `border-slate-300 hover:bg-slate-50 text-slate-700 bg-white shadow-2xs` : `border-slate-200 text-slate-400 bg-slate-50/50`}`,
                            children: [
                              (0, $.jsx)(oe, {
                                className: `w-3.5 h-3.5 text-slate-500`,
                              }),
                              (0, $.jsx)(`span`, {
                                children: V ? `已复制` : `复制 JSON 结果`,
                              }),
                            ],
                          }),
                        }),
                      ],
                    });
                  })(),
                ],
              }),
            }),
          ],
        }),
        H &&
          (0, $.jsx)(`div`, {
            className: `fixed inset-0 z-60 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in`,
            children: (0, $.jsxs)(`div`, {
              className: `bg-white rounded-xl border border-slate-200 shadow-2xl max-w-md w-full p-4.5 space-y-3`,
              children: [
                (0, $.jsxs)(`div`, {
                  className: `flex items-center justify-between pb-2 border-b border-slate-100`,
                  children: [
                    (0, $.jsxs)(`h4`, {
                      className: `font-extrabold text-slate-900 text-xs flex items-center gap-1.5`,
                      children: [
                        (0, $.jsx)(ye, { className: `w-4 h-4 text-[#0066FF]` }),
                        (0, $.jsx)(`span`, {
                          children: `解析规则版本历史对比`,
                        }),
                      ],
                    }),
                    (0, $.jsx)(`button`, {
                      type: `button`,
                      onClick: () => ae(!1),
                      className: `text-slate-400 hover:text-slate-700`,
                      children: (0, $.jsx)(Q, { className: `w-4 h-4` }),
                    }),
                  ],
                }),
                (0, $.jsxs)(`div`, {
                  className: `space-y-2 text-xs`,
                  children: [
                    (0, $.jsxs)(`div`, {
                      className: `p-2.5 rounded-lg bg-emerald-50 border border-emerald-200`,
                      children: [
                        (0, $.jsxs)(`div`, {
                          className: `flex items-center justify-between font-bold text-emerald-900 text-[11.5px]`,
                          children: [
                            (0, $.jsx)(`span`, {
                              children: `当前激活版本: v2.5.0`,
                            }),
                            (0, $.jsx)(`span`, {
                              className: `text-[10px] px-1.5 py-0.2 bg-emerald-200 text-emerald-900 rounded`,
                              children: `运行中`,
                            }),
                          ],
                        }),
                        (0, $.jsx)(`p`, {
                          className: `text-[11px] text-emerald-700 mt-1`,
                          children: `更新详情: 升级列表项迭代器为 div.news-item，完善详情链接相对路径补全规则`,
                        }),
                      ],
                    }),
                    (0, $.jsxs)(`div`, {
                      className: `p-2.5 rounded-lg bg-slate-50 border border-slate-200`,
                      children: [
                        (0, $.jsxs)(`div`, {
                          className: `flex items-center justify-between font-bold text-slate-700 text-[11.5px]`,
                          children: [
                            (0, $.jsx)(`span`, {
                              children: `历史稳定版本: v2.4.9`,
                            }),
                            (0, $.jsx)(`span`, {
                              className: `text-[10px] text-slate-500`,
                              children: `2026-09-18`,
                            }),
                          ],
                        }),
                        (0, $.jsx)(`p`, {
                          className: `text-[11px] text-slate-500 mt-1`,
                          children: `更新详情: 初始支持板块轮询两阶段提取，限制单次最大翻页数为 5 页`,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, $.jsx)(`div`, {
                  className: `flex justify-end pt-1`,
                  children: (0, $.jsx)(`button`, {
                    type: `button`,
                    onClick: () => ae(!1),
                    className: `h-7.5 px-3 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 font-bold text-xs`,
                    children: `关闭`,
                  }),
                }),
              ],
            }),
          }),
      ],
    });
  },
  zn = ({
    isOpen: e,
    onClose: t,
    initialSvcId: n,
    services: r,
    retryItems: i,
    websiteAuditConfigs: a,
    onUpdateRetryItems: o,
    onUpdateWebsiteAuditConfig: s,
    onTriggerInstantRetry: c,
  }) => {
    let [l, u] = (0, C.useState)(n || `all`),
      [d, f] = (0, C.useState)(``),
      [p, m] = (0, C.useState)(``),
      [h, g] = (0, C.useState)([]),
      [_, v] = (0, C.useState)(null),
      [y, b] = (0, C.useState)(1),
      [x, S] = (0, C.useState)(10),
      [w, T] = (0, C.useState)(null),
      [D, O] = (0, C.useState)(``),
      [k, A] = (0, C.useState)(`all`),
      [ee, M] = (0, C.useState)(null),
      N = (e, t) => {
        e &&
          (navigator.clipboard.writeText(e),
          M(t),
          setTimeout(() => M(null), 1800));
      },
      [F, z] = (0, C.useState)(null),
      [ne, V] = (0, C.useState)(null),
      ie = (e) => {
        let t = X.find((t) => t.id === e.svcId),
          n = (n) =>
            t?.url && t.url.includes(`{id}`)
              ? t.url.replace(`{id}`, n)
              : t?.url && t.url.startsWith(`http`)
                ? `${t.url.replace(/\/+$/, ``)}/${n}.html`
                : `https://${e.domain || `www.cn-stock.com.cn`}/detail/${n}.html`,
          r = [...e.items].sort((e, t) =>
            e.inboundTime > t.inboundTime ? 1 : -1,
          );
        if (r.length >= 10)
          return r
            .slice(0, 10)
            .map((e, t) => ({
              ...e,
              targetUrl: e.targetUrl || n(String(e.targetId)),
              lastRetryTime:
                e.lastRetryTime ||
                `2026-09-28 09:${String(Math.max(10, 48 - t * 3)).padStart(2, `0`)}:${String((t * 17) % 60).padStart(2, `0`)}`,
            }));
        let i = parseInt(e.svcId.replace(/\D/g, ``) || `10`, 10) * 1e4 + 4800,
          a = r.map((e, t) => ({
            ...e,
            targetUrl: e.targetUrl || n(String(e.targetId)),
            lastRetryTime:
              e.lastRetryTime ||
              `2026-09-28 09:${String(Math.max(10, 48 - t * 3)).padStart(2, `0`)}:${String((t * 17) % 60).padStart(2, `0`)}`,
          }));
        for (let t = r.length; t < 10; t++) {
          let r = String(i + t * 2 + 1),
            o = Math.max(0, 30 + t * 4),
            s = (t * 13) % 60,
            c = (e) => String(e).padStart(2, `0`),
            l = `2026-09-28 08:${c(o)}:${c(s)}`,
            u = Math.max(10, 52 - t * 3),
            d = (t * 19) % 60,
            f = `2026-09-28 09:${c(u)}:${c(d)}`;
          a.push({
            id: `RETRY-AUTO-${e.svcId}-${r}`,
            svcId: e.svcId,
            siteName: e.siteName,
            domain: e.domain,
            targetId: r,
            targetUrl: n(r),
            errorReason:
              t % 2 == 0
                ? `404 Not Found (源端空洞或未发布)`
                : `504 Gateway Timeout (源端响应超时)`,
            inboundTime: l,
            auditTime: `2026-09-28 18:00:00`,
            lastRetryTime: f,
            retryCount: (t % 3) + 1,
            maxRetries: 10,
            auditStatus: t === 0 ? `retrying` : `pending`,
            priority: `high`,
          });
        }
        return a
          .sort((e, t) => (e.inboundTime > t.inboundTime ? 1 : -1))
          .slice(0, 10);
      };
    (0, C.useEffect)(() => {
      b(1);
    }, [l, d, p]);
    let H = () => {
        (u(`all`), f(``), m(``), b(1));
      },
      ae = l !== `all` || d.trim() !== `` || p.trim() !== ``,
      [se, U] = (0, C.useState)(!1),
      [G, K] = (0, C.useState)(``),
      [ce, q] = (0, C.useState)(``),
      [le, J] = (0, C.useState)(`人工排查发现空洞或漏采，手动录入重试库`),
      [ue, de] = (0, C.useState)(`normal`),
      [fe, pe] = (0, C.useState)(!1),
      [me, he] = (0, C.useState)(``),
      [_e, ve] = (0, C.useState)(``),
      [ye, be] = (0, C.useState)(30),
      [xe, Se] = (0, C.useState)(!0),
      [Ce, we] = (0, C.useState)(3),
      [Te, Ee] = (0, C.useState)(`3小时`);
    C.useEffect(() => {
      n && u(n);
    }, [n]);
    let X = (0, C.useMemo)(() => r.filter((e) => e.method === `auto`), [r]),
      De = (e) => {
        (v(e), setTimeout(() => v(null), 2500));
      },
      Oe = (e, t) => {
        let n = (e) =>
          t.url && t.url.includes(`{id}`)
            ? t.url.replace(`{id}`, e)
            : t.url && t.url.startsWith(`http`)
              ? `${t.url.replace(/\/+$/, ``)}/${e}.html`
              : `https://${t.domain || (t.url ? new URL(t.url).hostname : `www.cn-stock.com.cn`)}/detail/${e}.html`;
        if (!e || e.length === 0) {
          let e = parseInt(t.id.replace(/\D/g, ``) || `10`, 10) * 1e4 + 4800;
          return [
            {
              targetId: String(e + 18),
              targetUrl: n(String(e + 18)),
              inboundTime: `2026-09-27 14:15:20`,
              runTime: `2026-09-27 15:42:10`,
              duration: `185ms`,
              round: 2,
              httpStatus: 200,
              status: `success`,
              resultMessage: `200 OK (抓取成功，提取正文3,240字并已入库)`,
              proxyIp: `117.143.88.204:9020 (上海BGP高速隧道)`,
            },
            {
              targetId: String(e + 15),
              targetUrl: n(String(e + 15)),
              inboundTime: `2026-09-27 14:10:05`,
              runTime: `2026-09-27 15:40:05`,
              duration: `210ms`,
              round: 1,
              httpStatus: 404,
              status: `404_empty`,
              resultMessage: `404 Not Found (目标页面未发布或空洞，进入重试队列)`,
              proxyIp: `121.232.89.14:9999 (江苏南京住宅IP)`,
            },
            {
              targetId: String(e + 12),
              targetUrl: n(String(e + 12)),
              inboundTime: `2026-09-27 13:55:18`,
              runTime: `2026-09-27 15:35:40`,
              duration: `340ms`,
              round: 1,
              httpStatus: 504,
              status: `timeout`,
              resultMessage: `504 Gateway Timeout (目标源端连接超时，进入下轮重试)`,
              proxyIp: `gateway-bj.qingguo.com:18888`,
            },
          ];
        }
        return e.map((e, t) => {
          let r = t === 0 && e.retryCount > 1,
            i = t % 3 == 2,
            a = 404,
            o = `404_empty`,
            s = `404 Not Found (空洞待重试)`;
          r
            ? ((a = 200), (o = `success`), (s = `200 OK (重试抓取成功并入库)`))
            : i
              ? ((a = 504),
                (o = `timeout`),
                (s = `504 Gateway Timeout (请求超时，等待下一轮重试)`))
              : e.auditStatus === `retrying` &&
                ((a = 0),
                (o = `retrying`),
                (s = `执行中 (正在通过代理网关发起实时探测)`));
          let c = Math.max(0, 45 - t * 4),
            l = (t * 17) % 60,
            u = `2026-09-27 ${`15`.padStart(2, `0`)}:${String(c).padStart(2, `0`)}:${String(l).padStart(2, `0`)}`;
          return {
            targetId: String(e.targetId),
            targetUrl: e.targetUrl || n(String(e.targetId)),
            inboundTime:
              e.inboundTime ||
              `2026-09-27 14:${String(Math.max(10, 40 - t * 3)).padStart(2, `0`)}:12`,
            runTime: e.lastRetryTime || u,
            duration: `${140 + ((t * 37) % 180)}ms`,
            round: e.retryCount || 1,
            httpStatus: a,
            status: o,
            resultMessage: s,
            proxyIp: `自动轮换隧道出口 (平均延迟 22ms)`,
          };
        });
      },
      ke = (0, C.useMemo)(
        () =>
          X.map((e) => {
            let t = i.filter((t) => t.svcId === e.id),
              n = a[e.id]?.retryIntervalText || `3小时`,
              r = `2026-09-27 08:30:15`,
              o = `2026-09-27 15:40:00`;
            if (t.length > 0) {
              let e = [...t].sort((e, t) =>
                e.inboundTime > t.inboundTime ? 1 : -1,
              );
              ((r = e[0].inboundTime), (o = e[e.length - 1].inboundTime));
            }
            let s = t.filter(
                (e) =>
                  e.auditStatus === `pending` || e.auditStatus === `rejected`,
              ).length,
              c = t.filter((e) => e.auditStatus === `retrying`).length,
              l = Oe(t, e),
              u = parseInt(e.id.replace(/\D/g, ``) || `10`, 10),
              d =
                e.id === `SVC-P002`
                  ? 95345
                  : t.length > 0
                    ? t.length * 3200 + 45e3 + u * 1250
                    : u * 4120 + 24800;
            return {
              svcId: e.id,
              siteName: e.name,
              domain:
                e.domain || (e.url ? new URL(e.url).hostname : `domain.com`),
              totalIds: d,
              pendingCount: t.length > 0 ? s : 32,
              retryingCount: t.length > 0 ? c : 6,
              earliestInboundTime: r,
              latestInboundTime: o,
              retryIntervalText: n,
              lastRoundDuration: t[0]?.lastRoundDuration || `4分32秒`,
              items: t,
              logs: l,
            };
          }),
        [X, i, a],
      ),
      Ae = (0, C.useMemo)(
        () =>
          ke.filter((e) => {
            if (l !== `all` && e.svcId !== l) return !1;
            if (d.trim()) {
              let t = d.trim().toLowerCase();
              if (!(
                e.items.some((e) =>
                  String(e.targetId).toLowerCase().includes(t),
                ) || e.logs.some((e) => e.targetId.toLowerCase().includes(t))
              ))
                return !1;
            }
            if (p.trim()) {
              let t = p.trim().toLowerCase();
              if (!(
                e.siteName.toLowerCase().includes(t) ||
                e.svcId.toLowerCase().includes(t) ||
                e.domain.toLowerCase().includes(t) ||
                e.items.some((e) => String(e.targetId).includes(t))
              ))
                return !1;
            }
            return !0;
          }),
        [ke, l, d, p],
      ),
      je = Math.max(1, Math.ceil(Ae.length / x)),
      Fe = Math.min(y, je),
      Ie = (Fe - 1) * x,
      Re = Math.min(Ie + x, Ae.length),
      ze = (0, C.useMemo)(() => Ae.slice(Ie, Ie + x), [Ae, Ie, x]);
    if (!e) return null;
    let Z = () => {
        h.length === ze.length && ze.length > 0
          ? g([])
          : g(ze.map((e) => e.svcId));
      },
      Ve = (e) => {
        h.includes(e) ? g(h.filter((t) => t !== e)) : g([...h, e]);
      },
      He = (e) => {
        let t = a[e] || {
          svcId: e,
          siteName: X.find((t) => t.id === e)?.name || `目标网站`,
          domain: X.find((t) => t.id === e)?.domain || ``,
          auditTime: `2026-09-27 18:30:00`,
          auditCycleMinutes: 30,
          autoAudit: !0,
          emptyHoleTolerance: 20,
          retryIntervalHours: 3,
          retryIntervalText: `3小时`,
        };
        (he(e),
          ve(t.auditTime || `2026-09-27 18:30:00`),
          be(t.auditCycleMinutes || 30),
          Se(t.autoAudit !== !1),
          we(t.retryIntervalHours || 3),
          Ee(t.retryIntervalText || `${t.retryIntervalHours || 3}小时`),
          pe(!0));
      },
      Ue = () => {
        if (!me) return;
        let e = {
          svcId: me,
          siteName: X.find((e) => e.id === me)?.name || `目标网站`,
          domain: X.find((e) => e.id === me)?.domain || ``,
          auditTime: _e,
          auditCycleMinutes: ye,
          autoAudit: xe,
          emptyHoleTolerance: 20,
          retryIntervalHours: Ce,
          retryIntervalText: Te,
        };
        (s(me, e),
          De(`已成功更新【${e.siteName}】重试时间参数为: ${Te}！`),
          pe(!1));
      },
      We = () => {
        if (!G.trim()) {
          De(`请输入需要重试的目标 ID`);
          return;
        }
        let e = ce || X[0]?.id,
          t = X.find((t) => t.id === e),
          n = G.split(/[\n,，\s]+/)
            .map((e) => e.trim())
            .filter(Boolean);
        if (n.length === 0) {
          De(`请输入有效的目标 ID`);
          return;
        }
        let r = new Date().toISOString().replace(`T`, ` `).substring(0, 19);
        (o([
          ...n.map((n, i) => ({
            id: `manual-${Date.now()}-${i}`,
            svcId: e,
            siteName: t?.name || `未知网站`,
            domain: t?.domain || `domain.com`,
            targetId: n,
            targetUrl: `https://${t?.domain || `domain.com`}/detail/${n}.html`,
            auditStatus: `pending`,
            auditTime: `2026-09-27 18:30:00`,
            retryCount: 0,
            maxRetries: 5,
            inboundTime: r,
            retryIntervalHours: 3,
            retryIntervalText: `3小时`,
            errorReason: le || `人工手动录入重试库`,
            priority: ue,
            lastRoundDuration: `待执行`,
          })),
          ...i,
        ]),
          De(`已成功将 ${n.length} 个 ID 录入【${t?.name}】重试库！`),
          U(!1),
          K(``));
      },
      Ke = ke.length,
      qe = ke.reduce((e, t) => e + t.totalIds, 0);
    return (0, $.jsxs)(`div`, {
      className: `fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4`,
      children: [
        (0, $.jsxs)(`div`, {
          className: `bg-white rounded-2xl border border-slate-200/90 shadow-2xl overflow-hidden max-w-[1200px] w-full flex flex-col max-h-[92vh] animate-in fade-in zoom-in-95 duration-150`,
          children: [
            _ &&
              (0, $.jsxs)(`div`, {
                className: `absolute top-4 left-1/2 -translate-x-1/2 z-60 bg-slate-900 text-white px-4 py-2 rounded-lg text-xs font-semibold shadow-xl flex items-center gap-2 border border-slate-700 animate-in fade-in slide-in-from-top-2`,
                children: [
                  (0, $.jsx)(B, { className: `w-4 h-4 text-emerald-400` }),
                  (0, $.jsx)(`span`, { children: _ }),
                ],
              }),
            (0, $.jsxs)(`div`, {
              className: `px-6 py-4 border-b border-slate-200 bg-slate-50/85 flex items-center justify-between`,
              children: [
                (0, $.jsxs)(`div`, {
                  className: `flex flex-col`,
                  children: [
                    (0, $.jsxs)(`h3`, {
                      className: `text-[15px] font-extrabold text-slate-900 flex items-center gap-2`,
                      children: [
                        (0, $.jsx)(Le, { className: `w-4 h-4 text-amber-600` }),
                        (0, $.jsx)(`span`, {
                          children: `ID自增长 · ID重试库调度看板`,
                        }),
                        (0, $.jsx)(`span`, {
                          className: `text-[10px] font-bold px-2 py-0.5 bg-amber-50 text-amber-800 border border-amber-200 rounded`,
                          children: `按网站聚合 · 日志流水记录`,
                        }),
                      ],
                    }),
                    (0, $.jsx)(`p`, {
                      className: `text-[11px] text-slate-500 mt-0.5`,
                      children: `每个网站独立一行管理，展示待重试 ID 总数、最早入库时间、重试时间参数以及每个 ID 运行时间点与结果日志`,
                    }),
                  ],
                }),
                (0, $.jsx)(`div`, {
                  className: `flex items-center gap-2`,
                  children: (0, $.jsx)(`button`, {
                    type: `button`,
                    onClick: t,
                    className: `w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-200/80 transition-colors cursor-pointer`,
                    children: (0, $.jsx)(Q, { className: `w-4 h-4` }),
                  }),
                }),
              ],
            }),
            (0, $.jsxs)(`div`, {
              className: `px-6 py-3 border-b border-slate-200 bg-slate-50/40 flex flex-wrap items-center justify-between gap-3 text-xs`,
              children: [
                (0, $.jsxs)(`div`, {
                  className: `flex flex-wrap items-center gap-2.5`,
                  children: [
                    (0, $.jsxs)(`div`, {
                      className: `flex items-center gap-1.5 bg-white pl-2.5 pr-2 py-1 rounded-lg border border-slate-300 shadow-2xs`,
                      children: [
                        (0, $.jsx)(`span`, {
                          className: `text-slate-500 font-medium`,
                          children: `归属网站:`,
                        }),
                        (0, $.jsxs)(`select`, {
                          value: l,
                          onChange: (e) => u(e.target.value),
                          className: `bg-transparent text-xs font-bold text-slate-800 outline-none cursor-pointer max-w-[210px]`,
                          children: [
                            (0, $.jsxs)(`option`, {
                              value: `all`,
                              children: [
                                `全部网站 (全量聚合 · `,
                                Ke,
                                ` 个网站 / `,
                                qe,
                                ` 个ID)`,
                              ],
                            }),
                            X.map((e) => {
                              let t =
                                ke.find((t) => t.svcId === e.id)?.totalIds || 0;
                              return (0, $.jsxs)(
                                `option`,
                                {
                                  value: e.id,
                                  children: [
                                    e.name
                                      .replace(`-ID自增长`, ``)
                                      .replace(`-自增长轮询`, ``),
                                    ` (`,
                                    t,
                                    `个ID)`,
                                  ],
                                },
                                e.id,
                              );
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, $.jsxs)(`div`, {
                      className: `flex items-center gap-1 bg-white pl-2.5 pr-2 py-1 rounded-lg border border-slate-300 shadow-2xs`,
                      children: [
                        (0, $.jsx)(`span`, {
                          className: `text-slate-500 font-medium whitespace-nowrap`,
                          children: `待重试ID:`,
                        }),
                        (0, $.jsx)(`input`, {
                          type: `text`,
                          value: d,
                          onChange: (e) => f(e.target.value),
                          placeholder: `按 ID 查询...`,
                          className: `bg-transparent text-xs text-slate-800 outline-none w-[90px] font-mono font-medium`,
                        }),
                        d &&
                          (0, $.jsx)(`button`, {
                            type: `button`,
                            onClick: () => f(``),
                            className: `text-slate-400 hover:text-slate-600 p-0.5 cursor-pointer`,
                            children: (0, $.jsx)(Q, { className: `w-3 h-3` }),
                          }),
                      ],
                    }),
                    (0, $.jsxs)(`div`, {
                      className: `relative`,
                      children: [
                        (0, $.jsx)(Be, {
                          className: `w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2`,
                        }),
                        (0, $.jsx)(`input`, {
                          type: `text`,
                          value: p,
                          onChange: (e) => m(e.target.value),
                          placeholder: `搜索网站名称 / 域名 / 目标ID...`,
                          className: `h-8 pl-8 pr-7 bg-white border border-slate-300 rounded-lg text-xs text-slate-800 focus:border-[#0066FF] outline-none w-[200px] shadow-2xs`,
                        }),
                        p &&
                          (0, $.jsx)(`button`, {
                            type: `button`,
                            onClick: () => m(``),
                            className: `absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5 cursor-pointer`,
                            children: (0, $.jsx)(Q, { className: `w-3 h-3` }),
                          }),
                      ],
                    }),
                    ae &&
                      (0, $.jsxs)(`button`, {
                        type: `button`,
                        onClick: H,
                        className: `h-8 px-2.5 bg-white hover:bg-slate-100 border border-slate-300 text-slate-600 hover:text-slate-900 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors cursor-pointer shadow-2xs`,
                        title: `清空并重置全部查询条件`,
                        children: [
                          (0, $.jsx)(Le, {
                            className: `w-3 h-3 text-slate-400`,
                          }),
                          (0, $.jsx)(`span`, { children: `重置条件` }),
                        ],
                      }),
                  ],
                }),
                (0, $.jsxs)(`div`, {
                  className: `flex items-center gap-1.5 text-xs text-slate-500 shrink-0`,
                  children: [
                    (0, $.jsx)(`span`, { children: `匹配网站:` }),
                    (0, $.jsx)(`span`, {
                      className: `font-mono font-bold text-slate-900 text-[13px]`,
                      children: Ae.length,
                    }),
                    (0, $.jsx)(`span`, {
                      className: `text-slate-400`,
                      children: `/`,
                    }),
                    (0, $.jsxs)(`span`, {
                      className: `font-mono text-slate-500`,
                      children: [Ke, ` 个网站`],
                    }),
                  ],
                }),
              ],
            }),
            (0, $.jsx)(`div`, {
              className: `flex-1 overflow-y-auto p-4`,
              children: (0, $.jsxs)(`table`, {
                className: `w-full text-left border-collapse text-xs`,
                children: [
                  (0, $.jsx)(`thead`, {
                    children: (0, $.jsxs)(`tr`, {
                      className: `border-b border-slate-200 text-slate-600 font-bold bg-slate-50/90 select-none`,
                      children: [
                        (0, $.jsx)(`th`, {
                          className: `py-2.5 px-3 w-10 text-center`,
                          children: (0, $.jsx)(`div`, {
                            onClick: Z,
                            className: `cursor-pointer inline-flex items-center justify-center text-slate-500 hover:text-slate-900`,
                            children:
                              h.length === ze.length && ze.length > 0
                                ? (0, $.jsx)(Ze, {
                                    className: `w-4 h-4 text-[#0066FF]`,
                                  })
                                : (0, $.jsx)(Qe, { className: `w-4 h-4` }),
                          }),
                        }),
                        (0, $.jsx)(`th`, {
                          className: `py-2.5 px-3 min-w-[190px]`,
                          children: `网站名称 / 采集台账`,
                        }),
                        (0, $.jsx)(`th`, {
                          className: `py-2.5 px-3 w-[120px]`,
                          children: `待重试ID数量`,
                        }),
                        (0, $.jsx)(`th`, {
                          className: `py-2.5 px-3 w-[150px]`,
                          children: `最早的ID入库时间`,
                        }),
                        (0, $.jsx)(`th`, {
                          className: `py-2.5 px-3 w-[115px] text-center`,
                          children: `最早入库验证`,
                        }),
                        (0, $.jsx)(`th`, {
                          className: `py-2.5 px-3 w-[150px]`,
                          children: `重试时间参数`,
                        }),
                        (0, $.jsx)(`th`, {
                          className: `py-2.5 px-3 w-[115px]`,
                          children: `上轮运行时长`,
                        }),
                        (0, $.jsx)(`th`, {
                          className: `py-2.5 px-3 w-[95px] text-right`,
                          children: `操作`,
                        }),
                      ],
                    }),
                  }),
                  (0, $.jsx)(`tbody`, {
                    className: `divide-y divide-slate-100`,
                    children:
                      Ae.length === 0
                        ? (0, $.jsx)(`tr`, {
                            children: (0, $.jsxs)(`td`, {
                              colSpan: 8,
                              className: `py-12 text-center text-slate-400`,
                              children: [
                                (0, $.jsx)(W, {
                                  className: `w-8 h-8 mx-auto text-slate-300 mb-2`,
                                }),
                                (0, $.jsx)(`p`, {
                                  className: `text-xs`,
                                  children: `暂无符合筛选条件的网站重试记录`,
                                }),
                              ],
                            }),
                          })
                        : ze.map((e) => {
                            let t = h.includes(e.svcId);
                            return (0, $.jsxs)(
                              `tr`,
                              {
                                className: `hover:bg-slate-50/80 transition-colors ${t ? `bg-blue-50/40` : ``}`,
                                children: [
                                  (0, $.jsx)(`td`, {
                                    className: `py-3 px-3 text-center`,
                                    children: (0, $.jsx)(`div`, {
                                      onClick: () => Ve(e.svcId),
                                      className: `cursor-pointer inline-flex items-center justify-center text-slate-500 hover:text-slate-900`,
                                      children: t
                                        ? (0, $.jsx)(Ze, {
                                            className: `w-4 h-4 text-[#0066FF]`,
                                          })
                                        : (0, $.jsx)(Qe, {
                                            className: `w-4 h-4`,
                                          }),
                                    }),
                                  }),
                                  (0, $.jsxs)(`td`, {
                                    className: `py-3 px-3`,
                                    children: [
                                      (0, $.jsx)(`div`, {
                                        className: `font-bold text-slate-900 text-xs flex items-center gap-1.5`,
                                        children: (0, $.jsx)(`span`, {
                                          children: e.siteName,
                                        }),
                                      }),
                                      (0, $.jsxs)(`div`, {
                                        className: `font-mono text-[11px] text-slate-400 mt-0.5 truncate max-w-[220px]`,
                                        title: e.domain,
                                        children: [
                                          (0, $.jsx)(`span`, {
                                            className: `font-bold text-slate-600`,
                                            children: e.svcId,
                                          }),
                                          ` · `,
                                          e.domain,
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, $.jsx)(`td`, {
                                    className: `py-3 px-3`,
                                    children: (0, $.jsx)(`span`, {
                                      className: `font-mono text-xs font-bold text-slate-800`,
                                      children:
                                        e.pendingCount || e.items.length || 0,
                                    }),
                                  }),
                                  (0, $.jsx)(`td`, {
                                    className: `py-3 px-3`,
                                    children: (0, $.jsxs)(`div`, {
                                      className: `font-mono text-xs text-slate-700 font-bold flex items-center gap-1`,
                                      children: [
                                        (0, $.jsx)(j, {
                                          className: `w-3.5 h-3.5 text-slate-400 shrink-0`,
                                        }),
                                        (0, $.jsx)(`span`, {
                                          children: e.earliestInboundTime,
                                        }),
                                      ],
                                    }),
                                  }),
                                  (0, $.jsx)(`td`, {
                                    className: `py-3 px-3 text-center`,
                                    children: (0, $.jsx)(`button`, {
                                      type: `button`,
                                      onClick: () => V(e),
                                      className: `text-xs font-semibold text-[#0066FF] hover:text-[#004dc7] hover:underline cursor-pointer transition-colors`,
                                      title: `查看【${e.siteName}】最早入库的前10条拼装目标URL真实情况`,
                                      children: `最早URL10条`,
                                    }),
                                  }),
                                  (0, $.jsx)(`td`, {
                                    className: `py-3 px-3`,
                                    children: (0, $.jsxs)(`div`, {
                                      className: `flex items-center gap-1.5`,
                                      children: [
                                        (0, $.jsxs)(`span`, {
                                          className: `font-mono text-xs font-bold text-amber-900 bg-amber-50 border border-amber-200/90 px-2 py-0.5 rounded flex items-center gap-1 shadow-2xs`,
                                          children: [
                                            (0, $.jsx)(re, {
                                              className: `w-3 h-3 text-amber-600`,
                                            }),
                                            (0, $.jsx)(`span`, {
                                              children: e.retryIntervalText,
                                            }),
                                          ],
                                        }),
                                        (0, $.jsx)(`button`, {
                                          type: `button`,
                                          onClick: () => He(e.svcId),
                                          className: `text-slate-400 hover:text-[#0066FF] p-0.5 rounded transition-colors cursor-pointer`,
                                          title: `点击修改【${e.siteName}】重试时间参数`,
                                          children: (0, $.jsx)(Me, {
                                            className: `w-3.5 h-3.5`,
                                          }),
                                        }),
                                      ],
                                    }),
                                  }),
                                  (0, $.jsx)(`td`, {
                                    className: `py-3 px-3`,
                                    children: (0, $.jsxs)(`div`, {
                                      className: `font-mono text-xs font-bold text-slate-800 flex items-center gap-1.5 bg-slate-100/90 border border-slate-200/80 px-2 py-0.5 rounded w-fit shadow-2xs`,
                                      children: [
                                        (0, $.jsx)(re, {
                                          className: `w-3 h-3 text-blue-600`,
                                        }),
                                        (0, $.jsx)(`span`, {
                                          children: e.lastRoundDuration,
                                        }),
                                      ],
                                    }),
                                  }),
                                  (0, $.jsx)(`td`, {
                                    className: `py-3 px-3 text-right`,
                                    children: (0, $.jsxs)(`button`, {
                                      type: `button`,
                                      onClick: () => T(e),
                                      className: `inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-bold text-purple-700 bg-purple-50 border border-purple-200/90 hover:bg-purple-100 transition-all cursor-pointer shadow-2xs`,
                                      title: `查看【${e.siteName}】全部待重试 ID 的详细执行日志与流水记录`,
                                      children: [
                                        (0, $.jsx)(Y, {
                                          className: `w-3.5 h-3.5 text-purple-700`,
                                        }),
                                        (0, $.jsx)(`span`, {
                                          children: `日志`,
                                        }),
                                      ],
                                    }),
                                  }),
                                ],
                              },
                              e.svcId,
                            );
                          }),
                  }),
                ],
              }),
            }),
            (0, $.jsxs)(`div`, {
              className: `px-6 py-3 border-t border-slate-200 bg-white flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500`,
              children: [
                (0, $.jsxs)(`div`, {
                  className: `flex items-center gap-3 flex-wrap`,
                  children: [
                    (0, $.jsxs)(`span`, {
                      className: `text-slate-600`,
                      children: [
                        `共 `,
                        (0, $.jsx)(`strong`, {
                          className: `font-mono font-bold text-slate-900`,
                          children: Ae.length,
                        }),
                        ` 个网站`,
                        Ae.length > 0 &&
                          (0, $.jsxs)(`span`, {
                            className: `text-slate-400 ml-1`,
                            children: [`(第 `, Ie + 1, ` - `, Re, ` 个网站)`],
                          }),
                      ],
                    }),
                    (0, $.jsxs)(`div`, {
                      className: `flex items-center gap-1.5 pl-2 border-l border-slate-200`,
                      children: [
                        (0, $.jsx)(`span`, {
                          className: `text-slate-400`,
                          children: `每页:`,
                        }),
                        (0, $.jsxs)(`select`, {
                          value: x,
                          onChange: (e) => {
                            (S(Number(e.target.value)), b(1));
                          },
                          className: `h-7 px-2 bg-slate-50 border border-slate-300 rounded-md text-xs font-semibold text-slate-700 outline-none cursor-pointer hover:border-blue-400`,
                          children: [
                            (0, $.jsx)(`option`, {
                              value: 10,
                              children: `10 个网站/页`,
                            }),
                            (0, $.jsx)(`option`, {
                              value: 20,
                              children: `20 个网站/页`,
                            }),
                            (0, $.jsx)(`option`, {
                              value: 50,
                              children: `50 个网站/页`,
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, $.jsxs)(`div`, {
                  className: `flex items-center gap-2`,
                  children: [
                    (0, $.jsxs)(`div`, {
                      className: `flex items-center gap-1`,
                      children: [
                        (0, $.jsx)(`button`, {
                          type: `button`,
                          onClick: () => b(1),
                          disabled: Fe <= 1,
                          className: `w-7 h-7 flex items-center justify-center rounded border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 hover:text-slate-900 disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer`,
                          title: `首页`,
                          children: (0, $.jsx)(R, { className: `w-3.5 h-3.5` }),
                        }),
                        (0, $.jsx)(`button`, {
                          type: `button`,
                          onClick: () => b((e) => Math.max(1, e - 1)),
                          disabled: Fe <= 1,
                          className: `w-7 h-7 flex items-center justify-center rounded border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 hover:text-slate-900 disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer`,
                          title: `上一页`,
                          children: (0, $.jsx)(I, { className: `w-3.5 h-3.5` }),
                        }),
                        (0, $.jsx)(`div`, {
                          className: `flex items-center gap-1 px-1`,
                          children: Array.from({ length: je }, (e, t) => t + 1)
                            .filter(
                              (e) =>
                                e === 1 || e === je || Math.abs(e - Fe) <= 1,
                            )
                            .map((e, t, n) => {
                              let r = n[t - 1];
                              return (0, $.jsxs)(
                                C.Fragment,
                                {
                                  children: [
                                    r &&
                                      e - r > 1 &&
                                      (0, $.jsx)(`span`, {
                                        className: `text-slate-400 px-0.5 select-none`,
                                        children: `...`,
                                      }),
                                    (0, $.jsx)(`button`, {
                                      type: `button`,
                                      onClick: () => b(e),
                                      className: `w-7 h-7 flex items-center justify-center rounded text-xs font-mono font-bold transition-all cursor-pointer ${Fe === e ? `bg-[#0066FF] text-white shadow-2xs` : `border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:text-slate-900`}`,
                                      children: e,
                                    }),
                                  ],
                                },
                                e,
                              );
                            }),
                        }),
                        (0, $.jsx)(`button`, {
                          type: `button`,
                          onClick: () => b((e) => Math.min(je, e + 1)),
                          disabled: Fe >= je,
                          className: `w-7 h-7 flex items-center justify-center rounded border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 hover:text-slate-900 disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer`,
                          title: `下一页`,
                          children: (0, $.jsx)(L, { className: `w-3.5 h-3.5` }),
                        }),
                        (0, $.jsx)(`button`, {
                          type: `button`,
                          onClick: () => b(je),
                          disabled: Fe >= je,
                          className: `w-7 h-7 flex items-center justify-center rounded border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 hover:text-slate-900 disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer`,
                          title: `末页`,
                          children: (0, $.jsx)(te, {
                            className: `w-3.5 h-3.5`,
                          }),
                        }),
                      ],
                    }),
                    (0, $.jsx)(`button`, {
                      type: `button`,
                      onClick: t,
                      className: `ml-2 px-4 py-1.5 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-100 font-bold text-xs cursor-pointer transition-colors`,
                      children: `关闭重试库`,
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        w &&
          (0, $.jsx)(`div`, {
            className: `fixed inset-0 z-60 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4`,
            children: (0, $.jsxs)(`div`, {
              className: `bg-white rounded-2xl border border-slate-200 shadow-2xl max-w-5xl w-full p-5 space-y-4 animate-in fade-in zoom-in-95 max-h-[85vh] flex flex-col`,
              children: [
                (0, $.jsxs)(`div`, {
                  className: `flex items-center justify-between pb-3 border-b border-slate-100 shrink-0`,
                  children: [
                    (0, $.jsxs)(`div`, {
                      className: `flex items-center gap-2.5`,
                      children: [
                        (0, $.jsx)(`div`, {
                          className: `w-8 h-8 rounded-lg bg-blue-50 text-[#0066FF] flex items-center justify-center`,
                          children: (0, $.jsx)(E, { className: `w-4.5 h-4.5` }),
                        }),
                        (0, $.jsxs)(`div`, {
                          children: [
                            (0, $.jsxs)(`h4`, {
                              className: `font-extrabold text-slate-900 text-sm flex items-center gap-2`,
                              children: [
                                (0, $.jsx)(`span`, {
                                  children: `ID 执行流水日志`,
                                }),
                                (0, $.jsx)(`span`, {
                                  className: `text-xs font-mono font-bold px-2 py-0.2 bg-blue-50 text-[#0066FF] border border-blue-200 rounded`,
                                  children: w.svcId,
                                }),
                              ],
                            }),
                            (0, $.jsxs)(`p`, {
                              className: `text-[11px] text-slate-500`,
                              children: [
                                `【`,
                                w.siteName,
                                `】每个待重试 ID 跑的时间点、耗时、状态码与执行结果明细`,
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, $.jsx)(`button`, {
                      type: `button`,
                      onClick: () => T(null),
                      className: `text-slate-400 hover:text-slate-700 p-1 rounded-md cursor-pointer`,
                      children: (0, $.jsx)(Q, { className: `w-4 h-4` }),
                    }),
                  ],
                }),
                (0, $.jsxs)(`div`, {
                  className: `flex items-center justify-between gap-2.5 bg-slate-50 p-2.5 rounded-lg border border-slate-200 text-xs shrink-0`,
                  children: [
                    (0, $.jsxs)(`div`, {
                      className: `flex items-center gap-2 flex-1`,
                      children: [
                        (0, $.jsxs)(`div`, {
                          className: `relative flex-1 max-w-[220px]`,
                          children: [
                            (0, $.jsx)(Be, {
                              className: `w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2`,
                            }),
                            (0, $.jsx)(`input`, {
                              type: `text`,
                              value: D,
                              onChange: (e) => O(e.target.value),
                              placeholder: `按目标 ID 搜索日志...`,
                              className: `w-full h-7.5 pl-8 pr-3 bg-white border border-slate-200 rounded-md text-xs font-mono outline-none focus:border-[#0066FF]`,
                            }),
                          ],
                        }),
                        (0, $.jsxs)(`div`, {
                          className: `flex items-center gap-1`,
                          children: [
                            (0, $.jsx)(`span`, {
                              className: `text-slate-500 font-bold`,
                              children: `状态筛选:`,
                            }),
                            (0, $.jsxs)(`select`, {
                              value: k,
                              onChange: (e) => A(e.target.value),
                              className: `h-7.5 px-2.5 bg-white border border-slate-200 rounded-md text-xs font-semibold outline-none cursor-pointer text-slate-700`,
                              children: [
                                (0, $.jsx)(`option`, {
                                  value: `all`,
                                  children: `全部状态`,
                                }),
                                (0, $.jsx)(`option`, {
                                  value: `success`,
                                  children: `成功`,
                                }),
                                (0, $.jsx)(`option`, {
                                  value: `failed`,
                                  children: `失败`,
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, $.jsxs)(`span`, {
                      className: `text-[11px] text-slate-500 font-mono font-bold`,
                      children: [`共 `, w.logs.length, ` 条执行流水记录`],
                    }),
                  ],
                }),
                (0, $.jsx)(`div`, {
                  className: `flex-1 overflow-y-auto border border-slate-200 rounded-lg overflow-hidden`,
                  children: (0, $.jsxs)(`table`, {
                    className: `w-full text-left border-collapse text-xs`,
                    children: [
                      (0, $.jsx)(`thead`, {
                        className: `bg-slate-50/95 sticky top-0 border-b border-slate-200 z-10 text-[11px] font-bold text-slate-600`,
                        children: (0, $.jsxs)(`tr`, {
                          children: [
                            (0, $.jsx)(`th`, {
                              className: `py-2.5 px-3.5 w-[110px]`,
                              children: `目标 ID`,
                            }),
                            (0, $.jsx)(`th`, {
                              className: `py-2.5 px-3.5 min-w-[260px]`,
                              children: `拼装目标 URL`,
                            }),
                            (0, $.jsx)(`th`, {
                              className: `py-2.5 px-3.5 w-[150px]`,
                              children: `入库时间`,
                            }),
                            (0, $.jsx)(`th`, {
                              className: `py-2.5 px-3.5 w-[150px]`,
                              children: `执行时间`,
                            }),
                            (0, $.jsx)(`th`, {
                              className: `py-2.5 px-3.5 w-[90px] text-center`,
                              children: `状态`,
                            }),
                          ],
                        }),
                      }),
                      (0, $.jsx)(`tbody`, {
                        className: `divide-y divide-slate-100 font-mono text-[11.5px]`,
                        children: w.logs
                          .filter(
                            (e) =>
                              !(
                                (D.trim() && !e.targetId.includes(D.trim())) ||
                                (k === `success` &&
                                  e.httpStatus !== 200 &&
                                  e.status !== `success`) ||
                                (k === `failed` &&
                                  (e.httpStatus === 200 ||
                                    e.status === `success`))
                              ),
                          )
                          .map((e, t) => {
                            let n =
                              e.httpStatus === 200 || e.status === `success`;
                            return (0, $.jsxs)(
                              `tr`,
                              {
                                className: `hover:bg-slate-50 transition-colors`,
                                children: [
                                  (0, $.jsx)(`td`, {
                                    className: `py-2.5 px-3.5`,
                                    children: (0, $.jsx)(`span`, {
                                      className: `font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded border border-purple-200`,
                                      children: e.targetId,
                                    }),
                                  }),
                                  (0, $.jsx)(`td`, {
                                    className: `py-2.5 px-3.5 max-w-[320px]`,
                                    children: (0, $.jsxs)(`div`, {
                                      className: `flex items-center gap-1.5`,
                                      children: [
                                        (0, $.jsx)(`a`, {
                                          href: e.targetUrl,
                                          target: `_blank`,
                                          rel: `noreferrer`,
                                          onClick: (e) => e.stopPropagation(),
                                          className: `font-mono text-xs text-slate-600 hover:text-[#0066FF] hover:underline truncate transition-colors max-w-[260px] block`,
                                          title: e.targetUrl,
                                          children: e.targetUrl,
                                        }),
                                        (0, $.jsx)(`button`, {
                                          type: `button`,
                                          onClick: () =>
                                            N(
                                              e.targetUrl,
                                              `m-url-${e.targetId}-${t}`,
                                            ),
                                          className: `text-slate-400 hover:text-slate-700 p-0.5 rounded hover:bg-slate-100 transition-colors shrink-0 cursor-pointer`,
                                          title: `复制目标URL`,
                                          children:
                                            ee === `m-url-${e.targetId}-${t}`
                                              ? (0, $.jsx)(P, {
                                                  className: `w-3.5 h-3.5 text-emerald-600`,
                                                })
                                              : (0, $.jsx)(oe, {
                                                  className: `w-3.5 h-3.5`,
                                                }),
                                        }),
                                      ],
                                    }),
                                  }),
                                  (0, $.jsx)(`td`, {
                                    className: `py-2.5 px-3.5 text-slate-500 text-xs font-mono`,
                                    children: e.inboundTime,
                                  }),
                                  (0, $.jsx)(`td`, {
                                    className: `py-2.5 px-3.5 text-slate-700 text-xs font-semibold`,
                                    children: e.runTime,
                                  }),
                                  (0, $.jsx)(`td`, {
                                    className: `py-2.5 px-3.5 text-center`,
                                    children: n
                                      ? (0, $.jsxs)(`span`, {
                                          className: `px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold text-[11px] inline-flex items-center gap-1 font-sans shadow-2xs`,
                                          children: [
                                            (0, $.jsx)(`span`, {
                                              className: `w-1.5 h-1.5 rounded-full bg-emerald-500`,
                                            }),
                                            `成功`,
                                          ],
                                        })
                                      : (0, $.jsxs)(`span`, {
                                          className: `px-2.5 py-0.5 rounded-full bg-rose-50 text-rose-700 border border-rose-200 font-bold text-[11px] inline-flex items-center gap-1 font-sans shadow-2xs`,
                                          children: [
                                            (0, $.jsx)(`span`, {
                                              className: `w-1.5 h-1.5 rounded-full bg-rose-500`,
                                            }),
                                            `失败`,
                                          ],
                                        }),
                                  }),
                                ],
                              },
                              t,
                            );
                          }),
                      }),
                    ],
                  }),
                }),
                (0, $.jsxs)(`div`, {
                  className: `flex items-center justify-between pt-2 border-t border-slate-100 shrink-0 text-xs`,
                  children: [
                    (0, $.jsxs)(`div`, {
                      className: `flex items-center gap-2 text-slate-500`,
                      children: [
                        (0, $.jsx)(Ge, {
                          className: `w-4 h-4 text-emerald-600`,
                        }),
                        (0, $.jsx)(`span`, {
                          children: `精准记录每一次代理调度握手、状态码返回及重试判定日志。`,
                        }),
                      ],
                    }),
                    (0, $.jsx)(`button`, {
                      type: `button`,
                      onClick: () => T(null),
                      className: `h-8 px-4 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs cursor-pointer transition-colors`,
                      children: `关闭日志`,
                    }),
                  ],
                }),
              ],
            }),
          }),
        F &&
          (0, $.jsx)(`div`, {
            className: `fixed inset-0 z-60 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4`,
            children: (0, $.jsxs)(`div`, {
              className: `bg-white rounded-2xl border border-slate-200 shadow-2xl max-w-2xl w-full p-5 space-y-4 animate-in fade-in zoom-in-95 max-h-[80vh] flex flex-col`,
              children: [
                (0, $.jsxs)(`div`, {
                  className: `flex items-center justify-between pb-3 border-b border-slate-100 shrink-0`,
                  children: [
                    (0, $.jsxs)(`div`, {
                      children: [
                        (0, $.jsxs)(`h4`, {
                          className: `font-extrabold text-slate-900 text-sm flex items-center gap-2`,
                          children: [
                            (0, $.jsxs)(`span`, {
                              children: [`【`, F.siteName, `】待重试 ID 列表`],
                            }),
                            (0, $.jsxs)(`span`, {
                              className: `text-xs font-mono font-bold px-2 py-0.2 bg-purple-50 text-purple-800 border border-purple-200 rounded`,
                              children: [`共 `, F.totalIds, ` 个ID`],
                            }),
                          ],
                        }),
                        (0, $.jsxs)(`p`, {
                          className: `text-[11px] text-slate-500 mt-0.5`,
                          children: [
                            `域名: `,
                            F.domain,
                            ` · 最早入库时间: `,
                            F.earliestInboundTime,
                          ],
                        }),
                      ],
                    }),
                    (0, $.jsx)(`button`, {
                      type: `button`,
                      onClick: () => z(null),
                      className: `text-slate-400 hover:text-slate-700 p-1 rounded-md`,
                      children: (0, $.jsx)(Q, { className: `w-4 h-4` }),
                    }),
                  ],
                }),
                (0, $.jsx)(`div`, {
                  className: `flex-1 overflow-y-auto border border-slate-200 rounded-lg p-3 bg-slate-50/50`,
                  children: (0, $.jsx)(`div`, {
                    className: `grid grid-cols-3 sm:grid-cols-4 gap-2`,
                    children:
                      F.items.length > 0
                        ? F.items.map((e) =>
                            (0, $.jsxs)(
                              `div`,
                              {
                                className: `p-2 rounded-lg bg-white border border-slate-200 shadow-2xs flex flex-col gap-0.5 text-xs font-mono`,
                                children: [
                                  (0, $.jsxs)(`div`, {
                                    className: `flex items-center justify-between`,
                                    children: [
                                      (0, $.jsxs)(`span`, {
                                        className: `font-black text-purple-900`,
                                        children: [`ID: `, e.targetId],
                                      }),
                                      (0, $.jsx)(`span`, {
                                        className: `text-[10px] font-sans px-1 rounded bg-amber-50 text-amber-800 font-bold`,
                                        children:
                                          e.auditStatus === `pending`
                                            ? `待审`
                                            : `重试中`,
                                      }),
                                    ],
                                  }),
                                  (0, $.jsx)(`span`, {
                                    className: `text-[10px] text-slate-400 font-sans`,
                                    children: e.inboundTime.slice(5, 16),
                                  }),
                                ],
                              },
                              e.id,
                            ),
                          )
                        : Array.from({ length: F.totalIds }, (e, t) => {
                            let n = 104800 + t * 2;
                            return (0, $.jsxs)(
                              `div`,
                              {
                                className: `p-2 rounded-lg bg-white border border-slate-200 shadow-2xs flex flex-col gap-0.5 text-xs font-mono`,
                                children: [
                                  (0, $.jsxs)(`div`, {
                                    className: `flex items-center justify-between`,
                                    children: [
                                      (0, $.jsxs)(`span`, {
                                        className: `font-black text-purple-900`,
                                        children: [`ID: `, n],
                                      }),
                                      (0, $.jsx)(`span`, {
                                        className: `text-[10px] font-sans px-1 rounded bg-amber-50 text-amber-800 font-bold`,
                                        children: `待审`,
                                      }),
                                    ],
                                  }),
                                  (0, $.jsx)(`span`, {
                                    className: `text-[10px] text-slate-400 font-sans`,
                                    children: `09-27 08:30`,
                                  }),
                                ],
                              },
                              t,
                            );
                          }),
                  }),
                }),
                (0, $.jsx)(`div`, {
                  className: `flex items-center justify-end pt-2 border-t border-slate-100 shrink-0`,
                  children: (0, $.jsx)(`button`, {
                    type: `button`,
                    onClick: () => z(null),
                    className: `h-8 px-4 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs cursor-pointer`,
                    children: `关闭`,
                  }),
                }),
              ],
            }),
          }),
        ne &&
          (0, $.jsx)(`div`, {
            className: `fixed inset-0 z-60 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4`,
            children: (0, $.jsxs)(`div`, {
              className: `bg-white rounded-2xl border border-slate-200 shadow-2xl max-w-5xl w-full p-5 space-y-4 max-h-[90vh] flex flex-col animate-in fade-in zoom-in-95`,
              children: [
                (0, $.jsxs)(`div`, {
                  className: `flex items-center justify-between pb-3 border-b border-slate-100 shrink-0`,
                  children: [
                    (0, $.jsxs)(`div`, {
                      className: `flex items-center gap-2.5`,
                      children: [
                        (0, $.jsx)(`div`, {
                          className: `w-9 h-9 rounded-xl bg-blue-50 text-[#0066FF] flex items-center justify-center`,
                          children: (0, $.jsx)(ge, { className: `w-5 h-5` }),
                        }),
                        (0, $.jsxs)(`div`, {
                          children: [
                            (0, $.jsxs)(`h4`, {
                              className: `font-extrabold text-slate-900 text-sm flex items-center gap-2`,
                              children: [
                                (0, $.jsxs)(`span`, {
                                  children: [`【`, ne.svcId, `】`, ne.siteName],
                                }),
                                (0, $.jsx)(`span`, {
                                  className: `text-xs px-2 py-0.5 rounded font-bold bg-blue-50 text-[#0066FF] border border-blue-200`,
                                  children: `最早入库前 10 条 ID`,
                                }),
                              ],
                            }),
                            (0, $.jsxs)(`p`, {
                              className: `text-[11px] text-slate-500 font-mono mt-0.5`,
                              children: [
                                `域名: `,
                                ne.domain,
                                ` · 最早入库基准时间: `,
                                ne.earliestInboundTime,
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, $.jsx)(`button`, {
                      type: `button`,
                      onClick: () => V(null),
                      className: `p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 cursor-pointer transition-colors`,
                      children: (0, $.jsx)(Q, { className: `w-4.5 h-4.5` }),
                    }),
                  ],
                }),
                (0, $.jsx)(`div`, {
                  className: `bg-blue-50/70 border border-blue-200/80 rounded-xl p-3 flex items-start justify-between gap-3 text-xs text-blue-950 shrink-0`,
                  children: (0, $.jsxs)(`div`, {
                    className: `flex items-start gap-2`,
                    children: [
                      (0, $.jsx)(Ge, {
                        className: `w-4 h-4 text-[#0066FF] shrink-0 mt-0.5`,
                      }),
                      (0, $.jsxs)(`div`, {
                        className: `space-y-0.5`,
                        children: [
                          (0, $.jsx)(`div`, {
                            className: `font-bold text-blue-900`,
                            children: `真实情况核实说明：`,
                          }),
                          (0, $.jsxs)(`div`, {
                            className: `text-slate-600 text-[11.5px]`,
                            children: [
                              `以下展示该网站重试队列中`,
                              (0, $.jsx)(`strong`, {
                                children: `最早入库的前 10 个异常 ID`,
                              }),
                              `。点击每条对应的 `,
                              (0, $.jsx)(`strong`, {
                                children: `拼装目标 URL`,
                              }),
                              ` 或右侧「打开真机页面」，可直接调出真实浏览器访问目标站点，核查源端当前是已发布更新、仍返回 404 页面，抑或是存在反爬验证拦截。`,
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                (0, $.jsx)(`div`, {
                  className: `flex-1 overflow-y-auto border border-slate-200 rounded-xl overflow-hidden`,
                  children: (0, $.jsxs)(`table`, {
                    className: `w-full text-left border-collapse text-xs`,
                    children: [
                      (0, $.jsx)(`thead`, {
                        children: (0, $.jsxs)(`tr`, {
                          className: `bg-slate-50 border-b border-slate-200 text-slate-600 font-bold sticky top-0 z-10`,
                          children: [
                            (0, $.jsx)(`th`, {
                              className: `py-2.5 px-3 w-[60px] text-center`,
                              children: `序号`,
                            }),
                            (0, $.jsx)(`th`, {
                              className: `py-2.5 px-3.5 w-[120px]`,
                              children: `待重试 ID`,
                            }),
                            (0, $.jsx)(`th`, {
                              className: `py-2.5 px-3.5 min-w-[320px]`,
                              children: `拼装目标 URL (点击跳转查看)`,
                            }),
                            (0, $.jsx)(`th`, {
                              className: `py-2.5 px-3.5 w-[160px]`,
                              children: `最早入库时间`,
                            }),
                            (0, $.jsx)(`th`, {
                              className: `py-2.5 px-3.5 w-[160px]`,
                              children: `上一次执行时间`,
                            }),
                          ],
                        }),
                      }),
                      (0, $.jsx)(`tbody`, {
                        className: `divide-y divide-slate-100 font-mono text-xs`,
                        children: ie(ne).map((e, t) => {
                          let n =
                            e.targetUrl ||
                            `https://${ne.domain}/detail/${e.targetId}.html`;
                          return (0, $.jsxs)(
                            `tr`,
                            {
                              className: `hover:bg-blue-50/30 transition-colors`,
                              children: [
                                (0, $.jsxs)(`td`, {
                                  className: `py-2.5 px-3 text-center text-slate-400 font-bold`,
                                  children: [`#`, t + 1],
                                }),
                                (0, $.jsx)(`td`, {
                                  className: `py-2.5 px-3.5`,
                                  children: (0, $.jsx)(`span`, {
                                    className: `font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded border border-purple-200 font-mono`,
                                    children: e.targetId,
                                  }),
                                }),
                                (0, $.jsx)(`td`, {
                                  className: `py-2.5 px-3.5 max-w-[360px]`,
                                  children: (0, $.jsxs)(`div`, {
                                    className: `flex items-center gap-1.5 group/url`,
                                    children: [
                                      (0, $.jsx)(`a`, {
                                        href: n,
                                        target: `_blank`,
                                        rel: `noreferrer`,
                                        onClick: (e) => e.stopPropagation(),
                                        className: `font-mono text-xs text-[#0066FF] hover:text-blue-800 hover:underline truncate transition-colors max-w-[300px] block font-semibold`,
                                        title: `新窗口直接打开核实真实情况: ${n}`,
                                        children: n,
                                      }),
                                      (0, $.jsx)(`button`, {
                                        type: `button`,
                                        onClick: () =>
                                          N(
                                            n,
                                            `m-earliest-url-${e.targetId}-${t}`,
                                          ),
                                        className: `text-slate-400 hover:text-slate-700 p-0.5 rounded hover:bg-slate-100 transition-colors shrink-0 cursor-pointer`,
                                        title: `复制目标URL`,
                                        children:
                                          ee ===
                                          `m-earliest-url-${e.targetId}-${t}`
                                            ? (0, $.jsx)(P, {
                                                className: `w-3.5 h-3.5 text-emerald-600`,
                                              })
                                            : (0, $.jsx)(oe, {
                                                className: `w-3.5 h-3.5`,
                                              }),
                                      }),
                                    ],
                                  }),
                                }),
                                (0, $.jsx)(`td`, {
                                  className: `py-2.5 px-3.5 text-slate-500 font-mono text-[11.5px]`,
                                  children: e.inboundTime,
                                }),
                                (0, $.jsx)(`td`, {
                                  className: `py-2.5 px-3.5 text-slate-700 font-mono text-[11.5px] font-semibold`,
                                  children:
                                    e.lastRetryTime || `2026-09-28 09:18:24`,
                                }),
                              ],
                            },
                            e.id || t,
                          );
                        }),
                      }),
                    ],
                  }),
                }),
                (0, $.jsxs)(`div`, {
                  className: `flex items-center justify-between pt-3 border-t border-slate-100 shrink-0`,
                  children: [
                    (0, $.jsxs)(`button`, {
                      type: `button`,
                      onClick: () => {
                        (c && c(ie(ne).map((e) => e.id)),
                          De(
                            `已成功为【${ne.siteName}】前 10 条 ID 下发即刻探测调度指令！`,
                          ));
                      },
                      className: `px-4 py-2 bg-[#0066FF] hover:bg-blue-700 text-white rounded-lg text-xs font-bold flex items-center gap-1.5 cursor-pointer shadow-2xs transition-colors`,
                      children: [
                        (0, $.jsx)(Ne, {
                          className: `w-3.5 h-3.5 fill-current`,
                        }),
                        (0, $.jsx)(`span`, {
                          children: `立即下发这 10 条 ID 重试探测`,
                        }),
                      ],
                    }),
                    (0, $.jsx)(`button`, {
                      type: `button`,
                      onClick: () => V(null),
                      className: `px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg text-xs font-bold text-slate-700 cursor-pointer`,
                      children: `关闭核实`,
                    }),
                  ],
                }),
              ],
            }),
          }),
        se &&
          (0, $.jsx)(`div`, {
            className: `fixed inset-0 z-60 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4`,
            children: (0, $.jsxs)(`div`, {
              className: `bg-white rounded-2xl border border-slate-200 shadow-2xl max-w-lg w-full p-5 space-y-4 animate-in fade-in`,
              children: [
                (0, $.jsxs)(`div`, {
                  className: `flex items-center justify-between pb-2 border-b border-slate-100`,
                  children: [
                    (0, $.jsxs)(`h4`, {
                      className: `font-extrabold text-slate-900 text-sm flex items-center gap-1.5`,
                      children: [
                        (0, $.jsx)(Pe, { className: `w-4 h-4 text-amber-600` }),
                        (0, $.jsx)(`span`, { children: `手动录入重试 ID` }),
                      ],
                    }),
                    (0, $.jsx)(`button`, {
                      type: `button`,
                      onClick: () => U(!1),
                      className: `text-slate-400 hover:text-slate-700`,
                      children: (0, $.jsx)(Q, { className: `w-4 h-4` }),
                    }),
                  ],
                }),
                (0, $.jsxs)(`div`, {
                  className: `space-y-3 text-xs`,
                  children: [
                    (0, $.jsxs)(`div`, {
                      className: `space-y-1`,
                      children: [
                        (0, $.jsx)(`label`, {
                          className: `text-slate-700 font-bold block`,
                          children: `归属采集网站 (区分网站)`,
                        }),
                        (0, $.jsx)(`select`, {
                          value: ce || X[0]?.id,
                          onChange: (e) => q(e.target.value),
                          className: `w-full h-8.5 px-3 bg-white border border-slate-300 rounded-lg text-xs font-semibold text-slate-800 outline-none focus:border-[#0066FF]`,
                          children: X.map((e) =>
                            (0, $.jsxs)(
                              `option`,
                              {
                                value: e.id,
                                children: [e.name, ` (`, e.id, `)`],
                              },
                              e.id,
                            ),
                          ),
                        }),
                      ],
                    }),
                    (0, $.jsxs)(`div`, {
                      className: `space-y-1`,
                      children: [
                        (0, $.jsx)(`label`, {
                          className: `text-slate-700 font-bold block`,
                          children: `目标需要重试的 ID (支持输入多个，以逗号、换行或空格分隔)`,
                        }),
                        (0, $.jsx)(`textarea`, {
                          rows: 3,
                          value: G,
                          onChange: (e) => K(e.target.value),
                          placeholder: `例如: 891244, 891245, 891266`,
                          className: `w-full p-2.5 bg-white border border-slate-300 rounded-lg font-mono text-xs text-slate-800 outline-none focus:border-[#0066FF]`,
                        }),
                      ],
                    }),
                    (0, $.jsxs)(`div`, {
                      className: `space-y-1`,
                      children: [
                        (0, $.jsx)(`label`, {
                          className: `text-slate-700 font-bold block`,
                          children: `入库溯源原因`,
                        }),
                        (0, $.jsx)(`input`, {
                          type: `text`,
                          value: le,
                          onChange: (e) => J(e.target.value),
                          placeholder: `如: 人工排查漏采录入 / HTTP 504超时`,
                          className: `w-full h-8.5 px-3 bg-white border border-slate-300 rounded-lg text-xs text-slate-800 outline-none focus:border-[#0066FF]`,
                        }),
                      ],
                    }),
                    (0, $.jsxs)(`div`, {
                      className: `space-y-1`,
                      children: [
                        (0, $.jsx)(`label`, {
                          className: `text-slate-700 font-bold block`,
                          children: `重试优先级`,
                        }),
                        (0, $.jsx)(`div`, {
                          className: `flex items-center gap-3`,
                          children: [`high`, `normal`, `low`].map((e) =>
                            (0, $.jsxs)(
                              `label`,
                              {
                                className: `flex items-center gap-1.5 cursor-pointer`,
                                children: [
                                  (0, $.jsx)(`input`, {
                                    type: `radio`,
                                    name: `retryPriority`,
                                    checked: ue === e,
                                    onChange: () => de(e),
                                  }),
                                  (0, $.jsx)(`span`, {
                                    className: `font-medium text-slate-700`,
                                    children:
                                      e === `high`
                                        ? `高优先级`
                                        : e === `normal`
                                          ? `常规`
                                          : `低优先级`,
                                  }),
                                ],
                              },
                              e,
                            ),
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, $.jsxs)(`div`, {
                  className: `flex items-center justify-end gap-2 pt-2 border-t border-slate-100`,
                  children: [
                    (0, $.jsx)(`button`, {
                      type: `button`,
                      onClick: () => U(!1),
                      className: `h-8 px-3.5 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-50 font-bold text-xs cursor-pointer`,
                      children: `取消`,
                    }),
                    (0, $.jsx)(`button`, {
                      type: `button`,
                      onClick: We,
                      className: `h-8 px-4 rounded-lg bg-[#0066FF] text-white hover:bg-[#0052cc] font-bold text-xs shadow-xs cursor-pointer`,
                      children: `确认录入重试库`,
                    }),
                  ],
                }),
              ],
            }),
          }),
        fe &&
          (0, $.jsx)(`div`, {
            className: `fixed inset-0 z-60 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4`,
            children: (0, $.jsxs)(`div`, {
              className: `bg-white rounded-2xl border border-slate-200 shadow-2xl max-w-lg w-full p-5 space-y-4 animate-in fade-in`,
              children: [
                (0, $.jsxs)(`div`, {
                  className: `flex items-center justify-between pb-2 border-b border-slate-100`,
                  children: [
                    (0, $.jsxs)(`div`, {
                      className: `flex items-center gap-2`,
                      children: [
                        (0, $.jsx)(`div`, {
                          className: `w-8 h-8 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700`,
                          children: (0, $.jsx)(re, { className: `w-4 h-4` }),
                        }),
                        (0, $.jsxs)(`div`, {
                          children: [
                            (0, $.jsx)(`h4`, {
                              className: `font-extrabold text-slate-900 text-sm`,
                              children: `设定网站重试时间参数与审核策略`,
                            }),
                            (0, $.jsx)(`p`, {
                              className: `text-[11px] text-slate-500`,
                              children: `每个网站独立设置重试时间间隔 (如 3小时、24小时) 及统一审核周期`,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, $.jsx)(`button`, {
                      type: `button`,
                      onClick: () => pe(!1),
                      className: `text-slate-400 hover:text-slate-700 p-1 rounded-md cursor-pointer`,
                      children: (0, $.jsx)(Q, { className: `w-4 h-4` }),
                    }),
                  ],
                }),
                (0, $.jsxs)(`div`, {
                  className: `space-y-4 text-xs`,
                  children: [
                    (0, $.jsxs)(`div`, {
                      className: `space-y-1`,
                      children: [
                        (0, $.jsx)(`label`, {
                          className: `text-slate-700 font-bold block`,
                          children: `目标采集网站 (区分网站独立配置)`,
                        }),
                        (0, $.jsx)(`select`, {
                          value: me,
                          onChange: (e) => {
                            let t = e.target.value;
                            he(t);
                            let n = a[t];
                            n &&
                              (ve(n.auditTime),
                              be(n.auditCycleMinutes),
                              Se(n.autoAudit),
                              we(n.retryIntervalHours || 3),
                              Ee(
                                n.retryIntervalText ||
                                  `${n.retryIntervalHours || 3}小时`,
                              ));
                          },
                          className: `w-full h-8.5 px-3 bg-white border border-slate-300 rounded-lg text-xs font-semibold text-slate-800 outline-none focus:border-[#0066FF]`,
                          children: X.map((e) =>
                            (0, $.jsxs)(
                              `option`,
                              {
                                value: e.id,
                                children: [e.name, ` (`, e.id, `)`],
                              },
                              e.id,
                            ),
                          ),
                        }),
                      ],
                    }),
                    (0, $.jsxs)(`div`, {
                      className: `p-3.5 rounded-xl bg-amber-50/70 border border-amber-200/90 space-y-3`,
                      children: [
                        (0, $.jsxs)(`div`, {
                          className: `flex items-center justify-between`,
                          children: [
                            (0, $.jsxs)(`label`, {
                              className: `text-amber-950 font-bold flex items-center gap-1.5 text-xs`,
                              children: [
                                (0, $.jsx)(Le, {
                                  className: `w-3.5 h-3.5 text-amber-700`,
                                }),
                                (0, $.jsx)(`span`, {
                                  children: `网站专属重试时间参数`,
                                }),
                              ],
                            }),
                            (0, $.jsxs)(`span`, {
                              className: `text-[11.5px] font-mono font-bold text-amber-900 bg-amber-100/90 px-2.5 py-0.5 rounded border border-amber-300`,
                              children: [`当前参数: `, Te],
                            }),
                          ],
                        }),
                        (0, $.jsx)(`div`, {
                          className: `grid grid-cols-4 gap-2`,
                          children: [
                            { hours: 1, text: `1小时` },
                            { hours: 3, text: `3小时` },
                            { hours: 6, text: `6小时` },
                            { hours: 12, text: `12小时` },
                            { hours: 24, text: `24小时` },
                            { hours: 48, text: `48小时` },
                            { hours: 72, text: `72小时` },
                            { hours: 168, text: `7天` },
                          ].map((e) => {
                            let t = Ce === e.hours;
                            return (0, $.jsx)(
                              `button`,
                              {
                                type: `button`,
                                onClick: () => {
                                  (we(e.hours), Ee(e.text));
                                },
                                className: `py-1.5 px-2 rounded-lg border text-xs font-mono font-bold transition-all cursor-pointer ${t ? `bg-amber-600 text-white border-amber-600 shadow-2xs` : `bg-white text-slate-700 border-slate-200 hover:border-amber-400 hover:bg-amber-50/50`}`,
                                children: e.text,
                              },
                              e.hours,
                            );
                          }),
                        }),
                      ],
                    }),
                    (0, $.jsxs)(`div`, {
                      className: `space-y-1`,
                      children: [
                        (0, $.jsx)(`label`, {
                          className: `text-slate-700 font-bold block`,
                          children: `网站每日统一审核时间点 (精确时间)`,
                        }),
                        (0, $.jsx)(`input`, {
                          type: `text`,
                          value: _e,
                          onChange: (e) => ve(e.target.value),
                          placeholder: `例如: 2026-09-27 18:30:00 或 18:30:00`,
                          className: `w-full h-8.5 px-3 bg-white border border-slate-300 rounded-lg text-xs font-mono font-semibold text-slate-800 outline-none focus:border-[#0066FF]`,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, $.jsxs)(`div`, {
                  className: `flex items-center justify-end gap-2 pt-2 border-t border-slate-100`,
                  children: [
                    (0, $.jsx)(`button`, {
                      type: `button`,
                      onClick: () => pe(!1),
                      className: `h-8 px-3.5 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-50 font-bold text-xs cursor-pointer`,
                      children: `取消`,
                    }),
                    (0, $.jsx)(`button`, {
                      type: `button`,
                      onClick: Ue,
                      className: `h-8 px-4 rounded-lg bg-[#0066FF] text-white hover:bg-[#0052cc] font-bold text-xs shadow-xs cursor-pointer`,
                      children: `保存重试配置`,
                    }),
                  ],
                }),
              ],
            }),
          }),
      ],
    });
  },
  Bn = ({
    services: e,
    retryItems: t,
    websiteAuditConfigs: n,
    onUpdateRetryItems: r,
    onUpdateWebsiteAuditConfig: i,
    onTriggerInstantRetry: a,
    onBackToServiceList: o,
  }) => {
    let [s, c] = (0, C.useState)(`all`),
      [l, u] = (0, C.useState)(``),
      [d, f] = (0, C.useState)(``),
      [p, m] = (0, C.useState)([]),
      [h, g] = (0, C.useState)(null),
      [_, v] = (0, C.useState)(1),
      [y, b] = (0, C.useState)(10),
      [x, S] = (0, C.useState)(null),
      [w, T] = (0, C.useState)(``),
      [E, D] = (0, C.useState)(`all`),
      [O, k] = (0, C.useState)(null),
      A = (e, t) => {
        e &&
          (navigator.clipboard.writeText(e),
          k(t),
          setTimeout(() => k(null), 1800));
      },
      [j, ee] = (0, C.useState)(null),
      [M, N] = (0, C.useState)(null),
      F = (e) => {
        let t = Ee.find((t) => t.id === e.svcId),
          n = (n) =>
            t?.url && t.url.includes(`{id}`)
              ? t.url.replace(`{id}`, n)
              : t?.url && t.url.startsWith(`http`)
                ? `${t.url.replace(/\/+$/, ``)}/${n}.html`
                : `https://${e.domain || `www.cn-stock.com.cn`}/detail/${n}.html`,
          r = [...e.items].sort((e, t) =>
            e.inboundTime > t.inboundTime ? 1 : -1,
          );
        if (r.length >= 10)
          return r
            .slice(0, 10)
            .map((e, t) => ({
              ...e,
              targetUrl: e.targetUrl || n(String(e.targetId)),
              lastRetryTime:
                e.lastRetryTime ||
                `2026-09-28 09:${String(Math.max(10, 48 - t * 3)).padStart(2, `0`)}:${String((t * 17) % 60).padStart(2, `0`)}`,
            }));
        let i = parseInt(e.svcId.replace(/\D/g, ``) || `10`, 10) * 1e4 + 4800,
          a = r.map((e, t) => ({
            ...e,
            targetUrl: e.targetUrl || n(String(e.targetId)),
            lastRetryTime:
              e.lastRetryTime ||
              `2026-09-28 09:${String(Math.max(10, 48 - t * 3)).padStart(2, `0`)}:${String((t * 17) % 60).padStart(2, `0`)}`,
          }));
        for (let t = r.length; t < 10; t++) {
          let r = String(i + t * 2 + 1),
            o = Math.max(0, 30 + t * 4),
            s = (t * 13) % 60,
            c = (e) => String(e).padStart(2, `0`),
            l = `2026-09-28 08:${c(o)}:${c(s)}`,
            u = Math.max(10, 52 - t * 3),
            d = (t * 19) % 60,
            f = `2026-09-28 09:${c(u)}:${c(d)}`;
          a.push({
            id: `RETRY-AUTO-${e.svcId}-${r}`,
            svcId: e.svcId,
            siteName: e.siteName,
            domain: e.domain,
            targetId: r,
            targetUrl: n(r),
            errorReason:
              t % 2 == 0
                ? `404 Not Found (源端空洞或未发布)`
                : `504 Gateway Timeout (源端响应超时)`,
            inboundTime: l,
            auditTime: `2026-09-28 18:00:00`,
            lastRetryTime: f,
            retryCount: (t % 3) + 1,
            maxRetries: 10,
            auditStatus: t === 0 ? `retrying` : `pending`,
            priority: `high`,
          });
        }
        return a
          .sort((e, t) => (e.inboundTime > t.inboundTime ? 1 : -1))
          .slice(0, 10);
      };
    (0, C.useEffect)(() => {
      v(1);
    }, [s, l, d]);
    let z = () => {
        (c(`all`), u(``), f(``), v(1));
      },
      ne = s !== `all` || l.trim() !== `` || d.trim() !== ``,
      [V, ie] = (0, C.useState)(!1),
      [H, ae] = (0, C.useState)(``),
      [se, U] = (0, C.useState)(``),
      [W, G] = (0, C.useState)(`人工排查发现空洞或漏采，手动录入重试库`),
      [K, ce] = (0, C.useState)(`normal`),
      [q, J] = (0, C.useState)(!1),
      [ue, de] = (0, C.useState)(``),
      [fe, pe] = (0, C.useState)(``),
      [he, _e] = (0, C.useState)(30),
      [ve, ye] = (0, C.useState)(!0),
      [be, xe] = (0, C.useState)(3),
      [Se, Ce] = (0, C.useState)(180),
      [we, Te] = (0, C.useState)(`180分钟`),
      Ee = (0, C.useMemo)(() => e.filter((e) => e.method === `auto`), [e]),
      X = (e) => {
        (g(e), setTimeout(() => g(null), 2500));
      },
      De = (e, t) => {
        let n = (e) =>
          t.url && t.url.includes(`{id}`)
            ? t.url.replace(`{id}`, e)
            : t.url && t.url.startsWith(`http`)
              ? `${t.url.replace(/\/+$/, ``)}/${e}.html`
              : `https://${t.domain || (t.url ? new URL(t.url).hostname : `www.cn-stock.com.cn`)}/detail/${e}.html`;
        if (!e || e.length === 0) {
          let e = parseInt(t.id.replace(/\D/g, ``) || `10`, 10) * 1e4 + 4800;
          return [
            {
              targetId: String(e + 18),
              targetUrl: n(String(e + 18)),
              inboundTime: `2026-09-28 14:15:20`,
              runTime: `2026-09-28 15:42:10`,
              duration: `185ms`,
              round: 2,
              httpStatus: 200,
              status: `success`,
              resultMessage: `200 OK (抓取成功，提取正文3,240字并已入库)`,
              proxyIp: `117.143.88.204:9020 (上海BGP高速专线)`,
            },
            {
              targetId: String(e + 15),
              targetUrl: n(String(e + 15)),
              inboundTime: `2026-09-28 14:10:05`,
              runTime: `2026-09-28 15:40:05`,
              duration: `210ms`,
              round: 1,
              httpStatus: 404,
              status: `404_empty`,
              resultMessage: `404 Not Found (目标页面未发布或空洞，进入重试队列)`,
              proxyIp: `121.232.89.14:9999 (江苏南京动态出口)`,
            },
            {
              targetId: String(e + 12),
              targetUrl: n(String(e + 12)),
              inboundTime: `2026-09-28 13:55:18`,
              runTime: `2026-09-28 15:35:40`,
              duration: `340ms`,
              round: 1,
              httpStatus: 504,
              status: `timeout`,
              resultMessage: `504 Gateway Timeout (目标源端连接超时，进入下轮重试)`,
              proxyIp: `gateway-bj.qingguo.com:18888`,
            },
          ];
        }
        return e.map((e, t) => {
          let r = t === 0 && e.retryCount > 1,
            i = t % 3 == 2,
            a = 404,
            o = `404_empty`,
            s = `404 Not Found (空洞待重试)`;
          r
            ? ((a = 200), (o = `success`), (s = `200 OK (重试抓取成功并入库)`))
            : i
              ? ((a = 504),
                (o = `timeout`),
                (s = `504 Gateway Timeout (请求超时，等待下一轮重试)`))
              : e.auditStatus === `retrying` &&
                ((a = 0),
                (o = `retrying`),
                (s = `执行中 (正在通过代理网关发起实时探测)`));
          let c = Math.max(0, 45 - t * 4),
            l = (t * 17) % 60,
            u = `2026-09-28 ${`15`.padStart(2, `0`)}:${String(c).padStart(2, `0`)}:${String(l).padStart(2, `0`)}`;
          return {
            targetId: String(e.targetId),
            targetUrl: e.targetUrl || n(String(e.targetId)),
            inboundTime:
              e.inboundTime ||
              `2026-09-28 14:${String(Math.max(10, 40 - t * 3)).padStart(2, `0`)}:12`,
            runTime: e.lastRetryTime || u,
            duration: `${140 + ((t * 37) % 180)}ms`,
            round: e.retryCount || 1,
            httpStatus: a,
            status: o,
            resultMessage: s,
            proxyIp: `自动轮换隧道出口 (平均延迟 22ms)`,
          };
        });
      },
      [Oe, ke] = (0, C.useState)(null),
      [Ae, je] = (0, C.useState)(180),
      Fe = (0, C.useMemo)(
        () =>
          Ee.map((e) => {
            let r = t.filter((t) => t.svcId === e.id),
              i = n[e.id],
              a =
                i?.retryIntervalMinutes ||
                (i?.retryIntervalHours ? i.retryIntervalHours * 60 : 180),
              o = i?.retryIntervalText || `${a}分钟`,
              s = `2026-09-28 08:30:15`,
              c = `2026-09-28 15:40:00`;
            if (r.length > 0) {
              let e = [...r].sort((e, t) =>
                e.inboundTime > t.inboundTime ? 1 : -1,
              );
              ((s = e[0].inboundTime), (c = e[e.length - 1].inboundTime));
            }
            let l = {
                "SVC-P002": 1420,
                "SVC-P006": 860,
                "SVC-P010": 2860,
                "SVC-P023": 2180,
                "SVC-P029": 980,
                "SVC-P036": 3650,
                "SVC-P037": 1890,
              },
              u = parseInt(e.id.replace(/\D/g, ``) || `10`, 10),
              d = l[e.id] || u * 450 + 820,
              f = r.length > 0 ? d + r.length : d,
              p = r.filter((e) => e.auditStatus === `retrying`).length,
              m = De(r, e),
              h =
                e.id === `SVC-P002`
                  ? 95345
                  : r.length > 0
                    ? r.length * 3200 + 45e3 + u * 1250
                    : u * 4120 + 24800;
            return {
              svcId: e.id,
              siteName: e.name,
              domain:
                e.domain || (e.url ? new URL(e.url).hostname : `domain.com`),
              totalIds: h,
              pendingCount: f,
              retryingCount: p > 0 ? p : 68,
              earliestInboundTime: s,
              latestInboundTime: c,
              retryIntervalText: o,
              lastRoundDuration: r[0]?.lastRoundDuration || `4分32秒`,
              items: r,
              logs: m,
            };
          }),
        [Ee, t, n],
      ),
      Ie = (0, C.useMemo)(
        () =>
          Fe.filter((e) => {
            if (s !== `all` && e.svcId !== s) return !1;
            if (l.trim()) {
              let t = l.trim().toLowerCase();
              if (!(
                e.items.some((e) =>
                  String(e.targetId).toLowerCase().includes(t),
                ) || e.logs.some((e) => e.targetId.toLowerCase().includes(t))
              ))
                return !1;
            }
            if (d.trim()) {
              let t = d.trim().toLowerCase();
              if (!(
                e.siteName.toLowerCase().includes(t) ||
                e.svcId.toLowerCase().includes(t) ||
                e.domain.toLowerCase().includes(t) ||
                e.items.some((e) => String(e.targetId).includes(t))
              ))
                return !1;
            }
            return !0;
          }),
        [Fe, s, l, d],
      ),
      Re = Math.max(1, Math.ceil(Ie.length / y)),
      ze = Math.min(_, Re),
      Z = (ze - 1) * y,
      Ve = (0, C.useMemo)(() => Ie.slice(Z, Z + y), [Ie, Z, y]),
      He = () => {
        p.length === Ve.length && Ve.length > 0
          ? m([])
          : m(Ve.map((e) => e.svcId));
      },
      Ue = (e) => {
        p.includes(e) ? m(p.filter((t) => t !== e)) : m([...p, e]);
      },
      We = () => {
        let e = n[ue],
          t = Ee.find((e) => e.id === ue),
          r = {
            svcId: ue,
            siteName: t?.name || e?.siteName || `目标网站`,
            domain: t?.domain || e?.domain || `domain.com`,
            auditTime: fe,
            auditCycleMinutes: he,
            autoAudit: ve,
            emptyHoleTolerance: e?.emptyHoleTolerance || 20,
            retryIntervalHours: Math.round(Se / 60) || 1,
            retryIntervalMinutes: Se,
            retryIntervalText: `${Se}分钟`,
          };
        (i(ue, r),
          X(`已成功将【${r.siteName}】重试时间参数更新为 ${Se} 分钟！`),
          J(!1));
      },
      Ke = (e, t) => {
        let r = n[e],
          i =
            r?.retryIntervalMinutes ||
            (r?.retryIntervalHours
              ? r.retryIntervalHours * 60
              : parseInt(t, 10) || 180);
        (ke(e), je(i));
      },
      Je = (e) => {
        if (!Ae || Ae <= 0) {
          X(`请输入大于0的有效分钟数！`);
          return;
        }
        let t = n[e],
          r = Ee.find((t) => t.id === e),
          a = {
            svcId: e,
            siteName: r?.name || t?.siteName || `目标网站`,
            domain: r?.domain || t?.domain || `domain.com`,
            auditTime: t?.auditTime || `2026-09-28 18:30:00`,
            auditCycleMinutes: t?.auditCycleMinutes || 30,
            autoAudit: t?.autoAudit !== !1,
            emptyHoleTolerance: t?.emptyHoleTolerance || 20,
            retryIntervalHours: Math.round(Ae / 60) || 1,
            retryIntervalMinutes: Ae,
            retryIntervalText: `${Ae}分钟`,
          };
        (i(e, a),
          X(`已成功将【${a.siteName}】重试时间参数更新为 ${Ae} 分钟！`),
          ke(null));
      },
      Ye = (e) => {
        (r(
          t.map((t) =>
            t.svcId === e.svcId && t.auditStatus !== `approved`
              ? {
                  ...t,
                  auditStatus: `retrying`,
                  retryCount: (t.retryCount || 0) + 1,
                  lastRetryTime: `刚刚 (2026-09-28 16:05:00)`,
                }
              : t,
          ),
        ),
          a && a(e.items.map((e) => e.id)),
          X(`已成功为【${e.siteName}】下发全量待重试 ID 探测调度指令！`));
      },
      Xe = () => {
        if (!H.trim()) {
          X(`请输入有效的目标 ID！`);
          return;
        }
        let e = Ee.find((e) => e.id === se) || Ee[0];
        if (!e) {
          X(`未找到归属的 ID自增长 服务！`);
          return;
        }
        let n = e.url
          ? e.url.replace(`{id}`, H.trim())
          : `https://${e.domain || `domain.com`}/detail/${H.trim()}.html`;
        (r([
          {
            id: `RETRY-${Date.now().toString().slice(-6)}`,
            svcId: e.id,
            siteName: e.name,
            domain: e.domain || `domain.com`,
            targetId: H.trim(),
            targetUrl: n,
            errorReason: W.trim() || `人工录入异常ID`,
            inboundTime: `2026-09-28 16:10:00`,
            auditTime: `2026-09-28 18:30:00`,
            retryCount: 0,
            maxRetries: 10,
            auditStatus: `pending`,
            priority: K,
          },
          ...t,
        ]),
          X(`已成功将 ID【${H.trim()}】录入【${e.name}】的待重试库！`),
          ie(!1),
          ae(``));
      },
      $e = (0, C.useMemo)(
        () => Fe.reduce((e, t) => e + t.pendingCount, 0),
        [Fe],
      );
    return (0, $.jsxs)(`div`, {
      className: `flex flex-col gap-5 max-w-[1600px] mx-auto animate-in fade-in duration-200`,
      children: [
        h &&
          (0, $.jsxs)(`div`, {
            className: `fixed top-18 right-6 z-50 bg-[#1e376b] text-white px-4 py-2.5 rounded-xl shadow-xl flex items-center gap-2 text-xs font-bold border border-blue-400 animate-in slide-in-from-top-2`,
            children: [
              (0, $.jsx)(B, { className: `w-4 h-4 text-emerald-400 shrink-0` }),
              (0, $.jsx)(`span`, { children: h }),
            ],
          }),
        (0, $.jsx)(`div`, {
          className: `bg-white border border-slate-200/80 rounded-xl p-4.5 sm:px-6 sm:py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs`,
          children: (0, $.jsxs)(`div`, {
            className: `flex items-center gap-4`,
            children: [
              (0, $.jsx)(`div`, {
                className: `w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border bg-amber-50 border-amber-200 text-amber-700`,
                children: (0, $.jsx)(Le, { className: `w-6 h-6` }),
              }),
              (0, $.jsxs)(`div`, {
                className: `flex flex-col`,
                children: [
                  (0, $.jsxs)(`div`, {
                    className: `flex items-center gap-2.5 flex-wrap`,
                    children: [
                      (0, $.jsx)(`h1`, {
                        className: `text-[18px] font-black text-slate-900 tracking-tight`,
                        children: `ID自增长 · ID重试库`,
                      }),
                      (0, $.jsx)(`span`, {
                        className: `px-2 py-0.5 text-[11px] font-bold rounded-md bg-amber-50 text-amber-800 border border-amber-200`,
                        children: `异常ID自动纠偏与审核系统`,
                      }),
                      (0, $.jsxs)(`span`, {
                        className: `text-[11px] font-mono text-slate-400`,
                        children: [
                          `覆盖 `,
                          Ee.length,
                          ` 个ID自增网站 · 待重试 `,
                          $e.toLocaleString(),
                          ` 项`,
                        ],
                      }),
                    ],
                  }),
                  (0, $.jsxs)(`p`, {
                    className: `text-xs text-slate-500 mt-1`,
                    children: [
                      `针对连续探测过程中的 404 空洞、网络超时或临时漏采 ID，按网站聚合管理重试调度与周期审核 · `,
                      (0, $.jsx)(`span`, {
                        className: `font-semibold text-slate-700`,
                        children: `空洞容错 · 周期审核 · 智能熔断`,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
        (0, $.jsxs)(`div`, {
          className: `grid grid-cols-1 sm:grid-cols-2 gap-3.5`,
          children: [
            (0, $.jsxs)(`div`, {
              className: `bg-white border border-amber-200/80 bg-gradient-to-br from-white to-amber-50/30 rounded-xl p-4 shadow-2xs flex items-center justify-between`,
              children: [
                (0, $.jsxs)(`div`, {
                  className: `space-y-1`,
                  children: [
                    (0, $.jsxs)(`div`, {
                      className: `text-[12px] font-bold text-amber-800 flex items-center gap-1.5`,
                      children: [
                        (0, $.jsx)(re, { className: `w-4 h-4 text-amber-600` }),
                        (0, $.jsx)(`span`, { children: `当前待重试 ID 队列` }),
                      ],
                    }),
                    (0, $.jsxs)(`div`, {
                      className: `text-2xl font-black font-mono text-amber-950`,
                      children: [
                        $e.toLocaleString(),
                        ` `,
                        (0, $.jsx)(`span`, {
                          className: `text-xs font-sans text-amber-800/80 font-normal`,
                          children: `个待重试`,
                        }),
                      ],
                    }),
                    (0, $.jsx)(`div`, {
                      className: `text-[11px] text-amber-700/80`,
                      children: `各网站聚合待调度与待审核流水`,
                    }),
                  ],
                }),
                (0, $.jsx)(`div`, {
                  className: `w-11 h-11 rounded-xl bg-amber-100/80 text-amber-700 flex items-center justify-center`,
                  children: (0, $.jsx)(Le, { className: `w-5 h-5` }),
                }),
              ],
            }),
            (0, $.jsxs)(`div`, {
              className: `bg-white border border-emerald-200/80 bg-gradient-to-br from-white to-emerald-50/30 rounded-xl p-4 shadow-2xs flex items-center justify-between`,
              children: [
                (0, $.jsxs)(`div`, {
                  className: `space-y-1`,
                  children: [
                    (0, $.jsxs)(`div`, {
                      className: `text-[12px] font-bold text-emerald-800 flex items-center gap-1.5`,
                      children: [
                        (0, $.jsx)(B, {
                          className: `w-4 h-4 text-emerald-600`,
                        }),
                        (0, $.jsx)(`span`, { children: `今日已修复入库` }),
                      ],
                    }),
                    (0, $.jsxs)(`div`, {
                      className: `text-2xl font-black font-mono text-emerald-950`,
                      children: [
                        `+`,
                        (1480).toLocaleString(),
                        ` `,
                        (0, $.jsx)(`span`, {
                          className: `text-xs font-sans text-emerald-800/80 font-normal`,
                          children: `条已纠偏`,
                        }),
                      ],
                    }),
                    (0, $.jsx)(`div`, {
                      className: `text-[11px] text-emerald-700/80`,
                      children: `重试探测成功抓取并持久化入库`,
                    }),
                  ],
                }),
                (0, $.jsx)(`div`, {
                  className: `w-11 h-11 rounded-xl bg-emerald-100/80 text-emerald-700 flex items-center justify-center`,
                  children: (0, $.jsx)(B, { className: `w-5 h-5` }),
                }),
              ],
            }),
          ],
        }),
        (0, $.jsx)(`div`, {
          className: `bg-white border border-slate-200/80 rounded-xl p-3.5 sm:p-4 shadow-xs space-y-3`,
          children: (0, $.jsxs)(`div`, {
            className: `flex flex-col lg:flex-row lg:items-center justify-between gap-3`,
            children: [
              (0, $.jsxs)(`div`, {
                className: `flex flex-wrap items-center gap-2.5 flex-1`,
                children: [
                  (0, $.jsxs)(`div`, {
                    className: `flex items-center gap-1.5 min-w-[200px]`,
                    children: [
                      (0, $.jsx)(`span`, {
                        className: `text-xs font-bold text-slate-600 shrink-0`,
                        children: `归属网站:`,
                      }),
                      (0, $.jsxs)(`select`, {
                        value: s,
                        onChange: (e) => c(e.target.value),
                        className: `h-8.5 px-3 text-xs border border-slate-200 bg-slate-50/60 rounded-lg text-slate-800 font-medium focus:border-[#0066FF] focus:bg-white outline-none cursor-pointer hover:border-slate-300 transition-colors shadow-2xs flex-1`,
                        children: [
                          (0, $.jsxs)(`option`, {
                            value: `all`,
                            children: [`全部 ID自增网站 (`, Ee.length, ` 个)`],
                          }),
                          Ee.map((e) =>
                            (0, $.jsxs)(
                              `option`,
                              {
                                value: e.id,
                                children: [
                                  e.id,
                                  ` - `,
                                  e.name.replace(`-ID自增长`, ``),
                                ],
                              },
                              e.id,
                            ),
                          ),
                        ],
                      }),
                    ],
                  }),
                  (0, $.jsxs)(`div`, {
                    className: `relative min-w-[180px]`,
                    children: [
                      (0, $.jsx)(Be, {
                        className: `w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none`,
                      }),
                      (0, $.jsx)(`input`, {
                        type: `text`,
                        value: l,
                        onChange: (e) => u(e.target.value),
                        placeholder: `检索具体目标 ID (如 104819)...`,
                        className: `w-full h-8.5 pl-8 pr-3 rounded-lg border border-slate-200 bg-slate-50/60 text-xs text-slate-800 focus:border-[#0066FF] focus:bg-white outline-none transition-all`,
                      }),
                    ],
                  }),
                  (0, $.jsxs)(`div`, {
                    className: `relative min-w-[200px] flex-1 max-w-sm`,
                    children: [
                      (0, $.jsx)(me, {
                        className: `w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none`,
                      }),
                      (0, $.jsx)(`input`, {
                        type: `text`,
                        value: d,
                        onChange: (e) => f(e.target.value),
                        placeholder: `搜索网站名称、台账ID或域名...`,
                        className: `w-full h-8.5 pl-8 pr-3 rounded-lg border border-slate-200 bg-slate-50/60 text-xs text-slate-800 focus:border-[#0066FF] focus:bg-white outline-none transition-all`,
                      }),
                    ],
                  }),
                  ne &&
                    (0, $.jsxs)(`button`, {
                      type: `button`,
                      onClick: z,
                      className: `h-8.5 px-3 text-xs font-bold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors flex items-center gap-1 cursor-pointer`,
                      children: [
                        (0, $.jsx)(Q, { className: `w-3.5 h-3.5` }),
                        (0, $.jsx)(`span`, { children: `重置条件` }),
                      ],
                    }),
                ],
              }),
              (0, $.jsx)(`div`, {
                className: `text-xs text-slate-500 flex items-center gap-2 self-end lg:self-center`,
                children: (0, $.jsxs)(`span`, {
                  children: [
                    `当前筛选匹配 `,
                    (0, $.jsx)(`strong`, { children: Ie.length }),
                    ` 个网站聚合项`,
                  ],
                }),
              }),
            ],
          }),
        }),
        (0, $.jsxs)(`div`, {
          className: `bg-white border border-slate-200/80 rounded-xl shadow-xs overflow-hidden`,
          children: [
            (0, $.jsx)(`div`, {
              className: `overflow-x-auto`,
              children: (0, $.jsxs)(`table`, {
                className: `w-full text-left border-collapse text-xs`,
                children: [
                  (0, $.jsx)(`thead`, {
                    children: (0, $.jsxs)(`tr`, {
                      className: `bg-slate-50/80 border-b border-slate-200 text-slate-600 font-bold`,
                      children: [
                        (0, $.jsx)(`th`, {
                          className: `py-3 px-3.5 w-10 text-center`,
                          children: (0, $.jsx)(`button`, {
                            type: `button`,
                            onClick: He,
                            className: `text-slate-400 hover:text-[#0066FF] cursor-pointer`,
                            children:
                              p.length === Ve.length && Ve.length > 0
                                ? (0, $.jsx)(Ze, {
                                    className: `w-4 h-4 text-[#0066FF]`,
                                  })
                                : (0, $.jsx)(Qe, { className: `w-4 h-4` }),
                          }),
                        }),
                        (0, $.jsx)(`th`, {
                          className: `py-3 px-3.5 w-[110px]`,
                          children: `台账ID`,
                        }),
                        (0, $.jsx)(`th`, {
                          className: `py-3 px-3.5 min-w-[180px]`,
                          children: `目标网站服务名称`,
                        }),
                        (0, $.jsx)(`th`, {
                          className: `py-3 px-3.5 min-w-[180px]`,
                          children: `目标域名 / URL格式`,
                        }),
                        (0, $.jsx)(`th`, {
                          className: `py-3 px-3.5 w-[130px] text-right`,
                          children: `待重试ID数量`,
                        }),
                        (0, $.jsx)(`th`, {
                          className: `py-3 px-3.5 w-[155px]`,
                          children: `最早ID入库时间`,
                        }),
                        (0, $.jsx)(`th`, {
                          className: `py-3 px-3.5 w-[115px] text-center`,
                          children: `最早入库验证`,
                        }),
                        (0, $.jsx)(`th`, {
                          className: `py-3 px-3.5 w-[155px]`,
                          children: `重试时间参数`,
                        }),
                        (0, $.jsx)(`th`, {
                          className: `py-3 px-3.5 w-[110px] text-right`,
                          children: `最近单轮耗时`,
                        }),
                        (0, $.jsx)(`th`, {
                          className: `py-3 px-3.5 w-[100px] text-right`,
                          children: `操作`,
                        }),
                      ],
                    }),
                  }),
                  (0, $.jsx)(`tbody`, {
                    className: `divide-y divide-slate-100`,
                    children:
                      Ve.length === 0
                        ? (0, $.jsx)(`tr`, {
                            children: (0, $.jsxs)(`td`, {
                              colSpan: 10,
                              className: `py-12 text-center text-slate-400`,
                              children: [
                                (0, $.jsx)(Le, {
                                  className: `w-8 h-8 text-slate-300 mx-auto mb-2 opacity-60`,
                                }),
                                (0, $.jsx)(`div`, {
                                  children: `未检索到匹配的重试网站数据`,
                                }),
                              ],
                            }),
                          })
                        : Ve.map((e) => {
                            let t = p.includes(e.svcId);
                            return (0, $.jsxs)(
                              `tr`,
                              {
                                className: `hover:bg-blue-50/40 transition-colors ${t ? `bg-blue-50/20` : ``}`,
                                children: [
                                  (0, $.jsx)(`td`, {
                                    className: `py-2.5 px-3.5 text-center`,
                                    children: (0, $.jsx)(`button`, {
                                      type: `button`,
                                      onClick: () => Ue(e.svcId),
                                      className: `text-slate-400 hover:text-[#0066FF] cursor-pointer`,
                                      children: t
                                        ? (0, $.jsx)(Ze, {
                                            className: `w-4 h-4 text-[#0066FF]`,
                                          })
                                        : (0, $.jsx)(Qe, {
                                            className: `w-4 h-4`,
                                          }),
                                    }),
                                  }),
                                  (0, $.jsx)(`td`, {
                                    className: `py-2.5 px-3.5 font-mono font-bold text-[#1e376b]`,
                                    children: (0, $.jsx)(`span`, {
                                      className: `bg-[#D5EBFE]/40 border border-[#b9d7f6] px-1.5 py-0.5 rounded text-[11px]`,
                                      children: e.svcId,
                                    }),
                                  }),
                                  (0, $.jsx)(`td`, {
                                    className: `py-2.5 px-3.5 font-bold text-slate-900`,
                                    children: (0, $.jsx)(`div`, {
                                      className: `flex items-center gap-1.5`,
                                      children: (0, $.jsx)(`span`, {
                                        children: e.siteName,
                                      }),
                                    }),
                                  }),
                                  (0, $.jsx)(`td`, {
                                    className: `py-2.5 px-3.5 font-mono text-[11px] text-slate-600 truncate max-w-[200px]`,
                                    title: e.domain,
                                    children: e.domain,
                                  }),
                                  (0, $.jsx)(`td`, {
                                    className: `py-2.5 px-3.5 text-right font-mono font-bold text-slate-800 text-[12.5px]`,
                                    children: (0, $.jsx)(`span`, {
                                      children: e.pendingCount.toLocaleString(),
                                    }),
                                  }),
                                  (0, $.jsx)(`td`, {
                                    className: `py-2.5 px-3.5 font-mono text-[11.5px] text-slate-600 font-semibold`,
                                    children: e.earliestInboundTime,
                                  }),
                                  (0, $.jsx)(`td`, {
                                    className: `py-2.5 px-3.5 text-center`,
                                    children: (0, $.jsx)(`button`, {
                                      type: `button`,
                                      onClick: () => N(e),
                                      className: `text-xs font-semibold text-[#0066FF] hover:text-[#004dc7] hover:underline cursor-pointer transition-colors`,
                                      title: `点击打开查看该网站最早入库的前10条待重试ID及拼装目标URL`,
                                      children: `最早URL10条`,
                                    }),
                                  }),
                                  (0, $.jsx)(`td`, {
                                    className: `py-2.5 px-3.5`,
                                    children:
                                      Oe === e.svcId
                                        ? (0, $.jsxs)(`div`, {
                                            className: `flex items-center gap-1.5 animate-in fade-in`,
                                            children: [
                                              (0, $.jsx)(`input`, {
                                                type: `number`,
                                                min: `1`,
                                                max: `10080`,
                                                step: `5`,
                                                value: Ae,
                                                onChange: (e) =>
                                                  je(
                                                    Math.max(
                                                      1,
                                                      Number(e.target.value) ||
                                                        0,
                                                    ),
                                                  ),
                                                onKeyDown: (t) => {
                                                  (t.key === `Enter` &&
                                                    Je(e.svcId),
                                                    t.key === `Escape` &&
                                                      ke(null));
                                                },
                                                autoFocus: !0,
                                                className: `w-20 h-7.5 px-2 text-xs font-mono font-bold text-slate-900 bg-white border-2 border-[#0066FF] rounded-md outline-none shadow-xs`,
                                                placeholder: `分钟数`,
                                              }),
                                              (0, $.jsx)(`span`, {
                                                className: `text-xs text-slate-600 font-medium shrink-0`,
                                                children: `分钟`,
                                              }),
                                              (0, $.jsx)(`button`, {
                                                type: `button`,
                                                onClick: () => Je(e.svcId),
                                                className: `p-1.5 rounded bg-emerald-600 hover:bg-emerald-700 text-white cursor-pointer shadow-2xs transition-colors`,
                                                title: `保存修改`,
                                                children: (0, $.jsx)(P, {
                                                  className: `w-3.5 h-3.5`,
                                                }),
                                              }),
                                              (0, $.jsx)(`button`, {
                                                type: `button`,
                                                onClick: () => ke(null),
                                                className: `p-1.5 rounded bg-slate-200 hover:bg-slate-300 text-slate-700 cursor-pointer transition-colors`,
                                                title: `取消`,
                                                children: (0, $.jsx)(Q, {
                                                  className: `w-3.5 h-3.5`,
                                                }),
                                              }),
                                            ],
                                          })
                                        : (0, $.jsxs)(`div`, {
                                            onClick: () =>
                                              Ke(e.svcId, e.retryIntervalText),
                                            className: `group font-mono text-xs font-bold text-amber-900 bg-amber-50 hover:bg-amber-100/90 border border-amber-200/90 hover:border-amber-300 px-2.5 py-1 rounded-md inline-flex items-center gap-1.5 shadow-2xs cursor-pointer transition-all`,
                                            title: `点击可输入修改重试时间参数(分钟)`,
                                            children: [
                                              (0, $.jsx)(re, {
                                                className: `w-3.5 h-3.5 text-amber-600`,
                                              }),
                                              (0, $.jsx)(`span`, {
                                                children: e.retryIntervalText,
                                              }),
                                              (0, $.jsx)(Me, {
                                                className: `w-3 h-3 text-amber-600/70 group-hover:text-amber-900 opacity-60 group-hover:opacity-100 transition-opacity ml-0.5`,
                                              }),
                                            ],
                                          }),
                                  }),
                                  (0, $.jsx)(`td`, {
                                    className: `py-2.5 px-3.5 text-right font-mono text-slate-700 font-semibold`,
                                    children: e.lastRoundDuration,
                                  }),
                                  (0, $.jsx)(`td`, {
                                    className: `py-2.5 px-3.5 text-right`,
                                    children: (0, $.jsxs)(`button`, {
                                      type: `button`,
                                      onClick: () => {
                                        (S(e), T(``), D(`all`));
                                      },
                                      className: `px-2.5 py-1 rounded text-[11px] font-bold text-purple-700 bg-purple-50 hover:bg-purple-100 border border-purple-200 transition-colors cursor-pointer inline-flex items-center gap-1 shadow-2xs`,
                                      title: `查看该网站的历史逐ID执行日志回显`,
                                      children: [
                                        (0, $.jsx)(Y, { className: `w-3 h-3` }),
                                        (0, $.jsx)(`span`, {
                                          children: `日志`,
                                        }),
                                      ],
                                    }),
                                  }),
                                ],
                              },
                              e.svcId,
                            );
                          }),
                  }),
                ],
              }),
            }),
            (0, $.jsxs)(`div`, {
              className: `px-4 py-3 bg-slate-50/70 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-600`,
              children: [
                (0, $.jsxs)(`div`, {
                  className: `flex items-center gap-2`,
                  children: [
                    (0, $.jsxs)(`span`, {
                      children: [`共 `, Ie.length, ` 条网站聚合数据`],
                    }),
                    (0, $.jsx)(`span`, {
                      className: `text-slate-300`,
                      children: `|`,
                    }),
                    (0, $.jsxs)(`div`, {
                      className: `flex items-center gap-1`,
                      children: [
                        (0, $.jsx)(`span`, { children: `每页` }),
                        (0, $.jsxs)(`select`, {
                          value: y,
                          onChange: (e) => {
                            (b(Number(e.target.value)), v(1));
                          },
                          className: `h-7 px-1.5 bg-white border border-slate-200 rounded text-xs outline-none`,
                          children: [
                            (0, $.jsx)(`option`, { value: 10, children: `10` }),
                            (0, $.jsx)(`option`, { value: 20, children: `20` }),
                            (0, $.jsx)(`option`, { value: 50, children: `50` }),
                          ],
                        }),
                        (0, $.jsx)(`span`, { children: `条` }),
                      ],
                    }),
                  ],
                }),
                (0, $.jsxs)(`div`, {
                  className: `flex items-center gap-1`,
                  children: [
                    (0, $.jsx)(`button`, {
                      type: `button`,
                      onClick: () => v(1),
                      disabled: ze === 1,
                      className: `p-1 rounded border border-slate-200 bg-white hover:bg-slate-50 disabled:opacity-40 disabled:pointer-events-none cursor-pointer`,
                      children: (0, $.jsx)(R, { className: `w-3.5 h-3.5` }),
                    }),
                    (0, $.jsx)(`button`, {
                      type: `button`,
                      onClick: () => v((e) => Math.max(1, e - 1)),
                      disabled: ze === 1,
                      className: `p-1 rounded border border-slate-200 bg-white hover:bg-slate-50 disabled:opacity-40 disabled:pointer-events-none cursor-pointer`,
                      children: (0, $.jsx)(I, { className: `w-3.5 h-3.5` }),
                    }),
                    (0, $.jsxs)(`span`, {
                      className: `px-2 font-mono font-bold text-slate-800`,
                      children: [ze, ` / `, Re],
                    }),
                    (0, $.jsx)(`button`, {
                      type: `button`,
                      onClick: () => v((e) => Math.min(Re, e + 1)),
                      disabled: ze === Re,
                      className: `p-1 rounded border border-slate-200 bg-white hover:bg-slate-50 disabled:opacity-40 disabled:pointer-events-none cursor-pointer`,
                      children: (0, $.jsx)(L, { className: `w-3.5 h-3.5` }),
                    }),
                    (0, $.jsx)(`button`, {
                      type: `button`,
                      onClick: () => v(Re),
                      disabled: ze === Re,
                      className: `p-1 rounded border border-slate-200 bg-white hover:bg-slate-50 disabled:opacity-40 disabled:pointer-events-none cursor-pointer`,
                      children: (0, $.jsx)(te, { className: `w-3.5 h-3.5` }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        x &&
          (0, $.jsx)(`div`, {
            className: `fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4`,
            children: (0, $.jsxs)(`div`, {
              className: `bg-white rounded-2xl border border-slate-200 shadow-2xl max-w-5xl w-full p-5 space-y-4 max-h-[85vh] flex flex-col animate-in fade-in zoom-in-95`,
              children: [
                (0, $.jsxs)(`div`, {
                  className: `flex items-center justify-between pb-3 border-b border-slate-100 shrink-0`,
                  children: [
                    (0, $.jsxs)(`div`, {
                      className: `flex items-center gap-2.5`,
                      children: [
                        (0, $.jsx)(`div`, {
                          className: `w-8 h-8 rounded-lg bg-purple-50 text-purple-700 flex items-center justify-center`,
                          children: (0, $.jsx)(Y, { className: `w-4 h-4` }),
                        }),
                        (0, $.jsxs)(`div`, {
                          children: [
                            (0, $.jsxs)(`h3`, {
                              className: `font-extrabold text-slate-900 text-sm flex items-center gap-2`,
                              children: [
                                (0, $.jsxs)(`span`, {
                                  children: [`【`, x.svcId, `】`, x.siteName],
                                }),
                                (0, $.jsx)(`span`, {
                                  className: `text-xs px-2 py-0.2 bg-purple-100 text-purple-800 rounded font-normal font-mono`,
                                  children: `重试日志回显`,
                                }),
                              ],
                            }),
                            (0, $.jsxs)(`div`, {
                              className: `text-xs text-slate-400 font-mono`,
                              children: [
                                x.domain,
                                ` · 共记录 `,
                                x.logs.length,
                                ` 次重试探测行为`,
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, $.jsx)(`button`, {
                      type: `button`,
                      onClick: () => S(null),
                      className: `p-1 text-slate-400 hover:text-slate-700 cursor-pointer`,
                      children: (0, $.jsx)(Q, { className: `w-4 h-4` }),
                    }),
                  ],
                }),
                (0, $.jsxs)(`div`, {
                  className: `flex items-center gap-2 shrink-0`,
                  children: [
                    (0, $.jsxs)(`div`, {
                      className: `relative flex-1 max-w-xs`,
                      children: [
                        (0, $.jsx)(Be, {
                          className: `w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none`,
                        }),
                        (0, $.jsx)(`input`, {
                          type: `text`,
                          value: w,
                          onChange: (e) => T(e.target.value),
                          placeholder: `按 ID 过滤日志...`,
                          className: `w-full h-8 pl-8 pr-3 text-xs border border-slate-200 rounded-lg outline-none focus:border-[#0066FF]`,
                        }),
                      ],
                    }),
                    (0, $.jsxs)(`select`, {
                      value: E,
                      onChange: (e) => D(e.target.value),
                      className: `h-8 px-2.5 text-xs border border-slate-200 rounded-lg outline-none cursor-pointer bg-white font-medium text-slate-700`,
                      children: [
                        (0, $.jsx)(`option`, {
                          value: `all`,
                          children: `全部状态`,
                        }),
                        (0, $.jsx)(`option`, {
                          value: `success`,
                          children: `成功`,
                        }),
                        (0, $.jsx)(`option`, {
                          value: `failed`,
                          children: `失败`,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, $.jsx)(`div`, {
                  className: `flex-1 overflow-y-auto border border-slate-200 rounded-xl`,
                  children: (0, $.jsxs)(`table`, {
                    className: `w-full text-left border-collapse text-xs`,
                    children: [
                      (0, $.jsx)(`thead`, {
                        children: (0, $.jsxs)(`tr`, {
                          className: `bg-slate-50 border-b border-slate-200 text-slate-600 font-bold sticky top-0`,
                          children: [
                            (0, $.jsx)(`th`, {
                              className: `py-2.5 px-3.5 w-[110px]`,
                              children: `目标 ID`,
                            }),
                            (0, $.jsx)(`th`, {
                              className: `py-2.5 px-3.5 min-w-[260px]`,
                              children: `拼装目标 URL`,
                            }),
                            (0, $.jsx)(`th`, {
                              className: `py-2.5 px-3.5 w-[150px]`,
                              children: `入库时间`,
                            }),
                            (0, $.jsx)(`th`, {
                              className: `py-2.5 px-3.5 w-[150px]`,
                              children: `执行时间`,
                            }),
                            (0, $.jsx)(`th`, {
                              className: `py-2.5 px-3.5 w-[90px] text-center`,
                              children: `状态`,
                            }),
                          ],
                        }),
                      }),
                      (0, $.jsx)(`tbody`, {
                        className: `divide-y divide-slate-100 font-mono`,
                        children: x.logs
                          .filter(
                            (e) =>
                              !(
                                (w && !e.targetId.includes(w.trim())) ||
                                (E === `success` &&
                                  e.httpStatus !== 200 &&
                                  e.status !== `success`) ||
                                (E === `failed` &&
                                  (e.httpStatus === 200 ||
                                    e.status === `success`))
                              ),
                          )
                          .map((e, t) => {
                            let n =
                              e.httpStatus === 200 || e.status === `success`;
                            return (0, $.jsxs)(
                              `tr`,
                              {
                                className: `hover:bg-slate-50/70`,
                                children: [
                                  (0, $.jsx)(`td`, {
                                    className: `py-2.5 px-3.5 font-bold text-slate-900`,
                                    children: e.targetId,
                                  }),
                                  (0, $.jsx)(`td`, {
                                    className: `py-2.5 px-3.5 max-w-[320px]`,
                                    children: (0, $.jsxs)(`div`, {
                                      className: `flex items-center gap-1.5`,
                                      children: [
                                        (0, $.jsx)(`a`, {
                                          href: e.targetUrl,
                                          target: `_blank`,
                                          rel: `noreferrer`,
                                          onClick: (e) => e.stopPropagation(),
                                          className: `font-mono text-xs text-slate-600 hover:text-[#0066FF] hover:underline truncate transition-colors max-w-[260px] block`,
                                          title: e.targetUrl,
                                          children: e.targetUrl,
                                        }),
                                        (0, $.jsx)(`button`, {
                                          type: `button`,
                                          onClick: () =>
                                            A(
                                              e.targetUrl,
                                              `url-${e.targetId}-${t}`,
                                            ),
                                          className: `text-slate-400 hover:text-slate-700 p-0.5 rounded hover:bg-slate-100 transition-colors shrink-0 cursor-pointer`,
                                          title: `复制目标URL`,
                                          children:
                                            O === `url-${e.targetId}-${t}`
                                              ? (0, $.jsx)(P, {
                                                  className: `w-3.5 h-3.5 text-emerald-600`,
                                                })
                                              : (0, $.jsx)(oe, {
                                                  className: `w-3.5 h-3.5`,
                                                }),
                                        }),
                                      ],
                                    }),
                                  }),
                                  (0, $.jsx)(`td`, {
                                    className: `py-2.5 px-3.5 text-slate-500 text-xs font-mono`,
                                    children: e.inboundTime,
                                  }),
                                  (0, $.jsx)(`td`, {
                                    className: `py-2.5 px-3.5 text-slate-700 text-xs font-semibold`,
                                    children: e.runTime,
                                  }),
                                  (0, $.jsx)(`td`, {
                                    className: `py-2.5 px-3.5 text-center`,
                                    children: n
                                      ? (0, $.jsxs)(`span`, {
                                          className: `px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold text-[11px] inline-flex items-center gap-1 font-sans shadow-2xs`,
                                          children: [
                                            (0, $.jsx)(`span`, {
                                              className: `w-1.5 h-1.5 rounded-full bg-emerald-500`,
                                            }),
                                            `成功`,
                                          ],
                                        })
                                      : (0, $.jsxs)(`span`, {
                                          className: `px-2.5 py-0.5 rounded-full bg-rose-50 text-rose-700 border border-rose-200 font-bold text-[11px] inline-flex items-center gap-1 font-sans shadow-2xs`,
                                          children: [
                                            (0, $.jsx)(`span`, {
                                              className: `w-1.5 h-1.5 rounded-full bg-rose-500`,
                                            }),
                                            `失败`,
                                          ],
                                        }),
                                  }),
                                ],
                              },
                              t,
                            );
                          }),
                      }),
                    ],
                  }),
                }),
                (0, $.jsx)(`div`, {
                  className: `flex items-center justify-end pt-2 border-t border-slate-100 shrink-0`,
                  children: (0, $.jsx)(`button`, {
                    type: `button`,
                    onClick: () => S(null),
                    className: `px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg text-xs font-bold text-slate-700 cursor-pointer`,
                    children: `关闭日志`,
                  }),
                }),
              ],
            }),
          }),
        j &&
          (0, $.jsx)(`div`, {
            className: `fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4`,
            children: (0, $.jsxs)(`div`, {
              className: `bg-white rounded-2xl border border-slate-200 shadow-2xl max-w-5xl w-full p-5 space-y-4 max-h-[85vh] flex flex-col animate-in fade-in zoom-in-95`,
              children: [
                (0, $.jsxs)(`div`, {
                  className: `flex items-center justify-between pb-3 border-b border-slate-100 shrink-0`,
                  children: [
                    (0, $.jsxs)(`div`, {
                      className: `flex items-center gap-2.5`,
                      children: [
                        (0, $.jsx)(`div`, {
                          className: `w-8 h-8 rounded-lg bg-blue-50 text-[#0066FF] flex items-center justify-center`,
                          children: (0, $.jsx)(le, { className: `w-4 h-4` }),
                        }),
                        (0, $.jsxs)(`div`, {
                          children: [
                            (0, $.jsxs)(`h3`, {
                              className: `font-extrabold text-slate-900 text-sm flex items-center gap-2`,
                              children: [
                                (0, $.jsxs)(`span`, {
                                  children: [
                                    `【`,
                                    j.svcId,
                                    `】待重试具体 ID 明细清单`,
                                  ],
                                }),
                                (0, $.jsxs)(`span`, {
                                  className: `text-xs font-mono font-bold px-2 py-0.2 bg-blue-50 text-[#0066FF] border border-blue-200 rounded`,
                                  children: [`共 `, j.pendingCount, ` 个 ID`],
                                }),
                              ],
                            }),
                            (0, $.jsxs)(`div`, {
                              className: `text-xs text-slate-400`,
                              children: [
                                j.siteName,
                                ` · 点击拼装目标 URL 可直接在新标签页打开源站查看真实情况`,
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, $.jsx)(`button`, {
                      type: `button`,
                      onClick: () => ee(null),
                      className: `p-1 text-slate-400 hover:text-slate-700 cursor-pointer`,
                      children: (0, $.jsx)(Q, { className: `w-4 h-4` }),
                    }),
                  ],
                }),
                (0, $.jsx)(`div`, {
                  className: `flex-1 overflow-y-auto border border-slate-200 rounded-xl`,
                  children: (0, $.jsxs)(`table`, {
                    className: `w-full text-left border-collapse text-xs`,
                    children: [
                      (0, $.jsx)(`thead`, {
                        children: (0, $.jsxs)(`tr`, {
                          className: `bg-slate-50 border-b border-slate-200 text-slate-600 font-bold sticky top-0`,
                          children: [
                            (0, $.jsx)(`th`, {
                              className: `py-2.5 px-3 w-[110px]`,
                              children: `目标 ID`,
                            }),
                            (0, $.jsx)(`th`, {
                              className: `py-2.5 px-3 min-w-[240px]`,
                              children: `拼装目标 URL`,
                            }),
                            (0, $.jsx)(`th`, {
                              className: `py-2.5 px-3 w-[150px]`,
                              children: `入库时间`,
                            }),
                            (0, $.jsx)(`th`, {
                              className: `py-2.5 px-3 w-[80px] text-center`,
                              children: `轮次`,
                            }),
                            (0, $.jsx)(`th`, {
                              className: `py-2.5 px-3 w-[90px] text-center`,
                              children: `状态`,
                            }),
                            (0, $.jsx)(`th`, {
                              className: `py-2.5 px-3`,
                              children: `异常成因判定`,
                            }),
                          ],
                        }),
                      }),
                      (0, $.jsx)(`tbody`, {
                        className: `divide-y divide-slate-100`,
                        children:
                          j.items.length === 0
                            ? (0, $.jsx)(`tr`, {
                                children: (0, $.jsx)(`td`, {
                                  colSpan: 6,
                                  className: `py-8 text-center text-slate-400`,
                                  children: `当前网站待重试队列为空`,
                                }),
                              })
                            : j.items.map((e, t) => {
                                let n =
                                  e.targetUrl ||
                                  `https://${j.domain}/detail/${e.targetId}.html`;
                                return (0, $.jsxs)(
                                  `tr`,
                                  {
                                    className: `hover:bg-slate-50/70`,
                                    children: [
                                      (0, $.jsx)(`td`, {
                                        className: `py-2.5 px-3 font-mono font-bold text-slate-900`,
                                        children: e.targetId,
                                      }),
                                      (0, $.jsx)(`td`, {
                                        className: `py-2.5 px-3 max-w-[300px]`,
                                        children: (0, $.jsxs)(`div`, {
                                          className: `flex items-center gap-1.5`,
                                          children: [
                                            (0, $.jsx)(`a`, {
                                              href: n,
                                              target: `_blank`,
                                              rel: `noreferrer`,
                                              onClick: (e) =>
                                                e.stopPropagation(),
                                              className: `font-mono text-xs text-slate-600 hover:text-[#0066FF] hover:underline truncate transition-colors max-w-[240px] block`,
                                              title: `点击新窗口访问真实目标URL: ${n}`,
                                              children: n,
                                            }),
                                            (0, $.jsx)(`button`, {
                                              type: `button`,
                                              onClick: () =>
                                                A(
                                                  n,
                                                  `id-list-url-${e.targetId}-${t}`,
                                                ),
                                              className: `text-slate-400 hover:text-slate-700 p-0.5 rounded hover:bg-slate-100 transition-colors shrink-0 cursor-pointer`,
                                              title: `复制目标URL`,
                                              children:
                                                O ===
                                                `id-list-url-${e.targetId}-${t}`
                                                  ? (0, $.jsx)(P, {
                                                      className: `w-3.5 h-3.5 text-emerald-600`,
                                                    })
                                                  : (0, $.jsx)(oe, {
                                                      className: `w-3.5 h-3.5`,
                                                    }),
                                            }),
                                          ],
                                        }),
                                      }),
                                      (0, $.jsx)(`td`, {
                                        className: `py-2.5 px-3 font-mono text-[11px] text-slate-500`,
                                        children: e.inboundTime,
                                      }),
                                      (0, $.jsxs)(`td`, {
                                        className: `py-2.5 px-3 text-center font-mono font-bold text-slate-700`,
                                        children: [e.retryCount || 1, ` 次`],
                                      }),
                                      (0, $.jsx)(`td`, {
                                        className: `py-2.5 px-3 text-center`,
                                        children:
                                          e.auditStatus === `retrying`
                                            ? (0, $.jsx)(`span`, {
                                                className: `px-1.5 py-0.2 rounded bg-blue-50 text-blue-700 border border-blue-200 font-bold text-[10px]`,
                                                children: `正在探测`,
                                              })
                                            : (0, $.jsx)(`span`, {
                                                className: `px-1.5 py-0.2 rounded bg-amber-50 text-amber-800 border border-amber-200 font-bold text-[10px]`,
                                                children: `等待重试`,
                                              }),
                                      }),
                                      (0, $.jsx)(`td`, {
                                        className: `py-2.5 px-3 text-slate-600`,
                                        children:
                                          e.errorReason ||
                                          `404 目标页面未发布或空洞`,
                                      }),
                                    ],
                                  },
                                  e.id,
                                );
                              }),
                      }),
                    ],
                  }),
                }),
                (0, $.jsxs)(`div`, {
                  className: `flex items-center justify-between pt-2 border-t border-slate-100 shrink-0`,
                  children: [
                    (0, $.jsxs)(`button`, {
                      type: `button`,
                      onClick: () => Ye(j),
                      className: `px-3.5 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg text-xs font-bold flex items-center gap-1.5 cursor-pointer shadow-2xs`,
                      children: [
                        (0, $.jsx)(Ne, {
                          className: `w-3.5 h-3.5 fill-current`,
                        }),
                        (0, $.jsxs)(`span`, {
                          children: [
                            `立即对全部 `,
                            j.pendingCount,
                            ` 个ID下发重试`,
                          ],
                        }),
                      ],
                    }),
                    (0, $.jsx)(`button`, {
                      type: `button`,
                      onClick: () => ee(null),
                      className: `px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg text-xs font-bold text-slate-700 cursor-pointer`,
                      children: `关闭`,
                    }),
                  ],
                }),
              ],
            }),
          }),
        M &&
          (0, $.jsx)(`div`, {
            className: `fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4`,
            children: (0, $.jsxs)(`div`, {
              className: `bg-white rounded-2xl border border-slate-200 shadow-2xl max-w-5xl w-full p-5 space-y-4 max-h-[90vh] flex flex-col animate-in fade-in zoom-in-95`,
              children: [
                (0, $.jsxs)(`div`, {
                  className: `flex items-center justify-between pb-3 border-b border-slate-100 shrink-0`,
                  children: [
                    (0, $.jsxs)(`div`, {
                      className: `flex items-center gap-2.5`,
                      children: [
                        (0, $.jsx)(`div`, {
                          className: `w-9 h-9 rounded-xl bg-blue-50 text-[#0066FF] flex items-center justify-center`,
                          children: (0, $.jsx)(ge, { className: `w-5 h-5` }),
                        }),
                        (0, $.jsxs)(`div`, {
                          children: [
                            (0, $.jsxs)(`h3`, {
                              className: `font-extrabold text-slate-900 text-sm flex items-center gap-2`,
                              children: [
                                (0, $.jsxs)(`span`, {
                                  children: [`【`, M.svcId, `】`, M.siteName],
                                }),
                                (0, $.jsx)(`span`, {
                                  className: `text-xs px-2 py-0.5 rounded font-bold bg-blue-50 text-[#0066FF] border border-blue-200`,
                                  children: `最早入库前 10 条 ID`,
                                }),
                              ],
                            }),
                            (0, $.jsxs)(`div`, {
                              className: `text-xs text-slate-500 font-mono mt-0.5`,
                              children: [
                                `域名: `,
                                M.domain,
                                ` · 最早入库基准时间: `,
                                M.earliestInboundTime,
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, $.jsx)(`button`, {
                      type: `button`,
                      onClick: () => N(null),
                      className: `p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 cursor-pointer transition-colors`,
                      children: (0, $.jsx)(Q, { className: `w-4.5 h-4.5` }),
                    }),
                  ],
                }),
                (0, $.jsx)(`div`, {
                  className: `bg-blue-50/70 border border-blue-200/80 rounded-xl p-3 flex items-start justify-between gap-3 text-xs text-blue-950 shrink-0`,
                  children: (0, $.jsxs)(`div`, {
                    className: `flex items-start gap-2`,
                    children: [
                      (0, $.jsx)(Ge, {
                        className: `w-4 h-4 text-[#0066FF] shrink-0 mt-0.5`,
                      }),
                      (0, $.jsxs)(`div`, {
                        className: `space-y-0.5`,
                        children: [
                          (0, $.jsx)(`div`, {
                            className: `font-bold text-blue-900`,
                            children: `真实情况核实说明：`,
                          }),
                          (0, $.jsxs)(`div`, {
                            className: `text-slate-600 text-[11.5px]`,
                            children: [
                              `以下展示该网站重试队列中`,
                              (0, $.jsx)(`strong`, {
                                children: `最早入库的前 10 个异常 ID`,
                              }),
                              `。点击每条对应的 `,
                              (0, $.jsx)(`strong`, {
                                children: `拼装目标 URL`,
                              }),
                              ` 或右侧「新窗口打开」，可直接调出真实浏览器访问目标站点，核查源端当前是已发布更新、仍返回 404 页面，抑或是存在反爬验证拦截。`,
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                (0, $.jsx)(`div`, {
                  className: `flex-1 overflow-y-auto border border-slate-200 rounded-xl overflow-hidden`,
                  children: (0, $.jsxs)(`table`, {
                    className: `w-full text-left border-collapse text-xs`,
                    children: [
                      (0, $.jsx)(`thead`, {
                        children: (0, $.jsxs)(`tr`, {
                          className: `bg-slate-50 border-b border-slate-200 text-slate-600 font-bold sticky top-0 z-10`,
                          children: [
                            (0, $.jsx)(`th`, {
                              className: `py-2.5 px-3 w-[60px] text-center`,
                              children: `序号`,
                            }),
                            (0, $.jsx)(`th`, {
                              className: `py-2.5 px-3.5 w-[120px]`,
                              children: `待重试 ID`,
                            }),
                            (0, $.jsx)(`th`, {
                              className: `py-2.5 px-3.5 min-w-[320px]`,
                              children: `拼装目标 URL (点击跳转查看)`,
                            }),
                            (0, $.jsx)(`th`, {
                              className: `py-2.5 px-3.5 w-[160px]`,
                              children: `最早入库时间`,
                            }),
                            (0, $.jsx)(`th`, {
                              className: `py-2.5 px-3.5 w-[160px]`,
                              children: `上一次执行时间`,
                            }),
                          ],
                        }),
                      }),
                      (0, $.jsx)(`tbody`, {
                        className: `divide-y divide-slate-100 font-mono text-xs`,
                        children: F(M).map((e, t) => {
                          let n =
                            e.targetUrl ||
                            `https://${M.domain}/detail/${e.targetId}.html`;
                          return (0, $.jsxs)(
                            `tr`,
                            {
                              className: `hover:bg-blue-50/30 transition-colors`,
                              children: [
                                (0, $.jsxs)(`td`, {
                                  className: `py-2.5 px-3 text-center text-slate-400 font-bold`,
                                  children: [`#`, t + 1],
                                }),
                                (0, $.jsx)(`td`, {
                                  className: `py-2.5 px-3.5`,
                                  children: (0, $.jsx)(`span`, {
                                    className: `font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded border border-purple-200 font-mono`,
                                    children: e.targetId,
                                  }),
                                }),
                                (0, $.jsx)(`td`, {
                                  className: `py-2.5 px-3.5 max-w-[360px]`,
                                  children: (0, $.jsxs)(`div`, {
                                    className: `flex items-center gap-1.5 group/url`,
                                    children: [
                                      (0, $.jsx)(`a`, {
                                        href: n,
                                        target: `_blank`,
                                        rel: `noreferrer`,
                                        onClick: (e) => e.stopPropagation(),
                                        className: `font-mono text-xs text-[#0066FF] hover:text-blue-800 hover:underline truncate transition-colors max-w-[300px] block font-semibold`,
                                        title: `新窗口直接打开核实真实情况: ${n}`,
                                        children: n,
                                      }),
                                      (0, $.jsx)(`button`, {
                                        type: `button`,
                                        onClick: () =>
                                          A(
                                            n,
                                            `earliest-url-${e.targetId}-${t}`,
                                          ),
                                        className: `text-slate-400 hover:text-slate-700 p-0.5 rounded hover:bg-slate-100 transition-colors shrink-0 cursor-pointer`,
                                        title: `复制目标URL`,
                                        children:
                                          O ===
                                          `earliest-url-${e.targetId}-${t}`
                                            ? (0, $.jsx)(P, {
                                                className: `w-3.5 h-3.5 text-emerald-600`,
                                              })
                                            : (0, $.jsx)(oe, {
                                                className: `w-3.5 h-3.5`,
                                              }),
                                      }),
                                    ],
                                  }),
                                }),
                                (0, $.jsx)(`td`, {
                                  className: `py-2.5 px-3.5 text-slate-500 font-mono text-[11.5px]`,
                                  children: e.inboundTime,
                                }),
                                (0, $.jsx)(`td`, {
                                  className: `py-2.5 px-3.5 text-slate-700 font-mono text-[11.5px] font-semibold`,
                                  children:
                                    e.lastRetryTime || `2026-09-28 09:18:24`,
                                }),
                              ],
                            },
                            e.id || t,
                          );
                        }),
                      }),
                    ],
                  }),
                }),
                (0, $.jsxs)(`div`, {
                  className: `flex items-center justify-between pt-3 border-t border-slate-100 shrink-0`,
                  children: [
                    (0, $.jsx)(`div`, {
                      className: `flex items-center gap-2`,
                      children: (0, $.jsxs)(`button`, {
                        type: `button`,
                        onClick: () => {
                          (Ye(M),
                            X(
                              `已成功为【${M.siteName}】前 10 条 ID 下发即刻探测调度指令！`,
                            ));
                        },
                        className: `px-4 py-2 bg-[#0066FF] hover:bg-blue-700 text-white rounded-lg text-xs font-bold flex items-center gap-1.5 cursor-pointer shadow-2xs transition-colors`,
                        children: [
                          (0, $.jsx)(Ne, {
                            className: `w-3.5 h-3.5 fill-current`,
                          }),
                          (0, $.jsx)(`span`, {
                            children: `立即下发这 10 条 ID 重试探测`,
                          }),
                        ],
                      }),
                    }),
                    (0, $.jsx)(`button`, {
                      type: `button`,
                      onClick: () => N(null),
                      className: `px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg text-xs font-bold text-slate-700 cursor-pointer`,
                      children: `关闭核实`,
                    }),
                  ],
                }),
              ],
            }),
          }),
        q &&
          (0, $.jsx)(`div`, {
            className: `fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4`,
            children: (0, $.jsxs)(`div`, {
              className: `bg-white rounded-2xl border border-slate-200 shadow-2xl max-w-md w-full p-5 space-y-4 animate-in fade-in zoom-in-95`,
              children: [
                (0, $.jsxs)(`div`, {
                  className: `flex items-center justify-between pb-2 border-b border-slate-100`,
                  children: [
                    (0, $.jsxs)(`div`, {
                      className: `flex items-center gap-2`,
                      children: [
                        (0, $.jsx)(`div`, {
                          className: `w-7 h-7 rounded-lg bg-blue-50 text-[#0066FF] flex items-center justify-center`,
                          children: (0, $.jsx)(qe, { className: `w-4 h-4` }),
                        }),
                        (0, $.jsx)(`h4`, {
                          className: `font-extrabold text-slate-900 text-sm`,
                          children: `配置重试时间参数`,
                        }),
                      ],
                    }),
                    (0, $.jsx)(`button`, {
                      type: `button`,
                      onClick: () => J(!1),
                      className: `p-1 text-slate-400 hover:text-slate-700 cursor-pointer`,
                      children: (0, $.jsx)(Q, { className: `w-4 h-4` }),
                    }),
                  ],
                }),
                (0, $.jsxs)(`div`, {
                  className: `space-y-3.5 text-xs`,
                  children: [
                    (0, $.jsxs)(`div`, {
                      className: `space-y-1.5`,
                      children: [
                        (0, $.jsx)(`label`, {
                          className: `font-bold text-slate-700 block`,
                          children: `重试时间参数 (输入项，单位: 分钟)`,
                        }),
                        (0, $.jsxs)(`div`, {
                          className: `flex items-center gap-2`,
                          children: [
                            (0, $.jsx)(`input`, {
                              type: `number`,
                              min: `1`,
                              max: `10080`,
                              step: `10`,
                              value: Se,
                              onChange: (e) => {
                                let t = Math.max(
                                  1,
                                  Number(e.target.value) || 0,
                                );
                                (Ce(t), Te(`${t}分钟`));
                              },
                              placeholder: `请输入重试间隔分钟数，如 180`,
                              className: `w-full h-8.5 px-3 bg-white border border-slate-300 rounded-lg text-xs font-mono font-bold text-slate-800 outline-none focus:border-[#0066FF]`,
                            }),
                            (0, $.jsx)(`span`, {
                              className: `text-xs text-slate-600 font-bold shrink-0`,
                              children: `分钟`,
                            }),
                          ],
                        }),
                        (0, $.jsxs)(`div`, {
                          className: `flex items-center gap-1.5 flex-wrap pt-1`,
                          children: [
                            (0, $.jsx)(`span`, {
                              className: `text-[11px] text-slate-400 font-medium`,
                              children: `快速预设:`,
                            }),
                            [30, 60, 180, 360, 720, 1440].map((e) =>
                              (0, $.jsxs)(
                                `button`,
                                {
                                  type: `button`,
                                  onClick: () => {
                                    (Ce(e), Te(`${e}分钟`));
                                  },
                                  className: `px-2 py-0.5 text-[11px] rounded border font-mono font-bold cursor-pointer transition-colors ${Se === e ? `bg-[#0066FF] text-white border-[#0066FF]` : `bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-200`}`,
                                  children: [e, `分钟`],
                                },
                                e,
                              ),
                            ),
                          ],
                        }),
                      ],
                    }),
                    (0, $.jsxs)(`div`, {
                      className: `p-3 bg-slate-50 rounded-xl border border-slate-200 text-slate-600 text-[11.5px] space-y-1`,
                      children: [
                        (0, $.jsxs)(`div`, {
                          className: `font-bold text-slate-800 flex items-center gap-1`,
                          children: [
                            (0, $.jsx)(re, {
                              className: `w-3.5 h-3.5 text-amber-600`,
                            }),
                            (0, $.jsx)(`span`, { children: `调度说明` }),
                          ],
                        }),
                        (0, $.jsx)(`p`, {
                          children: `系统将依据设定的分钟数作为周期探测间隔，自动唤醒代理集群对待重试 ID 队列发起实时探测与捕获。`,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, $.jsxs)(`div`, {
                  className: `flex items-center justify-end gap-2 pt-3 border-t border-slate-100`,
                  children: [
                    (0, $.jsx)(`button`, {
                      type: `button`,
                      onClick: () => J(!1),
                      className: `px-3.5 py-1.5 bg-slate-100 hover:bg-slate-200 rounded-lg text-xs font-bold text-slate-700 cursor-pointer`,
                      children: `取消`,
                    }),
                    (0, $.jsxs)(`button`, {
                      type: `button`,
                      onClick: We,
                      className: `px-4 py-1.5 bg-[#0066FF] hover:bg-[#0052cc] text-white rounded-lg text-xs font-bold cursor-pointer shadow-2xs flex items-center gap-1`,
                      children: [
                        (0, $.jsx)(P, { className: `w-3.5 h-3.5` }),
                        (0, $.jsx)(`span`, { children: `保存下发` }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        V &&
          (0, $.jsx)(`div`, {
            className: `fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4`,
            children: (0, $.jsxs)(`div`, {
              className: `bg-white rounded-2xl border border-slate-200 shadow-2xl max-w-md w-full p-5 space-y-4 animate-in fade-in zoom-in-95`,
              children: [
                (0, $.jsxs)(`div`, {
                  className: `flex items-center justify-between pb-2 border-b border-slate-100`,
                  children: [
                    (0, $.jsxs)(`div`, {
                      className: `flex items-center gap-2`,
                      children: [
                        (0, $.jsx)(`div`, {
                          className: `w-7 h-7 rounded-lg bg-blue-50 text-[#0066FF] flex items-center justify-center`,
                          children: (0, $.jsx)(Pe, { className: `w-4 h-4` }),
                        }),
                        (0, $.jsx)(`h4`, {
                          className: `font-extrabold text-slate-900 text-sm`,
                          children: `手动录入异常 ID 入库`,
                        }),
                      ],
                    }),
                    (0, $.jsx)(`button`, {
                      type: `button`,
                      onClick: () => ie(!1),
                      className: `p-1 text-slate-400 hover:text-slate-700 cursor-pointer`,
                      children: (0, $.jsx)(Q, { className: `w-4 h-4` }),
                    }),
                  ],
                }),
                (0, $.jsxs)(`div`, {
                  className: `space-y-3 text-xs`,
                  children: [
                    (0, $.jsxs)(`div`, {
                      className: `space-y-1`,
                      children: [
                        (0, $.jsx)(`label`, {
                          className: `font-bold text-slate-700 block`,
                          children: `归属 ID自增长 采集网站 *`,
                        }),
                        (0, $.jsx)(`select`, {
                          value: se,
                          onChange: (e) => U(e.target.value),
                          className: `w-full h-8.5 px-3 bg-white border border-slate-300 rounded-lg text-xs font-bold text-slate-800 outline-none focus:border-[#0066FF]`,
                          children: Ee.map((e) =>
                            (0, $.jsxs)(
                              `option`,
                              { value: e.id, children: [e.id, ` - `, e.name] },
                              e.id,
                            ),
                          ),
                        }),
                      ],
                    }),
                    (0, $.jsxs)(`div`, {
                      className: `space-y-1`,
                      children: [
                        (0, $.jsx)(`label`, {
                          className: `font-bold text-slate-700 block`,
                          children: `目标异常 ID / 流水号 *`,
                        }),
                        (0, $.jsx)(`input`, {
                          type: `text`,
                          value: H,
                          onChange: (e) => ae(e.target.value),
                          placeholder: `例如: 104819 / 20260928001`,
                          className: `w-full h-8.5 px-3 bg-white border border-slate-300 rounded-lg text-xs font-mono font-bold text-slate-900 outline-none focus:border-[#0066FF]`,
                        }),
                      ],
                    }),
                    (0, $.jsxs)(`div`, {
                      className: `space-y-1`,
                      children: [
                        (0, $.jsx)(`label`, {
                          className: `font-bold text-slate-700 block`,
                          children: `重试优先级`,
                        }),
                        (0, $.jsxs)(`select`, {
                          value: K,
                          onChange: (e) => ce(e.target.value),
                          className: `w-full h-8.5 px-3 bg-white border border-slate-300 rounded-lg text-xs font-semibold text-slate-800 outline-none focus:border-[#0066FF]`,
                          children: [
                            (0, $.jsx)(`option`, {
                              value: `high`,
                              children: `高优先级 (优先下发探测)`,
                            }),
                            (0, $.jsx)(`option`, {
                              value: `normal`,
                              children: `标准优先级`,
                            }),
                            (0, $.jsx)(`option`, {
                              value: `low`,
                              children: `低优先级 (排队探测)`,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, $.jsxs)(`div`, {
                      className: `space-y-1`,
                      children: [
                        (0, $.jsx)(`label`, {
                          className: `font-bold text-slate-700 block`,
                          children: `录入成因说明`,
                        }),
                        (0, $.jsx)(`input`, {
                          type: `text`,
                          value: W,
                          onChange: (e) => G(e.target.value),
                          placeholder: `人工排查发现空洞或漏采，手动录入重试库`,
                          className: `w-full h-8.5 px-3 bg-white border border-slate-300 rounded-lg text-xs text-slate-700 outline-none focus:border-[#0066FF]`,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, $.jsxs)(`div`, {
                  className: `flex items-center justify-end gap-2 pt-3 border-t border-slate-100`,
                  children: [
                    (0, $.jsx)(`button`, {
                      type: `button`,
                      onClick: () => ie(!1),
                      className: `px-3.5 py-1.5 bg-slate-100 hover:bg-slate-200 rounded-lg text-xs font-bold text-slate-700 cursor-pointer`,
                      children: `取消`,
                    }),
                    (0, $.jsxs)(`button`, {
                      type: `button`,
                      onClick: Xe,
                      className: `px-4 py-1.5 bg-[#0066FF] hover:bg-[#0052cc] text-white rounded-lg text-xs font-bold cursor-pointer shadow-2xs flex items-center gap-1`,
                      children: [
                        (0, $.jsx)(P, { className: `w-3.5 h-3.5` }),
                        (0, $.jsx)(`span`, { children: `确认录入` }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
      ],
    });
  },
  Vn = ({ services: e, onNavigateToService: t, onEditService: n }) => {
    let [r, i] = (0, C.useState)(`all`),
      [a, o] = (0, C.useState)(``),
      [s, c] = (0, C.useState)(`all`),
      [l, u] = (0, C.useState)(null),
      [d, f] = (0, C.useState)(null),
      [p, m] = (0, C.useState)({}),
      [h, g] = (0, C.useState)(null),
      _ = (e, t) => {
        (navigator.clipboard.writeText(e),
          u(t),
          setTimeout(() => u(null), 1800));
      },
      v = (e) => {
        (f(e),
          setTimeout(() => {
            let t = Math.floor(Math.random() * 18) + 12;
            (m((n) => ({
              ...n,
              [e]: { latency: t, time: new Date().toLocaleTimeString() },
            })),
              f(null));
          }, 600));
      },
      y = (0, C.useMemo)(
        () =>
          vt.map((t) => {
            let n = e.filter(
                (e) =>
                  bt(e).includes(t.ip) ||
                  e.nodeServer === t.code ||
                  e.nodeServer === t.ip,
              ),
              r = n.filter((e) => e.method === `deep`).length,
              i = n.filter((e) => e.method === `account`).length,
              a = `deep`;
            ((a =
              t.code === `node-bj-01` ||
              t.code === `node-sh-02` ||
              t.code === `node-wh-01` ||
              t.code === `node-bj-03`
                ? `deep`
                : `account`),
              r > i ? (a = `deep`) : i > r && (a = `account`));
            let o = a === `deep` ? `深度采集服务器` : `账号轮询服务器`,
              s =
                a === `deep`
                  ? {
                      badge: `bg-emerald-50 text-emerald-700 border-emerald-200`,
                      border: `border-emerald-200 hover:border-emerald-400`,
                      text: `text-emerald-700`,
                      bg: `bg-emerald-600`,
                      lightBg: `bg-emerald-50/50`,
                    }
                  : {
                      badge: `bg-amber-50 text-amber-700 border-amber-200`,
                      border: `border-amber-200 hover:border-amber-400`,
                      text: `text-amber-700`,
                      bg: `bg-amber-600`,
                      lightBg: `bg-amber-50/50`,
                    },
              c = new Set([t.ip]);
            n.forEach((e) => {
              let n = bt(e);
              (c.add(t.ip), n.forEach((e) => c.add(e)));
            });
            let l = parseInt(t.load) || 40,
              u = `${Math.round(l * 0.85 + 10)}%`,
              d = `${(l * 0.32 + 2.5).toFixed(1)} MB/s`,
              f = `${Math.round(l * 0.6 + 16)} / 64`,
              p = `${Math.round(18 + (l % 12))} ms`;
            return {
              ...t,
              category: a,
              categoryLabel: o,
              categoryTheme: s,
              boundServices: n,
              allIps: Array.from(c),
              memoryUsage: u,
              networkIO: d,
              threads: f,
              avgLatency: p,
              status: l > 60 ? `busy` : `online`,
            };
          }),
        [e],
      ),
      b = (0, C.useMemo)(
        () =>
          y.filter((e) => {
            if (
              (r !== `all` && e.category !== r) ||
              (s !== `all` && e.status !== s)
            )
              return !1;
            if (a.trim()) {
              let t = a.trim().toLowerCase(),
                n = e.code.toLowerCase().includes(t),
                r = e.name.toLowerCase().includes(t),
                i = e.allIps.some((e) => e.includes(t)),
                o = e.boundServices.some(
                  (e) =>
                    e.name.toLowerCase().includes(t) ||
                    e.id.toLowerCase().includes(t),
                );
              return n || r || i || o;
            }
            return !0;
          }),
        [y, r, s, a],
      ),
      x = (0, C.useMemo)(() => {
        let e = y.length,
          t = y.filter((e) => e.category === `deep`),
          n = y.filter((e) => e.category === `account`);
        return {
          totalServers: e,
          totalIps: new Set(y.flatMap((e) => e.allIps)).size,
          avgLoad: Math.round(
            y.reduce((e, t) => e + (parseInt(t.load) || 40), 0) / (e || 1),
          ),
          deepCount: t.length,
          deepServicesCount: t.reduce((e, t) => e + t.boundServices.length, 0),
          accountCount: n.length,
          accountServicesCount: n.reduce(
            (e, t) => e + t.boundServices.length,
            0,
          ),
        };
      }, [y]);
    return (0, $.jsxs)(`div`, {
      className: `flex-1 flex flex-col min-w-0 bg-[#F4F8FC] overflow-y-auto`,
      children: [
        (0, $.jsxs)(`div`, {
          className: `bg-white border-b border-slate-200/80 px-6 py-4`,
          children: [
            (0, $.jsxs)(`div`, {
              className: `flex flex-col md:flex-row md:items-center justify-between gap-3`,
              children: [
                (0, $.jsxs)(`div`, {
                  className: `flex items-center gap-3`,
                  children: [
                    (0, $.jsx)(`div`, {
                      className: `w-10 h-10 rounded-xl bg-gradient-to-tr from-[#0066FF] to-indigo-600 text-white flex items-center justify-center shadow-sm`,
                      children: (0, $.jsx)(He, { className: `w-5 h-5` }),
                    }),
                    (0, $.jsxs)(`div`, {
                      children: [
                        (0, $.jsxs)(`div`, {
                          className: `flex items-center gap-2`,
                          children: [
                            (0, $.jsx)(`h1`, {
                              className: `text-base font-extrabold text-slate-900 tracking-tight`,
                              children: `分类服务器 · 各采集类型拓扑看板`,
                            }),
                            (0, $.jsx)(`span`, {
                              className: `px-2 py-0.5 rounded text-[11px] font-bold bg-blue-50 text-[#0066FF] border border-blue-200`,
                              children: `分布式节点矩阵`,
                            }),
                          ],
                        }),
                        (0, $.jsxs)(`p`, {
                          className: `text-xs text-slate-500 mt-0.5`,
                          children: [
                            `实时透视 `,
                            (0, $.jsx)(`strong`, { children: `深度采集` }),
                            ` 与 `,
                            (0, $.jsx)(`strong`, { children: `账号轮询` }),
                            ` 各业务类型的节点服务器配置、IP 分配池及负载健康度`,
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, $.jsx)(`div`, {
                  className: `flex items-center gap-2`,
                  children: (0, $.jsxs)(`div`, {
                    className: `flex items-center gap-2 px-3 py-1.5 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-lg text-xs font-bold shadow-2xs`,
                    children: [
                      (0, $.jsx)(`span`, {
                        className: `w-2 h-2 rounded-full bg-emerald-500 animate-pulse`,
                      }),
                      (0, $.jsx)(`span`, {
                        children: `集群状态: 全节点 100% 在线`,
                      }),
                    ],
                  }),
                }),
              ],
            }),
            (0, $.jsxs)(`div`, {
              className: `grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4`,
              children: [
                (0, $.jsxs)(`div`, {
                  className: `bg-slate-50 border border-slate-200/80 rounded-xl p-3 flex flex-col justify-between shadow-2xs`,
                  children: [
                    (0, $.jsxs)(`div`, {
                      className: `flex items-center justify-between text-slate-500 text-xs`,
                      children: [
                        (0, $.jsx)(`span`, {
                          className: `font-semibold`,
                          children: `节点服务器总数`,
                        }),
                        (0, $.jsx)(_e, { className: `w-4 h-4 text-slate-400` }),
                      ],
                    }),
                    (0, $.jsxs)(`div`, {
                      className: `mt-1 flex items-baseline gap-1.5`,
                      children: [
                        (0, $.jsx)(`span`, {
                          className: `text-xl font-mono font-black text-slate-900`,
                          children: x.totalServers,
                        }),
                        (0, $.jsx)(`span`, {
                          className: `text-xs text-slate-500 font-medium`,
                          children: `台物理/虚拟节点`,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, $.jsxs)(`div`, {
                  className: `bg-slate-50 border border-slate-200/80 rounded-xl p-3 flex flex-col justify-between shadow-2xs`,
                  children: [
                    (0, $.jsxs)(`div`, {
                      className: `flex items-center justify-between text-slate-500 text-xs`,
                      children: [
                        (0, $.jsx)(`span`, {
                          className: `font-semibold`,
                          children: `活跃专享 IP 资源`,
                        }),
                        (0, $.jsx)(ge, { className: `w-4 h-4 text-blue-500` }),
                      ],
                    }),
                    (0, $.jsxs)(`div`, {
                      className: `mt-1 flex items-baseline gap-1.5`,
                      children: [
                        (0, $.jsx)(`span`, {
                          className: `text-xl font-mono font-black text-[#0066FF]`,
                          children: x.totalIps,
                        }),
                        (0, $.jsx)(`span`, {
                          className: `text-xs text-slate-500 font-medium`,
                          children: `个独立出口 IP`,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, $.jsxs)(`div`, {
                  className: `bg-slate-50 border border-slate-200/80 rounded-xl p-3 flex flex-col justify-between shadow-2xs`,
                  children: [
                    (0, $.jsxs)(`div`, {
                      className: `flex items-center justify-between text-slate-500 text-xs`,
                      children: [
                        (0, $.jsx)(`span`, {
                          className: `font-semibold`,
                          children: `集群平均 CPU 负载`,
                        }),
                        (0, $.jsx)(U, { className: `w-4 h-4 text-indigo-500` }),
                      ],
                    }),
                    (0, $.jsxs)(`div`, {
                      className: `mt-1 flex items-baseline gap-1.5`,
                      children: [
                        (0, $.jsxs)(`span`, {
                          className: `text-xl font-mono font-black text-slate-800`,
                          children: [x.avgLoad, `%`],
                        }),
                        (0, $.jsx)(`span`, {
                          className: `text-xs text-emerald-600 font-bold`,
                          children: `负载均衡稳定`,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, $.jsxs)(`div`, {
                  className: `bg-slate-50 border border-slate-200/80 rounded-xl p-3 flex flex-col justify-between shadow-2xs`,
                  children: [
                    (0, $.jsxs)(`div`, {
                      className: `flex items-center justify-between text-slate-500 text-xs`,
                      children: [
                        (0, $.jsx)(`span`, {
                          className: `font-semibold`,
                          children: `承载采集服务任务`,
                        }),
                        (0, $.jsx)(Ce, {
                          className: `w-4 h-4 text-purple-500`,
                        }),
                      ],
                    }),
                    (0, $.jsxs)(`div`, {
                      className: `mt-1 flex items-baseline gap-1.5`,
                      children: [
                        (0, $.jsx)(`span`, {
                          className: `text-xl font-mono font-black text-purple-700`,
                          children: e.length,
                        }),
                        (0, $.jsx)(`span`, {
                          className: `text-xs text-slate-500 font-medium`,
                          children: `个独立部署服务`,
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        (0, $.jsxs)(`div`, {
          className: `px-6 py-4 space-y-4`,
          children: [
            (0, $.jsxs)(`div`, {
              className: `flex flex-col md:flex-row md:items-center justify-between gap-3 bg-white p-3 rounded-xl border border-slate-200/80 shadow-2xs`,
              children: [
                (0, $.jsxs)(`div`, {
                  className: `flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0`,
                  children: [
                    (0, $.jsxs)(`button`, {
                      type: `button`,
                      onClick: () => i(`all`),
                      className: `px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${r === `all` ? `bg-[#1e376b] text-white shadow-2xs` : `bg-slate-100 text-slate-600 hover:bg-slate-200`}`,
                      children: [
                        (0, $.jsx)(He, { className: `w-3.5 h-3.5` }),
                        (0, $.jsxs)(`span`, {
                          children: [`全部服务器集群 (`, x.totalServers, `)`],
                        }),
                      ],
                    }),
                    (0, $.jsxs)(`button`, {
                      type: `button`,
                      onClick: () => i(`deep`),
                      className: `px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${r === `deep` ? `bg-emerald-600 text-white shadow-2xs ring-2 ring-emerald-300` : `bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200/80`}`,
                      children: [
                        (0, $.jsx)(ae, {
                          className: `w-3.5 h-3.5 text-emerald-600`,
                        }),
                        (0, $.jsxs)(`span`, {
                          children: [`深度采集集群 (`, x.deepCount, `)`],
                        }),
                        (0, $.jsxs)(`span`, {
                          className: `text-[10px] px-1.5 py-0.2 rounded-full bg-white/30`,
                          children: [x.deepServicesCount, ` 任务`],
                        }),
                      ],
                    }),
                    (0, $.jsxs)(`button`, {
                      type: `button`,
                      onClick: () => i(`account`),
                      className: `px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${r === `account` ? `bg-amber-600 text-white shadow-2xs ring-2 ring-amber-300` : `bg-amber-50 text-amber-700 hover:bg-amber-100 border border-amber-200/80`}`,
                      children: [
                        (0, $.jsx)(ut, {
                          className: `w-3.5 h-3.5 text-amber-600`,
                        }),
                        (0, $.jsxs)(`span`, {
                          children: [`账号轮询集群 (`, x.accountCount, `)`],
                        }),
                        (0, $.jsxs)(`span`, {
                          className: `text-[10px] px-1.5 py-0.2 rounded-full bg-white/30`,
                          children: [x.accountServicesCount, ` 任务`],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, $.jsxs)(`div`, {
                  className: `flex items-center gap-2`,
                  children: [
                    (0, $.jsxs)(`div`, {
                      className: `relative w-full sm:w-64`,
                      children: [
                        (0, $.jsx)(Be, {
                          className: `w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none`,
                        }),
                        (0, $.jsx)(`input`, {
                          type: `text`,
                          value: a,
                          onChange: (e) => o(e.target.value),
                          placeholder: `搜索节点代号 / IP / 关联服务...`,
                          className: `w-full h-8 pl-8 pr-3 text-xs bg-slate-50 border border-slate-200 rounded-lg outline-none focus:border-[#0066FF] focus:bg-white transition-all font-mono`,
                        }),
                      ],
                    }),
                    (0, $.jsxs)(`select`, {
                      value: s,
                      onChange: (e) => c(e.target.value),
                      className: `h-8 px-2.5 text-xs bg-slate-50 border border-slate-200 rounded-lg outline-none cursor-pointer font-medium text-slate-700`,
                      children: [
                        (0, $.jsx)(`option`, {
                          value: `all`,
                          children: `全部负载状态`,
                        }),
                        (0, $.jsx)(`option`, {
                          value: `online`,
                          children: `正常 (Online)`,
                        }),
                        (0, $.jsx)(`option`, {
                          value: `busy`,
                          children: `高负荷 (Busy)`,
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, $.jsx)(`div`, {
              className: `grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4`,
              children: b.map((e) => {
                let n = d === e.code,
                  r = p[e.code];
                return (0, $.jsxs)(
                  `div`,
                  {
                    className: `bg-white rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-blue-300 transition-all overflow-hidden flex flex-col justify-between group`,
                    children: [
                      (0, $.jsx)(`div`, {
                        className: `p-4 border-b border-slate-100 bg-gradient-to-b from-slate-50/70 to-white`,
                        children: (0, $.jsxs)(`div`, {
                          className: `flex items-start justify-between gap-2`,
                          children: [
                            (0, $.jsxs)(`div`, {
                              className: `flex items-center gap-2.5`,
                              children: [
                                (0, $.jsx)(`div`, {
                                  className: `w-9 h-9 rounded-xl bg-slate-900 text-white flex items-center justify-center font-mono font-bold text-xs shadow-2xs shrink-0`,
                                  children: e.code
                                    .replace(`node-`, ``)
                                    .toUpperCase(),
                                }),
                                (0, $.jsxs)(`div`, {
                                  children: [
                                    (0, $.jsx)(`div`, {
                                      className: `flex items-center gap-1.5`,
                                      children: (0, $.jsx)(`h3`, {
                                        className: `text-sm font-bold text-slate-900 group-hover:text-[#0066FF] transition-colors`,
                                        children: e.name,
                                      }),
                                    }),
                                    (0, $.jsxs)(`div`, {
                                      className: `text-[11px] font-mono text-slate-400 mt-0.5 flex items-center gap-1`,
                                      children: [
                                        (0, $.jsx)(`span`, {
                                          children: e.code,
                                        }),
                                        (0, $.jsx)(`span`, { children: `·` }),
                                        (0, $.jsx)(`span`, {
                                          children: e.region,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, $.jsxs)(`div`, {
                              className: `flex flex-col items-end gap-1`,
                              children: [
                                (0, $.jsx)(`span`, {
                                  className: `px-2 py-0.5 rounded text-[10.5px] font-bold border ${e.categoryTheme.badge}`,
                                  children: e.categoryLabel.replace(
                                    `服务器`,
                                    ``,
                                  ),
                                }),
                                (0, $.jsx)(`span`, {
                                  className: `text-[10px] font-mono text-slate-400`,
                                  children: e.roleLabel,
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      (0, $.jsxs)(`div`, {
                        className: `p-4 space-y-3 flex-1 text-xs`,
                        children: [
                          (0, $.jsxs)(`div`, {
                            className: `space-y-1`,
                            children: [
                              (0, $.jsxs)(`div`, {
                                className: `flex items-center justify-between text-slate-500 text-[11px] font-medium`,
                                children: [
                                  (0, $.jsxs)(`span`, {
                                    children: [
                                      `分配出口 IP (`,
                                      e.allIps.length,
                                      ` 个)`,
                                    ],
                                  }),
                                  (0, $.jsxs)(`span`, {
                                    className: `text-slate-400 font-mono`,
                                    children: [`主出口: `, e.ip],
                                  }),
                                ],
                              }),
                              (0, $.jsx)(`div`, {
                                className: `flex flex-wrap gap-1.5`,
                                children: e.allIps.map((t, n) =>
                                  (0, $.jsxs)(
                                    `div`,
                                    {
                                      onClick: () => _(t, `${e.code}-${t}`),
                                      className: `inline-flex items-center gap-1 font-mono text-[11px] px-2 py-0.5 rounded border transition-all cursor-pointer ${n === 0 ? `bg-blue-50/80 text-[#0066FF] border-blue-200 font-bold` : `bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200`}`,
                                      title: `点击快速复制 IP`,
                                      children: [
                                        (0, $.jsx)(`span`, {
                                          className: `w-1.5 h-1.5 rounded-full ${n === 0 ? `bg-[#0066FF]` : `bg-slate-400`}`,
                                        }),
                                        (0, $.jsx)(`span`, { children: t }),
                                        l === `${e.code}-${t}`
                                          ? (0, $.jsx)(P, {
                                              className: `w-2.5 h-2.5 text-emerald-600 ml-0.5`,
                                            })
                                          : (0, $.jsx)(oe, {
                                              className: `w-2.5 h-2.5 opacity-40 hover:opacity-100 ml-0.5`,
                                            }),
                                      ],
                                    },
                                    t,
                                  ),
                                ),
                              }),
                            ],
                          }),
                          (0, $.jsxs)(`div`, {
                            className: `grid grid-cols-3 gap-2 pt-1 border-t border-slate-100 text-center font-mono`,
                            children: [
                              (0, $.jsxs)(`div`, {
                                className: `bg-slate-50 p-2 rounded-lg border border-slate-100`,
                                children: [
                                  (0, $.jsx)(`div`, {
                                    className: `text-[10px] text-slate-400 font-sans font-medium`,
                                    children: `CPU 负载`,
                                  }),
                                  (0, $.jsx)(`div`, {
                                    className: `font-bold text-slate-800 text-[13px] mt-0.5`,
                                    children: e.load,
                                  }),
                                ],
                              }),
                              (0, $.jsxs)(`div`, {
                                className: `bg-slate-50 p-2 rounded-lg border border-slate-100`,
                                children: [
                                  (0, $.jsx)(`div`, {
                                    className: `text-[10px] text-slate-400 font-sans font-medium`,
                                    children: `内存利用率`,
                                  }),
                                  (0, $.jsx)(`div`, {
                                    className: `font-bold text-slate-800 text-[13px] mt-0.5`,
                                    children: e.memoryUsage,
                                  }),
                                ],
                              }),
                              (0, $.jsxs)(`div`, {
                                className: `bg-slate-50 p-2 rounded-lg border border-slate-100`,
                                children: [
                                  (0, $.jsx)(`div`, {
                                    className: `text-[10px] text-slate-400 font-sans font-medium`,
                                    children: `吞吐带宽`,
                                  }),
                                  (0, $.jsx)(`div`, {
                                    className: `font-bold text-slate-800 text-[13px] mt-0.5`,
                                    children: e.networkIO,
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, $.jsxs)(`div`, {
                            className: `space-y-1.5 pt-1`,
                            children: [
                              (0, $.jsxs)(`div`, {
                                className: `flex items-center justify-between text-slate-500 text-[11px] font-medium`,
                                children: [
                                  (0, $.jsxs)(`span`, {
                                    children: [
                                      `承载采集任务 (`,
                                      e.boundServices.length,
                                      `)`,
                                    ],
                                  }),
                                  (0, $.jsxs)(`span`, {
                                    className: `text-[10.5px] text-slate-400`,
                                    children: [`并发线程: `, e.threads],
                                  }),
                                ],
                              }),
                              (0, $.jsx)(`div`, {
                                className: `space-y-1 max-h-24 overflow-y-auto pr-1`,
                                children:
                                  e.boundServices.length === 0
                                    ? (0, $.jsx)(`div`, {
                                        className: `text-[11px] text-slate-400 italic py-1`,
                                        children: `当前暂无直接分配的抓取任务 (就绪热备中)`,
                                      })
                                    : e.boundServices.map((e) =>
                                        (0, $.jsxs)(
                                          `div`,
                                          {
                                            onClick: () =>
                                              t && t(e.id, e.method),
                                            className: `flex items-center justify-between p-1.5 rounded-lg bg-slate-50 hover:bg-blue-50/70 border border-slate-100 hover:border-blue-200 transition-all cursor-pointer group/svc`,
                                            children: [
                                              (0, $.jsxs)(`div`, {
                                                className: `flex items-center gap-1.5 truncate`,
                                                children: [
                                                  (0, $.jsx)(`span`, {
                                                    className: `font-mono text-[10px] font-bold text-slate-500 bg-white px-1.5 py-0.2 rounded border border-slate-200`,
                                                    children: e.id,
                                                  }),
                                                  (0, $.jsx)(`span`, {
                                                    className: `font-semibold text-slate-800 group-hover/svc:text-[#0066FF] truncate text-xs`,
                                                    children: e.name,
                                                  }),
                                                ],
                                              }),
                                              (0, $.jsxs)(`span`, {
                                                className: `text-[10px] font-mono text-emerald-600 font-bold shrink-0`,
                                                children: [
                                                  `+`,
                                                  e.storageToday.toLocaleString(),
                                                ],
                                              }),
                                            ],
                                          },
                                          e.id,
                                        ),
                                      ),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, $.jsxs)(`div`, {
                        className: `px-4 py-2.5 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between text-xs`,
                        children: [
                          (0, $.jsxs)(`div`, {
                            className: `flex items-center gap-2`,
                            children: [
                              (0, $.jsxs)(`button`, {
                                type: `button`,
                                onClick: () => v(e.code),
                                disabled: n,
                                className: `px-2.5 py-1 rounded-md bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 font-bold transition-all cursor-pointer flex items-center gap-1 shadow-2xs disabled:opacity-50`,
                                children: [
                                  (0, $.jsx)(E, {
                                    className: `w-3 h-3 text-blue-600 ${n ? `animate-spin` : ``}`,
                                  }),
                                  (0, $.jsx)(`span`, {
                                    children: n ? `测速中...` : `Ping 测速`,
                                  }),
                                ],
                              }),
                              r &&
                                (0, $.jsxs)(`span`, {
                                  className: `font-mono text-[11px] font-bold text-emerald-600 flex items-center gap-0.5`,
                                  children: [
                                    (0, $.jsx)(B, { className: `w-3 h-3` }),
                                    (0, $.jsxs)(`span`, {
                                      children: [r.latency, `ms`],
                                    }),
                                  ],
                                }),
                            ],
                          }),
                          (0, $.jsxs)(`button`, {
                            type: `button`,
                            onClick: () => g(e),
                            className: `text-[#0066FF] hover:text-[#0052cc] font-bold inline-flex items-center gap-0.5 cursor-pointer transition-colors`,
                            children: [
                              (0, $.jsx)(`span`, { children: `节点拓扑详情` }),
                              (0, $.jsx)(L, { className: `w-3.5 h-3.5` }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  },
                  e.code,
                );
              }),
            }),
          ],
        }),
        h &&
          (0, $.jsx)(`div`, {
            className: `fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4`,
            children: (0, $.jsxs)(`div`, {
              className: `bg-white rounded-2xl border border-slate-200 shadow-2xl max-w-2xl w-full p-6 space-y-4 max-h-[90vh] flex flex-col animate-in fade-in zoom-in-95`,
              children: [
                (0, $.jsxs)(`div`, {
                  className: `flex items-center justify-between pb-3 border-b border-slate-100`,
                  children: [
                    (0, $.jsxs)(`div`, {
                      className: `flex items-center gap-3`,
                      children: [
                        (0, $.jsx)(`div`, {
                          className: `w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center font-mono font-bold text-sm`,
                          children: h.code.replace(`node-`, ``).toUpperCase(),
                        }),
                        (0, $.jsxs)(`div`, {
                          children: [
                            (0, $.jsxs)(`h3`, {
                              className: `font-extrabold text-slate-900 text-base flex items-center gap-2`,
                              children: [
                                (0, $.jsx)(`span`, { children: h.name }),
                                (0, $.jsx)(`span`, {
                                  className: `text-xs px-2 py-0.5 rounded font-bold border ${h.categoryTheme.badge}`,
                                  children: h.categoryLabel,
                                }),
                              ],
                            }),
                            (0, $.jsxs)(`div`, {
                              className: `text-xs text-slate-400 font-mono`,
                              children: [
                                `代号: `,
                                h.code,
                                ` · 可用区: `,
                                h.region,
                                ` · 角色: `,
                                h.roleLabel,
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, $.jsx)(`button`, {
                      type: `button`,
                      onClick: () => g(null),
                      className: `p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 cursor-pointer`,
                      children: (0, $.jsx)(Q, { className: `w-5 h-5` }),
                    }),
                  ],
                }),
                (0, $.jsxs)(`div`, {
                  className: `space-y-4 overflow-y-auto pr-1 text-xs`,
                  children: [
                    (0, $.jsxs)(`div`, {
                      className: `grid grid-cols-4 gap-2.5 font-mono`,
                      children: [
                        (0, $.jsxs)(`div`, {
                          className: `p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-center`,
                          children: [
                            (0, $.jsx)(`span`, {
                              className: `text-[11px] text-slate-500 font-sans block`,
                              children: `CPU 负载`,
                            }),
                            (0, $.jsx)(`strong`, {
                              className: `text-base font-black text-slate-900 mt-1 block`,
                              children: h.load,
                            }),
                          ],
                        }),
                        (0, $.jsxs)(`div`, {
                          className: `p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-center`,
                          children: [
                            (0, $.jsx)(`span`, {
                              className: `text-[11px] text-slate-500 font-sans block`,
                              children: `内存利用率`,
                            }),
                            (0, $.jsx)(`strong`, {
                              className: `text-base font-black text-slate-900 mt-1 block`,
                              children: h.memoryUsage,
                            }),
                          ],
                        }),
                        (0, $.jsxs)(`div`, {
                          className: `p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-center`,
                          children: [
                            (0, $.jsx)(`span`, {
                              className: `text-[11px] text-slate-500 font-sans block`,
                              children: `吞吐带宽`,
                            }),
                            (0, $.jsx)(`strong`, {
                              className: `text-base font-black text-[#0066FF] mt-1 block`,
                              children: h.networkIO,
                            }),
                          ],
                        }),
                        (0, $.jsxs)(`div`, {
                          className: `p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-center`,
                          children: [
                            (0, $.jsx)(`span`, {
                              className: `text-[11px] text-slate-500 font-sans block`,
                              children: `平均延迟`,
                            }),
                            (0, $.jsx)(`strong`, {
                              className: `text-base font-black text-emerald-600 mt-1 block`,
                              children: h.avgLatency,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, $.jsxs)(`div`, {
                      className: `p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-2`,
                      children: [
                        (0, $.jsx)(`span`, {
                          className: `font-bold text-slate-800 block text-xs`,
                          children: `分配与协同 IP 清单:`,
                        }),
                        (0, $.jsx)(`div`, {
                          className: `grid grid-cols-1 sm:grid-cols-2 gap-2`,
                          children: h.allIps.map((e, t) =>
                            (0, $.jsxs)(
                              `div`,
                              {
                                className: `flex items-center justify-between p-2 rounded-lg bg-white border border-slate-200 font-mono text-xs`,
                                children: [
                                  (0, $.jsxs)(`div`, {
                                    className: `flex items-center gap-2`,
                                    children: [
                                      (0, $.jsx)(`span`, {
                                        className: `w-2 h-2 rounded-full ${t === 0 ? `bg-[#0066FF]` : `bg-slate-400`}`,
                                      }),
                                      (0, $.jsx)(`span`, {
                                        className: `font-bold text-slate-900`,
                                        children: e,
                                      }),
                                      t === 0 &&
                                        (0, $.jsx)(`span`, {
                                          className: `text-[10px] text-[#0066FF] font-sans font-bold`,
                                          children: `(主出口)`,
                                        }),
                                    ],
                                  }),
                                  (0, $.jsx)(`button`, {
                                    type: `button`,
                                    onClick: () => _(e, `modal-${e}`),
                                    className: `text-slate-400 hover:text-slate-700 p-1 cursor-pointer`,
                                    title: `复制 IP`,
                                    children:
                                      l === `modal-${e}`
                                        ? (0, $.jsx)(P, {
                                            className: `w-3.5 h-3.5 text-emerald-600`,
                                          })
                                        : (0, $.jsx)(oe, {
                                            className: `w-3.5 h-3.5`,
                                          }),
                                  }),
                                ],
                              },
                              e,
                            ),
                          ),
                        }),
                      ],
                    }),
                    (0, $.jsxs)(`div`, {
                      className: `space-y-2`,
                      children: [
                        (0, $.jsxs)(`span`, {
                          className: `font-bold text-slate-800 block text-xs`,
                          children: [
                            `当前节点承载的采集任务 (`,
                            h.boundServices.length,
                            `):`,
                          ],
                        }),
                        (0, $.jsx)(`div`, {
                          className: `divide-y divide-slate-100 border border-slate-200 rounded-xl overflow-hidden`,
                          children: h.boundServices.map((e) =>
                            (0, $.jsxs)(
                              `div`,
                              {
                                className: `p-3 bg-white hover:bg-slate-50 flex items-center justify-between transition-colors`,
                                children: [
                                  (0, $.jsxs)(`div`, {
                                    children: [
                                      (0, $.jsxs)(`div`, {
                                        className: `flex items-center gap-2 font-bold text-slate-900 text-xs`,
                                        children: [
                                          (0, $.jsx)(`span`, {
                                            className: `font-mono text-purple-700 bg-purple-50 px-1.5 py-0.2 rounded border border-purple-200 text-[11px]`,
                                            children: e.id,
                                          }),
                                          (0, $.jsx)(`span`, {
                                            children: e.name,
                                          }),
                                        ],
                                      }),
                                      (0, $.jsxs)(`div`, {
                                        className: `text-[11px] font-mono text-slate-400 mt-0.5`,
                                        children: [
                                          e.domain || e.url,
                                          ` · 频次: `,
                                          e.freq || `30min`,
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, $.jsxs)(`div`, {
                                    className: `flex items-center gap-3`,
                                    children: [
                                      (0, $.jsxs)(`span`, {
                                        className: `font-mono font-bold text-emerald-600 text-xs`,
                                        children: [
                                          `+`,
                                          e.storageToday.toLocaleString(),
                                          ` 条`,
                                        ],
                                      }),
                                      n &&
                                        (0, $.jsx)(`button`, {
                                          type: `button`,
                                          onClick: () => {
                                            (g(null), n(e));
                                          },
                                          className: `px-2 py-1 rounded bg-slate-100 hover:bg-[#0066FF] hover:text-white text-slate-700 font-bold transition-all text-xs cursor-pointer`,
                                          children: `配置`,
                                        }),
                                    ],
                                  }),
                                ],
                              },
                              e.id,
                            ),
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, $.jsx)(`div`, {
                  className: `flex items-center justify-end pt-3 border-t border-slate-100 shrink-0`,
                  children: (0, $.jsx)(`button`, {
                    type: `button`,
                    onClick: () => g(null),
                    className: `px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg text-xs font-bold text-slate-700 cursor-pointer`,
                    children: `关闭`,
                  }),
                }),
              ],
            }),
          }),
      ],
    });
  },
  Hn = ({ toasts: e, onRemove: t }) =>
    (0, $.jsx)(`div`, {
      className: `fixed top-5 right-5 z-[100] flex flex-col gap-2 pointer-events-none`,
      children: e.map((e) =>
        (0, $.jsxs)(
          `div`,
          {
            onClick: () => t(e.id),
            className: `pointer-events-auto flex items-center gap-2 px-4 py-2.5 rounded-lg shadow-lg text-white text-[12.5px] font-bold cursor-pointer transition-all animate-in slide-in-from-right duration-200 ${e.type === `success` ? `bg-emerald-600` : e.type === `error` ? `bg-red-600` : e.type === `warning` ? `bg-amber-600` : `bg-[#0284c7]`}`,
            children: [
              e.type === `success` &&
                (0, $.jsx)(B, { className: `w-4 h-4 shrink-0` }),
              e.type === `error` &&
                (0, $.jsx)(z, { className: `w-4 h-4 shrink-0` }),
              e.type === `warning` &&
                (0, $.jsx)(ct, { className: `w-4 h-4 shrink-0` }),
              e.type === `info` &&
                (0, $.jsx)(be, { className: `w-4 h-4 shrink-0` }),
              (0, $.jsx)(`span`, { children: e.message }),
            ],
          },
          e.id,
        ),
      ),
    });
function Un() {
  let [e, t] = (0, C.useState)(`auto`),
    [n, r] = (0, C.useState)(wt),
    [i, a] = (0, C.useState)(Et),
    [o, s] = (0, C.useState)(Tt),
    [c, l] = (0, C.useState)(Dt),
    [u, d] = (0, C.useState)(Nt),
    [f, p] = (0, C.useState)(Ft),
    [m, h] = (0, C.useState)(Pt),
    [g, _] = (0, C.useState)(It),
    [v, y] = (0, C.useState)(Lt),
    [b, x] = (0, C.useState)(Rt),
    [S, w] = (0, C.useState)(zt),
    [T, E] = (0, C.useState)(Bt),
    [D, O] = (0, C.useState)(Vt),
    [deepWebsites, setDeepWebsites] = (0, C.useState)(defaultDeepLedgerWebsites),
    [selectedDeepServiceFilter, setSelectedDeepServiceFilter] = (0, C.useState)('all'),
    [k, A] = (0, C.useState)(null),
    [j, ee] = (0, C.useState)(null),
    [M, N] = (0, C.useState)(Ut),
    [P, F] = (0, C.useState)(Wt),
    [I, L] = (0, C.useState)(Gt),
    [R, te] = (0, C.useState)(null),
    [z, B] = (0, C.useState)(qt),
    [ne, V] = (0, C.useState)(Jt),
    [re, ie] = (0, C.useState)(Kt),
    [H, oe] = (0, C.useState)(null),
    [se, U] = (0, C.useState)([]),
    W = (e, t = `info`) => {
      let n = Date.now().toString();
      U((r) => [...r, { id: n, message: e, type: t }]);
    },
    G = (e) => {
      U((t) => t.filter((t) => t.id !== e));
    },
    K = {
      auto: {
        title: `ID自增长采集`,
        subTitle: `针对具有自增ID或规律流水号站点的增量步长探测、连续自增与断点续采`,
        icon: st,
        themeColor: `purple`,
        badgeText: `连续自增长探测模式`,
        bgClass: `bg-purple-50 border-purple-200 text-purple-700`,
        tagline: `步长探测 · 空洞容错 · 游标断点续采`,
        primaryActionText: `自增参数模板`,
      },
      plate: {
        title: `板块轮询采集`,
        subTitle: `针对新闻栏目、政策专栏、分类频道的两段式高频增量轮巡与分批并发调度`,
        icon: Ie,
        themeColor: `blue`,
        badgeText: `分类两段式轮巡模式`,
        bgClass: `bg-blue-50 border-blue-200 text-[#0066FF]`,
        tagline: `两段式抓取 · 分级轮巡 · 频次调优`,
        primaryActionText: `板块轮巡参数`,
      },
      deep: {
        title: `深度采集`,
        subTitle: `针对全站多层级链接递归下钻、目录树蔓延爬取与全量详情解析的深度调度`,
        icon: ae,
        themeColor: `emerald`,
        badgeText: `全站多层级递归模式`,
        bgClass: `bg-emerald-50 border-emerald-200 text-emerald-700`,
        tagline: `深度下钻 · URL去重 · DOM智能抽取`,
        primaryActionText: `深度策略配置`,
      },
      account: {
        title: `账号轮询采集`,
        subTitle: `针对需登录态鉴权、Cookie/Token池轮换、高频反爬风控站点的多账号负载均衡轮巡与保活调度`,
        icon: ut,
        themeColor: `amber`,
        badgeText: `多账号凭证轮换模式`,
        bgClass: `bg-amber-50 border-amber-200 text-amber-700`,
        tagline: `会话池保活 · Cookie自动轮换 · 熔断切换 · 频控降级`,
        primaryActionText: `账号池策略配置`,
      },
      keyword: {
        title: `关键词轮询采集`,
        subTitle: `覆盖火山（抖音、头条）、小红书、知乎、微博、爱奇艺、哔哩哔哩、好看视频、搜狐视频、优酷等社交平台轮询关键词与热点检索`,
        icon: ve,
        themeColor: `rose`,
        badgeText: `主流社媒关键词矩阵轮询`,
        bgClass: `bg-rose-50 border-rose-200 text-rose-700`,
        tagline: `9大主流社媒 · 矩阵词库 · 智能频控 · 实时成果入库`,
        primaryActionText: `关键词矩阵与调度`,
      },
    },
    ce = ((e) =>
      e === `auto` || e === `auto-retry`
        ? `auto`
        : e === `plate`
          ? `plate`
          : e === `deep` || e === `deep-dashboard` || e === `deep-ledger`
            ? `deep`
            : e === `account` || e.startsWith(`account-`)
              ? `account`
              : e === `keyword` || e.startsWith(`keyword-`)
                ? `keyword`
                : `auto`)(e),
    q = K[ce],
    le = (e, t) =>
      t === `auto`
        ? Qt(e.method)
        : t === `plate`
          ? Zt(e.method)
          : t === `deep`
            ? Xt(e.method)
            : t === `account`
              ? $t(e.method)
              : t === `keyword` && en(e.method),
    J = {
      auto: n.filter((e) => Qt(e.method)).length,
      plate: n.filter((e) => Zt(e.method)).length,
      deep: n.filter((e) => Xt(e.method)).length,
      account: n.filter((e) => $t(e.method)).length,
      keyword: n.filter((e) => en(e.method)).length,
      follow: 10,
      retry: f.length,
      servers: 8,
      accountPool: g.length,
      accountLedger: `127.8万`,
      accountSla: `99.7万`,
      keywordMatrix: M.length,
      keywordResults: `${I.length}条`,
      volcanoKeywords: z.length,
      volcanoPushes: `${ne.length}条`,
    },
    ue = n.filter((e) => le(e, ce)),
    [Y, de] = (0, C.useState)({
      svcName: ``,
      embedName: ``,
      freq: ``,
      method: ``,
      status: ``,
      owner: ``,
      onlyAbnormal: !1,
      onlyRecent: !1,
    }),
    [fe, pe] = (0, C.useState)(null),
    [me, he] = (0, C.useState)(!1),
    [ge, _e] = (0, C.useState)(null),
    [ye, be] = (0, C.useState)(!1),
    [xe, Se] = (0, C.useState)(null),
    [we, Te] = (0, C.useState)(!1),
    [Ee, X] = (0, C.useState)(null),
    [De, Oe] = (0, C.useState)(!1),
    [ke, Ae] = (0, C.useState)(null),
    [je, Me] = (0, C.useState)(!1),
    [Ne, Pe] = (0, C.useState)(null),
    [Re, ze] = (0, C.useState)(!1),
    [Z, Be] = (0, C.useState)(null),
    [Ve, He] = (0, C.useState)(!1),
    [Ue, We] = (0, C.useState)(!1),
    [Ge, Ke] = (0, C.useState)(`kuai`),
    [qe, Je] = (0, C.useState)(null),
    [Ye, Xe] = (0, C.useState)(!1),
    [Ze, Qe] = (0, C.useState)(null),
    [$e, et] = (0, C.useState)(!1),
    [tt, nt] = (0, C.useState)(!1),
    rt = (e) => {
      (pe(e), he(!0));
    },
    handleAddService = (methodOverride) => {
      let maxNum = n.reduce((acc, s) => {
        let num = parseInt((s.id || '').replace(/\D/g, ''), 10);
        return !isNaN(num) && num > acc ? num : acc;
      }, 21);
      let newId = `SVC-P${String(maxNum + 1).padStart(3, '0')}`;
      let m = methodOverride || (ce === 'deep' ? 'deep' : ce === 'plate' ? 'plate' : ce === 'account' ? 'account' : ce === 'keyword' ? 'keyword' : 'auto');
      let defaultFreq = m === 'deep' ? '10min' : m === 'plate' ? '15min' : m === 'account' ? '10min' : '1h';
      let defaultName = m === 'deep' ? `深度采集 · 自定义高频服务 (${defaultFreq}/轮)` : m === 'auto' ? `新增自增长扫描服务-${newId}` : m === 'plate' ? `新增板块轮询服务-${newId}` : m === 'account' ? `新增账号轮询服务-${newId}` : `新增社媒关键词服务-${newId}`;
      let newSvc = {
        isNew: true,
        id: newId,
        name: defaultName,
        method: m,
        freq: defaultFreq,
        source: '—',
        lastCollectTime: '待启动',
        updateTime: new Date().toISOString().replace('T', ' ').substring(0, 16),
        status: 'normal',
        owner: 'huyan',
        ownerName: '胡俨',
        storageToday: 0,
        storageTotal: 0,
        throughput: '0 条/h',
        successRate: '100.0%',
        domain: 'www.example.com',
        url: m === 'auto' ? 'https://www.example.com/item/{id}.html' : 'https://www.example.com/news',
        nodeServer: 'node-bj-01',
        nodeIps: ['10.12.8.21']
      };
      pe(newSvc);
      he(true);
    },
    it = (e) => {
      if (e.isNew) {
        let finalSvc = { ...e, isNew: undefined };
        r((t) => [finalSvc, ...t]);
        if (e.method === 'deep') {
          l((prev) => ({
            ...prev,
            [e.id]: {
              svcId: e.id,
              siteName: e.name,
              maxDepth: 3,
              traversalStrategy: 'bfs',
              renderEngine: 'playwright',
              urlRules: [{ pattern: '.*', action: 'allow' }]
            }
          }));
        }
        W(`已成功创建并部署全新采集服务【${e.name}】（ID: ${e.id}）！`, `success`);
      } else {
        r((t) => t.map((t) => (t.id === e.id ? e : t)));
        W(`已成功保存服务【${e.name}】的配置信息`, `success`);
      }
    },
    at = (e) => {
      (_e(e), be(!0));
    },
    ot = (e) => {
      (a((t) => ({ ...t, [e.svcId]: e })),
        W(`已保存【${e.siteName}】的ID自增规则与连续步长参数！`, `success`));
    },
    ct = (e) => {
      (Se(e), Te(!0));
    },
    lt = (e) => {
      (s((t) => ({ ...t, [e.svcId]: e })),
        W(`已成功保存【${e.siteName}】板块轮巡调度配置！`, `success`));
    },
    dt = (e) => {
      (X(e), Oe(!0));
    },
    ft = (e) => {
      (l((t) => ({ ...t, [e.svcId]: e })),
        W(`已成功保存【${e.siteName}】深度采集策略与下钻规则！`, `success`));
    },
    Q = (e) => {
      (Ae(e), Me(!0));
    },
    pt = (e) => {
      (y((t) => ({ ...t, [e.svcId]: e })),
        W(`已成功保存【${e.siteName}】账号轮询与熔断降级策略！`, `success`));
    },
    mt = (e) => {
      (Pe(e), ze(!0));
    },
    ht = (e) => {
      (Be(e), He(!0));
    },
    gt = (e) => {
      (F((t) => ({ ...t, [e.svcId]: e })),
        W(
          `已成功更新【${e.siteName}】社媒关键词轮询检索与频控配置！`,
          `success`,
        ));
    },
    _t = (e) => {
      (r((t) =>
        t.map((t) => {
          if (t.id === e.id) {
            let e = t.status === `paused` ? `normal` : `paused`;
            return { ...t, status: e };
          }
          return t;
        }),
      ),
        W(
          e.status === `paused`
            ? `已恢复服务【${e.name}】的自动调度`
            : `已暂停服务【${e.name}】的调度`,
          e.status === `paused` ? `success` : `warning`,
        ));
    },
    vt = (e) => {
      (r((t) =>
        t.map((t) =>
          t.id === e.id
            ? {
                ...t,
                storageToday:
                  (t.storageToday || 0) + Math.floor(Math.random() * 20 + 5),
                lastCollectTime: `刚刚`,
              }
            : t,
        ),
      ),
        W(`已对【${e.name}】下发即时采集任务指令`, `info`));
    },
    yt = (e) => {
      (Je(e), Xe(!0));
    },
    bt = (e) => {
      (Qe(e), et(!0));
    },
    xt = (e) => {
      (d((t) => ({ ...t, [e.svcId]: e })),
        W(`已成功保存【${e.siteName}】数据抽取与文本清洗规则！`, `success`));
    },
    St = (e) => {
      (Ke(e), We(!0));
    },
    Ct = (e) => {
      t(`auto-retry`);
    },
    Ot = (e) => {
      (e && ee(e), t(`deep-dashboard`));
    },
    kt = (e) => {
      (e && A(e), t(`account-ledger`));
    },
    At = (e) => {
      (t(`keyword-matrix`), e && W(`已定位关键词: 【${e}】`, `info`));
    },
    jt = (e) => {
      (e && te(e), t(`keyword-results`));
    },
    Mt = ue.filter(
      (e) =>
        !(
          (Y.svcName &&
            !e.name.toLowerCase().includes(Y.svcName.toLowerCase())) ||
          (Y.embedName &&
            e.source &&
            !e.source.toLowerCase().includes(Y.embedName.toLowerCase())) ||
          (Y.freq && e.freq !== Y.freq) ||
          (Y.status && e.status !== Y.status) ||
          (Y.owner && e.owner !== Y.owner) ||
          (Y.onlyAbnormal && e.status !== `abnormal`)
        ),
    );
  return (0, $.jsxs)(`div`, {
    className: `flex h-screen w-screen overflow-hidden bg-slate-50 font-sans text-slate-800`,
    children: [
      (0, $.jsx)(on, { currentTab: e, onSelectTab: t, serviceCounts: J }),
      (0, $.jsxs)(`div`, {
        className: `flex-1 flex flex-col min-w-0 h-full overflow-hidden`,
        children: [
          (0, $.jsx)(sn, {
            currentTab: e,
            onOpenAlerts: () =>
              W(`当前独立集群调度系统运行正常，暂无未读告警。`, `info`),
          }),
          (0, $.jsxs)(`main`, {
            className: `flex-1 overflow-y-auto px-6 py-4 space-y-4`,
            children: [
              e === `auto-retry` &&
                (0, $.jsx)(Bn, {
                  services: n,
                  retryItems: f,
                  websiteAuditConfigs: m,
                  onUpdateRetryItems: p,
                  onUpdateWebsiteAuditConfig: (e, t) => {
                    h((n) => ({ ...n, [e]: t }));
                  },
                  onTriggerInstantRetry: (e) => {
                    W(`已对选中的 ${e.length} 个重试ID下发重采指令`, `info`);
                  },
                  onBackToServiceList: () => t(`auto`),
                  onOpenLog: yt,
                }),
              e === `deep-ledger` &&
                (0, $.jsx)(Yn, {
                  websites: deepWebsites,
                  services: n.filter((e) => Xt(e.method)),
                  initialServiceFilter: selectedDeepServiceFilter,
                  onUpdateWebsites: setDeepWebsites,
                  onBackToServices: () => t(`deep`),
                  onNavigateToDashboard: () => t(`deep-dashboard`),
                  onOpenConfigModal: dt,
                  onAddToast: W,
                }),
              e === `deep-dashboard` &&
                (0, $.jsx)(vn, {
                  services: n.filter((e) => Xt(e.method)),
                  deepConfigs: c,
                  activeSvcId: j,
                  onOpenConfigModal: dt,
                  onInstantCrawl: vt,
                  onOpenLog: yt,
                  onAddToast: W,
                }),
              e === `account-sla-monitor` &&
                (0, $.jsx)(On, {
                  services: n.filter((e) => $t(e.method)),
                  accounts: g,
                  onBackToServiceList: () => t(`account`),
                  onNavigateToAccountPool: () => t(`account-pool`),
                  onNavigateToAccountLedger: kt,
                  onOpenAccountConfigModal: Q,
                  onAddToast: W,
                }),
              e === `account-ledger` &&
                (0, $.jsx)(Dn, {
                  services: n.filter((e) => $t(e.method)),
                  accounts: g,
                  rotationConfigs: v,
                  tieredRules: S,
                  platformStats: T,
                  targetLedgers: D,
                  ledgers: b,
                  initialSvcFilter: k,
                  onUpdateLedgers: x,
                  onUpdateAccounts: _,
                  onUpdateTieredRules: w,
                  onUpdateTargetLedgers: O,
                  onBackToServiceList: () => t(`account`),
                  onNavigateToAccountPool: () => t(`account-pool`),
                  onNavigateToSlaMonitor: () => t(`account-sla-monitor`),
                  onAddToast: W,
                }),
              e === `account-pool` &&
                (0, $.jsx)(wn, {
                  accounts: g,
                  services: n.filter((e) => $t(e.method)),
                  onUpdateAccounts: _,
                  onBackToServiceList: () => t(`account`),
                  onNavigateToAccountLedger: kt,
                  onAddToast: W,
                }),
              e === `keyword-matrix` &&
                (0, $.jsx)(An, {
                  keywords: M,
                  services: n.filter((e) => en(e.method)),
                  onUpdateKeywords: N,
                  onBackToServiceList: () => t(`keyword`),
                  onNavigateToResults: jt,
                  onNavigateToVolcano: () => t(`volcano-official`),
                  onAddToast: W,
                }),
              e === `keyword-results` &&
                (0, $.jsx)(jn, {
                  results: I,
                  keywords: M,
                  services: n.filter((e) => en(e.method)),
                  onUpdateResults: L,
                  initialKeywordFilter: R,
                  onBackToServiceList: () => t(`keyword`),
                  onNavigateToMatrix: At,
                  onNavigateToVolcano: () => t(`volcano-official`),
                  onAddToast: W,
                }),
              e === `follow` && (0, $.jsx)(Pn, { onAddToast: W }),
              (e === `volcano-official` ||
                e === `volcano-official-stream` ||
                e === `volcano-official-billing`) &&
                (0, $.jsx)(Fn, {
                  keywords: z,
                  pushes: ne,
                  accountInfo: re,
                  onUpdateKeywords: B,
                  onUpdatePushes: V,
                  onUpdateAccountInfo: ie,
                  initialSubTab:
                    e === `volcano-official-stream`
                      ? `stream`
                      : e === `volcano-official-billing`
                        ? `billing`
                        : `keywords`,
                  onSubTabChange: (e) => {
                    t(
                      e === `stream`
                        ? `volcano-official-stream`
                        : e === `billing`
                          ? `volcano-official-billing`
                          : `volcano-official`,
                    );
                  },
                  onBackToServiceList: () => t(`auto`),
                  onAddToast: W,
                }),
              e === `classified-servers` &&
                (0, $.jsx)(Vn, {
                  services: n,
                  onNavigateToService: (e) => {
                    oe(e);
                    let r = n.find((t) => t.id === e);
                    r &&
                      (Qt(r.method)
                        ? t(`auto`)
                        : Zt(r.method)
                          ? t(`plate`)
                          : Xt(r.method)
                            ? t(`deep`)
                            : $t(r.method)
                              ? t(`account`)
                              : en(r.method) && t(`keyword`));
                  },
                  onEditService: rt,
                }),
              (e === `auto` ||
                e === `plate` ||
                e === `deep` ||
                e === `account` ||
                e === `keyword`) &&
                (0, $.jsxs)($.Fragment, {
                  children: [
                    (0, $.jsxs)(`div`, {
                      className: `bg-white rounded-xl border border-slate-200/80 shadow-2xs p-4 flex flex-col md:flex-row md:items-center justify-between gap-4`,
                      children: [
                        (0, $.jsxs)(`div`, {
                          className: `flex items-start gap-3.5`,
                          children: [
                            (0, $.jsx)(`div`, {
                              className: `p-2.5 rounded-xl border ${q.bgClass} shrink-0`,
                              children: (0, $.jsx)(q.icon, {
                                className: `w-6 h-6`,
                              }),
                            }),
                            (0, $.jsxs)(`div`, {
                              className: `flex flex-col gap-0.5`,
                              children: [
                                (0, $.jsxs)(`div`, {
                                  className: `flex items-center gap-2`,
                                  children: [
                                    (0, $.jsx)(`h1`, {
                                      className: `text-lg font-black text-slate-800 tracking-tight`,
                                      children: q.title,
                                    }),
                                    (0, $.jsx)(`span`, {
                                      className: `text-[11px] font-bold px-2 py-0.5 rounded-full border ${q.bgClass}`,
                                      children: q.badgeText,
                                    }),
                                  ],
                                }),
                                (0, $.jsx)(`p`, {
                                  className: `text-[12.5px] text-slate-500 leading-normal max-w-3xl`,
                                  children: q.subTitle,
                                }),
                                (0, $.jsxs)(`div`, {
                                  className: `text-[11px] font-medium text-slate-400 mt-0.5`,
                                  children: [
                                    `核心调度特性: `,
                                    (0, $.jsx)(`span`, {
                                      className: `text-slate-600 font-semibold`,
                                      children: q.tagline,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, $.jsxs)(`div`, {
                          className: `flex items-center gap-2.5 shrink-0`,
                          children: [
                            (0, $.jsxs)(`button`, {
                              type: `button`,
                              onClick: () => handleAddService(),
                              className: `px-3.5 py-1.5 rounded-lg bg-[#0066FF] hover:bg-[#0052cc] text-white text-xs font-bold flex items-center gap-1.5 transition-all shadow-xs cursor-pointer`,
                              children: [
                                (0, $.jsx)(`span`, { className: `text-sm font-black leading-none`, children: `+` }),
                                (0, $.jsx)(`span`, { children: `新增服务` }),
                              ],
                            }),
                            e === `account` &&
                              (0, $.jsxs)($.Fragment, {
                                children: [
                                  (0, $.jsxs)(`button`, {
                                    type: `button`,
                                    onClick: () => t(`account-sla-monitor`),
                                    className: `px-3 py-1.5 rounded-lg border border-rose-300 bg-rose-50 text-rose-800 hover:bg-rose-100 text-xs font-bold flex items-center gap-1.5 transition-all shadow-2xs cursor-pointer`,
                                    children: [
                                      (0, $.jsx)(Fe, {
                                        className: `w-3.5 h-3.5 animate-pulse`,
                                      }),
                                      (0, $.jsx)(`span`, {
                                        children: `SLA异常监控`,
                                      }),
                                    ],
                                  }),
                                  (0, $.jsxs)(`button`, {
                                    type: `button`,
                                    onClick: () => t(`account-pool`),
                                    className: `px-3 py-1.5 rounded-lg border border-amber-300 bg-amber-50 text-amber-800 hover:bg-amber-100 text-xs font-bold flex items-center gap-1.5 transition-all shadow-2xs cursor-pointer`,
                                    children: [
                                      (0, $.jsx)(ut, {
                                        className: `w-3.5 h-3.5`,
                                      }),
                                      (0, $.jsx)(`span`, {
                                        children: `凭证池管理`,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            e === `keyword` &&
                              (0, $.jsxs)($.Fragment, {
                                children: [
                                  (0, $.jsxs)(`button`, {
                                    type: `button`,
                                    onClick: () => t(`keyword-matrix`),
                                    className: `px-3 py-1.5 rounded-lg border border-rose-300 bg-rose-50 text-rose-800 hover:bg-rose-100 text-xs font-bold flex items-center gap-1.5 transition-all shadow-2xs cursor-pointer`,
                                    children: [
                                      (0, $.jsx)(Ce, {
                                        className: `w-3.5 h-3.5`,
                                      }),
                                      (0, $.jsxs)(`span`, {
                                        children: [`矩阵词库 (`, M.length, `)`],
                                      }),
                                    ],
                                  }),
                                  (0, $.jsxs)(`button`, {
                                    type: `button`,
                                    onClick: () => t(`keyword-results`),
                                    className: `px-3 py-1.5 rounded-lg border border-rose-300 bg-rose-50 text-rose-800 hover:bg-rose-100 text-xs font-bold flex items-center gap-1.5 transition-all shadow-2xs cursor-pointer`,
                                    children: [
                                      (0, $.jsx)(Fe, {
                                        className: `w-3.5 h-3.5`,
                                      }),
                                      (0, $.jsx)(`span`, {
                                        children: `实时成果流`,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            e === `auto` &&
                              (0, $.jsxs)(`button`, {
                                type: `button`,
                                onClick: () => t(`auto-retry`),
                                className: `px-3 py-1.5 rounded-lg border border-amber-300 bg-amber-50 text-amber-900 hover:bg-amber-100 text-xs font-bold flex items-center gap-1.5 transition-all shadow-2xs cursor-pointer`,
                                children: [
                                  (0, $.jsx)(Le, { className: `w-3.5 h-3.5` }),
                                  (0, $.jsxs)(`span`, {
                                    children: [`ID重试库 (`, f.length, `)`],
                                  }),
                                ],
                              }),
                          ],
                        }),
                      ],
                    }),
                    (0, $.jsx)(cn, { services: ue, activeMethod: ce }),
                    (0, $.jsx)(ln, {
                      filter: Y,
                      activeMethod: ce,
                      onChangeFilter: (e, t) => de((n) => ({ ...n, [e]: t })),
                      onReset: () =>
                        de({
                          svcName: ``,
                          embedName: ``,
                          freq: ``,
                          method: ``,
                          status: ``,
                          owner: ``,
                          onlyAbnormal: !1,
                          onlyRecent: !1,
                        }),
                      onSearch: () => {},
                      onAddService: handleAddService,
                    }),
                    (0, $.jsx)(un, { onOpenVendorModal: St }),
                    (0, $.jsx)(fn, {
                      services: Mt,
                      highlightedSvcId: H,
                      incrementConfigs: i,
                      plateConfigs: o,
                      deepConfigs: c,
                      deepWebsites: deepWebsites,
                      onNavigateToDeepLedger: (svcId) => { setSelectedDeepServiceFilter(svcId || 'all'); t('deep-ledger'); },
                      keywordConfigs: P,
                      keywords: M,
                      retryItems: f,
                      websiteAuditConfigs: m,
                      platformLedgerStats: T,
                      tieredFrequencyRules: S,
                      activeMethod: ce,
                      onEditService: rt,
                      onOpenIdIncrementModal: at,
                      onOpenPlateModal: ct,
                      onOpenDeepModal: dt,
                      onOpenAccountModal: Q,
                      onOpenKeywordModal: ht,
                      onOpenAccountLedger: mt,
                      onNavigateToAccountLedger: kt,
                      onNavigateToDeepDashboard: Ot,
                      onNavigateToKeywordMatrix: At,
                      onTogglePause: _t,
                      onInstantCrawl: vt,
                      onOpenLog: yt,
                      onOpenRule: bt,
                      onOpenRetryPool: Ct,
                    }),
                  ],
                }),
            ],
          }),
        ],
      }),
      (0, $.jsx)(mn, {
        service: fe,
        isOpen: me,
        onClose: () => he(!1),
        onSave: it,
      }),
      (0, $.jsx)(hn, {
        isOpen: ye,
        service: ge,
        config: (ge && i[ge.id]) || null,
        onClose: () => be(!1),
        onSave: ot,
      }),
      (0, $.jsx)(gn, {
        isOpen: we,
        service: xe,
        config: (xe && o[xe.id]) || null,
        onClose: () => Te(!1),
        onSave: lt,
      }),
      (0, $.jsx)(_n, {
        isOpen: De,
        service: Ee,
        config: (Ee && c[Ee.id]) || null,
        onClose: () => Oe(!1),
        onSave: ft,
        onAddToast: W,
      }),
      (0, $.jsx)(Sn, {
        isOpen: je,
        service: ke,
        config: (ke && v[ke.id]) || null,
        tieredRule: (ke && S[ke.id]) || null,
        platformStats: (ke && T[ke.id]) || null,
        targetLedgers: D,
        accounts: g,
        onClose: () => Me(!1),
        onSaveConfig: pt,
        onSaveTieredRule: (e) => {
          ke &&
            (w((t) => ({ ...t, [ke.id]: e })),
            W(`已保存【${ke.name}】阶梯频控与降级规则！`, `success`));
        },
        onNavigateToAccountPool: () => {
          (Me(!1), t(`account-pool`));
        },
        onNavigateToAccountLedger: (e) => {
          (Me(!1), kt(e));
        },
        onNavigateToSlaMonitor: () => {
          (Me(!1), t(`account-sla-monitor`));
        },
      }),
      (0, $.jsx)(Cn, {
        isOpen: Re,
        service: Ne,
        config: (Ne && v[Ne.id]) || null,
        tieredRule: (Ne && S[Ne.id]) || null,
        platformStats: (Ne && T[Ne.id]) || null,
        targetLedgers: D,
        accounts: g,
        ledgers: b,
        onClose: () => ze(!1),
        onNavigateToFullLedger: (e) => {
          (ze(!1), kt(e));
        },
        onNavigateToConfig: (e) => {
          (ze(!1), Q(e));
        },
        onRotateNow: (e) => {
          W(`已强制触发服务【${e}】执行凭证平滑轮换指令`, `success`);
        },
        onAddToast: W,
      }),
      (0, $.jsx)(kn, {
        isOpen: Ve,
        service: Z,
        config: (Z && P[Z.id]) || null,
        allKeywords: M,
        availableKeywords: M,
        onClose: () => He(!1),
        onSave: gt,
      }),
      (0, $.jsx)(In, {
        isOpen: Ue,
        initialVendorKey: Ge,
        onClose: () => We(!1),
        onLocateService: (e) => {
          (We(!1), oe(e), W(`已在表格中高亮定位服务【${e}】`, `info`));
        },
      }),
      (0, $.jsx)(Ln, { service: qe, isOpen: Ye, onClose: () => Xe(!1) }),
      (0, $.jsx)(Rn, {
        isOpen: $e,
        service: Ze,
        config: (Ze && u[Ze.id]) || null,
        onClose: () => et(!1),
        onSaveRule: xt,
      }),
      (0, $.jsx)(zn, {
        isOpen: tt,
        services: n,
        retryItems: f,
        websiteAuditConfigs: m,
        onUpdateRetryItems: p,
        onUpdateWebsiteAuditConfig: (e, t) => {
          h((n) => ({ ...n, [e]: t }));
        },
        onClose: () => nt(!1),
      }),
      (0, $.jsx)(Hn, { toasts: se, onRemove: G }),
    ],
  });
}
(0, mt.createRoot)(document.getElementById(`root`)).render(
  