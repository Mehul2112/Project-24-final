
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(800,height,1600,20)
	ball = new paper(200,50,40)
	d1 = new Dust(1400,650,100,PI/0);
	d2 = new Dust(1200,650,100,PI/0);
	d3 = new HoriDust(1300,690,200,20);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  


  d3.display();
  d1.display();
  d2.display();
  ball.display();
  ground.display();


}

function keyPressed(){

	if(keyCode === UP_ARROW){



		Matter.Body.applyForce(ball.body,ball.body.position,{x:85, y:-85});
	}
}



