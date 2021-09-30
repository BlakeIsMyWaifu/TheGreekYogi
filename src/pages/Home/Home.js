import React, { createRef, useEffect, useRef } from 'react'
import { useLocation } from 'react-router'
import About from 'sectionData/About'
import Blog from 'sectionData/Blog'
import Classes from 'sectionData/Classes'
import Contact from 'sectionData/Contact'
import useWindowSize from 'utils/Size'

import CardSection from './CardSection'
import HeroSection from './HeroSection'
import InfoSection from './InfoSection'

const Home = ({ setIsHomePage }) => {

	const location = useLocation()
	const [height, width] = useWindowSize()

	const sectionRefs = useRef([])
	sectionRefs.current = [0, 0, 0, 0, 0].map((ref, index) => sectionRefs.current[index] = createRef())

	const observer = new IntersectionObserver((entires, observer) => {
		entires.forEach(entry => {
			if (entry.isIntersecting) {
				window.history.replaceState(null, null, entry.target.id === 'hero' ? '/' : `/#${entry.target.id}`)
				setIsHomePage(false)
				setIsHomePage(true)
			}
		})
	}, { threshold: 0.75 })

	useEffect(() => {
		setIsHomePage(true)

		if (location.hash) {
			let element = document.getElementById(location.hash.slice(1));
			if (element) {
				window.scrollTo({ top: element.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' })
			}
		} else {
			window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
		}

		sectionRefs.current.forEach(section => {
			observer.observe(section.current)
		})
	}, [location, height])

	return (
		<>
			<HeroSection childRef={sectionRefs.current[0]} />
			<CardSection childRef={sectionRefs.current[1]} {...Classes} />
			<InfoSection childRef={sectionRefs.current[2]} {...About} />
			<InfoSection childRef={sectionRefs.current[3]} {...Blog} />
			<InfoSection childRef={sectionRefs.current[4]} {...Contact} />
		</>
	)
}

export default Home
