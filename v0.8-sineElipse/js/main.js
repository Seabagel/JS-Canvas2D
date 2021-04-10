var downpour = new Array(16);
var speed = 0;
var red = 128;
var gre = 180;
var blu = 256;

//i=downpour.length-1; i >= 0; i--
for (i=5; i < downpour.length; i++) {
	downpour[i] = new rect2d(100, 100, 18, 18, "rgb(128,180,256)");
	downpour[i].x = canvas2d.width/2;
	downpour[i].y = canvas2d.height/2;
	downpour[i].fillStyle = "rgb(" + red +","+ gre +","+ blu +")";

	// Cyan Magenta rgb(128,180,256)
	red += 2;
	gre -= 6;
	blu -= 1;
}

function update2d() {
	canvas2d.draw();
	for (i=downpour.length-1; i >= 0; i--){
		speed += 0.07;
		downpour[i].x = canvas2d.width/3 + (Math.sin(speed*i)*90) - downpour[i].width/2 ;
  		downpour[i].y = canvas2d.height/3 + (Math.cos(speed*i)*90)/3 - downpour[i].height/2 ;
		downpour[i].draw();
	}
}
