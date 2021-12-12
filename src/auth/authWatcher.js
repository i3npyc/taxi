import { takeEvery, call, put } from 'redux-saga/effects';
import { serverLogin } from '../api/api';
import { AUTHENTICATE, logIn } from './actions';

export function* authenticateSaga(action) {
  const { email, password } = action.payload;
  const result = yield call(serverLogin, email, password);
  if (result) {
    yield put(logIn());
  }
}

export function* authWatcher() {
  yield takeEvery(AUTHENTICATE, authenticateSaga);
}
