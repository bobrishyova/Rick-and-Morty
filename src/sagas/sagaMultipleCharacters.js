import { call, put, takeLatest } from 'redux-saga/effects';
import { FETCH_MULTIPLE_CHARACTERS, URL_CHARACTER } from '@/constants';
import {
  successMultipleCharacters,
  errorMultipleCharacters,
} from '@/actions/actionMultipleCharacters';

function* fetchMultipleCharactersAsync({ payload }) {
  const { characters } = payload;
  try {
    const response = yield call(() => {
      return fetch(`${URL_CHARACTER}${characters}`).then((result) => result.json());
    });
    yield put(successMultipleCharacters(response));
  } catch (error) {
    yield put(errorMultipleCharacters(error));
  }
}

export default function* watchFetchMultipleCharacters() {
  yield takeLatest(FETCH_MULTIPLE_CHARACTERS, fetchMultipleCharactersAsync);
}
