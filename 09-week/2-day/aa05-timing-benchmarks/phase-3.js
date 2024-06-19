const [addNums, addManyNums] = require("./phase-1");

function addNums10Timing(increment) {
  const res = [];
  for (let i = 1; i < 11; i++) {
    let start = Date.now();
    res.push(addNums(i * increment));
    console.log(`${Date.now() - start}`);
  }
  return res;
}

function addManyNums10Timing(increment) {
  const res = [];
  for (let i = 1; i < 11; i++) {
    let start = Date.now();
    res.push(addManyNums(i * increment));
    console.log(`${Date.now() - start}`);
  }
  return res;
}

n = 1000000;
console.log(`addNums(${n}): `);
addNums10Timing(1000000);

console.log("\n***********\n");

n = 1000;
console.log(`addManyNums(${n}): `);
addManyNums10Timing(5000);