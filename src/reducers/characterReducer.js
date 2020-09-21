import { FETCH_CHARACTERS, FETCH_CHARACTER, FETCH_MULTIPLE_CHARACTER } from '../actions/actionTypes'

const initialState = {
	characters: [],
	charactersInfo: {},
	character: {},
	multipleCharacters: [],
}

const characterReducer = (state = initialState, action) => {
	switch(action.type) {
		case FETCH_CHARACTERS:
			return {
				...state,
				characters: action.characters,
				charactersInfo: action.charactersInfo,
			}
		case FETCH_CHARACTER:
			return {
				...state,
				character: action.character,
			}
		case FETCH_MULTIPLE_CHARACTER: 
			return {
				...state,
				multipleCharacters: action.multipleCharacters,
			}
		default:
			return state
	}
}

export default characterReducer