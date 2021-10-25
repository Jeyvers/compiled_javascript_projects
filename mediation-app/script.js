const app = () => {
    const song = document.querySelector('.song');
    const play = document.querySelector('.play');
    const movingOutline = document.querySelector('.moving-outline circle');
    const video = document.querySelector('.vid-container video');

    // Sounds
    const sounds = document.querySelectorAll('.sound-picker button');
    // Time display
    const timeDisplay = document.querySelector('.time-display');
    const timeSelect = document.querySelectorAll('.time-select button');
    // outline length display
    const outlineLength = movingOutline.getTotalLength();
    // Duration
    let fakeDuration = 600;

    movingOutline.style.strokeDasharray = outlineLength;
    movingOutline.style.strokeDashoffset = outlineLength;

    // Pick different sounds 
    sounds.forEach(sound => {
        sound.addEventListener('click', function () {
            song.src = this.getAttribute('data-sound')
            video.src = this.getAttribute('data-video')
            checkPlaying(song);
        })
    })

    // Play sound
        play.addEventListener('click', () => {
            checkPlaying(song);
        })
    
        // Select sound
        timeSelect.forEach(option => {
            option.addEventListener('click', function() {
                fakeDuration = this.getAttribute('data-time');
                timeDisplay.textContent = `${Math.floor(fakeDuration / 60)}:${Math.floor(fakeDuration % 60)}`
            });
        });

        // Create function to stop and play the sounds
    function checkPlaying(song) {


        if (song.paused) {
            song.play();
            video.play();
            play.src = './svg/pause.svg';
        } else {
            song.pause();
            video.pause();
            play.src = './svg/play.svg';

        }
    }

    // Animate circle
    song.ontimeupdate = () => {
        let currentTime = song.currentTime;
        let elapsed = fakeDuration - currentTime;
        let seconds = Math.floor(elapsed % 60);
        let minutes = Math.floor(elapsed / 60);

        // Animate movingline
        let progress = outlineLength - (currentTime / fakeDuration) * outlineLength;
        movingOutline.style.strokeDashoffset = progress;
        // Animate Time 
        timeDisplay.textContent = `${minutes}:${seconds}`
        if(currentTime >= fakeDuration) {
            song.pause();
            video.pause();
            play.src = './svg/play.svg';
            song.currentTime = 0;
        }
    }
   
};

app();
