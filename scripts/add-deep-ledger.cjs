const fs = require('fs');

console.log("Reading src/app-bundle.js...");
let code = fs.readFileSync('src/app-bundle.js', 'utf8');

// =========================================================================
// 1. In header breadcrumbs switch (e): add deep-ledger case
// =========================================================================
let oldSwitch = `case \`deep-dashboard\`:
                    return \`深度采集 · 递归下钻大盘\`;`;

let newSwitch = `case \`deep-ledger\`:
                    return \`深度采集 · 网站台账\`;
                  case \`deep-dashboard\`:
                    return \`深度采集 · 递归下钻大盘\`;`;

if (code.includes(oldSwitch)) {
  code = code.replace(oldSwitch, newSwitch);
  console.log("Updated switch(e) with deep-ledger case.");
}

// =========================================================================
// 2. In sidebar navigation: Add 网站台账 below 服务列表 in 深度采集
// =========================================================================
let oldSidebarDeepDashboard = `(0, $.jsxs)(\`div\`, {
                          onClick: () => t(\`deep-dashboard\`),
                          className: \`flex items-center justify-between px-2.5 py-1.5 text-[12px] rounded-md cursor-pointer transition-all \${e === \`deep-dashboard\` ? \`bg-[#1e376b]/15 text-[#1e376b] font-extrabold shadow-2xs\` : \`text-[#1e376b]/80 hover:bg-[#b9d7f6]/60 hover:text-[#1e376b] font-medium\`}\`,`;

let newSidebarDeepLedgerAndDashboard = `(0, $.jsxs)(\`div\`, {
                          onClick: () => t(\`deep-ledger\`),
                          className: \`flex items-center justify-between px-2.5 py-1.5 text-[12px] rounded-md cursor-pointer transition-all \${e === \`deep-ledger\` ? \`bg-[#1e376b]/15 text-[#1e376b] font-extrabold shadow-2xs\` : \`text-[#1e376b]/80 hover:bg-[#b9d7f6]/60 hover:text-[#1e376b] font-medium\`}\`,
                          children: [
                            (0, $.jsxs)(\`div\`, {
                              className: \`flex items-center gap-2 min-w-0\`,
                              children: [
                                (0, $.jsx)(be, {
                                  className: \`w-3.5 h-3.5 text-emerald-700 shrink-0\`,
                                }),
                                (0, $.jsx)(\`span\`, {
                                  className: \`truncate\`,
                                  children: \`网站台账\`,
                                }),
                              ],
                            }),
                            (0, $.jsx)(\`span\", {
                              className: \`text-[10px] font-mono text-emerald-800 font-bold bg-emerald-100/80 px-1.5 py-0.2 rounded\`,
                              children: \`台账\`,
                            }),
                          ],
                        }),
                        (0, $.jsxs)(\`div\`, {
                          onClick: () => t(\`deep-dashboard\`),
                          className: \`flex items-center justify-between px-2.5 py-1.5 text-[12px] rounded-md cursor-pointer transition-all \${e === \`deep-dashboard\` ? \`bg-[#1e376b]/15 text-[#1e376b] font-extrabold shadow-2xs\` : \`text-[#1e376b]/80 hover:bg-[#b9d7f6]/60 hover:text-[#1e376b] font-medium\`}\`,`;

// Fix the backtick in span above:
newSidebarDeepLedgerAndDashboard = newSidebarDeepLedgerAndDashboard.replace('`span"', '`span`');

if (code.includes(oldSidebarDeepDashboard)) {
  code = code.replace(oldSidebarDeepDashboard, newSidebarDeepLedgerAndDashboard);
  console.log("Added deep-ledger item to sidebar navigation.");
}

// =========================================================================
// 3. Update o check in sidebar to also treat deep-ledger as active in deep menu:
// =========================================================================
let oldOCheck = `o = e === \`deep\` || e === \`deep-dashboard\`,`;
let newOCheck = `o = e === \`deep\` || e === \`deep-dashboard\` || e === \`deep-ledger\`,`;
if (code.includes(oldOCheck)) {
  code = code.replace(oldOCheck, newOCheck);
  console.log("Updated o check in sidebar for deep-ledger.");
}

let oldDeepTabCheck = `e === \`deep\` || e === \`deep-dashboard\``;
let newDeepTabCheck = `e === \`deep\` || e === \`deep-dashboard\` || e === \`deep-ledger\``;
code = code.replaceAll(oldDeepTabCheck, newDeepTabCheck);

fs.writeFileSync('src/app-bundle.js', code, 'utf8');
console.log("Step 1-3 applied to src/app-bundle.js");
