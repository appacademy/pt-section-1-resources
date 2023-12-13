# M2-W8-D3

- JS Error Types
- Error Handling
- Testing Pyramid
- TDD
- Unit Testing

## JS Error Types

- `EvalError`: represents an error that originates from the global eval() function 
- `RangeError`: representing an error for when a numeric variable or parameter is outside of its valid range.
- `ReferenceError`: represents an error thrown when an invalid reference is made.
- `SyntaxError`: represents an error in the syntax of the code.
- `TypeError`: represents an error when a variable or parameter is not of a valid type.
- `URIError`: represents an error that occurs when encodeURI() or decodeURI() are passed invalid parameters.
- `InternalError`: represents an error in the internal JavaScript engine.
- `AggregateError`: represents an instance where several errors need to represented by an operation.
- `EvalError`: represents an error with the global eval function.

Focus on these most common Error Types

- SyntaxError
- ReferenceError
- TypeError

## Error Handling

```js
//basic error handling

//Doesn't throw an error, but probably should
const add = (num1, num2) => num1 - num2;
console.log(add("banana", "orange"));

// try-catch error handling
try {
  //code to attempt to run
} catch(errorObj) {
  //code to execute if the try block fails
}

const add = (num1, num2) => {
  try {
    if(typeof num1 === 'number' && typeof num2 === 'number'){
      return num1 + num2;
    } else {
      throw new TypeError('Type Error: Invalid Inputs')
    }
  } catch (e) {
    console.error(e.message);
  }
};
add("banana", "orange");
console.log(add(1,4))
```

```js
// throwing an error
function safeDivide(a, b) {
    if (b === 0) {
      throw new Error("cannot divide by zero");
      // throw new RangeError("cannot divide by zero");
    } else {
      return a / b;
    }
  }
  
  try {
    console.log(safeDivide(30, 5)); // prints 6
  } catch (error) {
    console.error(error.name + ": " + error.message);
  }

  try {
    console.log(safeDivide(30, 0));
  } catch (error) {
    console.error(error.name + ": " + error.message); // prints error message
  }
  
  console.log("hello"); // prints hello
```

- console.log writes to stdout
- console.error writes to stderr

This mostly doesn't matter for your use case, and in node both are written to your terminal the same way, however they could be piped differently in a project where error logs could be collected differently than standard logs.

Most of the time SyntaxErrors can't be caught in the same way as other errors, the reason for this is that the syntax error causes the JS interpreter to fail, rather than a function to fail. So it fails at a level above the control of any logic you have written.

```js
//finally - it always runs regardless of if the try or catch block ran.

function trySafeDivide(n) {
    try {
        console.log(safeDivide(30, n));
    } catch (error) {
        console.error(error.name + ": " + error.message); // Error: cannot divide by zero
        return;
    } finally {
        console.log("This will always run");
    }
}
```

## Error Practices (40m, SOLO)

- Error Types Quiz
- Error Handling Quiz
- Practice: Error Handling

## Error Practices Walkthrough

## Testing Pyramid

Testing Pyramid

![testing_pyramid](./testing_pyramid.png)

- Unit Tests: Smallest unit of testing. Focuses on individual functions or tasks
  individually.
- Integration Tests: Testing how separate pieces of code work with one another.
- End-to-End Tests: Tests the whole application, high level functionality, close
  to the user experience.

## TDD

![tdd](./tdd.png)

- Red: Write tests, watch them fail
- Green: Write code, just enough to pass the previously written tests.
- Refactor: Write more tests, watch them fail, pass the tests. The loop of
  easily maintainable, fully tested, clean code.

## Testing Practices (1h, SOLO)

- Testing Pyramid Quiz
- TDD Quiz
- Mocha and Chai Quiz
- Practice: Unit Test w/ Mocha and Chai

## Unit Test w/ Mocha and Chai Practice Walkthrough