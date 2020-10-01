import { FETCH_MULTIPLE_CHARACTER, URL_CHARACTER } from '@/constants';

const fetchMultipleCharacters = (arrayId) => async (dispatch) => {
  const response = await fetch(`${URL_CHARACTER}${arrayId}`);
  const result = await response.json();

  dispatch({
    type: FETCH_MULTIPLE_CHARACTER,
    multipleCharacters: result,
  });
};

export default fetchMultipleCharacters;
