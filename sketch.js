var block1, block2, block3, block4;
var box;

function setup(){
  createCanvas(400,400);
  block1 = createSprite(50,380,80,20);
  block1.shapeColor = "blue"
  
  block2 = createSprite(150,380,80,20);
  block2.shapeColor = "green"
  
  block3 = createSprite(250,380,80,20);
  block3.shapeColor = "red"
  
  block4 = createSprite(350,380,80,20);
  block4.shapeColor = "yellow"
  
  box = createSprite(200,200,10,10);
 
}

function draw(){
  background("white")
  
  if(keyDown("left")){
    box.velocityX = -4
  }
  
   
  if(keyDown("right")){
    box.velocityX = 4
  }
  
   
  if(keyDown("up")){
    box.velocityY = -4
  }
  
   
  if(keyDown("down")){
    box.velocityY = 4
  }
  
if(box.isTouching(block1)){
  box.shapeColor = "blue"
}
  
  
if(box.isTouching(block2)){
  box.shapeColor = "green"
}
  
  
if(box.isTouching(block3)){
  box.shapeColor = "red"
}
  
  
if(box.isTouching(block4)){
  box.shapeColor = "yellow"
} 
  
drawSprites();
}
