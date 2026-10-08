const fs = require('fs');

console.log("Restoring clean state and inserting Yn and defaultDeepLedgerWebsites properly...");

// Let's read the bundle
let code = fs.readFileSync('src/app-bundle.js', 'utf8');

// 1. Let's fix any broken syntax in the _n -> vn boundary
// Let's find `_n = (` and `vn = (`
let nStart = code.indexOf("\n  _n = (");
let vnStart = code.indexOf("\n  vn = (", nStart);

if (nStart !== -1 && vnStart !== -1) {
  // Let's check what is between _n and vn
  let between = code.slice(nStart, vnStart);
  console.log("Length of _n component:", between.length);
}

// Let's check if there are any misplaced defaultDeepLedgerWebsites strings inside code
while (code.includes("defaultDeepLedgerWebsites = [")) {
  let p1 = code.indexOf("defaultDeepLedgerWebsites = [");
  let p2 = code.indexOf("];", p1);
  if (p1 !== -1 && p2 !== -1) {
    code = code.slice(0, p1) + code.slice(p2 + 2);
    console.log("Removed a defaultDeepLedgerWebsites block.");
  } else {
    break;
  }
}

// Also check if any `Yn = (` exists and clean it
while (code.includes("\n  Yn = (")) {
  let p1 = code.indexOf("\n  Yn = (");
  let p2 = code.indexOf("\n  vn = (", p1);
  if (p1 !== -1 && p2 !== -1) {
    code = code.slice(0, p1) + code.slice(p2);
    console.log("Removed previous Yn component block.");
  } else {
    break;
  }
}

fs.writeFileSync('src/app-bundle.js', code, 'utf8');
console.log("Cleaned corrupted insertions.");
