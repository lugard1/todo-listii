import {
  addTask, checkBoxesStatus, deleteTask, edit,
} from './functionality.js';
import addObjToLocalStorage from './objectToLS.js';
import { store, taskArray } from './store.js';

const displayTasks = () => {
  const tasksContainer = document.querySelector('.toDo-list');
  tasksContainer.innerHTML = '';
  taskArray.sort((a, b) => a.index - b.index).map((task) => task.description);
  taskArray.forEach((task, index) => {
    let box;
    let line;
    if (task.completed) {
      box = 'checked';
      line = 'line-through';
    } else {
      box = '';
      line = 'none';
    }
    tasksContainer.innerHTML += `
        <!-- Task -->
        <li class="task" data-index-number="${index + 1}">
          <div class="left-side">
            <input class="complete-box" type="checkbox" name="checkbox" value="value" ${box}>
            <label for="checkbox"><p style="text-decoration: ${line}; " class="editable">${task.description}</p></label> 
          </div>
          <div class="right-side">
          <i class="fa-regular fa-trash-can delete-icon" data-index-number="${index + 1}"></i>
          </div>
        </li>
        <hr class="line-separator">
        <!-- Task -->
        `;
    store();
  });

  /* Add */
  const form = document.querySelector('form');
  const addBtn = document.querySelector('.fa-right-from-bracket');
  addBtn.addEventListener('click', (e) => {
    addTask(e);
    displayTasks();
  });
  form.addEventListener('keypress', (e) => {
    const taskName = document.querySelector('.new-task');
    if (e.key === 'Enter') {
      if (!taskName.value) return;
      addObjToLocalStorage(taskName.value);
      displayTasks();
      taskName.value = '';
    }
  });

  /* Delete */
  const trashCans = document.querySelectorAll('.delete-icon');
  for (let i = 0; i < trashCans.length; i += 1) {
    trashCans[i].addEventListener('click', (e) => {
      deleteTask(e);
      displayTasks();
    });
  }

  /* Delete completed */

  const deleteCompleted = document.querySelector('.completed-text');
  const allCheckBoxes = document.querySelectorAll('input[type=checkbox]');

  function clearCompleted(elem) {
    return elem.completed !== true;
  }

  deleteCompleted.addEventListener('click', () => {
    const data = taskArray.filter(clearCompleted);
    data.sort((a, b) => a.index - b.index);
    localStorage.setItem('taskInput', JSON.stringify(data));
    window.location.reload();
  });

  for (let i = 0; i < allCheckBoxes.length; i += 1) {
    allCheckBoxes[i].addEventListener('change', (e) => {
      checkBoxesStatus(e);
      displayTasks();
    });
  }

  /* Edit */
  const taskTexts = document.querySelectorAll('p');
  for (let i = 0; i < taskTexts.length; i += 1) {
    taskTexts[i].addEventListener('click', (e) => {
      edit(e);
    });
  }

  /* Delete all */
  const deleteAll = document.querySelector('.reload-icon');
  deleteAll.addEventListener('click', () => {
    taskArray.splice(0, taskArray.length);
    store();
    displayTasks();
  });
};

export default displayTasks;