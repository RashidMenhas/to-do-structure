let arrayobj = [{
  index: 1,
  desc: 'rashid',
  competed: false,
},
{
  index: 2,
  desc: 'sami',
  competed: false,
},
];
const removetask = (id) => {
  arrayobj = arrayobj.filter((item) => `${item.index}` !== id);
  arrayobj = arrayobj.map((item, index) => ({
    ...item, index,
  }));
  return arrayobj;
};

const getdata = () => arrayobj;

module.exports = removetask;
module.exports = getdata;