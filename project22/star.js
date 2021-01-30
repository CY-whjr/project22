class Star{
    constructor(x,y,width,height){
        this.image=loadImage("star.png");
        var options = {
            isStatic: false
        }
        this.body = Bodies.rectangle(x,y,width,height,options)
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display(){
        objectMode(CENTER);
        star.x= starBody.position.x
        star.y= starBody.position.x
    }
}