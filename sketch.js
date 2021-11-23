
var bg, backgroundImg;
var ironman,ironmanImg;
function preload() {
  backgroundImg = loadImage("images/bg2.jpg");
  ironmanImg = loadImage("images/iron.png")
}

function setup() {
  createCanvas(1000, 600);
  bg = createSprite(580,300);
 bg.addImage(backgroundImg);
 ironman= createSprite(100,500,20,70);
 ironman.addImage(ironmanImg);
 ironman.scale=0.3
}

function draw() {

bg.velocityY=5;
if(bg.y>350){
  bg.y=200
}

 if(keyDown("up")){
   ironman.velocityY = -10;
 } 
 if(keyDown("left")){
  ironman.x =ironman.x - 5;
} 
if(keyDown("right")){
  ironman.x =ironman.x + 5;
} 
ironman.velocityY = ironman.velocityY + 0.5
    
    drawSprites();
   
}

