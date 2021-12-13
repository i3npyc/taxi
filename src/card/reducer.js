import { PAYMENT } from './actions';

const initialState = {
  success: false
};

export const paymentReducer = (state = initialState, action) => {
  switch (action.type) {
    case PAYMENT:
      return {
        success: true
      }
    default:
      return state;
  }
};
