
var downpour = new Array(18);
var value = 0;
var r = 128;
var g = 180;
var b = 256;
for (i=downpour.length; i >0 ; i--){
	downpour[i] = new rect2d(100, 100, 128, 128, "rgb(128,172,256)");
	downpour[i].x = c2d.width/2;
	downpour[i].y = c2d.height/2;
downpour[i].fill = "rgb(" + r+","+ g+","+ b+")";
r -= 2;
g -= 2;
b -= 2;
}

function update2d() {
	c2d.draw();

	for (j=downpour.length; j >1 ; j--){
value += 0.001;
		downpour[j].x = c2d.width/2 + Math.sin(-value)*128 - downpour[j].width/2 ;
  downpour[j].y = c2d.height/2 + Math.cos(-value)*128 - downpour[j].height/2 ;
		downpour[j].draw();
	}
}
