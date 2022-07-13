// --------------Import--------------------------//
import DataClass from './dataClass.js';

// ---------------------DOM ELEMENTS-----------//
const divToDoList = document.querySelector('#toDoList');

// --------------------FUNCTIONS-------------------------------//

// Function to add a label element to div toDoList
const addTasksLabel = (task) => {
  // Create elements
  const label = document.createElement('label');

  label.classList.add('labelTask');
  label.setAttribute('id', task.index);
  label.innerHTML = `
            <input type="checkbox">
            <input type="text" value="${task.description}">
        `;

  divToDoList.appendChild(label);
};

/// / Function to show task in div toDoList
const showTasks = () => {
  // Clean bookUl
  divToDoList.textContent = ' ';
  // Generate labels for tasks
  const tasks = DataClass.getTasks();
  tasks.forEach((task) => {
    addTasksLabel(task);
  });
};

// Funtion to add a new task to to-do list
const addTaskDiv = (task) => {
  DataClass.addTaskData(task);
};

export default showTasks;
