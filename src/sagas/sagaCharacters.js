import { call, put, takeLatest } from 'redux-saga/effects';
import qs from 'query-string';
import { CHARACTERS, URL_CHARACTER } from '@/constants';
import { successCharacters, errorCharacters } from '@/actions/actionCharacters';

function* fetchCharactersAsync({ payload }) {
  const { page } = payload;
  try {
    const response = yield call(() => {
      return fetch(`${URL_CHARACTER}/?${qs.stringify({ page })}`).then((result) => result.json());
    });
    yield put(successCharacters(response));
  } catch (error) {
    yield put(errorCharacters(error));
  }
}

export default function* watchFetchCharacters() {
  yield takeLatest(CHARACTERS.FETCH, fetchCharactersAsync);
}
