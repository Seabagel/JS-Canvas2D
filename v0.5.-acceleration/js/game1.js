// By default, the canvas is the Size of the window
//canvas2d.width = 1920;
//canvas2d.height = 1080;
//canvas2d.fillStyle = color | gradient | rgb(r,g,b);

// Make an array
var cube = new rect2d(100, 100, 100, 100, "rgb(128,172,256)");
cube.x = canvas2d.width/2 - cube.width/2;
cube.y = 0 - cube.height/2;
cube.speed = 0;
cube.acc = 0.369;

function update2d() {
	// draws the canvas Backgroundasdf
	canvas2d.draw();
	cube.y += cube.speed += cube.acc;
	cube.draw();
	// cube.speed += cube.acc;
	if (cube.y > canvas2d.height) {cube.y = 0 - cube.height/2;;}
}
