// --- Directions
// Given an Integer, return an integer that is the reverse 
// ordering of Numbers.
// --- Examples
// reverseInt(15) === 51
// reverseInt(981) === 189
// reverse(-15) === 51
// revese(500) === 5

function reverseInt(n) {


  const reversed = n.toString().split('').reverse().join('');

  return parseInt(reversed) * Math.sign(n)

}

module.exports = reverseInt