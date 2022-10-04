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
//# sourceMappingURL=class.js.map