let invoices = {
  unpaid: [],
  paid: [],

  add: function(name, amount) {
    this.unpaid.push({ 
      name,
      amount
    });
  },

  totalDue: function() {
    let total = 0;
    this.unpaid.forEach(invoice => {
      total += invoice.amount;
    })
    return total;
  },

  payInvoice: function(name) {
    let unpaid = [];
    this.unpaid.forEach(invoice => {
      if (invoice.name === name) {
        this.paid.push(invoice);
      } else {
        unpaid.push(invoice);
      }
    })
    this.unpaid = unpaid;
  },

  totalPaid: function() {
    let total = 0;
    this.paid.forEach(invoice => {
      total += invoice.amount;
    })
    return total;
  }
}


invoices.add('Due North Development', 250);
invoices.add('Moonbeam Interactive	', 187.50);
invoices.add('Slough Digital	', 300);

console.log(invoices.totalDue());

invoices.payInvoice('Slough Digital	');

console.log(invoices.totalDue());
console.log(invoices.totalPaid());