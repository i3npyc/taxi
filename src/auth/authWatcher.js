import { takeEvery, call, put } from 'redux-saga/effects';
import { ServiceApi } from '../service/api';
import { AUTHENTICATE, logIn, serError, setFething } from './actions';

export function* authenticateSaga(action) {
  try {
    setFething(true);
    const { email, password } = action.payload;
    const form = { email, password };
    const { data } = yield call(ServiceApi.auth, form);
    if (data?.success) {
      localStorage.setItem('access_token', data?.token);
      yield put(logIn());
    } else {
      yield put(serError(data.error));
    }
  } catch (error) {
    setFething(false);
    console.error(error);
  } finally {
    setFething(false);
  }
}

export function* authWatcher() {
  yield takeEvery(AUTHENTICATE, authenticateSaga);
}
