import { createSelector } from 'reselect';

const getRegistrationError = state => state?.registration.registrationError;

export const selectRegistrationError = createSelector(
  getRegistrationError,
  registrationError => registrationError
);
