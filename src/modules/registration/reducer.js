import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { registration } from './action';

const name = handleActions(
  {
    [registration]: (_state, action) => action.payload
  },
  ''
);

export default combineReducers({
  name
});
