
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

function drawCircle(
	numberOfPoints,
	width,
	outerMargin,
	innerMargin
) {
	for(var i=0; i<numberOfPoints; i++) { 
		var outerPoints = calculate4Points(numberOfPoints, width, outerMargin, i);
		var innerPoints = calculate4Points(numberOfPoints, width, innerMargin, i);
		for(var j=0; j<4; j++) {

			ctx.moveTo(innerPoints[j].x, innerPoints[j].y);
			ctx.lineTo(outerPoints[j].x, outerPoints[j].y);
			ctx.stroke();

		}
	}
}

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

ctx.fillStyle = "orange";
ctx.fillRect(10,10,480,480);

ctx.fillStyle = "black";
drawCircle(5, 500, 5, 20);
drawCircle(15, 500, 10, 20);
drawCircle(30, 500, 15, 20);
