import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

import { logIn, logOut, setFething, setError } from './actions';

const isLoggedIn = handleActions(
  {
    [logIn]: (_state, action) => true,
    [logOut]: (_state, action) => false
  },
  false
);

const isFetching = handleActions(
  {
    [setFething]: (_state, action) => action.payload
  },
  false
);

const loginError = handleActions(
  {
    [setError]: (_state, action) => action.payload
  },
  ''
);

export default combineReducers({
  isLoggedIn,
  isFetching,
  loginError
});
