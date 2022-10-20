const addlist = require('./addItems.js');
const getdata = require('./addItems.js');

describe('add item want to test', () => {
  test('length of array', () => {
    expect(addlist('Rashid').length).toBe(getdata().length);
  });
});