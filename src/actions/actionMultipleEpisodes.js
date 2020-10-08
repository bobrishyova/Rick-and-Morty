import { MULTIPLE_EPISODES } from '@/constants';

export const requestMultipleEpisodes = (payload) => ({
  type: MULTIPLE_EPISODES.FETCH,
  payload,
});

export const successMultipleEpisodes = (payload) => ({
  type: MULTIPLE_EPISODES.SUCCESS,
  payload,
});

export const errorMultipleEpisodes = (payload) => ({
  type: MULTIPLE_EPISODES.ERROR,
  payload,
});
