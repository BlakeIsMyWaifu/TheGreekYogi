import React from 'react'

import { CloseIcon, Icon, SidebarContainer, SidebarLink, SidebarMenu, SidebarWrapper } from './SidebarElements'

const Sidebar = ({ sidebarIsOpen, navbarToggle }) => {
	return (
		<SidebarContainer sidebarIsOpen={sidebarIsOpen} onClick={navbarToggle}>
			<Icon>
				<CloseIcon />
			</Icon>
			<SidebarWrapper>
				<SidebarMenu>
					<SidebarLink to='classes' onClick={navbarToggle}>Classes</SidebarLink>
					<SidebarLink to='about' onClick={navbarToggle}>About</SidebarLink>
					<SidebarLink to='blog' onClick={navbarToggle}>Blog</SidebarLink>
					<SidebarLink to='contact' onClick={navbarToggle}>Contact</SidebarLink>
				</SidebarMenu>
			</SidebarWrapper>
		</SidebarContainer>
	)
}

export default Sidebar