import { FETCH_EPISODE } from './actionTypes'
import { URL_EPISODE } from '../constants/api'

const url = URL_EPISODE

export const fetchEpisode = (id) => async dispatch => {
	const response = await fetch(`${url}${id}`)
	const result = await response.json()

	dispatch({
		type: FETCH_EPISODE,
		episode: result,
	})
}