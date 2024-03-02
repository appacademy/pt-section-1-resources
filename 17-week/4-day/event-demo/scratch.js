document.addEventListener("DOMContentLoaded", (e) => {
    //! /************************* First Input *************************/

    const inputOne = document.getElementById("input");
    // inputOne.addEventListener('change', (e) => {

        inputOne.addEventListener("input", handleBox);



    //! /************************* Clear Text Button *************************/

    const clearTextButton = document.getElementById("button");
    clearTextButton.addEventListener("click", myFunc);

    function myFunc (event) {

            // event.preventDefault()
            console.log("name: ", event.target.name);
            console.log("id", event.target.id);
            event.target.value = "blue";

            const screenRight = document.querySelector(".screen-right");
            const inputOne = document.getElementById("input");

            screenRight.innerText = "";
            inputOne.value = "";

    }

    //! /************************* Name Form *************************/

    const form = document.getElementById("form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const firstNameInput = document.getElementById("name-input").value;
        const lastNameInput = document.getElementById("lastName-input").value;
        const screenRight = document.querySelector(".screen-right");
        const newDiv = document.createElement("div");

        newDiv.innerText = firstNameInput + " " + lastNameInput;
        // newDiv.dataset.favGame = "Elden Ring";
        newDiv.setAttribute("data-fav-game", "Elden Ring");
        newDiv.id = "Test";
        screenRight.appendChild(newDiv);
    });

    //! /************************* Color Buttons *************************/

    const greenButton = document.getElementById("green-button");
    greenButton.addEventListener("mouseover", (e) => {
    greenButton.addEventListener("click", (e) => {
        const bottomRight = document.getElementById("screen-bottom-right");
        bottomRight.style.backgroundColor = e.target.innerText;

        // Dataset value
        const test = document.getElementById("Test");
        console.log(test.dataset.favGame);
        console.log(test.getAttribute("data-fav-game"));
    });

    const redButton = document.getElementById("red-button");
    // redButton.addEventListener("mouseover", (e) => {
    redButton.addEventListener("click", (e) => {
        const bottomRight = document.getElementById("screen-bottom-right");
        bottomRight.style.backgroundColor = e.target.innerText;
    })})

    const blueButton = document.getElementById("blue-button");
    // blueButton.addEventListener("mouseover", (e) => {
    blueButton.addEventListener("click", (e) => {
        const bottomRight = document.getElementById("screen-bottom-right");
        bottomRight.style.backgroundColor = e.target.innerText;
    });

    //! /************************* Box Size Slider *************************/

    const colorInput = document.getElementById("color-input");
    colorInput.addEventListener("input", (e) => {
        const bottomRight = document.getElementById("screen-bottom-right");
        bottomRight.style.height = e.target.value + "px";
    });
});

const handleBox = (e) => {
    // console.log("e", e)
    const words = e.target.value;
    // console.log("words", words)

    const screenRight = document.querySelector(".screen-right");
    screenRight.innerText = words;
};
