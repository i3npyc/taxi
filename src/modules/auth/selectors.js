import { createSelector } from "reselect";

const getIsLoggedIn = state => state?.auth.isLoggedIn;
const getIsFetching = state => state?.auth.isFetching;
const getLoginError = state => state?.auth.loginError;

export const selectIsLoggedIn = createSelector(
  getIsLoggedIn,
  isLoggedIn => isLoggedIn
);
export const selectIsFetching = createSelector(
  getIsFetching,
  isFetching => isFetching
);
export const selectLoginError = createSelector(
  getLoginError,
  loginError => loginError
);
