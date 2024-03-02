window.addEventListener("DOMContentLoaded", () => {
    // P1

    // add css class when CLICK
    let p1Button = document.querySelector("#make-circle-blue");
    // console.log("p1button: ", p1Button)
    p1Button.addEventListener("click", (e) => {
      let p1Div = document.querySelector("#blue-border-circle");
      // console.log("p1Div: ", p1Div)
      // p1Div.classList.add("blue-fill")
      p1Div.classList = "blue-fill";
    });

    // P2

    let p2Input = document.querySelector("#will-not-check");
    // console.log("p2 input", p2Input)
    p2Input.addEventListener("click", (e) => {
      e.preventDefault();
    });

    // P3

    // click on the button below
    let p3BananaButton = document.querySelector("#change-bananas-status");
    // console.log("p3 b button", p3BananaButton)
    p3BananaButton.addEventListener("click", (e) => {
      // console.log("did i add this correctly?")
      let p3BDiv = document.querySelector("#bananas-div");
      // console.log("p3 B div?", p3BDiv)
      p3BDiv.innerHTML = "No Bananas Today!";

      //create image element
      let newImg = document.createElement("img");
      newImg.src = "./images/no-bananas.png";
      console.log("new img?", newImg);

      let bImgDiv = document.querySelector("#bananas-image-div");
      // console.log("b img div?", bImgDiv)
      //append it to b-image-image div
      bImgDiv.appendChild(newImg);
    });

    // P4

    //event listner
    let cButton = document.querySelector("#store-cookie");
    // console.log("c button", cButton)
    cButton.addEventListener("click", (e) => {
      // console.log("is this setup correctly?")
      let cInput = document.querySelector("#fav-cookie");
      console.log("cInput", cInput.value);

      //create a cookie with value of inputBox
      //key is favCookie -- value is value of inputBox
      document.cookie = `favCookie=${cInput.value}`;
    });

    if (document.cookie) {
      // console.log("doc cooke", document.cookie)
      // reset input val with cookie val
      let inputForCookie = document.querySelector("#fav-cookie");
      // console.log("input for cookie", inputForCookie)
      let cookieArr = document.cookie.split("=");
      // console.log("cookie arr", cookieArr)
      inputForCookie.value = cookieArr[1];
    }

    // P5

    let pieButton = document.querySelector("#save-pie");
    // console.log("pie button", pieButton)
    pieButton.addEventListener("click", (e) => {
      // console.log("did this work?")
      let inputEle = document.querySelector("#pie-type");
      console.log("input ele:", inputEle.value);
      let pieUl = document.querySelector(".pie-list");
      // console.log("pieUl: ", pieUl)

      let newLi = document.createElement("li");

      if (inputEle.value) {
        newLi.innerText = inputEle.value;
        pieUl.appendChild(newLi);
      }

      // TODO: make sure append child gets called
      inputEle.value = "";
      // this is to not do anything if there is no input
      if (inputEle.value.length === 0) {
        return;
      }
    });

    //  P6

    let iceCreamButton = document.querySelector("#save-ice-cream");
    // console.log("ice cream b", iceCreamButton)

    iceCreamButton.addEventListener("click", (e) => {
      let iceInput = document.querySelector("#fav-ice-cream");
      // console.log("ice input", iceInput.value)
      //set item in l storage
      localStorage.setItem("favFlav", iceInput.value);
    });

    let storedItem = localStorage.getItem("favFlav");
    // console.log("stored Item: ", storedItem)
    let iceCreamInput = document.querySelector("#fav-ice-cream");
    if (storedItem) {
      iceCreamInput.value = storedItem;
    }

    // P7
    //Reset basket
    let resetButton = document.querySelector("#reset-basket");
    resetButton.addEventListener("click", (e) => {
      console.log("resetting");
      let fruitStorage = document.querySelector("#fruit-storage");
      fruitStorage.innerHTML = "";
      fruitSpan.innerHTML = 0;
    });

    let appleButton = document.querySelector("#add-apple");
    //   console.log("appl", appleButton);
    appleButton.addEventListener("click", (e) => {
      console.log("print");
      let fruitStorage = document.querySelector("#fruit-storage");
      fruitStorage.innerHTML += "🍎";
      fruitSpan.innerHTML++;
    });

    document.querySelector("#add-orange").addEventListener("click", (e) => {
      // console.log("print");
      let fruitStorage = document.querySelector("#fruit-storage");
      fruitStorage.innerHTML += "🍊";
      fruitSpan.innerHTML++;
    });

    let fruitSpan = document.querySelector("#total-fruit");
    fruitSpan.innerHTML = 0;

    // P8

    document
      .querySelector("#bubble-maker")
      .addEventListener("click", (e) => e.stopPropagation());

    //P9
    document
      .querySelector("#dictionary-fetch")
      .addEventListener("click", async (e) => {
        // console.log("In the e listner")
        let response = await fetch(
          "https://api.dictionaryapi.dev/api/v2/entries/en/dictionary"
        );
        // console.log("response: ", response)
        let resBody = await response.json();

        let resultArea = document.querySelector("#results-area");
        let myUl = document.createElement("ul");
        resultArea.appendChild(myUl);

        let newOl = document.createElement("ol");
        newOl.innerHTML = resBody[0].word;
        myUl.appendChild(newOl);

        let newOl2 = document.createElement("ol");
        newOl2.innerHTML = resBody[0].meanings[0].definitions[0].definition;
        myUl.appendChild(newOl2);
      });
  });
