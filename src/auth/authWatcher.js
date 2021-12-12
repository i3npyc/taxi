import { takeEvery, call, put } from 'redux-saga/effects';
import { ServiceApi } from '../service/api';
import { AUTHENTICATE, logIn } from './actions';

export function* authenticateSaga(action) {
  const { email, password } = action.payload;
  const form = { email, password };
  const { data } = yield call(ServiceApi.auth, form);
  if (data?.success) {
    localStorage.setItem('access_token', data?.token)
    yield put(logIn());
  }
}

export function* authWatcher() {
  yield takeEvery(AUTHENTICATE, authenticateSaga);
}
