export const REGISTRATION = 'REGISTRATION';

export const registration = (email, password, name, surname) => ({
  type: REGISTRATION,
  payload: { email, password, name, surname }
});
