import { connect } from 'react-redux';
import { requestEpisode } from '@/actions/actionEpisode';
import { requestMultipleCharacters } from '@/actions/actionMultipleCharacters';
import EpisodeInfo from './component';

const mapStateToProps = (state) => ({
  episode: state.episodeReducer.episode,
  multipleCharacters: state.characterReducer.multipleCharacters,
});

const mapDispatchToProps = (dispatch) => ({
  getFetchEpisode: (payload) => dispatch(requestEpisode(payload)),
  getFetchMultipleCharacters: (payload) => dispatch(requestMultipleCharacters(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EpisodeInfo);
