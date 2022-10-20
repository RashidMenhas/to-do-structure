import './style.css';
import './index.html';
import {
  addlist, checkedItem, clearAllData, getdata, removetask, updateData,
} from './cruds.js';

const input = document.querySelector('.entered-list');
const addBtn = document.querySelector('.add-btn');
const task = document.querySelector('.task');
const clearBtn = document.getElementById('clear-btn');

input.addEventListener('keyup', () => {
  if (input.value.trim() !== 0) {
    addBtn.classList.add('active');
  } else {
    addBtn.classList.remove('active');
  }
});

function setData() {
  const arrayobj = getdata();
  let newData;
  task.innerHTML = '';
  arrayobj.forEach((item) => {
    newData = `
                  <div class="item" id="${item.index}">
                <div class="text" id="${item.index}">
                                <input class="checkbox" type="checkbox" id="checbox">
                                <p class="label">${item.description}</p>
                                <input  id="${item.index}" class="edit-input" type="text" value="${item.description}">
                            </div>
                            <div class="item-btn" id="${item.index}">
                                <i id="deleted" class="fa-solid fa-trash-can"></i>
                                <i id ="menu" class="fa-solid fa-ellipsis-vertical"></i>
                                <i id="update" class="fa-solid fa-arrow-right"></i>
                            </div>
                            </div>`;
    task.innerHTML += newData;
  });
}
setData();
// add new item to the list
addBtn.addEventListener('click', () => {
  if (input.value.trim() !== '') {
    addlist(input.value.trim());
    setData();
    input.value = '';
  } else {
    alert('Please Fill the field');
  }
});
// Delete functionality
task.addEventListener('click', (e) => {
  if (e.target.classList.contains('fa-trash-can')) {
    const id = e.target.parentElement;
    removetask(id.id);
    e.target.parentElement.parentElement.remove();
    window.location.reload();
  }
  if (e.target.classList.contains('fa-ellipsis-vertical')) {
    e.target.classList.add('hidden');
    e.target.parentElement.children[0].classList.value += ' show';
  }
  if (e.target.classList.contains('label')) {
    e.target.classList.add('hidden');
    e.target.parentElement.children[2].classList.value += ' show';
  }
  if (e.target.classList.contains('edit-input')) {
    e.target.parentElement.parentElement.children[1].children[2].classList.add('show');
    e.target.parentElement.parentElement.children[1].children[0].classList.remove('show');
    e.target.parentElement.parentElement.children[1].children[1].classList.add('hidden');
  }
  if (e.target.classList.contains('fa-arrow-right')) {
    e.target.parentElement.parentElement.children[1].children[0].classList.remove('show');
    e.target.parentElement.parentElement.children[1].children[1].classList.add('show');
    e.target.parentElement.parentElement.children[1].children[2].classList.remove('show');
    updateData(e.target.parentElement.parentElement.children[0].children[2].value,
      e.target.parentElement.parentElement.children[0].children[2].id);
    setData();
  }
});

function setCheckedList() {
  document.querySelectorAll('.item').forEach((list, index) => {
    const data = JSON.parse(localStorage.getItem('tasks'));
    if (data[index].completed === true) {
      list.children[0].children[0].setAttribute('checked', 'checked');
      list.children[0].children[1].classList.add('completed');
    } else if (data[index].completed === false) {
      list.children[0].children[0].removeAttribute('checked');
      list.children[0].children[1].classList.remove('completed');
    }
  });
}

task.addEventListener('click', (e) => {
  if (e.target.classList.contains('checkbox')) {
    const divId = e.target.parentElement;
    checkedItem(divId.id);
    setCheckedList();
  }
});

setCheckedList();

clearBtn.addEventListener('click', () => {
  clearAllData();
  setData();
  // setCheckedList();
});