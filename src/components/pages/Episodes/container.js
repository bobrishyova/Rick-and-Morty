import { connect } from 'react-redux';
import { requestEpisodes } from '@/actions/actionEpisodes';
import Episodes from './component';

const mapStateToProps = (state) => ({
  episodes: state.episodeReducer.episodes,
  episodesInfo: state.episodeReducer.episodesInfo,
});

const mapDispatchToProps = (dispatch) => ({
  getFetchEpisodes: (payload) => dispatch(requestEpisodes(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Episodes);
