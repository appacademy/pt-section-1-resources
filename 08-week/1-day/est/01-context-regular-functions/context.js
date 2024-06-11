function eat() {
  console.log(`${this.name} eats fish food`);
}

class Fish {
  constructor(name) {
    this.name = name;
  }

  swim() {
    console.log(`${this.name} swimming in the water`);
  }
}

const nemo = new Fish('Nemo');

/********************************* Scenario 1 *********************************/
// eat(); // ? -> Global context


// /********************************* Scenario 2 *********************************/
// nemo.eat = eat;
// nemo.eat(); // ? method context -> as a method on an object -> the object is the context


/********************************* Scenario 3 *********************************/
// nemo.eat = eat;
// eat(); // ?


/********************************* Scenario 4 *********************************/
// nemo.swim(); // ?


/********************************* Scenario 5 *********************************/
// const swim = nemo.swim;
// swim(); // ?
