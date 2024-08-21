const select = () => {
    /* Write queries for each of the following */

    /* Section 1 */
    // 1. Get all seeded fruit elements
    let seededFruits = document.getElementsByClassName("seed"); // HTMLCollection
    let seededFruits2 = document.querySelectorAll(".seed"); // NodeList

    // 2. Get all seedless fruit elements
    let seedlessFruits = document.getElementsByClassName("seedless"); // HTMLCollection
    let seedlessFruits2 = document.querySelectorAll(".seedless"); // NodeList

    // 3. Get first seedless fruit element
   let firstSeedless = document.querySelectorAll(".seedless")[0];
   let firstSeedless2 = document.querySelector(".seedless");

    /* Section 2 */
    // 4. Get inner span with text "you"
    const spans = document.querySelectorAll("span") // NodeList
    const spanArray = Array.from(spans) // an array of our spans => so I can use an array method
    const youSpan = spanArray.find(span => span.innerText === "you");
    console.log(youSpan);

    // 5. Get all children of element "wrapper"
    const wrapperChildern = document.getElementById("wrapper").children; // HTMLCollection of child elements
    const nodeListWrapperChildren = document.querySelectorAll("#wrapper > *"); // NodeList

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