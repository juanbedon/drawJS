/* DRAW */
var keys = {
	LEFT: 37,
	UP: 38,
	RIGHT: 39,
	DOWN: 40
};

document.addEventListener("keyup", keyboardDraw);

var workspace = document.getElementById("drawingArea");
var workingArea = workspace.getContext("2d");
var x = 575;
var y = 150;

function drawLine(color, initialx, initialy, closingx, closingy, canvas){
	canvas.beginPath();
	canvas.strokeStyle = color;
	canvas.lineWidth = 2;
	canvas.moveTo(initialx, initialy);
	canvas.lineTo(closingx, closingy);
	canvas.stroke();
	canvas.closePath();
}

function keyboardDraw(e) {
	var lineColor = colorPicker.value;
	var movement = 10;
	switch(e.keyCode) {
		case keys.LEFT:
			drawLine(lineColor, x, y, x - movement, y, workingArea);
			x = x - movement;
			document.getElementById("disclaimer").innerHTML = "";
		break;
		case keys.UP:
			drawLine(lineColor, x, y, x, y - movement, workingArea);
			y = y - movement;
			document.getElementById("disclaimer").innerHTML = "";
		break;
		case keys.RIGHT:
			drawLine(lineColor, x, y, x + movement, y, workingArea);
			x = x + movement;
			document.getElementById("disclaimer").innerHTML = "";
		break;
		case keys.DOWN:
			drawLine(lineColor, x, y, x, y + movement, workingArea);
			y = y + movement;
			document.getElementById("disclaimer").innerHTML = "";
		break;
		default:
			document.getElementById("disclaimer").innerHTML = "You did not press an arrow key.";
	}
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