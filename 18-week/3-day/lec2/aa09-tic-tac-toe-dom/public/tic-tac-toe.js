document.addEventListener("DOMContentLoaded", () => {
  let currentMove = "X";

  const toggleMove = () => {
    currentMove = currentMove === "X" ? "O" : "X";
  };

  const handleClick = (e) => {
    const currDiv = e.currentTarget;
    if (!currDiv.children.length) {
      const newImg = document.createElement("img");
      newImg.src =
        currentMove === "X"
          ? "https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg"
          : "https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-o.svg";
      toggleMove();
      e.target.appendChild(newImg);
    }
  };

  document
    .querySelectorAll("#game-board > div")
    .forEach((sq) => sq.addEventListener("click", handleClick));
});
