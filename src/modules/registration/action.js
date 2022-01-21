import { createAction } from 'redux-actions';

export const REGISTRATION = 'REGISTRATION';

// export const registration = (email, password, name, surname) => ({
//   type: REGISTRATION,
//   payload: { email, password, name, surname }
// });

export const registration = createAction(REGISTRATION)