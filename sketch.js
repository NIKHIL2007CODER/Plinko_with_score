const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;



var engine,world;

var particle;
var plinkos = [];
var divisions = [];

var count = 5 ;
var score = 0;

var divisionHeight = 300;

var PLAY = 1;
var END = 0;

var gameState = PLAY;



function setup() {
 var canvas = createCanvas(1000,629);

 engine = Engine.create();
 world = engine.world;

 ground1 = new Ground(width/2,625,width,10);
 ground2 = new Ground(width/2,4,width,10);
 ground3 = new Ground(4,height/2,10,height);
 ground4 = new Ground(596,height/2,10,height);
 ground5 = new Ground(995,height/2,10,height);
  

  
 

 division1 = new Division(300,615,600,12);

 for (var i = 15; i <=600 ; i = i + 95){
  divisions.push(new Division(i, height-divisionHeight/2,12,divisionHeight));

 }

 for (var p = 25; p <=600; p=p+50){
   plinkos.push(new Plinko(p,75,8));
 }
 
 for (var p = 0; p <=590; p=p+50){
  plinkos.push(new Plinko(p,115,8));
}

for (var p = 25; p <=600; p=p+50){
  plinkos.push(new Plinko(p,155,8));
}

for (var p = 0; p <=590; p=p+50){
  plinkos.push(new Plinko(p,195,8));
}

for (var p = 25; p <=600; p=p+50){
  plinkos.push(new Plinko(p,235,8));
}




 

}

function draw() {
  background(10); 
  
  push();
  textSize(50);
  fill(255,255,255);
  stroke(0,105,255);
  strokeWeight(5);
  textFont("HARRINGTON");
  text("SCORE:" + score , 630 , 70);
  pop();


  push();
  textSize(50);
  fill(255,255,255);
  stroke(0,105,255);
  strokeWeight(5);
  textFont("HARRINGTON");
  text("BALLS:" + count , 630 , 150);
  pop();



  push();
  textSize(25);
  fill(255,0,0);
  stroke(255,0,0);
  textFont("HARRINGTON");
  text("_INSTRUCTION_" , 630 , 210);
  text("1:",630,250);
  text("2:",630,290);
  pop();

  push();
  textSize(23);
  fill(255,255,0);
  stroke(255,255,0);
  textFont("HARRINGTON");
  text("You have only 5 balls.",650,250);
  text("Use Left click for 1 ball.",655,290);
  pop();
 
 
  
  Engine.update(engine);

  for (var i = 0; i < divisions.length; i++){
  
    divisions[i].display();

  }

  division1.display();
  
  for ( var p = 0; p < plinkos.length; p++){
    plinkos[p].display();
  }

  

  console.log(mouseX);
  if(particle!=null)
  {
     particle.display();
      
      if (particle.body.position.y>590)
      {
            if (particle.body.position.x < 200) 
            {
                score=score+500;      
                particle=null;
                

                if ( count<= 0){
                  gameState = END;
                 }                         
            }


            else if (particle.body.position.x < 400 && particle.body.position.x > 200 ) 
            {
                  score = score + 100;
                  particle=null;
                  

                  if ( count<= 0){
                   gameState =END;
                  }

            }
            else if (particle.body.position.x < 600 && particle.body.position.x > 400 )
            {
                  score = score + 500;
                  particle=null;
                 

                  if ( count<= 0){
                        gameState =END;
                      }

            }      
            
      }

    }


  ground1.display();
  ground2.display();
  ground3.display();
  ground4.display();
  ground5.display();
  
 
  if(gameState === END){
    push();
    textSize(150);
    textFont("HARRINGTON");
    fill(0,127,107);
    stroke("137,36");
    strokeWeight(6);
    text("GAME OVER", 60 , 320);
    pop();

    push();
    textSize(60);
    textFont("HARRINGTON");
    fill(255,170,0);
    stroke("137,36");
    strokeWeight(3);
    text(" 🥳YOU HAVE SCORED " + score + "🥳", 80 , 400);
    pop();
  }

  //touched(particles,counter);

  
}

function mousePressed(){
  if(gameState!=="end")
  {
      count--;
     particle=new Particles(mouseX, 10, 10, 10); 
  }   
}
