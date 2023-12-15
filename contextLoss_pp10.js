let foo = {
  a: 0,
  incrementA() {
    function increment() {
      this.a += 1;
    }
		let incBind = increment.bind(this);
		incBind();
		incBind();
		incBind();
  }
};

foo.incrementA();
console.log(foo.a)