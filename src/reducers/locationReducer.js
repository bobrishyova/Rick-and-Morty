import { LOCATIONS, LOCATION } from '@/constants';

const initialState = {
  locations: [],
  locationsInfo: {},
  location: {},
};

const locationReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOCATIONS.SUCCESS:
      return {
        ...state,
        locations: action.payload.results,
        locationsInfo: action.payload.info,
      };
    case LOCATION.SUCCESS:
      return {
        ...state,
        location: action.payload,
      };
    default:
      return state;
  }
};

export default locationReducer;
