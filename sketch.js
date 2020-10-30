
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
    boyIMG= loadImage("boy.png")
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

    boySprite=createSprite(100, 500, 200,30);
    boySprite.shapeColor=color("red");
	//boySprite.shapeColor=color("red");

    boySprite.addImage(boyIMG)
    boySprite.scale=0.1


	//Create the Bodies Here.
  
    stone= new Stone(50,250,5,5);
    ground= new Ground(400,600,800,300)
    slingshot = new SlingShot(stone.body,{x:90, y:400});
    mango1= new Mango(400,100,5,5)
    mango2= new Mango(450,200,5,5)
    mango3= new Mango(340,200,5,5)
    mango4= new Mango(400,300,5,5)
    tree= new Tree(400,300,5,5)

    Engine.run(engine);
    
  
}


function draw() {
  rectMode(CENTER);
  background("silver");

  Engine.update(engine);

  ground.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  stone.display();
  slingshot.display();

  detectCollision(stone,mango1)
  detectCollision(stone,mango2)
  detectCollision(stone,mango3)
  detectCollision(stone,mango4)

  drawSprites();
 
}

function keyPressed(){
    if(keyCode==32){  
   Matter.Body.setPosition(stone.body, {x: 235 , y: 420});
   slingshot.attach(stone.body)
    }
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
   slingshot.fly();
}

function detectCollision(Lstone,Lmango){
mangoBodyPosition= Lmango.body.position
stoneBodyPosition= Lstone.body.position

var distance= dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
if(distance <= Lmango.r + Lstone.r){
    Matter.Body.setStatic(Lmango.body,false)
}
}

