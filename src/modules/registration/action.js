import { createAction } from 'redux-actions';

export const REGISTRATION = 'REGISTRATION';
export const REGISTRATION_ERROR = 'REGISTRATION_ERROR';

export const registration = createAction(REGISTRATION);
export const setRegistrationError = createAction(REGISTRATION_ERROR);
