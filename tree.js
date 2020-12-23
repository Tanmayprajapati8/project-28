class Tree{
    constructor(x,y,widht,height){
        var options={
            isStatic:true,
            // restitution:0.8,
            // friction:1
        }
        this.body=Bodies.rectangle(x,y,widht,height,options);
        this.widht=widht;
        this.height=height;
        // this.x=x;
        // this.y=y;
        this.image=loadImage("tree.png");
        World.add(world,this.body);
    }
    display(){
        push;
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.widht,this.height);
        pop;
    }
}