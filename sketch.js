var backgroundImage, balloon, balloonSprite;

function preload(){
backgroundImage = loadImage("Hot Air Ballon-01.png");
balloon = loadImage("Hot Air Ballon-02.png");
}

function setup() {
  createCanvas(600,600);
  balloonSprite = createSprite(400, 200, 50, 50);
  balloonSprite.addImage("balloon", balloon);
}

function draw() {
  background(backgroundImage);  

  // if(keyDown(LEFT_ARROW)){
  //   balloon.x = balloon.x - 10;
  // }

  drawSprites();
}
function keyPressed() {
  console.log("line24")
  if (keyCode === DOWN_ARROW) {
    console.log("line26")
     balloonSprite.y = balloonSprite.y + 10;
    console.log(balloonSprite.y)
  }
  if(keyCode === UP_ARROW){
    balloonSprite.y = balloonSprite.y - 10;
  }
  if(keyCode === LEFT_ARROW){
    balloonSprite.x = balloonSprite.x - 10;
  }
  if(keyCode === RIGHT_ARROW){
    balloonSprite.x = balloonSprite.x + 10;
  }

  }