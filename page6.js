// mouse position detection variables
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
var v3 = [];
var v4 = [];
var v5 = [];
var v6 = [];
var v7 = [];
var v8 = [];
var v9 = [];
var v10 = [];
var v11 = [];

var img;

var input;
var button;
var checkbox1;
var checkbox2;
var checkbox3;
var checkbox4;

// completion detection
var part1;
var part2;
var completed;

var island1;

var pressed;
var numPressed;

function preload() {
  necto = loadFont('assets/fonts/NectoMono-Regular.otf');
  img = loadImage("assets/forests/forest6.png");
  popup = loadImage('assets/window1.png');

}

function setup() {

  storeItem("buttonPressed", 4);


  a = "What do you want to see in the Dark Forest?";
  b = "What do you want to see?";

  var cnv = createCanvas(700, 500);
  var cnvx = (windowWidth - width) / 2;
  var cnvy = (windowHeight - height) / 2;

  cnv.position(cnvx, cnvy);

  for (let i = 0; i < spamCount; i++) {
    xpos[i] = random(200, 550);
    ypos[i] = random(100, 400);
    xspeed[i] = random(-10, 10);
    yspeed[i] = random(-10, 10);
  }

  rows = 700 / size;
  cols = 500 / size;

  input = createInput(b);  

  checkbox1 = createCheckbox("", false);
  checkbox2 = createCheckbox("", false);
  checkbox3 = createCheckbox("", false);
  checkbox4 = createCheckbox("", false);

  button = createButton("submit");

  input.changed(storeData);


  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      x[i] = i * size;
      y[j] = j * size;

      v[0] = createVector(x[7], y[2]);
      v[1] = createVector(x[11], y[2]);
      v[2] = createVector(x[11], y[6]);
      v[3] = createVector(x[8], y[6]);
      v[4] = createVector(x[8], y[9]);
      v[5] = createVector(x[18], y[9]);
      v[6] = createVector(x[18], y[15]);
      v[7] = createVector(x[24], y[15]);
      v[8] = createVector(x[24], y[17]);
      v[9] = createVector(x[17], y[17]);
      v[10] = createVector(x[17], y[12]);
      v[11] = createVector(x[10], y[12]);
      v[12] = createVector(x[10], y[10]);
      v[13] = createVector(x[7], y[10]);

      // island 0
      v5[0] = createVector(x[10], y[9]);
      v5[1] = createVector(x[18], y[9]);
      v5[2] = createVector(x[18], y[12]);
      v5[3] = createVector(x[10], y[12]);

      // island 1
      v9[0] = createVector(x[7], y[2]);
      v9[1] = createVector(x[11], y[2]);
      v9[2] = createVector(x[11], y[6]);
      v9[3] = createVector(x[7], y[6]);

      // island 2
      v6[0] = createVector(x[13], y[2]);
      v6[1] = createVector(x[17], y[2]);
      v6[2] = createVector(x[17], y[6]);
      v6[3] = createVector(x[13], y[6]);

      // checkbox 1
      v1[0] = createVector(x[7], y[2]);
      v1[1] = createVector(x[17], y[2]);
      v1[2] = createVector(x[17], y[6]);
      v1[3] = createVector(x[13], y[6]);
      v1[4] = createVector(x[13], y[3]);
      v1[5] = createVector(x[11], y[3]);
      v1[6] = createVector(x[11], y[6]);
      v1[7] = createVector(x[7], y[6]);

      // checkbox 2
      v7[0] = createVector(x[13], y[2]);
      v7[1] = createVector(x[17], y[2]);
      v7[2] = createVector(x[17], y[5]);
      v7[3] = createVector(x[19], y[5]);
      v7[4] = createVector(x[19], y[2]);
      v7[5] = createVector(x[23], y[2]);
      v7[6] = createVector(x[23], y[6]);
      v7[7] = createVector(x[13], y[6]);

      // checkbox 3
      v8[0] = createVector(x[19], y[2]);
      v8[1] = createVector(x[23], y[2]);
      v8[2] = createVector(x[23], y[12]);
      v8[3] = createVector(x[19], y[12]);
      v8[4] = createVector(x[19], y[8]);
      v8[5] = createVector(x[22], y[8]);
      v8[6] = createVector(x[22], y[6]);
      v8[7] = createVector(x[19], y[6]);

      // checkbox 4
      v10[0] = createVector(x[10], y[9]);
      v10[1] = createVector(x[18], y[9]);
      v10[2] = createVector(x[18], y[11]);
      v10[3] = createVector(x[19], y[11]);
      v10[4] = createVector(x[19], y[8]);
      v10[5] = createVector(x[23], y[8]);
      v10[6] = createVector(x[23], y[12]);
      v10[7] = createVector(x[11], y[12]);
      v10[8] = createVector(x[11], y[15]);
      v10[9] = createVector(x[24], y[15]);
      v10[10] = createVector(x[24], y[17]);
      v10[11] = createVector(x[18], y[17]);
      v10[12] = createVector(x[18], y[16]);
      v10[13] = createVector(x[10], y[16]);
      v10[14] = createVector(x[10], y[12]);

      // last checkbox
      v11[0] = createVector(x[12], y[12]);
      v11[1] = createVector(x[13], y[12]);
      v11[2] = createVector(x[13], y[15]);
      v11[3] = createVector(x[24], y[15]);
      v11[4] = createVector(x[24], y[17]);
      v11[5] = createVector(x[18], y[17]);
      v11[6] = createVector(x[18], y[16]);
      v11[7] = createVector(x[12], y[16]);

      // island 3
      v2[0] = createVector(x[19], y[2]);
      v2[1] = createVector(x[23], y[2]);
      v2[2] = createVector(x[23], y[6]);
      v2[3] = createVector(x[19], y[6]);

      // island 4
      v3[0] = createVector(x[19], y[8]);
      v3[1] = createVector(x[23], y[8]);
      v3[2] = createVector(x[23], y[12]);
      v3[3] = createVector(x[19], y[12]);

      // input island
      v4[0] = createVector(x[18], y[15]);
      v4[1] = createVector(x[24], y[15]);
      v4[2] = createVector(x[24], y[17]);
      v4[3] = createVector(x[18], y[17]);

      input.position(cnvx + x[11], cnvy + y[10] - 10);

      checkbox1.position(cnvx + x[6], cnvy + y[3]);
      checkbox2.position(cnvx + x[12], cnvy + y[3]);
      checkbox3.position(cnvx + x[18], cnvy + y[3]);
      checkbox4.position(cnvx + x[18], cnvy + y[9]);

      button.position(cnvx + x[19]-10, cnvy + y[15] + 10, "absolute");
    }
  }
}

function draw() {
  stateButton();
  completionDetection();

  background(img);

  px = mouseX;
  py = mouseY;
  
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
      textSize(10);
      textFont(necto);
      noStroke();
      fill("white");
      text(a, xpos[i] + 10, ypos[i] + 35, 140, 100);
    pop();
  }

  // draws path
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      // checkbox 1 checked
      if (checkbox1.checked()) {
        a = "The Dark Forest relies on your activities to function";
        polyPoint(v1, px, py);
        beginShape();
        for (let i = 0; i < v1.length; i++) {
          strokeWeight(4);
          stroke("white");
          vertex(v1[i].x, v1[i].y);
        }
        endShape(CLOSE);

        beginShape();
        for (let i = 0; i < v5.length; i++) {
          strokeWeight(4);
          stroke("white");
          vertex(v5[i].x, v5[i].y);
        }
        endShape(CLOSE);

        beginShape();
        for (let i = 0; i < v4.length; i++) {
          strokeWeight(4);
          stroke("white");
          vertex(v4[i].x, v4[i].y);
        }
        endShape(CLOSE);
      }

      // checkbox 2 checked
      if (checkbox2.checked()) {
        a = "By revealing your activities, the Dark Forest provides you with a personalised experience.";
        polyPoint(v7, px, py);
        beginShape();
        for (let i = 0; i < v7.length; i++) {
          strokeWeight(4);
          stroke("white");
          vertex(v7[i].x, v7[i].y);
        }
        endShape(CLOSE);

        beginShape();
        for (let i = 0; i < v5.length; i++) {
          strokeWeight(4);
          stroke("white");
          vertex(v5[i].x, v5[i].y);
        }
        endShape(CLOSE);

        beginShape();
        for (let i = 0; i < v9.length; i++) {
          strokeWeight(4);
          stroke("white");
          vertex(v9[i].x, v9[i].y);
        }
        endShape(CLOSE);

        beginShape();
        for (let i = 0; i < v4.length; i++) {
          strokeWeight(4);
          stroke("white");
          vertex(v4[i].x, v4[i].y);
        }
        endShape(CLOSE);
      }

      if (checkbox3.checked()) {
        a = "By doing so, your existence will be visible to others in the Dark Forest.";
        polyPoint(v8, px, py);
        beginShape();
        for (let i = 0; i < v8.length; i++) {
          strokeWeight(4);
          stroke("white");
          vertex(v8[i].x, v8[i].y);
        }
        endShape(CLOSE);

        beginShape();
        for (let i = 0; i < v4.length; i++) {
          strokeWeight(4);
          stroke("white");
          vertex(v4[i].x, v4[i].y);
        }
        endShape(CLOSE);
      }
      if (checkbox4.checked()) {
        a = b;
        polyPoint(v10, px, py);
        beginShape();
        for (let i = 0; i < v10.length; i++) {
          strokeWeight(4);
          stroke("white");
          vertex(v10[i].x, v10[i].y);
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
        for (let i = 0; i < v6.length; i++) {
          strokeWeight(4);
          stroke("white");
          vertex(v6[i].x, v6[i].y);
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

      if (collision === false && frameCount>35) {
        fill("red");
        //window.location.href = "index.html";
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
    window.location.href = "cookies2.html";
  }

function completionDetection() {
  part1 = false;
  part2 = false;
  completed = false;

  if (
    checkbox1.checked() &&
    checkbox2.checked() &&
    checkbox3.checked() &&
    checkbox4.checked()
  ) {
    part1 = !part1;
  }

  if (input.value() != b) {
    part2 = !part2;
  }

  if (part1 === true && part2 === true) {
    completed = !completed;
  }
  return completed;
}

function storeData(){
  storeItem("message5", input.value());
}