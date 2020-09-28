import React, { useEffect, useCallback, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import Moment from 'react-moment'
import customArrayUrlParse from '../../../helpers/customArrayUrlParse'

import './styles.css'

const СharacterInfo = ({
	getFetchCharacter,
	character,
	multipleEpisodes,
	getFetchMultipleEpisodes,
}) => {
	const { id } = useParams()

	useEffect(() => {
		if (character.episode) {
			getFetchMultipleEpisodes(customArrayUrlParse(character.episode))
		}
	}, [getFetchMultipleEpisodes, character.episode])

	useEffect(() => {
		getFetchCharacter(id)
	}, [getFetchCharacter, id]) 

	const renderEpisodes = useMemo(() => {
		if (Array.isArray(multipleEpisodes)) {
			return multipleEpisodes.map((episode) => (
				<div key={episode.id}>{episode.episode}</div>
			))
		} 
		return (
			<div>{multipleEpisodes.episode}</div>
		)
	}, [multipleEpisodes])
	
	return (
		<div className="headerСharacterInfo">
			<div className="imgCharacterWithEpisodes">
				<img className="imgCharacter" src={character.image} />
				<p>Episodes: </p>
				<p>{renderEpisodes}</p>
			</div>
			<div className="infoAboutСharacter">
				<p className="nameСharacter">{character.name}</p>
				<p className="infoCharacter">Status: {character.status}</p>
				<p className="infoCharacter">Species: {character.species}</p>
				<p className="infoCharacter">Gender: {character.gender}</p>
				<p className="infoCharacter">
					Created: <Moment format="DD.MM.YYYY">{character.created}</Moment>
				</p>
			</div>
		</div>
	)
}

export default СharacterInfo