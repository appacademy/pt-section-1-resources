window.addEventListener("DOMContentLoaded", () => {
  // PROBLEM 1
  // select the button
  const p1Button = document.getElementById("make-circle-blue");
  // add an event listener
  p1Button.addEventListener("click", () => {
    // select the circle element
    const p1Circle = document.getElementById("blue-border-circle");
    // add the "blue-fill class"
    p1Circle.setAttribute("class", "blue-fill");
  });

  // PROBLEM 2
  const p2Box = document.querySelector("#will-not-check");
  p2Box.addEventListener("click", (e) => {
    e.preventDefault();
  });

  // PROBLEM 3
  const p3Button = document.getElementById("change-bananas-status");
  p3Button.addEventListener("click", () => {
    const p3Text = document.getElementById("bananas-div");
    p3Text.innerHTML = "No Bananas Today!";

    const p3Child = document.querySelector("#bananas-image-div > img");
    if (!p3Child) {
      const p3Img = document.createElement("img");
      p3Img.src = "./images/no-bananas.png";
      const p3ImgDiv = document.getElementById("bananas-image-div");
      p3ImgDiv.appendChild(p3Img);
    }
  });

  // PROBLEM 4
  const p4Button = document.querySelector("#store-cookie");
  p4Button.addEventListener("click", () => {
    const p4Value = document.querySelector("#fav-cookie").value;
    document.cookie = `favCookie=${p4Value}; max-age=${30 * 60}`;
  });

  const p4Cookie = document.cookie;
  if (p4Cookie) {
    const p4Input = document.querySelector("#fav-cookie");
    p4Input.value = p4Cookie.split("=")[1];
  }


  // PROBLEM 5
  const p5Button = document.getElementById("save-pie");
  p5Button.addEventListener("click", () => {
    const p5Input = document.getElementById("pie-type");
    const p5ListChildren = document.querySelectorAll("ul.pie-list > li");
    if (p5Input.value && p5ListChildren.length < 5) {
      const p5Li = document.createElement("li");
      p5Li.textContent = p5Input.value;
      const p5Ul = document.querySelector("ul.pie-list");
      p5Ul.appendChild(p5Li);
      p5Input.value = "";
    }
  });

  // PROBLEM 6
  const p6Button = document.getElementById("save-ice-cream");
  p6Button.addEventListener("click", () => {
    const p6Value = document.getElementById("fav-ice-cream").value;
    localStorage.setItem("iceCream", p6Value);
  })
  const p6Saved = localStorage.getItem("iceCream");
  if (p6Saved) document.getElementById("fav-ice-cream").value = p6Saved;

  // PROBLEM 7
  const p7Apples = document.querySelector("#add-apple");
  const p7Oranges = document.querySelector("#add-orange");
  const p7Empty = document.querySelector("#reset-basket");
  const p7Basket = document.querySelector("#fruit-storage");
  const p7Count = document.querySelector("#total-fruit");

  p7Apples.addEventListener("click", () => {
    const count = Number(p7Count.innerText);
    if (count < 25) {
      p7Basket.innerText += "🍎";
      p7Count.innerText = count + 1;
    }
  });

  p7Oranges.addEventListener("click", () => {
    const count = Number(p7Count.innerText);
    if (count < 25) {
      p7Basket.innerText += "🍊";
      p7Count.innerText = count + 1;
    }
  });

  p7Empty.addEventListener("click", () => {
    p7Basket.innerText = "";
    p7Count.innerText = 0;
  });

  // PROBLEM 8
  const p8Button = document.getElementById("bubble-maker");
  p8Button.addEventListener("click", (e) => e.stopPropagation());


  // PROBLEM 9
  const p9Button = document.getElementById("dictionary-fetch");
  p9Button.addEventListener("click", async () => {
    const res = await fetch("https://api.dictionaryapi.dev/api/v2/entries/en/dictionary");
    const data = await res.json();
    const wordData = data[0].word;
    const definitionData = data[0].meanings[0].definitions[0].definition;
    const p9List = document.createElement("ul");
    const wordLi = document.createElement("li");
    wordLi.innerText = `Word: ${wordData}`;
    const defLi = document.createElement("li");
    defLi.innerText = `Definition: ${definitionData}`;
    p9List.append(wordLi, defLi);
    document.querySelector("#results-area").appendChild(p9List);
  })
});
