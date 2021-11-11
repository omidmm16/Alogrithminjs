// -- Directions
// Givien a string, return a new string that reversed 
// order of charactorss
//-- Examples
// reverse('apple') === 'elpppa'
// reverse('hello') === 'olleh'

function reverse(str) {
 return str.split('').reduce((rev,char)=>char + rev,'')
}

module.exports = reverse;


// first solution
// function reverse(str) {

//   return str.split('').reverse().join('');
//   }
  // --- end  first solution --

// --- secound solution ---
// function reverse(str) {
//   let reversed = '';
//    for( let char of str){
//       reversed = char + reversed;
//    }
//    return reversed
// }

// --- end secound solution --- 