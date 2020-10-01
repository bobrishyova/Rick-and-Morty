import { connect } from 'react-redux';
import fetchCharacters from '@/actions/actionCharacters';
import Characters from './component';

const mapStateToProps = (state) => ({
  characters: state.characterReducer.characters,
  charactersInfo: state.characterReducer.charactersInfo,
});

const mapDispatchToProps = (dispatch) => ({
  getFetchCharacters: (payload) => dispatch(fetchCharacters(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Characters);
