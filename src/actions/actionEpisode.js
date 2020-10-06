import { FETCH_EPISODE, SUCCESS_EPISODE, ERROR_EPISODE } from '@/constants';

export const requestEpisode = (payload) => ({
  type: FETCH_EPISODE,
  payload,
});

export const successEpisode = (payload) => ({
  type: SUCCESS_EPISODE,
  payload,
});

export const errorEpisode = (payload) => ({
  type: ERROR_EPISODE,
  payload,
});
