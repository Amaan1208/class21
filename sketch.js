var fixed,moving;
var ball;
var edges;
var wall;
function setup() {
createCanvas(800,800);
fixed=  createSprite(400, 200, 80, 70);
moving=  createSprite(600, 300, 70, 80);
ball= createSprite(50,200,15,15);
wall=createSprite(700,400,10,800);
ball.velocityX=7;
//ball.velocityY=10;
edges=createEdgeSprites();
}

function draw() {
  background(0);  
  moving.x=World.mouseX;
  moving.y=World.mouseY;

if(isTouching(moving,fixed)){
  moving.shapeColor="red";
}  
else{
  moving.shapeColor="blue";
}

bounceOff(ball,wall);
  drawSprites();
}

