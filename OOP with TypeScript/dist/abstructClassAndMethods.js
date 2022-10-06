"use strict";
class Shape {
    constructor(color) {
        this.color = color;
    }
}
class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }
    render() {
        console.log("rendering a circle");
    }
}
const circle = new Circle("red", 10);
circle.render();
//# sourceMappingURL=abstructClassAndMethods.js.map