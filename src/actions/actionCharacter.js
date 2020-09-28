import { FETCH_CHARACTER } from './actionTypes' 
import { URL_CHARACTER } from '../constants/api'

const url = URL_CHARACTER

export const fetchCharacter = (id) => async dispatch => {
	const response = await fetch(`${url}${id}`)
	const result = await response.json()

	dispatch({
		type: FETCH_CHARACTER,
		character: result,
	})
}