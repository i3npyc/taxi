import { ERROR, FETHING, LOG_IN, LOG_OUT } from './actions';

const initialState = {
  isLoggedIn: false,
  isFetching: false,
  loginError: ''
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      return { isLoggedIn: true };
    case LOG_OUT:
      return { isLoggedIn: false };
    case ERROR:
      return { loginError: action.payload };
    case FETHING:
      return { isFetching: action.payload };
    default:
      return state;
  }
};
