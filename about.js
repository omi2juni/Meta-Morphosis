// Grid variables
var rows;
var cols;
var grid = [];

var x = [];
var y = [];

var size = 25;

var a;
var b;

// interaction variables
var button;

// scrolling text variables
var ytext = 450;
var scrolltext1 = "The Dark Forest is a theory coined by the science-fiction writer Liu-Cixin, in his trilogy Remembrance of Earth’s Past, as an attempt to investigate the complex dynamics of intergalactic communication. Liu theorised on the consequences that communication entails. He explains that revealing one’s existence to others in the universe warrants an invite for conflict from other intelligent beings.\n\n This theory could offer an interesting perspective on the nature of personalised communication on web 2.0. In the digital dark forest, our need to communicate is exploited by data predators and corporate media.\n\n Meta-Morphosis is a project that explores this theory and reflects on our current relationship with the digital media, by exposing the processes of screening and revealing our information to enter everyday cyberspace.";


function preload() {
  necto = loadFont('assets/fonts/NectoMono-Regular.otf');
}

function setup() {
  // sends signal to reset Dark Forest page

  storeItem("refresh", true);
  storeItem("buttonPressed", 0);
  storeItem("state", false);


  createCanvas(700, 500);
  
  a = 'Authenticate yourself';
  b = "What makes you human?";

  var cnv = createCanvas(700, 500);
  var cnvx = (windowWidth - width)/2;
  var cnvy = (windowHeight - height)/2;
  
  cnv.position(cnvx, cnvy);

  rows = width / size;
  cols = height / size;

  button = createButton("ENTER");
  

  //grid system for positioning elements
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      x[i] = i * size;
      y[j] = j * size;
      button.position((cnvx + x[18]+15), (cnvy + y[11]), 'absolute'); 
    }
  }
  
  textFont(necto);

}

function draw() {

  //sends signal to stop refresh to Dark Forest page
  if (frameCount>5){
    storeItem("refresh", false);
  }

  background("black");

  push();
    stroke("white");
    noFill();
    rect(x[3], y[3], 320, 350);
  pop();     

  push();
    noStroke();
    fill("white");
    textSize(12);
    text(scrolltext1, x[4]-15, ytext, 300);
    
    // scrolling text animation
    ytext = ytext - 0.30;

    if (ytext < -300){
      ytext = 450;
    }
  pop();
  

  noStroke();

  push();
    fill("black");
    rect(x[3], y[0], 320, 75);
  pop();
  
  push();
    fill("black");
    rect(x[3], y[17], 320, 75);
  pop();       


  push();
    fill("white");
    textSize(25);
    text("ENTER THE DARK FOREST", x[18], y[4], 200);
  pop();

  push();
    textSize(12);
    fill("white");
    text("Stay within the green path and complete all tasks.",x[18],y[7]-10, 200);     
  pop();

  push();
    textSize(12);
    fill("white");
    text("By pressing enter, you will encounter several prompts that will guide you through the Dark Forest.",x[18],y[14], 200);     
  pop();

  push();
    textSize(14);
    fill("white");
    text("Read.me",x[3],y[3]-10, 200);     
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
  window.location.href = "registration.html";
}
