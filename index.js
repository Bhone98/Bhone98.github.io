import BankAccount from "./bankAccount.js";

const currentAccount = new BankAccount(232555, "Bhone Nay Min", 20000);
const savingAccount = new BankAccount(2342424, "Bhone Nay Min", 10000);

currentAccount.deposit(5000);
savingAccount.deposit(1000);

currentAccount.withdraw(1000);
savingAccount.withdraw(100000);

currentAccount.checkBalance();
savingAccount.checkBalance();