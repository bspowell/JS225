let me = {
  firstname: 'Sean',
  lastname: 'Powell',
};

let friend = {};
friend.firstname = 'Dick';
friend.lastname = 'Cross';


let people = {
  collection: [],
  fullName: function(person) {
    console.log(person.firstname + ' ' + person.lastname);
  },

  rollCall: function() {
    this.collection.forEach(this.fullName)
  },

  add: function(person) {
    if (this.isInvalidPerson(person)) return;

    this.collection.push(person);
  },

  getIndex: function(person) {
    let index = -1;
    this.collection.forEach(function(comparator, i) {
      if (comparator.firstname === person.firstname &&
          comparator.lastname === person.lastname) {
            index = i;
      }
    });
    return index;
  },

  remove: function(person) {
    let index;
    if (this.isInvalidPerson(person)) return;

    index = this.getIndex(person);
    if (index === -1) return;

    this.collection.splice(index, 1);
  },

  isInvalidPerson: function(person) {
    return typeof person.firstname !== 'string' || typeof person.lastname !== 'string';
  },

  get: function(person) {
    if (this.isInvalidPerson(person)) return;

    return this.collection[this.getIndex(person)];
  },

  update: function(person) {
    if (this.isInvalidPerson(person)) return;
    
    let existingPersonId = this.getIndex(person);

    if (existingPersonId === -1) {
      this.add(person);
    } else {
      this.collection[existingPersonId] = person;
    }
  },

}

people.add(me)
people.add(friend)
people.add({ firstname: 'John', lastname: 'Smith' });

people.rollCall();

console.log(people.getIndex(friend)); // => 1
people.remove(friend);
console.log(people.getIndex(friend)); // => -1
