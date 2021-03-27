import React, { useEffect, useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll'

import logo from 'assets/logo_white.png'

import { MobileIcon, Nav, NavbarContainer, NavItem, NavLinks, NavLogo, NavLogoImage, NavMenu } from './NavbarElements'

const Navbar = ({ navbarToggle }) => {

	const [scrollNav, setScrollNav] = useState(false)
	const changeNav = () => setScrollNav(window.scrollY + 80 >= window.innerHeight)

	useEffect(() => {
		window.addEventListener('scroll', changeNav)
	}, [])

	const toggleHome = () => scroll.scrollToTop()

	return (
		<Nav scrollNav={scrollNav}>
			<NavbarContainer>
				<NavLogo to='/TheGreekYogi/' onClick={toggleHome}>
					<NavLogoImage src={logo} alt='logo'></NavLogoImage>
				</NavLogo>
				<MobileIcon onClick={navbarToggle}>
					<FaBars />
				</MobileIcon>
				<NavMenu>
					<NavItem>
						<NavLinks to='classes' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Classes</NavLinks>
					</NavItem>
					<NavItem>
						<NavLinks to='about' smooth={true} duration={500} spy={true} exact='true' offset={-80}>About</NavLinks>
					</NavItem>
					<NavItem>
						<NavLinks to='blog' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Blog</NavLinks>
					</NavItem>
					<NavItem>
						<NavLinks to='contact' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Contact</NavLinks>
					</NavItem>
				</NavMenu>
			</NavbarContainer>
		</Nav>
	)
}

export default Navbar