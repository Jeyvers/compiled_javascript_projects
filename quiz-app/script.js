// DOM Elements 
const startBtn = document.querySelector('.start-btn')
const infoBox = document.querySelector('.info-box')
const quitBtn = infoBox.querySelector('.buttons .quit')
const restartBtn = infoBox.querySelector('.buttons .restart')
const contBtn = infoBox.querySelector('.buttons .restart')
const quizBox = document.querySelector('.quiz-box')

// Start
startBtn.onclick = () => {
    infoBox.classList.add('active-info')
}

// Quit
quitBtn.onclick = () => {
    infoBox.classList.remove('active-info')
}

// Continue
contBtn.onclick = () => {
    infoBox.classList.remove('active-info')
    quizBox.classList.add('active-quiz')
    showQuestions();
}

let queCont = 0;

// getting questions and options from array 
function showQuestions() {
    const queText = document.querySelector(".que-text");
    let queTag = `<span>${questions[0].question}</span>`
    queText.innerHTML = queTag;
} 