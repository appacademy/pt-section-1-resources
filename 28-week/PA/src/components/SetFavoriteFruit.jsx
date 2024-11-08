import { useFavFruit } from "../context/FavFruitContext";

const SetFavoriteFruit = ({ fruits }) => {
  const { favFruitId, setFavFruitId } = useFavFruit();

  return (
    <div className="set-fav-fruit">
      <h2>Select your Favorite Fruit</h2>
      <label>
        <select
          value={favFruitId}
          onChange={(e) => setFavFruitId(e.target.value)}
        >
          {fruits.map(fruit => (
            <option
              key={fruit.id}
              value={fruit.id}
            >
              {fruit.name}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}

export default SetFavoriteFruit;
