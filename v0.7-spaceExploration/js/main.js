// By default, the canvas is the Size of the window
//canvas2d.width = 1920;
//canvas2d.height = 1080;
//canvas2d.fillStyle = color | gradient | rgb(r,g,b);

var canvas1 = new canvas2d("canvas1", window.innerWidth, window.innerHeight);
var background1 = new rect2d(0,0, canvas1.width, canvas1.height, "#000");
var player = new rect2d(110,110, 32, 32, "#AF7");

function update2d() {
	background1.draw(canvas1);
	player.draw(canvas1);
}
