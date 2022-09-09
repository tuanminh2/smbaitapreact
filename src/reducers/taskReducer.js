import actionTypes from '../actions/actionTypes';

let initialState = {
  taskRedux: ['askfnksdf', 'askjfnsdf'],
};

export const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TASK_START:
      console.log('INREDUCER .....', action.data);

      return {
        ...state,
        taskRedux: [...state.taskRedux, action.data],
      };

    default:
      return state;
  }
};

export default taskReducer;
