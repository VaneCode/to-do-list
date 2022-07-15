import DataClass from './dataClass.js';
import show from './show.js';
// Method to update the task's description
const updateTaskDescription = (index, description) => {
  DataClass.updateTaskDescriptionData(description, index);
  // Refresh the toDoList in the UI
  show();
};

export default updateTaskDescription;
