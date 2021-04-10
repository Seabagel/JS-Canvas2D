var c2d = function (id, width, height) {
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
	// Color of the canvas
	this.fillStyle = "rgb(5,10,15)";
	this.draw = function () {
		this.ctx.fillStyle = this.fillStyle;
		this.ctx.fillRect(0, 0, canvas2d.width, canvas2d.height);
	}
}

// By default, the canvas is the Size of the window
var canvas2d = new c2d("c2d", window.innerWidth, window.innerHeight);

var rect2d = function (rx, ry, rw, rh, fill){
	this.x = rx;
	this.y = ry;
	this.width = rw;
	this.height = rh;
	//Fills the object with a CSS color: rgb(), rgba(), or #FFF
	this.fillStyle = String(fill);
	//Draws the object to a particular canvas
	this.draw = function () {
		canvas2d.ctx.fillStyle = this.fillStyle;
		canvas2d.ctx.fillRect(this.x, this.y, this.width, this.height);
	}
}

document.addEventListener('DOMContentLoaded', function() {
	setInterval(update2d, 1000/60);
}, false);

// function update2d() {};
