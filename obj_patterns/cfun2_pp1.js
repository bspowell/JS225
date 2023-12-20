
let shape = {
  getType() {
    return this.type;
  },
}


let Triangle = function(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.type = 'triangle';
}

Triangle.prototype = shape;
Triangle.prototype.getPerimeter = function () {
  return this.a + this.b + this.c;
}

Triangle.prototype.constructor = Triangle;

let t = new Triangle(3, 4, 5);
console.log(t.constructor);                 // Triangle(a, b, c)
// shape.prototype = t;
console.log(shape.isPrototypeOf(t));        // true
console.log(t.getPerimeter());              // 12
console.log(t.getType());                   // "triangle"