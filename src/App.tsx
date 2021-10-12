import './App.css'

import Footer from 'components/Footer'
import Navbar from 'components/Navbar/Navbar'
import Sidebar from 'components/Sidebar'
import ContactPage from 'pages/Contact'
import Home from 'pages/Home'
import InfoPage from 'pages/Info'
import React, { useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import aboutData from 'sectionData/About'
import blogData from 'sectionData/Blog'
import styled from 'styled-components'

const Container = styled.div`
	display: flex;
	flex-direction: column;
`

const App: React.FC = () => {

	const [sidebarIsOpen, setSidebarIsOpen] = useState(false)
	const navbarToggle = () => setSidebarIsOpen(!sidebarIsOpen)

	return (
		<Container>
			<BrowserRouter>
				<Sidebar sidebarIsOpen={sidebarIsOpen} navbarToggle={navbarToggle} />
				<Navbar navbarToggle={navbarToggle} />

				<Switch>
					<Route path='/about' render={() => <InfoPage data={aboutData} />} />
					<Route path='/blog' render={() => <InfoPage data={blogData} />} />
					<Route path='/contact' render={() => <ContactPage />} />
					<Route path='/' render={() => <Home />} />
				</Switch>

				<Footer />
			</BrowserRouter>
		</Container>
	)
}

export default App