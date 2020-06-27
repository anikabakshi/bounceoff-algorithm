var fixedRect, movingRect,object1,object2,square,rectangle;

function setup() {
  createCanvas(600,800);
  fixedRect = createSprite(200, 200, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  object1=createSprite(0,400,20,50);
  object1.shapeColor="pink"

  object2=createSprite(400,400,20,50);
  object2.shapeColor="purple"

  movingRect = createSprite(200, 600,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  square=createSprite(0,0,30,30);
  square.shapeColor="red"

  rectangle=createSprite(800,800,30,50);
  rectangle.shapeColor="orange"

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
object1.velocityX=5
object2.velocityX=-5
rectangle.velocityY = -5;
square.velocityY = +5;
rectangle.velocityX=-5
square.velocityX=5


}

function draw() {
  background("yellow");  

  bounceoff(movingRect,fixedRect);
  bounceoff(object1,object2);
  bounceoff(rectangle,square);
  drawSprites();
}


