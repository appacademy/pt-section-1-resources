// function foo() {
//     debugger
//     return 2 + bar();
//   }

//   function bar() {
//     debugger
//     return 6 + baz();
//   }

//   function baz() {
//     debugger
//     return 3;
//   }

//   console.log(foo());

//   let i = 0;

//   while (i < 5) {
//     console.log(i)
//     i++;
//   }

// const recSum = (n) => {
//     debugger
//     if (n === 1) return 1 // base case
//     debugger
//     return n + recSum(n)
// }

// console.log(recSum(5));

// ------------------PST------------------------------

// function foo() {
//     debugger
//     let fooRes = 2 + bar();
//     debugger
//     return fooRes
//   }

//   function bar() {
//     debugger
//     let barRes = 6 + baz();
//     debugger
//     return barRes
//   }

//   function baz() {
//     debugger
//     return 3;
//   }

//   console.log(foo());

// const someFunc = () => {
//     someFunc()
// }

// let i = 0;

// while (i < 5) {
//     console.log(i)
//     i++
// }

// console.log("DONE")

const recSum = (n) => {
    let sum;
    // base case
    if (n === 1 ) {
        sum = 1;
        return sum
    };

    // recursive case
      // recursive step
    sum = n + recSum(--n);
    return sum;
}

console.log(recSum(5))