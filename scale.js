
function calculate4Points (
	numberOfPoints,	// number of points on an quarter circle
	width,	// width of the canvas
	margin,
	pointNumber
) {
	var alpha = Math.PI / (2 * numberOfPoints) * pointNumber;
	var middle = width / 2;

	var radius = middle - margin;

	var delta_x =  (Math.cos(alpha) * radius);
	var delta_y =  (Math.sin(alpha) * radius);

	var px1 = middle + delta_x;
	var py1 = middle - delta_y;
	
	var px2 = middle - delta_x;
	var py2 = middle - delta_y;
	
	var px3 = middle - delta_x;
	var py3 = middle + delta_y;

	var px4 = middle + delta_x;
	var py4 = middle + delta_y;
	
	return [
		{x: px1, y: py1},
		{x: px2, y: py2},
		{x: px3, y: py3},
		{x: px4, y: py4}
	];
}

function drawQuarterCircle(
	numberOfPoints,
	width,
	margin
) {
	for(var i=0; i<numberOfPoints; i++) { 
		var points = calculate4Points(numberOfPoints, width, margin, i);
		for(var j=0; j<4; j++) {
			ctx.fillRect(points[j].x-1, points[j].y-1, 3, 3);
		}
	}
}

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

ctx.fillStyle = "orange";
ctx.fillRect(10,10,480,480);

ctx.fillStyle = "black";
drawQuarterCircle(100, 500, 10);
