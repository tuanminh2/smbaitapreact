import actionTypes from '../actions/actionTypes';

const initialState = {
  taskRedux: [],
};

export const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_GENDER_START:
      return {
        ...state,
        taskRedux: [...state.taskRedux, action.data],
      };

    default:
      return state;
  }
};

export default taskReducer;
