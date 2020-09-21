import { FETCH_MULTIPLE_CHARACTER } from './actionTypes' 

const url = 'https://rickandmortyapi.com/api/character/'

export const fetchMultipleCharacters = (arrayId) => async dispatch => {
	const response = await fetch(`${url}${arrayId}`)
	const result = await response.json()

	dispatch({
		type: FETCH_MULTIPLE_CHARACTER,
		multipleCharacters: result,
	})
}