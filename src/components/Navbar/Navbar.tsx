import logo from 'assets/logo/logo_green.png'
import React, { useEffect, useState } from 'react'
import { FaBars } from 'react-icons/fa'

import { MobileIcon, Nav, NavLinkLink, NavLogo, NavLogoImage, NavMenu, NavbarContainer } from './NavbarElements'

interface NavbarComponent {
	navbarToggle: () => void;
}

const Navbar: React.FC<NavbarComponent> = ({ navbarToggle }) => {

	const [hash, setHash] = useState(window.location.hash)
	const [pathname, setPathname] = useState(window.location.pathname)

	const [scrollNav, setScrollNav] = useState(true)
	const changeNav = () => {
		setHash(window.location.hash)
		setPathname(window.location.pathname)
		setScrollNav(window.scrollY + 80 <= window.innerHeight)
	}

	useEffect(() => {
		window.addEventListener('scroll', changeNav)
	}, [hash, pathname])

	const isActive = (section: string) => () => {
		return hash === `#${section}` || pathname === `/${section}`
	}

	return (
		<Nav scrollNav={scrollNav && pathname === '/'}>
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