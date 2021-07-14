class Ground{
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
      stroke(255,0,127);
      fill(255,0,127);
      rect(pos.x,pos.y,this.width,this.height);
      pop();  
    }
}

class Counter{
  constructor(x,y,w,h){

      var options = {
          "isStatic":false
      }
    this.body = Bodies.rectangle(x,y,w,h,options);
    this.width = w;
    this.height = h;
    
  
  }
  display(){
    var pos = this.body.position;
    push();
    rectMode(CENTER);
    stroke(255,0,127);
    fill(255,0,127);
    rect(pos.x,pos.y,this.width,this.height);
    pop();  
  }
}