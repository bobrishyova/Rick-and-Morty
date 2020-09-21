import React from 'react'
import { Link } from 'react-router-dom'

import './styles.css'

const EpisodeItem = ({
	episode = {},
}) => {
	return (
		<div className="divWithEpisodeInformation">
			<Link 
				className="divEpisodeName" 
				style={{textDecoration: "none", color: "#ffffff"}} 
				to={`/episode/${episode.id}`}
			>
				<p className="itemEpisode">{episode.name}</p>
			</Link>
			<Link 
				className="divEpisodeItem" 
				style={{textDecoration: "none", color: "#ffffff"}} 
				to={`/episode/${episode.id}`}
			>
				<p className="itemEpisode">{episode.air_date}</p>
			</Link>
			<Link 
				className="divEpisodeItem" 
				style={{textDecoration: "none", color: "#ffffff"}} 
				to={`/episode/${episode.id}`}
			>
				<p className="itemEpisode">{episode.episode}</p>
			</Link>
		</div>
	)
}

export default EpisodeItem