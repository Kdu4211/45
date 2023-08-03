
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
let nave, naveImg;
let asteroide, asteroideImg, asteroideImg2;
let parede1, parede2, parede3, parede4;

function preload(){
	naveImg = loadImage("img/nave.png");
	asteroideImg = loadImage("img/asteroide.png");
	asteroideImg2 = loadImage("img/asteroide.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	nave = createSprite(350,500,20,20);
	nave.addImage(naveImg);
	nave.scale = 0.2;

	parede1 = createSprite(400,1,900,20);
	parede2 = createSprite(400,700,900,20);
	parede3 = createSprite(1,350,20,900);
	parede4 = createSprite(800,350,20,900);
	parede1.visible = false;
	parede2.visible = false;
	parede3.visible = false;
	parede4.visible = false;

	
	asteroide = createSprite(500,20,20,20);
	asteroide.addImage(asteroideImg);
	asteroide.scale = 0.3;


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  nave.collide(parede1);
  nave.collide(parede2);
  nave.collide(parede3);
  nave.collide(parede4);

  moviment();
//   spawnObjects();

  drawSprites();
}

function moviment(){
	if(keyDown(UP_ARROW)){
		nave.y -=10;
	}
	if(keyDown(DOWN_ARROW)){
		nave.y +=10;
	}
	if(keyDown(LEFT_ARROW)){
		nave.x -=10;
	}
	if(keyDown(RIGHT_ARROW)){
		nave.x +=10;
	}
}

// function spawnObjects(){
// 	if(frameCount % 60 === 0) {
		
		
// 	}
	
// }