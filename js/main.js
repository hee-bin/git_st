// main.js
document.addEventListener('DOMContentLoaded', function () {
  const questionElement = document.getElementById('question');
  const nextButton = document.getElementById('nextButton');
  
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
});
