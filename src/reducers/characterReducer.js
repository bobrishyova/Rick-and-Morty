import { CHARACTERS, CHARACTER, MULTIPLE_CHARACTERS } from '@/constants';

const initialState = {
  characters: [],
  charactersInfo: {},
  character: {},
  multipleCharacters: [],
};

const characterReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHARACTERS.SUCCESS:
      return {
        ...state,
        characters: action.payload.results,
        charactersInfo: action.payload.info,
      };
    case CHARACTER.SUCCESS:
      return {
        ...state,
        character: action.payload,
      };
    case MULTIPLE_CHARACTERS.SUCCESS:
      return {
        ...state,
        multipleCharacters: action.payload,
      };
    default:
      return state;
  }
};

export default characterReducer;
