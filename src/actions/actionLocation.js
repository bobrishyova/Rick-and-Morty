import { FETCH_LOCATION } from './actionTypes'

const url = 'https://rickandmortyapi.com/api/location/'

export const fetchLocation = (id) => async dispatch => {
	const response = await fetch(`${url}${id}`)
	const result = await response.json()
	
	dispatch({
		type: FETCH_LOCATION,
		location: result,
	})
}