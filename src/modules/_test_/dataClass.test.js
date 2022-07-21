/**
 * @jest-environment jsdom
 */

import AddDynamicClass from '../AddDynamicClass.js';
import DataClass from '../dataClass.js';
import show from '../show.js';
import TaskClass from '../taskClass.js';

describe('Add and remove task', () => {
  test('Add task', () => {
    document.body.innerHTML = '<div id="toDoList"></div>';
    const task = new TaskClass('New task test', false, 1);
    AddDynamicClass.addTaskLabel(task);
    const labels = document.querySelectorAll('.labelTask');
    expect(labels).toHaveLength(1);
  });

  test('Remove task', () => {
    document.body.innerHTML = '<div id="toDoList"><label id="0" class="labelTask"><input type="checkbox" class="check"><input class="inputDescription"><button class="deleteBtn"><i class="fa-solid fa-trash"></i></button></label></div>';
    DataClass.removeTaskData(0);
    show();
    const labels = document.querySelectorAll('.labelTask');
    expect(labels).toHaveLength(0);
  });
});
