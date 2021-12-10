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
        },
        question3: {
            number: 3,
            question: "Ricoh is a brand under",
            answers: ["Pentax","Panasonic"]
        },
        question4: {
            number: 4,
            question: "TBA",
            answers: ["TBA","UNDEFINED"]
        }
}

// Answers Array
const answers = ['a','b','a','a','a','b'];

// Consts
const questionNumber = document.querySelector('#question-number');
const questionAsk = document.querySelector('#question-ask');
const timeField = document.querySelector('#time-field');
const scoreField = document.querySelector('#score')
const selectAnswer = document.querySelector('#answers')
const buttonA = document.querySelector('#a');
const buttonB = document.querySelector('#b');

// Variables
let questionNum = questions.question1.number;
let questionWords = questions.question1.question;
let answerA = questions.question1.answers[0];
let answerB = questions.question1.answers[1];
let questionsRight = 0;
let currentQuestion = 1;

// Functions

function showQuestionNumber() {
    let number = questionNum;
    questionNumber.innerHTML = `<h2>Question number: ${number}</h2>`
    
}
function showQuestionAsk() {
	questionAsk.innerHTML = `<p>${questionWords}?<p>`;
}
function showTimeLeft(seconds) {
    setInterval(function() {
        let seconds = 15;
        seconds--;
        }, 1000)
    timeField.innerHTML = `<h4 style="color: red">Time Left: ${showTimeLeft()}</h4>`
}
function showAnswers(answerA, answerB) {
    buttonA.innerText = answerA;
    buttonB.innerText = answerB;
};
function compareAnswers(event) {
    let input = this.id 
    if (input === answers[0]) {
        questionsRight += 1;
    } else if (questionsRight > 0) {
        questionsRight -= 1;
        }
    function showScore() {
        let score = questionsRight * 100;
        scoreField.innerHTML = `<h4>Score: ${score} points</h4>`;
         }
    showScore();
    nextQuestion();

}
function nextQuestion(event) {
    currentQuestion++;
    let questions2;
    questions2 = questions[`question${currentQuestion}`]

    for (let i = 0; i < answers.length; i++) {
			answers[i];
		}
    questionNumber.innerHTML = `<h2>Question number: ${questionNum}</h2>`;
	questionAsk.innerHTML = `<p>${questionWords}?<p>`;
	buttonA.innerText = answerA;
	buttonB.innerText = answerB;
}
// // Calling Functions
showQuestionNumber();
showQuestionAsk();
showAnswers(answerA, answerB);
// for (let iterate in questions) {
    // questionNum = questions[iterate].number;
    // questionWords = questions[iterate].question;
    // answerA = questions[iterate].answers[0];
    // answerB = questions[iterate].answers[1];
    // }

// showTimeLeft();

// Event Listeners
buttonA.addEventListener('click', compareAnswers);
buttonB.addEventListener('click', compareAnswers);