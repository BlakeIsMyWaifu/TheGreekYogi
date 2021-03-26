import React, { useState } from 'react'

import Video from 'assets/BeachVideo.mp4'
import Button from 'components/Button'
import useWindowSize from 'utils/Size'

import { ArrowForward, ArrowRight, HeroBg, HeroBtnWrapper, HeroContainer, HeroContent, HeroH1, HeroP, VideoBg } from './HeroSectionElements'

const HeroSection = () => {

	const [hover, setHover] = useState(false)
	const onHover = () => setHover(!hover)

	const [width, height] = useWindowSize()

	return (
		<HeroContainer id='hero' height={height}>
			<HeroBg>
				<VideoBg  autoPlay loop muted src={Video} type='video/mp4'/>
			</HeroBg>
			<HeroContent>
				<HeroH1>The Greek Yogi</HeroH1>
				<HeroP>Kundalini Yoga Class</HeroP>
				<HeroBtnWrapper>
					<Button to='classes' onMouseEnter={onHover} onMouseLeave={onHover}
						smooth={true} duration={500} spy={true} exact='true' offset={-80}>
						View Classes {hover ? <ArrowForward /> : <ArrowRight />}
					</Button>
				</HeroBtnWrapper>
			</HeroContent>
		</HeroContainer>
	)
}

export default HeroSection