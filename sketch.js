var fixedrect, movingrect




function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  fixedrect= createSprite(500,350,10,30)
  fixedrect.shapeColor="red"
  movingrect= createSprite(300,250,20,30)
  movingrect.shapeColor="red"
}

function draw() {
  background(255,255,255);  
  drawSprites();
  movingrect.x=World.mouseX
  movingrect.y=World.mouseY
  if (movingrect.x-fixedrect.x<movingrect.width/2+fixedrect.width/2 &&
    fixedrect.x-movingrect.x<movingrect.width/2+fixedrect.width/2 &&
    movingrect.y-fixedrect.y<movingrect.height/2+fixedrect.height/2 &&
    fixedrect.y-movingrect.y<movingrect.height/2+fixedrect.height/2
    ) {
    movingrect.shapeColor="yellow"
    fixedrect.shapeColor="blue"
  }

  else{
    movingrect.shapeColor="red"
    fixedrect.shapeColor="red"
  }
  

}