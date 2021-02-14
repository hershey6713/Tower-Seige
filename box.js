class Box {
    constructor(x, y, width, height) {
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x, y, this.width, this.height);
        World.add(world, this.body);
    }

    display(color) {
        fill(color);
        rectMode(CENTER);
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
    }
}