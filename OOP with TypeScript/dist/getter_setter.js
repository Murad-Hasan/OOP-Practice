"use strict";
class GetterSetter {
    constructor(name, _balance) {
        this.name = name;
        this._balance = _balance;
        this.name = name;
        this._balance = _balance;
    }
    get getBalance() {
        return this._balance;
    }
    set setBalance(amount) {
        this._balance = amount;
    }
}
const Murad = new GetterSetter("Murad", 200);
console.log(Murad.getBalance);
Murad.setBalance = 300;
console.log(Murad.getBalance);
//# sourceMappingURL=getter_setter.js.map