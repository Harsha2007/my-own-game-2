var counter1=15
var counter2=15
var counter3=15
var counter4=15
var counter5=15
function preload(){

  bg=loadImage('images/background.PNG')
  tableImage=loadImage('images/table.png')
  bottle1Image=loadImage('images/bottle1.png')
  bottle2Image=loadImage('images/bottle 2.png')
  bottle3Image=loadImage('images/bottle 3.png')
  bottle4Image=loadImage('images/bottle 4.png')
  bottle5Image=loadImage('images/bottle 5.png')
  rifleImage=loadImage('images/rifle.png')
  bulletImage=loadImage('images/bullet.png')
  aimImage=loadImage('images/aim.png')

} 

function setup() {
  createCanvas(displayWidth,displayHeight)
 table= createSprite(700, 300, 50, 50);
 table.addImage(tableImage)
 table.scale=4
 bottle1=createSprite(400,115)
 bottle1.addImage(bottle1Image)
 bottle1.scale=0.4
 //bottle1.debug=true
bottle1.setCollider('rectangle',0,0,20,50)

 bottle2=createSprite(550,125)
 bottle2.addImage(bottle2Image)
 bottle2.scale=0.3
 bottle2.setCollider('rectangle',0,0,20,50)

 bottle3=createSprite(700,115)
 bottle3.addImage(bottle3Image)
 bottle3.scale=0.5
 bottle3.setCollider('rectangle',0,0,20,50)

 bottle4=createSprite(850,115)
 bottle4.addImage(bottle4Image)
 bottle4.scale=0.3
 bottle4.setCollider('rectangle',0,0,20,50)


 bottle5=createSprite(1000,125)
 bottle5.addImage(bottle5Image)
 bottle5.scale=0.6
 bottle5.setCollider('rectangle',0,0,20,50)


 rifle=createSprite(650,450)
 rifle.addImage(rifleImage)
 rifle.scale=0.6
 bullet=createSprite(rifle.x+50,rifle.y-100)
bullet.visible=false

aim=createSprite(rifle.x+50,rifle.y-300)
 aim.addImage(aimImage)
 aim.scale=0.5
}


function draw() {
  background(0);  
  rifle.x=mouseX
  //console.log(counter1)
  if(frameCount%30===0 && counter1>0)
  counter1=counter1-1

  if(frameCount%30===0 && counter2>0)
  counter2=counter2-1
  
  if(frameCount%30===0 && counter3>0)
  counter3=counter3-1

  if(frameCount%30===0 && counter4>0)
  counter4=counter4-1

  if(frameCount%30===0 && counter5>0)
  counter5=counter5-1
  
  if(bullet.isTouching(bottle1) && counter1>0) 
  bottle1.visible=false
else
bottle1.visible=true

if(bullet.isTouching(bottle2) && counter2>0) 
bottle2.visible=false
else
bottle2.visible=true

if(bullet.isTouching(bottle3) && counter3>0) 
bottle3.visible=false
else
bottle3.visible=true


if(bullet.isTouching(bottle4) && counter4>0) 
bottle4.visible=false
else
bottle4.visible=true


if(bullet.isTouching(bottle5) && counter5>0) 
bottle5.visible=false
else
bottle5.visible=true

aim.x=rifle.x+50
aim.y=rifle.y-300

  drawSprites();
}

function mouseClicked(){

  bullet=createSprite(rifle.x+50,rifle.y-100)
  bullet.addImage(bulletImage)
  bullet.scale=0.1
 
  bullet.velocityY=-5
}