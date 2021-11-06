class Ball {
constructor(x, y, r) {
    var options = {
        'restitution':1.2,
        'friction':0.3,
        'density':1.0
    }
    this.body = Bodies.circle(x,y,r,options);
     this.r = r
    Composite.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    fill("green");

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    ellipseMode(RADIUS);
  
    ellipse(0, 0, this.r,this.r);
    pop();
  }

};
