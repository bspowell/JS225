let foo = {
  a: 0,
  incrementA() {
    function increment() {
      this.a += 1;
    }

    increment.call(foo);
  }
};

foo.incrementA();
foo.incrementA();
foo.incrementA();

console.log(foo.a)