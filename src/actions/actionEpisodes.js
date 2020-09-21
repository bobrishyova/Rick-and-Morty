import { FETCH_EPISODES } from './actionTypes'

const url = 'https://rickandmortyapi.com/api/episode/?page='

export const fetchEpisodes = (page) => async dispatch => {
	const response = await fetch(`${url}${page}`)
	const result = await response.json()

	dispatch({
		type: FETCH_EPISODES,
		episodesInfo: result.info,
		episodes: result.results, 
	})
}