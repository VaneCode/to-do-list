// Import modules
import './sass/style.scss';
import * as render from './modules/show.js';
import addTask from './modules/addTask.js';
import { newTaskInp, addTaskBtn, deleteBtns } from './modules/domElements.js';
import { DateTime } from './modules/luxon.min.js';

// Function to add a new task in the UI and the storage
const addTaskUI = () => {
  addTask(newTaskInp.value);
  newTaskInp.value = '';
};

newTaskInp.addEventListener('keypress', (event) => {
  if (String(event.key) === String('Enter')) {
    addTaskUI();
  }
});

addTaskBtn.addEventListener('click', () => {
  addTaskUI();
});

// Function to remove a task in the UI and the storage
const removeTask = () => {
  deleteBtns.forEach((button) => {
    console.log('hello1');
    button.addEventListener('click', (e) => {
      console.log('hello2');
      const parent = e.target.parentElement;
      console.log(parent);
    });
  });
};

window.addEventListener('load', () => {
  // Show current time
  const dateP = document.querySelector('.date');
  const currentDate = DateTime.now();
  dateP.textContent = `${currentDate.toLocaleString(DateTime.DATETIME_MED)}`;
  render.show();
  if (deleteBtns !== null) {
    console.log(deleteBtns);
    removeTask();
  }
});
