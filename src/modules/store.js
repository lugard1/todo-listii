const taskArray = JSON.parse(localStorage.getItem('taskInput')) || [];

const store = () => {
  localStorage.setItem('taskInput', JSON.stringify(taskArray));
};

export { taskArray, store };