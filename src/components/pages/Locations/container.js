import { connect } from 'react-redux';
import { requestLocations } from '@/actions/actionLocations';
import Locations from './component';

const mapStateToProps = (state) => ({
  locations: state.locationReducer.locations,
  locationsInfo: state.locationReducer.locationsInfo,
});

const mapDispatchToProps = (dispatch) => ({
  getFetchLocations: (payload) => dispatch(requestLocations(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Locations);
