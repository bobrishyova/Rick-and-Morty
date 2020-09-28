import { FETCH_MULTIPLE_EPISODES } from './actionTypes' 
import { URL_EPISODE } from '../constants/api'

const url = URL_EPISODE

export const fetchMultipleEpisodes = (arrayId) => async dispatch => {
	const response = await fetch(`${url}${arrayId}`)
	const result = await response.json()

	dispatch({
		type: FETCH_MULTIPLE_EPISODES,
		multipleEpisodes: result,
	})
}