// Importe modules
import TaskClass from './taskClass.js';

export default class DataClass {
  static getTasks() {
    let tasks = [];
    // Local storage
    if (localStorage.getItem('tasks')) {
      tasks = JSON.parse(localStorage.getItem('tasks'));
    } else {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    return tasks;
  }

  static addTaskData(description) {
    const tasks = DataClass.getTasks();

    // Calculate index
    const index = tasks.length + 1;

    // Create new task object
    const newTask = new TaskClass(description, false, index);
    // Add the new task object to the tasks array
    tasks.push(newTask);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  static removeTaskData(i) {
    let tasks = DataClass.getTasks();
    tasks = tasks.filter((taks) => Number(taks.index) !== Number(i));
    // Update remain items indexes
    for (let j = i; j < tasks.length; j += 1) {
      tasks[j].index -= 1;
    }
    // Local storage
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  static updateTaskDespData(description, index) {
    const tasks = DataClass.getTasks();

    tasks[index].description = description;
    // Local storage
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
}