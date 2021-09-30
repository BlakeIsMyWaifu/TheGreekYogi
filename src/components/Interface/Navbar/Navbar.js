import logo from 'assets/logo/logo_green.png'
import React, { useEffect, useState } from 'react'
import { FaBars } from 'react-icons/fa'

import { MobileIcon, Nav, NavItem, NavLinkLink, NavLinkScroll, NavLogo, NavLogoImage, NavMenu, NavbarContainer } from './NavbarElements'

const Navbar = ({ navbarToggle, isHomePage }) => {

	const [scrollNav, setScrollNav] = useState(false)
	const changeNav = () => setScrollNav(window.scrollY + 80 >= window.innerHeight)

	useEffect(() => {
		window.addEventListener('scroll', changeNav)
	}, [])

	const isActive = (section) => () => {
		let { hash, pathname } = location
		return hash === `#${section}` || pathname === `/${section}`
	}

	return (
		<Nav scrollNav={scrollNav} isHomePage={isHomePage}>
			<NavbarContainer>
				<NavLogo to='/'>
					<NavLogoImage src={logo} alt='logo'></NavLogoImage>
				</NavLogo>
				<MobileIcon onClick={navbarToggle}>
					<FaBars />
				</MobileIcon>
				<NavMenu>
					<NavLinkLink to='/#classes' isActive={isActive('classes')}>Classes</NavLinkLink>
					<NavLinkLink to='/#about' isActive={isActive('about')}>About</NavLinkLink>
					<NavLinkLink to='/#blog' isActive={isActive('blog')}>Blog</NavLinkLink>
					<NavLinkLink to='/#contact' isActive={isActive('contact')}>Contact</NavLinkLink>
				</NavMenu>
			</NavbarContainer>
		</Nav >
	)
}

export default Navbar