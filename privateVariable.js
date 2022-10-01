// //oop private variable
// var Person = function(name) {
//     let _name = name;
//     this.getName = function() {
//         return _name;
//     };
//     this.setName = function(name) {
//         _name = name;
//     };
//     }

// var person = new Person('John');
// console.log(person._name); // John
// console.log(person.getName()); // John
// person.setName('Jack');




const Person = function (firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.getFullName = function(){
    return this.firstName + ' ' + this.lastName;
}

const murad = new Person ('Murad', 'Hasan');
console.log("murad", murad)
console.log(murad.getFullName());

console.log(Person)

console.log(Person.prototype)
console.log(Person.prototype.__proto__)
console.log(Person.prototype.constructor)
console.log(Person.prototype.isPrototypeOf(murad))
console.log(Person.prototype.isPrototypeOf(Person))


