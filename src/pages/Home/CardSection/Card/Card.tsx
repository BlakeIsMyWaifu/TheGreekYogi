import React from 'react'
import useWindowSize from 'utils/Size'

import { CardDetails, CardH2, CardIcon, CardMoreContainer, CardMoreWrapper, CardNormalContainer, CardP } from './CardElements'

interface CardComponent {
	id: string;
	text: {
		title: string;
		description: string;
	}
	image: {
		img: string;
		alt: string;
	}
	format: number;
	more: string[];
	openCard: string | null;
	toggleCard: (card: string) => void;
}

const Card: React.FC<CardComponent> = ({ id, text, image, format, more, openCard, toggleCard }) => {

	const { width, height } = useWindowSize()

	return id === openCard ? (
		<CardMoreContainer id={id} format={format} onClick={() => toggleCard(id)} openCard={openCard} width={width} height={height}>
			<CardMoreWrapper>
				<CardIcon src={image.img} alt={image.alt} />
				<CardH2 format={format}>{text.title}</CardH2>
				<CardDetails>({width >= 768 ? 'click' : 'tap'} for less details)</CardDetails>
			</CardMoreWrapper>
			<CardP format={format}>{more.join('\n\n')}</CardP>
		</CardMoreContainer>
	) : (!openCard) ? (
		<CardNormalContainer id={id} format={format} onClick={() => toggleCard(id)} openCard={openCard} width={width}>
			<CardIcon src={image.img} alt={image.alt} />
			<CardH2 format={format}>{text.title}</CardH2>
			<CardP format={format}>{text.description}</CardP>
			<CardDetails>({width >= 768 ? 'click' : 'tap'} for more details)</CardDetails>
		</CardNormalContainer>
	) : (
		<></>
	)
}

export default Card
