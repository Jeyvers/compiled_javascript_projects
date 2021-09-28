const time = document.getElementById('time'),
    greeting = document.getElementById('greeting'),
    username = document.getElementById('name'),
    focusDisplay = document.getElementById('focus');

const showAmPm = true;

// Show Time 
function showTime() {
    let today = new Date(),
        hour = today.getHours(),
        minutes = today.getMinutes(),
        seconds = today.getSeconds();

    // Set AM or PM
    const amPm = hour >= 12 ? 'PM' : 'AM';

    // 12hr Format 
    hour = hour % 12 || 12;

    // Output Time 
    time.innerHTML = `
    ${hour}<span>:</span>${addZero(minutes)}<span>:</span> ${addZero(seconds)}${showAmPm ? amPm : ''}
    `;
    setInterval(showTime, 1000);
} 

// Add Zeros
function addZero(n){
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// Set background and greeting depending on the time or date
function setBgGreet(){
    let today = new Date(),
        hour = today.getHours();

    if(hour < 12){
        // Morning
        document.body.style.backgroundImage = "url('https://i.ibb.co/7vDLJFb/morning.jpg')";
    greeting.textContent = 'Good Morning, ';
    } else if(hour < 18) {
        // Afternoon
        document.body.style.backgroundImage = "url('https://i.ibb.co/3mThcXc/afternoon.jpg')";
        greeting.textContent = 'Good Afternoon, ';
    } else {
        // Evening
        // codepen.io/bradtraversy/pen/XLrQvz
        document.body.style.backgroundImage = "url('https://i.ibb.co/924T2Wv/night.jpg')";
        greeting.textContent = 'Good Evening, ';
        document.body.style.color = 'white';
    }
}

// Get Name
function getName() {
    if(localStorage.getItem('name') === null) {
       username.textContent = '[Enter Name]';
       
    } else {
        username.textContent = localStorage.getItem('name');
    }
}

function setName(e) {
    if(e.type === 'keypress') {
        // Make sure enter is pressed
        if(e.which == 13 || e.keyCode == 13) {
        localStorage.setItem('name', e.target.innerText);
        username.blur();

        }
    } else {
        localStorage.setItem('name', e.target.innerText);
    }
}

// Get Focus
function getFocus() {
    if(localStorage.getItem('focus') === null) {
       focusDisplay.textContent = '[Enter Focus]';
       
    } else {
        focusDisplay.textContent = localStorage.getItem('focus');
    }
}

function setFocus(e) {
    if(e.type === 'keypress') {
        // Make sure enter is pressed
        if(e.which == 13 || e.keyCode == 13) {
        localStorage.setItem('focus', e.target.innerText);
        focusDisplay.blur();

        }
    } else {
        localStorage.setItem('focus', e.target.innerText);
    }
}

username.addEventListener('keypress', setName)
username.addEventListener('blur', setName)

focusDisplay.addEventListener('keypress', setFocus)
focusDisplay.addEventListener('blur', setFocus)

// Run
showTime();
setBgGreet();
getName();
getFocus();


