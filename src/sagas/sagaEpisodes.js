import { call, put, takeLatest } from 'redux-saga/effects';
import { FETCH_EPISODES, URL_EPISODE } from '@/constants';
import { successEpisodes, errorEpisodes } from '@/actions/actionEpisodes';

function* fetchEpisodesAsync({ payload }) {
  const { page } = payload;
  try {
    const response = yield call(() => {
      return fetch(`${URL_EPISODE}/?page=${page}`).then((result) => result.json());
    });
    yield put(successEpisodes(response));
  } catch (error) {
    yield put(errorEpisodes(error));
  }
}

export default function* watchFetchEpisodes() {
  yield takeLatest(FETCH_EPISODES, fetchEpisodesAsync);
}
