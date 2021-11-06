class SlingShot{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.01,
            length:50
        }

        this.pointB=pointB
        this.sling = Constraint.create(options);
        this.sling1 = loadImage("./sprites/sling1a.png");
        this.sling2 = loadImage("./sprites/sling2a.png");
        this.sling3 = loadImage("./sprites/sling3.png");
        World.add(world,this.sling)
    }
    display(){
        image(this.sling1,200,190)
        image(this.sling2,170,190)
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            if(pointA.x<220){
                strokeWeight(7)
                line(pointA.x-20,pointA.y,pointB.x-10,pointB.y)
                line(pointA.x-20,pointA.y,pointB.x+30,pointB.y-10)
                image(this.sling3,pointA.x-40,pointA.y-10,15,30)
            }
            else{
                strokeWeight(7);
                line(pointA.x+25,pointA.y,pointB.x-10,pointB.y)
                line(pointA.x+25,pointA.y,pointB.x+30,pointB.y-10)
                image(this.sling3,pointA.x+40,pointA.y-10,15,30)
            }
        }
    }
}