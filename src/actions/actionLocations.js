import { LOCATIONS } from '@/constants';

export const requestLocations = (payload) => ({
  type: LOCATIONS.FETCH,
  payload,
});

export const successLocations = (payload) => ({
  type: LOCATIONS.SUCCESS,
  payload,
});

export const errorLocations = (payload) => ({
  type: LOCATIONS.ERROR,
  payload,
});
