const grades = [
  { id: 0, label: "学龄前" },
  { id: 1, label: "一年级" },
  { id: 2, label: "二年级" },
  { id: 3, label: "三年级" },
  { id: 4, label: "四年级" },
  { id: 5, label: "五年级" },
  { id: 6, label: "六年级" },
];

const fontSizes = [
  { id: "normal", label: "大", value: 68 },
  { id: "large", label: "很大", value: 82 },
  { id: "huge", label: "超大", value: 98 },
  { id: "giant", label: "最大", value: 116 },
];

const operationOptions = [
  { id: "add", symbol: "+", label: "加法" },
  { id: "sub", symbol: "-", label: "减法" },
  { id: "mul", symbol: "×", label: "乘法" },
  { id: "div", symbol: "÷", label: "除法" },
  { id: "mixed", symbol: "±×÷", label: "混合" },
];

const challengeModes = [
  { id: "round", label: "10题闯关", seconds: 0 },
  { id: "oneMinute", label: "1分钟挑战", seconds: 60 },
  { id: "threeMinutes", label: "3分钟挑战", seconds: 180 },
];

const remoteConfig = (typeof window !== "undefined" && window.MATH_PLANET_SUPABASE) || {};

const creatures = [
  { id: "seedling", name: "叶芽兽", icon: "🌱", rarity: "common", label: "普通", element: "草", color: "#6fd36f", accent: "#2f9d5b", skill: "嫩叶连击", power: "连胜能量", stat: "streak" },
  { id: "spark", name: "电星兔", icon: "⚡", rarity: "common", label: "普通", element: "电", color: "#ffd95a", accent: "#ff9f1c", skill: "闪电心算", power: "速度加成", stat: "speed" },
  { id: "bubble", name: "泡泡鲸", icon: "🫧", rarity: "common", label: "普通", element: "水", color: "#78d7ff", accent: "#2f80ed", skill: "泡泡护盾", power: "稳定加成", stat: "accuracy" },
  { id: "pebble", name: "石鼓兽", icon: "🪨", rarity: "common", label: "普通", element: "岩", color: "#d0d5dd", accent: "#667085", skill: "稳稳验算", power: "正确率加成", stat: "accuracy" },
  { id: "wind", name: "风铃鹿", icon: "🍃", rarity: "common", label: "普通", element: "风", color: "#a6f4c5", accent: "#12b76a", skill: "轻风速答", power: "速度加成", stat: "speed" },
  { id: "ember", name: "火苗狐", icon: "🔥", rarity: "rare", label: "稀有", element: "火", color: "#ff8a34", accent: "#ef476f", skill: "火花冲刺", power: "限时挑战", stat: "speed" },
  { id: "snow", name: "雪团熊", icon: "❄️", rarity: "rare", label: "稀有", element: "冰", color: "#b8f3ff", accent: "#5ab0ff", skill: "冷静思考", power: "低错率加成", stat: "accuracy" },
  { id: "moon", name: "月光猫", icon: "🌙", rarity: "rare", label: "稀有", element: "月", color: "#bca7ff", accent: "#6c5ce7", skill: "月影专注", power: "连续答对", stat: "streak" },
  { id: "leaffox", name: "青叶狐", icon: "🦊", rarity: "rare", label: "稀有", element: "草", color: "#86efac", accent: "#16a34a", skill: "藤蔓追击", power: "挑战难度", stat: "difficulty" },
  { id: "tide", name: "潮汐龟", icon: "🌊", rarity: "rare", label: "稀有", element: "水", color: "#7dd3fc", accent: "#0284c7", skill: "潮汐反击", power: "后发反击", stat: "accuracy" },
  { id: "crystal", name: "水晶龙", icon: "💎", rarity: "epic", label: "超稀有", element: "晶", color: "#9bf6ff", accent: "#7b61ff", skill: "水晶计算", power: "混合运算", stat: "difficulty" },
  { id: "rocket", name: "火箭龟", icon: "🚀", rarity: "epic", label: "超稀有", element: "钢", color: "#a7b8ff", accent: "#2176ff", skill: "火箭速算", power: "快速通关", stat: "speed" },
  { id: "storm", name: "雷云鹰", icon: "⛈️", rarity: "epic", label: "超稀有", element: "电", color: "#fde68a", accent: "#7c3aed", skill: "雷云连算", power: "连胜爆发", stat: "streak" },
  { id: "aurora", name: "极光鹿", icon: "✨", rarity: "epic", label: "超稀有", element: "光", color: "#c4b5fd", accent: "#06b6d4", skill: "极光验算", power: "高正确率", stat: "accuracy" },
  { id: "crown", name: "皇冠狮", icon: "👑", rarity: "legendary", label: "传说", element: "王", color: "#ffd166", accent: "#ff8a34", skill: "王者验算", power: "高难关卡", stat: "difficulty" },
  { id: "star", name: "星云龙", icon: "🌟", rarity: "legendary", label: "传说", element: "星", color: "#ffb3e6", accent: "#8a4fff", skill: "星云爆发", power: "综合能力", stat: "all" },
  { id: "time", name: "时钟鲸", icon: "⏱️", rarity: "legendary", label: "传说", element: "时", color: "#bae6fd", accent: "#312e81", skill: "时间折跃", power: "限时王者", stat: "speed" },
  { id: "nova", name: "新星凤凰", icon: "🌠", rarity: "legendary", label: "传说", element: "星", color: "#fecdd3", accent: "#db2777", skill: "新星涅槃", power: "逆转战局", stat: "all" },
];

const gradeProfiles = {
  0: { min: 2, start: 6, max: 14, skills: ["数数", "5以内加减", "10以内加减"] },
  1: { min: 8, start: 18, max: 34, skills: ["加法", "减法", "加减混合"] },
  2: { min: 16, start: 32, max: 52, skills: ["加减", "乘法", "除法", "乘加乘减"] },
  3: { min: 28, start: 48, max: 68, skills: ["多位数", "乘除", "两步混合", "有余数除法"] },
  4: { min: 42, start: 62, max: 82, skills: ["四则混合", "括号", "小数初步"] },
  5: { min: 52, start: 72, max: 92, skills: ["小数四则", "分数基础", "四则混合"] },
  6: { min: 62, start: 82, max: 100, skills: ["分数小数混合", "百分数", "综合运算"] },
};

const state = {
  selectedGrade: 2,
  selectedFont: "large",
  operationOrder: ["add", "sub", "mul", "div", "mixed"],
  selectedOps: new Set(["add", "sub", "mul", "div", "mixed"]),
  selectedMode: "round",
  profile: createDefaultProfile(),
  lastReward: null,
  battlePickA: null,
  battlePickB: null,
  battleSelecting: "A",
  battleMode: "local",
  battleTurn: "A",
  battleStarted: false,
  battlePlayerHp: 100,
  battleEnemyHp: 100,
  battleQuestion: null,
  battleQuestionStartedAt: 0,
  battleAnswer: "",
  battleTurns: 0,
  remotePlayerId: "",
  remoteRoomCode: "",
  remoteSide: "",
  remoteRoom: null,
  remoteClient: null,
  remoteChannel: null,
  remoteBusy: false,
  remoteAwardedRoom: "",
  phase: "setup",
  probeIndex: 0,
  roundIndex: 0,
  challengeStarted: false,
  challengeEndsAt: 0,
  timerId: null,
  targetDifficulty: 32,
  question: null,
  input: "",
  questionStartedAt: 0,
  roundAnswers: [],
  currentStreak: 0,
  wrongStreak: 0,
  lastAdjustment: "先找到适合你的题",
};

const els = {
  setupScreen: document.querySelector("#setupScreen"),
  practiceScreen: document.querySelector("#practiceScreen"),
  resultScreen: document.querySelector("#resultScreen"),
  collectionScreen: document.querySelector("#collectionScreen"),
  battleScreen: document.querySelector("#battleScreen"),
  playerNameInput: document.querySelector("#playerNameInput"),
  saveProfileButton: document.querySelector("#saveProfileButton"),
  collectionButton: document.querySelector("#collectionButton"),
  battleButton: document.querySelector("#battleButton"),
  collectionBackButton: document.querySelector("#collectionBackButton"),
  battleBackButton: document.querySelector("#battleBackButton"),
  profileSummary: document.querySelector("#profileSummary"),
  collectionPreview: document.querySelector("#collectionPreview"),
  collectionTitle: document.querySelector("#collectionTitle"),
  collectionGrid: document.querySelector("#collectionGrid"),
  playerACard: document.querySelector("#playerACard"),
  playerBCard: document.querySelector("#playerBCard"),
  battleModeTabs: typeof document.querySelectorAll === "function" ? document.querySelectorAll("[data-battle-mode]") : [],
  remoteBattlePanel: document.querySelector("#remoteBattlePanel"),
  remotePlayerId: document.querySelector("#remotePlayerId"),
  createRoomButton: document.querySelector("#createRoomButton"),
  roomCodeInput: document.querySelector("#roomCodeInput"),
  joinRoomButton: document.querySelector("#joinRoomButton"),
  randomMatchButton: document.querySelector("#randomMatchButton"),
  remoteStatusText: document.querySelector("#remoteStatusText"),
  battlePicker: document.querySelector("#battlePicker"),
  battleMathPanel: document.querySelector("#battleMathPanel"),
  battleHpLabel: document.querySelector("#battleHpLabel"),
  battlePlayerHp: document.querySelector("#battlePlayerHp"),
  battleEnemyHp: document.querySelector("#battleEnemyHp"),
  battleQuestionText: document.querySelector("#battleQuestionText"),
  battleAnswerDisplay: document.querySelector("#battleAnswerDisplay"),
  battleKeypad: document.querySelector("#battleKeypad"),
  battleSubmitButton: document.querySelector("#battleSubmitButton"),
  startBattleButton: document.querySelector("#startBattleButton"),
  battleResult: document.querySelector("#battleResult"),
  gradeOptions: document.querySelector("#gradeOptions"),
  fontOptions: document.querySelector("#fontOptions"),
  operationOptions: document.querySelector("#operationOptions"),
  modeOptions: document.querySelector("#modeOptions"),
  startButton: document.querySelector("#startButton"),
  backButton: document.querySelector("#backButton"),
  gradeLabel: document.querySelector("#gradeLabel"),
  modeLabel: document.querySelector("#modeLabel"),
  timerLabel: document.querySelector("#timerLabel"),
  roundLabel: document.querySelector("#roundLabel"),
  skillLabel: document.querySelector("#skillLabel"),
  progressBar: document.querySelector("#progressBar"),
  encourageText: document.querySelector("#encourageText"),
  questionText: document.querySelector("#questionText"),
  answerDisplay: document.querySelector("#answerDisplay"),
  feedbackText: document.querySelector("#feedbackText"),
  voiceButton: document.querySelector("#voiceButton"),
  speechHint: document.querySelector("#speechHint"),
  keypad: document.querySelector("#keypad"),
  submitButton: document.querySelector("#submitButton"),
  resultTitle: document.querySelector("#resultTitle"),
  stars: document.querySelector("#stars"),
  resultSummary: document.querySelector("#resultSummary"),
  accuracyValue: document.querySelector("#accuracyValue"),
  timeValue: document.querySelector("#timeValue"),
  nextAction: document.querySelector("#nextAction"),
  rewardCard: document.querySelector("#rewardCard"),
  continueButton: document.querySelector("#continueButton"),
  homeButton: document.querySelector("#homeButton"),
};

function renderSetup() {
  els.gradeOptions.innerHTML = grades
    .map((grade) => {
      const active = grade.id === state.selectedGrade ? " active" : "";
      return `<button class="choice-button${active}" data-grade="${grade.id}">${grade.label}</button>`;
    })
    .join("");

  els.fontOptions.innerHTML = fontSizes
    .map((size) => {
      const active = size.id === state.selectedFont ? " active" : "";
      return `<button class="choice-button${active}" data-font="${size.id}">${size.label}</button>`;
    })
    .join("");

  els.operationOptions.innerHTML = state.operationOrder
    .map((id) => {
      const option = operationOptions.find((item) => item.id === id);
      const active = state.selectedOps.has(id) ? " active" : "";
      return `
        <button class="operation-card${active}" draggable="true" data-op="${option.id}">
          <strong>${option.symbol}</strong>
          <span>${option.label}</span>
        </button>
      `;
    })
    .join("");

  els.modeOptions.innerHTML = challengeModes
    .map((mode) => {
      const active = mode.id === state.selectedMode ? " active" : "";
      return `<button class="choice-button${active}" data-mode="${mode.id}">${mode.label}</button>`;
    })
    .join("");

  els.playerNameInput.value = state.profile.name;
  const gradeProgress = state.profile.progressByGrade[state.selectedGrade];
  const bestText = state.profile.bestAccuracy
    ? `能力 ${state.profile.abilityScore || 0} · 本次提升 +${state.profile.lastAbilityGain || 0}`
    : "还没有挑战记录";
  els.profileSummary.textContent = gradeProgress
    ? `${state.profile.name || "小玩家"} · 当前难度 ${Math.round(gradeProgress.difficulty)} · 已挑战 ${state.profile.challenges} 次 · ${bestText}`
    : `${state.profile.name || "小玩家"} · ${bestText}`;
  renderCollectionPreview();
}

function setScreen(name) {
  state.phase = name;
  els.setupScreen.classList.toggle("hidden", name !== "setup");
  els.practiceScreen.classList.toggle("hidden", name !== "practice");
  els.resultScreen.classList.toggle("hidden", name !== "result");
  els.collectionScreen.classList.toggle("hidden", name !== "collection");
  els.battleScreen.classList.toggle("hidden", name !== "battle");
}

function startGame() {
  const profile = gradeProfiles[state.selectedGrade];
  if (!state.selectedOps.size) {
    state.selectedOps.add("add");
    renderSetup();
  }
  state.probeIndex = 0;
  state.roundIndex = 0;
  state.challengeStarted = false;
  state.challengeEndsAt = 0;
  state.targetDifficulty = state.profile.progressByGrade[state.selectedGrade]?.difficulty || profile.start;
  if (state.profile.progressByGrade[state.selectedGrade]) {
    state.probeIndex = 2;
    state.lastAdjustment = "从你上次的难度继续";
  }
  state.roundAnswers = [];
  state.currentStreak = 0;
  state.wrongStreak = 0;
  if (state.probeIndex < 2) state.lastAdjustment = "先来 2 道探测题";
  applyFontSize();
  setScreen("practice");
  if (state.probeIndex >= 2) startChallengeTimerIfNeeded();
  nextQuestion();
}

function applyFontSize() {
  const selected = fontSizes.find((item) => item.id === state.selectedFont);
  document.documentElement.style.setProperty("--question-size", `${selected.value}px`);
}

function nextQuestion() {
  if (isTimedMode() && state.challengeStarted && Date.now() >= state.challengeEndsAt) {
    showResult("timeup");
    return;
  }
  state.input = "";
  state.question = generateQuestion(state.selectedGrade, state.targetDifficulty);
  state.questionStartedAt = Date.now();
  renderPractice();
}

function renderPractice() {
  const profile = gradeProfiles[state.selectedGrade];
  const isProbe = state.probeIndex < 2;
  const mode = getSelectedMode();
  const total = isProbe ? 2 : isTimedMode() ? Math.max(1, state.roundIndex + 1) : 10;
  const current = isProbe ? state.probeIndex + 1 : state.roundIndex + 1;
  const progress = isTimedMode() && state.challengeStarted
    ? getTimedProgress(mode)
    : Math.min(100, ((current - 1) / total) * 100);

  els.gradeLabel.textContent = grades.find((grade) => grade.id === state.selectedGrade).label;
  els.modeLabel.textContent = isProbe ? "快速定级" : mode.label;
  els.timerLabel.textContent = isProbe ? "未计时" : getTimerText();
  els.timerLabel.classList.toggle("hidden", !isTimedMode());
  els.roundLabel.textContent = isProbe
    ? `探测题 ${current}/2`
    : isTimedMode()
      ? `已完成 ${state.roundIndex} 题`
      : `第 ${current}/10 题`;
  els.skillLabel.textContent = `${state.question.skill} · 难度 ${Math.round(state.targetDifficulty)}`;
  els.progressBar.style.width = `${progress}%`;
  els.encourageText.textContent = state.lastAdjustment;
  els.questionText.textContent = state.question.text;
  els.answerDisplay.textContent = state.input || "_";
  els.feedbackText.textContent = "";
  els.feedbackText.className = "feedback";

  if (state.targetDifficulty < profile.start - 8) {
    els.encourageText.textContent = "先补充能量，题目会变小一点";
  }
}

function renderKeypad() {
  const keys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "0", "退格"];
  els.keypad.innerHTML = keys
    .map((key) => `<button class="key-button" data-key="${key}">${key}</button>`)
    .join("");
}

function submitAnswer() {
  if (!state.input || !state.question) return;

  const answer = Number(state.input);
  const time = Math.max(1, Math.round((Date.now() - state.questionStartedAt) / 1000));
  const correct = answer === state.question.answer;
  const response = { correct, time, difficulty: state.targetDifficulty, skill: state.question.skill };

  state.roundAnswers.push(response);
  updateDifficultyAfterAnswer(response);

  els.feedbackText.textContent = correct
    ? pick(["答对了，继续", "很稳，再来一题", "能量增加"])
    : `差一点，答案是 ${state.question.answer}`;
  els.feedbackText.className = `feedback ${correct ? "correct" : "wrong"}`;

  setTimeout(() => {
    if (state.probeIndex < 2) {
      state.probeIndex += 1;
      if (state.probeIndex < 2) {
        nextQuestion();
      } else {
        state.roundAnswers = [];
        state.roundIndex = 0;
        state.lastAdjustment = "找到合适难度了，开始闯关";
        startChallengeTimerIfNeeded();
        nextQuestion();
      }
      return;
    }

    state.roundIndex += 1;
    if (!isTimedMode() && state.roundIndex >= 10) {
      showResult("round");
      return;
    }

    nextQuestion();
  }, correct ? 650 : 1200);
}

function updateDifficultyAfterAnswer(response) {
  const profile = gradeProfiles[state.selectedGrade];
  const fast = response.time <= 8;
  const slow = response.time > 20;

  if (response.correct) {
    state.currentStreak += 1;
    state.wrongStreak = 0;
    if (fast) {
      state.targetDifficulty += state.probeIndex < 2 ? 10 : 4;
      state.lastAdjustment = "答得又快又准，题目稍微升级";
    } else if (slow) {
      state.targetDifficulty += 0;
      state.lastAdjustment = "做对了，先保持难度练熟";
    } else {
      state.targetDifficulty += state.probeIndex < 2 ? 6 : 2;
      state.lastAdjustment = "做对了，慢慢加一点挑战";
    }
    if (state.currentStreak >= 3) {
      state.targetDifficulty += 3;
      state.lastAdjustment = "连胜中，解锁一点挑战";
    }
  } else {
    state.currentStreak = 0;
    state.wrongStreak += 1;
    state.targetDifficulty -= slow ? 10 : 6;
    state.lastAdjustment = "这题有点难，我们拆小一点";
    if (state.wrongStreak >= 2) {
      state.targetDifficulty -= 8;
      state.lastAdjustment = "进入能量补给，先做更顺手的题";
    }
  }

  const recent = state.roundAnswers.slice(-5);
  if (recent.length >= 5) {
    const accuracy = recent.filter((item) => item.correct).length / recent.length;
    if (accuracy < 0.6) {
      state.targetDifficulty -= 8;
      state.lastAdjustment = "最近有点吃力，题目会友好一些";
    }
    if (accuracy > 0.9 && recent.every((item) => item.time <= 10)) {
      state.targetDifficulty += 6;
      state.lastAdjustment = "掌握得很好，准备挑战下一档";
    }
  }

  state.targetDifficulty = clamp(state.targetDifficulty, profile.min, profile.max);
}

function showResult(reason = "round") {
  stopChallengeTimer();
  const answers = isTimedMode() ? state.roundAnswers : state.roundAnswers.slice(-10);
  if (!answers.length) {
    els.resultTitle.textContent = "准备好了";
    els.stars.textContent = "★";
    els.resultSummary.textContent = "先完成一道题，就能看到挑战结果。";
    els.accuracyValue.textContent = "0%";
    els.timeValue.textContent = "0 秒";
    els.nextAction.textContent = "继续挑战";
    els.rewardCard.className = "reward-card empty";
    saveProfile();
    setScreen("result");
    return;
  }
  const correctCount = answers.filter((item) => item.correct).length;
  const accuracy = correctCount / answers.length;
  const avgTime = Math.round(answers.reduce((sum, item) => sum + item.time, 0) / answers.length);
  const profile = gradeProfiles[state.selectedGrade];
  const stars = accuracy >= 0.9 ? 3 : accuracy >= 0.7 ? 2 : accuracy >= 0.5 ? 1 : 1;
  const rewardContext = getRewardContext(accuracy, avgTime);
  const reward = accuracy >= 0.7 ? awardCreature(accuracy, avgTime, rewardContext) : null;

  if (accuracy >= 0.9 && avgTime <= 12) {
    state.targetDifficulty += 8;
    els.nextAction.textContent = "进入下一关";
  } else if (accuracy >= 0.9) {
    state.targetDifficulty += 4;
    els.nextAction.textContent = "小幅升级";
  } else if (accuracy >= 0.7) {
    els.nextAction.textContent = "再练一轮";
  } else if (accuracy >= 0.5) {
    state.targetDifficulty -= 8;
    els.nextAction.textContent = "能量补给";
  } else {
    state.targetDifficulty -= 14;
    els.nextAction.textContent = "训练营";
  }

  state.targetDifficulty = clamp(state.targetDifficulty, profile.min, profile.max);
  saveProgress(accuracy, answers.length, avgTime);
  els.resultTitle.textContent = reason === "timeup" ? "时间到" : accuracy >= 0.9 ? "三星通关" : accuracy >= 0.7 ? "稳稳过关" : "补给成功";
  els.stars.textContent = "★".repeat(stars);
  els.resultSummary.textContent =
    reason === "timeup"
      ? `本次挑战完成 ${answers.length} 题，答对 ${correctCount} 题。`
      : accuracy >= 0.7
        ? rewardContext.tooEasy
          ? "这轮题偏简单，星宠只给普通能量。挑战更难的题，更容易遇到稀有星宠。"
          : `计算能力预计提升 +${rewardContext.abilityGain}。题越难、越准确、越快，星宠越稀有、战力越高。`
        : "系统会把题目拆小一点，先把能量补回来。";
  els.accuracyValue.textContent = `${Math.round(accuracy * 100)}%`;
  els.timeValue.textContent = `${avgTime} 秒`;
  renderReward(reward, accuracy);
  setScreen("result");
}

function continueRound() {
  state.probeIndex = 2;
  state.roundIndex = 0;
  state.roundAnswers = [];
  state.currentStreak = 0;
  state.wrongStreak = 0;
  state.challengeStarted = false;
  state.challengeEndsAt = 0;
  state.lastAdjustment = "继续闯关";
  setScreen("practice");
  startChallengeTimerIfNeeded();
  nextQuestion();
}

function getSelectedMode() {
  return challengeModes.find((mode) => mode.id === state.selectedMode) || challengeModes[0];
}

function isTimedMode() {
  return getSelectedMode().seconds > 0;
}

function startChallengeTimerIfNeeded() {
  stopChallengeTimer();
  const mode = getSelectedMode();
  if (!mode.seconds) return;
  state.challengeStarted = true;
  state.challengeEndsAt = Date.now() + mode.seconds * 1000;
  state.timerId = window.setInterval(() => {
    if (state.phase !== "practice") return;
    els.timerLabel.textContent = getTimerText();
    els.progressBar.style.width = `${getTimedProgress(mode)}%`;
    if (Date.now() >= state.challengeEndsAt) {
      showResult("timeup");
    }
  }, 250);
}

function stopChallengeTimer() {
  if (!state.timerId) return;
  window.clearInterval(state.timerId);
  state.timerId = null;
}

function getTimerText() {
  if (!isTimedMode()) return "";
  if (!state.challengeStarted) return "未计时";
  const left = Math.max(0, Math.ceil((state.challengeEndsAt - Date.now()) / 1000));
  const minutes = Math.floor(left / 60);
  const seconds = String(left % 60).padStart(2, "0");
  return `${minutes}:${seconds}`;
}

function getTimedProgress(mode) {
  if (!state.challengeStarted) return 0;
  const left = Math.max(0, state.challengeEndsAt - Date.now());
  return Math.max(0, Math.min(100, (left / (mode.seconds * 1000)) * 100));
}

function generateQuestion(grade, difficulty) {
  const pool = getSkillPool(grade, difficulty);
  const generator = pick(pool);
  return generator(difficulty, grade);
}

function getSkillPool(grade, difficulty) {
  const selected = state.operationOrder.filter((op) => state.selectedOps.has(op));
  if (grade === 0) {
    const preschoolPool = [];
    if (selected.includes("add")) preschoolPool.push(makeAddition);
    if (selected.includes("sub")) preschoolPool.push(makeSubtraction);
    return preschoolPool.length ? preschoolPool : [makeAddition];
  }

  const catalog = [
    { op: "add", minGrade: 1, minDifficulty: 0, generator: makeAddition },
    { op: "sub", minGrade: 1, minDifficulty: 0, generator: makeSubtraction },
    { op: "mixed", minGrade: 1, minDifficulty: 22, generator: makeAddSubMixed },
    { op: "mul", minGrade: 2, minDifficulty: 28, generator: makeMultiplication },
    { op: "div", minGrade: 2, minDifficulty: 30, generator: makeDivision },
    { op: "mixed", minGrade: 2, minDifficulty: 40, generator: makeMulAdd },
    { op: "mixed", minGrade: 3, minDifficulty: 50, generator: makeTwoStepMixed },
    { op: "mixed", minGrade: 4, minDifficulty: 62, generator: makeParentheses },
    { op: "add", minGrade: 5, minDifficulty: 66, generator: makeDecimalAdd },
    { op: "mul", minGrade: 5, minDifficulty: 72, generator: makeDecimalMul },
    { op: "mixed", minGrade: 6, minDifficulty: 78, generator: makePercent },
  ];

  const exactPool = catalog
    .filter((item) => selected.includes(item.op))
    .filter((item) => grade >= item.minGrade && difficulty >= item.minDifficulty)
    .map((item) => item.generator);

  if (exactPool.length) return exactPool;

  const selectedPool = catalog
    .filter((item) => selected.includes(item.op))
    .map((item) => item.generator);
  return selectedPool.length ? selectedPool : [makeAddition, makeSubtraction];
}

function makeAddition(difficulty, grade) {
  const band = numberBand(grade, difficulty);
  const a = rand(band.min, band.max);
  const b = rand(grade === 0 ? 0 : band.min, band.max);
  return { text: `${a} + ${b} = ?`, answer: a + b, skill: "加法" };
}

function makeSubtraction(difficulty, grade) {
  const band = numberBand(grade, difficulty);
  const a = rand(Math.max(band.min + 1, Math.floor(band.max * 0.45)), band.max);
  const b = rand(grade === 0 ? 0 : band.min, Math.max(grade === 0 ? 0 : band.min, a - 1));
  return { text: `${a} - ${b} = ?`, answer: a - b, skill: "减法" };
}

function makeAddSubMixed(difficulty, grade) {
  const band = numberBand(grade, difficulty);
  const a = rand(band.min, band.max);
  const b = rand(Math.max(2, Math.floor(band.min / 2)), Math.min(band.max, Math.floor(band.max * 0.45)));
  const c = rand(Math.max(1, Math.floor(band.min / 3)), Math.min(a + b - 1, Math.floor(band.max * 0.45)));
  return { text: `${a} + ${b} - ${c} = ?`, answer: a + b - c, skill: "加减混合" };
}

function makeMultiplication(difficulty, grade) {
  const a = grade <= 2 || difficulty < 42 ? rand(2, 9) : rand(6, 18);
  const b = difficulty < 52 ? rand(2, 9) : rand(8, grade >= 4 ? 36 : 24);
  return { text: `${a} × ${b} = ?`, answer: a * b, skill: "乘法" };
}

function makeDivision(difficulty, grade) {
  const divisor = difficulty < 52 ? rand(2, 9) : rand(3, grade >= 4 ? 18 : 12);
  const quotient = difficulty < 52 ? rand(2, 9) : rand(8, grade >= 4 ? 36 : 24);
  return { text: `${divisor * quotient} ÷ ${divisor} = ?`, answer: quotient, skill: "除法" };
}

function makeMulAdd(difficulty) {
  const a = rand(2, 9);
  const b = rand(2, difficulty < 56 ? 9 : 15);
  const c = rand(5, difficulty < 56 ? 40 : 100);
  return { text: `${a} × ${b} + ${c} = ?`, answer: a * b + c, skill: "乘加乘减" };
}

function makeTwoStepMixed(difficulty, grade) {
  const productMax = difficulty < 66 ? 80 : grade >= 5 ? 180 : 120;
  const a = rand(Math.floor(productMax * 0.45), difficulty < 66 ? 120 : 260);
  const b = rand(2, 12);
  const c = rand(2, 9);
  if (Math.random() > 0.5) {
    const product = b * c;
    const minuend = Math.max(a, product + rand(8, productMax));
    return { text: `${minuend} - ${b} × ${c} = ?`, answer: minuend - product, skill: "四则混合" };
  }
  return { text: `${a} + ${b} × ${c} = ?`, answer: a + b * c, skill: "四则混合" };
}

function makeParentheses(difficulty) {
  const b = rand(2, difficulty < 76 ? 9 : 18);
  const c = rand(2, 9);
  const a = rand(4, 30);
  return { text: `(${a} + ${b}) × ${c} = ?`, answer: (a + b) * c, skill: "括号混合" };
}

function makeDecimalAdd() {
  const a = rand(10, 99) / 10;
  const b = rand(10, 99) / 10;
  return { text: `${formatDecimal(a)} + ${formatDecimal(b)} = ?`, answer: round1(a + b), skill: "小数加法" };
}

function makeDecimalMul() {
  const a = rand(12, 99) / 10;
  const b = rand(2, 9);
  return { text: `${formatDecimal(a)} × ${b} = ?`, answer: round1(a * b), skill: "小数乘法" };
}

function makePercent() {
  const base = pick([50, 80, 100, 120, 150, 200, 300]);
  const percent = pick([10, 20, 25, 50, 75]);
  return { text: `${base} 的 ${percent}% = ?`, answer: (base * percent) / 100, skill: "百分数" };
}

function handleKey(key) {
  if (key === "退格") state.input = state.input.slice(0, -1);
  else if (key === "." && state.input.includes(".")) return;
  else if (key === "." && !state.input) state.input = "0.";
  else if (state.input.length < 6) state.input += key;
  els.answerDisplay.textContent = state.input || "_";
}

function setupSpeech() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    els.speechHint.textContent = "当前浏览器不支持语音识别，可以点数字回答";
    els.voiceButton.disabled = true;
    els.voiceButton.textContent = "语音暂不可用";
    return;
  }

  const recognition = new SpeechRecognition();
  recognition.lang = "zh-CN";
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  els.voiceButton.addEventListener("click", () => {
    els.voiceButton.classList.add("listening");
    els.voiceButton.textContent = "正在听...";
    els.speechHint.textContent = "请说出答案，比如：十五";
    recognition.start();
  });

  recognition.addEventListener("result", (event) => {
    const transcript = event.results[0][0].transcript;
    const parsed = parseSpokenNumber(transcript);
    if (parsed === null) {
      els.speechHint.textContent = `听到：${transcript}，请再说一次或点数字`;
      return;
    }
    state.input = String(parsed);
    els.answerDisplay.textContent = state.input;
    els.speechHint.textContent = `听到答案：${state.input}，点确定提交`;
  });

  recognition.addEventListener("end", () => {
    els.voiceButton.classList.remove("listening");
    els.voiceButton.textContent = "按一下，说答案";
  });

  recognition.addEventListener("error", () => {
    els.speechHint.textContent = "这次没听清，可以点数字回答";
  });
}

function parseSpokenNumber(text) {
  const normalized = text.replace(/[^\d零一二两三四五六七八九十百点.]/g, "");
  const numeric = normalized.match(/\d+(\.\d+)?/);
  if (numeric) return Number(numeric[0]);
  if (!normalized) return null;

  if (normalized.includes("点")) {
    const [left, right] = normalized.split("点");
    const leftValue = chineseInteger(left);
    const rightValue = right
      .split("")
      .map((char) => chineseDigit(char))
      .join("");
    if (leftValue === null || rightValue.includes("null")) return null;
    return Number(`${leftValue}.${rightValue}`);
  }

  return chineseInteger(normalized);
}

function chineseInteger(text) {
  if (!text) return null;
  if (!/[十百]/.test(text)) return text.split("").reduce((value, char) => {
    const digit = chineseDigit(char);
    return digit === null ? null : value * 10 + digit;
  }, 0);

  let total = 0;
  const hundredIndex = text.indexOf("百");
  if (hundredIndex >= 0) {
    const digit = hundredIndex === 0 ? 1 : chineseDigit(text[hundredIndex - 1]);
    if (digit === null) return null;
    total += digit * 100;
    text = text.slice(hundredIndex + 1);
  }

  const tenIndex = text.indexOf("十");
  if (tenIndex >= 0) {
    const digit = tenIndex === 0 ? 1 : chineseDigit(text[tenIndex - 1]);
    if (digit === null) return null;
    total += digit * 10;
    text = text.slice(tenIndex + 1);
  }

  if (text) {
    const digit = chineseDigit(text[text.length - 1]);
    if (digit === null) return null;
    total += digit;
  }
  return total;
}

function chineseDigit(char) {
  return {
    零: 0,
    一: 1,
    二: 2,
    两: 2,
    三: 3,
    四: 4,
    五: 5,
    六: 6,
    七: 7,
    八: 8,
    九: 9,
  }[char] ?? null;
}

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pick(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function round1(value) {
  return Math.round(value * 10) / 10;
}

function formatDecimal(value) {
  return value.toFixed(1);
}

function createDefaultProfile() {
  return {
    name: "小玩家",
    collection: [],
    creatureEnergy: {},
    creatureEvolution: {},
    progressByGrade: {},
    challenges: 0,
    totalAnswered: 0,
    bestAccuracy: 0,
    abilityScore: 0,
    bestAbilityScore: 0,
    lastAbilityGain: 0,
    history: [],
    updatedAt: "",
  };
}

function loadProfile() {
  try {
    const raw = localStorage.getItem("mathPlanetProfile");
    if (!raw) return createDefaultProfile();
    const profile = { ...createDefaultProfile(), ...JSON.parse(raw) };
    profile.collection = profile.collection.filter((id) => creatures.some((creature) => creature.id === id));
    profile.creatureEnergy = profile.creatureEnergy || {};
    profile.creatureEvolution = profile.creatureEvolution || {};
    return profile;
  } catch {
    return createDefaultProfile();
  }
}

function saveProfile() {
  state.profile.updatedAt = new Date().toISOString();
  localStorage.setItem("mathPlanetProfile", JSON.stringify(state.profile));
  renderSetup();
}

function saveProgress(accuracy, answered, avgTime = 0) {
  const previousAbility = state.profile.abilityScore || 0;
  const abilityScore = calculateAbilityScore(accuracy, answered, avgTime, state.targetDifficulty);
  const abilityGain = Math.max(0, abilityScore - previousAbility);
  state.profile.abilityScore = Math.max(previousAbility, abilityScore);
  state.profile.bestAbilityScore = Math.max(state.profile.bestAbilityScore || 0, abilityScore);
  state.profile.lastAbilityGain = abilityGain;
  state.profile.progressByGrade[state.selectedGrade] = {
    difficulty: state.targetDifficulty,
    mode: state.selectedMode,
    ops: Array.from(state.selectedOps),
    abilityScore: state.profile.abilityScore,
  };
  state.profile.challenges += 1;
  state.profile.totalAnswered += answered;
  state.profile.bestAccuracy = Math.max(state.profile.bestAccuracy || 0, accuracy);
  state.profile.history.unshift({
    player: state.profile.name,
    grade: state.selectedGrade,
    mode: state.selectedMode,
    answered,
    accuracy: Math.round(accuracy * 100),
    difficulty: Math.round(state.targetDifficulty),
    avgTime,
    abilityScore,
    abilityGain,
    at: new Date().toISOString(),
  });
  state.profile.history = state.profile.history.slice(0, 30);
  saveProfile();
}

function calculateAbilityScore(accuracy, answered, avgTime, difficulty) {
  const accuracyPart = Math.round(accuracy * 40);
  const difficultyPart = Math.round(difficulty * 0.55);
  const speedPart = Math.max(0, Math.round((18 - avgTime) * 1.8));
  const volumePart = Math.min(10, Math.round(answered / 2));
  return Math.max(0, accuracyPart + difficultyPart + speedPart + volumePart);
}

function renderCollectionPreview() {
  const owned = state.profile.collection
    .map((id) => creatures.find((creature) => creature.id === id))
    .filter(Boolean);

  if (!owned.length) {
    els.collectionPreview.innerHTML = `<span class="creature-chip">⭐ 通关后收集星宠</span>`;
    return;
  }

  els.collectionPreview.innerHTML = owned
    .slice(-6)
    .map((creature) => `
      <span class="creature-chip rarity-${creature.rarity}" title="${creature.label} · ${creature.skill}">
        <img src="${creatureImage(creature)}" alt="${creature.name}" />
        <span>
          <strong>${creature.name}</strong>
          <small>${creature.label}</small>
        </span>
      </span>
    `)
    .join("");
}

function awardCreature(accuracy, avgTime, context = getRewardContext(accuracy, avgTime)) {
  const rarity = pickRewardRarity(accuracy, avgTime, context);
  const pool = creatures.filter((creature) => creature.rarity === rarity);
  const creature = pick(pool);
  const alreadyOwned = state.profile.collection.includes(creature.id);
  if (!alreadyOwned) {
    state.profile.collection.push(creature.id);
  }
  const energyGain = alreadyOwned ? rewardEnergyFor(creature, context) : Math.max(1, Math.floor(rewardEnergyFor(creature, context) / 2));
  state.profile.creatureEnergy[creature.id] = (state.profile.creatureEnergy[creature.id] || 0) + energyGain;
  state.lastReward = { ...creature, alreadyOwned, energyGain, tooEasy: context.tooEasy };
  return state.lastReward;
}

function getRewardContext(accuracy, avgTime) {
  const profile = gradeProfiles[state.selectedGrade];
  const saved = state.profile.progressByGrade[state.selectedGrade]?.difficulty || profile.start;
  const tooEasy = state.targetDifficulty < saved - 6 || (accuracy >= 0.95 && avgTime <= 6 && state.targetDifficulty <= saved);
  const challengeBonus = clamp((state.targetDifficulty - profile.min) / Math.max(1, profile.max - profile.min), 0, 1);
  const accuracyBonus = clamp((accuracy - 0.7) / 0.3, 0, 1);
  const speedBonus = clamp((18 - avgTime) / 14, 0, 1);
  const projectedAbility = calculateAbilityScore(accuracy, state.roundAnswers.length || 10, avgTime, state.targetDifficulty);
  const abilityGain = Math.max(0, projectedAbility - (state.profile.abilityScore || 0));
  const growthBonus = clamp(abilityGain / 18, 0, 1);
  const performanceScore = challengeBonus * 0.42 + accuracyBonus * 0.34 + speedBonus * 0.24;
  return { tooEasy, challengeBonus, accuracyBonus, speedBonus, growthBonus, performanceScore, abilityGain, projectedAbility, savedDifficulty: saved };
}

function rewardEnergyFor(creature, context) {
  const base = { common: 3, rare: 5, epic: 8, legendary: 12 }[creature.rarity] || 3;
  return context.tooEasy
    ? Math.max(1, Math.floor(base / 2))
    : base + Math.round(context.performanceScore * 7) + Math.round(context.growthBonus * 4);
}

function pickRewardRarity(accuracy, avgTime, context = getRewardContext(accuracy, avgTime)) {
  const difficulty = state.targetDifficulty;
  if (context.tooEasy) {
    const roll = Math.random();
    if (roll < 0.84) return "common";
    if (roll < 0.98) return "rare";
    return "epic";
  }

  let legendaryChance = 0.01 + context.performanceScore * 0.16 + context.growthBonus * 0.06;
  let epicChance = 0.04 + context.performanceScore * 0.26 + context.growthBonus * 0.1;
  let rareChance = 0.18 + context.performanceScore * 0.26;

  if (accuracy >= 0.95) {
    legendaryChance += 0.05;
    epicChance += 0.06;
  }
  if (avgTime <= 8) {
    legendaryChance += 0.02;
    rareChance += 0.08;
  }
  if (context.challengeBonus < 0.35) {
    legendaryChance = Math.min(legendaryChance, 0.02);
    epicChance = Math.min(epicChance, 0.08);
  }

  const roll = Math.random();
  if (roll < legendaryChance) return "legendary";
  if (roll < legendaryChance + epicChance) return "epic";
  if (roll < legendaryChance + epicChance + rareChance) return "rare";
  return "common";
}

function renderReward(reward, accuracy) {
  if (!reward) {
    els.rewardCard.className = "reward-card";
    els.rewardCard.innerHTML = `
      <div class="creature-avatar fallback-avatar">💪</div>
      <div>
        <h3>差一点就能遇到星宠</h3>
        <p>正确率达到 70% 就有机会获得伙伴。下一轮题目会更适合你。</p>
      </div>
    `;
    return;
  }

  const duplicateText = reward.alreadyOwned ? "这只伙伴已经在图鉴里了，转化为伙伴能量。" : "新伙伴加入你的图鉴。";
  els.rewardCard.className = `reward-card rarity-${reward.rarity}`;
  els.rewardCard.innerHTML = `
    <div class="creature-avatar">
      <img src="${creatureImage(reward)}" alt="${reward.name}" />
    </div>
    <div class="reward-copy">
      <div class="reward-title-row">
        <h3>获得星宠：${reward.name}</h3>
        <span class="rarity-badge">${reward.label}</span>
      </div>
      <div class="creature-meta">
        <span>${reward.element}属性</span>
        <span>技能：${reward.skill}</span>
        <span>${reward.power}</span>
      </div>
      <p>${duplicateText} 获得 ${reward.energyGain} 点进化能量。${reward.tooEasy ? "这轮题低于当前水平，稀有率会降低。" : "高难度、高正确率、快速完成会提高稀有和超稀有概率。"}</p>
    </div>
  `;
}

function getOwnedCreatures() {
  return state.profile.collection
    .map((id) => creatures.find((creature) => creature.id === id))
    .filter(Boolean);
}

function getRemotePlayerId() {
  let id = localStorage.getItem("mathPlanetPlayerId");
  if (!id) {
    id = `STAR-${rand(1000, 9999)}`;
    localStorage.setItem("mathPlanetPlayerId", id);
  }
  return id;
}

function remoteEnabled() {
  return Boolean(remoteConfig.url && remoteConfig.anonKey && window.supabase?.createClient);
}

function getRemoteClient() {
  if (!remoteEnabled()) return null;
  if (!state.remoteClient) {
    state.remoteClient = window.supabase.createClient(remoteConfig.url, remoteConfig.anonKey);
  }
  return state.remoteClient;
}

function setBattleMode(mode) {
  state.battleMode = mode;
  els.battleModeTabs.forEach((button) => {
    button.classList.toggle("active", button.dataset.battleMode === mode);
  });
  els.remoteBattlePanel.classList.toggle("hidden", mode === "local");
  renderRemotePanel();
  renderBattle();
}

function renderRemotePanel() {
  state.remotePlayerId = state.remotePlayerId || getRemotePlayerId();
  els.remotePlayerId.textContent = state.remotePlayerId;
  if (state.battleMode === "local") return;
  if (!remoteEnabled()) {
    setRemoteStatus("联机服务还没配置。先按 supabase-schema.sql 建表，再填写 remote-config.js。当前仍可玩同屏对战。");
    return;
  }
  if (state.remoteRoomCode) {
    const sideText = state.remoteSide ? `你是玩家 ${state.remoteSide}` : "等待分配玩家位置";
    setRemoteStatus(`房间 ${state.remoteRoomCode} 已连接，${sideText}。把房间码发给好友即可加入。`);
  } else {
    setRemoteStatus(state.battleMode === "random" ? "点击随机匹配：有等待房间就加入，没有就创建一个。" : "创建房间后，把 6 位房间码发给好友。");
  }
}

function setRemoteStatus(message) {
  els.remoteStatusText.textContent = message;
}

function makeRoomCode() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let code = "";
  for (let i = 0; i < 6; i += 1) code += chars[rand(0, chars.length - 1)];
  return code;
}

function selectedPetForRemote() {
  return state.battlePickA || getOwnedCreatures()[0]?.id || null;
}

async function createRemoteRoom(mode = state.battleMode) {
  const client = getRemoteClient();
  const pickA = selectedPetForRemote();
  if (!client) return renderRemotePanel();
  if (!pickA) return setRemoteStatus("先完成一次练习获得星宠，再创建远程对战。");
  if (state.remoteBusy) return;
  state.remoteBusy = true;
  const code = makeRoomCode();
  const row = {
    code,
    mode,
    status: "waiting",
    host_id: state.remotePlayerId,
    guest_id: null,
    grade: state.selectedGrade,
    ops: Array.from(state.selectedOps),
    difficulty: state.targetDifficulty,
    turn: "A",
    hp_a: 100,
    hp_b: 100,
    pick_a: pickA,
    pick_b: null,
    question: null,
    question_started_at: null,
    winner: null,
    log: "等待好友加入",
  };
  const { data, error } = await client.from("battle_rooms").insert(row).select().single();
  state.remoteBusy = false;
  if (error) return setRemoteStatus(`创建房间失败：${error.message}`);
  state.remoteSide = "A";
  await watchRemoteRoom(data.code);
  applyRemoteRoom(data);
}

async function joinRemoteRoom(code, mode = state.battleMode) {
  const client = getRemoteClient();
  const pickB = selectedPetForRemote();
  if (!client) return renderRemotePanel();
  if (!pickB) return setRemoteStatus("先完成一次练习获得星宠，再加入远程对战。");
  const cleanCode = code.trim().toUpperCase();
  if (!cleanCode) return setRemoteStatus("请输入好友发来的 6 位房间码。");
  if (state.remoteBusy) return;
  state.remoteBusy = true;
  const { data: room, error: findError } = await client.from("battle_rooms").select("*").eq("code", cleanCode).maybeSingle();
  if (findError || !room) {
    state.remoteBusy = false;
    return setRemoteStatus("没有找到这个房间，请检查房间码。");
  }
  if (room.host_id === state.remotePlayerId) {
    state.remoteBusy = false;
    state.remoteSide = "A";
    await watchRemoteRoom(cleanCode);
    return applyRemoteRoom(room);
  }
  if (room.guest_id && room.guest_id !== state.remotePlayerId) {
    state.remoteBusy = false;
    return setRemoteStatus("这个房间已经满了，换一个房间码或随机匹配。");
  }
  const { data, error } = await client
    .from("battle_rooms")
    .update({ guest_id: state.remotePlayerId, pick_b: pickB, status: "ready", mode, log: "好友已加入，可以开始对战" })
    .eq("code", cleanCode)
    .select()
    .single();
  state.remoteBusy = false;
  if (error) return setRemoteStatus(`加入房间失败：${error.message}`);
  state.remoteSide = "B";
  await watchRemoteRoom(cleanCode);
  applyRemoteRoom(data);
}

async function randomMatch() {
  const client = getRemoteClient();
  if (!client) return renderRemotePanel();
  if (state.remoteBusy) return;
  state.remoteBusy = true;
  const { data, error } = await client
    .from("battle_rooms")
    .select("*")
    .eq("mode", "random")
    .eq("status", "waiting")
    .is("guest_id", null)
    .neq("host_id", state.remotePlayerId)
    .order("updated_at", { ascending: true })
    .limit(1);
  state.remoteBusy = false;
  if (error) return setRemoteStatus(`随机匹配失败：${error.message}`);
  if (data?.length) return joinRemoteRoom(data[0].code, "random");
  return createRemoteRoom("random");
}

async function watchRemoteRoom(code) {
  const client = getRemoteClient();
  if (!client) return;
  if (state.remoteChannel) client.removeChannel(state.remoteChannel);
  state.remoteRoomCode = code;
  state.remoteChannel = client
    .channel(`battle-room-${code}`)
    .on("postgres_changes", { event: "*", schema: "public", table: "battle_rooms", filter: `code=eq.${code}` }, (payload) => {
      if (payload.new) applyRemoteRoom(payload.new);
    })
    .subscribe();
}

function applyRemoteRoom(room) {
  state.remoteRoom = room;
  state.remoteRoomCode = room.code;
  if (room.host_id === state.remotePlayerId) state.remoteSide = "A";
  if (room.guest_id === state.remotePlayerId) state.remoteSide = "B";
  state.selectedGrade = room.grade ?? state.selectedGrade;
  state.selectedOps = new Set(room.ops?.length ? room.ops : Array.from(state.selectedOps));
  state.targetDifficulty = room.difficulty || state.targetDifficulty;
  state.battlePickA = room.pick_a;
  state.battlePickB = room.pick_b || state.battlePickB;
  state.battleTurn = room.turn || "A";
  state.battlePlayerHp = room.hp_a ?? 100;
  state.battleEnemyHp = room.hp_b ?? 100;
  state.battleQuestion = room.question;
  state.battleQuestionStartedAt = room.question_started_at ? Date.parse(room.question_started_at) : Date.now();
  state.battleStarted = room.status === "active";
  renderRemotePanel();
  renderBattle();
  if (room.status === "finished") renderRemoteFinish(room);
  else if (room.log) showBattleMessage(room.log, room.status === "waiting" ? "等待好友加入房间。" : "准备开始或继续对战。");
}

async function pushRemoteRoom(patch) {
  const client = getRemoteClient();
  if (!client || !state.remoteRoomCode) return null;
  const { data, error } = await client
    .from("battle_rooms")
    .update({ ...patch, updated_at: new Date().toISOString() })
    .eq("code", state.remoteRoomCode)
    .select()
    .single();
  if (error) {
    setRemoteStatus(`同步失败：${error.message}`);
    return null;
  }
  applyRemoteRoom(data);
  return data;
}

function openCollection() {
  renderCollectionPage();
  setScreen("collection");
}

function renderCollectionPage() {
  const ownedIds = new Set(state.profile.collection);
  const ownedCount = creatures.filter((creature) => ownedIds.has(creature.id)).length;
  els.collectionTitle.textContent = `已收集 ${ownedCount} / ${creatures.length} 只`;
  els.collectionGrid.innerHTML = creatures
    .map((creature) => {
      const owned = ownedIds.has(creature.id);
      const evolution = state.profile.creatureEvolution[creature.id] || 0;
      const energy = state.profile.creatureEnergy[creature.id] || 0;
      const need = evolveCost(evolution);
      const canEvolve = owned && evolution < 3 && energy >= need;
      return `
        <article class="dex-card rarity-${creature.rarity} ${owned ? "" : "locked"}">
          <img src="${creatureImage(creature)}" alt="${creature.name}" />
          <div>
            <div class="dex-title">
              <strong>${owned ? evolvedName(creature, evolution) : "未遇见"}</strong>
              <span>${creature.label}${owned ? ` · Lv.${evolution + 1}` : ""}</span>
            </div>
            <p>${creature.element}属性 · ${creature.skill}</p>
            <small>${owned ? `${creature.power} · 能量 ${energy}/${need}` : "继续闯关有机会遇见"}</small>
            ${owned ? `<div class="energy-bar"><span style="width:${Math.min(100, (energy / need) * 100)}%"></span></div>` : ""}
            ${canEvolve ? `<button class="evolve-button" data-evolve="${creature.id}">进化</button>` : ""}
          </div>
        </article>
      `;
    })
    .join("");
}

function evolveCost(level) {
  return [8, 18, 36, 999][level] || 999;
}

function evolvedName(creature, level) {
  if (!level) return creature.name;
  return `${creature.name}${["", "·一阶", "·二阶", "·究极"][level] || ""}`;
}

function evolveCreature(id) {
  const level = state.profile.creatureEvolution[id] || 0;
  const cost = evolveCost(level);
  if (level >= 3 || (state.profile.creatureEnergy[id] || 0) < cost) return;
  state.profile.creatureEnergy[id] -= cost;
  state.profile.creatureEvolution[id] = level + 1;
  saveProfile();
  renderCollectionPage();
}

function openBattle() {
  const owned = getOwnedCreatures();
  state.battlePickA = owned[0]?.id || null;
  state.battlePickB = owned[1]?.id || owned[0]?.id || null;
  state.battleSelecting = "A";
  state.battleTurn = "A";
  state.battleStarted = false;
  state.battlePlayerHp = 100;
  state.battleEnemyHp = 100;
  state.battleAnswer = "";
  state.battleTurns = 0;
  renderBattle();
  els.playerACard.classList.add("selecting");
  setScreen("battle");
}

function renderBattle() {
  const owned = getOwnedCreatures();
  renderBattleCard(els.playerACard, state.battlePickA, "玩家 A");
  renderBattleCard(els.playerBCard, state.battlePickB, "玩家 B");
  els.playerACard.classList.toggle("selecting", !state.battleStarted && state.battleSelecting === "A");
  els.playerBCard.classList.toggle("selecting", !state.battleStarted && state.battleSelecting === "B");
  els.battleResult.classList.add("hidden");
  els.battleMathPanel.classList.toggle("hidden", !state.battleStarted);
  els.battlePicker.classList.toggle("hidden", state.battleStarted);
  els.startBattleButton.classList.toggle("hidden", state.battleStarted);
  els.startBattleButton.textContent = state.battleMode === "local" ? "开始对战" : "开始远程对战";

  if (!owned.length) {
    els.battlePicker.innerHTML = `
      <div class="empty-state">
        <strong>还没有星宠</strong>
        <p>先完成一次练习，正确率达到 70% 就有机会获得第一只星宠。</p>
      </div>
    `;
    els.startBattleButton.disabled = true;
    return;
  }

  els.startBattleButton.disabled = false;
  els.battlePicker.innerHTML = owned
    .map((creature) => `
      <button class="battle-choice rarity-${creature.rarity}" data-creature="${creature.id}">
        <img src="${creatureImage(creature)}" alt="${creature.name}" />
        <strong>${creature.name}</strong>
        <span>${creature.label} · ${creature.skill}</span>
      </button>
    `)
    .join("");
  if (state.battleStarted) renderBattleQuestion();
}

function renderBattleCard(element, creatureId, fallback) {
  const creature = creatures.find((item) => item.id === creatureId);
  if (!creature) {
    element.className = "battle-pick empty";
    element.textContent = "选择星宠";
    return;
  }

  element.className = `battle-pick rarity-${creature.rarity}`;
  element.innerHTML = `
    <img src="${creatureImage(creature)}" alt="${creature.name}" />
    <strong>${evolvedName(creature, state.profile.creatureEvolution[creature.id] || 0)}</strong>
    <span>${fallback} · ${creature.label}</span>
  `;
}

function runBattle() {
  startMathBattle();
}

function startMathBattle() {
  if (state.battleMode !== "local") return startRemoteMathBattle();
  const playerA = creatures.find((creature) => creature.id === state.battlePickA);
  const playerB = creatures.find((creature) => creature.id === state.battlePickB);
  if (!playerA || !playerB) return;
  state.battleStarted = true;
  state.battleTurn = "A";
  state.battlePlayerHp = 100;
  state.battleEnemyHp = 100;
  state.battleTurns = 0;
  state.battleAnswer = "";
  nextBattleQuestion();
  renderBattle();
}

async function startRemoteMathBattle() {
  if (!state.remoteRoomCode || !state.remoteRoom) {
    setRemoteStatus("先创建房间、加入房间，或进行随机匹配。");
    return;
  }
  if (!state.remoteRoom.guest_id || !state.remoteRoom.pick_a || !state.remoteRoom.pick_b) {
    setRemoteStatus("等待另一位玩家加入并选择星宠。");
    return;
  }
  const difficulty = state.remoteRoom.difficulty || state.targetDifficulty;
  const question = generateQuestion(state.selectedGrade, difficulty);
  question.difficulty = difficulty;
  await pushRemoteRoom({
    status: "active",
    turn: "A",
    hp_a: 100,
    hp_b: 100,
    question,
    question_started_at: new Date().toISOString(),
    winner: null,
    log: "对战开始，玩家 A 先答题",
  });
}

function nextBattleQuestion() {
  const base = state.profile.progressByGrade[state.selectedGrade]?.difficulty || state.targetDifficulty;
  const difficulty = clamp(base + state.battleTurns * 2, gradeProfiles[state.selectedGrade].min, gradeProfiles[state.selectedGrade].max);
  state.battleQuestion = generateQuestion(state.selectedGrade, difficulty);
  state.battleQuestion.difficulty = difficulty;
  state.battleQuestionStartedAt = Date.now();
  state.battleAnswer = "";
}

function renderBattleQuestion() {
  const playerA = creatures.find((creature) => creature.id === state.battlePickA);
  const playerB = creatures.find((creature) => creature.id === state.battlePickB);
  const attacker = state.battleTurn === "A" ? playerA : playerB;
  els.battleHpLabel.textContent = `轮到玩家 ${state.battleTurn}：${attacker ? evolvedName(attacker, state.profile.creatureEvolution[attacker.id] || 0) : "星宠"}`;
  els.battlePlayerHp.style.width = `${state.battlePlayerHp}%`;
  els.battleEnemyHp.style.width = `${state.battleEnemyHp}%`;
  els.battleQuestionText.textContent = state.battleQuestion?.text || "";
  els.battleAnswerDisplay.textContent = state.battleAnswer || "_";
}

function renderBattleKeypad() {
  const keys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "0", "退格"];
  els.battleKeypad.innerHTML = keys
    .map((key) => `<button class="key-button" data-battle-key="${key}">${key}</button>`)
    .join("");
}

function handleBattleKey(key) {
  if (!state.battleStarted) return;
  if (key === "退格") state.battleAnswer = state.battleAnswer.slice(0, -1);
  else if (key === "." && state.battleAnswer.includes(".")) return;
  else if (key === "." && !state.battleAnswer) state.battleAnswer = "0.";
  else if (state.battleAnswer.length < 6) state.battleAnswer += key;
  els.battleAnswerDisplay.textContent = state.battleAnswer || "_";
}

function submitBattleAnswer() {
  if (state.battleMode !== "local") return submitRemoteBattleAnswer();
  if (!state.battleStarted || !state.battleAnswer || !state.battleQuestion) return;
  const playerA = creatures.find((creature) => creature.id === state.battlePickA);
  const playerB = creatures.find((creature) => creature.id === state.battlePickB);
  if (!playerA || !playerB) return;
  const attackerSide = state.battleTurn;
  const defenderSide = attackerSide === "A" ? "B" : "A";
  const attacker = attackerSide === "A" ? playerA : playerB;
  const defender = attackerSide === "A" ? playerB : playerA;

  const answer = Number(state.battleAnswer);
  const correct = answer === state.battleQuestion.answer;
  const time = Math.max(1, Math.round((Date.now() - state.battleQuestionStartedAt) / 1000));
  state.battleTurns += 1;

  if (correct) {
    const damage = battleDamage(attacker, defender, time, state.battleQuestion.difficulty);
    if (defenderSide === "A") state.battlePlayerHp = Math.max(0, state.battlePlayerHp - damage);
    else state.battleEnemyHp = Math.max(0, state.battleEnemyHp - damage);
    showBattleMessage(`玩家 ${attackerSide} 答对了，造成 ${damage} 点攻击。`, "算得越难、越准、越快，星宠攻击越强。");
  } else {
    const damage = counterDamage(defender, attacker);
    if (attackerSide === "A") state.battlePlayerHp = Math.max(0, state.battlePlayerHp - damage);
    else state.battleEnemyHp = Math.max(0, state.battleEnemyHp - damage);
    showBattleMessage(`玩家 ${attackerSide} 答错了，答案是 ${state.battleQuestion.answer}，受到 ${damage} 点反击。`, "认真计算可以保护自己的星宠。");
  }

  if (state.battleEnemyHp <= 0) return finishFriendBattle("A", correct, time);
  if (state.battlePlayerHp <= 0) return finishFriendBattle("B", correct, time);
  state.battleTurn = defenderSide;
  nextBattleQuestion();
  renderBattleQuestion();
}

async function submitRemoteBattleAnswer() {
  if (!state.battleStarted || !state.battleAnswer || !state.battleQuestion || !state.remoteRoom) return;
  if (state.remoteSide !== state.battleTurn) {
    showBattleMessage(`现在轮到玩家 ${state.battleTurn}`, "等好友答完这一题，你再继续攻击。");
    return;
  }
  const playerA = creatures.find((creature) => creature.id === state.battlePickA);
  const playerB = creatures.find((creature) => creature.id === state.battlePickB);
  if (!playerA || !playerB) return;
  const attackerSide = state.battleTurn;
  const defenderSide = attackerSide === "A" ? "B" : "A";
  const attacker = attackerSide === "A" ? playerA : playerB;
  const defender = attackerSide === "A" ? playerB : playerA;
  const answer = Number(state.battleAnswer);
  const correct = answer === state.battleQuestion.answer;
  const time = Math.max(1, Math.round((Date.now() - state.battleQuestionStartedAt) / 1000));
  let hpA = state.battlePlayerHp;
  let hpB = state.battleEnemyHp;
  let log = "";

  if (correct) {
    const damage = battleDamage(attacker, defender, time, state.battleQuestion.difficulty);
    if (defenderSide === "A") hpA = Math.max(0, hpA - damage);
    else hpB = Math.max(0, hpB - damage);
    log = `玩家 ${attackerSide} 答对了，造成 ${damage} 点攻击。`;
  } else {
    const damage = counterDamage(defender, attacker);
    if (attackerSide === "A") hpA = Math.max(0, hpA - damage);
    else hpB = Math.max(0, hpB - damage);
    log = `玩家 ${attackerSide} 答错了，答案是 ${state.battleQuestion.answer}，受到 ${damage} 点反击。`;
  }

  const winner = hpB <= 0 ? "A" : hpA <= 0 ? "B" : null;
  if (winner) {
    await pushRemoteRoom({
      status: "finished",
      hp_a: hpA,
      hp_b: hpB,
      winner,
      log: `玩家 ${winner} 获胜`,
    });
    return;
  }

  const difficulty = clamp((state.remoteRoom.difficulty || state.targetDifficulty) + 2, gradeProfiles[state.selectedGrade].min, gradeProfiles[state.selectedGrade].max);
  const nextQuestion = generateQuestion(state.selectedGrade, difficulty);
  nextQuestion.difficulty = difficulty;
  await pushRemoteRoom({
    difficulty,
    turn: defenderSide,
    hp_a: hpA,
    hp_b: hpB,
    question: nextQuestion,
    question_started_at: new Date().toISOString(),
    log,
  });
}

function showBattleMessage(message, detail = "下一位选手继续答题。") {
  els.battleResult.className = "battle-result";
  els.battleResult.innerHTML = `<div><h3>${message}</h3><p>${detail}</p></div>`;
}

function finishFriendBattle(winnerSide, correct, time) {
  const playerA = creatures.find((creature) => creature.id === state.battlePickA);
  const playerB = creatures.find((creature) => creature.id === state.battlePickB);
  const winner = winnerSide === "A" ? playerA : playerB;
  const loser = winnerSide === "A" ? playerB : playerA;
  if (!winner || !loser) return;
  state.battleStarted = false;
  const difficulty = state.battleQuestion?.difficulty || state.targetDifficulty;
  const performance = getBattlePerformance(true, correct, time, difficulty);
  const energy = 4 + Math.round(performance * 10);
  state.profile.creatureEnergy[winner.id] = (state.profile.creatureEnergy[winner.id] || 0) + energy;
  saveProfile();
  renderBattle();

  els.battleResult.className = `battle-result rarity-${winner.rarity}`;
  els.battleResult.innerHTML = `
    <div class="creature-avatar">
      <img src="${creatureImage(winner)}" alt="${winner.name}" />
    </div>
    <div>
      <h3>玩家 ${winnerSide} 获胜：${evolvedName(winner, state.profile.creatureEvolution[winner.id] || 0)}</h3>
      <p>胜者获得 ${energy} 点进化能量。对战攻击力由题目难度、答题速度、属性克制和星宠进化共同决定。</p>
      <div class="battle-score">
        <span>难度：${Math.round(difficulty)}</span>
        <span>表现：${Math.round(performance * 100)}%</span>
      </div>
    </div>
  `;
}

function renderRemoteFinish(room) {
  const winner = room.winner === "A"
    ? creatures.find((creature) => creature.id === room.pick_a)
    : creatures.find((creature) => creature.id === room.pick_b);
  if (!winner) return;
  const wonLocally = state.remoteSide === room.winner;
  if (wonLocally && state.remoteAwardedRoom !== room.code) {
    const energy = 8 + Math.round((room.difficulty || state.targetDifficulty) / 10);
    state.profile.creatureEnergy[winner.id] = (state.profile.creatureEnergy[winner.id] || 0) + energy;
    state.remoteAwardedRoom = room.code;
    saveProfile();
  }
  els.battleResult.className = `battle-result rarity-${winner.rarity}`;
  els.battleResult.innerHTML = `
    <div class="creature-avatar">
      <img src="${creatureImage(winner)}" alt="${winner.name}" />
    </div>
    <div>
      <h3>玩家 ${room.winner} 获胜：${evolvedName(winner, state.profile.creatureEvolution[winner.id] || 0)}</h3>
      <p>${wonLocally ? "你赢得了远程对战，星宠获得进化能量。" : "好友赢得了这场对战，下次可以挑战更快答题。"} 算得越快、题越难，攻击越强。</p>
      <div class="battle-score">
        <span>房间：${room.code}</span>
        <span>难度：${Math.round(room.difficulty || state.targetDifficulty)}</span>
      </div>
    </div>
  `;
}

function battleDamage(player, enemy, time, difficulty) {
  const difficultyBonus = Math.round(difficulty / 6);
  const speedBonus = Math.max(0, 18 - time);
  const evolutionBonus = (state.profile.creatureEvolution[player.id] || 0) * 5;
  const element = elementBonus(player.element, enemy.element);
  return 18 + difficultyBonus + speedBonus + evolutionBonus + element;
}

function counterDamage(enemy, player) {
  return 12 + Math.round(({ common: 2, rare: 6, epic: 10, legendary: 14 }[enemy.rarity] || 2) / 2) + Math.round(elementBonus(enemy.element, player.element) / 2);
}

function getBattlePerformance(won, correct, time, difficulty) {
  const profile = gradeProfiles[state.selectedGrade];
  const difficultyScore = clamp((difficulty - profile.min) / Math.max(1, profile.max - profile.min), 0, 1);
  const speedScore = clamp((18 - time) / 14, 0, 1);
  return (won ? 0.35 : 0) + (correct ? 0.25 : 0) + difficultyScore * 0.25 + speedScore * 0.15;
}

function battleScore(creature, opponent) {
  const rarityBase = {
    common: 30,
    rare: 45,
    epic: 62,
    legendary: 78,
  }[creature.rarity] || 30;
  const evolutionBonus = (state.profile.creatureEvolution[creature.id] || 0) * 12;
  const skillBonus = creature.skill.length + creature.element.charCodeAt(0) % 8;
  const abilityBonus = learnerBattleBonus(creature);
  const matchupBonus = elementBonus(creature.element, opponent.element);
  return rarityBase + evolutionBonus + skillBonus + abilityBonus + matchupBonus + rand(1, 20);
}

function learnerBattleBonus(creature) {
  const latest = state.profile.history[0] || {};
  const accuracy = latest.accuracy || Math.round((state.profile.bestAccuracy || 0) * 100);
  const difficulty = latest.difficulty || state.targetDifficulty;
  const avgTime = latest.avgTime || 12;
  const abilityScore = state.profile.abilityScore || latest.abilityScore || 0;
  const abilityGain = state.profile.lastAbilityGain || latest.abilityGain || 0;
  const accuracyBonus = Math.round(accuracy / 8);
  const difficultyBonus = Math.round(difficulty / 8);
  const speedBonus = Math.max(0, 14 - avgTime);
  const growthBonus = Math.min(18, Math.round(abilityGain * 1.2));
  const abilityBase = Math.round(abilityScore / 12);
  const statBonus = {
    accuracy: accuracyBonus,
    difficulty: difficultyBonus,
    speed: speedBonus,
    streak: Math.min(12, state.currentStreak * 3),
    all: Math.round((accuracyBonus + difficultyBonus + speedBonus + growthBonus) / 1.5),
  }[creature.stat] || 4;
  return Math.max(0, abilityBase + statBonus + growthBonus);
}

function elementBonus(element, opponentElement) {
  const wins = {
    水: ["火", "岩"],
    火: ["草", "冰"],
    草: ["水", "岩"],
    电: ["水", "风"],
    冰: ["草", "风"],
    风: ["火"],
    光: ["月"],
    月: ["电"],
    晶: ["王"],
    王: ["星"],
    星: ["晶", "时"],
    时: ["光"],
    钢: ["冰"],
    岩: ["电"],
  };
  return wins[element]?.includes(opponentElement) ? 10 : 0;
}

function creatureImage(creature) {
  const art = creatureArt(creature);
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160">
      <defs>
        <radialGradient id="bg" cx="30%" cy="18%" r="86%">
          <stop offset="0%" stop-color="#ffffff"/>
          <stop offset="52%" stop-color="${creature.color}"/>
          <stop offset="100%" stop-color="${creature.accent}"/>
        </radialGradient>
        <linearGradient id="body" x1="24" x2="126" y1="38" y2="132">
          <stop offset="0%" stop-color="#ffffff"/>
          <stop offset="42%" stop-color="${creature.color}"/>
          <stop offset="100%" stop-color="${creature.accent}"/>
        </linearGradient>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="9" stdDeviation="5" flood-color="#17324d" flood-opacity="0.2"/>
        </filter>
      </defs>
      <rect width="160" height="160" rx="32" fill="url(#bg)"/>
      <path d="M18 36 C44 12 96 8 136 34" fill="none" stroke="#fff" stroke-width="5" opacity="0.42"/>
      <path d="M22 128 C52 148 104 150 138 126" fill="none" stroke="#fff" stroke-width="4" opacity="0.34"/>
      <circle cx="34" cy="34" r="12" fill="#fff" opacity="0.55"/>
      <circle cx="125" cy="42" r="7" fill="#fff" opacity="0.45"/>
      <circle cx="132" cy="111" r="5" fill="#fff" opacity="0.35"/>
      ${raritySparkles(creature.rarity)}
      <g filter="url(#shadow)" stroke="#17324d" stroke-linecap="round" stroke-linejoin="round">
        ${art.back}
        ${art.body}
        <ellipse cx="65" cy="88" rx="7" ry="8" fill="#17324d" stroke="none"/>
        <ellipse cx="96" cy="88" rx="7" ry="8" fill="#17324d" stroke="none"/>
        <circle cx="67" cy="85" r="2.3" fill="#fff" stroke="none"/>
        <circle cx="98" cy="85" r="2.3" fill="#fff" stroke="none"/>
        <path d="M69 107 Q80 116 92 107" fill="none" stroke="#17324d" stroke-width="5"/>
        <circle cx="51" cy="101" r="8" fill="#fff" opacity="0.42" stroke="none"/>
        <circle cx="110" cy="101" r="8" fill="#fff" opacity="0.42" stroke="none"/>
        ${art.front}
      </g>
      <g>
        <circle cx="124" cy="124" r="23" fill="#fff" opacity="0.92"/>
        <circle cx="124" cy="124" r="20" fill="none" stroke="${creature.accent}" stroke-width="3" opacity="0.78"/>
        <text x="124" y="133" text-anchor="middle" font-size="27">${creature.icon}</text>
      </g>
    </svg>
  `;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function creatureArt(creature) {
  const baseBody = `<ellipse cx="80" cy="92" rx="39" ry="37" fill="url(#body)" stroke-width="4"/>`;
  const cap = `<path d="M55 70 Q80 48 106 70" fill="#fff" opacity="0.36" stroke="none"/>`;
  const arts = {
    seedling: {
      back: `<path d="M55 67 C36 47 42 25 66 42 C73 49 72 61 65 70" fill="${creature.accent}" stroke-width="4"/><path d="M105 67 C126 47 119 25 94 42 C87 49 88 61 95 70" fill="${creature.accent}" stroke-width="4"/>`,
      body: `${baseBody}${cap}`,
      front: `<path d="M80 55 C70 37 80 27 95 36 C93 50 88 58 80 62" fill="#eaffc7" stroke-width="4"/><path d="M80 57 C88 39 105 39 112 54 C101 64 91 66 80 62" fill="#eaffc7" stroke-width="4"/>`,
    },
    spark: {
      back: `<path d="M49 72 L34 43 L62 56 L70 72" fill="${creature.accent}" stroke-width="4"/><path d="M111 72 L126 43 L98 56 L90 72" fill="${creature.accent}" stroke-width="4"/>`,
      body: `${baseBody}${cap}`,
      front: `<path d="M80 49 L91 70 H80 L88 93 L67 63 H79 Z" fill="#fff6a6" stroke-width="4"/>`,
    },
    bubble: {
      back: `<path d="M45 73 C24 72 18 94 34 105 C48 115 59 101 56 85" fill="${creature.accent}" stroke-width="4"/><path d="M115 73 C136 72 142 94 126 105 C112 115 101 101 104 85" fill="${creature.accent}" stroke-width="4"/>`,
      body: `<ellipse cx="80" cy="95" rx="44" ry="34" fill="url(#body)" stroke-width="4"/>${cap}`,
      front: `<circle cx="48" cy="59" r="9" fill="#fff" opacity="0.72" stroke-width="3"/><circle cx="112" cy="58" r="7" fill="#fff" opacity="0.65" stroke-width="3"/>`,
    },
    ember: {
      back: `<path d="M52 72 C38 50 44 35 62 28 C67 45 72 54 80 68" fill="${creature.accent}" stroke-width="4"/><path d="M108 72 C122 50 116 35 98 28 C93 45 88 54 80 68" fill="${creature.accent}" stroke-width="4"/>`,
      body: `${baseBody}${cap}`,
      front: `<path d="M80 51 C67 66 69 80 80 87 C93 78 96 64 80 51Z" fill="#fff0a6" stroke-width="4"/>`,
    },
    snow: {
      back: `<circle cx="45" cy="66" r="17" fill="#fff" opacity="0.8" stroke-width="4"/><circle cx="115" cy="66" r="17" fill="#fff" opacity="0.8" stroke-width="4"/>`,
      body: `<ellipse cx="80" cy="94" rx="43" ry="39" fill="url(#body)" stroke-width="4"/>${cap}`,
      front: `<path d="M80 51 V70 M68 58 L92 58 M70 48 L90 68 M90 48 L70 68" stroke="#fff" stroke-width="5" fill="none"/>`,
    },
    moon: {
      back: `<path d="M53 74 L43 37 L70 61" fill="${creature.accent}" stroke-width="4"/><path d="M107 74 L117 37 L90 61" fill="${creature.accent}" stroke-width="4"/>`,
      body: `${baseBody}${cap}`,
      front: `<path d="M91 45 C75 48 69 62 78 74 C63 71 55 55 64 42 C72 31 86 32 91 45Z" fill="#fff5b8" stroke-width="4"/>`,
    },
    crystal: {
      back: `<path d="M48 72 L60 35 L80 63 L100 35 L112 72" fill="${creature.accent}" stroke-width="4"/>`,
      body: `<path d="M80 52 C111 57 127 83 113 113 C98 137 61 137 47 113 C33 83 49 57 80 52Z" fill="url(#body)" stroke-width="4"/>${cap}`,
      front: `<path d="M80 55 L94 77 L80 96 L66 77 Z" fill="#ffffff" opacity="0.72" stroke-width="4"/>`,
    },
    rocket: {
      back: `<path d="M45 86 L25 99 L46 107" fill="${creature.accent}" stroke-width="4"/><path d="M115 86 L135 99 L114 107" fill="${creature.accent}" stroke-width="4"/>`,
      body: `<ellipse cx="80" cy="91" rx="37" ry="43" fill="url(#body)" stroke-width="4"/>${cap}`,
      front: `<path d="M80 41 C68 56 68 72 80 82 C92 72 92 56 80 41Z" fill="#fff" opacity="0.72" stroke-width="4"/><path d="M70 124 L80 143 L90 124" fill="#ff8a34" stroke-width="4"/>`,
    },
    crown: {
      back: `<path d="M47 70 L34 43 L58 57 L80 35 L102 57 L126 43 L113 70" fill="#ffe17a" stroke-width="4"/>`,
      body: `<ellipse cx="80" cy="94" rx="44" ry="37" fill="url(#body)" stroke-width="4"/>${cap}`,
      front: `<path d="M58 57 L69 67 L80 53 L91 67 L102 57 L99 78 H61 Z" fill="#fff2a8" stroke-width="4"/>`,
    },
    star: {
      back: `<path d="M80 28 L91 59 L124 57 L98 78 L110 110 L80 91 L50 110 L62 78 L36 57 L69 59 Z" fill="${creature.accent}" opacity="0.96" stroke-width="4"/>`,
      body: `<ellipse cx="80" cy="93" rx="38" ry="36" fill="url(#body)" stroke-width="4"/>${cap}`,
      front: `<path d="M80 48 L87 65 L105 66 L91 78 L96 96 L80 86 L64 96 L69 78 L55 66 L73 65 Z" fill="#fff8b8" stroke-width="4"/>`,
    },
  };
  return arts[creature.id] || { back: "", body: `${baseBody}${cap}`, front: "" };
}

function raritySparkles(rarity) {
  if (rarity === "common") return `<circle cx="28" cy="118" r="3" fill="#fff" opacity="0.45"/>`;
  if (rarity === "rare") {
    return `<path d="M29 112 L34 122 L44 127 L34 132 L29 142 L24 132 L14 127 L24 122Z" fill="#fff" opacity="0.58"/>`;
  }
  if (rarity === "epic") {
    return `<path d="M28 108 L35 123 L50 130 L35 137 L28 152 L21 137 L6 130 L21 123Z" fill="#fff" opacity="0.62"/><circle cx="132" cy="92" r="4" fill="#fff" opacity="0.5"/>`;
  }
  return `<path d="M27 103 L36 123 L57 132 L36 141 L27 160 L18 141 L-3 132 L18 123Z" fill="#fff" opacity="0.68"/><path d="M128 72 L134 84 L146 90 L134 96 L128 108 L122 96 L110 90 L122 84Z" fill="#fff" opacity="0.58"/>`;
}

function numberBand(grade, difficulty) {
  if (grade === 0) {
    if (difficulty < 6) return { min: 1, max: 5 };
    if (difficulty < 10) return { min: 1, max: 8 };
    return { min: 1, max: 10 };
  }

  if (grade <= 1) {
    if (difficulty < 18) return { min: 1, max: 10 };
    if (difficulty < 26) return { min: 8, max: 20 };
    return { min: 10, max: 100 };
  }

  if (grade === 2) {
    if (difficulty < 30) return { min: 10, max: 50 };
    if (difficulty < 42) return { min: 20, max: 100 };
    return { min: 40, max: 200 };
  }

  if (grade === 3) {
    if (difficulty < 40) return { min: 30, max: 120 };
    if (difficulty < 56) return { min: 100, max: 500 };
    return { min: 200, max: 1000 };
  }

  if (grade === 4) {
    if (difficulty < 56) return { min: 100, max: 500 };
    if (difficulty < 72) return { min: 200, max: 1000 };
    return { min: 500, max: 3000 };
  }

  if (grade === 5) {
    if (difficulty < 66) return { min: 200, max: 1000 };
    if (difficulty < 82) return { min: 500, max: 3000 };
    return { min: 1000, max: 9000 };
  }

  if (difficulty < 76) return { min: 500, max: 3000 };
  if (difficulty < 90) return { min: 1000, max: 9000 };
  return { min: 2000, max: 20000 };
}

function bindEvents() {
  els.saveProfileButton.addEventListener("click", () => {
    const name = els.playerNameInput.value.trim();
    state.profile.name = name || "小玩家";
    saveProfile();
  });

  els.playerNameInput.addEventListener("keydown", (event) => {
    if (event.key !== "Enter") return;
    state.profile.name = els.playerNameInput.value.trim() || "小玩家";
    saveProfile();
  });

  els.gradeOptions.addEventListener("click", (event) => {
    const button = event.target.closest("[data-grade]");
    if (!button) return;
    state.selectedGrade = Number(button.dataset.grade);
    applySavedGradeSettings();
    renderSetup();
  });

  els.fontOptions.addEventListener("click", (event) => {
    const button = event.target.closest("[data-font]");
    if (!button) return;
    state.selectedFont = button.dataset.font;
    renderSetup();
  });

  els.operationOptions.addEventListener("click", (event) => {
    const button = event.target.closest("[data-op]");
    if (!button) return;
    const op = button.dataset.op;
    if (state.selectedOps.has(op)) {
      state.selectedOps.delete(op);
    } else {
      state.selectedOps.add(op);
    }
    renderSetup();
  });

  els.operationOptions.addEventListener("dragstart", (event) => {
    const button = event.target.closest("[data-op]");
    if (!button) return;
    button.classList.add("dragging");
    event.dataTransfer.setData("text/plain", button.dataset.op);
  });

  els.operationOptions.addEventListener("dragend", (event) => {
    const button = event.target.closest("[data-op]");
    if (button) button.classList.remove("dragging");
  });

  els.operationOptions.addEventListener("dragover", (event) => {
    event.preventDefault();
  });

  els.operationOptions.addEventListener("drop", (event) => {
    event.preventDefault();
    const dragged = event.dataTransfer.getData("text/plain");
    const target = event.target.closest("[data-op]");
    if (!dragged || !target || dragged === target.dataset.op) return;
    const nextOrder = state.operationOrder.filter((op) => op !== dragged);
    const targetIndex = nextOrder.indexOf(target.dataset.op);
    nextOrder.splice(targetIndex, 0, dragged);
    state.operationOrder = nextOrder;
    renderSetup();
  });

  els.modeOptions.addEventListener("click", (event) => {
    const button = event.target.closest("[data-mode]");
    if (!button) return;
    state.selectedMode = button.dataset.mode;
    renderSetup();
  });

  els.startButton.addEventListener("click", startGame);
  els.collectionButton.addEventListener("click", openCollection);
  els.battleButton.addEventListener("click", openBattle);
  els.collectionBackButton.addEventListener("click", () => setScreen("setup"));
  els.battleBackButton.addEventListener("click", () => setScreen("setup"));
  els.collectionGrid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-evolve]");
    if (!button) return;
    evolveCreature(button.dataset.evolve);
  });
  els.backButton.addEventListener("click", () => {
    stopChallengeTimer();
    setScreen("setup");
  });
  els.submitButton.addEventListener("click", submitAnswer);
  els.continueButton.addEventListener("click", continueRound);
  els.homeButton.addEventListener("click", () => {
    stopChallengeTimer();
    setScreen("setup");
  });

  els.battleModeTabs.forEach((button) => {
    button.addEventListener("click", () => setBattleMode(button.dataset.battleMode));
  });

  els.createRoomButton.addEventListener("click", () => createRemoteRoom("room"));
  els.joinRoomButton.addEventListener("click", () => joinRemoteRoom(els.roomCodeInput.value, "room"));
  els.randomMatchButton.addEventListener("click", () => {
    setBattleMode("random");
    randomMatch();
  });

  els.playerACard.addEventListener("click", () => {
    if (state.battleStarted) return;
    state.battleSelecting = "A";
    renderBattle();
  });

  els.playerBCard.addEventListener("click", () => {
    if (state.battleStarted) return;
    state.battleSelecting = "B";
    renderBattle();
  });

  els.battlePicker.addEventListener("click", (event) => {
    const button = event.target.closest("[data-creature]");
    if (!button) return;
    if (state.battleMode !== "local") {
      state.battlePickA = button.dataset.creature;
      if (state.remoteRoomCode && state.remoteSide === "A") pushRemoteRoom({ pick_a: state.battlePickA });
      if (state.remoteRoomCode && state.remoteSide === "B") pushRemoteRoom({ pick_b: state.battlePickA });
      renderBattle();
      return;
    }
    if (state.battleSelecting === "A") {
      state.battlePickA = button.dataset.creature;
      state.battleSelecting = "B";
    } else {
      state.battlePickB = button.dataset.creature;
      state.battleSelecting = "A";
    }
    renderBattle();
  });

  els.startBattleButton.addEventListener("click", runBattle);
  els.battleKeypad.addEventListener("click", (event) => {
    const button = event.target.closest("[data-battle-key]");
    if (!button) return;
    handleBattleKey(button.dataset.battleKey);
  });
  els.battleSubmitButton.addEventListener("click", submitBattleAnswer);

  els.keypad.addEventListener("click", (event) => {
    const button = event.target.closest("[data-key]");
    if (!button) return;
    handleKey(button.dataset.key);
  });

  window.addEventListener("keydown", (event) => {
    if (state.phase !== "practice") return;
    if (/^\d$/.test(event.key)) handleKey(event.key);
    if (event.key === ".") handleKey(".");
    if (event.key === "Backspace") handleKey("退格");
    if (event.key === "Enter") submitAnswer();
  });
}

function applySavedGradeSettings() {
  const progress = state.profile.progressByGrade[state.selectedGrade];
  if (!progress) return;
  if (progress.mode) state.selectedMode = progress.mode;
  if (Array.isArray(progress.ops) && progress.ops.length) {
    state.selectedOps = new Set(progress.ops.filter((op) => operationOptions.some((item) => item.id === op)));
  }
}

state.profile = loadProfile();
state.remotePlayerId = getRemotePlayerId();
applySavedGradeSettings();
renderSetup();
renderRemotePanel();
renderKeypad();
renderBattleKeypad();
bindEvents();
setupSpeech();
