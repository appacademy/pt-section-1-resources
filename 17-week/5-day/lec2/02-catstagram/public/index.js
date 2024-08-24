const setImg = async (imgRef) => {
    const res = await fetch("https://api.thecatapi.com/v1/images/search");
    const data = await res.json();
    const picUrl = data[0].url;
    imgRef.setAttribute("src", picUrl);
}

window.onload = async () => {

  const header = document.createElement("h1");
  header.textContent = "Catstagram Is Cool";
  document.body.appendChild(header);

  const img = document.createElement("img");
  await setImg(img);
  document.body.appendChild(img);

  const addButton = document.createElement("button");
  addButton.innerText = "Get New Cat";
  addButton.addEventListener("click", async () => {
   await setImg(img);
  });
  document.body.appendChild(addButton);
};
