import { createAction } from 'redux-actions';

export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';
export const AUTHENTICATE = 'AUTHENTICATE';
export const ERROR = 'ERROR';
export const FETHING = 'FETHING';

export const logIn = createAction(LOG_IN);
export const logOut = createAction(LOG_OUT);
export const setFething = createAction(FETHING);
export const setError = createAction(ERROR);
export const authenticate = createAction(AUTHENTICATE);
