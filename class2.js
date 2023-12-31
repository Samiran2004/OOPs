/* Object prototype...*/

function BankAccount(userName, balance = 0) {
    this.userName = userName;
    this.accountNumber = Date.now() + Math.floor(Math.random() * 100);
    this.balance = balance;

    // this.deposite = (amount) => {
    //     this.balance += amount;
    // }

    // this.withDraw = (amount) => {
    //     this.balance -= amount;
    // }
}

// const rakeshAccount = new BankAccount("Rakesh", 1000);
const jhonAccount = new BankAccount("Jhon", 2000);
// console.log(rakeshAccount);
// console.log(jhonAccount);
BankAccount.prototype.deposite = function (amount) {
    this.balance += amount;
}
BankAccount.prototype.withDraw = function (amount) {
    this.balance -= amount;
}

// rakeshAccount.deposite(100);
// console.log(rakeshAccount);
// rakeshAccount.withDraw(200);
// console.log(rakeshAccount);

console.log(jhonAccount);
jhonAccount.withDraw(100);
console.log(jhonAccount);
jhonAccount.deposite(300);
console.log(jhonAccount);