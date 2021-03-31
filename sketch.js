var man , manimg;
var plman , plmanimg;
var dog , dogimg;

var man2 , manimg2;
var plman2 , plmanimg2;
var dog2 , dogimg2;

var bck ;
var block;
var ground;

var edges;


function preload(){

bck = loadImage("IMAGES/abcd.jpg");

manimg = loadAnimation("IMAGES/T1.png","IMAGES/T2.png","IMAGES/T3.png","IMAGES/T4.png",
"IMAGES/T5.png","IMAGES/T6.png","IMAGES/T7.png","IMAGES/T8.png");

plmanimg = loadAnimation("IMAGES/P1.png","IMAGES/P2.png","IMAGES/P3.png","IMAGES/P4.png",
"IMAGES/P5.png","IMAGES/P6.png","IMAGES/P7.png","IMAGES/P8.png");

/*dogimg = loadAnimation("IMAGES/D1.png","IMAGES/D2.png","IMAGES/D3.png","IMAGES/D4.png",
"IMAGES/D5.png","IMAGES/D6.png","IMAGES/D7.png","IMAGES/D8.png","IMAGES/D9.png","IMAGES/D10.png","IMAGES/D11.png","IMAGES/D12.png");*/

/*manimg2 = loadAnimation("IMAGES/T9.png","IMAGES/T10.png","IMAGES/T11.png","IMAGES/T12.png",
"IMAGES/T13.png","IMAGES/T14.png","IMAGES/T15.png","IMAGES/T16.png");*/

plmanimg2 = loadAnimation("IMAGES/P9.png","IMAGES/P10.png","IMAGES/P12.png","IMAGES/P13.png","IMAGES/P14.png","IMAGES/P15.png",
"IMAGES/P16.png");

dogimg2 = loadAnimation("IMAGES/D13.png","IMAGES/D14.png","IMAGES/D15.png","IMAGES/D16.png","IMAGES/D17.png","IMAGES/D18.png",
"IMAGES/D19.png","IMAGES/D20.png","IMAGES/D21.png","IMAGES/D22.png","IMAGES/D23.png","IMAGES/D24.png");



   
}

function setup(){

createCanvas(1000,700);
edges = createEdgeSprites();

plman.addAnimation("walking",plmanimg);
plman.addAnimation("leftwalking",plmanimg2);


man=createSprite(500,250)
man.addAnimation("running",manimg);
man.velocityX = 2;



/*man2=createSprite(600,500)
man2.addAnimation("running2",manimg2);
man2.velocityX = 2;*/

/*dog=createSprite(420,540)
dog.addAnimation("jogging",dogimg);
dog.velocityX = 2;*/
man.debug=true
man.setCollider("circle",0,0,20)

}

function draw(){

    
    background(bck);

    //floors()
    if(frameCount%150 === 0){
        ground = createSprite(width/2,700,1000,5);
        ground.velocityY=-7
        }

    if(frameCount%150 === 0){
        plman=createSprite(0,0);
        plman.x = ground.x;
        plman.y = ground.y-3;
        plman.addAnimation("walking",plmanimg);
        plman.velocityX = 8;
        plman.collide(ground);


        dog2=createSprite(0,0)
        dog2.x = ground.x;
        dog2.y = ground.y-3;
        dog2.velocityX = -8;
        dog2.addAnimation("jogging2",dogimg2);
        dog2.collide(ground);

         if(plman.isTouching(edges)){
         plman.changeAnimation("leftwalking",plmanimg2);
         }  
        }

            


    spawnblocks();
    

    /*if (man.isTouching(block4)){
        man.x=block4.x
        man.y=block4.y
        man.collide(block4)
    }*/

    //man.collide(block4)
    drawSprites();
}




function spawnblocks(){
    if(frameCount%15 === 0){
    block=createSprite(0,700,150,5);
    block.velocityY=-7
    block.x=Math.round(random(75,925))
    block.shapeColor="black"
    
    block1=createSprite(0,700,150,5)
    block1.velocityY=-7
    block1.x=Math.round(random(75,925))
    block1.shapeColor="black"

    block2=createSprite(0,700,150,5)
    block2.velocityY=-7
    block2.x=Math.round(random(75,925))
    block2.shapeColor="black"
    
    
    block3=createSprite(0,700,150,5)
    block3.velocityY=-7
    block3.x=Math.round(random(75,925))
    block3.shapeColor="black"

    block4=createSprite(0,700,150,5)
    block4.velocityY =-7
    block4.x=Math.round(random(75,925))
    block4.shapeColor="black"


    
}
}

