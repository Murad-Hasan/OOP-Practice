/*
 *Polymorphism
 */

/*
 * Base Class
 */
class PersonClass {
  constructor(public firstName: string, public lastName: string) {}

  get fullName() {
    return this.firstName + " " + this.lastName;
  }
}

/*
 * Extended Class
 */
class StudentClass extends PersonClass {
  constructor(public studentId: number, firstName: string, lastName: string) {
    super(firstName, lastName);
  }
  override get fullName() {
    return "Student: " + super.fullName;
  }
}

class TeacherClass extends PersonClass {
  override get fullName() {
    return "Teacher: " + super.fullName;
  }
}

class PrincipleClass extends PersonClass {
  override get fullName() {
    return "Principle: " + super.fullName;
  }
}

printFullName([
  new StudentClass(1, "murad", "Hasan"),
  new TeacherClass("Al", "Mahamud"),
  new PrincipleClass("AMH", "Hasan"),
]);

function printFullName(person: PersonClass[]) {
  for (let p of person) {
    console.log(p.fullName);
  }
}

/*
 * Open close principle
 * classes should be open for extension but closed for modification
 */
