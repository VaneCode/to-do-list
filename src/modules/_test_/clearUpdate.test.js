/**
 * @jest-environment jsdom
 */
import DataClass from '../dataClass.js';
import show from '../show.js';

describe('Tests for edit, status and clear all function', () => {
    test('edit description function test', () => {
      document.body.innerHTML = '<div id="toDoList"><label id="0" class="labelTask"><input type="checkbox" class="check"><input class="inputDescription"><button class="deleteBtn"><i class="fa-solid fa-trash"></i></button></label></div>';
      
      const tasks = [
        {
          description: 'Task 1',
          completed: true,
          index: 0,
        },
        {
          description: 'Taks 2',
          completed: true,
          index: 1,
        },
      ];
      DataClass.setTasks(tasks);
      DataClass.updateTaskDescriptionData('test', 0);
      show();
      const inpDes = document.querySelector('.inputDescription');
      expect(inpDes.value).toBe('test');
    }) 
})