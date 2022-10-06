"use strict";
class Person1 {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstName + " " + this.lastName;
    }
}
class Teacher extends Person1 {
    get fullName() {
        return "Teacher: " + super.fullName;
    }
}
let teacher = new Teacher("John", "Doe");
console.log(teacher.fullName);
//# sourceMappingURL=methodOverriding.js.map