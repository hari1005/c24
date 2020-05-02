// You could have multiple flags like: start, launch to indicate the state of the game.

const { Engine,World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.
var world,engine;


//const {Engine} = Matter 
//is the same as 
//const Engine = Matter.Engine



function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
   createCanvas(1200,400)
   engine=Engine.create();
   world=engine.world;
   
   cannonTop=new Ball(150,300,100);
   tank=new Tanker(100,300,100,150);
   cannon=new ShootBall(cannonTop.body,200,300,5,50);
   ground=new Ground(600,400,1200,10);
  
}

function draw() {
// Remember to update the Matter Engine and set the background.
background(140,213,255);
Engine.update(engine);
ground.display();
cannon.display();
cannonTop.display();
cannon.display();
cannon.attach(cannonTop.body)
console.log(cannonTop.depth);
}


function keyReleased() {
    // Call the shoot method for the cannon.
}