
const current = document.querySelector('#current');
const imgs = document.querySelectorAll('.imgs img');
const opacity = 0.6;

// Set first img opacity
imgs[0].style.opacity = opacity

 imgs.forEach( img => img.addEventListener('click', currentImg));

function currentImg(e){
    // Reset the opacity
    imgs.forEach(img => img.style.opacity = 1);

    // Change current img to source of clicked img
    current.src = e.target.src;

    // Add fade in class
    current.classList.add('fade-in');

    // Remove fade-in class after .5 seconds 
    setTimeout(() => current.classList.remove('fade-in'), 200);

    // Change opacity of clicked imaged 
    e.target.style.opacity = opacity;
}



// imgs.forEach(img => {
//     img.addEventListener('click', e
//    => current.src = e.target.src)
// });

// // ES6 Destructuring
// const [current, imgs, opacity] = [document.querySelector('#current'), document.querySelectorAll('.imgs img'), 0.4];
