let time = 25 * 60;
let timerInterval = null;
let isRunning = false;

const timerDisplay = document.getElementById('focus-timer');
const clockDisplay = document.getElementById('current-time');

function updateClock() {
  const now = new Date();
  clockDisplay.textContent = now.toLocaleTimeString();
}
setInterval(updateClock, 1000);
updateClock();

function updateTimerDisplay() {
  const minutes = Math.floor(time / 60).toString().padStart(2, '0');
  const seconds = (time % 60).toString().padStart(2, '0');
  timerDisplay.textContent = `${minutes}:${seconds}`;
}

// Short Break Timer
let shortBreakTime = 5 * 60;
let shortBreakTimerInterval = null;
let shortBreakIsRunning = false;

const shortBreakTimerDisplay = document.getElementById('short-break-timer');

function updateShortBreakTimerDisplay() {
  const minutes = Math.floor(shortBreakTime / 60).toString().padStart(2, '0');
  const seconds = (shortBreakTime % 60).toString().padStart(2, '0');
  shortBreakTimerDisplay.textContent = `${minutes}:${seconds}`;
}

function startShortBreakTimer() {
  if (shortBreakIsRunning) return;
  shortBreakIsRunning = true;
  shortBreakTimerInterval = setInterval(() => {
    if (shortBreakTime > 0) {
      shortBreakTime--;
      updateShortBreakTimerDisplay();
    } else {
      clearInterval(shortBreakTimerInterval);
      shortBreakIsRunning = false;
      alert("Short break time's up!");
    }
  }, 1000);
}

function pauseShortBreakTimer() {
  clearInterval(shortBreakTimerInterval);
  shortBreakIsRunning = false;
}

function resetShortBreakTimer() {
  pauseShortBreakTimer();
  shortBreakTime = 5 * 60;
  updateShortBreakTimerDisplay();
}

updateShortBreakTimerDisplay();

function startTimer() {
  if (isRunning) return;
  isRunning = true;
  timerInterval = setInterval(() => {
    if (time > 0) {
      time--;
      updateTimerDisplay();
    } else {
      clearInterval(timerInterval);
      isRunning = false;
      alert("Time's up!");
    }
  }, 1000);
}

// Long Break Timer
let longBreakTime = 10 * 60;
let longBreakTimerInterval = null;
let longBreakIsRunning = false;

const longBreakTimerDisplay = document.getElementById('long-break-timer');

function updateLongBreakTimerDisplay() {
  const minutes = Math.floor(longBreakTime / 60).toString().padStart(2, '0');
  const seconds = (longBreakTime % 60).toString().padStart(2, '0');
  longBreakTimerDisplay.textContent = `${minutes}:${seconds}`;
}

function startLongBreakTimer() {
  if (longBreakIsRunning) return;
  longBreakIsRunning = true;
  longBreakTimerInterval = setInterval(() => {
    if (longBreakTime > 0) {
      longBreakTime--;
      updateLongBreakTimerDisplay();
    } else {
      clearInterval(longBreakTimerInterval);
      longBreakIsRunning = false;
      alert("Long break time's up!");
    }
  }, 1000);
}

function pauseLongBreakTimer() {
  clearInterval(longBreakTimerInterval);
  longBreakIsRunning = false;
}

function resetLongBreakTimer() {
  pauseLongBreakTimer();
  longBreakTime = 10 * 60;
  updateLongBreakTimerDisplay();
}

updateLongBreakTimerDisplay();

// One Hour Timer
let oneHourTime = 60 * 60;
let oneHourTimerInterval = null;
let oneHourIsRunning = false;

const oneHourTimerDisplay = document.getElementById('one-hour-timer');

function updateOneHourTimerDisplay() {
  const minutes = Math.floor(oneHourTime / 60).toString().padStart(2, '0');
  const seconds = (oneHourTime % 60).toString().padStart(2, '0');
  oneHourTimerDisplay.textContent = `${minutes}:${seconds}`;
}

function startOneHourTimer() {
  if (oneHourIsRunning) return;
  oneHourIsRunning = true;
  oneHourTimerInterval = setInterval(() => {
    if (oneHourTime > 0) {
      oneHourTime--;
      updateOneHourTimerDisplay();
    } else {
      clearInterval(oneHourTimerInterval);
      oneHourIsRunning = false;
      alert("One hour time's up!");
    }
  }, 1000);
}

function pauseOneHourTimer() {
  clearInterval(oneHourTimerInterval);
  oneHourIsRunning = false;
}

function resetOneHourTimer() {
  pauseOneHourTimer();
  oneHourTime = 60 * 60;
  updateOneHourTimerDisplay();
}

updateOneHourTimerDisplay();

// Two Hour Timer
let twoHourTime = 120 * 60;
let twoHourTimerInterval = null;
let twoHourIsRunning = false;

const twoHourTimerDisplay = document.getElementById('two-hour-timer');

function updateTwoHourTimerDisplay() {
  const minutes = Math.floor(twoHourTime / 60).toString().padStart(2, '0');
  const seconds = (twoHourTime % 60).toString().padStart(2, '0');
  twoHourTimerDisplay.textContent = `${minutes}:${seconds}`;
}

function startTwoHourTimer() {
  if (twoHourIsRunning) return;
  twoHourIsRunning = true;
  twoHourTimerInterval = setInterval(() => {
    if (twoHourTime > 0) {
      twoHourTime--;
      updateTwoHourTimerDisplay();
    } else {
      clearInterval(twoHourTimerInterval);
      twoHourIsRunning = false;
      alert("Two hour time's up!");
    }
  }, 1000);
}

function pauseTwoHourTimer() {
  clearInterval(twoHourTimerInterval);
  twoHourIsRunning = false;
}

function resetTwoHourTimer() {
  pauseTwoHourTimer();
  twoHourTime = 120 * 60;
  updateTwoHourTimerDisplay();
}

updateTwoHourTimerDisplay();

// Ten Hour Timer
let tenHourTime = 600 * 60;
let tenHourTimerInterval = null;
let tenHourIsRunning = false;

const tenHourTimerDisplay = document.getElementById('ten-hour-timer');

function updateTenHourTimerDisplay() {
  const minutes = Math.floor(tenHourTime / 60).toString().padStart(2, '0');
  const seconds = (tenHourTime % 60).toString().padStart(2, '0');
  tenHourTimerDisplay.textContent = `${minutes}:${seconds}`;
}

function startTenHourTimer() {
  if (tenHourIsRunning) return;
  tenHourIsRunning = true;
  tenHourTimerInterval = setInterval(() => {
    if (tenHourTime > 0) {
      tenHourTime--;
      updateTenHourTimerDisplay();
    } else {
      clearInterval(tenHourTimerInterval);
      tenHourIsRunning = false;
      alert("Ten hour time's up!");
    }
  }, 1000);
}

function pauseTenHourTimer() {
  clearInterval(tenHourTimerInterval);
  tenHourIsRunning = false;
}

function resetTenHourTimer() {
  pauseTenHourTimer();
  tenHourTime = 600 * 60;
  updateTenHourTimerDisplay();
}

updateTenHourTimerDisplay();

function pauseTimer() {
  clearInterval(timerInterval);
  isRunning = false;
}

function resetTimer() {
  pauseTimer();
  time = 25 * 60;
  updateTimerDisplay();
}

updateTimerDisplay();
