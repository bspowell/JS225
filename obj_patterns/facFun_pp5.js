function createInvoice(services) {
  return {
    phone: services.phone || 0,
    internet: services.internet || 0,
    amount: this.phone + this.internet,

    addPayment(obj) {
      if (obj.amount) {
        this.amount -= obj.amount;
      } else {
        this.amount -= (obj.phone || 0);
        this.amount -= (obj.internet || 0);
      }
    },
    addPayments(arr) {
      for (let obj of arr) {
        this.addPayment(obj);
      }
    },

    amountDue() {
      return this.amount
    },

  }
}

function createPayment(services) {
  services = services || {};
  return {
    phone: services.phone || 0,
    internet: services.internet || 0,
    amount: services.amount,
    total: function() {
      return this.amount || (this.phone + this.internet);
    },
  };
}

let invoice = createInvoice({
  phone: 1200,
  internet: 4000,
});

let payment1 = createPayment({
  amount: 2000,
});

let payment2 = createPayment({
  phone: 1000,
  internet: 1200,
});

let payment3 = createPayment({
  phone: 1000,
});

invoice.addPayment(payment1);
invoice.addPayments([payment2, payment3]);
console.log(invoice.amountDue());       // this should return 0