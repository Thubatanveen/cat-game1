var cat,house,fish,milk;
var catImg;
var houseImg;
var fishImg;
var milkImg;
var gameState = "play"

function preload(){
catImg = loadImage("cat 12.jpg","cat 11.png");
milkImg = loadImage("milk.jpg");
fishImg = loadImage("fish.png");
houseImg=loadImage("house.jpg");
}

function setup() {
    createCanvas(600,600);
   house= createSprite(300,300);
   house.addImage("house",houseImg);
    house.velocityY = 1;
    

   milkGroup = new Group();
   fishGroup = new Group();
}

function draw() {
    background(255);
    if(house.y >400 ) {
         house.y = 300
       } 
     
     if (gameState === "play") {
       
       if(keyDown("left_arrow")){
           cat.x = cat.x - 3;
   
         // write a code to move left when left arrow is pressed
       }
       if(keyDown("right_arrow")){
     
             cat.x =cat.x + 3;
   
         // write a code to move left when right arrow is pressed
         
       }
       if(keyDown("space")){
            cat.velocityY = -10;
    }

if(fishsGroup.isTouching(cat)){
    cat.velocityY = 0;
      }
if(milksGroup.isTouching(cat)){
   cat.velocityY = 0;
      }
drawSprites();
}
function spawnfish()
 {
  //write code here to spawn the fish
  if (frameCount % 240 === 0) {
    var fish = createSprite(200, -50);
    var milk = createSprite(200,10);
   
    //add the random function
    //
    fish.x = Math.round(random(120,400));
    milk.x = milk.x;
    fish.addImage(fishImg);
    milk.addImage(milkImg);
    
   fish.velocityY = 1;
    milk.velocityY = 1;
    
 //assign lifetime for the  fish, milk 

 fish.lifetime = 800;
 milk.lifetime = 800;
 
 //add each obstacle to the group obstaclesGroup.add(obstacle);here  obstacle are milk, fish
 
  milksGroup.add(milk);
fishsGroup.add(fish);

  }
 }
}
