import { all } from 'redux-saga/effects';

import { authWatcher } from '../modules/auth/authWatcher';
import { cardWatcher } from '../modules/card/cardWatcher';
import { registrationWatcher } from '../modules/registration/registrationWatcher';
import { mapWatcher } from '../modules/map/mapWatcher';
import { routeWatchet } from '../modules/map/mapWatcher';

export function* rootSaga() {
  yield all([
    authWatcher(),
    registrationWatcher(),
    cardWatcher(),
    mapWatcher(),
    routeWatchet()
  ]);
}
