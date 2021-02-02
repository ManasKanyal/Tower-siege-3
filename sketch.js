const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body=Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var block1, block2, block3,block4, block5,block6,block7, block8, block9,block10, block11,block12,block13, block14, block15,block16;
var polygon, slingShot, polygon_img;
var ground1, ground2;
var score = 0;
var bgimg;
var backgroundImg = loadImage(bgimg);
var lbg = loadImage("day.jpg")
var gameState = "onSling";

function preload(){

getTime();



}


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    polygon = Bodies.circle(50,200,15);
    World.add(world,polygon);
    polygon_img=loadImage("hexagon.png");

   

    slingShot = new SlingShot (this.polygon, {x:100,y:200});

    ground1=new Ground(390,310,270,12);

    block1 = new Block1(300,275,30,40);
    block2 = new Block1(330,275,30,40);
    block3 = new Block1(360,275,30,40);
    block4 = new Block1(390,275,30,40);
    block5 = new Block1(420,275,30,40);
    block6 = new Block1(450,275,30,40);
    block7 = new Block1(480,275,30,40);

    block8 = new Block2(330,235,30,40);
    block9 = new Block2(360,235,30,40);
    block10 = new Block2(390,235,30,40);
    block11 = new Block2(420,235,30,40);
    block12 = new Block2(450,235,30,40);

    block13 = new Block3(360,195,30,40);
    block14 = new Block3(390,195,30,40);
    block15 = new Block3(420,195,30,40);

    block16 = new Block4(390,155,30,40);

    ground2 = new Ground(800,225,210,12);

    block17 = new Block1(740,205,30,40);
    block18 = new Block1(770,205,30,40)
    block19 = new Block1(800,205,30,40)
    block20 = new Block1(830,205,30,40)
    block21 = new Block1(860,205,30,40);

    block22 = new Block3(770,165,30,40)
    block23 = new Block3(800,165,30,40)
    block24 = new Block3(830,165,30,40)

    block25 = new Block2(800,125,30,40);

    ground3 = new Ground(0,400,5000,30);
    
}

function draw(){
   background(56,44,44);
    Engine.update(engine);

    if(backgroundImg) {
        background(backgroundImg);
    }

    ground1.display();
    ground3.display();
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
    block16.display();
    ground2.display(); 
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();

    block1.score();
    block2.score();
    block3.score();
    block4.score();
    block5.score();
    block6.score();
    block7.score();
    block8.score();
    block9.score();
    block10.score();
    block11.score();
    block12.score();
    block13.score();
    block14.score();
    block15.score();
    block16.score();
    block17.score();
    block18.score();
    block19.score();
    block20.score();
    block21.score(); 
    block22.score();
    block23.score();
    block24.score();
    block25.score();

    fill("white");
    textSize(24);
    text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",150,30)
    
    fill("gold");
    imageMode(CENTER);
    image(polygon_img ,polygon.position.x,polygon.position.y,40,40);

    fill(255)
    textSize(24)
    text("SCORE :" + score ,950,60);

    slingShot.display();
}

function mouseDragged(){

    if(gameState !== "launched"){
    
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});

    }

}

function mouseReleased()
{
  
    slingShot.fly();
    gameState = "launched";
}




function keyPressed(){

    if(keyCode === 32){

   slingShot.attach(this.polygon);
   Matter.Body.setPosition(this.polygon, { x: 100, y: 200 })

    }

}

async function getTime(){

    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=06 && hour<=19){
        bgimg = "day.jpg"
    } else {
        bgimg = "night.jpg"
    }

    backgroundImg = loadImage(bgimg);
}