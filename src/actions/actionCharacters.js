import { FETCH_CHARACTERS } from './actionTypes' 

const url = 'https://rickandmortyapi.com/api/character/?page='

export const fetchCharacters = (page) => async dispatch => {
	const response = await fetch(`${url}${page}`)
	const result = await response.json()

	dispatch({
		type: FETCH_CHARACTERS,
		charactersInfo: result.info,
		characters: result.results,
	})
}