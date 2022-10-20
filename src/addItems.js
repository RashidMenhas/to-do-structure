const arrayobj = [
  {
    index:1,
    description:"test",
    completed:false
  }
];
const addlist = (value) => {
  arrayobj.push({
    index: arrayobj.length + 1,
    description: value,
    completed: false,
  });
  return arrayobj;
};

const getdata = () => arrayobj;

module.exports = addlist;
module.exports = getdata;