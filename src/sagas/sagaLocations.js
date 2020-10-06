import { call, put, takeLatest } from 'redux-saga/effects';
import { FETCH_LOCATIONS, URL_LOCATION } from '@/constants';
import { successLocations, errorLocations } from '@/actions/actionLocations';

function* fetchLocationsAsync({ payload }) {
  const { page } = payload;
  try {
    const response = yield call(() => {
      return fetch(`${URL_LOCATION}/?page=${page}`).then((result) => result.json());
    });
    yield put(successLocations(response));
  } catch (error) {
    yield put(errorLocations(error));
  }
}

export default function* watchFetchLocations() {
  yield takeLatest(FETCH_LOCATIONS, fetchLocationsAsync);
}
