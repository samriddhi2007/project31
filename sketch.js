var ground
var division
var plinko
var particle
function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world
  var options = {
    restitution : 1
  }
  ground = new Ground(400,370,800,30)
  division = new Division(100,00,50,10)
  plinko = new Plinko(400,200,10)
  particle = new Particle(100,100,20)
}

function draw() {
  background(255,255,255);  
  ground.display();
  division.dsplay();
  drawSprites();
}