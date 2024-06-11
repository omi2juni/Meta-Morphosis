var collision;

function polyPoint(_v, _px, _py) {
  collision = false;
  let next = 0;
  
  this.v = _v;
  this.px = _px;
  this.py = _py;
  

  for (let current = 0; current < this.v.length; current++) {
    next = current + 1;

    if (next == this.v.length) {
      next = 0;
    }

    this.vc = _v[current];
    this.vn = _v[next];
  
    if (((this.vc.y >= this.py && this.vn.y < this.py) || (this.vc.y < this.py && this.vn.y >= this.py)) &&
         (this.px < (this.vn.x-this.vc.x)*(this.py-this.vc.y) / (this.vn.y-this.vc.y) + this.vc.x)) {
            collision = !collision;
    }
    //print(collision);
  }
return collision;
}