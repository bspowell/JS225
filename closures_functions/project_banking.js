function makeBank() {
  let accounts = [];
  return {
    openAccount() {
      let number = accounts.length + 101;
      let account = makeAccount(number);
      accounts.push(account)
      return account;
    },

    transfer(source, destination, amount) {
      return destination.deposit(source.withdraw(amount));
    },
  }
}


function makeAccount(number) {
  let id = number;
  let balance = 0;
  let transactions = [];

  return {
    // number,
    // balance: 0,
    // transactions: [],

    deposit(amount) {
      balance += amount;
      transactions.push({ type: 'deposit', amount: amount })
      return amount;
    },

    withdraw(amount) {
      if (amount > balance) {
        amount = balance
      }
      balance -= amount;
      transactions.push({ type: 'withdraw', amount: amount })
      return amount;
    },

    balance() {
      return balance;
    },

    number() {
      return id;
    },

    transactions() {
      return transactions;
    }
  } 
}

let bank = makeBank();
console.log(bank.accounts);
// undefined