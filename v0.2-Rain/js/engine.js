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

	// Color of the canvas
	this.fillStyle = "rgb(5,10,15)";

	this.draw = function () {
		this.ctx.fillStyle = this.fillStyle;
		this.ctx.fillRect(0, 0, c2d.width, c2d.height);
	}
}

// By default, the canvas is the Size of the window
var c2d = new canvas2d("id", window.innerWidth, window.innerHeight);

var rect2d = function (rx, ry, rw, rh, fill){
	this.x = rx;
	this.y = ry;
	this.width = rw;
	this.height = rh;
	this.fill = String(fill);
	this.draw = function () {
		c2d.ctx.fillStyle = this.fill;
		c2d.ctx.fillRect(this.x, this.y, this.width, this.height);
	}
}

document.addEventListener('DOMContentLoaded', function() {
	setInterval(update2d, 1000/60);
}, false);


var math2d = new Object(); // Sin | Cos | Acc | Lerp | Map | Dist | Avg
// Generates a random number from min to max
math2d.rand = function ( min, max) {
	var answer = min + Math.floor(Math.random() * max) ;
	return answer;
};
// A variable's value between 2 numbers
math2d.cont = function (value, min, max) {
	if (value < min) {
		value = min + 1;
	} else if (value > max) {
		value = max - 1;
	};
};
// Converts a value into a Sine function with transformation
math2d.sin = function (value, x, y, width, height) {
	answer = height * ((Math.Sin(value - x)*width) - y);
	return answer;
};

math2d.cos = function (value, x, y, width, height) {
	answer = height * ((Math.Cos(value - x)*width) - y);
	return answer;
};

/*
function img2d() {
	img = new Image();
	img.src = 'img/harambe.png';
	img.id = 'source';
	img.style.display = "none";
	harambe = document.getElementById("source");
	document.body.appendChild(img);
}

img2d();
 */
