import { FETCH_LOCATIONS, SUCCESS_LOCATIONS, ERROR_LOCATIONS } from '@/constants';

export const requestLocations = (payload) => ({
  type: FETCH_LOCATIONS,
  payload,
});

export const successLocations = (payload) => ({
  type: SUCCESS_LOCATIONS,
  payload,
});

export const errorLocations = (payload) => ({
  type: ERROR_LOCATIONS,
  payload,
});
