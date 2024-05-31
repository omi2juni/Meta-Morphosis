let px = 0; // xpos of the circle
let py = 0; // ypos of the circle
let r = 1; // circle's radius

var rows;
var cols;

var grid = [];

var x = [];
var y = [];

var size = 25;

var a;

// text box variables
var spamCount = 7;
var xpos = [];
var ypos = [];
var xspeed = [];
var yspeed = [];

// array of vectors
var v = [];
var v1 = [];
var v2 = [];
var v = [];

// completion detection
var part1;
var part2;
var completed;

// images variables
var img;
var pfp1;
var pfp2;
var pfp3;
var pfp4;

var input;
var input2;
var button;

function preload() {
  img = loadImage("assets/forests/forest3.png");
  pfp1 = loadImage("assets/pfps/anime.png");
  pfp2 = loadImage("assets/pfps/dog.png");
  pfp3 = loadImage("assets/pfps/human.png");
  pfp4 = loadImage("assets/pfps/wojak.png");
}

function setup() {
  createCanvas(700, 500);
  
  a = 'who are you?';

  var cnv = createCanvas(700, 500);
  var cnvx = (windowWidth - width)/2;
  var cnvy = (windowHeight - height)/2;
  
  cnv.position(cnvx, cnvy);

  for (let i = 0; i < spamCount; i++) {
    xpos[i] = 200;
    ypos[i] = 200;
    xspeed[i] = random(-10, 10);
    yspeed[i] = random(-10, 10);
  }

  rows = width / size;
  cols = height / size;

  checkbox1 = createCheckbox("");
  checkbox2 = createCheckbox("");
  checkbox3 = createCheckbox("");
  checkbox4 = createCheckbox("");

  input = createInput(a);

  button = createButton("submit");

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      x[i] = i * size;
      y[j] = j * size;

      v[0] = createVector(x[2], y[3]);
      v[1] = createVector(x[9], y[3]);
      v[2] = createVector(x[9], y[6]);
      v[3] = createVector(x[3], y[6]);
      v[4] = createVector(x[3], y[11]);
      v[5] = createVector(x[10], y[11]);
      v[6] = createVector(x[10], y[9]);
      v[7] = createVector(x[16], y[9]);
      v[8] = createVector(x[16], y[11]);
      v[9] = createVector(x[24], y[11]);
      v[10] = createVector(x[24], y[8]);
      v[11] = createVector(x[16], y[8]);
      v[12] = createVector(x[16], y[1]);
      v[13] = createVector(x[25], y[1]);
      v[14] = createVector(x[25], y[12]);
      v[15] = createVector(x[11], y[12]);
      v[16] = createVector(x[11], y[15]);
      v[17] = createVector(x[16], y[15]);
      v[18] = createVector(x[16], y[17]);
      v[19] = createVector(x[10], y[17]);
      v[20] = createVector(x[10], y[12]);
      v[21] = createVector(x[2], y[12]);
  
      
      
      input.position(cnvx + x[3]-12,cnvy+y[4]-7);

      checkbox1.position(cnvx + x[14]-10, cnvy+y[2]-10);
      checkbox2.position(cnvx+x[18], cnvy+y[2]-10);
      checkbox3.position(cnvx+x[14]-10, cnvy+y[5]-10);
      checkbox4.position(cnvx+x[18], cnvy+y[5]-10);

      button.position(cnvx+x[12], cnvy+y[10]);
    }
  }
}

function draw() {
  background(img);

  stateButton();
  completionDetection();

//   // Checkbox 1
//   if (checkbox1.checked()) {
//   }

//   // Checkbox 2
//   if (checkbox2.checked()) {
//   }

//   if (checkbox3.checked()) {
//     a = "say sike";
//     button.style("background-color", "#FFFFFF");
//     button.style("cursor", "pointer");
//     button.style("color", "#000000");
//   } else {
//     button.style("background-color", "#000000");
//     button.style("cursor", "wait");
//   }

//   push();
//   for (let i = 0; i < spamCount; i++) {
//     xpos[i] = lerp(xpos[i], (xpos[i] += xspeed[i]), 0.6);
//     ypos[i] = lerp(ypos[i], (ypos[i] += yspeed[i]), 0.6);

//     if (xpos[i] < 0 || xpos[i] + 150 > 700) {
//       xspeed[i] = xspeed[i] * -1;
//     }

//     if (ypos[i] < 0 || ypos[i] + 100 > 500) {
//       yspeed[i] = yspeed[i] * -1;
//     }

//     fill("white");
//     strokeWeight(5);
//     stroke("#81FF00");
//     rect(xpos[i], ypos[i], 150, 100);

//     push();
//     textSize(15);
//     textFont("Roboto Mono");
//     noStroke();
//     fill("black");
//     text(a, xpos[i] + 15, ypos[i] + 25, 150, 100);
//     pop();
//   }

  px = mouseX;
  py = mouseY;

  polyPoint(v, px, py);

  // draws path
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      // push();
      // stroke("white");
      // fill(0);
      // rect(x[i], y[j], size, size);
      // pop()

      beginShape();
      for (let i = 0; i < v.length; i++) {
        strokeWeight(4);
        stroke("white");
        vertex(v[i].x, v[i].y);
      }
      endShape(CLOSE);
      
      push();
      image(pfp3, x[17], (y[2]-3));
      pop();
      
      push();
      image(pfp2, (x[22]-13), (y[2]-3));
      pop();
      
      
      push();
      image(pfp1, x[17], (y[5]-3));
      pop();
      
      push();
      image(pfp4, (x[22]-13), (y[5]-3));
      pop();

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
  window.location.href = "page4.html";
}

function completionDetection() {
  part1 = false;
  part2 = false;
  completed = false;

  if (checkbox1.checked()) {
    part1 = !part1;
  } else if (checkbox2.checked()) {
    part1 = !part1;
  } else if (checkbox3.checked()) {
    part1 = !part1;
  } else if (checkbox4.checked()) {
    part1 = !part1;
  } 

  if (input.value() != a ){
    part2 = !part2;
  }

  if (part1 === true && part2 === true) {
    completed = !completed;
  }
}