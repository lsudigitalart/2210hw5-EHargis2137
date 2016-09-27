var x, y, x2, y2;
var offsetA, offsetB;

var squarex, squarey, squarex2, squarey2;

function setup(){
  createCanvas(1000,600);
  background('white');
}

function draw(){
  stroke(210);
  rect(300, 100, 400, 400);

  for (y = 120; y < 500; y+=20) { //draw lines to divide square
    line(300, y, 700, y);
  }
  for (x = 300; x < 700; x+=20){
    line(x, 100, x, 500);
  }

  for (x = 300; x < 700; x+=20){
    for (y = 100; y < 500; y+=20){
      stroke(110);
      frameRate(6);
      line(x, y, x+20, y+20);
    }
  }
  for (x2 = 320; x2 < 720; x2+=20){
    for (y2 = 100; y2 < 500; y2+=20){
      stroke(100);
      frameRate(6);
      line(x2, y2, x2-20, y2+20);
    }
  }

  squarex = random(320, 700);
  squarey = random(100, 500);
  noStroke();
  rect(squarex, squarey, 20, 20);
}
