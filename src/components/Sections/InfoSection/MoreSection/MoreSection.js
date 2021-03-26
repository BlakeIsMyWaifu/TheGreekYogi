import React from 'react'

import { MoreContainer, MoreDescription, MoreTitle, MoreWrapper } from './MoreSectionElements'

const MoreSectionElements = ({ id, format, text, image, button, more, show }) => {
	return (
		<MoreContainer id={`${id}-more`} format={format} show={show}>
			{
				more.map((element, i) => {
					return (
						<MoreWrapper key={i}>
							<MoreTitle>{element.title}</MoreTitle>
							<MoreDescription>{element.description}</MoreDescription>
						</MoreWrapper>
					)
				})
			}
		</MoreContainer>
	)
}

export default MoreSectionElements