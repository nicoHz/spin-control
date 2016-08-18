
function calculatePoint (
	numberOfPoints,	// number of points on an quarter circle
	width,	// width of the canvas
	margin,
	pointNumber
) {
	var alpha = Math.PI / (2 * numberOfPoints) * pointNumber;
	var middle = width / 2;

	var radius = middle - margin;
	var px = (Math.cos(alpha) * radius) + middle;
	var py = middle - (Math.sin(alpha) * radius);
	
	return {x: px, y: py};
}

function drawQuarterCircle(
	numberOfPoints,
	width,
	margin
) {
	for(var i=0; i<numberOfPoints; i++) { 
		var p = calculatePoint(numberOfPoints, width, margin, i);
		ctx.fillRect(p.x-1, p.y-1, 3, 3);
	}
}

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

ctx.fillStyle = "orange";
ctx.fillRect(10,10,480,480);

ctx.fillStyle = "black";
drawQuarterCircle(100, 500, 10);
