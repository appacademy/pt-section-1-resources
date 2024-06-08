class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;

    Car.lastInstanceCreated = this;
  }

  static lastInstanceCreated = null;

  static raceCars(car1, car2) {
    const rand = Math.floor(Math.random() * 100) % 2 === 0;
    if (rand) console.log(`${car1.model} beat ${car2.model}`);
    else console.log(`${car2.model} beat ${car1.model}`);
  }

  accelerate() {
    console.log("Car is accelerating!");
  }

  brake() {
    console.log("Car is braking!");
  }
}

class Bike {
  constructor() {
    this.wheels = 2;
  }
}

// console.log(Car.lastInstanceCreated);
const car0 = new Car("Subaru", "WRX", 2004);
// console.log(Car.lastInstanceCreated);
const car1 = new Car("Ford", "Mustang", 2023);
// console.log(Car.lastInstanceCreated);
// console.log(car0.lastInstanceCreated);

// car0.accelerate();
// car1.brake();
// // car0.raceCars(car0, car1) // doesn't word -> raceCars is a static method -> attached to Cars class
Car.raceCars(car0, car1);

// console.log(module);

// module.exports.Car = Car;
// module.exports.Bike = Bike;

module.exports = {Car, Bike}