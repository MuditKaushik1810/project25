class Paper{
    constructor(x,y,radius){
        var options = {
            restitution: 1,
            density : 1.2,
            friction : 0.5,
            isStatic : false,
           
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        this.image = loadImage("paper.png");
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        imageMode(RADIUS);
        //ellipseMode(RADIUS);
        fill("white");
        //ellipse(pos.x,pos.y,this.radius,this.radius);
        image(this.image,pos.x, pos.y,70,70);
    }
}