import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import qs from 'query-string'
import PageHeader from '../../blocks/PageHeader'
import EpisodeItem from '../../blocks/EpisodeItem'
import Pagination from '../../blocks/Pagination'

import './styles.css'

const Episodes = ({
	getFetchEpisodes,
	episodes,
	episodesInfo,
}) => {
	const { search } = useLocation()

	useEffect(() => {
		const page = +qs.parse(search).page
		getFetchEpisodes(page || 1)
	}, [getFetchEpisodes, search])

	return (
		<div className="headerEpisodes">
			<PageHeader 
				titleName="Episodes"
			/>
			<div className="episodesInformation">
				<p className="nameEpisode">Name</p>
				<p className="airDateEpisode">Air Date</p>
				<p className="episodeNumber">Episode</p>
			</div>
			{episodes.map((episode) => (
				<EpisodeItem key={episode.id} episode={episode} />
			))}
			<Pagination totalPage={episodesInfo.pages}/>
		</div>
	)
}

export default Episodes