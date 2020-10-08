import { EPISODE } from '@/constants';

export const requestEpisode = (payload) => ({
  type: EPISODE.FETCH,
  payload,
});

export const successEpisode = (payload) => ({
  type: EPISODE.SUCCESS,
  payload,
});

export const errorEpisode = (payload) => ({
  type: EPISODE.ERROR,
  payload,
});
