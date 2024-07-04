// grid variables
var rows;
var cols;
var grid = [];
var x = [];
var y = [];

// text box variables
var spamCount = 6;
var xpos = [];
var ypos = [];
var xspeed = [];
var yspeed = [];

// History text box variables
var spamCount = 10;
var hxpos = [];
var hypos = [];
var hxspeed = [];
var hyspeed = [];

var size = 25;

// array of vectors
var v = [];

// image variable
var img;

var input;
var button;

// completion detection
var part1;
var part2;
var completed;

var msgHistory = [];
var allMessage = [];

var inputMessage = [];
var historyLength;

function preload() {
  img = loadImage("assets/forests/forest1.png");
  necto = loadFont('assets/fonts/NectoMono-Regular.otf');
  popup = loadImage('assets/window1.png');

}

function setup() {

  completed = true;
  storeItem("buttonPressed", 6);

  var cnv = createCanvas(700, 500);
  var cnvx = (windowWidth - width) / 2;
  var cnvy = (windowHeight - height) / 2;

  cnv.position(cnvx, cnvy);

  historyLength = getItem("amountPrevMsg");
  
  for (let i=0; i< historyLength; i++){
    msgHistory.push(getItem("userMessages"));
  }
  
  for (let i = 0; i < spamCount; i++) {
    xpos[i] = random(200, 550);
    ypos[i] = random(100, 400);
    xspeed[i] = random(-10, 10);
    yspeed[i] = random(-10, 10);

    hxpos[i] = random(200, 550);
    hypos[i] = random(100, 400);
    hxspeed[i] = random(-10, 10);
    hyspeed[i] = random(-10, 10);
  }
  
  input = createInput("What's on your mind?");
  button = createButton("submit");

  rows = 700 / size;
  cols = 500 / size;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      x[i] = i * size;
      y[j] = j * size;

      input.position(cnvx + x[3], cnvy + y[15]);
      button.position(cnvx + x[5], cnvy + (y[17]), "absolute");
    }
  }
}

function draw() {
  storeMessage();
  stateButton();

  background(img);

  //Previous message spam
  for (let i = 0; i < msgHistory.length; i++) {
    hxpos[i] = lerp(hxpos[i], (hxpos[i] += hxspeed[i]), 0.6);
    hypos[i] = lerp(hypos[i], (hypos[i] += hyspeed[i]), 0.6);

    if (hxpos[i] < 0 || hxpos[i] + 150 > 700) {
      hxspeed[i] = hxspeed[i] * -1;
    }
    if (hypos[i] < 0 || hypos[i] + 100 > 500) {
      hyspeed[i] = hyspeed[i] * -1;
    }

    fill("white");
    image(popup, hxpos[i], hypos[i]);
    
    textSize(15);
    textFont(necto);
    noStroke();
    fill("white");
    text(msgHistory[i], hxpos[i] + 15, hypos[i] + 45, 130, 100);
  }

  // current message spam
  push();
  for (let i = 0; i < allMessage.length; i++) {
   
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
    
    textSize(15);
    textFont(necto);
    noStroke();
    fill("white");
    text(allMessage[i], xpos[i] + 15, ypos[i] + 45, 130, 100);
  }
  pop();

  push();
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      x[i] = i * size;
      y[j] = j * size;
      
      fill("#81FF00");
      stroke("black");
      rect(x[2], y[15]-15, 230, 110);
    }
  }
  pop();

  button.mousePressed(uploadMessage);
  

  if (frameCount<850){
  push();
    stroke("white");
    fill("black");
    rect(x[2], y[1], 200, 320);
  pop();

  push();
    noStroke();
    fill("white");
    textSize(12);
    text("You have succesfuly passed the screening process! \n\n You now have access to broadcast your existence in the Dark Forest. \n\n The message you are seeing right now is that of the previous visitor\n\n So, what's on your mind?\n\n (Please return home once you are finished)", x[3]-15, y[2], 175);
  pop();
    
  }
  

}

function stateButton(){
  if (completed === true){
      button.style("background-color", "#FFFFFF");
      button.style("cursor", "pointer");
      button.style("border", "2px solid #000000");
      button.style("color", "#000000");
    } else {
      button.style("background-color", "#000000");
      button.style("cursor", "wait");
      button.style("color", "#FFFFFF");
  }
}

function uploadMessage(){
    allMessage.push(input.value()); 
    storeItem("amountPrevMsg", allMessage.length + msgHistory.length);
}

function storeMessage(){
  storeItem("userMessages", allMessage[0]);
  
}
