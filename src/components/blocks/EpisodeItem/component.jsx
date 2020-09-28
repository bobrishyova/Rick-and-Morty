import React from 'react'
import { Link } from 'react-router-dom'

import './styles.css'

const EpisodeItem = ({
	item = {},
}) => {
	const linksEpisodeItem = { 
		textDecoration: "none",
		color: "#ffffff",
	}
	return (
		<div className="divWithEpisodeInformation">
			<Link 
				className="divEpisodeName" 
				style={linksEpisodeItem} 
				to={`/episode/${item.id}`}
			>
				<p className="itemEpisode">{item.name}</p>
			</Link>
			<Link 
				className="divEpisodeItem" 
				style={linksEpisodeItem} 
				to={`/episode/${item.id}`}
			>
				<p className="itemEpisode">{item.air_date}</p>
			</Link>
			<Link 
				className="divEpisodeItem" 
				style={linksEpisodeItem} 
				to={`/episode/${item.id}`}
			>
				<p className="itemEpisode">{item.episode}</p>
			</Link>
		</div>
	)
}

export default EpisodeItem