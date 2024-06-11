// plant variables 
var posX = [];
var posY = [];

var prows;
var size = 25;

var startX = [];
var startY;

var particle = [];
var pressed;

var numPressed;

var txt = [];
var inputMessage = [];


// array of vectors
var v = [];

// image variables
var img;

// call refresh variable
var refresh;

function preload() {
  img = loadImage("assets/forests/forest1.png");
}

function setup() {
  
  // initial state
  refresh = false;
  numPressed = 0;

  prows = 700 / size;
  startY = 500;  

  var cnv = createCanvas(900, 500);
  var cnvx = (windowWidth - width) / 2;
  var cnvy = (windowHeight - height) / 2;

  cnv.position(cnvx, cnvy);

  // recalls localstorage for user input
  for (let i=0; i < 7; i++){
    inputMessage[0] = getItem("message1");
    inputMessage[1] = getItem("message2");
    inputMessage[2] = getItem("message3");
    inputMessage[3] = getItem("message4");
    inputMessage[4] = getItem("message5");
    inputMessage[5] = getItem("message6");
  }  

  for (let i = 0; i < prows; i++) {
    startX[i] = (i*prows)*random(2, 4) + 100;

    for (let i=0; i<inputMessage.length; i++){
      txt[i] = inputMessage[i];
      particle[i] = new Stalk(txt[i], startX[i], startY); 
    }

  }
}

function draw() {
  
  // receive refresh signal
  refresh = getItem("refresh");
  if (refresh=== true){
    refreshPage();
  }
  
  // receive and update numPressed amount
  pressed = getItem("state");
  updatePressed();
  
  // loads localstorage user input
  for (let i=0; i < 7; i++){
    inputMessage[0] = getItem("message1");
    inputMessage[1] = getItem("message2");
    inputMessage[2] = getItem("message3");
    inputMessage[3] = getItem("message4");
    inputMessage[4] = getItem("message5");
    inputMessage[5] = getItem("message6");
  }  
  
  // background image
  background(img);
  
  if (pressed){
    for (let i = 0; i < numPressed; i++){
      particle[i].update();
      particle[i].display();      
    }
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

function refreshPage(){
  window.location.reload();
}

function updatePressed(){
  numPressed = getItem("buttonPressed");
}
