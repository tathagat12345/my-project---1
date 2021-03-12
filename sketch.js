var luigi,luigiimg,luigismall,luigismallimg,bg,bgimg,princess,princessimg,gameover,gameoverimg,goomba,goombaimg,mushroom,mushroomimg,jumping,jumpingimg,coin,coinimg,blocks,blocksimg,superblock,superblockimg,pole,poleimg;
var blockgroup,opblockgroup,goombagroup,polegroup;
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
}

function setup() {
	createCanvas(800,600);
    bg=createSprite(400,250)
    bg.addImage(bgimg)
	bg.scale=2;	
	bg.velocityX=-2;
    luigi=createSprite(70,250)
	luigi.addAnimation("luigismallimg",luigismallimg)
	luigi.scale=0.5
	ground=createSprite(400,520,800,10)
    blockgroup=new Group();
	opblockgroup=new Group();
	goombagroup=new Group();
	polegroup=new Group();
	

}


function draw() {
  rectMode(CENTER);
  background(0);
  if(bg.x-200<0){
	  bg.x=bg.width/2;
  }
  if(keyDown("space")){
	  luigi.velocityY=-10
  }
  luigi.velocityY+=0.5
  luigi.collide(ground);
  //spawnblocks();
  //spawnopblocks();
  //spawngoomba();
  spawnpole();
  drawSprites();
 
}

  function spawnblocks(){
	  if(frameCount%250===0){
		  blocks=createSprite(800,random(200,300))
		  blocks.addImage(blocksimg)
		  blocks.velocityX=-5;
		  blocks.scale=0.5
		  blocks.lifetime=160;
        blockgroup.add(blocks);
	  }
	  
  }
  function spawnopblocks(){
	if(frameCount%100===0){
		opblocks=createSprite(800,random(200,300))
		opblocks.addImage(superblockimg)
		opblocks.velocityX=-5;
		opblocks.scale=0.1;
		opblocks.lifetime=160;
		opblockgroup.add(opblocks);
	}
	
}
function spawngoomba(){
	if(frameCount%100===0){
		goomba=createSprite(800,500)
		goomba.addAnimation("goombaimg",goombaimg)
		goomba.velocityX=-5;
		goomba.scale=0.1;
		goomba.lifetime=160;
		goombagroup.add(goomba);
	}

}
function spawnpole(){
	if(frameCount%800===0){
		pole=createSprite(800,350)
		pole.addImage(poleimg)
		pole.velocityX=-2;
		pole.scale=0.5;
		pole.lifetime=400;
		polegroup.add(pole);
	}
	
}




