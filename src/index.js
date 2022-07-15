// Import modules
import './sass/style.scss';
import show from './modules/show.js';
import addTask from './modules/addTask.js';
import deleteAllTask from './modules/deleteAllTask.js';
import removeTask from './modules/removeTask.js';
import updateTaskCompleted from './modules/updateTaskCompleted.js';
import updateTaskDescription from './modules/updateTaskDescription.js';
import {
  newTaskInp, addTaskBtn, deleteAllBtn,
} from './modules/domElements.js';
import { DateTime } from './modules/luxon.min.js';

// Funtions

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

const addEventEditCheck = (checks) => {
  checks.forEach((check) => {
    check.addEventListener('click', (e) => {
      updateTaskCompleted(e.target.parentElement.id, e.target.parentElement, e.target);
    });
  });
};

const addEventEditDesc = (descriptionInps) => {
  descriptionInps.forEach((input) => {
    input.addEventListener('change', (e) => {
      updateTaskDescription(e.target.parentElement.id, e.target.value);
    });
  });
};

const addEventDelete = (deleteTaskBtns) => {
  deleteTaskBtns.forEach((button) => {
    button.addEventListener('click', (e) => {
      removeTask(e.target.id);
    });
  });
};

window.addEventListener('load', () => {
  // Show current time
  const dateP = document.querySelector('.date');
  const currentDate = DateTime.now();
  dateP.textContent = `${currentDate.toLocaleString(DateTime.DATETIME_MED)}`;

  // Show task
  show();

  // Edit one task's completed
  const checks = document.querySelectorAll('.check');
  addEventEditCheck(checks);

  // Edit one task's description
  const descriptionInps = document.querySelectorAll('.inputDescription');
  addEventEditDesc(descriptionInps);

  // Delete one task
  const deleteTaskBtns = document.querySelectorAll('.deleteBtn');
  addEventDelete(deleteTaskBtns);
});
