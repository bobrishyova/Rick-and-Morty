import { FETCH_MULTIPLE_EPISODES, URL_EPISODE } from '@/constants';

const url = URL_EPISODE;

const fetchMultipleEpisodes = (arrayId) => async (dispatch) => {
  const response = await fetch(`${url}${arrayId}`);
  const result = await response.json();

  dispatch({
    type: FETCH_MULTIPLE_EPISODES,
    multipleEpisodes: result,
  });
};

export default fetchMultipleEpisodes;
