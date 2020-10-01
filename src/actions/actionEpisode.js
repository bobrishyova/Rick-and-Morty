import { FETCH_EPISODE, URL_EPISODE } from '@/constants';

const fetchEpisode = (id) => async (dispatch) => {
  const response = await fetch(`${URL_EPISODE}${id}`);
  const result = await response.json();

  dispatch({
    type: FETCH_EPISODE,
    episode: result,
  });
};

export default fetchEpisode;
