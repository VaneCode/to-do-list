// Importe modules
import TaskClass from './taskClass.js';

export default class DataClass {
  static getTasks() {
    let tasks = [];
    // Local storage
    if (localStorage.getItem('taks')) {
      tasks = JSON.parse(localStorage.getItem('tasks'));
    } else {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    const task1 = new TaskClass('Task1', false, 0);
    const task2 = new TaskClass('Task2', false, 1);
    const task3 = new TaskClass('Task3', false, 2);
    const task4 = new TaskClass('Task1', false, 3);
    const task5 = new TaskClass('Task1', false, 4);

    tasks.push(task1);
    tasks.push(task2);
    tasks.push(task3);
    tasks.push(task4);
    tasks.push(task5);

    return tasks;
  }

  static addTaskData(description, completed) {
    const tasks = DataClass.getTasks();

    // Calculate index
    let index = 0;
    if (tasks.length > 1) {
      index = tasks[tasks.length - 1] + 1;
    } else {
      index = 1;
    }

    // Create new task object
    const newTask = new TaskClass(description, completed, index);
    // Add the new task object to the tasks array
    tasks.push(newTask);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  static removeTaskData(i) {
    let tasks = DataClass.getTasks();
    tasks = tasks.filter((taks) => Number(taks.index) !== Number(i));
    // Local storage
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
}