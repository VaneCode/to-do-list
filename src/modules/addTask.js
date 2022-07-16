import DataClass from './dataClass.js';
import show from './show.js';
// Method to add a new task to the array tasks
const addTask = (description) => {
  // Add the task in the storage
  DataClass.addTaskData(description);
  // Refresh the bookUl in the UI
  show();
};

export default addTask;