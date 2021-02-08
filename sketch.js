const Bodies = Matter.Bodies;
const World = Matter.World;
const Engine = Matter.Engine;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

var engine, world, ground, ball, wall, dog, person
var score = 0, gameState = "play";

function preload(){
//background  = color(75,50,25)
}


function setup(){
createCanvas(800,400)
engine =  Engine.create()
world = engine.world

ground = new Ground(200,390,1890,20)
wall = new Ground(1,365,100,300)
ball = new Ball(500,200,11)
ball2 = new Ball(200,200,11)

dog = new Dog(530,10,200,50)

//person1 = new Persons (ball.body,dog.body);
check1 = new SlingShot(ball.body,ball2.body);
}

function draw(){
    background(0);
 
    Engine.update(engine);
  //console.log( ball.position.x,ball.position.y);
    ground.display()
    wall.display()
    person1.display()
    ball.display()
    ball2.display()
    check1.display();
    dog.Display()
    text(mouseX+","+mouseY, mouseX,mouseY);

}
/*
function keyPressed(){

	if(keyCode === UP_ARROW){
		Body.applyForce(ball.ball, ball.ball.position, {x:40,y:80})
		
	}
}*/