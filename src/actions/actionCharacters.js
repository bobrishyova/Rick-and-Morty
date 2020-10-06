import { FETCH_CHARACTERS, SUCCESS_CHARACTERS, ERROR_CHARACTERS } from '@/constants';

export const requestCharacters = (payload) => ({
  type: FETCH_CHARACTERS,
  payload,
});

export const successCharacters = (payload) => ({
  type: SUCCESS_CHARACTERS,
  payload,
});

export const errorCharacters = (payload) => ({
  type: ERROR_CHARACTERS,
  payload,
});
