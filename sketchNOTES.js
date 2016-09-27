var s = 1;
var r = 0;
var t = 0;
var bDir = 1;
var ry = 0;
var ty = 0;

function setup(){
  createCanvas(400, 400);
  background(255);
  rectMode(CENTER);
  angleMode(DEGREES);

}

function draw(){
  //translate(-100,0); // translated to the left
  //rotate(PI/20); // default to radians
  //rotate(PI/mouseX); // rotate is controlled by mouse

  // translate(width/2, height/2);
  // rotate(map(mouseX, 0, 400, 0, 360));
  // scale(map(mouseY, 0, 400, 0, 5));
  // rect(0, 0, 50, 50);

  translate(width/2, height/2);
  // s = s + 0.01; //scale
  // t = t + 1; // translate
  r = r + 10; // rotate

  // if(t > 180) { // makes the square bounce against the edges of the canvas
  //   bDir = 0;
  // }
  //
  // if (t < -200){
  //   bDir = 1;
  // }
  //
  // if(bDir == 1){
  //   t++;
  // } else{
  //   t--;
  // }

  if(t > 300){
    bDir = 0;
    ry = random(0, height/10);
    ty = random(height/2);
  }

  if(t < -300){
    bDir = 1;
    ry = random(0, height/10);
    ty = map(random(height/2), -200, 200);
  }

  if(bDir == 1){
    t++;
  } else{
    t--;
  }
  translate(t, ty);
  rotate(r);
  scale(s);
  rect(0, 0, 50, 50);

}
