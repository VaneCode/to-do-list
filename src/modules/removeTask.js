import DataClass from './dataClass.js';
import show from './show.js';
// Method to add a new task to the array tasks
const removeTask = (i) => {
  // Add the task in the storage
  DataClass.removeTaskData(i);
  // Refresh the bookUl in the UI
  show();
};

export default removeTask;