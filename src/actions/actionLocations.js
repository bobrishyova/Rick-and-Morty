import { FETCH_LOCATIONS, URL_LOCATION } from '@/constants';

const fetchLocations = (page) => async (dispatch) => {
  const response = await fetch(`${URL_LOCATION}/?page=${page}`);
  const result = await response.json();

  dispatch({
    type: FETCH_LOCATIONS,
    locationsInfo: result.info,
    locations: result.results,
  });
};

export default fetchLocations;
