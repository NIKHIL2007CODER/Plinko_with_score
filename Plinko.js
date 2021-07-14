class Plinko{
    constructor(x,y,r){

        var options = {
            "isStatic":true
        }
      this.body = Bodies.circle(x,y,r,options);
      this.radius = r
      
      World.add(world,this.body);
    }
    display(){
      var pos = this.body.position;
      push();
      ellipseMode(CENTER);
      stroke(255,255,255);
      fill(255,67);
      ellipse(pos.x,pos.y,10); 
      pop(); 
    }
}