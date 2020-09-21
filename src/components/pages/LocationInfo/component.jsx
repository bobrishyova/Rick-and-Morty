import React, { useEffect, useMemo, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import customArrayUrlParse from '../../../utils/customArrayUrlParse'

import './styles.css'

const LocationInfo = ({
	getFetchMultipleCharacters,
	getFetchLocation,
	location,
	multipleCharacters,
}) => {
	const { id } = useParams()

	useEffect(() => {
		if (location.residents) {
			getFetchMultipleCharacters(customArrayUrlParse(location.residents))
		}
	}, [getFetchMultipleCharacters, location.residents])

	useEffect(() => {
		getFetchLocation(id)
	}, [id, getFetchLocation])

	const renderResident = useMemo(() => {
		if (Array.isArray(multipleCharacters)) {
			return multipleCharacters.map((character) => (
				<div key={character.id}>{character.name}</div>
			))
		} 
		return (
			<div>{multipleCharacters.name}</div>
		)
	}, [multipleCharacters])

	return (
		<div className="headerLocationInfo">
			<div className="divWithNameLocation">{location.name}</div>
			<div className="divWithTypeLocation">Type: {location.type}</div>
			<p className="residents">Residents:</p>
			<p>{renderResident}</p>
		</div>
	)
}

export default LocationInfo
