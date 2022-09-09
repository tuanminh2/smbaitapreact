import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import 'font-awesome/css/font-awesome.min.css';

import { createStore } from 'redux';
import { Provider } from 'react-redux';


import allReducers from './reducers';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(allReducers);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
