// Inheritance....

function BankAccount(userName, balance = 0) {
    this.userName = userName;
    this.accountNumber = Date.now() + Math.floor(Math.random() * 100);
    this.balance = balance;
}

BankAccount.prototype.deposite = function (amount) {
    this.balance += amount;
}
BankAccount.prototype.withDraw = function (amount) {
    this.balance -= amount;
}

const rakeshAccount = new BankAccount("Rakesh", 2000)

console.log(rakeshAccount)