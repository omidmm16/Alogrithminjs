const reverseInt = require('./index');

test('ReverseInt function  exists ', () => {
  expect(typeof reverseInt).toEqual('function') 
})
test('ReverseInt handle 0 as input',()=>{
  expect(reverseInt(0)).toEqual(0) 
})

test('ReverseInt flips a positive number',()=>{
  expect(reverseInt(5)).toEqual(5);
  expect(reverseInt(15)).toEqual(51);
  expect(reverseInt(90)).toEqual(9);
  expect(reverseInt(2359)).toEqual(9532);

})
test('ReserseInt flip a negative number',()=>{
  expect(reverseInt(-5)).toEqual(-5);
  expect(reverseInt(-15)).toEqual(-51);
  expect(reverseInt(-90)).toEqual(-9);
  expect(reverseInt(-2359)).toEqual(-9532);
  
})