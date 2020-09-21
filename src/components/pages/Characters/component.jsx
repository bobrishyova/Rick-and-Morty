import React, { useEffect } from 'react'
import qs from 'query-string'
import { useLocation } from 'react-router-dom'
import CharacterItem from '../../blocks/CharacterItem'
import PageHeader from '../../blocks/PageHeader'
import Pagination from '../../blocks/Pagination'

import './styles.css'

const Characters = ({
	getFetchCharacters,
	characters,
	charactersInfo,
}) => {
	const { search } = useLocation()

	useEffect(() => {
		const page = +qs.parse(search).page
		getFetchCharacters(page || 1)
	}, [getFetchCharacters, search])

	return (
		<div className="headerCharacters">
			<PageHeader
				titleName='Characters'
			/>
			<div className="characterInformation">
				<p className="nameCharacter">Name</p>
				<p className="statusCharacter">Status</p>
				<p className="speciesCharacter">Species</p>
				<p className="genderCharacter">Gender</p>
			</div>
			{characters.map((character) => (
				<CharacterItem key={character.id} character={character} />
			))}
			<Pagination
				totalPage={charactersInfo.pages}
			/>
		</div>
	)
}

export default Characters