class rope {
    constructor(bodyA, bodyB, offsetX, offsetY){
        this.offsetX=offsetX;
        this.offsetY=offsetY;
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            pointB:{x:this.offsetX, y:this.offsetY},
            stiffness: 0.1, 
            length:15
        }
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }
display(){
  strokeWeight(15);
  var pointA = this.rope.bodyA.position;
  var pointB = this.rope.bodyB.position;
  var anchor1X = pointA.x;
  var anchor1Y = pointA.y;

  var anchor2X = pointB.x;
  var anchor2Y = pointB.y;
  fill (255);
  stroke(255);
  line(anchor1X, anchor1Y, anchor2X, anchor2Y);
}
}