var bg, bg_Img;
var player,shooter_img,shooter_shooting;
var zombie, zombie_img;
var heart1,heart2,heart3;
var zombieGroup;

function preload()
{
    heart1 = loadImage("heart_1.png");
    heart2 = loadImage("heart_2.png");
    heart3 = loadImage("heart_3.png");

    shooter_img = loadImage("shooter_2.png");
    shooter_shooting = loadImage("shooter_3.png");

    zombie = loadImage("zombie.png");
    bg_Img = loadImage("bg.jpeg");

}

function setup()
{
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20);
  bg.addImage(bg_Img);
  bg.scale = 1.1;

  player = createSprite(displayWidth-1150,displayHeight-300,50,50);
  player.addImage(shooter_img);
  player.scale = 0.3;
  player.debug = true;
  player.setCollider("rectangle",0,0,300,300);

  heart1 = createSprite(displayWidth-150,40,20,20);
  heart1.visible = false;
  heart1.addImage(heart1);

  heart2 = createSprite(displayWidth-100,40,20,20);
  heart2.visible = false; 
  heart2.addImage(heart2);


  heart3 = createSprite(displayWidth-150,40,20,20);
  heart3.scale=0.4;
  heart3.addImage(heart3);

zombieGroup = new Group ;

  
}



function draw ()
{
    background(0);


    if(keyDown(UP_ARROW) || touches.length>0 )
    {
      player.y  = player.y-30;
      
    }

    if(keyDown(DOWN_ARROW) || touches.length>0)
    {
        player.y = player.y+30;
    
    }
     
    if(keyWentDown("SPACE"))
    {
        player.addImage(shooter_shooting);

    }
    else  
    {
        player.addImage(shooter_img);
    }
    
    if(zombieGroup.isTouching(player)){
        for(var i = 0 ; i<zombieGroup.length ; i++)
        {
            if(zombieGroup[i].isTouching(player))
            {
              zombieGroup[i].destroy();
            }
        }
        }   
     
enemy()


    drawSprites();
}


function enemy()
{
    if(frameCount%50===0)
    {
        zombie = createSprite(random(500,1100),random(100,500),40,40)
        zombie.addImage(zombie_img);
        zombie.scale = 0.15;
        zombie.velocityX = -3;
        zombie.debug = true;
        zombie.setCollider("rectangle",0,0,400,400);
        zombie.lifetime = 400;
        zombieGroup.add(zombie);
    }
}