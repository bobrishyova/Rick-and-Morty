import { FETCH_LOCATIONS, URL_LOCATIONS } from '@/constants';

const url = URL_LOCATIONS;

const fetchLocations = (page) => async (dispatch) => {
  const response = await fetch(`${url}${page}`);
  const result = await response.json();

  dispatch({
    type: FETCH_LOCATIONS,
    locationsInfo: result.info,
    locations: result.results,
  });
};

export default fetchLocations;
