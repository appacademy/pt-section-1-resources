/*
Implement these functions to convert values into the appropriate number base.
Consult documentation on how to utilize the following methods:
  parseInt()
  toString()
  String.fromCharCode()
  charCodeAt()
*/

/* Base 2 to base 16 */
function binaryToHexadecimal(blob) {
  const dec = parseInt(blob.slice(2), 2);
  return "0x" + dec.toString(16);
}

// console.log('Binary to hexadecimal:')
// console.log(binaryToHexadecimal('0b1010')) // '0xa'
// console.log(binaryToHexadecimal('0b0011')) // '0x3'
// console.log('')
/* Base 16 to base 2 */
function hexadecimalToBinary(blob) {
  const dec = parseInt(blob);
  return "0b" + dec.toString(2);
}
// console.log('Hexadecimal to binary:')
// console.log(hexadecimalToBinary('0xa1'))  // '0b10100001'
// console.log(hexadecimalToBinary('0xff'))  // '0b11111111'
// console.log('')

/* Base 10 to ASCII */
function decimalToAscii(blob) {
  return String.fromCharCode(blob);
}

/* Base 2 to ASCII */
function binaryToAscii(blob) {
  return String.fromCharCode(blob);
}

/* Base 16 to ASCII */
function hexadecimalToAscii(blob) {
  return String.fromCharCode(blob);
}

/* ASCII to base 10 */
function asciiToDecimal(blob) {
  const codes = [];
  for (let i = 0; i < blob.length; i++) {
    codes.push(blob.charCodeAt(i))
  }
  return codes;
}
// console.log('ASCII to decimal:')
// console.log(asciiToDecimal('HELLO'))   // [ 72, 69, 76, 76, 79 ]
// console.log(asciiToDecimal('world!'))  // [ 119, 111, 114, 108, 100, 33 ]

// console.log('Decimal to ASCII:')
// console.log(decimalToAscii(65))  // 'A'
// console.log(decimalToAscii(97))  // 'a'
// console.log('')

// console.log('Binary to ASCII:')
// console.log(binaryToAscii('0b01000010'))  // 'B'
// console.log(binaryToAscii('0b01100010'))  // 'b'
// console.log('')

// console.log('Hexadecimal to ASCII:')
// console.log(hexadecimalToAscii('0x43'))  // 'C'
// console.log(hexadecimalToAscii('0x63'))  // 'c'
// console.log('')


module.exports = {
  binaryToHexadecimal,
  hexadecimalToBinary,
  decimalToAscii,
  binaryToAscii,
  hexadecimalToAscii,
  asciiToDecimal,
};
