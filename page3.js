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
var b;

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
var v3 = [];
var v4 = [];

// completion detection
var part1;
var part2;
var completed;

// images variables
var img;
var refpic;
var ctrlpic;

var input;

var button;

function preload() {
  necto = loadFont('assets/fonts/NectoMono-Regular.otf');
  popup = loadImage('assets/window1.png');
  img = loadImage("assets/forests/forest3.png");
 
  refpic = loadImage("assets/pfps/human.png");
  ctrlpic = loadImage("assets/pfps/human.png");

}

function setup() {
  createCanvas(700, 500);
  
  a = 'Authenticate yourself';
  b = "What makes you human?";

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

  rows = width / size;
  cols = height / size;

  slider = createSlider(0, 200);
  slider.addClass("slider");

  input = createInput(b);

  button = createButton("submit");

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      x[i] = i * size;
      y[j] = j * size;

      v[0] = createVector(x[10], y[9]);
      v[1] = createVector(x[16], y[9]);
      v[2] = createVector(x[16], y[1]);
      v[3] = createVector(x[26], y[1]);
      v[4] = createVector(x[26], y[12]);
      v[5] = createVector(x[11], y[12]);
      v[6] = createVector(x[11], y[15]);
      v[7] = createVector(x[19], y[15]);
      v[8] = createVector(x[19], y[17]);
      v[9] = createVector(x[10], y[17]);

      // input island
      v1[0] = createVector(x[1], y[1]);
      v1[1] = createVector(x[9], y[1]);
      v1[2] = createVector(x[9], y[10]);
      v1[3] = createVector(x[1], y[10]);
  
      input.position(cnvx + x[11],cnvy+y[15]+7);

      slider.position(cnvx+x[17], cnvy+y[10]);

      button.position(cnvx+x[11], cnvy+y[10]);
    }
  }
}

function draw() {
  storeData();
  background(img);

  stateButton();
  completionDetection();

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
     
    if (part1 === true) {
      a = input.value();

      textSize(15);
      textFont(necto);
      noStroke();
      fill("white");
      text(a, xpos[i] + 15, ypos[i] + 45, 130, 100);
    } else {
     push();
     textSize(15);
     textFont(necto);
     noStroke();
     fill("white");
     text(a, xpos[i] + 15, ypos[i] + 50, 140, 100);
     pop();
    }
     
   }

  px = mouseX;
  py = mouseY;

  polyPoint(v, px, py);

  // draws path
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {

      beginShape();
      for (let i = 0; i < v.length; i++) {
        strokeWeight(4);
        stroke("white");
        vertex(v[i].x, v[i].y);
      }
      endShape(CLOSE);

      beginShape();
      for (let i = 0; i < v1.length; i++) {
        strokeWeight(4);
        stroke("white");
        vertex(v1[i].x, v1[i].y);
      }
      endShape(CLOSE);
      }
      
    push();
     textSize(15);
     textFont(necto);
     noStroke();
     fill("black");
     text("Match the size", x[2], (y[9]));
     pop();
      
      push();
      image(refpic, x[2], (y[2]-3), 150, 150);
      pop();

      push();
      image(ctrlpic, x[17], (y[2]-3), slider.value(),slider.value() );
      pop();

      if (collision === false && frameCount>20) {
        //window.location.href = "page1.html";
        fill("red");
      } else {
        fill("#81FF00");
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
  window.location.href = "page4.html";
}

function completionDetection() {
  part1 = false;
  part2 = false;
  completed = false;

  if (slider.value() > 145 ){
    part1 = !part1;
  }

  if (input.value() != b ){
    part2 = !part2;
  }

  if (part1 === true && part2 === true) {
    completed = !completed;
  }
}

function storeData(){
  storeItem("message3", input.value());
}