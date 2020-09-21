import { connect } from 'react-redux'
import Episodes from './component'
import { fetchEpisodes } from '../../../actions/actionEpisodes'

const mapStateToProps = state => ({
	episodes: state.episodeReducer.episodes,
	episodesInfo: state.episodeReducer.episodesInfo,
})

const mapDispatchToProps = dispatch => ({
	getFetchEpisodes: (payload) => dispatch(fetchEpisodes(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Episodes)