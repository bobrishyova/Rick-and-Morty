import React from 'react'
import { Link } from 'react-router-dom'

import './styles.css'

const LocationItem = ({
	location = {},
}) => {
	return (
		<div className="divWithLocationInformation">
			<Link 
				className="divLocationName" 
				style={{textDecoration: "none", color: "#ffffff"}} 
				to={`/location/${location.id}`}
			>
				<p className="itemLocation">{location.name}</p>
			</Link>
			<Link 
				className="divLocationItem" 
				style={{textDecoration: "none", color: "#ffffff"}} 
				to={`/location/${location.id}`}
			>
				<p className="itemLocation">{location.dimension}</p>
			</Link>
			<Link 
				className="divLocationItem" 
				style={{textDecoration: "none", color: "#ffffff"}} 
				to={`/location/${location.id}`}
			>
				<p className="itemLocation">{location.type}</p>
			</Link>
		</div>
	)
}

export default LocationItem