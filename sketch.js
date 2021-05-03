//Create variables here
var dog,dogImg,dogImg1,database,foodS,foodStock;
function preload()
{
	//load images here
  dogImg = loadImage("images/dogImg.png");
  dogImg1 = loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(600, 500);
  database = firebase.database();
  foodStock = database.ref("food");
  foodStock.on("value",readStock);
  foodStock.set(20);

  dog = createSprite(250,350,10,50);
  dog.addImage(dogImg);
  dog.scale = 0.3;
}


function draw() {  
background("green")
if(foodS! == undefined){
  textSize(20);
  fill(255)
  text("Note: Press UP_ARROW to feed DRAGO MILK",50,50)
  text("food Remaining : "+foodS,150,150);

if(keyWentUP(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dogImg1);
}


if(keyWentUP(UP_ARROW)){
  dog.addImage(dogImg);
}

if(foodS === 0){
  foodS = 20;
}
drawSprites();
}
 }

function  writeStock(x){
  if(x<=0){
    x = 0;
  }
  else{
    x = x-1;
  }
  database.ref('/').update({
    Food : x
  })
}

