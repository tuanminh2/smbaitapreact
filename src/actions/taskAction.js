export const addTask = (newTask) => {
  return {
    type: 'ADD_TASK_START',
    payload: newTask,
  };
};
