//Get a Handle on the elements needed
var questionNumEl = document.querySelector("#questionNumber");
var questionEl = document.querySelector("#questionPrompt");
var choice1El = document.querySelector("#choice1");
var choice2El = document.querySelector("#choice2");
var choice3El = document.querySelector("#choice3");
var choice4El = document.querySelector("#choice4");
var answerButtonEl = document.querySelectorAll(".answerBtns");
var scoreEL = document.querySelector("#score");
var gamerHeaderEl = document.querySelector(".gameHeader");
var buttonConEl = document.querySelector(".button-container");
var nextBtnEl = document.querySelector("#next-button");
var nextButtonEl = document.querySelector("#next-button");
var proceedEl = document.querySelector(".proceed");

var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");
var score = 0;
console.log("your score is " + score);

scoreEL.innerHTML = "SCORE: " + score;
//Start a Timer
var secondsLeft = 61;
function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds until game over";

    if (secondsLeft <= 0) {
      clearInterval(timerInterval);
      gameOver();
    }
  }, 1000);
}

var gameOver = function () {
  gamerHeaderEl.innerHTML = "YOU LOSE! GAME OVER";
  gamerHeaderEl.setAttribute(
    "style",
    "font-size: 200px; text-shadow: 0px 5px 0px rgb(255, 0, 0, 0.9), 0px 10px 0px rgb(255, 0, 0, 0.8), 0px 17px 0px rgb(255, 0, 0, 0.7), 0px 25px 0px rgb(255, 0, 0, 0.6), 0px 35px 0px rgb(255, 0, 0, 0.5), 0px 50px 0px rgb(255, 0, 0, 0.4), 0px 70px 0px rgb(255, 0, 0, 0.3), 0px 100px 0px rgb(255, 0, 0, 0.2);"
  );
  questionNumEl.innerHTML = "";
  questionEl.innerHTML = "";
  choice1El.innerHTML = "";
  choice2El.innerHTML = "";
  choice3El.innerHTML = "";
  choice4El.innerHTML = "";
  scoreEL.innerHTML = "";
  answerButtonEl.innerHTML = "";
  buttonConEl.setAttribute("style", "display: none");
  timeEl.innerHTML = "";
  mainEL.innerHTML = "";
  proceedEl.setAttribute("style", "display:none");
};

// Function to create and append colorsplosion image
function gameOver() {
  timeEl.textContent = " ";
  var imgEl = document.createElement("img");
  imgEl.setAttribute("src", "images/image_1.jpg");
  mainEl.appendChild(imgEl);
}

setTime();

//create objects for the four questions

var questionArray = [
  {
    questionNum: "QUESTION 1:",
    question: "WHAT IS THE NAME OF THE COURSE INSTRUCTOR?",
    choice1: "Jeremy",
    choice2: "J-Spice",
    choice3: "Mr. CSS",
    choice4: "Captin Coding",
    correctAnswer: "Jeremy",
  },

  {
    questionNum: "QUESTION 2:",
    question: "WHAT IS 2 + 2?",
    choice1: "5",
    choice2: "FIVE",
    choice3: "4",
    choice4: "0",
    correctAnswer: "4",
  },

  {
    questionNum: "QUESTION 3:",
    question: "WHAT IS THE UTSA MASCOT?",
    choice1: "BOBCAT",
    choice2: "ROADRUNNER",
    choice3: "HOG",
    choice4: "BEARKAT",
    correctAnswer: "ROADRUNNER",
  },

  {
    questionNum: "QUESTION 4:",
    question: "WHAT DOES CSS STAND FOR?",
    choice1: "CRIMINAL SUSPENSION SYSTEM",
    choice2: "COMPUTER SYSTEM STYLES",
    choice3: "CHROME STUFF STYLER",
    choice4: "CASCADING STYLE SHEETS",
    correctAnswer: "CASCADING STYLE SHEETS",
  },

  {
    questionNum: "QUESTION 5:",
    question: "WHICH OF THESE IS NOT A JAVASCRIPT LIBRARY?",
    choice1: "C#",
    choice2: "P5",
    choice3: "REACT",
    choice4: "JQUERY",
    correctAnswer: "C#",
  },
];
var questionArrayIndex = 0;
//use the DOM to change the text
var getQuestion = function () {
  questionNumEl.innerHTML = questionArray[questionArrayIndex].questionNum;
  questionEl.innerHTML = questionArray[questionArrayIndex].question;
  choice1El.innerHTML = questionArray[questionArrayIndex].choice1;
  choice2El.innerHTML = questionArray[questionArrayIndex].choice2;
  choice3El.innerHTML = questionArray[questionArrayIndex].choice3;
  choice4El.innerHTML = questionArray[questionArrayIndex].choice4;
};
var startQuiz = function () {
  getQuestion();
};

var displayQuestion = function () {
  //Is the choice the correct answer
  if (this.innerHTML === questionArray[questionArrayIndex].correctAnswer) {
    this.innerHTML = "CORRECT";
    this.setAttribute("style", "background-color: #00FF00");
    score += 10;
    scoreEL.innerHTML = "SCORE: " + score;
    console.log("your score is " + score);
    nextButtonEl.innerHTML = "NEXT";
    questionArrayIndex++;
  } else {
    console.log("incorrect");
    secondsLeft -= 5;
    this.innerHTML = "INCORRECT";
    this.setAttribute("style", "background-color: #FF0000");
  }
  //If not, time is deducted from the time for a wrong answer
};
//deduct time from the timer for incorrect answers
nextButtonEl.addEventListener("click", startQuiz);

//When the user clicks on an answer choice
choice1El.addEventListener("click", displayQuestion);
choice2El.addEventListener("click", displayQuestion);
choice3El.addEventListener("click", displayQuestion);
choice4El.addEventListener("click", displayQuestion);

//chage the color of the

//go to next question
//go to high score screen

startQuiz();
