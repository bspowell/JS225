class Cat {
  constructor(name = 'Kitty') {
    this.name = name;
    console.log(`Hello! My name is ${this.name}!`);
  }
}

let kitty = new Cat(); // Hello! My name is Kitty!
let sophie = new Cat('Sophie'); // Hello! My name is Sophie!