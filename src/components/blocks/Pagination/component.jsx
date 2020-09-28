import React, { useState, useCallback, useEffect } from 'react'
import qs from 'query-string'
import { useLocation, useHistory } from 'react-router-dom'
import createPagination from '../../../helpers/createPagination'

import './styles.css'

const Pagination = ({
	totalPage,
}) => {
	const { search, pathname } = useLocation()
	const { push } = useHistory()
	const [currentPage, setCurrentPage] = useState(1)

	useEffect(() => {
		const page = Number.parseInt(qs.parse(search).page)
		setCurrentPage(page || 1)
	}, [search, setCurrentPage])

	const handleSetCurrentPage = useCallback((page) => () => {
		push({
			pathname,
			search: qs.stringify({
				page,
			})
		})
	}, [pathname])

	return (
		<div className="divWithPagination">
			<div
				className="pageSwitch" 
				onClick={handleSetCurrentPage(currentPage >= 2 ? currentPage - 1 : 1)}
			>
				&#171;
			</div>
			{createPagination({
				currentPage,
				totalPage,
			}).map((pagination) => (
				<div 
					key={pagination.key} 
					onClick={handleSetCurrentPage(pagination.value)}
					className={`divWithPage ${currentPage === pagination.value ? "selected" : ''} 
					${pagination.value === '...' ? "threeDotsStyle": ''} `}
				>
					{pagination.value}
				</div>
			))}
			<div 
				className="pageSwitch"
				onClick={handleSetCurrentPage(currentPage <= totalPage - 1 ? currentPage + 1 : totalPage)}
			>&#187;</div>
		</div>
	)
}

export default Pagination