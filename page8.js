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

// plant variables 
var posX = [];
var posY = [];

var prows;

var grid;

var pcols;

var tree;

var startX = [];
var startY;

var seedX = [];
var seedY = [];

var particle = [];
var pressed;

var numPressed;

var txt = [];

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

// var island1;

var changed;

var inputChange;


var inputMessage = [];

function preload() {
  img = loadImage("assets/forests/forest1.png");
  tree = loadImage("assets/tree.png");
}

function setup() {

  changed = false;
  inputChange = 0;

  completed = true;

  prows = 700 / size;
  pcols = 500 / size;

  startY = 500;  

  
  numPressed = getItem("buttonPressed");

  var cnv = createCanvas(900, 500);
  var cnvx = (windowWidth - width) / 2;
  var cnvy = (windowHeight - height) / 2;

  cnv.position(cnvx, cnvy);

  for (let i = 0; i < spamCount; i++) {
    xpos[i] = random(200, 500);
    ypos[i] = random(200, 500);
    xspeed[i] = random(-10, 10);
    yspeed[i] = random(-10, 10);
  }

  rows = 700 / size;
  cols = 500 / size;
  
  // input = createInput("What's on your mind?");
  button = createButton("submit");

  for (let i=0; i<6; i++){
    inputMessage[0] = getItem("message1");
    inputMessage[1] = getItem("message2");
    inputMessage[2] = getItem("message3");
    inputMessage[3] = getItem("message4");
    inputMessage[4] = getItem("message5");
    inputMessage[5] = getItem("message6");

    xpos[i] = random(200, 500);
    ypos[i] = random(200, 500);
  }
    
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      x[i] = i * size;
      y[j] = j * size;
    
      // v[0] = createVector(x[1], y[14]);
      // v[1] = createVector(x[11], y[14]);
      // v[2] = createVector(x[11], y[19]);
      // v[3] = createVector(x[1], y[19]);
    
      // input.position(cnvx + x[3], cnvy + y[15]);
      button.position(cnvx + x[5], cnvy + (y[17]), "absolute");
    }
  }

  for (let i = 0; i < prows; i++) {
    startX[i] = (i*prows)*random(2, 4) + 100;
    for (let i = 0; i < inputMessage.length; i++) {
      txt[i] = inputMessage[i];
      particle[i] = new Stalk(txt[i], startX[i], startY);
    }
  }
}

function draw() {

   buttonPressed()
   stateButton();
  // completionDetection();
  
  background(img);

  if (pressed) {
    for (let i = 0; i < numPressed; i++) {
      particle[i].update();
      particle[i].display();      
    }
  }

  if (changed) {
    for (let i = 0; i < inputChange; i++) {
      console.log(inputChange)    
   }
  }

  // for (let i = 0; i < rows; i++) {
  //   for (let j = 0; j < cols; j++) {
        
  //       beginShape();
  //       for (let i = 0; i < v.length; i++) {
  //         strokeWeight(4);
  //         stroke("white");
  //         vertex(v[i].x, v[i].y);
  //       } 
  //       endShape(CLOSE);
     
    // if (collision === false && frameCount>20) {
    //   fill("red");
    //   } else {
    //   fill("#81FF00");
    //   }
    console.log(numPressed);
    }

//     }
// }

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

function buttonPressed(){
   button.mousePressed(pressCounter);
}

function pressCounter(){
     pressed = true;
     numPressed++;
}

function inputchangeDetection(){
  changed = true;
  inputChange++;
}

// function inputisChanged(){
//   storeItem.changed(inputchangeDetection);
// }

// function completionDetection() {
//   completed = false;
//   if (input.value() != a) {
//     completed = !completed;
//   }
// }