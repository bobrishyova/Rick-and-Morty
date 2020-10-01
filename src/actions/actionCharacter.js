import { FETCH_CHARACTER, URL_CHARACTER } from '@/constants';

const url = URL_CHARACTER;

const fetchCharacter = (id) => async (dispatch) => {
  const response = await fetch(`${url}${id}`);
  const result = await response.json();

  dispatch({
    type: FETCH_CHARACTER,
    character: result,
  });
};

export default fetchCharacter;
