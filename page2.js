let px = 0; // xpos of the circle
let py = 0; // ypos of the circle
let r = 30; // circle's radius

var rows;
var cols;

var grid = [];

var x = [];
var y = [];

var size = 25;

var a;

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
var v3 = [];
var v4 = [];
var v5 = [];
var v6 = [];
var v7 = [];
var v8 = [];
var v9 = [];
var v10 = [];
var v11 = [];

// completion detection
var part1;
var part2;
var completed;

var img;

var input1;
var input2;
var button;

function preload() {
  necto = loadFont('assets/fonts/NectoMono-Regular.otf');
  img = loadImage("assets/forests/forest2.png");
  popup = loadImage('assets/window1.png');
}

function setup() {
  createCanvas(700, 500);
  
  a = "By checking the boxes, you are agreeing to the terms and policies of the Dark Forest.";

  var cnv = createCanvas(700, 500);
  var cnvx = (windowWidth - width)/2;
  var cnvy = (windowHeight - height)/2;
  
  cnv.position(cnvx, cnvy);
  

  for (let i = 0; i < spamCount; i++) {
    xpos[i] = random(200, 550);
    ypos[i] = random(100, 400);
    xspeed[i] = random(-10, 10);
    yspeed[i] = random(-10, 10);
  }

  rows = 700 / size;
  cols = 500 / size;

  checkbox1 = createCheckbox("");
  checkbox2 = createCheckbox("");
  checkbox3 = createCheckbox("");

  button = createButton("submit");

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      x[i] = i * size;
      y[j] = j * size;

      v[0] = createVector(x[4], y[2]);
      v[1] = createVector(x[23], y[2]);
      v[2] = createVector(x[23], y[5]);
      v[3] = createVector(x[20], y[5]);
      v[4] = createVector(x[20], y[3]);
      v[5] = createVector(x[5], y[3]);
      v[6] = createVector(x[5], y[15]);
      v[7] = createVector(x[17], y[15]);
      v[8] = createVector(x[17], y[17]);
      v[9] = createVector(x[10], y[17]);
      v[10] = createVector(x[10], y[16]);
      v[11] = createVector(x[4], y[16]);
      
      // checkbox 1
      v1[0] = createVector(x[20], y[2]);
      v1[1] = createVector(x[23], y[2]);
      v1[2] = createVector(x[23], y[16]);
      v1[3] = createVector(x[17], y[16]);
      v1[4] = createVector(x[17], y[17]);
      v1[5] = createVector(x[10], y[17]);
      v1[6] = createVector(x[10], y[15]);
      v1[7] = createVector(x[22], y[15]);
      v1[8] = createVector(x[22], y[13]);
      v1[9] = createVector(x[20], y[13]);
      v1[10] = createVector(x[20], y[10]);
      v1[11] = createVector(x[22], y[10]);
      v1[12] = createVector(x[22], y[9]);
      v1[13] = createVector(x[20], y[9]);
      v1[14] = createVector(x[20], y[6]);
      v1[15] = createVector(x[22], y[6]);
      v1[16] = createVector(x[22], y[5]);
      v1[17] = createVector(x[20], y[5]);
      
      // island 2
      v2[0] = createVector(x[20], y[6]);
      v2[1] = createVector(x[23], y[6]);
      v2[2] = createVector(x[23], y[9]);
      v2[3] = createVector(x[20], y[9]);
      
      // island 3
      v3[0] = createVector(x[20], y[10]);
      v3[1] = createVector(x[23], y[10]);
      v3[2] = createVector(x[23], y[13]);
      v3[3] = createVector(x[20], y[13]);

      //input1.position(x[19]-12,y[15]-7);

      checkbox1.position((cnvx + x[18]+5),(cnvy + y[3]));
      checkbox2.position((cnvx + x[18]+5), (cnvy + y[7]));
      checkbox3.position((cnvx + x[18]+5), (cnvy + y[11]));
      //input2.position(x[6]-12,y[7]-5);
      button.position( (cnvx + x[11]), (cnvy + y[15] + 13));
    }
  }
}

function draw() {
  background(img);

  stateButton();
  completionDetection();

  // Checkbox 2
  if (checkbox2.checked()) {
    a = "By giving your identity, the Dark Forest will connect you with others.";
  
  }

  if (checkbox3.checked()) {
    a = "By giving your activities, the Dark Forest decides what you will see.";
  }

 push();
for (let i = 0; i < spamCount; i++) {
    xpos[i] = lerp(xpos[i], (xpos[i] += xspeed[i]), 0.6);
    ypos[i] = lerp(ypos[i], (ypos[i] += yspeed[i]), 0.6);

    if (xpos[i] < 0 || xpos[i] + 150 > 700) {
      xspeed[i] = xspeed[i] * -1;
   }

    if (ypos[i] < 0 || ypos[i] + 100 > 500) {
      yspeed[i] = yspeed[i] * -1;
    }

    fill("white");
    strokeWeight(5);
    stroke("#81FF00");
    image(popup, xpos[i], ypos[i]);

    push();
    textSize(11);
    textFont(necto);
    noStroke();
    fill("white");
    text(a, xpos[i] + 15, ypos[i] + 30, 145, 100);
    pop();
  }
  pop();


  px = mouseX;
  py = mouseY;

  

  // draws path
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      
      

  // Checkbox 1
  if (checkbox1.checked()) {
    a = "Once you enter the Dark Forest, your activities will  be known.";
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

      beginShape();
      for (let i = 0; i < v3.length; i++) {
        strokeWeight(4);
        stroke("white");
        vertex(v3[i].x, v3[i].y);
      }
      endShape(CLOSE);
  }
      if (collision === false && frameCount>20) {
        //window.location.href = "page1.html";
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
    button.style("border", "2px solid #000000");
    button.mousePressed(gotoLink); 
  } else {
    button.style("background-color", "#000000");
    button.style("cursor", "wait");
    button.style("color", "#FFFFFF");
  }
}

function gotoLink(){
  window.location.href = "page3a.html";
}

function completionDetection() {
  part1 = false;
  part2 = false;
  completed = false;

  if (checkbox1.checked() && checkbox2.checked()) {
    part1 = !part1;
  }

  if (checkbox3.checked()) {
    part2 = !part2;
  } 

  if (part1 === true && part2 === true) {
    completed = !completed;
  }
}