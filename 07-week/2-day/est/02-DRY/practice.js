const findBiggerNum = (n1, n2) => {
  // ternary
  let bigNum = n1 > n2 ? n1 : n2;
  return bigNum;
};

function multiplyBiggerNumByTwo(num1, num2) {
  let bigNum = findBiggerNum(num1, num2);
  return bigNum * 2;
}

function divideBiggerNumByThree(num1, num2) {
  let bigNum = findBiggerNum(num1, num2);
  return bigNum / 3;
}

function eatMostTacos(sum1, sum2) {
  let bigNum = findBiggerNum(sum1, sum2);
  return `I ate ${bigNum} tacos.`;
}

function adoptSmallerDog(weight1, weight2) {
  let smallDog = findBiggerNum(weight1, weight2) === weight1 ? weight2 : weight1;
  // if (weight1 < weight2) {
  //   smallDog = weight1;
  // } else {
  //   smallDog = weight2;
  // }
  return `I adopted a dog that weighs ${smallDog} pounds.`;
}

/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  multiplyBiggerNumByTwo: multiplyBiggerNumByTwo,
  divideBiggerNumByThree,
  eatMostTacos,
  adoptSmallerDog,
};
