const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
  createCanvas(800, 700);

  engine = Engine.create();
  world = engine.world;

  //Create the Bodies Here.
  
  ground = new Ground(400,height,800,30);
  dustbin = new Dustbin(588,587,160,200);
  dustbinB = new DustbinBLR(588,657,160,50);
  dustbinL = new DustbinBLR(505,550,50,200);
  dustbinR = new DustbinBLR(665,550,70,200);
  paper = new Paper(100, 100, 25);
  Engine.run(engine);
  keyPressed();
}
 
 

function draw() {  
  Engine.update(engine);
  background(200);
  paper.display();
  
  ground.display();
  
  dustbinB.display();
  dustbinL.display();
  dustbinR.display();
  dustbin.display();
  
  
  
}


function keyPressed(){
  if (keyCode === UP_ARROW){
    Body.applyForce(paper.body,paper.body,{x:85,y:-85});
  }
}



