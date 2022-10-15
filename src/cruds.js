let arrayobj = [];
export const addlist = (value) => {
  arrayobj.push({
    index: arrayobj.length + 1,
    description: value,
    completed: false,
  });

  localStorage.setItem('tasks', JSON.stringify(arrayobj));
};

export const getdata = () => {
  const a = localStorage.getItem('tasks');
  arrayobj = JSON.parse(a);
  if (arrayobj == null) {
    arrayobj = [];
  }
  return arrayobj;
};

export const removetask = (id) => {
  arrayobj = arrayobj.filter((item) => `${item.index}` !== id);
  arrayobj = arrayobj.map((item, index) => ({
    ...item, index,
  }));
  localStorage.setItem('tasks', JSON.stringify(arrayobj));
};