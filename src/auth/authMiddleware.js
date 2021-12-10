import { serverLogin } from '../api/api';
import { AUTHENTICATE, logIn } from './actions';

export const authMiddleware = store => next => async action => {
  if (action.type === AUTHENTICATE) {
    const { email, password } = action.payload;
    const success = await serverLogin(email, password);
    if (success) {
      store.dispatch(logIn());
    }
    return
  } else {
    next();
  }
};
