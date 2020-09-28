export default ({ currentPage, totalPage }) => {
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
}