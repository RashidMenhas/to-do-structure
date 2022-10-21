let arrayobj=[
    {
        index : 1,
        description : " rashid",
        completed : false
    },
    {
        index : 2,
        description : " rashid",
        completed : false
    },
    {
        index : 3,
        description : " menhas",
        completed : true
    },
];
const checkedItem = (id) => {
    if (arrayobj[id].completed === false) {
      arrayobj[id].completed = true;
    } else {
      arrayobj[id].completed = false;
    }
return arrayobj;
  };

  const getdata = () => arrayobj;


  module.exports = checkedItem;
  module.exports = getdata;