// By default, the canvas is the Size of the window
//canvas2d.width = 1920;
//canvas2d.height = 1080;
//canvas2d.fillStyle = color | gradient | rgb(r,g,b);

var canvas1 = new canvas2d("canvas1", window.innerWidth, window.innerHeight),
    background1 = new rect2d(0,0, canvas1.width, canvas1.height, "#000"),
    player = new rect2d(110,110, 32, 32, "#AF7"),
    downpour = new Array(200);

for (i=0; i < downpour.length; i++) {
	// Fill the array with new objects and set the property
	downpour[i] = new rect2d(100, 100, 3, 9, "rgb(128, 172, 256)");
	downpour[i].x = math2d.randFlo(0, canvas1.width);
	downpour[i].y = 0 - math2d.randFlo(0, canvas1.height);
	downpour[i].vy = Math.floor(Math.random() * 2) + 3;
	downpour[i].acc =  Math.random() * 0.2;
}

function update2d() {
	// draws the canvas Backgroundasdf
	// background1.draw(canvas1);
	// draws the rain
    background1.draw(canvas1)
	for (i = 0; i < downpour.length; i++){
		// updates the y position
		downpour[i].y += downpour[i].vy += downpour[i].acc;
		// puts the rain back to the top if it's under the screen
		if(downpour[i].y > canvas1.height) {
			downpour[i].x = math2d.randFlo(0, canvas1.width);
			downpour[i].y = 0 - math2d.randFlo(0, canvas1.height);
			downpour[i].vy = Math.floor(Math.random() * 2) + 3;
			downpour[i].acc = Math.random() * 0.2;
		}
		// draws the rain (duh)
		downpour[i].draw(canvas1);
	}
}