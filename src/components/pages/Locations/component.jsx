import React from 'react'
import LocationItem from '../../blocks/LocationItem'
import Layout from '../../blocks/Layout'

const Locations = ({
	getFetchLocations,
	locations,
	locationsInfo,
}) => {
	return (
		<Layout
			tableRequest={getFetchLocations}
			titleName='Locations'
			arrayOfHeaders={['Name', 'Dimension', 'Type']}
			tableDate={locations}
			tableItem={LocationItem}
			tableInfo={locationsInfo}
		/>
	)
}

export default Locations