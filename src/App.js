import React, { useState } from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import Footer from 'components/Interface/Footer'
import Navbar from 'components/Interface/Navbar'
import Sidebar from 'components/Interface/Sidebar'
import CardSection from 'components/Sections/CardSection/CardSection'
import HeroSection from 'components/Sections/HeroSection'
import InfoSection from 'components/Sections/InfoSection'
import MoreSection from 'components/Sections/InfoSection/MoreSection'
import About from 'sectionData/About'
import Blog from 'sectionData/Blog'
import Classes from 'sectionData/Classes'
import Contact from 'sectionData/Contact'
import LoadAtTop from  'utils/LoadAtTop'

import './App.css'

const App = () => {

	const [sidebarIsOpen, setSidebarIsOpen] = useState(false)
	const navbarToggle = () => setSidebarIsOpen(!sidebarIsOpen)

	const [aboutMore, setAboutMore] = useState(false)
	const aboutToggle = () => setAboutMore(!aboutMore)

	const [blogMore, setBlogMore] = useState(false)
	const blogToggle = () => setBlogMore(!blogMore)

	return (
		<Router>
			<Switch>
				<Route path='/'>
					<LoadAtTop />

					<Sidebar sidebarIsOpen={sidebarIsOpen} navbarToggle={navbarToggle}/>
					<Navbar navbarToggle={navbarToggle}/>

					<HeroSection />

					<CardSection {...Classes}/>

					<InfoSection {...About} toggle={aboutToggle} show={aboutMore}/>
					<MoreSection {...About} show={aboutMore}/>

					<InfoSection {...Blog} toggle={blogToggle} show={blogMore}/>
					<MoreSection {...Blog} show={blogMore}/>

					<InfoSection {...Contact}/>

					<Footer />
				</Route>
			</Switch>
		</Router>
	)
}

export default App