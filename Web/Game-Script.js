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
            question: "Micro 4/3 sensor is smaller than Full Frame",
            answers: ["True","False"]
        },
        question5: {
            number: 5,
            question: "Fujifilm is based in",
            answers: ["Germany","Japan"]
        },
        question6: {
            number: 6,
            question: "Street Photography is only limited to cities",
            answers: ["True","False"]
        },
        question7: {
            number: 7,
            question: "Leica's black and white only cameras are called",
            answers: ["Unsaturated","Monochrom"]
        },
        question8: {
            number: 8,
            question: "120 film denotes the",
            answers: ["Film Type","Film Dimension"]
        },
        question9: {
            number: 9,
            question: "ISO Determines the",
            answers: ["Bokeh","Sensitivity"]
        },
        question10: {
            number: 10,
            question: "IBIS stands for",
            answers: ["Internal Built Iris Sensor","In Body Image Stabilization"]
        },
        question11: {
            number: 11,
            question: "The brightness of a color is called",
            answers: ["Luminosity","Saturation"]
        },
        question12: {
            number: 12,
            question: "The background blur of an image is called",
            answers: ["Bokeh","Fade"]
        },
        question13: {
            number: 13,
            question: "Point and Shoots have interchangable lenses",
            answers: ["True","False"]
        },
        question14: {
            number: 14,
            question: "35mm Film is equivalent in size to",
            answers: ["APS-C","Full Frame"]
        },
        question15: {
            number: 15,
            question: "Who makes the 'Pen' series of cameras",
            answers: ["Olympus","Panasonic"]
        },
        question16: {
            number: 16,
            question: "The majority of image sensors are made by",
            answers: ["Sony","Hasselblad"]
        },
        question17: {
            number: 17,
            question: "Fujifilm's flagship sensor is called",
            answers: ["X-Trans","Fujivision"]
        },
        question18: {
            number: 18,
            question: "Weather sealed cameras are waterproof",
            answers: ["True","False"]
        },
        question19: {
            number: 19,
            question: "Nikon's first full frame digital camera was the",
            answers: ["D1","D3"]
        },
        question20: {
            number: 20,
            question: "The best camera to have is the",
            answers: ["One you have","The most epensive one"]
        },
}

// Answers Array
const answers = ['a','a','a','a','b','b','b','a','b','b','a','b','b','a','a','a','b','b','a'];

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
let startTime;
function showTimeLeft() {
    let seconds = 16;
    startTime = setInterval(function() {
        seconds--;
        timeField.innerHTML = `<h4 style="color: red">Time Left: ${seconds}</h4>`
        }, 1000)
}
function showAnswers(answerA, answerB) {
    buttonA.innerText = answerA;
    buttonB.innerText = answerB;
};
function compareAnswers(event) {
    let input = this.id 

    if (input === answers[currentQuestion - 1]) {
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
    clearInterval(startTime);
    showTimeLeft();
    currentQuestion++;
    let _nextQuestion;
    _nextQuestion = questions[`question${currentQuestion}`]

    for (let i = 0; i < answers.length; i++) {
			answers[i];
		}
    questionNumber.innerHTML = `<h2>Question number: ${_nextQuestion.number}</h2>`;
	questionAsk.innerHTML = `<p>${_nextQuestion.question}?<p>`;
	buttonA.innerText = _nextQuestion.answers[0];
	buttonB.innerText = _nextQuestion.answers[1];
}
// // Calling Functions
showQuestionNumber();
showQuestionAsk();
showAnswers(answerA, answerB);
showTimeLeft();

// Event Listeners
buttonA.addEventListener('click', compareAnswers);
buttonB.addEventListener('click', compareAnswers);