function makeMultipleLister(num) {
  return function() {
    let x = num;
    while (num < 100) {
      console.log(num)
      num += x;
    }
  }
}

let lister = makeMultipleLister(13);
lister();
// 13
// 26
// 39
// 52
// 65
// 78
// 91