const Engine = Matter.Engine
const World = Matter.World

const Bodies = Matter.Bodies;
  
var snow=[]
var snow1=[]
  var engine,world
  var bg

function preload(){
  bgimg=loadImage("snow1.jpg")
  //snowimg=loadImage("snow5.webp")
}
  function setup() {
  createCanvas(800,800);
  bg=createSprite(400,400)
  bg.addImage(bgimg)
  bg.scale=2
  engine = Engine.create();
  world = engine.world;
  //snow=new Snow(10,10)

}


function draw() {

  
  background("white")
  Engine.update(engine)
  drawSprites();
  if(frameCount%60===0){
    snow.push(new Snow(random(10,800),10,10));
    
  }

  for(var i=0; i<snow.length;i++){
    snow[i].display()
  } 
  if(frameCount%30===0){
    snow1.push(new Snow1(random(0,700),5,10));
    
  }

  for(var i=0; i<snow1.length;i++){
    snow1[i].display()
  } 
 
  
  

}