/* 
* Different between private and protected
? Private: only accessible inside the class itself , it's not inherited
? Protected: accessible inside the class itself and inside the class that inherited from it
*/

class Player {
  constructor(
    public firstName: string,
    public lastName: string,
    public age: number
  ) {}

  protected getFullName() {
    return this.firstName + " " + this.lastName;
  }
  private _calculateAge() {
    return this.age - 2023;
  }
  protected getAge() {
    return this._calculateAge();
  }
}

class FootballPlayer extends Player {
  constructor(
    firstName: string,
    lastName: string,
    age: number,
    public position: string
  ) {
    super(firstName, lastName, age);
  }

  takeTest() {
    // this.getAge(); ----> getAge() is protected so it's accessible inside the class that inherited from it
    console.log(this.getFullName());
  }
}

let player = new FootballPlayer("Murad", "Hasan", 2023, "Sticker");
player.takeTest();
