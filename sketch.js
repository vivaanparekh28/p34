const Body=Matter.Body
const Bodies=Matter.Bodies
const World=Matter.World
const Engine=Matter.Engine
const Constraint=Matter.Constraint

var backgroundImg

function preload() {
//preload the images here
backgroundImg = loadImage("GamingBackground.png")

}

function setup() {
  createCanvas(1000, 500);
  
  engine=Engine.create()
  world=engine.world;
  hero=new Hero()
  rope=new Rope(hero.body,{x:200,y:200})
  ground=new Ground()
  block=new Block(300,300)
  // create sprites here

}

function draw() {
  
 background(backgroundImg)
 
  Engine.update(engine)
  hero.display() 
  rope.display() 
  ground.display()
  block.display()
 
}
function mouseDragged(){
  Body.setPosition(hero.body,{x:mouseX,y:mouseY})

 
}

