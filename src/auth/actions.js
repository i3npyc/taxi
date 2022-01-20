export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';
export const AUTHENTICATE = 'AUTHENTICATE';
export const ERROR = 'ERROR';
export const FETHING = 'FETHING';

export const logIn = () => ({ type: LOG_IN });
export const logOut = () => ({ type: LOG_OUT });
export const setFething = (payload) => ({ type: FETHING, payload });
export const serError = payload => ({ type: ERROR, payload });
export const authenticate = (email, password) => ({
  type: AUTHENTICATE,
  payload: { email, password }
});
