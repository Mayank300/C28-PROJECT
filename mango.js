
class Mango {
  constructor(x, y, width, height) {
    var options = {
      isStatic    : true, 
      restitution : 0,
      friction    : 1,
         
    }
    this.body = Bodies.rectangle(x, y, width, height,options);
    this.image = loadImage("sprites/mango.png")
     
    World.add(world,this.body);
  }
  display(){
    var pos =this.body.position;
    rectMode(CENTER);
    rect(pos.x, pos.y, this.width, this.height);
  } 
}
