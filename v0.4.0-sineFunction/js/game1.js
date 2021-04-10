// By default, the canvas is the Size of the window
//c2d.width = 1920;
//c2d.height = 1080;
//c2d.fillStyle = color | gradient | rgb(r,g,b);

// Make an array
var minions = new Array(256);
var scl = 20;
for (i=0; i < minions.length; i++) {
	// Fill the array with new objects and set the property
	if (i % 2 == 0) {
		minions[i] = new rect2d(0, 0, scl, scl, "rgb(180,255,160)");
	} else if (i % 3 == 0) {
		minions[i] = new rect2d(0, 0, scl, scl, "rgb(80,80,240)");
	} else {
		minions[i] = new rect2d(0, 0, scl, scl, "rgb(240,80,80)");
	};
	//minions[i] = new rect2d(0, 0, 22, 22, "rgb(160,180,240)");
	minions[i].x = i * scl * 1.1;
}
//math2d.sin = function (value, x, y, width, height) {

function update2d() {
	// draws the canvas Backgroundasdf
	canvas2d.draw();

	// draws the rain
	for (j=0; j < minions.length; j++){
		// updates the y position
		minions[j].x += 0.1;
		minions[j].y = math2d.sin(minions[j].x, 0, canvas2d.height / 2 - minions[j].height/2, 10, 72);
		// // puts the rain back to the top if it's under the screen
		// if(minions[j].x > c2d.width) {
		// 	minions[j].x = 0;
		// 	minions[j].y = math2d.sin(minions[j].x, 0, c2d.height / 2, 100, 0.3);
		// }
		// draws the rain (duh)
		minions[j].draw();
	}
}
