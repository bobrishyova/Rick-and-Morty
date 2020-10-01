import { FETCH_CHARACTERS, URL_CHARACTER } from '@/constants';

const fetchCharacters = (page) => async (dispatch) => {
  const response = await fetch(`${URL_CHARACTER}/?page=${page}`);
  const result = await response.json();

  dispatch({
    type: FETCH_CHARACTERS,
    charactersInfo: result.info,
    characters: result.results,
  });
};

export default fetchCharacters;
