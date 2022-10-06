"use strict";
class PersonClass {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstName + " " + this.lastName;
    }
}
class StudentClass extends PersonClass {
    constructor(studentId, firstName, lastName) {
        super(firstName, lastName);
        this.studentId = studentId;
    }
    get fullName() {
        return "Student: " + super.fullName;
    }
}
class TeacherClass extends PersonClass {
    get fullName() {
        return "Teacher: " + super.fullName;
    }
}
class PrincipleClass extends PersonClass {
    get fullName() {
        return "Principle: " + super.fullName;
    }
}
printFullName([
    new StudentClass(1, "murad", "Hasan"),
    new TeacherClass("Al", "Mahamud"),
    new PrincipleClass("AMH", "Hasan"),
]);
function printFullName(person) {
    for (let p of person) {
        console.log(p.fullName);
    }
}
//# sourceMappingURL=polymorphism.js.map