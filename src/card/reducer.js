import { NOTPAYMENT, PAYMENT } from './actions';

const initialState = {
  success: false
};

export const paymentReducer = (state = initialState, action) => {
  switch (action.type) {
    case PAYMENT:
      return {
        success: true
      }
    case NOTPAYMENT: 
      return {
        success: false
      }
    default:
      return state;
  }
};
