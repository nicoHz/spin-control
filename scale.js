
function calculate4Points (
	numberOfPoints,	// number of points on an quarter circle
	width,	// width of the canvas
	margin,
	pointNumber
) {
	var alpha = (Math.PI / (2 * numberOfPoints) * pointNumber);
	var middle = (width / 2);

	var radius = middle - margin;

	var delta_x =  (Math.cos(alpha) * radius);
	var delta_y =  (Math.sin(alpha) * radius);

	var px1 = middle + delta_x;
	var py1 = middle - delta_y;
	
	var px2 = middle - delta_x;
	var py2 = middle + delta_y;
	
	var px3 = middle - delta_y;
	var py3 = middle - delta_x;

	var px4 = middle + delta_y;
	var py4 = middle + delta_x;
	
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
	innerMargin,
	lineWidth
) {
	for(var i=0; i<numberOfPoints; i++) { 
		var outerPoints = calculate4Points(numberOfPoints, width, outerMargin, i);
		var innerPoints = calculate4Points(numberOfPoints, width, innerMargin, i);
		for(var j=0; j<4; j++) {

			console.log('from', innerPoints[j].x, innerPoints[j].y);
			console.log('to', outerPoints[j].x, outerPoints[j].y);
			ctx.moveTo(innerPoints[j].x, innerPoints[j].y);
			ctx.lineTo(outerPoints[j].x, outerPoints[j].y);
			ctx.lineWidth = lineWidth;
			ctx.stroke();
		}
	}
}

function drawScale(size) {
	drawCircle(15, 500 * size, 15 * size, 20 * size, 5/4 * size);
	drawCircle(3, 500 * size, 5 * size, 25 * size, 20/4 * size);
}

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

//ctx.fillStyle = "orange";
//ctx.fillRect(5,5,490,490);

ctx.fillStyle = "black";
drawScale(1);
