import { connect } from 'react-redux';
import { requestCharacters } from '@/actions/actionCharacters';
import Characters from './component';

const mapStateToProps = (state) => ({
  characters: state.characterReducer.characters,
  charactersInfo: state.characterReducer.charactersInfo,
});

const mapDispatchToProps = (dispatch) => ({
  getFetchCharacters: (payload) => dispatch(requestCharacters(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Characters);
