let ninjaA = (function() {
  function Ninja(){};
  return new Ninja();
})();

let ninjaB = (function() {
  function Ninja(){};
  return new Ninja();
})
// create a ninjaB object

console.log(ninjaB.constructor === ninjaA.constructor);    // should log true