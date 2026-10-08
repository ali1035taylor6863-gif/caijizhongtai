import sys

with open('src/app-bundle.js', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update thead
old_thead_col = """                    (0, $.jsx)(`th`, {
                      className: `py-3 px-4 whitespace-nowrap ${ye ? `min-w-[250px]` : xe ? `min-w-[310px]` : `w-[130px]`}`,
                      children: we,
                    }),"""

new_thead_col = """                    Se
                      ? (0, $.jsxs)($.Fragment, {
                          children: [
                            (0, $.jsx)(`th`, {
                              className: `py-3 px-4 min-w-[170px] whitespace-nowrap`,
                              children: `关键词`,
                            }),
                            (0, $.jsx)(`th`, {
                              className: `py-3 px-4 w-[120px] whitespace-nowrap`,
                              children: `采集频率`,
                            }),
                          ],
                        })
                      : (0, $.jsx)(`th`, {
                          className: `py-3 px-4 whitespace-nowrap ${ye ? `min-w-[250px]` : xe ? `min-w-[310px]` : `w-[130px]`}`,
                          children: we,
                        }),"""

assert old_thead_col in content, "old_thead_col not found in content"
content = content.replace(old_thead_col, new_thead_col, 1)
print("Replaced thead column")

# 2. Update empty row colSpan
old_colspan = "colSpan: be || ke ? 9 : xe ? 7 : 8,"
new_colspan = "colSpan: Se ? 10 : be || ke ? 9 : xe ? 7 : 8,"
assert old_colspan in content, "old_colspan not found"
content = content.replace(old_colspan, new_colspan, 1)
print("Replaced colspan")

# 3. Update tbody row cell
# Let's find the start of the td cell:
td_search = """                              (0, $.jsx)(`td`, {
                                className: `py-3 px-4 ${ye ? `min-w-[250px]` : `whitespace-nowrap`}`,
                                children: ye"""

pos_td = content.find(td_search)
assert pos_td != -1, "td_search not found"

# Let's find the end of this td cell before the next td (!xe && ...)
next_td_search = """                              !xe &&
                                (0, $.jsx)(`td`, {
                                  className: `py-3 px-4 min-w-[160px] whitespace-nowrap`,"""

pos_next_td = content.find(next_td_search, pos_td)
assert pos_next_td != -1, "next_td_search not found"

old_td_block = content[pos_td:pos_next_td]

# Let's construct new_td_block:
new_td_block = """                              w
                                ? (0, $.jsxs)($.Fragment, {
                                    children: [
                                      (0, $.jsx)(`td`, {
                                        className: `py-3 px-4 min-w-[170px] whitespace-nowrap`,
                                        children: (() => {
                                          let t = a?.[e.id],
                                            boundList = t?.boundKeywords || e.boundKeywords || [
                                              `具身智能人形机器人`,
                                              `低空经济eVTOL商业化`,
                                              `新能源汽车出海加征关税`,
                                            ],
                                            volume = (e.todayHits ? e.todayHits * 12 : 24800) + (boundList.length * 4820);
                                          return (0, $.jsxs)(`button`, {
                                            type: `button`,
                                            onClick: (evt) => {
                                              evt.stopPropagation();
                                              if (x) x();
                                            },
                                            className: `inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[12px] font-mono font-bold bg-rose-50/90 hover:bg-rose-100 text-rose-900 border border-rose-200 hover:border-rose-300 transition-all cursor-pointer shadow-2xs group`,
                                            title: `点击跳转至【关键词轮询 · 关键词矩阵库】查看全部监控词与采集明细 (共 ${boundList.length} 个监控词，累计采集 ${volume.toLocaleString()} 条数据)`,
                                            children: [
                                              (0, $.jsx)(ve, {
                                                className: `w-3.5 h-3.5 text-rose-600 group-hover:scale-110 transition-transform shrink-0`,
                                              }),
                                              (0, $.jsxs)(`span`, {
                                                className: `text-[12px] font-bold text-rose-950`,
                                                children: [boundList.length, `个词`],
                                              }),
                                              (0, $.jsx)(`span`, {
                                                className: `text-rose-300 font-sans`,
                                                children: `·`,
                                              }),
                                              (0, $.jsxs)(`span`, {
                                                className: `text-[11.5px] font-mono font-bold text-rose-700`,
                                                children: [volume.toLocaleString(), `条`],
                                              }),
                                            ],
                                          });
                                        })(),
                                      }),
                                      (0, $.jsx)(`td`, {
                                        className: `py-3 px-4 w-[120px] whitespace-nowrap`,
                                        children: (() => {
                                          let t = a?.[e.id],
                                            r = t?.pollIntervalMinutes || (e.freq ? parseInt(e.freq.replace(/\\D/g, ``) || `10`, 10) : 10),
                                            freqText = `${r}m/轮`;
                                          return (0, $.jsxs)(`span`, {
                                            className: `inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md text-[11px] font-mono font-bold bg-slate-100 text-slate-700 border border-slate-200/90 shadow-2xs`,
                                            title: `关键词轮询采集频率: 每 ${freqText} 执行一轮`,
                                            children: [
                                              (0, $.jsx)(`span`, {
                                                className: `w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0`,
                                              }),
                                              (0, $.jsx)(`span`, {
                                                children: freqText,
                                              }),
                                            ],
                                          });
                                        })(),
                                      }),
                                    ],
                                  })
                                : """ + old_td_block

content = content[:pos_td] + new_td_block + content[pos_next_td:]
print("Replaced tbody td block successfully")

with open('src/app-bundle.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("Saved src/app-bundle.js")
