import { FETCH_CHARACTERS } from './actionTypes' 
import { URL_CHARACTERS } from '../constants/api'

const url = URL_CHARACTERS

export const fetchCharacters = (page) => async dispatch => {
	const response = await fetch(`${url}${page}`)
	const result = await response.json()

	dispatch({
		type: FETCH_CHARACTERS,
		charactersInfo: result.info,
		characters: result.results,
	})
}