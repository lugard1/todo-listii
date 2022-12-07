import Display from './modules/add.js';
import taskArray from './modules/taskArray.js';
import './style.css';

// get the essentials
const todoList = document.querySelector('.toDo-list');

todoList.innerHTML = `
<ul class="display-list">
${Display.add(taskArray)}
</ul>
`;
