import DataClass from './dataClass.js';

const deleteAllCompleted = () => {
  const tasks = DataClass.getTasks();
  tasks = tasks.filter((taks) => taks.completed === true);
  // Update remain items indexes
  for (let i = 0; i < tasks.length; i += 1) {
    tasks[i].index = i;
  }
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

export default deleteAllCompleted;