function binaryToString(binaryBlob) {
  const binBits = [];
  for (let i = 0; i < binaryBlob.length; i+= 8) {
    binBits.push(binaryBlob.slice(i, i + 8));
  }
  return binBits.map(el => String.fromCharCode("0b" + el)).join("");
}

/* Comment in the code below to run local tests */
console.log(binaryToString('010000010100001001000011')); // 'ABC'
console.log(binaryToString('001101100011011100111000')); // '678'


module.exports = binaryToString;
