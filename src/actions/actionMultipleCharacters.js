import { MULTIPLE_CHARACTERS } from '@/constants';

export const requestMultipleCharacters = (payload) => ({
  type: MULTIPLE_CHARACTERS.FETCH,
  payload,
});

export const successMultipleCharacters = (payload) => ({
  type: MULTIPLE_CHARACTERS.SUCCESS,
  payload,
});

export const errorMultipleCharacters = (payload) => ({
  type: MULTIPLE_CHARACTERS.ERROR,
  payload,
});
