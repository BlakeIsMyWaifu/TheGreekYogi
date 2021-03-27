import React, { useState } from 'react'

import useWindowSize from 'utils/Size'

import Card from './Card'
import { CardsContainer, CardsH1, CardsWrapper } from './CardSectionElements'

const CardSection = ({ id, format, data }) => {

	const [width, height] = useWindowSize()

	const [openCard, setOpenCard] = useState(null)
	const toggleCard = card => setOpenCard(openCard ? null : card)

	return (
		<CardsContainer id={id} format={format} height={height}>
			<CardsH1 format={format}>Classes</CardsH1>
			<CardsWrapper>
				{
					Object.keys(data).map(i => <Card {...data[i]} key={i} format={format} openCard={openCard} toggleCard={toggleCard}/>)
				}
			</CardsWrapper>
		</CardsContainer>
	)
}

export default CardSection