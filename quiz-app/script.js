// DOM Elements 
const startBtn = document.querySelector('.start-btn')
const infoBox = document.querySelector('.info-box')
const quitBtn = infoBox.querySelector('.buttons .quit')
const restartBtn = infoBox.querySelector('.buttons .restart')
const contBtn = infoBox.querySelector('.buttons .restart')
const quizBox = document.querySelector('.quiz-box')
const nextBtn = document.querySelector('.next-btn');
const totalQue = document.querySelector('.total-que');
const queText = document.querySelector(".que-text");
const optionList = document.querySelector(".option-list");
let queCont = 0;

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
    showQuestions(queCont);
}

nextBtn.onclick = () => {
    if(queCont < questions.length - 1) {
        queCont++
        showQuestions(queCont)
    } else {
        console.log("Questions completed");
    }
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
    let userAns = answer.textContent;
    let correctAns = questions[queCont].answer;
    let allOptions = optionList.children.length;
    if(userAns == correctAns) {
        answer.classList.add('correct');
        console.log("correct");
    } else {
        answer.classList.add('incorrect');
        console.log("incorrect");

        for(let i = 0; i < allOptions; i++) {
            if(optionList.children[i].textContent == correctAns) {
                optionList.children[i].setAttribute('class', 'option correct')
            }
          }
    }

    // once user selects an answer, disable the rest 
    for(let i = 0; i < allOptions; i++) {
      optionList.children[i].classList.add('disabled');
    }
}