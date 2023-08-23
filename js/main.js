document.addEventListener('DOMContentLoaded', function () {
  const questionElement = document.getElementById('question');
  const nextButton = document.getElementById('nextButton');
  const display = document.getElementById('display');
  const startButton = document.getElementById('startButton');
  const stopButton = document.getElementById('stopButton');
  const resetButton = document.getElementById('resetButton');
  
  const questions = [
    'What is your favorite book?',
    'What do you like to do on weekends?',
    'Do you enjoy cooking?',
    // Add more questions here
  ];

  let currentQuestionIndex = 0;

  nextButton.addEventListener('click', function () {
    currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
    questionElement.textContent = questions[currentQuestionIndex];
  });

  let timerInterval;
  let startTime;
  let elapsedTime = 0;
  let running = false;

  function updateDisplay() {
    const seconds = Math.floor(elapsedTime / 1000);
    const minutes = Math.floor(elapsedTime / (1000 * 60)) % 60;
    const hours = Math.floor(elapsedTime / (1000 * 60 * 60));

    display.textContent = `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }

  function startTimer() {
    if (!running) {
      startTime = Date.now() - elapsedTime;
      timerInterval = setInterval(function () {
        elapsedTime = Date.now() - startTime;
        updateDisplay();
      }, 1000); // Update every 1000 milliseconds (1 second)
      running = true;
    }
  }

  function stopTimer() {
    if (running) {
      clearInterval(timerInterval);
      running = false;
    }
  }

  function resetTimer() {
    stopTimer();
    elapsedTime = 0;
    updateDisplay();
  }

  startButton.addEventListener('click', startTimer);
  stopButton.addEventListener('click', stopTimer);
  resetButton.addEventListener('click', resetTimer);
});
