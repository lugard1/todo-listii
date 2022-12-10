const changeIcon = (e) => {
  const icon = e.target;
  const text = document.querySelector('.editable');
  if (icon.classList.contains('fa-ellipsis-vertical')) {
    icon.classList.remove('fa-solid', 'fa-ellipsis-vertical', 'drag-icon');
    icon.classList.add('fa-regular', 'fa-trash-can', 'delete-icon');
    text.focus();
  }
};

const restoreIcons = () => {
  const allTrashCans = document.querySelectorAll('.fa-trash-can');
  for (let i = 0; i < allTrashCans.length; i += 1) {
    allTrashCans[i].classList.remove('fa-solid', 'fa-ellipsis-vertical', 'drag-icon');
    allTrashCans[i].classList.add('fa-solid', 'fa-ellipsis-vertical', 'drag-icon');
  }
};

export { changeIcon, restoreIcons };