import React from 'react'

import './styles.css'

const PageHeader = ({
	titleName,
}) => {
	return (
		<div className="pageHeader">
			<p>{titleName}</p>
		</div>
	)
}

export default PageHeader