import { FETCH_EPISODES, SUCCESS_EPISODES, ERROR_EPISODES } from '@/constants';

export const requestEpisodes = (payload) => ({
  type: FETCH_EPISODES,
  payload,
});

export const successEpisodes = (payload) => ({
  type: SUCCESS_EPISODES,
  payload,
});

export const errorEpisodes = (payload) => ({
  type: ERROR_EPISODES,
  payload,
});
