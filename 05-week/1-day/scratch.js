//Stack - A common data structure
/* 
Similar to a stack of papers

To add items onto a stack, you can only add onto the top of the stack
to remove items you can also only remove from the top of the stack

FILO - First in, Last out

Commonly stacks are imitated in javascript by pushing and popping on arrays
*/

//Call stack
//A structure used by Javascript to keep track of function calls 
// (uses a stack data structure)
//CALL STACK - ONLY FOR FUNCTION CALLS

/* 

When a function is CALLED, it is pushed onto the call stack 

Then, when a function RETURNS it is going to be POPPED off the stack

*/

//Recursion - The act of a function calling itself
//Recursion IS NOT ITERATION 
//Recursion is typically used to solve problems that we don't have certain
//guarantees on
//Recursion is OFTEN for nested stuff if we don't know HOW nested it will be

//Ex: flatten an array with any number of nested arrays inside of it


//RECURSION IS MADE OF TWO PARTS:
//1. Recursive case - resumes recursion
//2. Base case - ends recursion

// function countDown(num) {
//     console.log(num);
//     countDown(num - 1)
// }
  
// countDown(10)