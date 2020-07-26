var car,wall;
var speed,weight;


function setup() {

  //canvas size
  createCanvas(1200,1200);

  //car sprite
  car = createSprite(50,60,50,50);
  car.shapeColor =(0, 255, 0);
  car.debug = "true";
  car.velocityX = 25;


  //wall sprite
  wall = createSprite(1100,60,60,100);
  wall.shapeColor = "green";

 
  //another car sprite
  car2 = createSprite(50,240,50,50);
  car2.shapeColor = (255, 0, 0);
  car2.debug = "true";
  car2.velocityX = 25;
  


  //another wall sprite
  wall2 = createSprite(1100,240,60,100);
  wall2.shapeColor = "green";
}

function draw() {
  background(255,255,255);  


  if(wall.x - car.x < (car.width+wall.width)/2)
  
  {
    car.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed/ 22509;
    if (deformation>180)
    {
        car.shapeColor = color(255,0,0);
    }


    if (deformation<180 && deformation>100)
        {
            
           car.shapeColor = color(230,230,0);   

        }

            
            if(deformation<100)
            {

                 car.shapeColor = color(0,250,0);

            }

  
  }







  if(car.isTouching(wall))
  {
    wall.shapeColor = "red"; 
  }
  else
  {
    wall.shapeColor = "green";

  }




  drawSprites();
}