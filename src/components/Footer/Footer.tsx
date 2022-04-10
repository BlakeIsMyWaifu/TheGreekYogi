import { FaEnvelope, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

import { Credits, FooterContainer, SocialIconLink, SocialIcons, SocialLogo, SocialMedia, SocialMediaWrap } from './FooterElements'

const Footer: React.FC = () => {

	const preventDragHandler = (event: React.DragEvent<SVGAElement>): void => event.preventDefault()

	return (
		<FooterContainer>
			<SocialMedia>
				<SocialMediaWrap>
					<SocialLogo to='/'>TheGreekYogi</SocialLogo>
					<Credits>Website by Joel Dohm-Karatjas</Credits>
					<SocialIcons>
						<SocialIconLink href='mailto:stratis@thegreekyogi.info' target='_blank' aria-label='Facebook' rel='noopener noreferrer'>
							<FaEnvelope onDragStart={preventDragHandler} />
						</SocialIconLink>
						<SocialIconLink href='//facebook.com/thegreekyogi' target='_blank' aria-label='Facebook' rel='noopener noreferrer'>
							<FaFacebook onDragStart={preventDragHandler} />
						</SocialIconLink>
						<SocialIconLink href='//twitter.com/greek_yogi' target='_blank' aria-label='Twitter' rel='noopener noreferrer'>
							<FaTwitter onDragStart={preventDragHandler} />
						</SocialIconLink>
						<SocialIconLink href='//instagram.com/thegreekyogi' target='_blank' aria-label='Instagram' rel='noopener noreferrer'>
							<FaInstagram onDragStart={preventDragHandler} />
						</SocialIconLink>
					</SocialIcons>
				</SocialMediaWrap>
			</SocialMedia>
		</FooterContainer>
	)
}

export default Footer