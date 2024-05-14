// const someFunction = () => {}

// someFunction(someArgs)

// const someArr = [1, 2, 3, 4];

// someArr.forEach(() => {})

let higherOrderFunction = function(banana){
    banana();
  };

  let intoAFunction = function() {
    console.log('I\'m being passed into a function');
  };

  let intoAFunctionPt2 = function() {
    console.log('I\'m ALSO being passed into a function');
  }

// higherOrderFunction(intoAFunction);
// higherOrderFunction(intoAFunctionPt2);
higherOrderFunction(intoAFunction, intoAFunctionPt2);