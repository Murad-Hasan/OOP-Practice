class Person {
  constructor(public firstName: string, public lastName: string) {}

  get fullName(): string {
    return this.firstName + " " + this.lastName;
  }

  walk() {
    console.log("walking...");
  }
}
/*
  * Inheritance
 */
class Student extends Person {
  constructor(public studentId: number, firstName: string, lastName: string) {
    super(firstName, lastName);
  }

  takeTest() {
    console.log("taking test...");
  }
}

const student = new Student(1, "John", "Doe");
console.log(student.fullName);
