import { FETCH_EPISODE, URL_EPISODE } from '@/constants';

const url = URL_EPISODE;

const fetchEpisode = (id) => async (dispatch) => {
  const response = await fetch(`${url}${id}`);
  const result = await response.json();

  dispatch({
    type: FETCH_EPISODE,
    episode: result,
  });
};

export default fetchEpisode;
