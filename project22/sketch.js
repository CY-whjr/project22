const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Boddies;

var engine, world;

function preload(){
  fairy.image=loadImage("fairy1.png");
  star.image=loadImage("star");
  background.image=loadImage("starnight.png");
}

function setup() {
  createCanvas(800, 750);
  engine = Engine.create();
  world = engine.world;

  fairy = new Fairy(150, 300, width, height);
  star = new Star(280,100, 20,20);
}


function draw() {
  background("starnight.png");

  if(keyDown('rightArrow')){
    fairy.velocityX=2
  }

  if(keyDown('leftArrow')){
    fairy.velocityX=-2
  }

  if(keyDown('downArrow')){
    star.velocityY=-4
  }

  fairySprite.display();
  starSprite.display();

  push();
  objectMode(CENTER);
  pop();

}
