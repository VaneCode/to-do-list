import DataClass from './dataClass.js';
import show from './show.js';
// Method to update the state complete of the task
const updateTaskCompleted = (index, label, checkbox) => {
  if (checkbox.checked) {
    DataClass.updateTaskCompletedData(true, index);
    label.classList.add('completedTask');
  } else {
    DataClass.updateTaskCompletedData(false, index);
    label.classList.remove('completedTask');
  }

  // Refresh the toDoList in the UI
  show();
};

export default updateTaskCompleted;
