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

  static setTasks(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  static addTaskData(description) {
    const tasks = DataClass.getTasks();

    // Create new task object
    const newTask = new TaskClass(description, false, tasks.length);
    // Add the new task object to the tasks array
    tasks.push(newTask);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  static removeTaskData(i) {
    let tasks = DataClass.getTasks();
    tasks = tasks.filter((taks) => Number(taks.index) !== Number(i));
    // Update remain items indexes
    for (let i = 0; i < tasks.length; i += 1) {
      tasks[i].index = i;
    }
    // Local storage
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  static updateTaskDescriptionData(description, index) {
    const tasks = DataClass.getTasks();
    tasks[index].description = description;
    // Local storage
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  static updateTaskCompletedData(completed, index) {
    const tasks = DataClass.getTasks();
    tasks[index].completed = completed;
    // Local storage
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
}