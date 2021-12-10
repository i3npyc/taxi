import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

const initialStore = store();

ReactDOM.render(
  <Router>
    <Provider store={initialStore}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);
