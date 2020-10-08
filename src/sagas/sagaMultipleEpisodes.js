import { call, put, takeLatest } from 'redux-saga/effects';
import { MULTIPLE_EPISODES, URL_EPISODE } from '@/constants';
import { successMultipleEpisodes, errorMultipleEpisodes } from '@/actions/actionMultipleEpisodes';

function* fetchMultipleEpisodesAsync({ payload }) {
  const { episode } = payload;
  try {
    const response = yield call(() => {
      return fetch(`${URL_EPISODE}${episode}`).then((result) => result.json());
    });
    yield put(successMultipleEpisodes(response));
  } catch (error) {
    yield put(errorMultipleEpisodes(error));
  }
}

export default function* watchFetchMultipleEpisodes() {
  yield takeLatest(MULTIPLE_EPISODES.FETCH, fetchMultipleEpisodesAsync);
}
