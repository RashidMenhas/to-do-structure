const updateData = require('./edit.js');
const getdata = require('./edit.js');

describe(' update the edit', () => {
  test(' edit test', () => {
    expect(updateData('sami', 1)).toBe(getdata());
  });
});