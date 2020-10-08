import { call, put, takeLatest } from 'redux-saga/effects';
import { LOCATION, URL_LOCATION } from '@/constants';
import { successLocation, errorLocation } from '@/actions/actionLocation';

function* fetchLocationAsync({ payload }) {
  const { id } = payload;
  try {
    const response = yield call(() => {
      return fetch(`${URL_LOCATION}${id}`).then((result) => result.json());
    });
    yield put(successLocation(response));
  } catch (error) {
    yield put(errorLocation(error));
  }
}

export default function* watchFetchLocation() {
  yield takeLatest(LOCATION.FETCH, fetchLocationAsync);
}
