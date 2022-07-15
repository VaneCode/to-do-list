// --------------Import--------------------------//
import { divToDoList } from './domElements.js';

export default class AddDynamic {
  // Method to add a label element to div toDoList
  static addTaskLabel = (task) => {
    // Create elements
    const label = document.createElement('label');
    label.id = task.index;
    label.classList.add('labelTask');
    if (task.completed) {
      label.classList.add('completedTask');
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

    // Append elements
    label.appendChild(checkbox);
    label.appendChild(inpDescription);
    label.appendChild(btnDelete);
    divToDoList.appendChild(label);

    // Add listeners
    /* btnDelete.addEventListener('click', () => {
      removeTask(task.index);
    });

    checkbox.addEventListener('click', () => {
      updateTaskCompleted(task.index, label, checkbox);
    });

    inpDescription.addEventListener('change', (e) => {
      updateTaskDescription(task.index, e.target.value);
    }); */
  };
}
