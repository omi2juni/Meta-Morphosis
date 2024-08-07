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

// text box variables
var spamCount = 10;
var xpos = [];
var ypos = [];
var xspeed = [];
var yspeed = [];

var a;
var b;
var c;

// array of vectors
var v = [];
var v2 = [];

// image variables
var img;

// interaction variables
var input;
var input2;
var button;
var checkbox1;
var checkbox2;

var nrs = [];

// completion detection
var part1;
var part2;
var completed;

function preload() {
  popup = loadImage('assets/window1.png');
  necto = loadFont('assets/fonts/NectoMono-Regular.otf');
  img = loadImage("assets/forests/forest5.png");
}

function setup() {

  var cnv = createCanvas(700, 500);
  var cnvx = (windowWidth - width) / 2;
  var cnvy = (windowHeight - height) / 2;

  cnv.position(cnvx, cnvy);

  // spam
  for (let i = 0; i < spamCount; i++) {
    xpos[i] = random(200, 550);
    ypos[i] = random(100, 400);
    xspeed[i] = random(-10, 10);
    yspeed[i] = random(-10, 10);
  }
  
  a = "First Name";
  b = "Last Name";
  c = "Identify yourself";

  // interaction
  input = createInput(a);
  input2 = createInput(b);

  checkbox1 = createCheckbox("");
  checkbox2 = createCheckbox("");

  button = createButton("submit");
  
  // grid
  rows = 700 / size;
  cols = 500 / size;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      x[i] = i * size;
      y[j] = j * size;

      v[0] = createVector(x[3], y[1]);
      v[1] = createVector(x[19], y[1]);
      v[2] = createVector(x[19], y[6]);
      v[3] = createVector(x[8], y[6]);
      v[4] = createVector(x[8], y[7]);
      v[5] = createVector(x[7], y[7]);
      v[6] = createVector(x[7], y[8]);
      v[7] = createVector(x[8], y[8]);
      v[8] = createVector(x[8], y[9]);
      v[9] = createVector(x[16], y[9]);
      v[10] = createVector(x[16], y[12]);
      v[11] = createVector(x[10], y[12]);
      v[12] = createVector(x[10], y[10]);
      v[13] = createVector(x[6], y[10]);
      v[14] = createVector(x[6], y[5]);
      v[15] = createVector(x[18], y[5]);
      v[16] = createVector(x[18], y[4]);
      v[17] = createVector(x[4], y[4]);
      v[18] = createVector(x[4], y[15]);
      v[19] = createVector(x[16], y[15]);
      v[20] = createVector(x[16], y[17]);
      v[21] = createVector(x[10], y[17]);
      v[22] = createVector(x[10], y[16]);
      v[23] = createVector(x[3], y[16]);

      v2[0] = createVector(x[3], y[1]);
      v2[1] = createVector(x[19], y[1]);
      v2[2] = createVector(x[19], y[6]);
      v2[3] = createVector(x[8], y[6]);
      v2[4] = createVector(x[8], y[7]);
      v2[5] = createVector(x[7], y[7]);
      v2[6] = createVector(x[7], y[8]);
      v2[7] = createVector(x[8], y[8]);
      v2[8] = createVector(x[8], y[9]);
      v2[9] = createVector(x[16], y[9]);
      v2[10] = createVector(x[16], y[12]);
      v2[11] = createVector(x[10], y[12]);
      v2[12] = createVector(x[10], y[10]);
      v2[13] = createVector(x[6], y[10]);
      v2[14] = createVector(x[6], y[5]);
      v2[15] = createVector(x[18], y[5]);
      v2[16] = createVector(x[18], y[4]);
      v2[17] = createVector(x[3], y[4]);
    

      input.position(cnvx + x[4], cnvy + y[2] - 10);
      input2.position(cnvx + x[12]-5, cnvy + y[2] - 10);
      checkbox1.position(cnvx + x[4], cnvy + y[5]+10);
      checkbox2.position(cnvx + x[4], cnvy + y[8]+10);
      button.position(cnvx + x[11]-10, cnvy + y[10], "absolute");
    }
  }
}

function draw() {
  px = mouseX;
  py = mouseY;

  storeData();
  stateButton();
  completionDetection();
  
  background(img);

  for (let i = 0; i < spamCount; i++) {
    xpos[i] = lerp(xpos[i], (xpos[i] += xspeed[i]), 0.6);
    ypos[i] = lerp(ypos[i], (ypos[i] += yspeed[i]), 0.6);

    if (xpos[i] < 0 || xpos[i] + 150 > 700) {
      xspeed[i] = xspeed[i] * -1;
    }
    if (ypos[i] < 0 || ypos[i] + 100 > 500) {
      yspeed[i] = yspeed[i] * -1;
    }

    for (let i = 0; i < 6; i++) {
      push();
        fill("white");
        strokeWeight(5);
        stroke("#81FF00");
        image(popup, xpos[i], ypos[i]);
      pop();

      if (checkbox1.checked() && input.value() != a) {
        c = input.value();
 
        textSize(15);
        textFont(necto);
        noStroke();
        fill("white");
        text(c, xpos[i] + 25, ypos[i] + 50, 100, 100);
      } else {
        textSize(15);
        textFont(necto);
        noStroke();
        fill("white");
        text(c, xpos[i] + 15, ypos[i] + 40, 145, 100);
      }
    }
    for (let i = 6; i < 11; i++) {
      push();
        fill("white");
        strokeWeight(5);
        stroke("#81FF00");
        image(popup, xpos[i], ypos[i]);
      pop();

      if (checkbox2.checked() && input2.value() != b) {
        c = input.value() + " " + input2.value();
        textSize(15);
        textFont(necto);
        noStroke();
        fill("white");
        text(c, xpos[i] + 25, ypos[i] + 50, 100, 100);
      } else {
        textSize(15);
        textFont(necto);
        noStroke();
        fill("white");
        text(c, xpos[i] + 15, ypos[i] + 40, 145, 100);
      }
    }
  }

  // draws path
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      polyPoint(v, px, py);
      beginShape();
      for (let i = 0; i < v.length; i++) {
        strokeWeight(4);
        stroke("white");
        vertex(v[i].x, v[i].y);
      }
      endShape(CLOSE);

      if (part1 == true){
        polyPoint(v2, px, py);
        beginShape();
          for (let i = 0; i < v2.length; i++) {
            strokeWeight(4);
            stroke("white");
            vertex(v2[i].x, v2[i].y);
          }
        endShape(CLOSE);
      }

      if (collision === false && frameCount>50) {
        fill("red");
        window.location.href = "about.html";
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
  window.location.href = "cookies.html";
}

function completionDetection() {
  part1 = false;
  part2 = false;
  completed = false;

  if (checkbox1.checked() && input.value() != a) {
    part1 = !part1;
  }
  if (checkbox2.checked() && input2.value() != b) {
    part2 = !part2;
  }
  if (part1 === true && part2 === true) {
    completed = !completed;
  }
}

function storeData(){
  storeItem("message4", input.value() + " " + input2.value());
}
