const timerDisplay = document.getElementById('timer');
const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const resetButton = document.getElementById('reset');


let countdown;
let secondsRemaining = 1500; // 25 minutes in seconds

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  const display = `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  timerDisplay.textContent = display;
}

function startTimer() {
  countdown = setInterval(() => {
    secondsRemaining;
    displayTimeLeft(secondsRemaining);
    if (secondsRemaining <= 0) {
      clearInterval(countdown);
    }
  }, 1000);
}

function pauseTimer() {
  clearInterval(countdown);
}

function resetTimer() {
  clearInterval(countdown);
  secondsRemaining = 1500;
  displayTimeLeft(secondsRemaining);
}
function startBreakTimer() {
  clearInterval(countdown);
  secondsRemaining = 300; // 5 minutes in seconds
  displayTimeLeft(secondsRemaining);
  startTimer(secondsRemaining, () => {
    clearInterval(countdown);
    secondsRemaining = 1500; // 25 minutes in seconds
    displayTimeLeft(secondsRemaining);
    startTimer(secondsRemaining, () => {
      clearInterval(countdown);
      startBreakTimer();
    });
  });
}

startTimer(secondsRemaining, () => {
  clearInterval(countdown);
  startBreakTimer();
});


startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);

displayTimeLeft(secondsRemaining);