// Write a makeList function that returns a new function that implements a todo list. 
// The returned function should have the following behavior:
// - When called with an argument that is not already on the list, it adds that argument to the list.
// - When called with an argument that is already on the list, it removes the element from the list.
// - When called without arguments, it logs all items on the list. If the list is empty, it logs an appropriate message.

function makeList() { 
  let list = [];
  return function(item) {
    if (item === undefined) {
      if (list.length < 1) {
        console.log('the list is empty.');
      } else {
        list.forEach(ele => console.log(ele));
      }
    } else if (list.indexOf(item) !== -1) {
      let index = list.indexOf(item);
      list.splice(index, 1);
      console.log(item + ' removed!')
    } else {
      list.push(item);
      console.log(item + ' added!')
    } 
  }
}

let list = makeList();
list();
// The list is empty.

list('make breakfast');
// make breakfast added!

list('read book');
// read book added!

list();
// make breakfast
// read book

list('make breakfast');
// make breakfast removed!

list();
// read book