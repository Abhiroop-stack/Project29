const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var stand,stand2;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16;
var polygon,polygonImg;
var slingshot;
function preload(){

}

function setup(){

stand = new Ground(390,300,250,10)
stand2 = new Ground(700,200,200,10)

block1 = new Box();
block2 = new Box();
block3 = new Box();
block4 = new Box();
block5 = new Box();
block6 = new Box();
block7 = new Box();
block8 = new Box(330,235,30,40);
block9 = new Box(360,235,30,40);
block10 = new Box(390,235,30,40);
block11 = new Box(420,235,30,40);
block12 = new Box(450,235,30,40);


block13 = new Box(360,195,30,40);
block14 = new Box(390,195,30,40);
block15 = new Box(420,195,30,40);


block16 = new Box(390,155,30,40);

polygon = Bodies.circle(50,200,20);
World.add(world,polygon);

ImageMode(center)
image(polygonImg,polygon.position.x,polygon.position.y,40,40);

slingshot = new SlingShot(this.polygon,{x:200,y:200});
}

function draw(){
    block1.display();
    block2.display();
    block3.display();
    block4.display(); 
    block5.display(); 
    block6.display(); 
    block7.display(); 
    block8.display(); 
    block9.display();
    block10.display();
    block11.display(); 
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    polygon.display();
    slinshot.display();
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}