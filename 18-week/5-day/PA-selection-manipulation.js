/*
Write JavaScript to accomplish all of the tasks below. Do not change any code in
the HTML or CSS files
*/

// Problem One
// Select the first square using its id. Add a button inside the square with the
// number 1 on it.

// Your code here
//grab el by id
let firstSquare = document.querySelector("#problem-one")
// console.log("first square", firstSquare)
firstSquare.innerText = ""
//add a button
let firstSquareButton = document.createElement("button")
firstSquareButton.innerText = "1"

// console.log("button", typeof firstSquareButton.innerText)
// with num 1
firstSquare.appendChild(firstSquareButton)


// Problem Two
// Select the second square using class names. Change the background color to
// orange, the text color white, and the border to 5px dashed black.

// Your code here
// use a class name in my selector
let secondSquare = document.querySelector(".square.two")
// let secondSquare = document.getElementsByClassName("square two")
// console.log(secondSquare)
secondSquare.style.color = "white"
secondSquare.style.backgroundColor = "orange"
secondSquare.style.border = "5px dashed black"

// Problem 3
// Select all of the squares that have a class of "plus", and double their
// width. Increase the size of the font as well.
// HINT: Check the CSS file or use your Dev Tools to find the original width and
// font-size, and then double those sizes.

// Your code here
let plusSquares = document.querySelectorAll(".plus")
// let plusSquares = document.getElementsByClassName("plus")
// console.log("plus squares: ", Array.from(plusSquares))
plusSquares.forEach(el =>{
    // console.log("el", el)
    el.style.width = "100px"
    el.style.fontSize = "60px"
})

//use class to grab ele

// Problem 4
// Select the fourth box. Give it an id of "problem-four". Remove the class of
// "square" and add a class "round". As a result, the item should turn a
// different color and shape due to code in the css file.

// Your code here

let fourSquare = document.querySelector(".four")
//Remove the class of "square"
fourSquare.removeAttribute("class", "square")
// console.log("fourSquare", fourSquare)

// add a class "round"
fourSquare.setAttribute("id", "problem-four")
fourSquare.setAttribute("class", "round")


// Problem 5
// Use JavaScript to remove boxes 5, 6, and 7. Can you remove multiple boxes at
// once? Think about what element selectors you could use? How could you
// manipulate attributes so that you could remove them all at once? What other
// approaches can you think of?
// NOTE: There are many possible approaches to this. Try 2-3 approaches and
// evaluate which one achieves the goal in the best way.

// Your code here

let allSquares = document.querySelectorAll(".square")
// console.log("all squares", allSquares)

allSquares.forEach((el, idx) =>{
    // console.log("el", el, idx)
    // console.log("what is the type of idx: ", typeof idx)
    if(idx === 3 || idx === 4 || idx === 5){
        console.log("is this correct?", el)
        el.remove()
    }
})

