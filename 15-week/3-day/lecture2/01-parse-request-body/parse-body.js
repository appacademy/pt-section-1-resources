function firstStep(input) {
  return input.split("&");

  // ["key1=val1", "key2=val2"]
}

function secondStep(input) {
  return input.map((kvstring) => kvstring.split("="))

  // [[key1, val1], [key2, val2]]
}

function thirdStep(input) {
  return input.map(([key, val]) => [key, val.replace(/\+/g, " ")])
}


function fourthStep(input) {
  return input.map(([key, val]) => [key, decodeURIComponent(val)])
}

function fifthStep(input) {
  // Naive approach
  // const obj = {};
  // input.forEach(([k, v]) => obj[k] = v);
  // return obj;
  // [{k1: val1}, {k2: val2}]
  // Array.reduce flex
  return input.reduce((acc, [key, val]) => {
    acc[key] = val;
    return acc;
  }, {})
}

function parseBody(str) {
  // return fifthStep(fourthStep(thirdStep(secondStep(firstStep(str)))))
  const splitKVPairs = firstStep(str);

  const splitKandV = secondStep(splitKVPairs);

  const addSpaces = thirdStep(splitKandV);

  const decoded = fourthStep(addSpaces);

  return fifthStep(decoded);
}

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = {
  firstStep,
  secondStep,
  thirdStep,
  fourthStep,
  fifthStep,
  parseBody
};
