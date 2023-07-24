class Member {
  #BankAccount

  constructor(name) {
    this.#BankAccount = BankAccount
    this.name = name
  }
}
class BankAccount {
  #balance
  #transactions;

  constructor(member, balance) {
    this.#balance = 0;
    this.#transactions = [];
    this.member = member
    // if (this.member == null) {
    //   throw new Error('No member found');
    // }
  }

  credit(addMoney) {
    this.#balance += addMoney;
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
  set setBalance(newBalance) {
    this.#balance = newBalance;
  }
  static transactionHistory(accountHistory) {
    if (accountHistory instanceof BankAccount) {
      return accountHistory.#transactions;
    } else {
      return console.log("sorry, not found")
    }

  }

}
class CheckingAccount extends BankAccount {
  #balance

  constructor(member, balance) {
    super(balance, member)

  }
  debit(takeMoney) {

    // does not allow overdraft
    if (this.getBalance - takeMoney < 0) {
      return "You have insufficient funds to perform that action";
    } else {
      super.debit(takeMoney)
    }
    // $40 penalty if balance is less than $50

    if (this.getBalance < 50) {
      super.debit(40)
    }

  }
}
class SavingsAccount extends BankAccount {
  #linkedCheckingAccount
  #balance
  #transactions
  constructor(member, balance, transactions) {
    super(member)
    this.member = member
    this.#balance = balance
    this.#transactions = []
  }



  transfer(amount) {
    if (this.#linkedCheckingAccount == null) {
      throw new Error('No linked account');
    } else {
      this.debit(amount)
      this.#linkedCheckingAccount.credit(amount)
      // console.log("length", this.transactions.length)
      // if (this.transactions.length > 10) {
      //   this.debit(50)

      // }
    }
  }



  // console.log(SavingsAccount)
  linkAccount(acct) {
    //super(checkingAccount)
    this.#linkedCheckingAccount = acct;
  }


}


const distributeEvenly = () => { };
const distributeToSavings = () => { };

// Don't edit the code below this line:
// This injects your code into the 'window' so that the SpecRunner.html can display your tests in the browser

window.BankAccount = BankAccount;
window.CheckingAccount = CheckingAccount;
window.SavingsAccount = SavingsAccount;
window.Member = Member;
window.distributeEvenly = distributeEvenly;
window.distributeToSavings = distributeToSavings;
