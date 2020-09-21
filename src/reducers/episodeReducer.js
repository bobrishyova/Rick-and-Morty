import { FETCH_EPISODES, FETCH_EPISODE, FETCH_MULTIPLE_EPISODES } from '../actions/actionTypes'

const initialState = {
	episodes: [],
	episodesInfo: {},
	episode: {},
	multipleEpisodes: [],
}

const episodeReducer = (state = initialState, action) => {
	switch(action.type) {
		case FETCH_EPISODES:
			return {
				...state,
				episodes: action.episodes,
				episodesInfo: action.episodesInfo,
			}
		case FETCH_EPISODE:
			return {
				...state,
				episode: action.episode,
			}
		case FETCH_MULTIPLE_EPISODES:
			return {
				...state,
				multipleEpisodes: action.multipleEpisodes,
			}
		default:
			return state
	}
}

export default episodeReducer