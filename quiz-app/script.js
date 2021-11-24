// DOM Elements 
const startBtn = document.querySelector('.start-btn')
const infoBox = document.querySelector('.info-box')
const contBtn = infoBox.querySelector('.buttons .restart')
const quizBox = document.querySelector('.quiz-box')
const nextBtn = document.querySelector('.next-btn');
const resultBox = document.querySelector('.result-box');
const restartBtn = infoBox.querySelector('.buttons .restart')
const quitBtn = infoBox.querySelector('.buttons .quit')
const quitQuiz = resultBox.querySelector('.buttons .quit');
const restartQuiz = resultBox.querySelector('.buttons .restart');
const totalQue = document.querySelector('.total-que');
const queText = document.querySelector(".que-text");
const optionList = document.querySelector(".option-list");
const timeCount = quizBox.querySelector(".timer-sec");
const timeLine = quizBox.querySelector(".time-line");
const scoreText = resultBox.querySelector('.score-text');
let tickIcon = `<div class="icon tick"><i class="fa fa-check"></i></div>`;
let crossIcon = ` <div class="icon cross"><i class="fa fa-times"></i></div>`;
let queCont = 0;
let counter;
let counterLine;
let timeValue = 9;
let userScore = 0;
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
    infoBox.classList.remove('active-info');
    quizBox.classList.add('active-quiz');
    showQuestions(queCont);
    startTimer(timeValue);
    startTimerLine(0);
}

nextBtn.onclick = () => {
    if(queCont < questions.length - 1) {
        queCont++
        showQuestions(queCont)
        clearInterval(counter);
        clearInterval(counterLine);
        startTimer(timeValue);
        startTimerLine(0);
        nextBtn.style.display = "none";

    } else {
        console.log("Questions completed");
        showResultBox();
    }
}

quitQuiz.onclick = () => {
    window.location.reload();
}

restartQuiz.onclick = () => {
    window.location.reload();
}


// getting questions and options from array 
function showQuestions(index) { 
    let queTag = `<span>${questions[index].numb}.${questions[index].question}</span>`;
    let optionTag = `
    <div class="option"><span>${questions[index].options[0]}</span></div>
    <div class="option"><span>${questions[index].options[1]}</span></div>
    <div class="option"><span>${questions[index].options[2]}</span></div>
    <div class="option"><span>${questions[index].options[3]}</span></div>
    `;
    let totalTag = `
    <span><p>${queCont + 1}</p>of<p>${questions.length}</p>Questions</span>
    `
    queText.innerHTML = queTag;
    optionList.innerHTML = optionTag;
    totalQue.innerHTML = totalTag; 
    const option = optionList.querySelectorAll(".option");
    for(let i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionSelected(this)")
    }
} 

function optionSelected(answer) {
    clearInterval(counter);
    clearInterval(counterLine);
    let userAns = answer.textContent;
    let correctAns = questions[queCont].answer;
    let allOptions = optionList.children.length;
    if(userAns == correctAns) {
        answer.classList.add('correct');
        answer.insertAdjacentHTML("beforeend", tickIcon)
        userScore += 1;
        console.log(userScore);
    } else {
        answer.classList.add('incorrect');
        answer.insertAdjacentHTML("beforeend", crossIcon)
        for(let i = 0; i < allOptions; i++) {
            if(optionList.children[i].textContent == correctAns) {
                optionList.children[i].setAttribute('class', 'option correct')
                optionList.children[i].insertAdjacentHTML("beforeend", tickIcon)
            }
          }
    }
    // once user selects an answer, disable the rest 
    for(let i = 0; i < allOptions; i++) {
      optionList.children[i].classList.add('disabled');
    }
    if(queCont == questions.length - 1) {
        nextBtn.textContent = "Finish"
    };
    nextBtn.style.display = "block";

}

function startTimer(time) {
    counter = setInterval(timer, 1000);
    function timer() {
        timeCount.textContent = time;
        time--;
        if(time < 5) {
            timeLine.style.backgroundColor = "red";
        } else {
            timeLine.style.backgroundColor = "#007bff";
        }
        if(time < 0) {
            clearInterval(counter);
            timeCount.textContent = 0;  
            let correctAns = questions[queCont].answer;
            let allOptions = optionList.children.length;
            for(let i = 0; i < allOptions; i++) {
                if(optionList.children[i].textContent == correctAns) {
                    optionList.children[i].setAttribute('class', 'option correct')
                    optionList.children[i].insertAdjacentHTML("beforeend", tickIcon)
                }
              }   
              for(let i = 0; i < allOptions; i++) {
                   optionList.children[i].classList.add('disabled');
                 }
                nextBtn.style.display = "block";

        }
    } 
}

function startTimerLine(time) {
    counterLine = setInterval(timer, 18);
    function timer() {
        time += 1;
        timeLine.style.width = time + 'px';
        if(time > 549) {
            clearInterval(counterLine);
        }
    } 
}

function showResultBox() {
    infoBox.classList.remove('active-info');
    quizBox.classList.remove('active-quiz');
    resultBox.classList.add('active-result');
    scoreText.innerHTML = ` <span>You got <p>${userScore}</p> out of <p>${questions.length}</p></span>`
}