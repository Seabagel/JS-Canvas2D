var math2d = new Object(); //  Cos | Acc | Lerp | Map | Dist | Avg
// Generates a random number from min to max
// It's not an integer, so you have to wrap the function inside Math.floor() if you want an integer
math2d.randFlo = function (minimum, maximum) {
	var min = minimum;
	var max = maximum;
	if (max < min) {
		max = minimum;
		min = maximum;
	}
	if (min < 0) {
		var answer =  min + Math.random() * (max - min) ;
	} else {
		var answer =  min + Math.random() * max ;
	}
	return answer;
};

math2d.randInt = function (minimum, maximum) {
	var min = minimum;
	var max = maximum;
	if (max < min) {
		max = minimum;
		min = maximum;
	}
	if (min < 0) {
		var answer =  Math.round(min + Math.random() * (max - min));
	} else {
		var answer =  Math.round(min + Math.random() * max);
	}
	return answer;
};

// Contain a variable's value between 2 numbers
math2d.cont = function (value, min, max) {
	if (value < min) {
		value = min + 1;
	} else if (value > max) {
		value = max - 1;
	};
};
// Converts a value into a Sine function with transformation
// width and height needs to be > 0
// Width stretches the wave on the x-axis
// Height stretches the wave on the y-axis
math2d.sin = function (value, x, y, width, height) {
	answer = Math.sin(value / width - x) * height + y;
	return answer;
};
math2d.cos = function (value, x, y, width, height) {
	answer = Math.cos(value / width - x) * height + y;
	return answer;
};
// Accelaration increments an acceleration to the calue
// Ex: math2d.acc(player.speed, 0.1)
math2d.acc = function (value, acceleration) {
	this.value = value;
	this.acceleration = acceleration;
	return this.value += this.acceleration;
} ;

math2d.vector2 = function (xPos, yPos) {
	return xy = {x: xPos, y: yPos};
}

math2d.vector3 = function (red, green, blue) {
	return rgb = {r: red, g: green, b: blue};
}

math2d.vector4 = function (xPos, yPos, width, height) {
	return xy = {x: xPos, y: yPos, w: width, h:height};
}
