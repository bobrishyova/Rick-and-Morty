import { LOCATION } from '@/constants';

export const requestLocation = (payload) => ({
  type: LOCATION.FETCH,
  payload,
});

export const successLocation = (payload) => ({
  type: LOCATION.SUCCESS,
  payload,
});

export const errorLocation = (payload) => ({
  type: LOCATION.ERROR,
  payload,
});
