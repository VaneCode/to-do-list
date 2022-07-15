// --------------Import--------------------------//
import DataClass from './dataClass.js';
import { divToDoList } from './domElements.js';

export default class AddDynamic {
  // Method to add a label element to div toDoList
  static addTaskLabel = (task) => {
    // Create elements
    const label = document.createElement('label');
    label.id = task.index;
    label.classList.add('labelTask');
    if (task.completed) {
      label.classList.add('completeTask');
    }

    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.checked = task.completed;

    const inpDescription = document.createElement('input');
    inpDescription.setAttribute('class', 'inputDescription');
    inpDescription.value = task.description;

    const btnDelete = document.createElement('button');
    btnDelete.setAttribute('class', 'deleteBtn');
    const icon = document.createElement('i');
    icon.setAttribute('class', 'fa-solid fa-trash');
    btnDelete.appendChild(icon);

    /*btnDelete.addEventListener('click', () => {
      // Delete the task in the storage
      DataClass.removeTaskData(task.index);
    });*/

    label.appendChild(checkbox);
    label.appendChild(inpDescription);
    label.appendChild(btnDelete);

    /* label.innerHTML = `
              <input type="checkbox">
              <input type="text" value="${task.description}">
              <button class="deleteBtn"><i class="fa-solid fa-trash"></i></button>
          `; */
    divToDoList.appendChild(label);
  };
}