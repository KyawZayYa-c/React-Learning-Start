class Shape{
    constructor() {
        console.log('Shape Constructor');
    }
    draw() {
        console.log('Draw Shape')
    }
}

class Circle extends Shape {
    radius: number;
    constructor(radius: number) {
        super();
        this.radius = radius;
        console.log('Circle constructor!');
    }

    draw(){
    super.draw();
    console.log(`Draw circle with radius ${this.radius}`);
    }
}

let circle = new Circle(5);
circle.draw();

