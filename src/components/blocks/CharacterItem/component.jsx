import React from 'react'
import { Link } from 'react-router-dom'

import './styles.css'

const CharacterItem = ({
	item = {},
}) => {
	const linksCharacterItem = { 
		textDecoration: "none",
		color: "#ffffff",
	}
	return (
		<div className="divWithCharacterInformation">
			<Link 
				className="divCharacterName" 
				style={linksCharacterItem} 
				to={`/character/${item.id}`}
			>
				<p className="itemCharacter">{item.name}</p>
			</Link>
			<Link 
				className="divCharacterItem" 
				style={linksCharacterItem} 
				to={`/character/${item.id}`}
			>
				<p className="itemCharacter">{item.status}</p>
			</Link>
			<Link 
				className="divCharacterItem" 
				style={linksCharacterItem} 
				to={`/character/${item.id}`}
			>
				<p className="itemCharacter">{item.species}</p>
			</Link>
			<Link 
				className="divCharacterItem" 
				style={linksCharacterItem} 
				to={`/character/${item.id}`}
			>
				<p className="itemCharacter">{item.gender}</p>
			</Link>
		</div>
	)
}

export default CharacterItem