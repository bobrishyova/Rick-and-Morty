import { combineReducers } from 'redux'
import characterReducer from './characterReducer'
import locationReducer from './locationReducer'
import episodeReducer from './episodeReducer'

const roootReducer = combineReducers({
	characterReducer,
	locationReducer,
	episodeReducer,
})

export default roootReducer