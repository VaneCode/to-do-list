// --------------Import--------------------------//
import { divToDoList } from "./domElements.js";
import removeTask from "./removeTask.js";
import updateTaskCompleted from "./updateTaskCompleted.js";
import updateTaskDescription from "./updateTaskDescription.js";

export default class AddDynamic {
  // Method to add a label element to div toDoList
  static addTaskLabel = (task) => {
    // Create elements
    const label = document.createElement("label");
    label.id = task.index;
    label.classList.add("labelTask");
    if (task.completed) {
      label.classList.add("completedTask");
    }

    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.checked = task.completed;

    const inpDescription = document.createElement("input");
    inpDescription.setAttribute("class", "inputDescription");
    inpDescription.value = task.description;

    const btnDelete = document.createElement("button");
    btnDelete.setAttribute("class", "deleteBtn");
    const icon = document.createElement("i");
    icon.setAttribute("class", "fa-solid fa-trash");
    btnDelete.appendChild(icon);

    btnDelete.addEventListener("click", () => {
      removeTask(task.index);
    });

    label.appendChild(checkbox);
    label.appendChild(inpDescription);
    label.appendChild(btnDelete);

    checkbox.addEventListener("click", (e) => {
      updateTaskCompleted(task.index, label, checkbox);
    });

    inpDescription.addEventListener("change", (e) => {
        updateTaskDescription(task.index, e.target.value);
    });

    divToDoList.appendChild(label);
  };
}
