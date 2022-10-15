import './style.css';
import './index.html';
import { addlist, getdata, removetask } from './cruds.js';

const input = document.querySelector('.entered-list');
const addBtn = document.querySelector('.add-btn');
const task = document.querySelector('.task');

input.addEventListener('keyup', () => {
  if (input.value.trim() !== 0) {
    addBtn.classList.add('active');
  } else {
    addBtn.classList.remove('active');
  }
});
const arrayobj = getdata();

function setData() {
  let newData;
  task.innerHTML = '';
  arrayobj.forEach((item) => {
    newData = `
                  <div class="item">
                <div class="text">
                                <input class="checkbox" type="checkbox" id="checbox">
                                <p class="label">${item.description}</p>
                                <input class="edit-input" type="text" value="${item.description}">
                            </div>
                            <div class="item-btn" id="${item.index}">
                                <i id="deleted" class="fa-solid fa-trash-can"></i>
                                <i id ="menu" class="fa-solid fa-ellipsis-vertical"></i>
                            </div>
                            </div>
                    `;

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
});

task.addEventListener('click', (e) => {
  if (e.target.classList.contains('checkbox')) {
    e.target.parentElement.parentElement.classList
      .toggle('completed');
  }
});
