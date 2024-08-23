export function changeTitle() {
    // Change the title of the page to "(Your name)'s Portfolio"

    // Opt 1
    document.title = "John Doe's Portfolio";
    // Opt 2
    const title = document.querySelector("title");
    title.innerText = "John Doe's Portfolio";

}

export function changeHeader() {
    // Change the name in the h1 of the page to your name

    const header = document.querySelector("h1");
    header.innerText = "Greg Isales"
}

export function changeAboutMe() {
    /* Update the first paragraph in the About Me section with a small
     passage about yourself */

    const firstP = document.querySelector("div.section > p");
    firstP.innerText = "I was a young lad at one point."
}
