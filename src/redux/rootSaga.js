import { all } from 'redux-saga/effects';
import { authWatcher } from '../auth/authWatcher';
import { cardWatcher } from '../card/cardWatcher';
import { registrationWatcher } from '../registration/registrationWatcher';
import { mapWatcher } from '../map/mapWatcher';

export function* rootSaga() {
  yield all([
    authWatcher(),
    registrationWatcher(),
    cardWatcher(),
    mapWatcher()
  ]);
}
