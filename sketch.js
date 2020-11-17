var movingRect,fixedRect;

function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 50, 50);
  fixedRect.shapeColor="white";

  movingRect=createSprite(200,300,20,50);
  movingRect.shapeColor="white";
}

function draw() {
  background(0); 
  movingRect.x=mouseX;
  movingRect.y=mouseY;

  if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2 
    && fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2 
    && movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2
    && fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2  ){
    movingRect.shapeColor="blue";
    fixedRect.shapeColor="red";
  }else {
    movingRect.shapeColor="white";
    fixedRect.shapeColor="white";
  }
  drawSprites();
}