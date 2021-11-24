
var bg, backgroundImg;
var ironman,ironmanImg;
var stoneImg, stoneGroup;
function preload() {
  backgroundImg = loadImage("images/bg2.jpg");
  ironmanImg = loadImage("images/iron.png");
  stoneImg= loadImage("images/stone.png");
}

function setup() {
  createCanvas(1000, 600);
  bg = createSprite(580,300);
 bg.addImage(backgroundImg);
 ironman= createSprite(100,500,20,70);
 ironman.addImage(ironmanImg);
 ironman.scale=0.3

 stoneGroup= new Group()
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
    
generateStones()
for(var i=0;i<stoneGroup.length;i++){
  var temp= stoneGroup.get(i)
  if(ironman.isTouching(temp)){
    ironman.collide(temp)
  }
}

    drawSprites();
   
}

function generateStones(){
  if(frameCount%60===0){
    var stone= createSprite(200,50,40,10)
    stone.x= random(150,900)
    stone.velocityY=5;
    stone.addImage(stoneImg);
    stoneGroup.add(stone)
    stone.lifetime=250;
  }
}