var canvas2d = function (id, width, height) {
	// Inputs the id, width, and height of the canvas from parameter
	this.id = id;
	this.width = width;
	this.height = height;

	// Creates a new canvas
	var newCanvas = document.createElement("canvas");

	// Applies the width and height to the canvas
	newCanvas.setAttribute("id", this.id);
	newCanvas.setAttribute("width", this.width);
	newCanvas.setAttribute("height", this.height);

	// Put the canvas on the html body
	this.c = document.getElementById(this.id);
	this.ctx = newCanvas.getContext('2d');
	document.body.appendChild(newCanvas);
}

// By default, the canvas is the Size of the window
// var canvas2d = new c2d("c2d", window.innerWidth, window.innerHeight);
// var background = new rect2d(0,0, canvas2d.width, canvas2d.height, "#000");

var rect2d = function (x, y, width, height, fillStyle){
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	//Fills the object with a CSS color: rgb(), rgba(), or #FFF
	this.fillStyle = String(fillStyle);

	//Draws the object to a particular canvas
	this.draw = function (targetCanvas) {
		this.targetCanvas = targetCanvas;
		this.targetCanvas.ctx.fillStyle = this.fillStyle;
		this.targetCanvas.ctx.fillRect(this.x, this.y, this.width, this.height);
	}
}
document.addEventListener('DOMContentLoaded', function() {
	setInterval(update2d, 1000/60);
}, false);

function update2d() {};
