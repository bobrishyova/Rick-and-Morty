import { EPISODES } from '@/constants';

export const requestEpisodes = (payload) => ({
  type: EPISODES.FETCH,
  payload,
});

export const successEpisodes = (payload) => ({
  type: EPISODES.SUCCESS,
  payload,
});

export const errorEpisodes = (payload) => ({
  type: EPISODES.ERROR,
  payload,
});
