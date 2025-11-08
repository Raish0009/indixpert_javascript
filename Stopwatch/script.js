// Get all elements
let startBtn = document.getElementById("startBtn");
let stopBtn = document.getElementById("stopBtn");
let resetBtn = document.getElementById("resetBtn");
let timeDisplay = document.getElementById("time-display");

// Variables
let startTime = 0;
let elapsedTime = 0;
let timerInterval = null;
let running = false;

// Format time nicely (HH:MM:SS.MS)
function formatTime(time) {
  let hours = Math.floor(time / (1000 * 60 * 60));
  let minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((time % (1000 * 60)) / 1000);
  let milliseconds = time % 1000;

  // Always 2 digits (or 3 for ms)
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  let ms = milliseconds.toString().padStart(3, "0");

  return `${h} : ${m} : ${s} . ${ms}`;
}

// Start the stopwatch
function startTimer() {
  if (!running) {
    running = true;
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(updateTime, 10); // update every 10ms
  }
}

// Stop the stopwatch
function stopTimer() {
  if (running) {
    running = false;
    clearInterval(timerInterval);
    elapsedTime = Date.now() - startTime;
  }
}

// Reset the stopwatch
function resetTimer() {
  running = false;
  clearInterval(timerInterval);
  startTime = 0;
  elapsedTime = 0;
  timeDisplay.textContent = "00 : 00 : 00 . 000";
}

// Update the display continuously
function updateTime() {
  elapsedTime = Date.now() - startTime;
  timeDisplay.textContent = formatTime(elapsedTime);
}

// Button event listeners
startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);
