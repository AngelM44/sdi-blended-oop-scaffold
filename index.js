class Member {
  constructor(name) {}
}
class BankAccount {
  #balance 
  #transactions;

  constructor(balance) {
    this.#balance = 0;
    this.#transactions = [];
  }
  credit(addMoney) {
    this.#balance  += addMoney;
    this.#transactions.push(addMoney);
  }

  debit(takeMoney) {
    this.#balance -= takeMoney;
    this.#transactions.push(takeMoney);
  }

  checkBalance() {
    return `Your current balance is: ${this.#balance} `
  }

  get getBalance() {
    return this.#balance;
  }
  set setBalance(newBalance){
    this.#balance = newBalance;
  }
  static transactionHistory(accountHistory){
    if ( accountHistory instanceof BankAccount) {
    return accountHistory.#transactions;
    }else{
      return console.log("sorry, not found")
    }

  }

}
class CheckingAccount extends BankAccount {
  #balance
  
  constructor(balance) {
    super (balance)
  }
  debit(takeMoney){
    if((this.#balance - takeMoney) < 0){
    return "You have insufficient funds to perform that action";
    }else{
      this.#balance -= takeMoney;
    }
  }
}
class SavingsAccount {
  constructor(member) {}
}
const distributeEvenly = () => {};
const distributeToSavings = () => {};

// Don't edit the code below this line:
// This injects your code into the 'window' so that the SpecRunner.html can display your tests in the browser

window.BankAccount = BankAccount;
window.CheckingAccount = CheckingAccount;
window.SavingsAccount = SavingsAccount;
window.Member = Member;
window.distributeEvenly = distributeEvenly;
window.distributeToSavings = distributeToSavings;
