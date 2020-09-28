import React from 'react'
import EpisodeItem from '../../blocks/EpisodeItem'
import Layout from '../../blocks/Layout'

const Episodes = ({
	getFetchEpisodes,
	episodes,
	episodesInfo,
}) => {
	return (
		<Layout
			tableRequest={getFetchEpisodes}
			titleName='Episodes'
			arrayOfHeaders={['Name', 'Air Date', 'Episode']}
			tableDate={episodes}
			tableItem={EpisodeItem}
			tableInfo={episodesInfo}
		/>
	)
}

export default Episodes