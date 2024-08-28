/*
Write JavaScript to accomplish all of the tasks below. Do not change any code in
the HTML or CSS files
*/

// Problem One
// Select the first square using its id. Add a button inside the square with the
// number 1 on it.

const sq1 = document.getElementById("problem-one");
const p1Button = document.createElement("button");
p1Button.innerText = "1";
sq1.innerText = "";
sq1.appendChild(p1Button);


// Problem Two
// Select the second square using class names. Change the background color to
// orange, the text color white, and the border to 5px dashed black.

const sq2 = document.querySelector(".square.two");
sq2.style.backgroundColor = "orange";
sq2.style.color = "white";
sq2.style.border = "5px dashed black";


// Problem 3
// Select all of the squares that have a class of "plus", and double their
// width. Increase the size of the font as well.
// HINT: Check the CSS file or use your Dev Tools to find the original width and
// font-size, and then double those sizes.

const plusses = document.querySelectorAll(".plus");
plusses.forEach(sq => {
    sq.style.fontSize = "60px";
    sq.style.width = "100px"
});

// Problem 4
// Select the fourth box. Give it an id of "problem-four". Remove the class of
// "square" and add a class "round". As a result, the item should turn a
// different color and shape due to code in the css file.

const sq4 = document.querySelector(".square.four");
sq4.setAttribute("id", "problem-four");
sq4.setAttribute("class", "four round");

// Problem 5
// Use JavaScript to remove boxes 5, 6, and 7. Can you remove multiple boxes at
// once? Think about what element selectors you could use? How could you
// manipulate attributes so that you could remove them all at once? What other
// approaches can you think of?
// NOTE: There are many possible approaches to this. Try 2-3 approaches and
// evaluate which one achieves the goal in the best way.

const goodBye = document.querySelectorAll(".square.minus, .four + div");
goodBye.forEach(sq => sq.remove());

