class Ground {
  constructor(x, y, width, height) {
    
    this.body=Bodies.rectangle(x,y,width,height);
    this.width=width
    this.height=height
    
  };

  display(){
      push();
      var pos=this.body.position
      fill("red");
      rect(pos.x,pos.y,this.width,this.height);
      pop();
  }
}
