// grid variables
var rows;
var cols;
var grid = [];

var size = 25;

var x = [];
var y = [];

// cam variables
var a;
var b;
var cam;
var img;
var necto;

// interaction variables
var button;

var loadcam;

function preload(){
  necto = loadFont('assets/fonts/NectoMono-Regular.otf');
  cam = createCapture(VIDEO);
  cam.hide(); 
  cam.loadPixels();
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

  button = createButton("START"); 

  //grid system for positioning elements
  for (let i=0; i<rows; i++){
    for (let j=0; j<cols; j++){
      x[i] = i*size;
      y[j] = j*size;    
     button.position((cnvx + x[19]), (cnvy + y[11]), 'absolute'); 
    } 
  }

}

function draw() {
  background("black");
  
  // Pixelated filter webcam
  for(let xPos = 100; xPos < 400; xPos+=10) {
    for(let yPos = 100; yPos < 400; yPos+=10) {
      
      // .get returns [r, g, b, a] values of the pixel array at xLocation and yLocation
      let colorFromVideo = cam.get(xPos,yPos);
      
      // Get the brightness from the rgba array
      let b = brightness(colorFromVideo);
      
      // If it's more than 50% bright, make it white
      if(b > 50) {
        fill('white')
      } else {
         fill('black');
      }
      
      // Draw a 10x10 rectangle
      rect(xPos, yPos, 10, 10);
    }
   }
  
  // Text section 
   noStroke()
   textFont(necto);
   fill("white");

   push();
    textSize(30);
    text("Meta-\nMorphosis", x[18], y[5], 150);
   pop();

   push();
    textSize(14);
    text("Dark Forest theory of the Internet",x[18],y[8], 200);     
   pop();

   push();
    textSize(14);
    text("Omar Ayabarus, 2024",x[18],y[16], 200);     
   pop();


  button.mouseOver(hoverOver);

}

function hoverOver(){
  button.style("border-style", "solid");
  button.style("border-color", "#000000");
  button.style("background-color", "#FFFFFF");
  button.style("cursor", "pointer");
  button.style("color", "#000000");
    button.mousePressed(gotoLink); 
}

function gotoLink(){
  window.location.href = "about.html";
}

