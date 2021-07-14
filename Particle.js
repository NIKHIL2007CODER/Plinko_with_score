class Particles{
    constructor(x,y,r){

        var options = {
            restitution:0.4,
            isStatic:false
        }
        this.radius = r;
      this.body = Bodies.circle(x,y,this.radius,options);
      this.color=color(random(0,255),random(0,255),random(0,255))
      
      
      World.add(world,this.body);
    }
    display(){
      var pos = this.body.position;
     // var angle = this.body.angle;

      push();
      translate(pos.x,pos.y);
     // rotate(angle);
      ellipseMode(CENTER);
      fill(this.color);
      ellipse(0,0,13);
      pop();  
    }
}