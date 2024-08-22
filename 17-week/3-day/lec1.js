document.addEventListener("DOMContentLoaded", () => {

    // Get the current val of an attribute
    // let's find the src of the img
    const img = document.getElementById("luffy-img");
    console.log(img.getAttribute("src"));

    // Set an attribute on an element
    // let's add the "centered" class to the main html tag
    const main = document.querySelector("main");
    main.setAttribute("class", "centered")

    // Removing an attribute on an element
    // let's remove the inline styling on all the elements with the class of "featured-article"
    const articles = document.querySelectorAll(".featured-article");
    articles.forEach(div => div.removeAttribute("style"));

    // Editing CSS properties
    // let's add an underline to our second h2 element (h2 that reads "Featured Content")
    const secondH2 = document.querySelectorAll("h2")[1];
    secondH2.style.textDecoration = "underline";

    // Creating an HTML element and adding it to the DOM
    // let's add an additional nav link to our ul - Let's give it the text "Merch"
    const newA = document.createElement("a");
    newA.textContent = "Merch";
    const newLi = document.createElement("li");
    newLi.appendChild(newA);
    const ul = document.querySelector("ul");
    ul.appendChild(newLi);

    // Removing HTML Elements from the DOM
    // let's remove the "View Gallery" link - has an id of "gallery-link"
    const viewG = document.getElementById("gallery-link");
    viewG.remove();
})




// Let's wrap all of this in an event listener for the DOMContentLoaded event
