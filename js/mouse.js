/* DRAW */
document.addEventListener("mousedown",clickMouse);
document.addEventListener("mouseup",unclickMouse);
document.addEventListener("mousemove",drawMouse);

var state = 0;
var lineColor = "pink";
var workspace = document.getElementById('drawingArea');
var workingArea = workspace.getContext("2d");
var x;
var y;


function drawLine(color, initialx, initialy, closingx, closingy, canvas){
  canvas.beginPath();
  canvas.strokeStyle = color;
  canvas.lineWidth = 3;
  canvas.moveTo(initialx, initialy);
  canvas.lineTo(closingx, closingy);
  canvas.stroke();
  canvas.closePath();
}

function drawMouse(e) {
  var lineColor = colorPicker.value;
  if (state == 1) {
    drawLine(lineColor, x, y, e.layerX, e.layerY, workingArea);
  }
  x = e.layerX;
  y = e.layerY;
}

function clickMouse(e) {
  var lineColor = colorPicker.value;
  state = 1;
  x = e.layerX;
  y = e.layerY;
}

function unclickMouse(e) {
  var lineColor = colorPicker.value;
  state = 0;
  x = e.layerX;
  y = e.layerY;
}
/* DRAW */

/* COLOR PICKER */
var colorPicker;
var defaultColor = "#212121";

window.addEventListener("load", startup, false);
function startup() {
  colorPicker = document.querySelector("#colorPicker");
  colorPicker.value = defaultColor;
}
/* COLOR PICKER */