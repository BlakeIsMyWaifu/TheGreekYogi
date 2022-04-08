import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { green, white } from 'utils/colours'

interface NavStyled {
	scrollNav: boolean;
}

export const Nav = styled.nav<NavStyled>`
	background: ${({ scrollNav }) => !scrollNav ? 'rgba(0, 0, 0, 0.8)' : 'transparent'};
	height: 80px;
	margin-top: -80px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1rem;
	position: sticky;
	top: 0;
	z-index: 10;
	@media screen and (max-width: 960px) {
		transform: 0.8s all ease;
	}
`

export const NavbarContainer = styled.div`
	display: flex;
	justify-content: space-between;
	height: 80px;
	z-index: 1;
	width: 100%;
	padding: 0 24px;
	max-width: 1100px;
`

export const NavLogo = styled(Link)`
	color: ${white};
	justify-self: flex-start;
	cursor: pointer;
	font-size: 1.5rem;
	display: flex;
	align-items: center;
	margin-left: 24px;
	font-weight: bold;
	text-decoration: none;
`

export const NavLogoImage = styled.img`
	width: auto;
	height: 50px;
`

export const MobileIcon = styled.div`
	display: none;
	@media screen and (max-width: 768px) {
		display: block;
		position: absolute;
		top: 0;
		right: 0;
		transform: translate(-100%, 60%);
		font-size: 1.8rem;
		cursor: pointer;
		color: ${white};
	}
`

export const NavMenu = styled.ul`
	display: flex;
	align-items: center;
	list-style: none;
	text-align: center;
	margin-right: -22px;
	@media screen and (max-width: 768px) {
		display: none;
	}
`

export const NavLinkLink = styled(NavLink)`
	color: ${green};
	font-weight: bold;
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0 1rem;
	height: 80px;
	cursor: pointer;
	&.current {
		border-bottom: 3px solid ${green};
	}
`