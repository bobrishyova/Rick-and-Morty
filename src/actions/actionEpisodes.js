import { FETCH_EPISODES, URL_EPISODES } from '@/constants';

const url = URL_EPISODES;

const fetchEpisodes = (page) => async (dispatch) => {
  const response = await fetch(`${url}${page}`);
  const result = await response.json();

  dispatch({
    type: FETCH_EPISODES,
    episodesInfo: result.info,
    episodes: result.results,
  });
};

export default fetchEpisodes;
