function makeCar(rate, brakeRate = 1) {
 return {
    speed: 0,
    rate,
    brakeRate,

    accelerate() {
      this.speed += this.rate;
    },

    brake() {
      this.speed -= this.brakeRate
      if (this.speed < 0) {
        this.speed = 0;
      }
    }

  }
}

let sedan = makeCar(8, 6);
sedan.accelerate();
sedan.brake();
console.log(sedan.speed);

let coupe = makeCar(12);
coupe.accelerate();
coupe.brake();
console.log(coupe.speed);

let hatchback = makeCar(9, 3);
hatchback.accelerate();
console.log(hatchback.speed);