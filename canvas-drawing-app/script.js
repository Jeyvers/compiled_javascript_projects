const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth - 60;
canvas.height = 400;
const colorFields = document.querySelectorAll('.color-field');

let drawColor = 'black',
drawWidth = '2',
startBcg = 'white';
isDrawing = false;

let context = canvas.getContext('2d'); // Two dimesion context. Explain?
context.fillStyle = startBcg; 
context.fillRect(0, 0, canvas.width, canvas.height);
let restoreArr = [];
let index = -1;



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
    e.preventDefault();
}

function stop(e) {
    if(isDrawing) {
        context.stroke();
        context.closePath();
        isDrawing = false; 
    }

    e.preventDefault();

    if(e.type != 'mouseout') {
    restoreArr.push(context.getImageData(0, 0, canvas.width, canvas.height));
    index += 1;
    }
} 

function changeColor(element) {
        drawColor = element.style.backgroundColor;
    }
    
    
function clearCanvas() {
        context.fillStyle = startBcg;
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.fillRect(0, 0, canvas.width, canvas.height);

        restoreArr = [];
        index = -1;
    }

function undoLast() {
    if( index <= 0) {
        clearCanvas();
    } else {
        index -= 1;
        restoreArr.pop();
        context.putImageData(restoreArr[index], 0, 0) 
    } 
}    


 for(let i = 0; i < colorFields.length; i++) {
        colorFields[i].setAttribute("onclick", "changeColor(this)");
    }
canvas.addEventListener('touchstart', start, false);
canvas.addEventListener('touchmove', draw, false);
canvas.addEventListener('mousedown', start, false);
canvas.addEventListener('mousemove', draw, false);
canvas.addEventListener('touchend', stop, false);
canvas.addEventListener('mouseup', stop, false);
canvas.addEventListener('mouseout', stop, false);





// PERSONAL EXPLANATION FOR THE FALSE KEYWORD IN canvas  '.addEventListener('touchstart', start, false);'
// Event bubbling and event capturing 
    // Bubbling
        // When an event happens on an element the event handlers will first run on the element, then the elements parents and up

    // Capturing 
        // Bubbling vice versa, from the parent to the children and childrens' children.  
// .-. false or true on the third element is for Usecapture where the event handler will be handled as bubbling if false and capture if true. Why do we need this?


// Trial
// function changeColor(element) {
//     drawColor = element.style.backgroundColor;
// }

// for(let i = 0; i < colorFields.length; i++) {
//     colorFields[i].setAttribute("onclick", "changeColor(this)");
// }
// colorFields.forEach(colorField => {
//     colorField.addEventListener('click', () => {
//         colorField.setAttribute("onclick", "clrfColor(this)");
//     })
// })
// drawWidth = clrfColor();
