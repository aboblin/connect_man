var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "teal";
ctx.strokeStyle = "teal";


var clear_button = document.getElementById("clear");

var clear_canvas = function(){
	ctx.clearRect(0,0, canvas.width, canvas.height);
};
var make_shape = function(e){
	
	ctx.lineTo(e.offsetX, e.offsetY);
	ctx.stroke();
	
	ctx.beginPath();
	ctx.arc(e.offsetX, e.offsetY, 25, 0, 2 * Math.PI);
	ctx.fill();
	
	ctx.beginPath();
	ctx.moveTo(e.offsetX, e.offsetY);
};

clear_button.addEventListener("click", clear_canvas);
canvas.addEventListener("click", make_shape);