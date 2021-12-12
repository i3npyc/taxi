import { REGISTRATION } from './action';

const initialState = {
  name: ''
};

export const registrationReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTRATION:
      return {
        name: action.payload
      };
    default:
      return state;
  }
};
