class ShootBall{
    constructor(bodyA,x,y,w,h){
        var options={
            bodyA: bodyA,
            stiffness: 0.04,
            length: 10
        }
       this.body=Bodies.rectangle(x,y,w,h);
       this.width=w;
       this.height=h;
       World.add(world,this.body)
    }

    attach(body){
     this.body.bodyA=body;
    }

    shoot(){
      this.body.bodyA=null;
    }

    display(){
        push();
        var pos=this.body.position
        fill("green");
        rect(pos.x,pos.y,width,height);
        pop();
    }

}
