"use strict";
class Account {
    constructor(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
    }
    deposit(amount) {
        if (amount <= 0) {
            throw new Error("Amount must be greater than zero");
        }
        this.balance += amount;
    }
}
let account = new Account(1, "John", 0);
console.log(typeof account);
account.deposit(500);
console.log(account instanceof Account);
console.log(account.balance);
class Account1 {
    constructor(id, owner, _balance, nickname = "default") {
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
    _calculateTax() {
        return (this._balance * 0.9) / 100;
    }
    getTax() {
        return this._calculateTax();
    }
    getBalance() {
        return this._balance;
    }
}
let account1 = new Account1(1, "John", 200, "MURAD");
let account2 = new Account1(1, "Murad", 200);
console.log("account1 with nickname argument:", account1.nickname);
console.log("account2 without nickname argument: ", account2.nickname);
console.log(Math.round(account1.getTax()));
//# sourceMappingURL=class.js.map