import { CHARACTER } from '@/constants';

export const requestCharacter = (payload) => ({
  type: CHARACTER.FETCH,
  payload,
});

export const successCharacter = (payload) => ({
  type: CHARACTER.SUCCESS,
  payload,
});

export const errorCharacter = (payload) => ({
  type: CHARACTER.ERROR,
  payload,
});
