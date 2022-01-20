import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router } from 'react-router-dom';

import store from './store/store';

import App from './App';

import { Provider } from 'react-redux';


import './index.css';


const initialStore = store();

ReactDOM.render(
  <Router>
    <Provider store={initialStore}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);
