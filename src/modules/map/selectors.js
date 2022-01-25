import { createSelector } from 'reselect';

const getAddreses = state => state?.map.addresses;
const getCoordinates = state => state?.map.coordinates;

export const selectAddreses = createSelector(
  getAddreses,
  addresses => addresses
);
export const selectCoordinates = createSelector(
  getCoordinates,
  coordinates => coordinates
);