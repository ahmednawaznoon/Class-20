var fixedRectangle, movingRectangle


function setup() {
  createCanvas(800,800);
  
  fixedRectangle = createSprite(400, 200, 50, 50);
  fixedRectangle.shapeColor = "green"
  fixedRectangle.debug = true
  movingRectangle = createSprite(300,100,50,50)
  movingRectangle.shapeColor = "white"
  movingRectangle.debug = true
}

function draw() {

  
  background(0);  

  movingRectangle.x = mouseX
  movingRectangle.y = mouseY

  if (movingRectangle.x - fixedRectangle.x <= movingRectangle.width/2 + fixedRectangle.width/2
    && fixedRectangle.x - movingRectangle.x <= movingRectangle.width/2 + fixedRectangle.width/2 
    &&movingRectangle.y - fixedRectangle.y <= movingRectangle.height/2 + fixedRectangle.height/2
    && fixedRectangle.y - movingRectangle.y <= movingRectangle.height/2 + fixedRectangle.height/2 ) {
    movingRectangle.shapeColor = "red"
    fixedRectangle.shapeColor = "blue"
  }else{
    movingRectangle.shapeColor = "white"
    fixedRectangle.shapeColor = "green"

  }


  drawSprites();
}