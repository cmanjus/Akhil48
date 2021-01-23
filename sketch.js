var c1,c2,c3,c4,c5,c6;
var red,redCar,tracki,groundi,gameOverImage,restartImage,redl,redr;
var PLAY = 1;
var END = 0;
var restart,gameOver;
var gameState ;
var score;
var obstaclesGroup;
var flag,flagi;
var f= 0;
function preload(){
red =loadImage("images/red.png")
redl =loadImage("images/redleft.png")
redr =loadImage("images/redright.png")
groundi=loadImage("images/track.png")
flagi=loadImage("images/flag.png")
gameOverImage = loadImage ("images/gameOver.png "); 
restartImage = loadImage ("images/restart.png");
c1 =loadImage("images/c1.png")
c2=loadImage("images/c1.png")
c3=loadImage("images/c3.png")
c4=loadImage("images/c4.png")
c5=loadImage("images/c5.png")
c6=loadImage("images/c6.png")}
function setup() {
  createCanvas(windowWidth, windowHeight);
 gameState = PLAY ;
 obstaclesGroup =new Group();
 redCar = createSprite(200,400,20,50);
  redCar.addImage(red)
  redCar.scale = 0.9
  restart= createSprite (450,400,15,15);
  restart.addImage(restartImage);
  restart.scale=0.5;
  gameOver = createSprite (450,350,15,15);
  gameOver.addImage (gameOverImage);
  flag = createSprite(450,250,50,50)
    flag.addImage(flagi)

  score=0;}
function draw()
{  background(groundi);
  if (gameState === PLAY ) {
  score = score + Math.round(getFrameRate()/60);
  if(keyDown("LEFT_ARROW")) {
    redCar.x=redCar.x-10;
    redCar.addImage(redl)
  }else(redCar.addImage(red))
  if(keyDown("RIGHT_ARROW")) {
    redCar.x=redCar.x+10;
    redCar.addImage(redr)
  } else(redCar.addImage(red))

  restart.visible = false ;
  gameOver.visible = false
  flag.visible = false
  spawnObstacles();
  if (obstaclesGroup.isTouching(redCar)) {
      gameState = END ; } }
    else if(gameState === END) {
    gameOver.visible = true;
    restart.visible = true;
    flag.visible = true;
      if (mousePressedOver(restart)){
      reset();
      }
    
    
  }
  

  text("Score: "+ score, 500,50);
  drawSprites();
}


function spawnObstacles() {
  if(frameCount % 120 === 0) {
    var ran = Math.round(random(250,725));
    var obstacle = createSprite(ran,0,10,40);
    obstacle.velocityY = 4;
    var rand = Math.round(random(1,6));
    switch(rand) {
      case 1: obstacle.addImage(c1);
              break;
      case 2: obstacle.addImage(c2);
              break;
      case 3: obstacle.addImage(c3);
              break;
      case 4: obstacle.addImage(c4);
              break;
      case 5: obstacle.addImage(c5);
              break;
      case 6: obstacle.addImage(c6);
              break;
      default: break;
    }      
    obstacle.lifetime = 300;
    obstaclesGroup.add(obstacle);
  }}
  function reset(){
    gameState = PLAY;
    gameOver.visible = false;
    restart.visible = false;
    flag.visible = false
    obstaclesGroup.destroyEach();
    score = 0;}