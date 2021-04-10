// By default, the canvas is the Size of the window
//canvas2d.width = 1920;
//canvas2d.height = 1080;
//canvas2d.fillStyle = color | gradient | rgb(r,g,b);

var r = 0;
var g = 0;
var b = 0;

var minions = new Array(128);

for (i=0; i < minions.length; i++) {
	minions[i] = new rect2d(0, 0, 8, 8, "rgb(0,0,0)");
	minions[i].x = i * 5;

	minions[i].fillStyle = "rgb(" + r + "," + g + "," + b + ")";
	r += 1 * 1;
	g += 1 * 3;
	b += 1 * 1;
}

function update2d() {
	canvas2d.draw();

	for (j=0; j < minions.length; j++) {
		minions[j].x += 5;
		minions[j].y = math2d.sin(minions[j].x, 0, canvas2d.height / 2 - minions[j].height/2, 16, 48);

		if (minions[j].x > canvas2d.width) {
			minions[j].x = 0 - minions[j].width;
			minions[j].y = math2d.sin(minions[j].x, 0, canvas2d.height / 2 - minions[j].height/2, 16, 48);
		}

		minions[j].draw();
	}
}
