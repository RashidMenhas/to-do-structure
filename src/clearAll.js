
let arrayobj =[
    {
    index : 1,
    descreption : "desc",
    completed : false
},
{
    index : 2,
    descreption : "rashid",
    completed : true
},
{
    index : 3,
    descreption : "sami",
    completed : false
},
];
const clearAllData = () => {
    arrayobj = arrayobj.filter((item) => item.completed !== true);
    arrayobj = arrayobj.map((item, index) => ({
      ...item, index,
    }));
    return arrayobj;
  };

  const getdata = () => arrayobj;

  module.exports = clearAllData;
  module.exports = getdata;