import React from 'react'
import styled from 'styled-components'
import LoadAtTop from 'utils/LoadAtTop'

const UnderNavbar = styled.div`
	height: 80px;
`

const Page: React.FC = ({ children }) => {
	return (
		<>
			<UnderNavbar />
			<LoadAtTop />
			{children}
		</>
	)
}

export default Page
