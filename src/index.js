// Import modules
import './sass/style.scss';
import show from './modules/show.js';
import addTask from './modules/addTask.js';
import removeTask from './modules/removeTask';
import { newTaskInp, addTaskBtn, divToDoList } from './modules/domElements.js';
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

divToDoList.addEventListener('click', (e) => {
  console.log(e.target.parentElement.id);
  if (e.target.tagName === 'BUTTON') {
    console.log(e.target.parentElement.id);
    removeTask(e.target.parentElement.id);
  }
});

window.addEventListener('load', () => {
  // Show current time
  const dateP = document.querySelector('.date');
  const currentDate = DateTime.now();
  dateP.textContent = `${currentDate.toLocaleString(DateTime.DATETIME_MED)}`;
  show();
});
