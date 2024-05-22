/*

Fix the `cutestCat` function. Should return the cat with the highest `cuteness`
rating.
*/

debugger
function cutestCat(cats) {
  let cutest = cats[0];
  let i = 1;

  while (i < cats.length) {
    debugger // console.log(i, cutest)
    const cat = cats[i];
    if (cat.cuteness > cutest.cuteness) {
      debugger
      cutest = cat;
    }
    i++;
  }

  return cutest;
}

const cats = [
  { name: 'Princess', cuteness: 6 },
  { name: 'Tiger', cuteness: 7 },
  { name: 'Indie', cuteness: 5 },
  { name: 'Fluffy', cuteness: 9 },
]
debugger
console.log(cutestCat(cats)); // { name: 'Fluffy', cuteness: 9 }