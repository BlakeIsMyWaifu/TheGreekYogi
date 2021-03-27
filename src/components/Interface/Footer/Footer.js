import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll'

import { FooterContainer, FooterWrap, SocialIconLink, SocialIcons, SocialLogo, SocialMedia, SocialMediaWrap, WebsiteRights } from './FooterElements'

const Footer = () => {

	const toggleHome = () => scroll.scrollToTop()

	const preventDragHandler = e => e.preventDefault()

	return (
		<FooterContainer>
			<FooterWrap>
				<SocialMedia>
					<SocialMediaWrap>
						<SocialLogo to='/TheGreekYogi/' onClick={toggleHome}>TheGreekYogi</SocialLogo>
						<WebsiteRights>TheGreekYogi © {new Date().getFullYear()}, All rights reserved</WebsiteRights>
						<SocialIcons>
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