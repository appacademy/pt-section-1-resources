// Your code here
const Employee = require("./employee");

const johnW = new Employee("John Wick", "Dog Lover");

const sayNameBound = johnW.sayName.bind(johnW);
const sayJob = johnW.sayOccupation.bind(johnW);

setTimeout(sayNameBound, 2000);
setTimeout(sayJob, 3000);
