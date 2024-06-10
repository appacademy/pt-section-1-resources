//Returns help us spit stuff out of functions and tells the function that it is done
//Every function has a return

function sayHi(name) {
    console.log(`Whats up ${name}`);

    //Implicit return
    //If we don't use the keyword return, JS will return anyway
    //It will return undefined
}

//sayHi("King");

//console.log("After function")


function multiply(num1, num2) {
    // return num1 * num2;
    console.log('hi')
    console.log(num1 * num2)
    return "Howdy"
}

//THE FUNCTION CALL EVALUATES TO THE RETURN STATEMENT

let result1 = multiply(9, 9); //I am setting result equal to whatever the function returns
let result2 = multiply(3, 3);

//String interpolation
console.log(`The result of this function is: ${result2}, ${result1}`);