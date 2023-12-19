function subtract(a, b) {
  return a - b;
}

function makeSubN(arg1) {
  return function(arg2) {
    return subtract(arg2, arg1)
  }
}

const sub4 = makeSubN(4);
const sub7 = makeSubN(7);

console.log(sub4(10)); // 6
console.log(sub4(20)); // 16
console.log(sub7(10)); // 3
console.log(sub7(20)); // 13
 