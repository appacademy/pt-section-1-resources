import { resetScore } from "./score.js";
import { resetComments } from "./comments.js";

export const createMainContent = () => {
  // Create h1
  const h1 = document.createElement("h1");
  h1.innerText = "Catstagram";

  // Create img
  const img = document.createElement("img");
  img.style.margin = "20px";
  img.style.maxWidth = "750px";

  const newKittenBtn = createNewKittenBtn();

  const container = document.querySelector(".container");
  container.appendChild(h1);
  container.append(newKittenBtn);
  container.appendChild(img);

  const savedImg = localStorage.getItem("img");
  savedImg ? img.src = savedImg : fetchImage();
};

const storeImage = (imgUrl) => {
  localStorage.setItem("img", imgUrl);
}

const fetchImage = async () => {
  // Fetch image from API and set img url
  try {
    const kittenResponse = await fetch(
      "https://api.thecatapi.com/v1/images/search?size=small"
    );
    // Converts to JSON
    const kittenData = await kittenResponse.json();
    // console.log(kittenData);
    const kittenImg = document.querySelector("img");
    kittenImg.src = kittenData[0].url;
    storeImage(kittenData[0].url);

    kittenImg.addEventListener("load", () => {
      resetScore();
      resetComments();
    });
  } catch (e) {
    console.log("Failed to fetch image", e);
  }
};

const createNewKittenBtn = () => {
  // Create "New Kitten" button
  const newKittenBtn = document.createElement("button");
  newKittenBtn.id = "new-kitten";
  newKittenBtn.innerText = "New Kitten";
  newKittenBtn.addEventListener("click", fetchImage);
  return newKittenBtn;
};
