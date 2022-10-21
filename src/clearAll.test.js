const clearAllData = require('./clearAll.js');
const getdata = require ('./clearAll.js');

describe('clear all function ', ()=>{
    test ('test clear all function',()=>{
        expect(clearAllData()).toBe(getdata());
    })
})