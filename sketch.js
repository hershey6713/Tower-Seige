const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var polygon;

function preLoad() {
  //polygon = loadImage("hexagon.jpg");
}

function setup() {
  createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(800, 300, 300, 20);

  //level 1
  box = new Box(800, 260, 40, 60);
  box2 = new Box(840, 260, 40, 60);
  box3 = new Box(880, 260, 40, 60);
  box4 = new Box(760, 260, 40, 60);
  box5 = new Box(720, 260, 40, 60);
  //level 2
  box6 = new Box(800, 200, 40, 60);
  box7 = new Box(840, 200, 40, 60);
  box8 = new Box(760, 200, 40, 60);
  // level 3
  box9 = new Box(800, 140, 40, 60);

  //polygon
  shooter = new Shooter(300, 200, 20);

  //slingshot constraint
  slingshot = new SlingShot(shooter.body, {x:300, y:200});

}

function draw() {
  background(255,255,255);
  Engine.update(engine);
  ground.display("#32e0c4");

  //level1
  box.display("#e8ffff");
  box2.display("#a6f6f1");
  box3.display("#41aea9");
  box4.display("#a6f6f1");
  box5.display("#41aea9");
  //level 2
  box6.display("#a6f6f1");
  box7.display("#41aea9");
  box8.display("#41aea9");
  //level 3
  box9.display("#41aea9");

  //displays polygon shooter
  shooter.display();

  //displays slingshot constraint
  slingshot.display();

  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(shooter.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if (keyCode===32){
    console.log("pressed");
    Matter.Body.setPosition(shooter.body, {x: 150 , y: 200});
    slingshot.attach(shooter.body);
  }
}