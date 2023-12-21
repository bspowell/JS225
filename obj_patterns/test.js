
function NewArray() {}
NewArray.prototype = Object.create(Object.getPrototypeOf([]));

NewArray.prototype.first = function() {
  return this[0];
};

let newArr = new NewArray();
let oldArr = new Array();

oldArr.push(5);
newArr.push(5);
oldArr.push(2);
newArr.push(2);
console.log(newArr.first());           // => 5
console.log(oldArr.first());             // => undefined