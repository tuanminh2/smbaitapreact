export const addTask = (newTask) => {
  console.log('ADD NEW TASK IN ACTION ', newTask);
  return {
    type: 'ADD_TASK_START',
    data: newTask,
  };
};
