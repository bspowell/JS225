let numbers = [1, 2, 3, 4];
function makeCheckEven() {
  return function(ele) {
    return ele % 2 === 0;
  }
}

let checkEven = makeCheckEven();

numbers.filter(checkEven); // [2, 4]