// import { useContext } from "react";
// import { FavFruitContext } from "../context/FavFruitContext";
import { Link } from "react-router-dom";

import { useFavFruit } from "../context/FavFruitContext";

const FavoriteFruit = ({ fruits }) => {
  // const { favFruitId } = useContext(FavFruitContext);
  const { favFruitId } = useFavFruit();
  const fruit = fruits.find(fruit => fruit.id === favFruitId);

  return (
    <>
      <h2>Favorite Fruit</h2>
      <Link to={`/fruits/${favFruitId}`}>{fruit.name}</Link>
    </>
  )
}

export default FavoriteFruit;
