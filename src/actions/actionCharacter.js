import { FETCH_CHARACTER } from './actionTypes' 

const url = 'https://rickandmortyapi.com/api/character/'

export const fetchCharacter = (id) => async dispatch => {
	const response = await fetch(`${url}${id}`)
	const result = await response.json()

	dispatch({
		type: FETCH_CHARACTER,
		character: result,
	})
}