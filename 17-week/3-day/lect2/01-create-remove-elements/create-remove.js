/****************************** ADD DOG BUTTON ******************************/
const add = document.getElementById("add");
add.addEventListener("click", async () => {
    try {
        const res = await fetch("https://dog.ceo/api/breeds/image/random")
        const data = await res.json();

        const url = data.message; // URL of new dog image

        /*--------------- Get breed (Hint: Parse from URL) ---------------- */
        const breed = url.split("/")[4];

        /*------------ Create new dog card with the url above ------------- */
        /* (use the HTML structure for the current dog image in the index.html
            file to create a new image with the url) */
        const newLi = document.createElement("li");
        const newFig = document.createElement("figure");
        const newImg = document.createElement("img");
        newImg.setAttribute("src", url);
        const newCaption = document.createElement("figcaption");
        newCaption.textContent = breed;
        newFig.appendChild(newImg);
        newFig.appendChild(newCaption);
        newLi.appendChild(newFig);
        const ul = document.querySelector("ul");
        ul.appendChild(newLi);


        /* Add the new dog card as a child to the ul in the .gallery element */
        // Your code here

    } catch (e) {
        console.log("Couldn't fetch dog :(")
    }
});

/************************** REMOVE FIRST DOG BUTTON **************************/
const removeFirst = document.getElementById("remove-first");
removeFirst.addEventListener("click", () => {
    /*-------------------- Select the first dog card --------------------- */
    const firstCard = document.querySelector(".gallery li");

    /*-------------------- Remove the first dog card --------------------- */
    firstCard.remove();
});

/************************** REMOVE LAST DOG BUTTON ***************************/
const removeLast = document.getElementById("remove-last");
removeLast.addEventListener("click", () => {
    /*-------------------- Select the last dog card ----------------------- */
    const allCards = document.querySelectorAll(".gallery li");
    const lastCard = allCards[allCards.length - 1];

    /*-------------------- Remove the last dog card ----------------------- */
    lastCard.remove();
});
