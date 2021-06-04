const Engine= Matter.Engine;
const World= Matter.World;
const Bodies=Matter.Bodies;

const Constraint=Matter.Constraint;

let engine;
let world;

var tower;
var ground;
var cannon,angle;
var cannonball;


var backImg;

function preload()
{
 backImg=loadImage("assets/background.gif");
}

function setup()
{
	createCanvas(1200,600);

	engine=Engine.create();
	world=engine.world;

	tower=new Tower(150,380,160,400);

	//ground=new Ground(200,490,500,30);

	angle= -PI/4;

	cannon=new Cannon(180,110,50,50,angle);

	cannonball=new CannonBall(cannon.x,cannon.y);

	rectMode(CENTER);
	ellipseMode(RADIUS);

}

function draw()
{
	background("grey");
    image(backImg,0,0,width,height);

    Engine.update(engine);

	tower.display();
	//ground.display();
	cannon.display();
	cannonball.display();


}

function keyReleased()
{
	if(keyCode===DOWN_ARROW)
	{
		cannonball.shoot();
	}
}