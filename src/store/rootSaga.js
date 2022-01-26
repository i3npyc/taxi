import { all } from 'redux-saga/effects';

import { authWatcher } from '../modules/auth/authSaga';
import { cardWatcher } from '../modules/card/cardSaga';
import { registrationWatcher } from '../modules/registration/registrationSaga';
import { mapWatcher } from '../modules/map/mapSaga';
import { routeWatchet } from '../modules/map/mapSaga';

export function* rootSaga() {
  yield all([
    authWatcher(),
    registrationWatcher(),
    cardWatcher(),
    mapWatcher(),
    routeWatchet()
  ]);
}
