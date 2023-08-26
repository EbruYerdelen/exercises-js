const timeShown = document.querySelector("#timeShown");
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resetBtn = document.querySelector("#resetBtn");

startBtn.addEventListener("click", callTime);
pauseBtn.addEventListener("click", pauseTime);
resetBtn.addEventListener("click", resetTime);

let hours = 0;
let minutes = 0;
let seconds = 0;

function callTime() {
  interval = setInterval(startTime, 1000);
}

function startTime() {
  seconds += 1;
  let currentHour = Math.floor(seconds / 3600);
  let currentMinute = Math.floor((seconds / 60) % 60);
  let currentSecond = seconds % 60;

  currentHour = addZero(currentHour);
  currentMinute = addZero(currentMinute);
  currentSecond = addZero(currentSecond);

  let lastShown =
    (timeShown.textContent = `${currentHour}:${currentMinute}:${currentSecond}`);
  return lastShown;
}

function addZero(count) {
  count = count.toString();
  now = count.length < 2 ? "0" + count : count;
  return now;
}

function pauseTime() {
  clearInterval(interval);
}

function resetTime() {
  clearInterval(interval);
  timeShown.textContent = "00:00:00";
  seconds = 0;
}
