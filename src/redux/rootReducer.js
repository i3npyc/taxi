import { combineReducers } from 'redux';
import { authReducer as auth } from '../auth/reducer';
import { paymentReducer as payment } from '../card/reducer';

export const rootReducer = combineReducers({
  auth,
  payment
});
