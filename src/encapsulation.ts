class BankAccount{
    private balance: number;

    constructor(initialBalance: number){
        this.balance = initialBalance;
    }

    getBalance(){
        return this.balance;
    }
    deposit(amount: number){
        if(amount > 0){
            this.balance += amount;
        }
    }
}

let testBank = new BankAccount(1000);
 console.log(testBank.getBalance());
 testBank.deposit(500);
 console.log(testBank.getBalance());