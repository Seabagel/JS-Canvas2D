function createCanvas(id, width, height) { 
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

document.addEventListener('DOMContentLoaded', function() {
	setInterval(update, 1000/60);
	
}, false);
