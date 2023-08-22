
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




const display = document.getElementById("display");
const startButton = document.getElementById("startButton");
const stopButton = document.getElementById("stopButton");
const resetButton = document.getElementById("resetButton");

let startTime = 0;
let interval;

function startStopwatch() {
  startTime = Date.now() - (startTime > 0 ? startTime : 0);
  clearInterval(interval);
  interval = setInterval(updateDisplay, 10);
  startButton.disabled = true;
  stopButton.disabled = false;
}

function stopStopwatch() {
  clearInterval(interval);
  startButton.disabled = false;
  stopButton.disabled = true;
}

function resetStopwatch() {
  clearInterval(interval);
  startTime = 0;
  display.textContent = "00:00:00";
  startButton.disabled = false;
  stopButton.disabled = true;
}

function updateDisplay() {
  const currentTime = Date.now() - startTime;
  const minutes = Math.floor(currentTime / 60000);
  const seconds = Math.floor((currentTime % 60000) / 1000);
  const milliseconds = Math.floor((currentTime % 1000) / 10);
  display.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}:${String(milliseconds).padStart(2, "0")}`;
}

startButton.addEventListener("click", startStopwatch);
stopButton.addEventListener("click", stopStopwatch);
resetButton.addEventListener("click", resetStopwatch);



const newQuestionInput = document.getElementById("newQuestionInput");
const addQuestionButton = document.getElementById("addQuestionButton");

addQuestionButton.addEventListener("click", addQuestion);

function addQuestion() {
  const newQuestion = newQuestionInput.value.trim();
  if (newQuestion !== "") {
    questions.push(newQuestion);
    newQuestionInput.value = "";
  }
}
