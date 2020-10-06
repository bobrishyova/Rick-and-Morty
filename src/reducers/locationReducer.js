import { SUCCESS_LOCATIONS, SUCCESS_LOCATION } from '@/constants';

const initialState = {
  locations: [],
  locationsInfo: {},
  location: {},
};

const locationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS_LOCATIONS:
      return {
        ...state,
        locations: action.payload.results,
        locationsInfo: action.payload.info,
      };
    case SUCCESS_LOCATION:
      return {
        ...state,
        location: action.payload,
      };
    default:
      return state;
  }
};

export default locationReducer;
