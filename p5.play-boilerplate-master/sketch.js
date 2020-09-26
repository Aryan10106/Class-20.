
var FixedRect,MovingRect;


function setup() 
{
  createCanvas(400,400);

  FixedRect= createSprite(200,100,50,80);
  FixedRect.shapeColor="green";
  MovingRect=createSprite(200,300,80,30);
  MovingRect.shapeColor="green";
}

function draw() 
{
  background(0,0,0);
  
 // MovingRect.x=World.mouseX;
  //MovingRect.y=World.mouseY;

  MovingRect.velocityY=5;
  FixedRect.velocityY=-5;

  if (
      MovingRect.x-FixedRect.x<FixedRect.width/2+MovingRect.width/2 &&
      FixedRect.x-MovingRect.x<MovingRect.width/2+FixedRect.width/2    
     )
  {
    //FixedRect.shapeColor="red";
    //MovingRect.shapeColor="red";
    MovingRect.velocityX=MovingRect.velocityX*(-1);
    FixedRect.velocityX=FixedRect.velocityX*(-1);

  }
  
   if (
      MovingRect.y-FixedRect.y<FixedRect.height/2+MovingRect.height/2 &&
    FixedRect.y-MovingRect.y<FixedRect.height/2+MovingRect.height/2
   )
   {
    //FixedRect.shapeColor="green";
    //MovingRect.shapeColor="green";
    MovingRect.velocityY=MovingRect.velocityY*(-1);
    FixedRect.velocityY=FixedRect.velocityY*(-1);

   }




  drawSprites();
}















