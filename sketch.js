// grid variables
var rows;
var cols;
var grid = [];

var size = 25;

var x = [];
var y = [];

var a;
var b;
var cam;
var img;
var necto;

// interaction variables
var input;
var input2;
var button;

var loadcam;

function preload(){
  necto = loadFont('assets/fonts/NectoMono-Regular.otf');
   cam = createCapture(VIDEO);
  cam.hide(); 
  cam.loadPixels();
  //img = loadImage('assets/forest1.png');
}

function setup() {

  pixelDensity(1);
  noStroke();

var cnv = createCanvas(700, 500);
var cnvx = (windowWidth - width)/2;
var cnvy = (windowHeight - height)/2;

cnv.position(cnvx, cnvy);
  
  rows = 700/size;
  cols = 500/size;  

  button = createButton("ENTER"); 
  
  for (let i=0; i<rows; i++){
    for (let j=0; j<cols; j++){
      
      x[i] = i*size;
      y[j] = j*size;
      
     button.position((cnvx + x[19]+15), (cnvy + y[11]), 'absolute'); 
    } 
  }
  
}

function draw() {
  background("black");
  
  for (let i=0; i<rows; i++){
    for (let j=0; j<cols; j++){
  
  push();
   stroke("white");
   noFill();
   rect(x[18], y[4],200, 150);
  pop();     
   
  push();
   noStroke()
   textFont(necto);
   fill("white");
   textSize(25);
   text("ENTER THE DARK FOREST", x[19], y[6], 150);
  pop();

  push();
   noStroke()
   textFont(necto);
   textSize(14);
   fill("white");
   text("By pressing enter, you are binded to adhering to the rules of the dark forest.",x[18],y[13]+10, 200);     
  pop();

    }    
  }     

  
  for(let xPos = 100; xPos < 400; xPos+=10) {
    for(let yPos = 100; yPos < 400; yPos+=10) {
      
      // .get returns [r, g, b, a] values of the pixel array at xLocation and yLocation
      let colorFromVideo = cam.get(xPos,yPos);
      
      // Get the brightness from the rgba array
      let b = brightness(colorFromVideo);
      
      // If it's more than 50% bright, make it white
      if(b > 50) {
        fill('white')
      }
      else {
         fill('black');
      }
      
      // Draw a 10x10 rectangle
      rect(xPos, yPos, 10, 10);
    }
   }

  button.mouseOver(hoverOver);
  
}

function hoverOver(){
    button.style("background-color", "#FFFFFF");
    button.style("cursor", "pointer");
    button.style("color", "#000000");
    button.mousePressed(gotoLink); 
}

function gotoLink(){
  window.location.href = "page1.html";
}

