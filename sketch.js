function setup() {
  createCanvas(800,400);
  ground= new Ground(750,200,800,50);
  stand = new Ground (600,35,15,5);
  block1 = new block(330,235,40,30);
  block2 = new block(360,235,40,30);
  block3 = new block(390,235,40,30);
  block4 = new block(420,235,40,30);
  block5 = new block(450,235,40,30);

  block6 = new block(360,195,40,30);
  block7 = new block(390,195,40,30);
  block8 = new block(360,195,40,30);
  block9 = new block(420,195,40,30);

  block10 = new block(390,155,40,30);
  polygon = bodies.circle(50,200,20);
  World.add(world, polygon);
  slingShot = new SlingShot(this.polygon,{x:100,y:200});

  

  createSprite(400, 200, 50, 50);
}

function draw() {
  block1.shapeColor("blue");
  block2.shapeColor("blue");
  block3.shapeColor("blue");
  block4.shapeColor("blue");
  block5.shapeColor("blue");

  block6.shapeColor("pink");
  block7.shapeColor("pink");
  block8.shapeColor("pink");
  block9.shapeColor("pink");

  block10.shapeColor("yellow");

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();

  background(255,255,255);
  image(polygon_img,polygon,position.x,position.y,40,40) 
  ground.display();
  stand.display();
  drawSprites();

}
function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}
function mouseReleased(){
  slingshot.fly();
}