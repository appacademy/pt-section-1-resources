export function changeTitle() {
    // Change the title of the page to "(Your name)'s Portfolio"


    document.title = "will's page"

}

export function changeHeader() {
    // Change the name in the h1 of the page to your name

    // Your code here
    let theTitle = document.querySelector("h1")
    console.log("the tile", theTitle)
    theTitle.innerText = "Will nice"

}

export function changeAboutMe() {
    /* Update the first paragraph in the About Me section with a small
     passage about yourself */

    // Your code here
    let theH2 = document.querySelector(".section > p")
    console.log("the h2", theH2)
    theH2.innerText = "fun stuff"

}
