class Rope{
    constructor(body1, point2){
        var options = {
            bodyA: body1,
            pointB: point2,
            stiffness: 0.04,
            length: 20,
            isStatic:false
        }
        this.sling = Constraint.create(options);
        this.pointB=point2;
        World.add(world, this.sling);
    }
    fly(){
        this.sling.bodyA=null;
    }

    display(){
        if(this.sling.bodyA){

        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }

    
}