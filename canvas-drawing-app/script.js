const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth - 60;
canvas.height = 400;

let context = canvas.getContext('2d');
context.fillStyle = 'white';
context.fillRect(0, 0, canvas.width, canvas.height);

let drawColor = 'black',
drawWidth = '2',
isDrawing = false;


function start () {
    isDrawing = true;
    context.beginPath();
    context.moveTo(e.clientX )
}


canvas.addEventListener('touchstart', start, false);
canvas.addEventListener('touchmove', draw, false);
canvas.addEventListener('mousedown', start, false);
canvas.addEventListener('mousemove', draw, false);





