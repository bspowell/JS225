class Cat {
  constructor(name = 'Kitty') {
    this.name = name;
  }

  greet() {
    console.log(`Hello! My name is ${this.name}!`);
  }

  rename(name) {
    this.name = name
  }

  static genericGreeting() {
    console.log("Hello! I'm a cat!");
  }
}

let kitty = new Cat(); 
let sophie = new Cat('Sophie'); 
sophie.rename('Bob') // Hello! My name is Bob!
sophie.greet()