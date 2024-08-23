console.log("Ayooo");

// wait for dom to be loaded
document.addEventListener("DOMContentLoaded", () => {
  // Create the h1 and give it text/an ID
  const header = document.createElement("h1");
  header.innerText = "Gregith";
  header.setAttribute("id", "h1id");

  document.body.appendChild(header);

  const foodUl = document.createElement("ul");
  const foods = ["Burritos", "Pizza", "Pasta", "Chocolate"]
  foods.forEach(food => {
    const newLi = document.createElement("li");
    newLi.textContent = food;
    foodUl.appendChild(newLi)
  })

  document.body.appendChild(foodUl);


});
