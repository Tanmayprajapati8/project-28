class Mango {
    constructor(x,y,widht,height) {
        var options = {
            isStatic: true,
            restitution: 0,
            friction: 1,
        }
        this.body=Bodies.circle(x,y,20,options);
        this.widht=widht;
        this.height=height;
        this.image=loadImage("mango.png");
        World.add(world,this.body);
    }
    display(){
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.widht,this.height);
    }

    
}