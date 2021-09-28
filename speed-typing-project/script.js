window.addEventListener('DOMContentLoaded', init)
//   To change level
let currentLevel;

// Global variables
let time = currentLevel,
score = 0,
isPlaying;

// Available levels
levels = {
    easy: 5,
    medium: 3,
    hard: 2
  };


// levels = [
//     {
//         name: "Select Level"
//     },
//     {
//         name: "Easy",
//         value: "5"
//     },
//     {
//         name: "Medium",
//         value: "3"
//     },
//     {
//         name: "Hard",
//         value: "2"
//     }
// ];




// DOM Elements 
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
let   seconds = document.querySelector('#seconds');
let highScore = document.querySelector('#highscore');
const easyLevel = document.getElementById('easyLevel');
const mediumLevel = document.getElementById('mediumLevel');
const hardLevel = document.getElementById('hardLevel');



const words = [
    'hat',
    'river',
    'lucky',
    'statue',
    'generate',
    'stubborn',
    'cocktail',
    'runaway',
    'joke',
    'developer',
    'establishment',
    'hero',
    'javascript',
    'nutrition',
    'revolver',
    'echo',
    'siblings',
    'investigate',
    'horrendous',
    'symptom',
    'laughter',
    'magic',
    'master',
    'space',
    'definition'
  ];

  
// localStorage.setItem(highScore)



//   Initialize game
function init() {
    currentLevel = levels.easy;
    seconds.innerHTML = currentLevel; 
    time = currentLevel;

    easyLevel.addEventListener('click', () => {
       console.log(levels.easy);
       currentLevel = levels.easy;
       seconds.innerHTML = currentLevel; 
       time = currentLevel;
    });
    mediumLevel.addEventListener('click', () => {
       console.log(levels.medium);
       currentLevel = levels.medium;
       seconds.innerHTML = currentLevel; 
       time = currentLevel;
    });
    hardLevel.addEventListener('click', () => {
       console.log(levels.hard);
       currentLevel = levels.hard;
       seconds.innerHTML = currentLevel; 
       time = currentLevel;
    });

    // Show number of seconds in UI
    // seconds.innerHTML = currentLevel; 

    // Load word from array
    showWord(words);
    // Match input with word given
    wordInput.addEventListener('input', startMatch)
    // Call countdown every second
    setInterval(countdown, 1000);
    // Check game status
    setInterval(checkStatus, 50);
}

// Pick and show random word
function showWord(words) {
    // Generate random array index
    const randIndex = Math.floor(Math.random() * words.length);

    const trialone = Math.ceil(Math.random() * words.length);
    console.log(trialone)

    currentWord.innerHTML = words[randIndex];
}

// Start match
function startMatch() {
    if(matchWords()) {
       isPlaying = true;
       time = currentLevel + 1;
       showWord(words);
       wordInput.value = '';
       score++;
    }
    if(score === -1){
        scoreDisplay.innerHTML = 0;

    } else {
        scoreDisplay.innerHTML = score;
    }
    highScore.innerHTML = 0;
    if(score > highScore){
        highScore.innerHTML = score;
    }
}

// Match currentword to word Input
function matchWords() {
    if(wordInput.value === currentWord.innerHTML) {
        message.innerHTML = 'Correct!!!';
        return true;
    } else {
        message.innerHTML = '';
        return false;
    }
}

// Countdown timer 
function countdown() {
    // Make sure time is not run out
    if(time > 0) {
        // Decrement
        time--;
    } else if (time === 0) {
        isPlaying = false;
    }

    // Show time 
    timeDisplay.innerHTML = time;
}

// Check game status 
function checkStatus(){
    if(!isPlaying && time === 0){
        message.innerHTML = 'Game Over!!!';
        score = -1;
    }
}


