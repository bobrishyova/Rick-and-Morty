import { FETCH_LOCATIONS, FETCH_LOCATION } from '../actions/actionTypes'

const initialState = {
	locations: [],
	locationsInfo: {},
	location: {},
}

const locationReducer = (state = initialState, action) => {
	switch(action.type) {
		case FETCH_LOCATIONS:
			return {
				...state,
				locations: action.locations,
				locationsInfo: action.locationsInfo,
			}
		case FETCH_LOCATION:
			return {
				...state,
				location: action.location,
			}
		default:
			return state
	}
}

export default locationReducer

