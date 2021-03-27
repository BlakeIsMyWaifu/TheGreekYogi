import React from 'react'
import useWindowSize from 'utils/Size'

import { MoreContainer, MoreDescription, MoreTitle, MoreWrapper } from './MoreSectionElements'

const MoreSectionElements = ({ id, format, more, show }) => {

	const [width, height] = useWindowSize()

	return (
		<MoreContainer id={`${id}-more`} format={format} show={show} height={height}>
			{
				more.map((element, i) => (
						<MoreWrapper key={i}>
							<MoreTitle>{element.title}</MoreTitle>
							<MoreDescription>{element.description}</MoreDescription>
						</MoreWrapper>
					)
				)
			}
		</MoreContainer>
	)
}

export default MoreSectionElements