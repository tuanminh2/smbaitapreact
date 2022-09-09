import { combineReducers } from 'redux';



import taskReducer from './taskReducer';

// import { connectRouter } from 'connected-react-router';

import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import storage from 'redux-persist/lib/storage';

import { persistReducer } from 'redux-persist';

const persistCommonConfig = {
  storage: storage,
  stateReconciler: autoMergeLevel2,
};

const taskPersistConfig = {
  ...persistCommonConfig,
  key: 'taskReducer',
  whitelist: ['taskRedux'],
};

const allReducers = combineReducers({

  taskReducer: persistReducer(taskPersistConfig, taskReducer),
  // add more reducers here
});

export default allReducers;
