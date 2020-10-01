import { FETCH_CHARACTERS, URL_CHARACTERS } from '@/constants';

const url = URL_CHARACTERS;

const fetchCharacters = (page) => async (dispatch) => {
  const response = await fetch(`${url}${page}`);
  const result = await response.json();

  dispatch({
    type: FETCH_CHARACTERS,
    charactersInfo: result.info,
    characters: result.results,
  });
};

export default fetchCharacters;
