window.onload = async () => {
  const header = document.createElement("h1");
  header.textContent = "Catstagram Pic";
  document.body.appendChild(header);

  const newImg = document.createElement("img");
  const res = await fetch("https://api.thecatapi.com/v1/images/search");
  const data = await res.json();
  const picURL = data[0].url;
  newImg.setAttribute("src", picURL);
  document.body.appendChild(newImg);

  const popScore = document.createElement("p");
  popScore.textContent = "Popularity Score: ";
  const score = document.createElement("span");
  score.textContent = 0;
  popScore.appendChild(score);
  document.body.appendChild(popScore);

  const upvote = document.createElement("button");
  upvote.textContent = "Upvote";
  upvote.setAttribute("id", "up");
  upvote.addEventListener("click", () => {
    console.log(score.textContent, typeof score.textContent);
    score.innerText = Number(score.textContent) + 1;
  });
  const downvote = document.createElement("button");
  downvote.textContent = "Downvote";
  downvote.setAttribute("id", "down");
  downvote.addEventListener("click", () => {
    console.log(score.textContent, typeof score.textContent);
    score.innerText = Number(score.textContent) - 1;
  });
  const voteContainer = document.createElement("div");
  voteContainer.append(upvote, downvote);
  voteContainer.setAttribute("id", "vote-container");
  document.body.appendChild(voteContainer);

  const newButton = document.createElement("button");
  newButton.textContent = "Get a New Cat";
  newButton.addEventListener("click", async () => {
    const res = await fetch("https://api.thecatapi.com/v1/images/search");
    const data = await res.json();
    const picURL = data[0].url;
    document.querySelector("img").setAttribute("src", picURL);
    console.log("Yoo");
  });
  document.body.appendChild(newButton);
};
