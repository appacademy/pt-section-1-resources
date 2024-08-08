function firstStep(input) {
  return input.split("&");
}

function secondStep(input) {
  return input.map((kvPair) => kvPair.split("="));
}

function thirdStep(input) {
  return input.map(([k, v]) => [k, v.replace(/\+/g, " ")]);
}

function fourthStep(input) {
  return input.map(([k, v]) => [k, decodeURIComponent(v)]);
}

function fifthStep(input) {
  return input.reduce((acc, [k, v]) => {
    acc[k] = v;
    return acc;
  }, {});
}

function parseBody(str) {
  const splitPairs = firstStep(str);

  const splitKVPairs = secondStep(splitPairs);

  const addedSpaces = thirdStep(splitKVPairs);

  const decoded = fourthStep(addedSpaces);

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
  parseBody,
};
