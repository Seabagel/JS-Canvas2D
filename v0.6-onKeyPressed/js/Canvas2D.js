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
// var canvas2d = new c2d("id", window.innerWidth, window.innerHeight);

// window.addEventListener("resize", function(){
//    canvas2d.width = window.innerWidth;
// 	canvas2d.height = window.innerHeight;
// });

var rect2d = function (x, y, w, h, fill){
	this.x = x;
	this.y = y;
	this.width = w;
	this.height = h;
	//Fills the object with a CSS color: rgb(), rgba(), or #FFF
	this.fillStyle = String(fill);

	//Draws the object to a particular canvas
	this.draw = function (targetCanvas) {
		this.targetCanvas = targetCanvas;
		this.targetCanvas.ctx.fillStyle = this.fillStyle;
		this.targetCanvas.ctx.fillRect(this.x, this.y, this.width, this.height);
	}
}

document.addEventListener('DOMContentLoaded', function() {
	setInterval(update2d, 1000/60);
	document.addEventListener("keydown", keydown2d);
	document.addEventListener("keyup", keyup2d);
}, false);


var math2d = new Object(); //  Cos | Acc | Lerp | Map | Dist | Avg
// Generates a random number from min to max
// console.log(math2d.rand(30,-30));
math2d.rand = function (minimum, maximum) {
	var min = minimum;
	var max = maximum;
	if (max < min) {
		max = minimum;
		min = maximum;
	}
	if (min < 0) {
		var answer =  min + Math.floor(Math.random() * (max - min)) ;
	} else {
		var answer =  min + Math.floor(Math.random() * max) ;
	}
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
function img2d(src) {
	img = new Image();
	img.src = 'img/harambe.png';
	img.id = img.src;
	img.style.display = "none";
	harambe = document.getElementById("img.src");
	document.body.appendChild(img);
}

img2d();
 */
