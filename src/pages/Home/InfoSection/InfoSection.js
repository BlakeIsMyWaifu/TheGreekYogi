import React from 'react'
import useWindowSize from 'utils/Size'

import { BtnWrap, Button, Category, Column1, Column2, Description, Heading, Img, ImgWrap, InfoContainer, InfoRow, InfoWrapper, TextWrapper } from './InfoSectionElements'

const InfoSection = ({ id, format, text, image, childRef }) => {

	const [width, height] = useWindowSize()

	return (
		<InfoContainer format={format} id={id} height={height} ref={childRef}>
			<InfoWrapper height={height}>
				<InfoRow imgStart={image.imgStart}>
					<Column1>
						<TextWrapper>
							<Category>{text.category}</Category>
							<Heading format={format}>{text.title}</Heading>
							<Description format={format}>{typeof text.description === 'string' ? text.description : text.description()}</Description>
							<BtnWrap to={id}>
								<Button format={format}>View {id} page</Button>
							</BtnWrap>
						</TextWrapper>
					</Column1>
					<Column2>
						<ImgWrap>
							<Img src={image.img} alt={image.alt} />
						</ImgWrap>
					</Column2>
				</InfoRow>
			</InfoWrapper>
		</InfoContainer>
	)
}

export default InfoSection