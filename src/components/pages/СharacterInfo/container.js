import { connect } from 'react-redux'
import СharacterInfo from './component'
import { fetchCharacter } from '../../../actions/actionCharacter'
import { fetchMultipleEpisodes } from '../../../actions/actionMultipleEpisodes'

const mapStateToProps = state => ({
	character: state.characterReducer.character,
	multipleEpisodes: state.episodeReducer.multipleEpisodes,
})

const mapDispatchToProps = dispatch => ({
	getFetchCharacter: (id) => dispatch(fetchCharacter(id)),
	getFetchMultipleEpisodes: (arrayId) => dispatch(fetchMultipleEpisodes(arrayId))
})

export default connect(mapStateToProps, mapDispatchToProps)(СharacterInfo)