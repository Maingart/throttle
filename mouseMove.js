// Sample from https://developer.mozilla.org/en-US/docs/Web/API/Element/mousemove_event 

// When true, moving the mouse draws on the canvas
let isDrawing = false;
let x = 0;
let y = 0;

const myPics = document.getElementById('myPics');
const context = myPics.getContext('2d');

// event.offsetX, event.offsetY gives the (x,y) offset from the edge of the canvas.

function drawLine(context, x1, y1, x2, y2) {
  context.beginPath();
  context.strokeStyle = 'black';
  context.lineWidth = 1;
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.stroke();
  context.closePath();
}

window.addEventListener('mouseup', e => {
  console.log('end');
  if (isDrawing === true) {
    drawLine(context, x, y, e.offsetX, e.offsetY);
    x = 0;
    y = 0;
    isDrawing = false;
  }
});

myPics.addEventListener('mousedown', e => {
  console.log('start');
  x = e.offsetX;
  y = e.offsetY;
  isDrawing = true;
});

function mouseMove(e) {
  if (isDrawing === true) {
    console.log('Draw');
    drawLine(context, x, y, e.offsetX, e.offsetY);
    x = e.offsetX;
    y = e.offsetY;
  }
}

mouseMove = throttle(mouseMove, 100);

myPics.addEventListener('mousemove', mouseMove);
