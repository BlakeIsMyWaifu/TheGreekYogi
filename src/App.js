import './App.css'

import Footer from 'components/Interface/Footer'
import Navbar from 'components/Interface/Navbar'
import Sidebar from 'components/Interface/Sidebar'
import ContactPage from 'pages/Contact'
import Home from 'pages/Home'
import InfoPage from 'pages/Info'
import React, { useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import aboutData from 'sectionData/About'
import blogData from 'sectionData/Blog'
import styled from 'styled-components'
import LoadAtTop from 'utils/LoadAtTop'

const Container = styled.div`
	display: flex;
	flex-direction: column;
`

const UnderNavbar = styled.div`
	height: 80px;
`

const App = () => {

	const [sidebarIsOpen, setSidebarIsOpen] = useState(false)
	const navbarToggle = () => setSidebarIsOpen(!sidebarIsOpen)

	const [isHomePage, setIsHomePage] = useState(true)

	return (
		<Container>
			<BrowserRouter>
				<LoadAtTop />
				<Sidebar sidebarIsOpen={sidebarIsOpen} navbarToggle={navbarToggle} />
				<Navbar navbarToggle={navbarToggle} isHomePage={isHomePage} />
				{!isHomePage && <UnderNavbar />}

				<Switch>
					<Route path='/about' render={() => <InfoPage setIsHomePage={setIsHomePage} data={aboutData} />} />
					<Route path='/blog' render={() => <InfoPage setIsHomePage={setIsHomePage} data={blogData} />} />
					<Route path='/contact' render={() => <ContactPage setIsHomePage={setIsHomePage} />} />
					<Route path='/' render={() => <Home setIsHomePage={setIsHomePage} />} />
				</Switch>

				<Footer />
			</BrowserRouter>
		</Container>
	)
}

export default App