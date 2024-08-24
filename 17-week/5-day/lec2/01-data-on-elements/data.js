document.addEventListener("DOMContentLoaded", () => {
    const addButton = document.getElementById("add");
    addButton.addEventListener("click", (e) => {
        e.preventDefault();
        const newLi = document.createElement("li");
        const name = document.getElementById("name");
        const type = document.getElementById("type");
        newLi.textContent = name.value;
        newLi.setAttribute("data-type", type.value);

        const ul = document.querySelector("#shopping-list");
        ul.appendChild(newLi);
        name.value = "";
        type.value = "dairy";
    })
})
