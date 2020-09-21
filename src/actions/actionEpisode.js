import { FETCH_EPISODE } from './actionTypes'

const url = 'https://rickandmortyapi.com/api/episode/'

export const fetchEpisode = (id) => async dispatch => {
	const response = await fetch(`${url}${id}`)
	const result = await response.json()

	dispatch({
		type: FETCH_EPISODE,
		episode: result,
	})
}