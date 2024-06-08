# Week 7 Recap

## OOP

Object-Oriented Programming helps us organize code by creating reusable objects that model real-world entities. These objects bundle data (properties) and actions (methods) that operate on that data. In JavaScript, objects that are *instances* of a class will inherit the properties and methods from their class(es). This creates a hierarchy that allows for code reuse.

Four Pillars of OOP:

1. `Abstraction`: Focuses on essential features and hides unnecessary complexity. This simplifies code and makes it easier to understand.
2. `Encapsulation`: Bundling data (properties) and methods that operate on that data together within a class. This protects data integrity and promotes data hiding.
3. `Inheritance`: Allows new classes (subclasses) to inherit properties and methods from existing classes (superclasses). This promotes code reuse and creates hierarchical relationships between objects.
4. `Polymorphism`: Enables objects of different classes to respond to the same method call in different ways. This allows for flexible and dynamic code.

Benefits of OOP:

- Improved Code Organization: Promotes code reusability, modularity, and maintainability.
- Real-World Modeling: Objects mimic real-world entities, making code more intuitive.
- Scalability: Code can adapt to growing complexity by adding new objects or extending existing ones.

## Classes in JS

### JavaScript Classes: Building Blueprints for Objects

JavaScript introduced classes in ES6 (ECMAScript 2015) to provide a more traditional object-oriented programming (OOP) syntax. Classes act as blueprints for creating objects with specific properties and methods.

Creating a Class
We use the `class` keyword followed by the class name to define a class. Inside the class body, we can define:

- Constructor: A special method called with new keyword when creating objects. It's used to initialize properties (data) of the object.
- Methods: Functions defined within the class that operate on the object's data.

```js
class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  accelerate() {
    console.log("Car is accelerating!");
  }

  brake() {
    console.log("Car is braking!");
  }
}
```

### Creating Objects (Instances) from a Class

We use the `new` keyword followed by the class name and arguments to create objects (instances) of the class. These objects inherit the properties and methods defined in the class.

```js
const myCar = new Car("Ford", "Mustang", 2023);

console.log(myCar.make);  // Output: "Ford"
myCar.accelerate();      // Output: "Car is accelerating!"
```

## Imports and Exports in CommonJS (CJS)

- Each file is considered a *module*
- To pass a function, variable, or class from one file to another, we have to export it from the first file and import it in the second file.
- We will export using `module.exports`
- We will import using `require()` + a file path to the first file