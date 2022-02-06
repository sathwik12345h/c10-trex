var trex, trex_running, edges;
var groundImage , ground;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png")
  groundImage = loadImage("ground2.png")

}

function setup(){
  createCanvas(600,200);

  trex = createSprite(300,160,20,30)
  trex.addAnimation("runnning",trex_running);
  trex.scale=0.6;
  trex.x = 50;
  
  edges = createEdgeSprites()
  
  ground = createSprite(300,200,600,20)
  ground.addImage(groundImage);
  //console.log("trex_running")
}


function draw(){
  //set background color 
  background("white");
  if (keyDown("space")){
    trex.velocityY = -10
  }
  trex.velocityY = trex.velocityY+0.5
  
  ground.velocityX = -5
  
  if (ground.x<0){
    ground.x = ground.width/2
  }

  trex.collide(ground)
  
  console.log(ground.x)

  drawSprites();
}