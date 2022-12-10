import addObjToLocalStorage from './objectToLS.js';
import { store, taskArray } from './store.js';

const submit = document.querySelector('.fa-right-from-bracket');
const tasksContainer = document.querySelector('.toDo-list');
const taskName = document.querySelector('.new-task');

const addTask = (e) => {
  e.preventDefault();
  if (e.target.classList.contains('fa-right-from-bracket')) {
    if (!taskName.value) return;
    addObjToLocalStorage(taskName.value);
    taskName.value = '';
  }
};

const deleteTask = (e) => {
  if (e.target.classList.contains('delete-icon')) {
    const btn = e.target;
    const removableTask = btn.closest('li');
    const taskIndex = removableTask.dataset.indexNumber;

    // Remove element from array
    taskArray.splice(taskIndex - 1, 1);
    for (let i = 0; i < taskArray.length; i += 1) {
      taskArray[i].index = i;
    }

    localStorage.setItem('taskInput', taskArray);
    store();
  }
};

const edit = (e) => {
  const editableText = e.target;
  const editableTask = editableText.closest('li');
  const taskIndex = editableTask.dataset.indexNumber;
  if (editableText.matches('p')) {
    editableText.setAttribute('contenteditable', 'true');
    editableText.focus();
  }

  // event listener to store the edited value to local storage.
  editableText.addEventListener('blur', () => {
    taskArray[taskIndex - 1].description = editableText.innerText;
    store();
  });
};

const checkBoxesStatus = (e) => {
  const checkBoxes = document.querySelectorAll('input[type="checkbox"]');
  const clickLocation = e.target;
  for (let i = 0; i < checkBoxes.length; i += 1) {
    if (clickLocation === checkBoxes[i]) {
      const element = clickLocation.closest('li');
      const arrrayNumber = element.dataset.indexNumber - 1;
      const arrayElement = taskArray[arrrayNumber];
      if (checkBoxes[i].checked) {
        arrayElement.completed = true;
        store();
      } else {
        arrayElement.completed = false;
        store();
      }
    }
  }
};

export {
  addTask,
  edit,
  deleteTask,
  tasksContainer,
  taskName,
  submit,
  checkBoxesStatus,
};