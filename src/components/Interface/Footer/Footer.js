import React from 'react'
import { FaEnvelope, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll'

import { Credits, FooterContainer, FooterWrap, SocialIconLink, SocialIcons, SocialLogo, SocialMedia, SocialMediaWrap, WebsiteRights } from './FooterElements'

const Footer = () => {

	const toggleHome = () => scroll.scrollToTop()

	const preventDragHandler = e => e.preventDefault()

	return (
		<FooterContainer>
			<FooterWrap>
				<SocialMedia>
					<SocialMediaWrap>
						<SocialLogo to='/' onClick={toggleHome}>TheGreekYogi</SocialLogo>
						<Credits>Website by Joel Dohm-Karatjas</Credits>
						<SocialIcons>
							<SocialIconLink href='mailto:stratis@thegreekyogi.info' target='_blank' aria-label='Facebook' rel='noopener noreferrer'>
								<FaEnvelope onDragStart={preventDragHandler}/>
							</SocialIconLink>
							<SocialIconLink href='//facebook.com/thegreekyogi' target='_blank' aria-label='Facebook' rel='noopener noreferrer'>
								<FaFacebook onDragStart={preventDragHandler}/>
							</SocialIconLink>
							<SocialIconLink href='//twitter.com/greek_yogi' target='_blank' aria-label='Twitter' rel='noopener noreferrer'>
								<FaTwitter onDragStart={preventDragHandler}/>
							</SocialIconLink>
							<SocialIconLink href='//instagram.com/thegreekyogi' target='_blank' aria-label='Instagram' rel='noopener noreferrer'>
								<FaInstagram onDragStart={preventDragHandler}/>
							</SocialIconLink>
						</SocialIcons>
					</SocialMediaWrap>
				</SocialMedia>
			</FooterWrap>
		</FooterContainer>
	)
}

export default Footer