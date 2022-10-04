//create a simple class
class Account {
  id: number;
  owner: string;
  balance: number;

  constructor(id: number, owner: string, balance: number) {
    this.id = id;
    this.owner = owner;
    this.balance = balance;
  }

  deposit(amount: number): void {
    if (amount <= 0) {
      throw new Error("Amount must be greater than zero");
    }
    this.balance += amount;
  }
}

//create an instance of the class

let account = new Account(1, "John", 0);
//check type of account
console.log(typeof account);

/*
    if (typeof something === 'number' | 'object' {some logic})
    we can use logic here
*/

account.deposit(500);
//account is instanceof Account class or not
console.log(account instanceof Account);
//check the total balance affected by deposit
console.log(account.balance);

/* ReadOnly and Optional Property  */

class Account1 {
    readonly id: number; //can't access from outside the class
    owner: string;
    balance: number;
    nickname?: string; //optional property

    constructor(id: number, owner: string, balance: number) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
    }

    deposit(amount: number): void {
        if (amount <= 0) {
            throw new Error("Amount must be greater than zero");
        }
        this.balance += amount;
    }
}


