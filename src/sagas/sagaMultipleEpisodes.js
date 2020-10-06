import { call, put, takeLatest } from 'redux-saga/effects';
import { FETCH_MULTIPLE_EPISODES, URL_EPISODE } from '@/constants';
import { successMultipleEpisodes, errorMultipleEpisodes } from '@/actions/actionMultipleEpisodes';

function* fetchMultipleEpisodesAsync({ payload }) {
  const { episodes } = payload;
  try {
    const response = yield call(() => {
      return fetch(`${URL_EPISODE}${episodes}`).then((result) => result.json());
    });
    yield put(successMultipleEpisodes(response));
  } catch (error) {
    yield put(errorMultipleEpisodes(error));
  }
}

export default function* watchFetchMultipleEpisodes() {
  yield takeLatest(FETCH_MULTIPLE_EPISODES, fetchMultipleEpisodesAsync);
}
