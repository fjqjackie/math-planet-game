const fs = require("fs");
const vm = require("vm");

function makeElement() {
  return {
    addEventListener() {},
    classList: { add() {}, remove() {}, toggle() {} },
    style: {},
    dataset: {},
    innerHTML: "",
    textContent: "",
    value: "",
  };
}

const context = {
  console,
  localStorage: { getItem: () => null, setItem() {} },
  document: {
    documentElement: { style: { setProperty() {} } },
    querySelector: () => makeElement(),
  },
  window: {
    addEventListener() {},
    clearInterval() {},
    setInterval() {},
  },
  setTimeout() {},
  Date,
  Math,
};

vm.createContext(context);
vm.runInContext(fs.readFileSync("./app.js", "utf8"), context);
vm.runInContext(`
  state.selectedOps = new Set(["add"]);
  let pool = getSkillPool(0, 6);
  if (pool.length !== 1 || pool[0].name !== "makeAddition") {
    throw new Error("Preschool add-only should only generate addition.");
  }

  state.selectedOps = new Set(["sub"]);
  pool = getSkillPool(0, 6);
  if (pool.length !== 1 || pool[0].name !== "makeSubtraction") {
    throw new Error("Preschool sub-only should only generate subtraction.");
  }

  state.selectedOps = new Set(["mul"]);
  pool = getSkillPool(0, 6);
  if (pool.length !== 1 || pool[0].name !== "makeAddition") {
    throw new Error("Preschool unsupported ops should fall back to addition.");
  }
`, context);

console.log("logic tests passed");
