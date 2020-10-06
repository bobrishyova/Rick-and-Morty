import {
  FETCH_MULTIPLE_CHARACTERS,
  SUCCESS_MULTIPLE_CHARACTER,
  ERROR_MULTIPLE_CHARACTER,
} from '@/constants';

export const requestMultipleCharacters = (payload) => ({
  type: FETCH_MULTIPLE_CHARACTERS,
  payload,
});

export const successMultipleCharacters = (payload) => ({
  type: SUCCESS_MULTIPLE_CHARACTER,
  payload,
});

export const errorMultipleCharacters = (payload) => ({
  type: ERROR_MULTIPLE_CHARACTER,
  payload,
});
