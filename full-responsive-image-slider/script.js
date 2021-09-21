const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = true;
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
    // Get current class
    const current = document.querySelector('.current');
    // Remove current class
    current.classList.remove('current');
    // Check for next slide 
    if(current.nextElementSibling){
        // Add current to next sibling
        current.nextElementSibling.classList.add('current');
        console.log('current')
    } else {
        // Add current to start
        slides[0].classList.add('current');
        console.log('else')
    }
    setTimeout(() => current.classList.remove('current'));
};

const prevSlide = () => {
    // Get current class
    const current = document.querySelector('.current');
    // Remove current class
    current.classList.remove('current');
    // Check for next slide 
    if(current.previousElementSibling){
        // Add current to next sibling
        current.previousElementSibling.classList.add('current');
    } else {
        // Add current to last
        slides[slides.length - 1].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
};

// Button events 
next.addEventListener('click', e => {
    nextSlide();
    if(auto){
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSLide, intervalTime);
    }
});

prev.addEventListener('click', e => {
    prevSlide();
    if(auto){
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSLide, intervalTime);
    }
});

// Auto slide
if(auto){
    // Run next slide at intervalTime tiem
    slideInterval = setInterval(nextSlide, intervalTime);
}