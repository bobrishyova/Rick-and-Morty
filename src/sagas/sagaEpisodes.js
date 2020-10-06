import { call, put, takeLatest } from 'redux-saga/effects';
import qs from 'query-string';
import { EPISODES, URL_EPISODE } from '@/constants';
import { successEpisodes, errorEpisodes } from '@/actions/actionEpisodes';

function* fetchEpisodesAsync({ payload }) {
  const { page } = payload;
  try {
    const response = yield call(() => {
      return fetch(`${URL_EPISODE}?${qs.stringify({ page })}`).then((result) => result.json());
    });
    yield put(successEpisodes(response));
  } catch (error) {
    yield put(errorEpisodes(error));
  }
}

export default function* watchFetchEpisodes() {
  yield takeLatest(EPISODES.FETCH, fetchEpisodesAsync);
}
