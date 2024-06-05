const findBigger = (n1, n2) =>  { // n1 > n2 ? n1 : n2
  if (n1 > n2) {
    return n1;
  } else {
    return n2;
  }
} // n1 > n2 ? n1 : n2

function multiplyBiggerNumByTwo(num1, num2) {
  let bigNum = findBigger(num1, num2)
  return bigNum * 2;
}

function divideBiggerNumByThree(num1, num2) {
  let bigNum = findBigger(num1, num2)
  return bigNum / 3;
}

function eatMostTacos(sum1, sum2) {
  let bigNum = findBigger(sum1, sum2)
  return `I ate ${bigNum} tacos.`;
}

function adoptSmallerDog(weight1, weight2) {
  let smallDog = findBigger(weight1, weight2) === weight1 ? weight2 : weight1;
  return `I adopted a dog that weighs ${smallDog} pounds.`;
}

/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports =
{
  multiplyBiggerNumByTwo: multiplyBiggerNumByTwo,
  divideBiggerNumByThree,
  eatMostTacos,
  adoptSmallerDog,
};
