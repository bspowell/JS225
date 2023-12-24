function makeList() {
  let items = [];

  return {

    list() {
      items.forEach(item => {
        console.log(item)
      });
    },

    add(name) {
      items.push(name)
      console.log(name + ' added!')
    },

    remove(name) {
      let index = items.indexOf(name);
      items.splice(index, 1);
      console.log(name + ' has been removed!')
    }
  }
}

let list = makeList();
list.add('hotdog')
list.add('buns');
list.add('ketchup');

list.list();

list.remove('buns');

list.list();