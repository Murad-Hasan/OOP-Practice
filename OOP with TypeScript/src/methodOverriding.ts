class Person1 {
    constructor(public firstName: string, public lastName: string) {
    }
    get fullName() {
        return this.firstName + " " + this.lastName;
    }
}

class Teacher extends Person1 {
    override get fullName() {
        return "Teacher: " + super.fullName;
    }
}

let teacher = new Teacher("John", "Doe");
console.log(teacher.fullName);