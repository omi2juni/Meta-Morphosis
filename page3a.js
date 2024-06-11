// grid variables
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

// completion detection
var part1;
var part2;
var completed;

// images variables
var popup;

// interaction variables
var button;

function preload() {
  necto = loadFont('assets/fonts/NectoMono-Regular.otf');
  popup = loadImage('assets/window1.png');
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

  button = createButton("START");

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      x[i] = i * size;
      y[j] = j * size;
      button.position(cnvx+x[12], cnvy+y[10]);
    }
  }
}

function draw() {
  background("black");

  stateButton();
  completionDetection();

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

  push();
  stroke("white");
  strokeWeight(2);
  fill("black");
  rect(160, 150, 400, 75); 
  pop();

  push();
  textSize(25);
  textFont(necto);
  noStroke();
  fill("white");
  text("PROVE THAT YOU ARE HUMAN", x[7], (y[8]-5));
  pop();
  
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
  window.location.href = "humantest.html";
}

function completionDetection() {
  part1 = false;
  part2 = false;
  completed = true;
}
