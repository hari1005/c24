class Ball {
  constructor(x,y,radius) {
    var options ={
      frictionAir: 0,
      friction: 0,
      frictionStatic: 1,
      inertia: Infinity,
      restitution: 1.0
    }
    this.body=Bodies.circle(x,y,radius);
    this.radius=radius;
  }

  display() {
    push();
    var pos=this.body.position
    fill("blue")
    ellipse(pos.x,pos.y,this.radius,this.radius)
  }
}
