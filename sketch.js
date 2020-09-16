
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;
var boy,tree,mango1,ground;

 
function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	 boy = new Boy(200,500,50,50);

	 tree = new Tree(900,300,100,150);

	 mango1 = new Mango(930,250,40,40);

     ground = new Ground(580,height,1200,20)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  boy.display();
  tree.display();
  mango1.display();
  ground.display();

  drawSprites();
 
}



