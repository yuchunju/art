
var canvas;


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

}



function setup() {
  canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  canvas.position(0,0);
  canvas.style('z-index','-1');

}





 function draw() {
 background('#99CCFF');
 
  rectMode(CENTER);
  noStroke();
  fill(0,0,225);
  rotete(angle);
  rectX(0,0,150,150);
  angle +=0.07;
 
 }

