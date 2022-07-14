// Import modules
import './sass/style.scss';
import * as manageUI from './modules/manageUI.js';

// -------------------DOM ELEMENTS-------------------- //
const newTaskInp = document.getElementById('newTaskInp');
const addTaskBtn = document.querySelector('#addTaskBtn');

// Function to add a new task in the UI and the storage
const addTask = () => {
  manageUI.addTaskUI(newTaskInp.value);
  newTaskInp.value = '';
};

newTaskInp.addEventListener('keypress', (event) => {
  if (String(event.key) === String('Enter')) {
    addTask();
  }
});

addTaskBtn.addEventListener('click', () => {
  addTask();
});

window.onload = () => {
  manageUI.showTasks();
};
