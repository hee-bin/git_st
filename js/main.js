
const questions = [
  "What is your favorite hobby?",
  "Describe your last vacation.",
  "Do you prefer reading books or watching movies?",
  "What do you like to do on weekends?",
  "Tell me about a memorable experience you've had."
];

const questionElement = document.getElementById("question");
const nextButton = document.getElementById("nextButton");

nextButton.addEventListener("click", showRandomQuestion);

function showRandomQuestion() {
  const randomIndex = Math.floor(Math.random() * questions.length);
  const randomQuestion = questions[randomIndex];
  questionElement.textContent = randomQuestion;
}

// Initial question display
showRandomQuestion();
