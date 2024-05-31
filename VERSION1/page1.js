let px = 0; // xpos of the circle
let py = 0; // ypos of the circle
let r = 30; // circle's radius

// grid variables
var rows;
var cols;
var grid = [];

var x = [];
var y = [];

var size = 25;

var a;
var b;

// text box variables
var spamCount = 2;
var xpos = [];
var ypos = [];
var xspeed = [];
var yspeed = [];

// array of vectors
var v = [];

var img;

// interaction variables
var input;
var input2;
var button;

// completion detection
var part1;
var part2;
var completed;

function preload(){
  img = loadImage('assets/forests/forest1.png');
}

function setup() {
  
  a = 'what should be done?';
  b = 'what is your name?';

  var cnv = createCanvas(700, 500);
  var cnvx = (windowWidth - width)/2;
  var cnvy = (windowHeight - height)/2;
  
  cnv.position(cnvx, cnvy);
  
  for (let i = 0; i < spamCount; i++){
    xpos[i] = random(100, 500);
    ypos[i] = random(100, 400)
    xspeed[i] = random(-10, 10);
    yspeed[i] = random(-10, 10);
   }  
  
  rows = 700/size;
  cols = 500/size;  
  
  input = createInput(a);
  input2 = createInput(b);
  

  button = createButton("submit"); 
  
  
  for (let i=0; i<rows; i++){
    for (let j=0; j<cols; j++){
      
      x[i] = i*size;
      y[j] = j*size;
      
      v[0] = createVector(x[5], y[2]);
      v[1] = createVector(x[22], y[2]);
      v[2] = createVector(x[22], y[13]);
      v[3] = createVector(x[17], y[13]);
      v[4] = createVector(x[17], y[10]);
      v[5] = createVector(x[20], y[10]);
      v[6] = createVector(x[20], y[3]);
      v[7] = createVector(x[12], y[3]);
      v[8] = createVector(x[12], y[9]);
      v[9] = createVector(x[6], y[9]);
      v[10] = createVector(x[6], y[11]);
      v[11] = createVector(x[7], y[11]);
      v[12] = createVector(x[7], y[10]);
      v[13] = createVector(x[10], y[10]);
      v[14] = createVector(x[10], y[11]);
      v[15] = createVector(x[11], y[11]);
      v[16] = createVector(x[11], y[10]);
      v[17] = createVector(x[14], y[10]);
      v[18] = createVector(x[14], y[17]);    
      v[19] = createVector(x[9], y[17]); 
      v[20] = createVector(x[9], y[14]); 
      v[21] = createVector(x[13], y[14]);
      v[22] = createVector(x[13], y[11]);
      v[23] = createVector(x[12], y[11]);
      v[24] = createVector(x[12], y[12]);
      v[25] = createVector(x[9], y[12]);
      v[26] = createVector(x[9], y[11]);
      v[27] = createVector(x[8], y[11]);
      v[28] = createVector(x[8], y[12]);
      v[29] = createVector(x[5], y[12]);
      v[30] = createVector(x[5], y[6]);
      v[31] = createVector(x[11], y[6]);
      v[32] = createVector(x[11], y[5]);
      v[33] = createVector(x[5], y[5]);
  
      
     input.position((cnvx + x[6] - 12), (cnvy + y[3] - 8));
     input2.position((cnvx + x[6] - 12), (cnvy + y[7] - 8));
     button.position((cnvx + x[10]), (cnvy + y[15]), 'absolute'); 
      
    } 
  }
  
  
  
}

function draw() {
  background(img);

  stateButton();
  completionDetection();

//push();
//  for (let i=0; i<spamCount; i++){
    
//    xpos[i] = lerp(xpos[i], xpos[i] += xspeed[i], 0.6);
//    ypos[i] = lerp(ypos[i], ypos[i] += yspeed[i], 0.6);
    
//    if (xpos[i] < 0 || xpos[i] + 150 > 700){
//     xspeed[i] = xspeed[i] * -1;
//    }

//    if (ypos[i] < 0 || ypos[i] + 100 > 500){
//      yspeed[i] = yspeed[i] * -1;
//    } 
    
//  fill("white");
//  strokeWeight(5);
//  stroke("#81FF00");
//  rect(xpos[i], ypos[i], 150, 100);
    
//  push();
//    textSize(15);
//    textFont("Roboto Mono");
//    noStroke();
//    fill("black");
//    text(input.value(), xpos[i] + 15, ypos[i] + 25, 100, 100);
//  pop();

//}
 
  px = mouseX;
  py = mouseY;
  
  
  // draws path
  for (let i=0; i<rows; i++){
    for (let j=0; j<cols; j++){
    
  polyPoint(v, px, py); 
  beginShape();
    for (let i = 0; i < v.length; i++) {   
    strokeWeight(4);
    stroke("white");
    vertex(v[i].x, v[i].y);
  }
  endShape(CLOSE);
  
    if (collision === false) {
    fill("red");
  } else {
    fill("#81FF00");
  }    
  
    }
  }
  
  
}

function stateButton(){

  if (completed === true){
    button.style("background-color", "#FFFFFF");
    button.style("cursor", "pointer");
    button.style("color", "#000000");
    button.mousePressed(gotoLink); 
  } else {
    button.style("background-color", "#000000");
    button.style("cursor", "wait");
    button.style("color", "#FFFFFF");
     
  }
}

function gotoLink(){
  window.location.href = "page2.html";
}

function completionDetection() {
  part1 = false;
  part2 = false;
  completed = false;

  if (input.value() != a) {
    part1 = !part1;
  }

  if (input2.value() != b) {
    part2 = !part2;
  } 

  if (part1 === true && part2 === true) {
    completed = !completed;
  }
}