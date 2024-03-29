import { FaTimes } from 'react-icons/fa'
import { Link as LinkR } from 'react-router-dom'
import styled from 'styled-components'
import { black, white } from 'utils/colours'

interface SidebarContainerProps {
	sidebarIsOpen: boolean;
}

export const SidebarContainer = styled.aside<SidebarContainerProps>`
	position: fixed;
	z-index: 999;
	width: 100%;
	height: 100%;
	background: ${black};
	display: grid;
	align-items: center;
	left: 0;
	transition: 0.3s ease-in-out;
	opacity: ${({ sidebarIsOpen }) => sidebarIsOpen ? '100%' : 0};
	top: ${({ sidebarIsOpen }) => sidebarIsOpen ? 0 : '-100%'};
`

export const CloseIcon = styled(FaTimes)`
	color: ${white};
`

export const Icon = styled.div`
	position: absolute;
	top: 1.2rem;
	right: 1.5rem;
	background: transparent;
	font-size: 2rem;
	cursor: pointer;
	outline: none;
`

export const SidebarWrapper = styled.div`
	color: ${white};
`

export const SidebarMenu = styled.ul`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: repeat(6, 80px);
	text-align: center;
	@media screen and (max-width: 480px) {
		grid-template-rows: repeat(6, 60px);
	}
`

export const SidebarLink = styled(LinkR)`
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 1.5rem;
	text-decoration: none;
	list-style: none;
	transition: 0.2s ease-in-out;
	text-decoration: none;
	color: ${white};
	cursor: pointer;
	&:hover {
		color: #01bf71;
		transition: 0.2s ease-in-out;
	}
`