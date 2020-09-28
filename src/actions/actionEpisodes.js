import { FETCH_EPISODES } from './actionTypes'
import { URL_EPISODES } from '../constants/api'

const url = URL_EPISODES

export const fetchEpisodes = (page) => async dispatch => {
	const response = await fetch(`${url}${page}`)
	const result = await response.json()

	dispatch({
		type: FETCH_EPISODES,
		episodesInfo: result.info,
		episodes: result.results, 
	})
}