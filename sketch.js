
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ground,paperObject,dustbinObject;

function preload()
{
	
}

function setup() {
	var canvas=createCanvas(1600, 700);
    engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  dustbinObject = new dustbin(1200,670);
  paperObject = new paper(200,450,30)
  ground = new grounds(700,680,1700,10)

	Engine.run(engine);
	
	

   
}


function draw() {
 
  rectMode(CENTER);
  background("grey");
  
  dustbinObject.display();
  paperObject.display();
  ground.display();
  //KeyPressed();
  
 
}

function keyPressed(){
 if (keyCode === UP_ARROW){
Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:45,y:-55});

  }
}

