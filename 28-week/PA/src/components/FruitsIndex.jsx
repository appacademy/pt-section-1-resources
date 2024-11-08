import { Link } from "react-router-dom";

function FruitsIndex({ fruits }) {
  return (
    <>
      <h2>Fruits Index</h2>
      {fruits.map(fruit => (
        <Link key={fruit.id} to={`/fruits/${fruit.id}`}>{fruit.name}</Link>
      ))}
    </>
  );
}

export default FruitsIndex;
