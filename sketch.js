var gameState = "play"

var road

var lamborghiniCar
var obstaclesGroup, obstacle1, obstacle2,obstacle3, obstacle4

var score = 0;

var gameOver, restart

function preload()
{   
    road = loadAnimation("Road.png");

    lamborghiniCar = loadAnimation("lamborghiniCar.png");

    obstacle1 = loadImage("obstacle1.png");
    obstacle2 = loadImage("obstacle2.png");
    obstacle2 = loadImage("obstacle3.png");
    obstacle2 = loadImage("obstacle4.png");

    restart = loadImage("restartImg.png");
}

function setup()
{
    createCanvas(400,600)

    lamborghiniCar = createSprite(70,580,20,20);
    lamborghiniCar.addAnimation(lamborghiniCar)
    lamborghiniCar.scale = 0.5

    obstaclesGroup = new Group();
}

function draw()
{
    if(gameState === "play"){
        lamborghiniCar.x = World.mouseX;
    }

    if(road.y > 400){
        road.y = height/2
    }

    if(lamborghiniCar.isTouching(obstaclesGroup)){
        gameState === "end"
    }

    else if(gameState === "end"){
        restart.visible = true;
    }

    if(mousePressedOver(restart)){
        reset();
    }

    drawSprites();
}

function spawnObstacles()
{
    if(frameCount % 60 === 0){
        var obstacle = createSprite(600,165,10,40)
        //obstacle.debug = true;
        obstacle.velocityY = -(6 + 3*score/100);
    

        //generate random obstacles
        var rand = Math.round(random(1,6))
        switch(rand) {
        case 1: obstacle.addImage(obstacle1)
                break;
        case 2: obstacle.addImage(obstacle2)
                break;
        case 3: obstacle.addImage(obstacle3)
                break;
        case 4: obstacle.addImage(obstacle4)
                break;
        default:break;        
        }

        //assign scale and lifetime of the obstacle
        obstacle.scale = 0.5;
        obstacle.lifetime = 300;
        //add each obstacle to the group
        obstaclesGroup.add(obstacle)
    }
}

function reset()
{
    gameState === play;
    gameOver.visible = false;
    restart.visible = false;



    score = 0;
}
