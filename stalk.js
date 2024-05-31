var growth = 1;

function Stalk(msg,x,y) {
  
  this.msg = msg
  this.x = x;
  this.y = y;
  
  this.yspeed = 0;
  
  this.history = [];
  
  this.update = function() {

    this.y += this.yspeed;
    this.yspeed += growth;

    this.x = 10 * sin(this.yspeed * 0.045) + x;
    this.y = (-1 * this.yspeed) + y;
  
    var v = createVector(this.x, this.y);
    this.history.push(v);    
  
    if (this.history.length > 200){
      this.history.splice(0,1);
    }
  }
  
  this.display = function(){
    
    push();
    //rectMode(CENTER);

    for (var i=0; i<this.history.length; i++){
      var pos = this.history[i];
      stroke("#81FF00");
      fill("#81FF00");
      ellipse(pos.x, pos.y, 20, 20);
    }
    pop();
    
    push();
    rectMode(CENTER);
    strokeWeight(4);
    stroke("#81FF00");
    fill("white");
    rect(this.x, this.y, 100,75);
    pop();
    
    push();
    text(this.msg, this.x - 40, this.y-20, 90);
    pop();
    
   //console.log(this.history.length);
  }


  // this.reset = function(){

  //   push();
  //   fill("white");
  //   textStyle(BOLD);
  //   textSize(35);
  //   text("HELLO", 300, 300, 90);
  //   pop();

  // }

}