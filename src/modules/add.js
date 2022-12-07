export default class Display {
  static add(taskArray) {
    const isChecked = (e) => {
      if (e) {
        return ' checked';
      }
      return '';
    };
    let taskArrayDOM = '';
    taskArray.forEach((task) => {
      taskArrayDOM += `
          <li><span><input class="checkbox" type="checkbox" name="taskArray";
          isChecked${task.completed};><input class="input" type="text" name="taskArrayi" value="${task.description}"></span>
          <i class="fa-solid fa-ellipsis-vertical"></i></li><br>`;
    });
    isChecked();
    return taskArrayDOM;
  }
}
