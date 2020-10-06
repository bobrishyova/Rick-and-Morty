import { FETCH_CHARACTER, SUCCESS_CHARACTER, ERROR_CHARACTER } from '@/constants';

export const requestCharacter = (payload) => ({
  type: FETCH_CHARACTER,
  payload,
});

export const successCharacter = (payload) => ({
  type: SUCCESS_CHARACTER,
  payload,
});

export const errorCharacter = (payload) => ({
  type: ERROR_CHARACTER,
  payload,
});
