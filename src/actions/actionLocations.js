import { FETCH_LOCATIONS } from './actionTypes'
import { URL_LOCATIONS } from '../constants/api'

const url = URL_LOCATIONS

export const fetchLocations = (page) => async dispatch => {
	const response = await fetch(`${url}${page}`)
	const result = await response.json()

	dispatch({
		type: FETCH_LOCATIONS,
		locationsInfo: result.info,
		locations: result.results,
	})
}