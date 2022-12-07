const taskArray = [
  {
    description: 'Complete  washing dishes',
    completed: false,
    index: 0,
  },
  {
    description: 'Complete eating breakfast',
    completed: false,
    index: 1,
  },
  {
    description: 'Complete reading and working ',
    completed: false,
    index: 2,
  },
  {
    description: 'Complete eating lunch',
    completed: false,
    index: 3,
  },
];

taskArray.sort((a, b) => a.index - b.index);

export default taskArray;