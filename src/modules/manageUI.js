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
            <input type="hidden" value="${task.index}"
            <button id="addTaskBtn"><i class="fa-solid fa-square-minus"></i></button>
        `;
  divToDoList.appendChild(label);
};

/// / Function to show task in div toDoList
export const showTasks = () => {
  // Clean bookUl
  divToDoList.textContent = ' ';
  // Generate labels for tasks
  const tasks = DataClass.getTasks();
  tasks.forEach((task) => {
    addTasksLabel(task);
  });
};

// Funtion to add a new task to to-do list
export const removeTaskUI = (i) => {
  // Delete the task in the storage
  DataClass.removeTaskData(i);
  // Refresh the UI
  showTasks();
};

// Method to add a new task to the array tasks
export const addTaskUI = (description) => {
  // Add the task in the storage
  DataClass.addTaskData(description);
  // Refresh the bookUl in the UI
  showTasks();
};

// Method to update a task
export const updateTaskUI = (description, completed, index) => {
  // Update the task in the storage
  DataClass.removeTaskData(description, completed, index);
  // Refresh the bookUl in the UI
  showTasks();
};
