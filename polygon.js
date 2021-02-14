class Shooter {
    constructor(x, y, radius) {
        this.radius = radius;
        this.body = Bodies.circle(x, y, this.radius);
        World.add(world, this.body);
        this.image = loadImage("hexagon.jpg");
    }

    display() {
        //rect(this.body.position.x, this.body.position.y, this.radius*2, this.radius*2);
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, 50, 50);
    }
}