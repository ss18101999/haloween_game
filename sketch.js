const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Composite = Matter.Composite;
const Constraint = Matter.Constraint;

var engine, world;
var ground, ball1,ball2,platform;

function preload(){
    backgroundImg = loadImage("sprites/bg7.jpg")
    pigSnortSound = loadSound("sounds/pig_snort.mp3")
    birdFlyingSound = loadSound("sounds/bird_flying.mp3")
    birdSelectSound = loadSound("sounds/bird_select.mp3")
}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    //create ground objects
    ground = new Ground(600,400,1200,40)
    ghost1 = new Ghost(680,320,70,70);
    ghost2 = new Ghost(900,320,70,70);
    bear1 = new bear(790,350)
    pumpkin = new Pumpkin(100,100);
    log1 = new Log(790,260,300,PI/2)
    ghost3 = new Ghost(680,240,70,70)
    ghost4 = new Ghost(900,240,70,70)
    bear2 = new bear(790,220)
    log2 = new Log(790,180,300,PI/2)
    
    ghost5 = new Ghost(790,180,70,70);
    log3 = new Log(740,120,150,PI/7);
    log4 = new Log(850,120,150,-PI/7);

    sanidhya = new SlingShot(pumpkin.body,{x:200,y:215})

    f=0

    score = 0
  
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    // to display the objects
    ground.display()
    pumpkin.display()
    log1.display();
    ghost1.display();
    ghost2.display();
    bear1.display();

    ghost3.display();
    ghost4.display();
    bear2.display();
    log2.display();

    ghost5.display();
    log3.display();
    log4.display();

    sanidhya.display();

    if(f==1){
        Matter.Body.setPosition(pumpkin.body,{x:mouseX,y:mouseY})
    }

    bear1.score();
    bear2.score();
    textSize(30)
    fill("white")
    text("Score  "+score,width-300,50)

}

function mouseDragged(){
    f=1
    birdSelectSound.play()
    Matter.Body.setPosition(pumpkin.body,{x:mouseX,y:mouseY})
    console.log("Mouse is dragged!!")
}
function mouseReleased(){
    birdFlyingSound.play()
    this.sanidhya.sling.bodyA=null
    f=0
}
function keyPressed(){
    if(keyCode==32 && pumpkin.body.speed<1){
        this.sanidhya.sling.bodyA=pumpkin.body
    }
}