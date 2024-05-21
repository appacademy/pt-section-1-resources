debugger

console.log('Hello World!');

const test = (array) => array.forEach(el => {
    debugger
    console.log(el);
})

test([1, 2, 3]);