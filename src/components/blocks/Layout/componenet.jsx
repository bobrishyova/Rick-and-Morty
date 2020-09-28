import React, { useEffect } from 'react'
import qs from 'query-string'
import { useLocation } from 'react-router-dom'
import PageHeader from '../../blocks/PageHeader'
import Pagination from '../../blocks/Pagination'

import './styles.css'

const Layout = ({
	tableRequest,
	titleName,
	arrayOfHeaders = [],
	tableDate,
	tableItem: TableItem,
	tableInfo,
}) => {
	const { search } = useLocation()

	useEffect(() => {
		const page = Number.parseInt(qs.parse(search).page)
		tableRequest(page || 1)
	}, [tableRequest, search])

	return (
		<div className="tableHeader">
			<PageHeader
				titleName={titleName}
			/>
			<div className="information">
				{arrayOfHeaders.map((header, index) => (
					<p 
						key={header} 
						className={arrayOfHeaders.length === 4 ? 'tableItemsWithSmallerDiv' : 'tableItems'}
					>
						{header}
					</p>
				))}
			</div>
			{tableDate.map((item) => (
				<TableItem key={item.id} item={item} />
			))}
			<Pagination
				totalPage={tableInfo.pages}
			/>
		</div>
	)
}

export default Layout