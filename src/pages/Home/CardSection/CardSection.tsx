import React, { useState } from 'react'
import useWindowSize from 'utils/Size'

import Card from './Card/Card'
import { CardsContainer, CardsH1, CardsWrapper } from './CardSectionElements'

interface CardSectionComponent {
	id: string;
	format: number;
	data: any;
	childRef: any;
}

const CardSection: React.FC<CardSectionComponent> = ({ id, format, data, childRef }) => {

	const { height } = useWindowSize()

	const [openCard, setOpenCard] = useState<string | null>(null)
	const toggleCard = (card: string) => setOpenCard(openCard ? null : card)

	return (
		<CardsContainer id={id} format={format} height={height} ref={childRef}>
			<CardsH1 format={format}>Classes</CardsH1>
			<CardsWrapper>
				{
					Object.keys(data).map(i => <Card {...data[i]} key={i} format={format} openCard={openCard} toggleCard={toggleCard} />)
				}
			</CardsWrapper>
		</CardsContainer>
	)
}

export default CardSection