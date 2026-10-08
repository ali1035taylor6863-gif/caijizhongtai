Pn = ({ onAddToast: e }) => {
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
  