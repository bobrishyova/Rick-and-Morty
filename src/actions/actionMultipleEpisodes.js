import { FETCH_MULTIPLE_EPISODES } from './actionTypes' 

const url = 'https://rickandmortyapi.com/api/episode/'

export const fetchMultipleEpisodes = (arrayId) => async dispatch => {
	const response = await fetch(`${url}${arrayId}`)
	const result = await response.json()

	dispatch({
		type: FETCH_MULTIPLE_EPISODES,
		multipleEpisodes: result,
	})
}