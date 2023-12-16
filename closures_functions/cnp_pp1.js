function makeCounterLogger(num) {
  return function(newNum) {
    let count = num;
    if (newNum > num) {
      while (newNum >= count) {
        console.log(count);
        count += 1;
      }
    } else { 
      while (newNum <= count) {
        console.log(count);
        count -= 1;
      }
    }
  }
}

let countlog = makeCounterLogger(5);
countlog(8);
// 5
// 6
// 7
// 8
countlog(2);
// 5
// 4
// 3
// 2