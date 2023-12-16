function makeList() {
  return {  
    items: [],
    add(newItem) {
      this.items.push(newItem);
      console.log(newItem + ' added!');
    },

    remove(item) {
      if (this.items.length === 0) {
        console.log('The list is empty.');
      } else {
        let index = this.items.indexOf(item);
        this.items.splice(index, 1);
        console.log(item + ' removed!');
      }

    },

    list() {
      if (this.items.length === 0) {
        console.log('The list is empty.');
      } else {
        this.items.forEach(function(item) {
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
  
//   function(newItem) {
//     let index;
//     if (newItem) {
//       index = items.indexOf(newItem);
//       if (index === -1) {
//         items.push(newItem);
//         console.log(newItem + ' added!');
//       } else {
//         items.splice(index, 1);
//         console.log(newItem + ' removed!');
//       }
//     } else {
//       if (items.length === 0) {
//         console.log('The list is empty.');
//       } else {
//         items.forEach(function(item) {
//           console.log(item);
//         });
//       }
//     }
//   };
// }