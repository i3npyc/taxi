import { call, put, takeEvery } from "redux-saga/effects";
import { ServiceApi } from "../service/api";
import { GET_ADDRES_LIST, setAddresList } from "./actions";

export function* mapSaga() {
  const { data } = yield call(ServiceApi.getAddresses)
  yield put(setAddresList(data?.addresses))
}

export function* mapWatcher () {
	yield takeEvery(GET_ADDRES_LIST, mapSaga)
}