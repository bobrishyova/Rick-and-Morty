import { takeLatest, call, put } from 'redux-saga/effects';
import { FETCH_EPISODE, URL_EPISODE } from '@/constants';
import { successEpisode, errorEpisode } from '@/actions/actionEpisode';

function* fetchEpisodeAsync({ payload }) {
  const { id } = payload;
  try {
    const response = yield call(() => {
      return fetch(`${URL_EPISODE}${id}`).then((result) => result.json());
    });
    yield put(successEpisode(response));
  } catch (error) {
    yield put(errorEpisode(error));
  }
}

export default function* watchFetchEpisode() {
  yield takeLatest(FETCH_EPISODE, fetchEpisodeAsync);
}
