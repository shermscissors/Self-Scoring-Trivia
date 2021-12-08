// Hello!
console.log(`Welcome to my game! If you're reading this, you're either A) In my SEI class and know how to access the console or B) Knowledgable about code prior. I want to put a secret message here, and will implement it after the game is done. If you see something special in this field "      " , that means I completed my project on time for once and had time to go back and add something special there. Go me. Go us!`)

// Questions Object
const questions = {
        question1: {
            number: 1,
            question: "What is an aperture",
            answers: ["The opening to a lens","The ability to eat"]
        },
        question2: {
            number: 2,
            question: "What is shutter speed",
            answers: ["How long a photo is exposed", "The background blur"]
        }
}

// Answers Array
const answers = ['a','b'];

// Consts
const questionNumber = document.querySelector('#question-number');
const questionAsk = document.querySelector('#question-ask');
const timeField = document.querySelector('#time-field');
const scoreField = document.querySelector('#score')
const buttonA = document.querySelector('#a');
const buttonB = document.querySelector('#b');

// Variables
let questionNum = questions.question1.number;
let questionWords = questions.question1.question;
let answerA = questions.question1.answers[0];
let answerB = questions.question1.answers[1];
let questionsRight = 1;

// Functions

function showQuestionNumber() {
    let number = questionNum;
    questionNumber.innerHTML = `<h2 style="font-size: 60px">Question Number: ${number}</h2>`
    
}
function showQuestionAsk() {
	questionAsk.innerHTML = `<p style="background-color: white">${questionWords}?</p>`;
}
function showTimeLeft() {
   let time = setInterval(() => {
        let seconds = 15;
        seconds--;
    }, 1000)
    timeField.innerHTML = `<h4 style="color: red">Time Left: ${time}</h4>`
}
function showAnswers(answerA,answerB) {
    buttonA.innerText = answerA;
    buttonB.innerText = answerB;
};

function showScore() {
    let score = questionsRight * 100;
    scoreField.innerHTML = `<h4>Score: ${score} points</h4>`;
}

showQuestionNumber();
showQuestionAsk();
showAnswers(answerA, answerB);
showScore();
// showTimeLeft();

// Event Listeners
buttonA.addEventListener('click', )