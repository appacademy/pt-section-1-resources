document.addEventListener("DOMContentLoaded", () => {
  let currPlayer = "X";

  const switchPlayer = () => {
    currPlayer === "X" ? (currPlayer = "O") : (currPlayer = "X");
  };

  const handleClick = (e) => {
    const currCell = e.currentTarget;
    console.log(currCell.children)
    if (!currCell.children.length) {
      const newImg = document.createElement("img");
      newImg.src =
        currPlayer === "X"
          ? "https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg"
          : "https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-o.svg";
      currCell.appendChild(newImg);
      console.log("BEFORE:", currPlayer)
      switchPlayer();
      console.log("AFTER:", currPlayer)
    }
  };

  document
    .querySelectorAll("div#board > div")
    .forEach((cell) => cell.addEventListener("click", handleClick));
});
