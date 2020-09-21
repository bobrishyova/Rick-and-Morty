import React from 'react'
import { Link } from 'react-router-dom'

import './styles.css'

const CharacterItem = ({
	character = {},
}) => {
	return (
		<div className="divWithCharacterInformation">
			<Link 
				className="divCharacterName" 
				style={{textDecoration: "none", color: "#ffffff"}} 
				to={`/character/${character.id}`}
			>
				<p className="itemCharacter">{character.name}</p>
			</Link>
			<Link 
				className="divCharacterItem" 
				style={{textDecoration: "none", color: "#ffffff"}} 
				to={`/character/${character.id}`}
			>
				<p className="itemCharacter">{character.status}</p>
			</Link>
			<Link 
				className="divCharacterItem" 
				style={{textDecoration: "none", color: "#ffffff"}} 
				to={`/character/${character.id}`}
			>
				<p className="itemCharacter">{character.species}</p>
			</Link>
			<Link 
				className="divCharacterItem" 
				style={{textDecoration: "none", color: "#ffffff"}} 
				to={`/character/${character.id}`}
			>
				<p className="itemCharacter">{character.gender}</p>
			</Link>
		</div>
	)
}

export default CharacterItem