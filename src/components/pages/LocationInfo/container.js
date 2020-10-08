import { connect } from 'react-redux';
import { requestLocation } from '@/actions/actionLocation';
import { requestMultipleCharacters } from '@/actions/actionMultipleCharacters';
import LocationInfo from './component';

const mapStateToProps = (state) => ({
  location: state.locationReducer.location,
  multipleCharacters: state.characterReducer.multipleCharacters,
});

const mapDispatchToProps = (dispatch) => ({
  getFetchLocation: (payload) => dispatch(requestLocation(payload)),
  getFetchMultipleCharacters: (payload) => dispatch(requestMultipleCharacters(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LocationInfo);
