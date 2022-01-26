import { call, put, takeEvery } from 'redux-saga/effects';

import { getAddresses, getCoordinates } from '../../api/map';
import { getAddresList, getRoute, setAddresList, setRoute } from './actions';

export function* mapSaga() {
  try {
    const { data } = yield call(getAddresses);
    yield put(setAddresList(data?.addresses));
  } catch (error) {
    console.error(error.message);
  }
}

export function* mapWatcher() {
  yield takeEvery(getAddresList.toString(), mapSaga);
}

export function* routeSaga(action) {
  try {
    const { address1, address2 } = action.payload;
    const { data } = yield call(
      getCoordinates,
      address1?.label,
      address2?.label
    );
    yield put(setRoute(data));
  } catch (error) {
    console.error(error.message);
  }
}

export function* routeWatchet() {
  yield takeEvery(getRoute.toString(), routeSaga);
}
