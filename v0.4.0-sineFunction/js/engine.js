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
var canvas2d = new c2d("id", window.innerWidth, window.innerHeight);

var rect2d = function (rx, ry, rw, rh, fill){
	this.x = rx;
	this.y = ry;
	this.width = rw;
	this.height = rh;
	this.fillStyle = String(fill);
	this.draw = function () {
		canvas2d.ctx.fillStyle = this.fillStyle;
		canvas2d.ctx.fillRect(this.x, this.y, this.width, this.height);
	}
}

document.addEventListener('DOMContentLoaded', function() {
	setInterval(update2d, 1000/60);
}, false);


var math2d = new Object(); //  Cos | Acc | Lerp | Map | Dist | Avg
// Generates a random number from min to max
math2d.rand = function (min, max) {
	var answer = min + Math.floor(Math.random() * max) ;
	return answer;
};
// Contain a variable's value between 2 numbers
math2d.cont = function (value, min, max) {
	if (value < min) {
		value = min + 1;
	} else if (value > max) {
		value = max - 1;
	};
};
// Converts a value into a Sine function with transformation
// width and height needs to be > 0
// Width stretches the wave on the x-axis
// Height stretches the wave on the y-axis
math2d.sin = function (value, x, y, width, height) {
	answer = Math.sin(value / width - x) * height + y;
	return answer;
};
math2d.cos = function (value, x, y, width, height) {
	answer = Math.cos(value / width - x) * height + y;
	return answer;
};
// Accelaration increments a value while incrementing itself
// To use this, you want to make a variable for the increment
// Ex: math2d.acc(player.x, player.speed, 0.1)
math2d.acc = function (value, increment, acc) {
	value += increment;
	increment += acc;
} ;


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
