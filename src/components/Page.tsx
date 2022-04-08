import React, { ReactNode } from 'react'
import styled from 'styled-components'
import LoadAtTop from 'utils/LoadAtTop'

const UnderNavbar = styled.div`
	height: 80px;
`

interface PageProps {
	children: ReactNode;
}

const Page: React.FC<PageProps> = ({ children }) => {
	return (
		<>
			<UnderNavbar />
			<LoadAtTop />
			{children}
		</>
	)
}

export default Page
