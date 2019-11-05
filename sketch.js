var time1 = 1000;
var time2 = 2000;
var time3 = 3000;
var time4 = 4000;
var time5 = 5000;
var time6 = 6000;

var y1 = 150;
var y2 = 150;
var y3 = 150;
var value1;
var value2;

function setup() {
  createCanvas(800, 600);

  timeStarted = millis();
}

function draw() {
  background(0);

  var currentTime = millis();
  rectMode(CENTER);

  push();
  r1 = random(0, 300);
  r2 = random(500, 800);

  stroke(255);
  strokeWeight(3);

  for (var i = 0; i < 10; i++){
    line(r1, 0, r1, 600)
  }
  for (var j = 0; j < 10; j++){
    line(r2, 0, r2, 600)
  }
  pop();

  /////////////////////////////////////////////////////////////
  // Middle
  push();
  if (currentTime > time5) {
    y1 -= 0.65;
  } 
  else if (currentTime > time1) {
    y1 += 0.8;
  }
  rect(width / 2, y1, 40, 80);
  pop();

  /////////////////////////////////////////////////////////////
  // Left
  push();
  if (currentTime > time2) {
    y2 -= 0.45;
  } 
  else if (currentTime > time1) {
    y2 += 2.5;
  }
  //rect((width / 2) - 50, y2, 40, 80);
  square((width / 2 - 50), y2, 40);
  pop();

  /////////////////////////////////////////////////////////////
  //Right
  push();
  if (currentTime > time4) {
    y3 -= 0.8;
  } 
  else if (currentTime > time2) {
    y3 += 1.8;
  }
  circle((width / 2) + 50, y3, 40);
  pop();

  //if(millis() - timeOfLastSwitch > switchInterval){
  //
  //}

  //var chosenValue = Math.random() < 0.5 ? value1 : value2;
  //if(chosenValue = value1){
  //  y -= 0.8;
  //}
  //else if(chosenValue = value2){
  //  y += 1.2;
  //}

  //lines
}

//function lines(){
//  r1 = random();
//  r2 = random();
//
//  stroke(0);
//  strokeWeight(3);
//
//  for (var i = 0; i < 10; i++){
//    line(r1, 0, r1, 600)
//  }
//}
