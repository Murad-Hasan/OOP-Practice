"use strict";
class Player {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    getFullName() {
        return this.firstName + " " + this.lastName;
    }
    _calculateAge() {
        return this.age - 2023;
    }
    getAge() {
        return this._calculateAge();
    }
}
class FootballPlayer extends Player {
    constructor(firstName, lastName, age, position) {
        super(firstName, lastName, age);
        this.position = position;
    }
    takeTest() {
        console.log(this.getFullName());
    }
}
let player = new FootballPlayer("Murad", "Hasan", 2023, "Sticker");
player.takeTest();
//# sourceMappingURL=privateVsProtected.js.map