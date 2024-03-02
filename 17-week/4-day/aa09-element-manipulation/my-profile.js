
// Set up listener and test with console.log
console.log("This is my profile page!");

window.onload = () => {
  // Create and append new h1 element
  const h1 = document.createElement("h1");
  h1.setAttribute("id", "name");
  h1.setAttribute("class", "my-name");
  h1.innerText = "Will";
  document.body.appendChild(h1);

  h1.addEventListener("submit", (e) =>{
    console.log(e.target)
    e.preventDefault()
    h1.style.color = "blue"
  })



  // Create and append new ul element
  const myDetailsList = document.createElement("ul");
  myDetailsList.setAttribute("id", "details");
  myDetailsList.setAttribute("class", "my-details");
  document.body.appendChild(myDetailsList);

  // Insert the list items programmatically
  const myDetailsArr = [
    "Working on optimizing scripts to make day-to-day tasks easier",
    "I have a dog named Lucky",
    "Favorite vidya is Hades",
    "Looking into getting uping my background game"
  ]
  myDetailsArr.forEach(detail => {
    const li = document.createElement('li');
    li.setAttribute("class", "details");
    li.innerText = detail;
    myDetailsList.appendChild(li);
  });

  // Add a new element and insert a clock into it
  const clockDiv = document.createElement("div");
  clockDiv.setAttribute("id", "clock");
  document.body.appendChild(clockDiv);
  const time = () => {
    const date = new Date();
    const seconds = date.getSeconds();
    const minutes = date.getMinutes();
    const hours = date.getHours();

    clockDiv.innerText = "Current time is " + hours + ":" + minutes + ":" + seconds;
  };
  setInterval(time, 1000);
};
