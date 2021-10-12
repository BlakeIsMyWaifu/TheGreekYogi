import React, { createRef, useEffect, useRef } from 'react'
import { useLocation } from 'react-router'
import about from 'sectionData/About'
import blog from 'sectionData/Blog'
import Classes from 'sectionData/Classes'
import contact from 'sectionData/Contact'
import useWindowSize from 'utils/Size'

import CardSection from './CardSection/CardSection'
import HeroSection from './HeroSection/HeroSection'
import InfoSection from './InfoSection/InfoSection'

const Home: React.FC = () => {

	const location = useLocation()
	const { height } = useWindowSize()

	const sectionRefs = useRef<any[]>([])
	sectionRefs.current = [0, 0, 0, 0, 0].map((_ref, index) => sectionRefs.current[index] = createRef())

	useEffect(() => {
		if (location.hash) {
			let element = document.getElementById(location.hash.slice(1));
			if (element) {
				window.scrollTo({ top: element.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' })
			}
		} else {
			window.scrollTo({ top: 1, left: 0, behavior: 'auto' })
			window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
		}

		const observer = new IntersectionObserver(entires => {
			entires.forEach(entry => {
				if (entry.isIntersecting) {
					window.history.replaceState(null, '', entry.target.id === 'hero' ? '/' : `/#${entry.target.id}`)
				}
			})
		}, { threshold: 0.75 })

		sectionRefs.current.forEach(section => {
			observer.observe(section.current)
		})
	}, [location, height])

	return (
		<>
			<HeroSection childRef={sectionRefs.current[0]} />
			<CardSection childRef={sectionRefs.current[1]} {...Classes} />
			<InfoSection childRef={sectionRefs.current[2]} {...about} />
			<InfoSection childRef={sectionRefs.current[3]} {...blog} />
			<InfoSection childRef={sectionRefs.current[4]} {...contact} />
		</>
	)
}

export default Home
