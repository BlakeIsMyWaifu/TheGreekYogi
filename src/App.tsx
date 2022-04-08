import './App.css'

import Footer from 'components/Footer'
import Navbar from 'components/Navbar/Navbar'
import Sidebar from 'components/Sidebar'
import ContactPage from 'pages/Contact'
import Home from 'pages/Home'
import InfoPage from 'pages/Info'
import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
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

				<Routes>
					<Route path='/about' element={<InfoPage data={aboutData} />} />
					<Route path='/blog' element={<InfoPage data={blogData} />} />
					<Route path='/contact' element={<ContactPage />} />
					<Route path='/' element={<Home />} />
				</Routes>

				<Footer />
			</BrowserRouter>
		</Container>
	)
}

export default App