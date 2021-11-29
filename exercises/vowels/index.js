// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  
  const matches = str.match(/[aoiue]/gi);

  return matches ? matches.length:0;
}


module.exports = vowels

// function vowels(str) {
//   let vowelChar = ['a','o','e','u','i'];
//    let count = 0
//   for (char of str.toLowerCase()){
//     if(vowelChar.includes(char)){
//       count++
//     }
//   }
//   return count
// }
