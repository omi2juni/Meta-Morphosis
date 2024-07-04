// mouse position detection variables
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
var w = [];
var u = [];
var t = [];
var s = [];
var q = [];
var p = [];
var o = [];
var n = [];
var m = [];
var l = [];
var k = [];

var detection;
var hit;
var img;

var input;
var input2;
var input3;

var button;
var checkbox1;
var checkbox2;
var checkbox3;

// completion detection
var part1;
var part2;
var completed;

var island1;

function preload() {
  necto = loadFont('assets/fonts/NectoMono-Regular.otf');
  popup = loadImage('assets/window1.png');
  img = loadImage("assets/forests/forest7.png");
}

function setup() {

  storeItem("buttonPressed", 5);

  a = "How doe the internet influence your daily life?";
  b = "How do you use the internet?";
  c = "What is the internet to you?";
  d = "Choose your path."

  var cnv = createCanvas(700, 500);
  var cnvx = (windowWidth - width) / 2;
  var cnvy = (windowHeight - height) / 2;

  cnv.position(cnvx, cnvy);

  for (let i = 0; i < spamCount; i++) {
    xpos[i] = random(200, 550);
    ypos[i] = random(100, 400);
    xspeed[i] = random(-10, 10);
    yspeed[i] = random(-10, 10);
  }

  rows = 700 / size;
  cols = 500 / size;

  input = createInput(a);
  input2 = createInput(b);
  input3 = createInput(c);

  checkbox1 = createCheckbox("");
  checkbox1.addClass("checkbox");

  checkbox2 = createCheckbox("");
  checkbox3 = createCheckbox("");

  button = createButton("submit");

  input.changed(storeData);
  input2.changed(storeData2);
  input3.changed(storeData3);


  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      x[i] = i * size;
      y[j] = j * size;

      v[0] = createVector(x[18], y[15]);
      v[1] = createVector(x[23], y[15]);
      v[2] = createVector(x[23], y[3]);
      v[3] = createVector(x[20], y[3]);
      v[4] = createVector(x[20], y[13]);
      v[5] = createVector(x[17], y[13]);
      v[6] = createVector(x[17], y[10]);
      v[7] = createVector(x[19], y[10]);
      v[8] = createVector(x[19], y[9]);
      v[9] = createVector(x[17], y[9]);
      v[10] = createVector(x[17], y[6]);
      v[11] = createVector(x[19], y[6]);
      v[12] = createVector(x[19], y[5]);
      v[13] = createVector(x[17], y[5]);
      v[14] = createVector(x[17], y[2]);
      v[15] = createVector(x[24], y[2]);
      v[16] = createVector(x[24], y[17]);
      v[17] = createVector(x[18], y[17]);

      // checkbox 1
      w[0] = createVector(x[6], y[2]);
      w[1] = createVector(x[14], y[2]);
      w[2] = createVector(x[14], y[3]);
      w[3] = createVector(x[17], y[3]);
      w[4] = createVector(x[17], y[2]);
      w[5] = createVector(x[20], y[2]);
      w[6] = createVector(x[20], y[5]);
      w[7] = createVector(x[17], y[5]);
      w[8] = createVector(x[17], y[4]);
      w[9] = createVector(x[14], y[4]);
      w[10] = createVector(x[14], y[5]);
      w[11] = createVector(x[6], y[5]);

      // checkbox 2
      u[0] = createVector(x[6], y[6]);
      u[1] = createVector(x[14], y[6]);
      u[2] = createVector(x[14], y[7]);
      u[3] = createVector(x[17], y[7]);
      u[4] = createVector(x[17], y[6]);
      u[5] = createVector(x[20], y[6]);
      u[6] = createVector(x[20], y[9]);
      u[7] = createVector(x[17], y[9]);
      u[8] = createVector(x[17], y[8]);
      u[9] = createVector(x[14], y[8]);
      u[10] = createVector(x[14], y[9]);
      u[11] = createVector(x[6], y[9]);

      // checkbox 3
      q[0] = createVector(x[6], y[10]);
      q[1] = createVector(x[14], y[10]);
      q[2] = createVector(x[14], y[11]);
      q[3] = createVector(x[17], y[11]);
      q[4] = createVector(x[17], y[10]);
      q[5] = createVector(x[20], y[10]);
      q[6] = createVector(x[20], y[13]);
      q[7] = createVector(x[17], y[13]);
      q[8] = createVector(x[17], y[12]);
      q[9] = createVector(x[14], y[12]);
      q[10] = createVector(x[14], y[13]);
      q[11] = createVector(x[6], y[13]);

      // island 1
      p[0] = createVector(x[6], y[2]);
      p[1] = createVector(x[14], y[2]);
      p[2] = createVector(x[14], y[5]);
      p[3] = createVector(x[6], y[5]);

      // island 2
      o[0] = createVector(x[6], y[6]);
      o[1] = createVector(x[14], y[6]);
      o[2] = createVector(x[14], y[9]);
      o[3] = createVector(x[6], y[9]);

      // island 3
      n[0] = createVector(x[6], y[10]);
      n[1] = createVector(x[14], y[10]);
      n[2] = createVector(x[14], y[13]);
      n[3] = createVector(x[6], y[13]);

      // answer 1
      t[0] = createVector(x[4], y[2]);
      t[1] = createVector(x[14], y[2]);
      t[2] = createVector(x[14], y[5]);
      t[3] = createVector(x[5], y[5]);
      t[4] = createVector(x[5], y[15]);
      t[5] = createVector(x[12], y[15]);
      t[6] = createVector(x[12], y[17]);
      t[7] = createVector(x[4], y[17]);

      // answer 2
      m[0] = createVector(x[4], y[6]);
      m[1] = createVector(x[14], y[6]);
      m[2] = createVector(x[14], y[9]);
      m[3] = createVector(x[5], y[9]);
      m[4] = createVector(x[5], y[15]);
      m[5] = createVector(x[12], y[15]);
      m[6] = createVector(x[12], y[17]);
      m[7] = createVector(x[4], y[17]);


      // answer 3
      l[0] = createVector(x[4], y[10]);
      l[1] = createVector(x[14], y[10]);
      l[2] = createVector(x[14], y[13]);
      l[3] = createVector(x[5], y[13]);
      l[4] = createVector(x[5], y[15]);
      l[5] = createVector(x[12], y[15]);
      l[6] = createVector(x[12], y[17]);
      l[7] = createVector(x[4], y[17]);

      // input island
      s[0] = createVector(x[6], y[15]);
      s[1] = createVector(x[12], y[15]);
      s[2] = createVector(x[12], y[17]);
      s[3] = createVector(x[6], y[17]);


      // interaction
      input.position(cnvx + x[7]-5, cnvy + y[3] - 10);
      input2.position(cnvx + x[7]-5, cnvy + y[7] - 10);
      input3.position(cnvx + x[7]-5, cnvy + y[11] - 10);

      checkbox1.position(cnvx + x[15]+10, cnvy + y[3]);
      checkbox2.position(cnvx + x[15]+10, cnvy + y[7]);
      checkbox3.position(cnvx + x[15]+10, cnvy + y[11]);

      button.position(cnvx + x[7]-10, cnvy + (y[15] + 11), "absolute");
    }
  }
}

function draw() {

  px = mouseX;
  py = mouseY;

  stateButton();
  completionDetection();

  background(img);

  for (let i = 0; i < spamCount; i++) {
    xpos[i] = lerp(xpos[i], (xpos[i] += xspeed[i]), 0.6);
    ypos[i] = lerp(ypos[i], (ypos[i] += yspeed[i]), 0.6);

    if (xpos[i] < 0 || xpos[i] + 150 > 700) {
      xspeed[i] = xspeed[i] * -1;
    }

    if (ypos[i] < 0 || ypos[i] + 100 > 500) {
      yspeed[i] = yspeed[i] * -1;
    }

    for (let i = 0; i < 6; i++) {
      push();
        fill("white");
        strokeWeight(5);
        stroke("#81FF00");
        image(popup, xpos[i], ypos[i]);
      pop();
        
      if (checkbox1.checked()) {
        d = a;
        textSize(14);
        textFont(necto);
        noStroke();
        fill("white");
        text(d, xpos[i] + 15, ypos[i] + 35, 140, 100);
      } 
      if (checkbox2.checked()) {
        d = b;
        textSize(14);
        textFont(necto);
        noStroke();
        fill("white");
        text(d, xpos[i] + 15, ypos[i] + 35, 140, 100);
      } 
      if (checkbox3.checked()) {
        d = c;
        textSize(14);
        textFont(necto);
        noStroke();
        fill("white");
        text(d, xpos[i] + 15, ypos[i] + 35, 140, 100);
      } else {
        textSize(14);
        textFont(necto);
        noStroke();
        fill("white");
        text(d, xpos[i] + 15, ypos[i] + 35, 140, 100);
      }
    }
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {

      // draws path
      if (checkbox3.checked()) {
        polyPoint(q, px, py);
        beginShape();
        for (let i = 0; i < q.length; i++) {
          strokeWeight(4);
          stroke("white");
          vertex(q[i].x, q[i].y);
        }
        endShape(CLOSE);
      }

      if (input3.value() != c) {
        polyPoint(l, px, py);
        beginShape();
        for (let i = 0; i < l.length; i++) {
          strokeWeight(4);
          stroke("white");
          vertex(l[i].x, l[i].y);
        }
        endShape(CLOSE);
      } 
      
      else {
        polyPoint(v, px, py);
        beginShape();
        for (let i = 0; i < v.length; i++) {
          strokeWeight(4);
          stroke("white");
          vertex(v[i].x, v[i].y);
        }
        endShape(CLOSE);

        beginShape();
        for (let i = 0; i < s.length; i++) {
          strokeWeight(4);
          stroke("white");
          vertex(s[i].x, s[i].y);
        }
        endShape(CLOSE);

        beginShape();
        for (let i = 0; i < p.length; i++) {
          strokeWeight(4);
          stroke("white");
          vertex(p[i].x, p[i].y);
        }
        endShape(CLOSE);

        beginShape();
        for (let i = 0; i < o.length; i++) {
          strokeWeight(4);
          stroke("white");
          vertex(o[i].x, o[i].y);
        }
        endShape(CLOSE);

        beginShape();
        for (let i = 0; i < n.length; i++) {
          strokeWeight(4);
          stroke("white");
          vertex(n[i].x, n[i].y);
        }
        endShape(CLOSE);
      }

      if (checkbox1.checked()) {
        polyPoint(w, px, py);

        push();
        beginShape();
        for (let i = 0; i < w.length; i++) {
          strokeWeight(4);
          stroke("white");
          vertex(w[i].x, w[i].y);
        }
        endShape(CLOSE);
        pop();
      }

      if (input.value() != a) {
        polyPoint(t, px, py);
        beginShape();
        for (let i = 0; i < t.length; i++) {
          strokeWeight(4);
          stroke("white");
          vertex(t[i].x, t[i].y);
        }
        endShape(CLOSE);
      } 

      if (checkbox2.checked()) {
        beginShape();
        polyPoint(u, px, py);
        for (let i = 0; i < u.length; i++) {
          strokeWeight(4);
          stroke("white");
          vertex(u[i].x, u[i].y);
        }
        endShape(CLOSE);
      }

      if (input2.value() != b) {
        polyPoint(m, px, py);
        beginShape();
        for (let i = 0; i < m.length; i++) {
          strokeWeight(4);
          stroke("white");
          vertex(m[i].x, m[i].y);
        }
        endShape(CLOSE);
      } 
      

      if (collision === false && frameCount>50) {
        fill("red");
        window.location.href = "about.html";
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
  window.location.href = "digitalgarden.html";
}

function completionDetection() {
  part1 = false;
  part2 = false;
  completed = false;

  if (checkbox1.checked()) {
    part1 = !part1;
  } else if (checkbox2.checked()) {
    part1 = !part1;
  } else if (checkbox3.checked()) {
    part1 = !part1;
  }

  if (input.value() != a) {
    part2 = !part2;
  } else if (input2.value() != b) {
    part2 = !part2;
  } else if (input3.value() != c) {
    part2 = !part2;
  }

  if (part1 === true && part2 === true) {
    completed = !completed;
  }
}

function storeData(){
  storeItem("message6", input.value());
}

function storeData2(){
  storeItem("message6", input2.value());
}

function storeData3(){
  storeItem("message6", input3.value());
}
