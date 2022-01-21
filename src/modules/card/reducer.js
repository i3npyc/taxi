import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

import { payment, notpayment } from './actions';

const success = handleActions(
  {
    [payment]: (_state, action) => true,
    [notpayment]: (_state, action) => false
  },
  false
);

export default combineReducers({
  success
});
