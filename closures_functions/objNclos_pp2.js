function makeList() {
  let items = [];
  return {  
    add(newItem) {
      items.push(newItem);
      console.log(newItem + ' added!');
    },

    remove(item) {
      if (items.length === 0) {
        console.log('The list is empty.');
      } else {
        let index = items.indexOf(item);
        items.splice(index, 1);
        console.log(item + ' removed!');
      }

    },

    list() {
      if (items.length === 0) {
        console.log('The list is empty.');
      } else {
        items.forEach(function(item) {
          console.log(item);
        });
      }
    },
  }
}

let list = makeList();
list.add('peas');
// peas added!

list.list();
// peas

list.add('corn');
// corn added!
list.list();
// peas
// corn

list.remove('peas');
// peas removed!
list.list();
//corn 
  
