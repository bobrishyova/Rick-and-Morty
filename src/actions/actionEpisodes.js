import { FETCH_EPISODES, URL_EPISODE } from '@/constants';

const fetchEpisodes = (page) => async (dispatch) => {
  const response = await fetch(`${URL_EPISODE}/?page=${page}`);
  const result = await response.json();

  dispatch({
    type: FETCH_EPISODES,
    episodesInfo: result.info,
    episodes: result.results,
  });
};

export default fetchEpisodes;
