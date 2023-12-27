let contacts = {
  list: [],
  add(name, gender) {
    var contact = new Contact(name, gender);
    this.list.push(contact);
  },
  males() {
    return this.list.filter(function(contact) {
      return contact.gender === 'male';
    });
  },
  females() {
    return this.list.filter(function(contact) {
      return contact.gender === 'female';
    });
  },
  filterByName(name) {
    return this.list.filter(function(contact) {
      return contact.hasName(name);
    });
  },
};

function Contact(name, gender) {
  return {
    name,
    gender,
    hasName(name) {
      return this.name === name;
    }
  }
}

contacts.add('bob', 'male');
contacts.add('joe', 'male');
contacts.add('jen', 'female');
contacts.add('elena', 'female');
console.log(contacts.males())
console.log(contacts.females())
console.log(contacts.filterByName('bob'))