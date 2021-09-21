var modalBtn = document.getElementById('modalBtn');
var modal = document.querySelector('.modal');
var closeBtn = document.querySelector('.closeBtn');

modalBtn.addEventListener('click', () => {
    modal.style.display = 'block';
})

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
})

window.addEventListener('click', (e) => {
    if(e.target === modal){
        modal.style.display = 'none';
    }
    
})