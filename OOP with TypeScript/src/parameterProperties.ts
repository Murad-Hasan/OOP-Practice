/*
 * Example of parameter properties
 */

class Bank_account {
  public nickname?: string; //*optional property
  constructor(
    public id: number,
    public owner: string,
    private _balance: number,
    nickname: string = "default"
  ) {
    this.id = id;
    this.owner = owner;
    this._balance = _balance;
    this.nickname = nickname;
  }

  deposit(amount: number): void {
    if (amount <= 0) {
      throw new Error("Amount must be greater than zero");
    }
    this._balance += amount;
  }
  getBalance(): number {
    return this._balance;
  }
}

const murad = new Bank_account(1, "Murad", 200, "Murad");

console.log(murad.getBalance());
