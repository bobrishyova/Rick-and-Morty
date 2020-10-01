import { FETCH_LOCATION, URL_LOCATION } from '@/constants';

const url = URL_LOCATION;

const fetchLocation = (id) => async (dispatch) => {
  const response = await fetch(`${url}${id}`);
  const result = await response.json();

  dispatch({
    type: FETCH_LOCATION,
    location: result,
  });
};

export default fetchLocation;
