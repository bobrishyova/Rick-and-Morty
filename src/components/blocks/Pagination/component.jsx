import React, { useState, useCallback, useEffect } from 'react'
import qs from 'query-string'
import { useLocation, useHistory } from 'react-router-dom'

import './styles.css'
import { now } from 'moment'

const Pagination = ({
	totalPage,
}) => {
	const { search, pathname } = useLocation()
	const { push } = useHistory()
	const [currentPage, setCurrentPage] = useState(1)

	useEffect(() => {
		const page = +qs.parse(search).page
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

	const createPagination = useCallback(() => {
		const newArrayPages = []
		if (!totalPage) {
			return []
		}
		if (totalPage <= 4) {
			for (let i = 1; i <= totalPage; i++) {
				newArrayPages.push({
					key: `${i}`,
					value: i,
				})
			}
			return newArrayPages
		}
		if (currentPage <= 3) {
			const forCondition = currentPage === 1 ? 2 : 1
			for (let i = 1; i <= currentPage + forCondition; i++) {
				newArrayPages.push({
					key: `${i}`,
					value: i,
				})
			}
			newArrayPages.push({
				key: 'rightDots',
				value: '...',
			}, {
				key: `${totalPage}`,
				value: totalPage,
			})
			return newArrayPages
		}
		if (currentPage >= totalPage - 2) {
			newArrayPages.push({
				key: '1',
				value: 1,
			}, {
				key: 'leftDots',
				value: '...',
			})
			for (let i = currentPage - 1; i <= totalPage; i++) {
				newArrayPages.push({
					key: `${i}`,
					value: i,
				})
			}
			return newArrayPages
		}
		if (3 < currentPage < totalPage - 2) {
			newArrayPages.push({
				key: '1',
				value: 1,
			}, {
				key: 'leftDots',
				value: '...',
			}, {
				key: `${currentPage - 1}`,
				value: currentPage - 1,
			}, {
				key: `${currentPage}`,
				value: currentPage,
			}, {
				key: `${currentPage + 1}`,
				value: currentPage + 1,
			}, {
				key: 'rightDots',
				value: '...',
			}, {
				key: `${totalPage}`,
				value: totalPage,
			})
			return newArrayPages
		}
		return []
	})
	return (
		<div className="divWithPagination">
			<div
				className="pageSwitch" 
				onClick={handleSetCurrentPage(currentPage >= 2 ? currentPage - 1 : 1)}
			>
				&#171;
			</div>
			{createPagination().map((pagination) => (
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