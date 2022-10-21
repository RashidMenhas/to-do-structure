const arrayobj = [
  {
    index: 1,
    description: ' rashid',
    completed: false,
  },
  {
    index: 2,
    description: ' rashid',
    completed: false,
  },
  {
    index: 3,
    description: ' menhas',
    completed: true,
  },
];

const updateData = (value, id) => {
  arrayobj[id].description = value;
  return arrayobj;
};

const getdata = () => arrayobj;

module.exports = updateData;
module.exports = getdata;