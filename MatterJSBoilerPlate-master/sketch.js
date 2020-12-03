
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	BobObject1 = new Bob (320, 350, 20);
	BobObject2 = new Bob (360, 250, 20);
	BobObject3 = new Bob (400, 450, 20);
	BobObject4 = new Bob (440, 450, 20);
	BobObject5 = new Bob (480, 450, 20);

	Roof1 = new Roof (400, 250, 400, 15);

	rope1 = new rope (BobObject1.body, Roof1.body, BobObject1.diameter*2, 200);
	rope2 = new rope (BobObject2.body, Roof1.body, BobObject2.diameter*2, 200);
	rope3 = new rope (BobObject3.body, Roof1.body, BobObject3.diameter*2, 200);
	rope4 = new rope (BobObject4.body, Roof1.body, BobObject4.diameter*2, 200);
	rope5 = new rope (BobObject5.body, Roof1.body, BobObject5.diameter*2, 200);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  BobObject1.display();
  BobObject2.display();
  BobObject3.display();
  BobObject4.display();
  BobObject5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  Roof1.display();
  
  drawSprites();
 
}



