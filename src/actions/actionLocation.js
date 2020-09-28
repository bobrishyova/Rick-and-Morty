import { FETCH_LOCATION } from './actionTypes'
import { URL_LOCATION } from '../constants/api'

const url = URL_LOCATION

export const fetchLocation = (id) => async dispatch => {
	const response = await fetch(`${url}${id}`)
	const result = await response.json()
	
	dispatch({
		type: FETCH_LOCATION,
		location: result,
	})
}