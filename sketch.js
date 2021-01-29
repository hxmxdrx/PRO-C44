var backgroundImg;

var playerShip;
var playerShipSprite;

var enemyShip;
var enemyShip2;
var enemyShip3;
var enemyShipSprite;

var lazerBeam;
var lazerBeamSprite;

function preload(){

  backgroundImg = loadImage("images/background.jpg");

  playerShipSprite = loadImage("spaceshipMain.png");

  enemyShipSprite = loadImage("spaceshipEnemy.png");

  lazerBeamSprite = loadImage("lazerBeam.png");

}

function setup() {
  createCanvas(displayWidth - 15 ,displayHeight - 110);

  playerShip = createSprite(displayWidth/2, displayHeight - 150 , 50, 50);
  playerShip.addImage(playerShipSprite);
  playerShip.scale = 0.25;

  for(var i = displayWidth + 15; i < displayWidth - 15; i = i + 100){

    enemyShip = createSprite( i, displayHeight/4 - 75, 50, 50);
    //enemyShip.addImage(enemyShipSprite);
    console.log("loop1");


  }

  for(var i = displayWidth + 15; i < displayWidth - 15; i = i + 100){

    enemyShip = createSprite(i, displayHeight/4 + 25, 50, 50);
    //enemyShip.addImage(enemyShipSprite);
    console.log("loop1");

  }

  for(var i = displayWidth + 15; i < displayWidth - 15; i = i + 100){

    enemyShip2 = createSprite( i, displayHeight/4 + 25, 50, 50);
    //enemyShip2.addImage(enemyShipSprite);
    console.log("loop2");

  }

  for(var i = displayWidth + 15; i < displayWidth - 15; i = i + 100){

    enemyShip3 = createSprite( i, displayHeight/4 - 175, 50, 50);
    //enemyShip3.addImage(enemyShipSprite);
    console.log("loop3");

  }
  
}

function draw() {
  background(backgroundImg);

  playerShip.x = mouseX;

  if(keyDown("space")){
    lazer();
  } 

  drawSprites();
}

function lazer(){

  lazerBeam = createSprite(playerShip.x - 3 , playerShip.y - 52, 50, 50);
  //lazerbeam.x = playerShip.x
  lazerBeam.addImage(lazerBeamSprite);
  lazerBeam.scale = 0.25;
  lazerBeam.velocityY = -8;
  velocityX = 0;


}