class BankAccount{
     public readonly userId: number;
  public userName: string;
  private _userBalance: number;

  constructor(userId: number, userName: string, userBalance: number) {
    this.userId = userId;
    this.userName = userName;
    this._userBalance = userBalance;
  }

  set addBalance(amount: number){
    this._userBalance = this._userBalance + amount;
  }

  get getBalance() {
    return this._userBalance;
  }


}

let MostafaAccount = new BankAccount(222,"Mostafa",500);
console.log(MostafaAccount.getBalance);