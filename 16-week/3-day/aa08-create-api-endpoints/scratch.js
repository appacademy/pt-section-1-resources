fetch("https://pokeapi.co/api/v2/pokemon/ditto")
  .then((res) => res.json())
//   .then(resBody => console.log(resBody))
  .then((resBody) => console.log({
    pokeName: resBody.name,
    image: resBody.sprites.front_default
  }));


