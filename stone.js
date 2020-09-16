class Stone{
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            isStatic: false,
            density:1.2,
            friction: 1,
            restitution:0,
            stiffness: 0.04,
            length: 10
        }
        this.stone = Constraint.create(options);
        World.add(world,this.stone );
    }

   fly (){
     this.stone.bodyA = null;
   }
    display(){
        if(this.stone.bodyA){        
          var pointA = this.stone.bodyA.position;
          var pointB = this.sling.bodyB.position;
          strokeWeight(4);
          line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}