import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { registration, setRegistrationError } from './action';

const name = handleActions(
  {
    [registration]: (_state, action) => action.payload
  },
  ''
);

const registrationError = handleActions(
  {
    [setRegistrationError]: (_state, action) => action.payload
  },
  ''
);

export default combineReducers({
  name,
  registrationError
});
