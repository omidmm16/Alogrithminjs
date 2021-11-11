// --- Directions
// Given a string, return true if the string is a palindrome  
// or false if the string is not a palinedrome

// --- Examples:
// palinedrome("abba") === true
// palinedrome("abcdefg") === false




module.exports = palinedrome

// first solution
function palinedrome(str) {
  const reversed = str.split('').reduce((rev,char)=>char + rev,'') ;

  return reversed === str
}

// secound solution
// function palinedrome(str) {
//   return str.split('').every((char,i)=>{
//     return char === str[str.length - i -1]
//   })
// }