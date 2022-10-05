class GetterSetter {
  constructor(public name: string, private _balance: number) {
    this.name = name;
    this._balance = _balance;
  }
  // getter
  get getBalance(): number {
    return this._balance;
  }
  // setter
  set setBalance(amount: number) {
    this._balance = amount;
  }
}

const Murad = new GetterSetter("Murad", 200);
console.log(Murad.getBalance);

/* 
* Set balance 
*/
Murad.setBalance = 300;

console.log(Murad.getBalance);
