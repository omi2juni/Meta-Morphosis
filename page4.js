// mouse position detection variables
let px = 0; // xpos of the circle
let py = 0; // ypos of the circle
let r = 30; // circle's radius

// grid variables
var rows;
var cols;
var grid = [];
var x = [];
var y = [];
var size = 25;

// text box variables
var spamCount = 20;
var xpos = [];
var ypos = [];
var xspeed = [];
var yspeed = [];

// password variables
var a;
var x1pos;
var y1pos;
var x1speed;
var y1speed;

// array of vectors
var v = [];

// completion detection
var part1;
var part2;
var completed;

// image variables
var img;

// interaction variables
var input;
var button;
var slider;

// array of numbers
var nrs = [];

function preload(){
  necto = loadFont('assets/fonts/NectoMono-Regular.otf');
  popup = loadImage('assets/window1.png');
  img = loadImage('assets/forests/forest4.png');
}

function setup() {

  storeItem("buttonPressed", 3);
  
  var cnv = createCanvas(700, 500);
  var cnvx = (windowWidth - width)/2;
  var cnvy = (windowHeight - height)/2;
  
  cnv.position(cnvx, cnvy);

  // password
  x1pos = random(200, 550);
  y1pos = random(100, 400);
  x1speed = random(-10, 10);
  y1speed = random(-10, 10);
  
  a = '7460301595';
   
  // floating spams
  for (let i = 0; i < spamCount; i++){
    xpos[i] = random(200, 550);
    ypos[i] = random(100, 400);
    xspeed[i] = random(-10, 10);
    yspeed[i] = random(-10, 10);
    
    nrs[0] = '7149721762';
    nrs[1] =  '7229686654';
    nrs[2] = '0073707276';
    nrs[3] = '4015631028';
    nrs[4] = '7309384089';
    nrs[5] = '0044529163';
    nrs[6] = '4897624262';
    nrs[7] = '7020251676';
    nrs[8] = '2573596593';
    nrs[9] = '7470302595';
    nrs[10] = '8407328830';
    nrs[11] = '6475189631';
    nrs[12] = '4745363994';
    nrs[13] = '3657629590';
    nrs[14] = '3633861426';
    nrs[15] = '7883879725';
    nrs[16] = '3534096333';
    nrs[17] = '1636296096';
    nrs[18] = '2589316068';
    nrs[19] = '5269104462';
  }  

  slider = createSlider(10, 50, 15);
  slider.addClass("slider");

  input = createInput('Find the password');
  button = createButton("submit"); 

  // grid
  rows = 700/size;
  cols = 500/size;    
  
  for (let i=0; i<rows; i++){
    for (let j=0; j<cols; j++){
      
      x[i] = i*size;
      y[j] = j*size;
      
      v[0] = createVector(x[8], y[2]);
      v[1] = createVector(x[21], y[2]);
      v[2] = createVector(x[21], y[16]);
      v[3] = createVector(x[16], y[16]);
      v[4] = createVector(x[16], y[17]);
      v[5] = createVector(x[10], y[17]);
      v[6] = createVector(x[10], y[15]);
      v[7] = createVector(x[20], y[15]);
      v[8] = createVector(x[20], y[7]);
      v[9] = createVector(x[11], y[7]);
      v[10] = createVector(x[11], y[9]);
      v[11] = createVector(x[16], y[9]);
      v[12] = createVector(x[16], y[12]);
      v[13] = createVector(x[10], y[12]);
      v[14] = createVector(x[10], y[7]);
      v[15] = createVector(x[8], y[7]);
      
     input.position((cnvx + x[9]), (cnvy + y[3]));
     slider.position(cnvx + x[9], cnvy + y[5]-6);

     button.position((cnvx + x[11]-10), (cnvy + y[15] + 12), 'absolute'); 
    } 
  }
}

function draw() {
  px = mouseX;
  py = mouseY;

  background(img);
  completionDetection();
  stateButton();
  
  // draws spam with password
  push();
    x1pos = lerp(x1pos, x1pos += x1speed, 0.6);
    y1pos = lerp(y1pos, y1pos += y1speed, 0.6);
    if (x1pos < 0 || x1pos + 150 > 700){
       x1speed = x1speed * -1;
    }
    if (y1pos < 0 || y1pos + 100 > 500){
      y1speed = y1speed * -1;
    } 
    
  fill("white");
  textWrap(CHAR);
  strokeWeight(5);
  stroke("#81FF00");
  image(popup, x1pos, y1pos);

  textSize(slider.value());
  textFont("Roboto Mono");
  textStyle(BOLDITALIC);
  noStroke();
  fill("white");
  text(a, x1pos + 15, y1pos + 25, 130, 75);
pop();


// draws floating spams
push();
  for (let i=0; i<spamCount; i++){
    xpos[i] = lerp(xpos[i], xpos[i] += xspeed[i], 0.6);
    ypos[i] = lerp(ypos[i], ypos[i] += yspeed[i], 0.6);
    
    if (xpos[i] < 0 || xpos[i] + 150 > 700){
     xspeed[i] = xspeed[i] * -1;
    }
    if (ypos[i] < 0 || ypos[i] + 100 > 500){
      yspeed[i] = yspeed[i] * -1;
    } 
  
    fill("white");
    strokeWeight(5);
    stroke("#81FF00");
    image(popup, xpos[i], ypos[i]);

    textSize(15);
    textFont(necto);
    noStroke();
    text(nrs[i], xpos[i] + 25, ypos[i] + 40, 100, 100);
  }
pop();
   
polyPoint(v, px, py);

// draws path
for (let i=0; i<rows; i++){
  for (let j=0; j<cols; j++){
      
    beginShape();
      for (let i = 0; i < v.length; i++) {   
        strokeWeight(4);
        stroke("white");
        vertex(v[i].x, v[i].y);
      }
    endShape(CLOSE);  
    
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
  window.location.href = "identification.html";
}

function completionDetection() {
  part1 = false;
  part2 = false;
  completed = false;

  if (input.value() === a) {
    completed = !completed;
  }
}
