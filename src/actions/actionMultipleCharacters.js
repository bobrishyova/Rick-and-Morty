import { FETCH_MULTIPLE_CHARACTER } from './actionTypes' 
import { URL_CHARACTER } from '../constants/api'
 
const url = URL_CHARACTER

export const fetchMultipleCharacters = (arrayId) => async dispatch => {
	const response = await fetch(`${url}${arrayId}`)
	const result = await response.json()

	dispatch({
		type: FETCH_MULTIPLE_CHARACTER,
		multipleCharacters: result,
	})
}