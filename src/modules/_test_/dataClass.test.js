/**
 * @jest-environment jsdom
 */

import AddDynamicClass from '../AddDynamicClass.js';
import TaskClass from '../taskClass.js';

describe('Add and remove task', () => {
    test('Add task', () => {
        document.body.innerHTML = '<div id="toDoList"></div>';
        const task = new TaskClass('New task test', false, 1);
        AddDynamicClass.addTaskLabel(task);
        const labels = document.querySelectorAll('.labelTask');
        expect(labels).toHaveLength(1);
    });

});

