console.log("hi bella")

//First shape
var c = document.getElementById('one');
var ctx = c.getContext('2d');
ctx.fillStyle = "rgb(153, 184, 238)";
ctx.fillRect(100, 100, 100, 100);
ctx.strokeStyle = "rgb(100,149,237)";
ctx.strokeRect(80, 80, 140, 140);
ctx.clearRect(120, 120, 60, 60);

//Second shape
var c2 = document.getElementById('two');
var ctx2 = c2.getContext('2d');
ctx2.fillStyle = "rgb(153, 184, 238)";
ctx2.fillRect(0, 0, 150, 150);
ctx2.fillRect(150, 150, 150, 150);

//Third shape
var c3 = document.getElementById('three');
var ctx3 = c3.getContext('2d');
ctx3.fillStyle = "rgb(153, 184, 238)";
ctx3.fillRect(0, 0, 300, 300);
ctx3.fillStyle = "rgb(255, 255, 255)";
ctx3.fillRect(20, 20, 120, 120);
ctx3.fillRect(20, 160, 120, 120);
ctx3.fillRect(160, 20, 120, 120);
ctx3.fillRect(160, 160, 120, 120);

//Fourth shape
var c4 = document.getElementById('four');
var ctx4 = c4.getContext('2d');
ctx4.fillStyle = "rgb(153, 184, 238)";
ctx4.fillRect(0, 0, 100, 100);
ctx4.fillRect(200, 0, 100, 100);
ctx4.fillRect(100, 100, 100, 100);
ctx4.fillRect(200, 200, 100, 100);
ctx4.fillRect(0, 200, 100, 100);

//Fifth shape
var c5 = document.getElementById('five');
var ctx5 = c5.getContext('2d');
ctx5.fillStyle = "rgb(153, 184, 238)";
var x = 0;
var y = 0;
var width = 300;
var height = 300;
ctx5.fillRect(x, y, width, height);
while (width > 0){
	x += 10;
	y += 10;
	width -=20;
	height -= 20;
	ctx5.clearRect(x, y, width, height);
	x += 10;
	y += 10;
	width -=20;
	height -= 20;
	ctx5.fillRect(x, y, width, height);
}

//First custom shape
var c6 = document.getElementById('six');
var ctx6 = c6.getContext('2d');
ctx6.beginPath();
ctx6.strokeStyle = "rgb(153, 184, 238)";
ctx6.moveTo(75,0);
ctx6.lineTo(150,100);
ctx6.lineTo(75,200);
ctx6.lineTo(0,100);
ctx6.closePath();
ctx6.stroke();
ctx6.fillStyle = "rgb(153, 184, 238)";
ctx6.fill();


//Second custom shape
var c7 = document.getElementById('seven');
var ctx7 = c7.getContext('2d');
ctx7.beginPath();
ctx7.strokeStyle = "rgb(153, 184, 238)";
ctx7.moveTo(0,0);
ctx7.lineTo(300,300);
ctx7.lineTo(300,0);
ctx7.lineTo(0,300);
ctx7.closePath();
ctx7.stroke();
ctx7.fillStyle = "rgb(153, 184, 238)";
ctx7.fill();

//Third custom shape
var c8 = document.getElementById('eight');
var ctx8 = c8.getContext('2d');
ctx8.beginPath();
ctx8.strokeStyle = "rgb(153, 184, 238)";
ctx8.moveTo(0,0);
ctx8.lineTo(300,300);
ctx8.lineTo(300,150);
ctx8.lineTo(0,150);
ctx8.lineTo(0,0);
ctx8.moveTo(150,300);
ctx8.lineTo(0,300);
ctx8.lineTo(300,0);
ctx8.lineTo(150,0);
ctx8.closePath();
ctx8.stroke();
ctx8.fillStyle = "rgb(153, 184, 238)";
ctx8.fill();

//Fourth custom shape
var c9 = document.getElementById('nine');
var ctx9 = c9.getContext('2d');
ctx9.beginPath();
ctx9.strokeStyle = "rgb(153, 184, 238)";
ctx9.arc(150, 150, 100, 0, 6.28) // 6.28 is two times pi(3.14) approximately
ctx9.closePath();
ctx9.stroke();
ctx9.fillStyle = "rgb(153, 184, 238)";
ctx9.fill();

// Custom doodle
var c10 = document.getElementById('ten');
var ctx10 = c10.getContext('2d');
// land and sky
ctx10.fillStyle = "rgb(153, 184, 238)";
ctx10.fillRect(0, 0, 800, 350);
ctx10.fillStyle = "rgb(130, 150, 0)";
ctx10.fillRect(0, 350, 800, 150);
// sun
ctx10.beginPath();
ctx10.strokeStyle = "rgb(218, 165, 32)";
ctx10.arc(100, 100, 50, 0, 6.28) // 6.28 is two times pi(3.14) approximately
ctx9.closePath();
ctx10.stroke();
ctx10.fillStyle = "rgb(218, 165, 32)";
ctx10.fill();
// building
ctx10.fillStyle = "rgb(153, 104, 238)";
ctx10.fillRect(400, 150, 300, 200); // x, y, w, h
// road
ctx10.beginPath();
ctx10.strokeStyle = "grey";
ctx10.fillStyle = "gainsboro";
ctx10.moveTo(300, 500);
ctx10.lineTo(350, 350);
ctx10.lineTo(400, 350);
ctx10.lineTo(450, 500);
ctx10.fill();
ctx10.moveTo(375, 500);
ctx10.lineTo(375, 350);
ctx10.closePath();
ctx10.stroke();


