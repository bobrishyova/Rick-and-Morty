import {
  FETCH_MULTIPLE_EPISODES,
  SUCCESS_MULTIPLE_EPISODES,
  ERROR_MULTIPLE_EPISODES,
} from '@/constants';

export const requestMultipleEpisodes = (payload) => ({
  type: FETCH_MULTIPLE_EPISODES,
  payload,
});

export const successMultipleEpisodes = (payload) => ({
  type: SUCCESS_MULTIPLE_EPISODES,
  payload,
});

export const errorMultipleEpisodes = (payload) => ({
  type: ERROR_MULTIPLE_EPISODES,
  payload,
});
