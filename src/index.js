// Import modules
import './sass/style.scss';
import show from './modules/show.js';
import addTask from './modules/addTask.js';
import deleteAllTask from './modules/deleteAllTask.js';
import deleteAllCompleted from './modules/deleteAllCompleted.js';
import {
  newTaskInp, addTaskBtn, deleteAllBtn, deleteAllCompletedBtn,
} from './modules/domElements.js';
import { DateTime } from './modules/luxon.min.js';

// --------------------FUNCTIONS------------------------ //

// Function to add a new task in the UI and the storage
const addTaskUI = () => {
  addTask(newTaskInp.value);
  newTaskInp.value = '';
};

// -----------------------EVENTS---------------------------- //
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

deleteAllCompletedBtn.addEventListener('click', () => {
  deleteAllCompleted();
  show();
});

window.addEventListener('load', () => {
  // Show current time
  const dateP = document.querySelector('.date');
  const currentDate = DateTime.now();
  dateP.textContent = `${currentDate.toLocaleString(DateTime.DATETIME_MED)}`;

  // Show task
  show();
});
