import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

import { payment, notpayment, setCard } from './actions';

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

export default combineReducers({
  success,
  cardData
});
