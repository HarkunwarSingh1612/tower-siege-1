const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball, slingshot;

var polygon_img, polygon1, ground2;

function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground();
 // ground2= new Ground(500, 300);
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,250,10);
 
  //level one
  block1 = new Block(300,275,30,40);
  console.log(block1);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  topblock1= new Block(390,155, 30, 40);

  block16 = new Block(600,175,30,40);
  console.log(block1);
  block17 = new Block(630,175,30,40);
  block18 = new Block(660,175,30,40);
  block19= new Block(690,175,30,40);
  block20 = new Block(720,175,30,40);
  block21 = new Block(750,175,30,40);
  block22 = new Block(780,175,30,40);
  //level two
  block23 = new Block(630,135,30,40);
  block24 = new Block(660,135,30,40);
  block25 = new Block(690,135,30,40);
  block26 = new Block(720,135,30,40);
  block27 = new Block(750,135,30,40);
  //level three
  block28 = new Block(660,95,30,40);
  block29 = new Block(690,95,30,40);
  block30 = new Block(720,95,30,40);
  topblock2= new Block(690,55, 30, 40);
  polygon1= new Polygon();
  slingshot=new SlingShot(polygon1.body,{x:100, y:200})
  //top
  
 
  

  
  //polygon.addImage("polygon_img");

  //row2
  

  

}
function draw() {
  background(56,44,44); 
  Engine.update(engine);
  textSize(20);
  fill("lightyellow");
  

  ground.display();
  stand1.display();
  
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  topblock1.display();
  stand2.display();
  fill("grey");
  block16.display();
  fill("skyblue");
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  fill("pink");
  block24.display();
  block25.display();
  block26.display();
  block27.display();
  block28.display();
  fill("turquoise");
  block29.display();
  block30.display();
  topblock2.display();
  polygon1.display();
  slingshot.display();

  
 

}
function mouseDragged(){
  Matter.Body.setPosition(polygon1.body, {x:mouseX, y:mouseY})
}
function mouseReleased(){
  slingshot.fly();
}