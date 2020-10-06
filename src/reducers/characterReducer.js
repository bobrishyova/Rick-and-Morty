import { SUCCESS_CHARACTERS, SUCCESS_CHARACTER, SUCCESS_MULTIPLE_CHARACTER } from '@/constants';

const initialState = {
  characters: [],
  charactersInfo: {},
  character: {},
  multipleCharacters: [],
};

const characterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS_CHARACTERS:
      return {
        ...state,
        characters: action.payload.results,
        charactersInfo: action.payload.info,
      };
    case SUCCESS_CHARACTER:
      return {
        ...state,
        character: action.payload,
      };
    case SUCCESS_MULTIPLE_CHARACTER:
      return {
        ...state,
        multipleCharacters: action.payload,
      };
    default:
      return state;
  }
};

export default characterReducer;
