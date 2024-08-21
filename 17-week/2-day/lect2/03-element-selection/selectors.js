const select = () => {
    /* Write queries for each of the following */

    /* Section 1 */
    // 1. Get all seeded fruit elements
    const seeded = document.getElementsByClassName("seed"); // HTMLCollection
    const seeded2 = document.querySelectorAll(".seed"); // NodeList

    // 2. Get all seedless fruit elements
    const seedless = document.getElementsByClassName("seedless"); // HTMLCollection
    const seedless2 = document.querySelectorAll(".seedless"); // NodeList

    // 3. Get first seedless fruit element
    const firstSeedless = document.getElementsByClassName("seedless")[0];
    const firstSeedless2 = document.querySelectorAll(".seedless")[0];
    const firstSeedless3 = document.querySelector(".seedless");


    /* Section 2 */
    // 4. Get inner span with text "you"
    const spans = document.getElementsByTagName("span"); // HTMLCollection of spans
    const spansArr = Array.from(spans);
    const youSpan = spansArr.find(el => el.innerText === "you");
    console.log(youSpan);

    // 5. Get all children of element "wrapper"
    const wrapChildren = document.getElementById("wrapper").children; // HTMLCollection of children
    const wrapChildren2 = document.querySelectorAll("#wrapper > *")

    // 6. Get all odd number list items in the list
    // Your code here


    // 7. Get all even number list items in the list
    // Your code here

    /* Section 3 */
    // 8. Get all tech companies without a class name
    // Your code here

    // 9. Get "Amazon" list element
    // Your code here

    // 10. Get all unicorn list elements (not the image element)
    // Your code here
}

window.onload = select;