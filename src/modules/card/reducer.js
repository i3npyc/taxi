import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

import { payment, notpayment, setCard, setError } from './actions';

const success = handleActions(
  {
    [payment]: (_state, action) => true,
    [notpayment]: (_state, action) => false
  },
  false
);

const cardData = handleActions(
  {
    [setCard]: (_state, action) => action.payload
  },
  {}
);

const cardError = handleActions(
  {
    [setError]: (_state, action) => action.payload
  },
  ''
)

export default combineReducers({
  success,
  cardData,
  cardError
});
