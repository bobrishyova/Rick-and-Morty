import { FETCH_LOCATIONS } from './actionTypes'

const url = 'https://rickandmortyapi.com/api/location/?page='

export const fetchLocations = (page) => async dispatch => {
	const response = await fetch(`${url}${page}`)
	const result = await response.json()

	dispatch({
		type: FETCH_LOCATIONS,
		locationsInfo: result.info,
		locations: result.results,
	})
}