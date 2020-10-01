import { connect } from 'react-redux';
import fetchLocation from '@/actions/actionLocation';
import fetchMultipleCharacters from '@/actions/actionMultipleCharacters';
import LocationInfo from './component';

const mapStateToProps = (state) => ({
  location: state.locationReducer.location,
  multipleCharacters: state.characterReducer.multipleCharacters,
});

const mapDispatchToProps = (dispatch) => ({
  getFetchLocation: (id) => dispatch(fetchLocation(id)),
  getFetchMultipleCharacters: (arrayUrl) => dispatch(fetchMultipleCharacters(arrayUrl)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LocationInfo);
