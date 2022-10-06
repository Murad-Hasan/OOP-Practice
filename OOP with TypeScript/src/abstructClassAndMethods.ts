/*
? abstract class means this class isn't ready to use, we can't create an instance of this class. 
* we can only use this class as a parent class 
*/
abstract class Shape {
  constructor(public color: string) {}

  //*abstract method , it's not implemented.
  //*it's only declared.
  //*it's only available in abstract class. we can't use it in normal class.
  abstract render(): void;
}

class Circle extends Shape {
  constructor(color: string, public radius: number) {
    super(color);
  }

  //*override abstract method
  override render(): void {
    console.log("rendering a circle");
  }
}

const circle = new Circle("red", 10);
circle.render();
