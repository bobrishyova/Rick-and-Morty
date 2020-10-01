import { FETCH_CHARACTER, URL_CHARACTER } from '@/constants';

const fetchCharacter = (id) => async (dispatch) => {
  const response = await fetch(`${URL_CHARACTER}${id}`);
  const result = await response.json();

  dispatch({
    type: FETCH_CHARACTER,
    character: result,
  });
};

export default fetchCharacter;
