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

  state.selectedGrade = 2;
  state.targetDifficulty = 20;
  state.profile.progressByGrade[2] = { difficulty: 40 };
  const easyContext = getRewardContext(0.98, 5);
  if (!easyContext.tooEasy) {
    throw new Error("Low-level practice should be marked too easy.");
  }

  if (evolveCost(0) >= evolveCost(1)) {
    throw new Error("Evolution costs should increase by level.");
  }

  const lowAbility = calculateAbilityScore(0.7, 10, 16, 24);
  const highAbility = calculateAbilityScore(0.95, 10, 6, 64);
  if (highAbility <= lowAbility) {
    throw new Error("Higher accuracy, speed, and difficulty should increase ability score.");
  }

  state.profile.abilityScore = 20;
  state.targetDifficulty = 60;
  state.selectedGrade = 3;
  const growthContext = getRewardContext(0.95, 6);
  if (growthContext.growthBonus <= 0) {
    throw new Error("Ability improvement should create reward growth bonus.");
  }

  state.profile.abilityScore = 50;
  state.selectedGrade = 3;
  state.targetDifficulty = 30;
  const easyReward = getRewardContext(0.75, 16);
  state.targetDifficulty = 68;
  const strongReward = getRewardContext(0.98, 5);
  if (strongReward.performanceScore <= easyReward.performanceScore) {
    throw new Error("Harder, faster, more accurate work should produce better reward score.");
  }
`, context);

console.log("logic tests passed");
