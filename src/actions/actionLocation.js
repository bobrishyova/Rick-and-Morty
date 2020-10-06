import { FETCH_LOCATION, SUCCESS_LOCATION, ERROR_LOCATION } from '@/constants';

export const requestLocation = (payload) => ({
  type: FETCH_LOCATION,
  payload,
});

export const successLocation = (payload) => ({
  type: SUCCESS_LOCATION,
  payload,
});

export const errorLocation = (payload) => ({
  type: ERROR_LOCATION,
  payload,
});
