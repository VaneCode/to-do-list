import DataClass from './dataClass.js';
import * as render from './show.js';
// Method to add a new task to the array tasks
const addTask = (description) => {
  // Add the task in the storage
  DataClass.addTaskData(description);
  // Refresh the bookUl in the UI
  render.show();
};

export default addTask;