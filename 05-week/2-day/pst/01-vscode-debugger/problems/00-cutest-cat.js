/*

Fix the `cutestCat` function. Should return the cat with the highest `cuteness`
rating.
*/

function cutestCat(cats) {
  let cutest = cats[0];
  let i = 1;

  while (i < cats.length) {
    const cat = cats[i];
    debugger
    if (cat.cuteness > cutest.cuteness) {
      debugger
      cutest = cat;
    }
    i++;
  }
  debugger
  return cutest;
}

const cats = [
  { name: 'Fluffy', cuteness: 9 },
  { name: 'Princess', cuteness: 6 },
  { name: 'Tiger', cuteness: 7 },
  { name: 'Indie', cuteness: 5 },
]
debugger
console.log(cutestCat(cats)); // { name: 'Fluffy', cuteness: 9 }