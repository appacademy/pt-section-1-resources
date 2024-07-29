//Stack data structure
// first in, last out

//Commonly in JS we use arrays (push and pop) to emulate stacks


//CALL STACK - structure (based on a stack) that keeps track of function calls
// what is the order of operations?
//The call stack ONLY keeps track of function CALLS

//A function is pushed to the call stack when its called 
//A function is popped off the call stack when it returns

//The function that is currently being executed is ALWAYS the function at the very top
// of the call stack
//ALL FUNCTIONS BELOW THE ONE ON THE TOP is paused

//Recursion - The act of a function calling itself
//its very similar iteration (looping) but its not iteration

//Nested russian doll OR taking a big problem and making smaller and smaller and smaller

/* 

//Three important parts of recursive functions (YOU MUST HAVE AT LEAST 2/3 (base case must be implied))
1. Recursive case - In what condition do we recurse?

2. Recursive STEP - Manipulating something so you eventually hit the base case

3. Base case - in what condition do we stop recursion?
*/

//Inifinite recursion is possible, so have a base case

//When you are using recursion to build something (array, string, etc)
//1. You have to build it backwards
//2. Typically (almost always) you will use the return statements to build that thing

function reverseName(name) {
    let nameArr = name.split('');
    let lastLetter = nameArr.pop();
    
    console.log(lastLetter)
    
    if (nameArr.length) {
      let string = nameArr.join('');
      reverseName(string);
    }

    return;
  }
  
  reverseName("marlon")