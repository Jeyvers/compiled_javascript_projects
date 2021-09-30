// DOM elements
const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');


// Collection of random generator functions
const randomFunc = {
    lower: getRandomLower, 
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol 
}

// Generate event
generateEl.addEventListener('click', () => {
    const length = +lengthEl.value;
    const hasLower = lowercaseEl.checked;
    const hasUpper = uppercaseEl.checked;
    const hasNumber = numbersEl.checked;
    const hasSymbol = symbolsEl.checked;

    resultEl.innerText = generatePassword(
        hasLower,
        hasUpper, 
        hasNumber,
        hasSymbol, 
        length
    );
});

// Copy password to clipboard 
clipboardEl.addEventListener('click', () => {
    const textarea = document.createElement('textarea');
    const password = resultEl.innerText;
    
    if(!password){
        return;
    } else {
        textarea.value = password;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        textarea.remove();
        alert('Password copied to clipboard');
    }
})

// Generate password function 
function generatePassword(lower, upper, number, symbol, length) {
    // 1. Init pw var 
    // 2. Filter out unchecked types
    // 3. Loop over length, call generator function for each type
    // 4. Add the final pw to the var and return

    let generatedPassword = '';
    const typesCount = lower + upper + number + symbol;
    console.log('typesCount: ', typesCount)
    const typesArr = [
        {lower}, 
        {upper}, 
        {number}, 
        {symbol}
    ].filter(item => Object.values(item)[0])
    console.log('typesCount: ', typesArr)
    if (typesCount === 0) {
        return '';

    }

    for(let i = 0; i < length; i += typesCount) {
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0];
            // console.log('funcName: ', funcName);
            generatedPassword += randomFunc[funcName]();
        });
    }
        const finalPassword = generatedPassword.slice(0, length
            );

            return finalPassword;
}

// Generator functions - http://www.net-comber.com/charset.html

function getRandomLower() {
   const randLower =  String.fromCharCode(Math.floor(Math.random() * 26) + 97);
   return randLower;
}

function getRandomUpper() {
   const randUpper =  String.fromCharCode(Math.floor(Math.random() * 26) + 65);
   return randUpper;
}

function getRandomNumber() {
   const randNumber =  String.fromCharCode(Math.floor(Math.random() * 10) + 48);
   return randNumber;
}

function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]+<>/,.';
   return symbols[Math.floor(Math.random() * symbols.length)];
}
