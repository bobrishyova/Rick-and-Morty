import React from 'react'
import { Link } from 'react-router-dom'

import './styles.css'

const LocationItem = ({
	item = {},
}) => {
	const linksLocationItem  = { 
		textDecoration: "none",
		color: "#ffffff",
	}
	return (
		<div className="divWithLocationInformation">
			<Link 
				className="divLocationName" 
				style={linksLocationItem} 
				to={`/location/${item.id}`}
			>
				<p className="itemLocation">{item.name}</p>
			</Link>
			<Link 
				className="divLocationItem" 
				style={linksLocationItem} 
				to={`/location/${item.id}`}
			>
				<p className="itemLocation">{item.dimension}</p>
			</Link>
			<Link 
				className="divLocationItem" 
				style={linksLocationItem} 
				to={`/location/${item.id}`}
			>
				<p className="itemLocation">{item.type}</p>
			</Link>
		</div>
	)
}

export default LocationItem