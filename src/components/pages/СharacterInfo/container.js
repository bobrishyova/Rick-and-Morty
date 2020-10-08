import { connect } from 'react-redux';
import { requestCharacter } from '@/actions/actionCharacter';
import { requestMultipleEpisodes } from '@/actions/actionMultipleEpisodes';
import СharacterInfo from './component';

const mapStateToProps = (state) => ({
  character: state.characterReducer.character,
  multipleEpisodes: state.episodeReducer.multipleEpisodes,
});

const mapDispatchToProps = (dispatch) => ({
  getFetchCharacter: (payload) => dispatch(requestCharacter(payload)),
  getFetchMultipleEpisodes: (payload) => dispatch(requestMultipleEpisodes(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(СharacterInfo);
