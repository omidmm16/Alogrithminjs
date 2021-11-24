const anagrams = require("./index")

test('anagrams function exists', () => {
  expect(typeof anagrams).toEqual('function');
});

test('"hello" is an anagram of "olleh"',()=>{
  expect(anagrams('hello','llohe')).toBeTruthy();
})