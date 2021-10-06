class Snow {
    constructor(x, y,r) {
        var options = {
            restitution: 1,
            friction: 0,
        }
        this.r = r;
        this.body = Bodies.circle(x, y, this.r, options);
        //give color property 
       this.image=loadImage("snow5.webp")
        World.add(world, this.body);
    }
    display() {

        var pos = this.body.position;
        
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,50,50)
        
    }

};