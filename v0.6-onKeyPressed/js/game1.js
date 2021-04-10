// By default, the canvas is the Size of the window
//canvas2d.width = 1920;
//canvas2d.height = 1080;
//canvas2d.fillStyle = color | gradient | rgb(r,g,b);

var canvas1 = new canvas2d("canvas1", window.innerWidth/2, window.innerHeight);
var canvas2 = new canvas2d("canvas2", window.innerWidth/2, window.innerHeight);
var background1 = new rect2d(0,0, canvas1.width, canvas1.height, "#000");
var background2 = new rect2d(0,0, canvas2.width, canvas2.height, "#B0F");
var player = new rect2d(110,110, 32, 32, "#AF7");
player.vx = 0;
player.vy = 0;

function keydown2d (e) {
	var x = e.key;
	if (x == "w" || x == "W") {
		player.vy = -1;
	}
	if (x == "s" || x == "S") {
		player.vy = 1;
	}
	if (x == "a" || x == "A") {
		player.vx = -1;
	}
	if (x == "d" || x == "D") {
		player.vx = 1;
	}
}

function keyup2d (e) {
	var x = e.key;
	if (x == "w" || x == "W" || x == "s" || x == "S") {
		player.vy = 0;
	}
	if (x == "a" || x == "A" || x == "d" || x == "D") {
		player.vx = 0;
	}
}

function update2d() {

	player.x += 5 * player.vx
	player.y += 5 * player.vy
	background1.draw(canvas1);
	background2.draw(canvas2);
	player.draw(canvas1);
	player.draw(canvas2);
}
