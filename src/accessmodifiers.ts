class BankAccount{
    public readonly userId: number;
    public userName: string;
    protected _userBalance : number;


    constructor(userId:number,userName:string,_userBalance: number){
        this.userName = userName;
        this.userId = userId;
        this._userBalance = _userBalance;
    }

   public  addBalance(balance: number){
        this._userBalance = this._userBalance + balance;
    }


}

class StudentBankAccount extends BankAccount{
    test(){
        this._userBalance;
    }
}

let mostafaBankAccount = new BankAccount(111,"Mostafa",400);

mostafaBankAccount.addBalance(100);
console.log(mostafaBankAccount);