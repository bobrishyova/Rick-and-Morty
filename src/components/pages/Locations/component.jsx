import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import qs from 'query-string'
import PageHeader from '../../blocks/PageHeader'
import LocationItem from '../../blocks/LocationItem'
import Pagination from '../../blocks/Pagination'

import './styles.css'

const Locations = ({
	getFetchLocations,
	locations,
	locationsInfo,
}) => {
	const { search } = useLocation()

	useEffect(() => {
		const page = +qs.parse(search).page
		getFetchLocations(page || 1)
	}, [getFetchLocations, search])

	return (
		<div className="headerLocations">
			<PageHeader 
				titleName="Locations"
			/>
			<div className="locationsInformation">
				<p className="nameLocation">Name</p>
				<p className="dimensionLocation">Dimension</p>
				<p className="typeLocation">Type</p>
			</div>
			{locations.map((location) => (
				<LocationItem key={location.id} location={location} />
			))}
			<Pagination totalPage={locationsInfo.pages}/>
		</div>
	)
}

export default Locations