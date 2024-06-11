// Your code here
const Employee = require("./employee");

let john = new Employee("John Wick", "Dog Lover");

const sayNameBound = john.sayName.bind(john);
const sayOcBound = john.sayOccupation.bind(john);

// setTimeout(sayNameBound, 2000);
setTimeout(john.sayOccupation.bind(john), 3000);