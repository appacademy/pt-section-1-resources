const names = ["Greg", "Jennell", "Yoshi"];
const ppl = [{first: "Greg", last: "Isales"}, {first: "Bob", last: "bobbington"}]

// numbers.forEach((banana) => {
    //     console.log(banana)
    // })

    // names.forEach((name, index) => console.log(name, index))

    // console.log("New", newNumbers)

    // const mappedNumbers = numbers.map((el) => {
    //     return el * 2;
    // });

    // const evens = numbers.filter((num) => {
    //     if (num % 2 === 0) {
    //         return true;
    //     }
    // });

    // const firstNames = ppl.map((personObj) => personObj.first)
    // console.log("First:", firstNames)

    // console.log("Evens:", evens)
    const numbers = [1, 2, 3, 4, 5];

    const sum = numbers.reduce((acc, el) => {
        // console.log("Acc:", acc, "El:", el)
        let sum = acc + el;
        return sum
    }, 0)

    // console.log(sum);

// console.log("Mapped:", mappedNumbers);


const num = 1;
const str = "Greg";
const bool = true;
const und = undefined;
const arr = [1, 2, 3, 4];
const obj = {someKey: "some value"};

console.log("Number:", typeof num);
console.log("String:", typeof str);
console.log("Boolean:", typeof bool);
console.log("Undefined:", typeof und);
console.log("Array:", typeof arr);
console.log("Object:", typeof obj);

console.log("Is Array:", Array.isArray(arr))
console.log("Is Array:", Array.isArray(obj))
