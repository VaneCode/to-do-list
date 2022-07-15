import DataClass from './dataClass.js';

const deleteAllTask = () => {
  const tasks = DataClass.getTasks();
  tasks.splice(0, tasks.length);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

export default deleteAllTask;
