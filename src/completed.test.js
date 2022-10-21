const checkedItem = require ('./completed.js');
const getdata = require ('./completed.js');

describe ("update item ", () =>{
    test (" check updated item ", ()=>{
        expect (checkedItem(3)).toBe(getdata());
    })
})