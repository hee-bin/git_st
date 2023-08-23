document.addEventListener('DOMContentLoaded', function () {
  const questionElement = document.getElementById('question');
  const nextButton = document.querySelector('.question-card .btn');
  const display = document.getElementById('display');
  const startButton = document.getElementById('startButton');
  const stopButton = document.getElementById('stopButton');
  const resetButton = document.getElementById('resetButton');
  const newQuestionInput = document.getElementById('newQuestionInput');
  const addQuestionButton = document.querySelector('.add-question .btn');
  
  const questions = [
    'What is your favorite book?',
    'What do you like to do on weekends?',
    'Do you enjoy cooking?',
    // Add more questions here
  ];

  let currentQuestionIndex = 0;
  let timerInterval;
  let startTime;
  let elapsedTime = 0;
  let running = false;

  function updateDisplay() {
    const seconds = Math.floor(elapsedTime / 1000);
    const minutes = Math.floor(elapsedTime / (1000 * 60)) % 60;

    display.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
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

  function addQuestion() {
    const newQuestion = newQuestionInput.value.trim();
    if (newQuestion) {
      questions.push(newQuestion);
      newQuestionInput.value = '';
    }
  }

  function getRandomQuestion() {
    const randomIndex = Math.floor(Math.random() * questions.length);
    return questions[randomIndex];
  }

  nextButton.addEventListener('click', function () {
    const randomQuestion = getRandomQuestion();
    questionElement.textContent = randomQuestion;
  });

  startButton.addEventListener('click', startTimer);
  stopButton.addEventListener('click', stopTimer);
  resetButton.addEventListener('click', resetTimer);
  addQuestionButton.addEventListener('click', addQuestion);
});
