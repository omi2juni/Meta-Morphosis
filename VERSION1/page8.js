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
var c;

// text box variables
var spamCount = 10;
var xpos = [];
var ypos = [];
var xspeed = [];
var yspeed = [];

// array of vectors
var v = [];


var detection;

var hit;

var img;

var input;

var button;

// completion detection
var part1;
var part2;
var completed;

var island1;

function preload() {
  img = loadImage("assets/forests/forest1.png");
}

function setup() {
  a = "what is on your mind?";

  var cnv = createCanvas(700, 500);
  var cnvx = (windowWidth - width) / 2;
  var cnvy = (windowHeight - height) / 2;

  cnv.position(cnvx, cnvy);

  for (let i = 0; i < spamCount; i++) {
    xpos[i] = 200;
    ypos[i] = 200;
    xspeed[i] = random(-10, 10);
    yspeed[i] = random(-10, 10);
  }

  rows = 700 / size;
  cols = 500 / size;

  input = createInput(a);
  
  button = createButton("submit");

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      x[i] = i * size;
      y[j] = j * size;

      v[0] = createVector(x[7], y[2]);
      v[1] = createVector(x[19], y[2]);
      v[2] = createVector(x[19], y[7]);
      v[3] = createVector(x[19], y[10]);
      v[4] = createVector(x[8], y[10]);
      v[5] = createVector(x[8], y[12]);
      v[6] = createVector(x[19], y[12]);
      v[7] = createVector(x[19], y[17]);
      v[8] = createVector(x[7], y[17]);
      v[9] = createVector(x[7], y[15]);
      v[10] = createVector(x[14], y[15]);
      v[11] = createVector(x[14], y[16]);
      v[12] = createVector(x[18], y[16]);
      v[13] = createVector(x[18], y[13]);
      v[14] = createVector(x[7], y[13]);
      v[15] = createVector(x[7], y[9]);
      v[16] = createVector(x[18], y[9]);
      v[17] = createVector(x[18], y[7]);
      v[18] = createVector(x[7], y[7]);


      input.position(cnvx + x[10], cnvy + y[3]);

      button.position(cnvx + x[16], cnvy + (y[5]), "absolute");
    }
  }
}

function draw() {
  stateButton();
  completionDetection();

  background(img);

  px = mouseX;
  py = mouseY;
  //   for (let i = 0; i < spamCount; i++) {
  //     xpos[i] = lerp(xpos[i], (xpos[i] += xspeed[i]), 0.6);
  //     ypos[i] = lerp(ypos[i], (ypos[i] += yspeed[i]), 0.6);

  //     if (xpos[i] < 0 || xpos[i] + 150 > 700) {
  //       xspeed[i] = xspeed[i] * -1;
  //     }

  //     if (ypos[i] < 0 || ypos[i] + 100 > 500) {
  //       yspeed[i] = yspeed[i] * -1;
  //     }

  //     for (let i = 0; i < 6; i++) {
  //       push();
  //       fill("white");
  //       strokeWeight(5);
  //       stroke("#81FF00");
  //       rect(xpos[i], ypos[i], 150, 100);
  //       pop();

  //       if (checkbox1.checked() && input.value() != a) {
  //         textSize(15);
  //         textFont("Roboto Mono");
  //         noStroke();
  //         fill("black");
  //         text(input.value(), xpos[i] + 15, ypos[i] + 25, 100, 100);
  //       } else {
  //         textSize(15);
  //         textFont("Roboto Mono");
  //         noStroke();
  //         fill("black");
  //         text(a, xpos[i] + 15, ypos[i] + 25, 100, 100);
  //       }
  //     }

  //     for (let i = 6; i < 11; i++) {
  //     push();
  //       fill("white");
  //       strokeWeight(5);
  //       stroke("#81FF00");
  //       rect(xpos[i], ypos[i], 150, 100);
  //     pop();

  //       if (checkbox2.checked() && input2.value() != b) {
  //         textSize(15);
  //         textFont("Roboto Mono");
  //         noStroke();
  //         fill("black");
  //         text(input2.value(), xpos[i] + 15, ypos[i] + 25, 100, 100);
  //       } else {
  //         textSize(15);
  //         textFont("Roboto Mono");
  //         noStroke();
  //         fill("black");
  //         text(b, xpos[i] + 15, ypos[i] + 25, 100, 100);
  //       }
  //     }
  //   }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      // draws path
    
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
    } else {
      button.style("background-color", "#000000");
      button.style("cursor", "wait");
      button.style("color", "#FFFFFF");
       
    }
  }


 function completionDetection() {
//   part1 = false;
//   part2 = false;
   completed = false;

//   if (checkbox1.checked()) {
//     part1 = !part1;
//   } else if (checkbox2.checked()) {
//     part1 = !part1;
//   } else if (checkbox3.checked()) {
//     part1 = !part1;
//   }

//   if (input.value() != a) {
//     part2 = !part2;
//   } if (input2.value() != b) {
//     part2 = !part2;
//   } else if (input3.value() != c) {
//     part2 = !part2;
//   }

  if (input.value() != a) {
     completed = !completed;
   }
 }
