// By default, the canvas is the Size of the window
//c2d.width = 1920;
//c2d.height = 1080;
//c2d.fillStyle = color | gradient | rgb(r,g,b);

// Make an array
var downpour = new Array(222);

for (i=0; i < downpour.length; i++) {
	// Fill the array with new objects and set the property
	downpour[i] = new rect2d(100, 100, 2, 8, "rgb(128,172,256)");
	downpour[i].x = math2d.rand(0, c2d.width);
	downpour[i].y = 0 - math2d.rand(0, c2d.height);
	downpour[i].vy = Math.floor(Math.random() * 3) + 3;
	downpour[i].acc =  Math.random() * 1;
}

function update2d() {
	// draws the canvas Backgroundasdf
	c2d.draw();

	// draws the rain
	for (j=0; j < downpour.length; j++){
		// updates the y position
		downpour[j].y += downpour[j].vy;
		downpour[j].vy += downpour[j].acc;
		// puts the rain back to the top if it's under the screen
		if(downpour[j].y > c2d.height) {
			downpour[j].x = math2d.rand(0, c2d.width);
			downpour[j].y = 0 - math2d.rand(0, c2d.height);
			downpour[j].vy = Math.floor(Math.random() * 3) + 3;
			downpour[j].acc = Math.random() * 1;
		}
		// draws the rain (duh)
		downpour[j].draw();
	}
}
