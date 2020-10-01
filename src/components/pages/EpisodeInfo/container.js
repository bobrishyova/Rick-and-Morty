import { connect } from 'react-redux';
import fetchEpisode from '@/actions/actionEpisode';
import fetchMultipleCharacters from '@/actions/actionMultipleCharacters';
import EpisodeInfo from './component';

const mapStateToProps = (state) => ({
  episode: state.episodeReducer.episode,
  multipleCharacters: state.characterReducer.multipleCharacters,
});

const mapDispatchToProps = (dispatch) => ({
  getFetchEpisode: (id) => dispatch(fetchEpisode(id)),
  getFetchMultipleCharacters: (arrayUrl) => dispatch(fetchMultipleCharacters(arrayUrl)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EpisodeInfo);
