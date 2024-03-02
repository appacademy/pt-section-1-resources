/****************************** ADD DOG BUTTON ******************************/
const add = document.getElementById("add");
add.addEventListener("click", async () => {
  try {
    const res = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await res.json();

    const url = data.message; // URL of new dog image

    /*--------------- Get breed (Hint: Parse from URL) ---------------- */
    // Your code here
    let breed = url.split("/")[4];
    //    console.log(breed)

    /*------------ Create new dog card with the url above ------------- */
    /* (use the HTML structure for the current dog image in the index.html
            file to create a new image with the url) */
    // Your code here

    // let newLi = document.createElement("li");
    // // console.log("li", li);

    // let newFigure = document.createElement("figure");
    // // console.log("li", newFigure);

    // let newImg = document.createElement("img");
    // newImg.src = url;

    // console.log("li", newImg)
    // let figCaption = document.createElement("figcaption");
    // figCaption.innerText = breed;
    // // console.log("li", figCaption)

    // newFigure.appendChild(newImg);
    // newFigure.appendChild(figCaption);

    // newLi.appendChild(newFigure);
    // console.log("new figure", newLi)

    let theUl = document.getElementsByTagName("ul")[0];

    console.log("the ul", theUl);

    let newLi = document.createElement("li");
    // // console.log("li", li);

    newLi.innerHTML += `
                <figure>
                    <img src="${url}"/>
                    <figcaption>${breed}</figcaption>
                </figure>
        `;
    theUl.appendChild(newLi);
    /* Add the new dog card as a child to the ul in the .gallery element */
    // Your code here
  } catch (e) {
    console.log("Couldn't fetch dog :(");
  }
});

/************************** REMOVE FIRST DOG BUTTON **************************/
const removeFirst = document.getElementById("remove-first");
removeFirst.addEventListener("click", () => {
  /*-------------------- Select the first dog card --------------------- */
  // Your code here
  const firstDog = document.querySelector("li");
  //   console.log(firstDog)
  if (firstDog) {
    firstDog.remove();
  } else {
    console.log("no dogs to delete");
  }
  /*-------------------- Remove the first dog card --------------------- */
  // Your code here
  if (firstDog) {
    firstDog.remove();
  } else {
    console.log("No dogs left!! :(");
  }
});

/************************** REMOVE LAST DOG BUTTON ***************************/
const removeLast = document.getElementById("remove-last");
removeLast.addEventListener("click", () => {
  /*-------------------- Select the last dog card ----------------------- */
  // Your code here
  // let allLis = document.querySelector("li:last-child")[allLis.length - 1];
  let allLis = document.querySelector("li")[allLis.length - 1];
    // console.log("last child:",  allLis)
//   let lastDog = allLis[allLis.length - 1];

  /*-------------------- Remove the last dog card ----------------------- */
  // Your code here
  if (allLis) {
    allLis.remove();
  } else {
    console.log("no dogs left to remove");
  }
});
