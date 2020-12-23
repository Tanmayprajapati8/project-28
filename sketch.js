
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var ground;
var tree;
var boy;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8;
var rope;
var stone;
function preload() {
	tree = loadImage("tree.png");
	boy = loadImage("boy.png");
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(500, 680, 1000, 10);
	// tree = new Tree(700, 440, 500, 500);
	// boy = new Boy(150, 600, 200, 250);

	mango1 = new Mango(600, 400, 60, 60);
	mango2 = new Mango(700, 300, 40, 40);
	mango3 = new Mango(800, 350, 44, 44);
	mango4 = new Mango(500, 400, 50, 50);
	mango5 = new Mango(880, 350, 66, 66);
	mango6 = new Mango(750, 250, 30, 30);
	mango7 = new Mango(650, 350, 48, 48);
	mango8 = new Mango(600, 300, 50, 50);
	stone = new Stone(100, 600, 50, 50);

	rope = new Rope(stone.body, { x: 86, y: 540 });


	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background("green");
	image(tree, 400, 190, 500, 500);
	image(boy, 50, 480, 200, 250);

	ground.display();
	// tree.display();
	// boy.display();
	mango1.display();
	mango3.display();
	mango2.display();
	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();
	mango8.display();
	stone.display();
	rope.display();
	detectCollision(stone, mango1);
	detectCollision(stone, mango2);
	detectCollision(stone, mango3);
	detectCollision(stone, mango4);
	detectCollision(stone, mango5);
	detectCollision(stone, mango6);
	detectCollision(stone, mango7);
	detectCollision(stone, mango8);
	

	drawSprites();

}
function mouseDragged() {
	Matter.Body.setPosition(stone.body, { x: mouseX, y: mouseY });
}
function mouseReleased() {
	rope.fly();
}


function detectCollision(body1, body2) {
	MangoBodyPosition = body2.body.position;
	stoneBodyPosition = body1.body.position;

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, MangoBodyPosition.x, MangoBodyPosition.y)
	if (distance <=2*( body2.body.circleRadius + body1.body.circleRadius)) {
		Matter.Body.setStatic(body2.body, false);

	}
}
