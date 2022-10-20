const removeitem = require('./removeItem.js');
const getdata = require('./removeItem.js');

test('Remove data item ', () => {
  expect(removeitem('1').length).toBe(getdata().length);
});