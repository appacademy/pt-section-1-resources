function stretch() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("done stretching");
      res();
    }, 1000);
  });
}

function runOnTreadmill() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("done running on treadmill");
      resolve();
    }, 500);
  });
}

function liftWeights() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("done lifting weights");
      res();
    }, 2000);
  });
}

async function workout() {
  // stretch()
  //   .then(runOnTreadmill)
  //   .then(liftWeights)
  //   .then(() => console.log("done working out"));
  // stretch();
  // runOnTreadmill();
  // liftWeights();
  // console.log("done working out")
  await stretch();
  await runOnTreadmill();
  await liftWeights();
  console.log("done working out");
}

/* ============================ TEST YOUR CODE ============================

Run the file (`node phase-1.js`) and check your output against the expected
output.
*/

workout();
// should print out the following:
// done stretching
// done running on treadmill
// done lifting weights
// done working out
