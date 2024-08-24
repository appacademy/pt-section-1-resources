// Your code here
document.addEventListener("DOMContentLoaded", () => {
    const addButton = document.getElementById("add");
    addButton.addEventListener("click", (e) => {
        const newLi = document.createElement("li");
        const name = document.getElementById("name");
        const type = document.getElementById("type");
        newLi.innerText = name.value;
        newLi.dataset.type = type.value;

        const ul = document.querySelector("#shopping-list");
        ul.appendChild(newLi);
        name.value = "";
        type.value = "drinks"
        e.preventDefault();
    })
})