import { connect } from 'react-redux'
import Locations from './component'
import { fetchLocations } from '../../../actions/actionLocations'

const mapStateToProps = state => ({
	locations: state.locationReducer.locations,
	locationsInfo: state.locationReducer.locationsInfo,
})

const mapDispatchToProps = dispatch => ({
	getFetchLocations: (payload) => dispatch(fetchLocations(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Locations)