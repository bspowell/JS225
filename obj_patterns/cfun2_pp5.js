Object.prototype.begetObject = function () {
  function F() {}
  F.prototype = this;
  return new F();
}

let foo = {
  a: 1,
};

let bar = foo.begetObject();
foo.isPrototypeOf(bar);         // true