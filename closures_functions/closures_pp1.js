// Write a function named makeMultipleLister that, 
// when invoked and passed a number, 
// returns a function that logs every positive integer multiple of that number less than 100. 

function makeMultipleLister(num) {
  return function() {
    let count = num;
    while (num < 100) {
      console.log(num)
      num += count;
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