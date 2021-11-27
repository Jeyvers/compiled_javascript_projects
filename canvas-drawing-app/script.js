const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth - 60;
canvas.height = 400;

let context = canvas.getContext('2d');
context.fillStyle = 'white';
context.fillRect(0, 0, canvas.width, canvas.height);

let drawColor = 'black',
drawWidth = '2',
isDrawing = false;


function start(e) {
    isDrawing = true;
    context.beginPath(); // Prepare canvas to do something
    context.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop) // Coordinates from event
    e.preventDefault();

}

function draw(e) {
    if(isDrawing) {
        context.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
        context.strokeStyle = drawColor;
        context.lineWidth = drawWidth;
        context.lineCap = 'round';
        context.lineJoin = 'round';
        context.stroke();
    }
}

canvas.addEventListener('touchstart', start, false);
canvas.addEventListener('touchmove', draw, false);
canvas.addEventListener('mousedown', start, false);
canvas.addEventListener('mousemove', draw, false);





