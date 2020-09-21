import { connect } from 'react-redux'
import Characters from './component'
import { fetchCharacters } from '../../../actions/actionCharacters'

const mapStateToProps = state => ({
	characters: state.characterReducer.characters,
	charactersInfo: state.characterReducer.charactersInfo,
})

const mapDispatchToProps = dispatch => ({
	getFetchCharacters: (payload) => dispatch(fetchCharacters(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Characters)