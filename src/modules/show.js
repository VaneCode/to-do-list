import DataClass from './dataClass.js';
import AddDynamic from './AddDynamicClass.js';
// import { divToDoList } from './domElements.js';
import cleanElement from './cleanElement.js';

// Function to show task in div toDoList
const show = () => {
  // Clean bookUl
  cleanElement('#toDoList');
  // Generate labels for tasks
  const tasks = DataClass.getTasks();
  tasks.forEach((task) => {
    AddDynamic.addTaskLabel(task);
  });
};

export default show;
