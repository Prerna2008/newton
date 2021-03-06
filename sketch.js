
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;
var bob1,bob2,bob3,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;
var platform;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
  world = engine.world;
  

  platform = new Ground(100,200, 200, 50);
  bob1 = new Bob(300,500,25); 
	bob2 = new Bob(350,500,25);
	bob3 = new Bob(400,500,25);
	bob4 = new Bob(450,500,25); 
  bob5 = new Bob(500,500,25); 
  
  rope1=new rope(bob1.body,platform.body,-bobDiameter*2,0)
 
  rope2=new rope(bob2.body,platform.body,-bobDiameter*2,0)

  rope3=new rope(bob3.body,platform.body,-bobDiameter*2,0)
  
  rope4=new rope(bob4.body,platform.body,-bobDiameter*2,0)
  
  rope5=new rope(bob5.body,platform.body,-bobDiameter*2,0)


function draw() {
  background("green");
  Engine.update(engine);
  strokeWeight(4);
  keyPressed();
  platform.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  strokeWeight(3);
  line1(bob1.body.position.x,bob1.body.position.y,platform.body.position.x,platform.body.position.y);
  line2(bob2.body.position.x,bob2.body.position.y,platform.body.position.x,platform.body.position.y);
  line3(bob3.body.position.x,bob3.body.position.y,platform.body.position.x,platform.body.position.y);
  line4(bob4.body.position.x,bob4.body.position.y,platform.body.position.x,platform.body.position.y);
  line5(bob5.body.position.x,bob5.body.position.y,platform.body.position.x,platform.body.position.y);
}
function keyPressed(){
  if(keyCode===UP_ARROW){
	Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-4,y:3})
}
if(keyCode===DOWN_ARROW){
	Matter.Body.applyForce(bob1.body,bob1.body.position,{x:0,y:0})
}
}

