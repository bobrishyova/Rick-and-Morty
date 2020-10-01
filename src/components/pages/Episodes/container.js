import { connect } from 'react-redux';
import fetchEpisodes from '@/actions/actionEpisodes';
import Episodes from './component';

const mapStateToProps = (state) => ({
  episodes: state.episodeReducer.episodes,
  episodesInfo: state.episodeReducer.episodesInfo,
});

const mapDispatchToProps = (dispatch) => ({
  getFetchEpisodes: (payload) => dispatch(fetchEpisodes(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Episodes);
