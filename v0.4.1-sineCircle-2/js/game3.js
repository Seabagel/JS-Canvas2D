
var downpour = new Array(80);
var speed = 0;
var red = 128;
var gre = 180;
var blu = 256;

//i=downpour.length-1; i >= 0; i--
for (i=0; i < downpour.length; i++) {
	downpour[i] = new rect2d(100, 100, 18, 18, "rgb(128,172,256)");
	downpour[i].x = canvas2d.width/2;
	downpour[i].y = canvas2d.height/2;
	downpour[i].fillStyle = "rgb(" + red +","+ gre +","+ blu +")";
	red += 1;
	gre -= 8;
	blu -= 2;
}

// // math2d.circ = function (speed, ) {
// 	speed += 0.002;
// 	downpour[i].x = canvas2d.width/2 + Math.sin(-speed+ (i*0.03))*180 - downpour[i].width/2 ;
// 	downpour[i].y = canvas2d.height/2 + Math.cos(-speed+ (i*0.03))*180 - downpour[i].height/2 ;
//
// }

function update2d() {
	canvas2d.draw();

	for (i=downpour.length-1; i >= 0; i--){
		speed += 0.001;
		downpour[i].x = canvas2d.width/2 + Math.sin(-speed+ (i*0.1))*180 - downpour[i].width/2 ;
  		downpour[i].y = canvas2d.height/2 + Math.cos(-speed+ (i*0.1))*180 - downpour[i].height/2 ;
		downpour[i].draw();
	}
}
