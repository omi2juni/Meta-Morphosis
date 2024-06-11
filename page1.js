// mouse position detection variables
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
var spamCount = 10;
var xpos = [];
var ypos = [];
var xspeed = [];
var yspeed = [];

// array of vectors
var v = [];
var v1 = [];
var v2 = [];

//images variables
var img;
var necto;
var popup;

// interaction variables
var input;
var input2;
var button;

// completion detection variables
var part1;
var part2;
var completed;

function preload(){
  necto = loadFont('assets/fonts/NectoMono-Regular.otf');
  img = loadImage('assets/forests/forest1.png');
  popup = loadImage('assets/window1.png');
}

function setup() {

  a = 'Who are you?';
  b = 'Why are you here?';

  var cnv = createCanvas(700, 500);
  var cnvx = (windowWidth - width)/2;
  var cnvy = (windowHeight - height)/2;
  
  cnv.position(cnvx, cnvy);
  
  for (let i = 0; i < spamCount; i++){
    xpos[i] = random(200, 550);
    ypos[i] = random(100, 400);
    xspeed[i] = random(-10, 10);
    yspeed[i] = random(-10, 10);
  }  
  
  rows = 700/size;
  cols = 500/size;  
  
  input = createInput(a);
  input2 = createInput(b);

  button = createButton("submit"); 
  
  input.changed(storeData);
  input2.changed(storeData2);
  
  for (let i=0; i<rows; i++){
    for (let j=0; j<cols; j++){
      
      x[i] = i*size;
      y[j] = j*size;
      
      v[0] = createVector(x[5], y[2]);
      v[1] = createVector(x[25], y[2]);
      v[2] = createVector(x[25], y[13]);
      v[3] = createVector(x[19], y[13]);
      v[4] = createVector(x[19], y[10]);
      v[5] = createVector(x[24], y[10]);
      v[6] = createVector(x[24], y[3]);
      v[7] = createVector(x[13], y[3]);
      v[8] = createVector(x[13], y[9]);
      v[9] = createVector(x[5], y[9]);

      v1[0] = createVector(x[5], y[2]);
      v1[1] = createVector(x[13], y[2]);
      v1[2] = createVector(x[13], y[9]);
      v1[3] = createVector(x[6], y[9]);
      v1[4] = createVector(x[6], y[11]);
      v1[5] = createVector(x[16], y[11]);
      v1[6] = createVector(x[16], y[17]);    
      v1[7] = createVector(x[9], y[17]); 
      v1[8] = createVector(x[9], y[14]); 
      v1[9] = createVector(x[15], y[14]);
      v1[10] = createVector(x[15], y[12]);
      v1[11] = createVector(x[5], y[12]);

      // button island
      v2[0] = createVector(x[9], y[14]);
      v2[1] = createVector(x[16], y[14]);
      v2[2] = createVector(x[16], y[17]);
      v2[3] = createVector(x[9], y[17]);

      input.position((cnvx + x[6] - 5), (cnvy + y[3] - 8));
      input2.position((cnvx + x[6] - 5), (cnvy + y[7] - 8));
      button.position((cnvx + x[10]), (cnvy + y[15]), 'absolute');       
    } 
  }
}

function draw() {

  px = mouseX;
  py = mouseY;

  background(img);
  stateButton();
  completionDetection();

  push();
    for (let i=0; i<spamCount; i++){
    
    xpos[i] = lerp(xpos[i], xpos[i] += xspeed[i], 0.6);
    ypos[i] = lerp(ypos[i], ypos[i] += yspeed[i], 0.6);
    
    if (xpos[i] < 0 || xpos[i] + 150 > 700){
     xspeed[i] = xspeed[i] * -1;
    }
    if (ypos[i] < 0 || ypos[i] + 100 > 500){
      yspeed[i] = yspeed[i] * -1;
    } 
    
    fill("white");
    strokeWeight(5);
    stroke("#81FF00");
    image(popup, xpos[i], ypos[i]);

  push();
    textSize(15);
    textFont(necto);
    noStroke();
    fill("white");
    text(input.value(), xpos[i] + 15, ypos[i] + 50, 100, 100);
  pop();

}
 
  
  // draws path
  for (let i=0; i<rows; i++){
    for (let j=0; j<cols; j++){
      
      if (input.value() != a) {
        polyPoint(v1, px, py); 
        beginShape();
          for (let i = 0; i < v1.length; i++) {   
          strokeWeight(4);
          stroke("white");
          vertex(v1[i].x, v1[i].y);
        }
        endShape(CLOSE);
      } else {
        polyPoint(v, px, py); 
        beginShape();
          for (let i = 0; i < v.length; i++) {   
          strokeWeight(4);
          stroke("white");
          vertex(v[i].x, v[i].y);
        }
        endShape(CLOSE);

        beginShape();
          for (let i = 0; i < v2.length; i++) {   
          strokeWeight(4);
          stroke("white");
          vertex(v2[i].x, v2[i].y);
        }
        endShape(CLOSE);
      }

      if (collision === false && frameCount>35) {
        fill("red");
        //window.location.href = "index.html";
      } else {
        fill("#81FF00");
      }
    }
  }    
}

//changes button state when all tasks are completed
function stateButton(){
  if (completed === true){
    button.style("background-color", "#FFFFFF");
    button.style("cursor", "pointer");
    button.style("color", "#000000");
    button.style("border", "2px solid #000000");
    button.mousePressed(gotoLink); 
  } else {
    button.style("background-color", "#000000");
    button.style("cursor", "wait");
    button.style("color", "#FFFFFF");   
  }
}

// link to next page
function gotoLink(){
  window.location.href = "termsandconditions.html";
}

// detects when all tasks are completed
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


// stores input data to dark forest
function storeData(){
  storeItem("message1", input.value());
}

function storeData2(){
  storeItem("message2", input2.value());
}