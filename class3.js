class BankAccount {
    userName;
    accountNumber = Date.now() + Math.floor(Math.random() * 100);
    balance = 0;

    constructor(userName, balance) {
        this.userName = userName;
        this.balance = balance;
    }

    deposite(depositeAmount) {
        this.balance += depositeAmount
    }

    withdraw(withdrawAmount) {
        this.balance -= withdrawAmount;
    }
}
const rakeshAccount = new BankAccount("Rakesh", 1000);
rakeshAccount.deposite(4000);
rakeshAccount.withdraw(200);
console.log(rakeshAccount);

const jhonAccount = new BankAccount("Jhon", 1);
jhonAccount.deposite(999);
console.log(jhonAccount);