class Bob{
    constructor(x, y, radius){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        
        this.radius = radius;
        this.body = Bodies.circle(x, y, radius, options);
        
        World.add(world, this.body);
        this.radius = radius;
        
    }
    display(){
        var pos = this.body.position;
        //alert(this.body.position.x);
        //alert(this.body.position.y);
       // alert(pos);
        push();
        //alert(pos.x);
        translate(pos.x, pos.y);
        ellipseMode(CENTER);
        stroke("green");
        fill("green");
        ellipse(0, 0, this.radius+20, this.radius+20);
        pop();
    }
    }