import { connect } from 'react-redux'
import LocationInfo from './component'
import { fetchLocation } from '../../../actions/actionLocation'
import { fetchMultipleCharacters } from '../../../actions/actionMultipleCharacters'

const mapStateToProps = state => ({
	location: state.locationReducer.location,
	multipleCharacters: state.characterReducer.multipleCharacters,
})

const mapDispatchToProps = dispatch => ({
	getFetchLocation: (id) => dispatch(fetchLocation(id)),
	getFetchMultipleCharacters: (arrayUrl) => dispatch(fetchMultipleCharacters(arrayUrl))
})

export default connect(mapStateToProps, mapDispatchToProps)(LocationInfo)