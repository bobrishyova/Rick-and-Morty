import { takeLatest, put, call } from 'redux-saga/effects';
import { CHARACTER, URL_CHARACTER } from '@/constants';
import { successCharacter, errorCharacter } from '@/actions/actionCharacter';

function* fetchCharacterAsync({ payload }) {
  const { id } = payload;
  try {
    const response = yield call(() => {
      return fetch(`${URL_CHARACTER}${id}`).then((result) => result.json());
    });
    yield put(successCharacter(response));
  } catch (error) {
    yield put(errorCharacter(error));
  }
}

export default function* watchFetchCharacter() {
  yield takeLatest(CHARACTER.FETCH, fetchCharacterAsync);
}
