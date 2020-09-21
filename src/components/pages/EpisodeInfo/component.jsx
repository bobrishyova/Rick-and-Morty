import React, { useEffect, useCallback, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import customArrayUrlParse from '../../../utils/customArrayUrlParse'

import './styles.css'

const EpisodeInfo = ({
	episode,
	getFetchEpisode,
	getFetchMultipleCharacters,
	multipleCharacters,
}) => {
	const { id } = useParams()

	useEffect(() => {
		if (episode.characters) {
			getFetchMultipleCharacters(customArrayUrlParse(episode.characters))
		}
	}, [getFetchMultipleCharacters, episode.characters])

	useEffect(() => {
		getFetchEpisode(id)
	}, [id, getFetchEpisode])

	const renderCharacter = useMemo(() => {
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
		<div className="headerEpisodeInfo">
			<div className="divWithNameEpisode">{episode.name}</div>
			<p className="divWithAirDateEpisode">Air Date: {episode.air_date}</p>
			<p className="divWithEpisode">Episode: {episode.episode}</p>
			<p className="characters">Сharacters:</p>
			<p className="allCharacters">{renderCharacter}</p>
		</div>
	)
}

export default EpisodeInfo