# M1-W4-D1

- Callbacks

## Callbacks Lecture

- First Class Function | [MDN:](https://developer.mozilla.org/en-US/docs/Glossary/First-class_Function)

  1. Stored in a variable (last week)
  2. Passed as an argument to a function (today)
  3. Returned from a function (Later this week)

- Stored in a variable

  ```js
  let func1 = function(){
    console.log('I\'m stored in a variable');
  };

  console.log(func1());
  ```

- Passed as an argument to a function

  ```js
  let higherOrderFunction = function(callback){
    callback();
  };

  let intoAFunction = function() {
    console.log('I\'m being passed into a function');
  };

  let intoAFunctionPt2 = function() {
    console.log('I\'m ALSO being passed into a function');
  }

  higherOrderFunction(intoAFunction);
  higherOrderFunction(intoAFunctionPt2);
  ```

- Returned from a function (Later this week and also week 5)

`Vocabulary`

- Higher Order Function
  - A function that intakes and/or returns another function.

- Callback
  - A function passed into another function

## Callback Project pt1 (paired, 50m)

Problems 1-6

## Walkthrough pt1

## Callback Project pt2 (paired 50m)

Problems 7-12

## Walkthrough pt2