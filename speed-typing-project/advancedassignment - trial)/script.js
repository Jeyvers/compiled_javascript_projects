window.addEventListener('DOMContentLoaded', init)

// Global variables
let time = 3;
let score = 0;
let isPlaying;
let currentLevel;
let highScoreE = 0;
let highScoreM = 0;
let highScoreH = 0;

// Available levels
levels = {
    easy: 5,
    medium: 3,
    hard: 2
  };



// DOM Elements 
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
let seconds = document.querySelector('#seconds');
let highScoreEasy = document.querySelector('#highscore-easy');
let highScoreMedium = document.querySelector('#highscore');
let highScoreHard = document.querySelector('#highscore');
let easyLevel = document.getElementById('easyLevel');
let mediumLevel = document.getElementById('mediumLevel');
let hardLevel = document.getElementById('hardLevel');


// Word Arary
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
    'definition',
    'connection',
    'error',
    'typography',
    'dictionary',
    'archives',
    'university',
    'quick',
    'opacity',
    'understanding',
    'vicious',
    'nonchalant',
    'boisterous',
    'veneer',
    'lifestyle',
    'spaghetti',
    'advanced',
    'assignment',
    'emptiness',
    'psychological',
    'tethering',
    'cake',
    'handkerchief',
    'towel',
    'electronic',
    'underestimated',
    'overdue',
    'attention',
    'caution',
    'utility'
  ];


function init() {
    // Show random word
    showWord(words);
    // Start timer countdown
    setInterval(countdown, 1000)

    // Add event listeners to level buttons
    easyLevel.addEventListener('click', () => {
        currentLevel = levels.easy;
        time = currentLevel;
       seconds.innerHTML = currentLevel; 
       setInterval(checkStatusEasy, 50);
    });
    mediumLevel.addEventListener('click', () => {
        currentLevel = levels.medium;
        seconds.innerHTML = currentLevel; 
        time = currentLevel;
     });
     hardLevel.addEventListener('click', () => {
        currentLevel = levels.hard;
        seconds.innerHTML = currentLevel; 
        time = currentLevel;
        
        
     });

    // add function to wordInput
    wordInput.addEventListener('input', startMatch);


}

function showWord() {
    // Generate random word from array of words
    let randIndex = Math.floor(Math.random() * words.length);
    currentWord.innerHTML = words[randIndex];

    
}

function startMatch() {
    if(matchWords()) {
        isPlaying = true;
        time = currentLevel + 1;
        showWord(words);
        wordInput.value = '';
        score++;
        //Since there are many ways to do this code things, try figure out a different way to design this speed typing game in a different and more convenient way. Make research, watch more videos and improve the functionality in the way you honestly want to. The highscores can have a different function that'll call them, for saving to localstorage and for comparing the score values. Can a music functionality that makes a sound when game overr. 
        if (score > highScoreE){
            highScoreE = score;
        }
        highScoreEasy.innerHTML = score
    
     }
     if(score === -1){
         scoreDisplay.innerHTML = 0;
 
     } else {
         scoreDisplay.innerHTML = score;
     }
    
}

function matchWords() {
    if(wordInput.value === currentWord.innerHTML) {
        message.innerHTML = 'Correct!!!';
        return true;
    } else {
        message.innerHTML = '';
        return false;
    }
}

function countdown() {
    if(time > 0) {
        time--
    } else if (time === 0){
        isPlaying = false;
    }
    timeDisplay.innerHTML = time;
}

// Check game status 
function checkStatusEasy(){
    if(!isPlaying && time === 0){
        message.innerHTML = 'Game Over!!!';
        
    }
}

// High Score Trial 
function highScores() {

} 