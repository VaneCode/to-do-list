// Import modules
import './sass/style.scss';
import show from './modules/show.js';
import addTask from './modules/addTask.js';
import deleteAllTask from './modules/deleteAllTask.js';
import removeTask from './modules/removeTask.js';
import updateTaskCompleted from './modules/updateTaskCompleted.js';
import updateTaskDescription from './modules/updateTaskDescription.js';
import {
  newTaskInp, addTaskBtn, deleteAllBtn, deleteBtns
} from './modules/domElements.js';
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

deleteAllBtn.addEventListener('click', () => {
  deleteAllTask();
  show();
});

window.addEventListener('load', () => {
  // Show current time
  const dateP = document.querySelector('.date');
  const currentDate = DateTime.now();
  dateP.textContent = `${currentDate.toLocaleString(DateTime.DATETIME_MED)}`;
  show();

  console.log(deleteBtns);
});
