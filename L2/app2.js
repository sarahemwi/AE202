
// load sprites
var bg = new Image();
bg.src = "nyc.jpg"
var lady1 = new Image();
lady1.src = "lady1.png"
// var lady2 = new Image();
// lady2.src = "lady2.png"
// var lady3 = new Image();
// lady3.src = "lady3.png"
// var lady4 = new Image();
// lady4.src = "lady4.png"
// var lady5 = new Image();
// lady5.src = "lady5.png"

//set up canvas
var s = document.getElementById("scene");
var scene = s.getContext("2d");

bg.onload = function() {
	scene.drawImage(bg, 0, 0, 800, 500)
	scene.drawImage(lady1, 100, 300, 70, 150)
	// scene.drawImage(lady2, 200, 300, 100, 150)
	// scene.drawImage(lady3, 100, 300, 105, 165)
	// scene.drawImage(lady4, 100, 300, 50, 130)
	// scene.drawImage(lady5, 100, 300, 30, 110)
}