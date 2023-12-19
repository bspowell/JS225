function createPayment(services = []) {
  let phone = 0;
  let internet = 0;
  let amount = 0; 

  for (let obj in services) {
    phone += obj.phone || 0;
    internet += obj.internet || 0;
    amount += obj.amount || 0;
  }
  
  return {
    phone,
    internet,
    amount,
    total: function() {
      if (this.amount) {
        return this.amount;
      }
      return this.phone + this.internet;
    },
  }
}

function paymentTotal(payments) {
  let total = 0;
  let i;

  for (i = 0; i < payments.length; i += 1) {
    total += payments[i].total();
  }

  return total;
}

let payments = [];
payments.push(createPayment());
payments.push(createPayment({
  internet: 6500,
}));

payments.push(createPayment({
  phone: 2000,
}));

payments.push(createPayment({
  phone: 1000,
  internet: 4500,
}));

payments.push(createPayment({
  amount: 10000,
}));

console.log(paymentTotal(payments));      // => 24000