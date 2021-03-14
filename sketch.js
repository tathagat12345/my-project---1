var luigi,luigiimg,luigismall,luigismallimg,bg,bgimg,princess,princessimg,
gameover,gameoverimg,goomba,goombaimg,mushroom,mushroomimg,jumping,jumpingimg,
coin,coinimg,blocks,blocksimg,superblock,superblockimg,pole,poleimg,invisible;
var blockgroup,opblockgroup,goombagroup,polegroup,invisiblegroup,invisibleagroup;
var gameState="play";
var score=0;
function preload()
{
	luigiimg=loadAnimation("runningsmall.gif")
	bgimg=loadImage("bg.png")
	princessimg=loadImage("princess.png")
	superblockimg=loadImage("superblock.png")
	poleimg=loadImage("pole.png")
	blocksimg=loadImage("blocks.png")
	coinimg=loadAnimation("coin.gif")
	goombaimg=loadAnimation("goomba.gif")
	gameoverimg=loadImage("gmovr.jpg")
	mushroomimg=loadImage("mushroom.png")
    luigismallimg=loadAnimation("runningsmall.gif")
	jumpingimg=loadAnimation("jump.gif")
}

function setup() {
	createCanvas(800,600);
    bg=createSprite(400,250)
    bg.addImage(bgimg)
	bg.scale=2;	
	bg.velocityX=-2;
    luigi=createSprite(70,250)
	luigi.addAnimation("luigismallimg",luigismallimg)
	luigi.addAnimation("jumpingimg",jumpingimg)
	luigi.scale=0.5
	ground=createSprite(400,520,800,10)
	gameover=createSprite(400,300);
	gameover.addImage(gameoverimg);
	gameover.scale=0.5;
	gameover.visible=false;
    blockgroup=new Group();
	opblockgroup=new Group();
	goombagroup=new Group();
	polegroup=new Group();
	invisiblegroup=new Group();
	invisibleagroup=new Group();
}


function draw() {
  rectMode(CENTER);
  background(0);
  if(gameState==="play"){
	  score=score+Math.round(getFrameRate()/100)
  if(bg.x-200<0){
	  bg.x=bg.width/2;
  }
  if(keyDown("space")){
	  luigi.velocityY=-10
	 // luigi.changeAnimation("jumpingimg",jumpingimg);
  }
  luigi.velocityY+=0.5;
  luigi.collide(ground);
  for(var i=0;i<opblockgroup.length;i++){
  if(luigi.isTouching(opblockgroup.get(i))){
	opblockgroup.get(i).addAnimation("coinimg",coinimg)
	opblockgroup.get(i).changeAnimation("coinimg",coinimg)
  }
   }
   if(luigi.isTouching(invisiblegroup)){
	   luigi.collide(invisible);
	
   }
   if(luigi.isTouching(invisibleagroup)){
	   luigi.collide(invisiblea);
   }
   if(luigi.isTouching(goombagroup)||luigi.x<0){
gameState="end"	;
   }
  spawnblocks();
  spawnopblocks();
  spawngoomba();
  spawnpole();
}
if(gameState==="end"){

	gameover.visible=true;
luigi.velocityY=0;
bg.velocityX=0;
goombagroup.setVelocityXEach(0);
polegroup.setVelocityXEach(0);
opblockgroup.setVelocityXEach(0);
blockgroup.setVelocityXEach(0);
invisibleagroup.setVelocityXEach(0);
invisiblegroup.setVelocityXEach(0);
goombagroup.destroyEach();
polegroup.destroyEach();
opblockgroup.destroyEach();
blockgroup.destroyEach();
invisibleagroup.destroyEach();
invisiblegroup.destroyEach();
}
  drawSprites();
  fill(255);
  textSize(20);
  text("SCORE: "+score,500,50)
 
}

  function spawnblocks(){
	  if(frameCount%420===0){
		  blocks=createSprite(800,random(200,300))
		  blocks.addImage(blocksimg)
		  blocks.velocityX=-2;
		  blocks.scale=0.5
		  invisible=createSprite(800,200)
		invisible.y=blocks.
		y-30;
		invisible.x=blocks.x;
		invisible.width=200;
		invisible.height=2;
		invisible.velocityX=-2;
		invisiblegroup.add(invisible);
		invisible.lifetime=400;
		  blocks.lifetime=400;
        blockgroup.add(blocks);
	  }
	  
  }
  function spawnopblocks(){
	if(frameCount%650===0){
		opblocks=createSprite(800,random(200,300))
		opblocks.debug=true;
		opblocks.setCollider("rectangle",0,0,65,65)
		opblocks.addImage(superblockimg)
		opblocks.velocityX=-2;
		opblocks.scale=0.1;
		opblocks.lifetime=400;
		opblockgroup.add(opblocks);
		
	}
	
}
function spawngoomba(){
	if(frameCount%700===0){
		goomba=createSprite(800,500)
		goomba.addAnimation("goombaimg",goombaimg)
		goomba.velocityX=-5;
		goomba.scale=0.1;
		goomba.lifetime=160;
		goombagroup.add(goomba);
	}

}
function spawnpole(){
	if(frameCount%900===0){
		pole=createSprite(800,350)
		pole.addImage(poleimg)
		pole.velocityX=-2;
		pole.scale=0.5;
		invisiblea=createSprite(800,350)
		invisiblea.y=pole.y-170;
		invisiblea.x=pole.x-20;
		invisiblea.width=200;
		invisiblea.height=2;
		invisiblea.velocityX=-2;
		invisiblea.shapeColor="red"
		invisibleagroup.add(invisiblea);
		invisiblea.lifetime=400;
		pole.lifetime=400;
		polegroup.add(pole);
	}
	
}
 



