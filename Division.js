class Division{
    constructor(x,y,w,h){

        var options = {
            "isStatic":true
        }
      this.body = Bodies.rectangle(x,y,w,h,options);
      this.width = w;
      this.height = h;
      
      World.add(world,this.body);
    }
    display(){
      var pos = this.body.position;
      push();
      rectMode(CENTER);
      stroke(255,255,255);
      strokeWeight(2.5);
      fill(255,67);
      rect(pos.x,pos.y,this.width,this.height); 
      pop(); 
    }
}