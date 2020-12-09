//Create variables here
var dog, happDog, dogImg, happyDogImg;
var database;
var foodS, foodStock;

function preload()
{
 dogImg=loadImage("images/dogImg.png");
 happyDogImg=loadImage("images/dogImg1.png");
	//load images here
}

function setup() {
	createCanvas(500, 500);
  dog = createSprite(150,160,40,40);
  dog.addImage(dogImg);
  dog.scale = 0.15;
  database = firebase.database();
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
  background(46,139,87)
 
  //add styles here
  if(keyWentDown(UP_ARROW)) {
    writeStock(foodS);
    dog.addImage(happyDogImg);
  }
    drawSprites();
   text("Food remaining"+ foodS, 170, 200);
    textSize(10);
    fill("green");
    stroke(1);
    text("Ire's Virtual pet.",400,50);
  
}
function readStock(data) {
  foodS=data.val();
}
function writeStock(x) {
  if (x<= 0) {
    x = 0;
  }
  else {
    x = x-1;
  }
   

database.ref('/').update({Food:x})
}
