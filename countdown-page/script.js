const countdown = document.querySelector('.countdown');

// Set launch Date 
const launchDate = new Date('Jan 1, 2022 13:00:00').getTime();

// Update every second 
const intvl = setInterval(() => {
    // Get today's date and time (ms)
    const now = new Date().getTime();

    // Distance from now to the launce date 
    const distance = launchDate - now;

    // Time calculations
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60 * 60 ));
    const mins = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Display result
    countdown.innerHTML = `
        <div>${days}<span>Days</span></div>
        <div>${hours}<span>Hours</span></div>
        <div>${mins}<span>Minutes</span></div>
        <div>${seconds}<span>Seconds</span></div>

    `;

    // If launch date passed
    if(distance < 0){
        // Stop countdown
        clearInterval(intvl);
        countdown.getElementsByClassName.color = '17a2b8';
        countdown.innerHTML = 'Launched!';
    }

    
}, 1000);

// Study math. on wordpress