import React, { useEffect } from 'react'

import { Container, SectionDescription, SectionTitle, SectionWrapper, Title } from './InfoElements'

const InfoPage = ({ data, setIsHomePage }) => {

	useEffect(() => {
		setIsHomePage(false)
	}, [])

	return (
		<Container id={data.id}>
			<Title>{data.text.title}</Title>
			{
				data.more.map(({ title, description }, i) => {
					return <SectionWrapper key={`title-${i}`}>
						<SectionTitle>{title}</SectionTitle>
						<SectionDescription>{description}</SectionDescription>
					</SectionWrapper>
				})
			}
		</Container>
	)
}

export default InfoPage
