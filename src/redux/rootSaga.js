import { all } from 'redux-saga/effects';
import { authWatcher } from '../auth/authWatcher';

export function* rootSaga() {
  yield all([authWatcher()]);
}
