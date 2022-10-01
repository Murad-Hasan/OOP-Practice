// create object with factory function
function calcCircle(radius) {
    let circle = {
        radius: radius,
        area: function () {
            return Math.PI *radius *radius;
        } 
    };
    return circle;
}
//create a new object using the factory function
let circle1 = calcCircle(5);
let circle2 = calcCircle(3);
console.log(circle1.area().toFixed(2));
console.log(circle2.area().toFixed(2));


// create object with constructor function
function Circle(radius) {
    this.radius = radius;
    this.area = function () {
        return Math.PI *radius *radius;
    };
}
// create a new object using the constructor function
let circle3 = new Circle(7);
let circle4 = new Circle(2);

// 4 rules for constructor function
/*
    1. create an empty object {}
    2.function is called this = {}
    3. {} linked to the prototype
    4. function automatically return {}
*/

console.log(circle3.area().toFixed(2));
console.log(circle4.area().toFixed(2));

// create object with class

class CalcCircleArea {
    constructor(radius) {
        this.radius = radius;
    }
    area() {
        return Math.PI *this.radius *this.radius;
    }
}

//create a new object using class
let circle5 = new Circle(6);
let circle6 = new Circle(9);

console.log(circle5.area().toFixed(2));
console.log(circle6.area().toFixed(2));

// create object with object.create

let calculationAreaOfCircle = {
    area: function () {
        return Math.PI *this.radius *this.radius;
    }
}

//create a new object using object.create
let circle7 = Object.create(calculationAreaOfCircle);

circle7.radius = 8;

console.log(circle7.area().toFixed(2));


