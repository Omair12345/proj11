  var path,pathImg;
  var boy,boyImg;
  var left
  var right
  
  function preload(){
    //pre-load images
    pathImg = loadImage("path.png")
    boyImg = loadAnimation("Runner-1.png","Runner-2.png")
  }

  function setup(){
    createCanvas(400,400);
    //create sprites here
    path = createSprite(200,200,30,30)
    path.addImage("image",pathImg)
    path.scale=1.2
    path.velocityY=4

    boy = createSprite(180,340,30,30)
    boy.addAnimation("animation",boyImg)
    boy.scale=0.05
    
    
    edges = createEdgeSprites()
    left = createSprite(0,0,100,800)
    left.visible=false

    right = createSprite(410,0,100,800)
    right.visible=false


  }

  function draw() {
    background(0);
    if(path.y>400){
      path.y = path.height/2
    }
  path.velocityY=4
       
  boy.x=mouseX
  boy.collide(left)
  boy.collide(right)
  boy.collide(edges[3])
    drawSprites()
  }
