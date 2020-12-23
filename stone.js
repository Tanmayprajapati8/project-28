class Stone {
    constructor(x, y,width,height ) {
        var options = {
            isStatic: false,
            restitution: 0,
            friction: 1,
            density: 1.2
        }
        this.width = width;
        this.height = height;
        

        this.body = Bodies.circle(x, y,20 ,options);
        // this.radius = radius;
        this.image = loadImage("stone.png");
        World.add(world, this.body);
    }
    display() {

        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
    }
}
