function BankAccount(userName, balance = 0) {
    this.userName = userName;
    this.accountNumber = Date.now() + Math.floor(Math.random() * 100);
    this.balance = balance;

    this.deposite = (amount) => {
        this.balance += amount;
    }

    this.withDraw = (amount) => {
        this.balance -= amount;
    }
}

const accounts = [];
const createUserSection = document.querySelector('#createUserSection');
const userName = document.querySelector('#username');
createUserSection.addEventListener('submit',(e)=>{
    e.preventDefault();
    const account = new BankAccount(userName.value);
    accounts.push(account);
    console.log(accounts);
});














// const samiranSamanta = new BankAccount("Samiran Samanta", 1000);
// const JhonAcc = new BankAccount("Jhon Doe",1000);
// // samiranSamanta.deposite(2000);
// // console.log(samiranSamanta, JhonAcc);
 
// samiranSamanta.withDraw(2);
// console.log(samiranSamanta); 