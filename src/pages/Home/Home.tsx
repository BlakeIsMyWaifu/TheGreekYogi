import React, { createRef, useEffect, useRef } from 'react'
import { useLocation } from 'react-router'
import about from 'sectionData/About'
import blog from 'sectionData/Blog'
import Classes from 'sectionData/Classes'
import contact from 'sectionData/Contact'
import useWindowSize from 'utils/Size'

import CardSection from './CardSection'
import HeroSection from './HeroSection'
import InfoSection from './InfoSection'

const Home: React.FC = () => {

	const location = useLocation()
	const { height } = useWindowSize()

	const sectionRefs = useRef(Array.from({ length: 5 }, _ref => createRef<HTMLDivElement>()))

	useEffect(() => {
		if (location.hash) {
			const element = document.getElementById(location.hash.slice(1))
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
			if (!section.current) return
			observer.observe(section.current)
		})
	}, [location, height])

	return (
		<>
			<HeroSection childRef={sectionRefs.current[0] as React.RefObject<HTMLDivElement>} />
			<CardSection childRef={sectionRefs.current[1] as React.RefObject<HTMLDivElement>} {...Classes} />
			<InfoSection childRef={sectionRefs.current[2] as React.RefObject<HTMLDivElement>} {...about} />
			<InfoSection childRef={sectionRefs.current[3] as React.RefObject<HTMLDivElement>} {...blog} />
			<InfoSection childRef={sectionRefs.current[4] as React.RefObject<HTMLDivElement>} {...contact} />
		</>
	)
}

export default Home
