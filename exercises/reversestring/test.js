const reverse = require('./index');

test('Rerverse function exists',()=>{
  expect(reverse).toBeDefined();
})

test('Reverse reversing a string',()=>{
  expect(reverse('abcd')).toEqual('dcba');


})

test('Reverse reversing a string',()=>{
  expect(reverse(' abcd')).toEqual('dcba ')
})