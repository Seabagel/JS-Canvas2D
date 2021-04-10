var downpour = new createCanvas("A", window.innerWidth, window.innerHeight);
var boxSize = 0;
var rate = 19;

function harambe() {
	img = new Image();
	img.src = 'img/harambe.png';
	img.id = 'source';
	img.style.display = "none";
	harambe = document.getElementById("source");
	document.body.appendChild(img);
}

harambe();

function update() {
	//ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
	downpour.ctx.drawImage(source, 0,0,567,567, window.innerWidth/2 - boxSize/2, window.innerHeight/2 - boxSize/2, boxSize, boxSize);

	boxSize -= rate;
	rate -= 0.1;
	if (boxSize > 10) {
		rate = 10
	}
}

/*
var downpour = new createCanvas("A", window.innerWidth, window.innerHeight);
var box = 0;
var boxSize = 0;
var rate = 10;

function update() {
	downpour.ctx.fillStyle = "black";
	downpour.ctx.fillRect(0, 0, downpour.width, downpour.height);
	downpour.ctx.fillStyle = "white";
	downpour.ctx.fillRect(box, box, boxSize, boxSize);

	box += rate;
	boxSize -= rate;
	rate -= 0.1;
	if (rate < 0)
	{
		rate = 10
	}
}

function update() {
	downpour.ctx.fillStyle = "black";
	downpour.ctx.fillRect(0, 0, downpour.width, downpour.height);
	downpour.ctx.fillStyle = "white";
	downpour.ctx.fillRect(box, box, boxSize, boxSize);

	box += rate;
	boxSize -= rate;
	rate -= 0.1;
	if (boxSize > 10) {
		rate = 5
	}
}

function update() {
	downpour.ctx.fillStyle = "black";
	downpour.ctx.fillRect(0, 0, downpour.width, downpour.height);
	downpour.ctx.fillStyle = "white";
	downpour.ctx.fillRect(window.innerWidth/2 - boxSize/2, window.innerHeight/2 - boxSize/2, boxSize, boxSize);

	box += rate;
	boxSize -= rate;
	rate -= 0.1;
	if (boxSize > 10) {
		rate = 10
	}
}
*/
