const palindrome = require('./index');

test('palinedrome function is exist',()=>{
  expect(typeof palindrome).toEqual('function');
})

test('"aba" is a palinedrome',()=>{
  expect(palindrome("aba")).toBeTruthy();
})

test('" aba" is not a palinedrome',()=>{
  expect(palindrome(" aba")).toBeFalsy()
})

test('"100000001" is a palinedrome',()=>{
  expect(palindrome("100000000001")).toBeTruthy()
})
test('"pennep" a palindrome', () => {
  expect(palindrome('pennep')).toBeTruthy();
});
