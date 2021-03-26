import react from 'react'

import Button from 'components/Button'
import useWindowSize from 'utils/Size'

import { BtnWrap, Category, Column1, Column2, Description, Heading, Img, ImgWrap, InfoContainer, InfoRow, InfoWrapper, MoreContainer, MoreWrapper, TextWrapper } from './InfoSectionElements'

const InfoSection = ({ id, format, text, image, button, toggle, show }) => {

	const [width, height] = useWindowSize()

	const ButtonProps = {
		to: button?.extend && show ? id : button.link,
		format: format,
		smooth: true,
		duration: 500,
		spy: true,
		exact: 'true',
		offset: button?.extend && !show ? -80 - (height / 3) : -80,
		onClick: button?.extend ? toggle : null
	}

	return (
		<InfoContainer format={format} id={id} height={height}>
			<InfoWrapper height={height}>
				<InfoRow imgStart={image.imgStart}>
					<Column1>
						<TextWrapper>
							<Category>{text.category}</Category>
							<Heading format={format}>{text.title}</Heading>
							<Description format={format}>{text.description}</Description>
							<BtnWrap>
								{ button ?
									<Button {...ButtonProps}>{button?.extend ? (show ? 'Hide ' : 'Reveal ') : ''}{button.text}</Button>
									: <></>
								}
							</BtnWrap>
						</TextWrapper>
					</Column1>
					<Column2>
						<ImgWrap>
							<Img src={image.img} alt={image.alt}/>
						</ImgWrap>
					</Column2>
				</InfoRow>
			</InfoWrapper>
		</InfoContainer>
	)
}

export default InfoSection