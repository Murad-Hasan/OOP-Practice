"use strict";
class Bank_account {
    constructor(id, owner, _balance, nickname = "default") {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
        this.nickname = nickname;
    }
    deposit(amount) {
        if (amount <= 0) {
            throw new Error("Amount must be greater than zero");
        }
        this._balance += amount;
    }
    getBalance() {
        return this._balance;
    }
}
const murad = new Bank_account(1, "Murad", 200, "Murad");
console.log(murad.getBalance());
//# sourceMappingURL=parameterProperties.js.map