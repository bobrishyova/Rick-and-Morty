import React from 'react'
import CharacterItem from '../../blocks/CharacterItem'
import Layout from '../../blocks/Layout'

const Characters = ({
	getFetchCharacters,
	characters,
	charactersInfo,
}) => {
	return (
		<Layout
			tableRequest={getFetchCharacters}
			titleName='Characters'
			arrayOfHeaders={['Name', 'Status', 'Species', 'Gender']}
			tableDate={characters}
			tableItem={CharacterItem}
			tableInfo={charactersInfo}
		/>
	)
}

export default Characters