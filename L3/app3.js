console.log("hi bella")

// declare all variables at the top (elevation of scope)
var canvas;
var ctx;
// variables to hold some cordinates
var x = 600;
var y = 300;
// hold onto the magnitude of our movement
var mx = 2;
var my = 4;
// keep track of the height and width of the canvas
var width = 600;
var height = 300;

// initialises animation - entry point function
function init() {
	canvas = document.getElementById("1");
	ctx = canvas.getContext("2d");
	return setInterval(draw, 10); // every 10 ms, we run the function: draw()
}

// function to clear our canvas
function clear() {

}

// defining draw function
function draw() {

}

init();