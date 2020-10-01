import { FETCH_LOCATION, URL_LOCATION } from '@/constants';

const fetchLocation = (id) => async (dispatch) => {
  const response = await fetch(`${URL_LOCATION}${id}`);
  const result = await response.json();

  dispatch({
    type: FETCH_LOCATION,
    location: result,
  });
};

export default fetchLocation;
