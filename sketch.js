var fixedRectangle, movingRectangle;

function setup() {
  createCanvas(800,400);
  fixedRectangle = createSprite(400, 200, 80, 50);//40
  fixedRectangle.shapeColor = "yellow";
  movingRectangle = createSprite(200, 350, 80, 50);//25
  movingRectangle.shapeColor = "yellow";
}

function draw() {
  background(0,0,0);  
  movingRectangle.x = World.mouseX;
  movingRectangle.y = World.mouseY;
  
  console.log(movingRectangle.x - fixedRectangle.x);
  
  if(movingRectangle.x - fixedRectangle.x < fixedRectangle.width/2 + movingRectangle.width/2 &&
    fixedRectangle.x - movingRectangle.x < movingRectangle.width/2 + fixedRectangle.width/2 && 
    fixedRectangle.y - movingRectangle.y < movingRectangle.height/2 + fixedRectangle.height/2 &&
    movingRectangle.y - fixedRectangle.y < fixedRectangle.height/2 + movingRectangle.height/2){
    
      movingRectangle.shapeColor = "red";
    fixedRectangle.shapeColor = "red";
  }

else{
  movingRectangle.shapeColor = "yellow";
  fixedRectangle.shapeColor = "yellow";
}

  drawSprites();
}