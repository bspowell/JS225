function makeBank() {
  let count = 100;

  return {
    accounts: [],

    openAccount() {
      let account = makeBankAccount();
      count += 1;
      account.number = count;
      this.accounts.push(account)
      return account;
    }
  }
}


function makeBankAccount() {
  return {
    balance: 0,
    transactions: [],
  
    deposit(value) {
      this.balance += value;
      this.transactions.push({type: 'deposit', amount: value})
      return value;
    },
  
    withdraw(value) {
      balance -= value;
      this.transactions.push({type: 'withdraw', amount: value})
      return value;
    },
  }
}

let bank = makeBank();
let account = bank.openAccount();
console.log(account.number);
// 101
console.log(bank.accounts);
// [{...}]
console.log(bank.accounts[0]);
// {
//  number: 101,
//  balance: 0,
//  transactions: [],
//  deposit: [Function: deposit],
//  withdraw: [Function: withdraw]
// }
let secondAccount = bank.openAccount();
console.log(secondAccount.number);
// 102
