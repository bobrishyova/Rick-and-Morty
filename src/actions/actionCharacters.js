import { CHARACTERS } from '@/constants';

export const requestCharacters = (payload) => ({
  type: CHARACTERS.FETCH,
  payload,
});

export const successCharacters = (payload) => ({
  type: CHARACTERS.SUCCESS,
  payload,
});

export const errorCharacters = (payload) => ({
  type: CHARACTERS.ERROR,
  payload,
});
