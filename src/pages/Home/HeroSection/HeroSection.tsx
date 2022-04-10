import Video from 'assets/BeachVideo.mp4'
import Button from 'components/Button'
import { useState } from 'react'
import useWindowSize from 'utils/Size'

import { ArrowForward, ArrowRight, HeroBg, HeroBtnWrapper, HeroContainer, HeroContent, HeroH1, HeroP, VideoBg } from './HeroSectionElements'

interface HeroSectionComponent {
	childRef: React.RefObject<HTMLDivElement>;
}

const HeroSection: React.FC<HeroSectionComponent> = ({ childRef }) => {

	const [hover, setHover] = useState(false)
	const onHover = (): void => setHover(!hover)

	const { height } = useWindowSize()

	return (
		<HeroContainer id='hero' height={height} ref={childRef}>
			<HeroBg>
				<VideoBg autoPlay loop muted src={Video} />
			</HeroBg>
			<HeroContent>
				<HeroH1>The Greek Yogi</HeroH1>
				<HeroP>Kundalini & Hatha Yoga Classes</HeroP>
				<HeroBtnWrapper>
					<Button to='/#classes' onMouseEnter={onHover} onMouseLeave={onHover}>
						View Classes {hover ? <ArrowForward /> : <ArrowRight />}
					</Button>
				</HeroBtnWrapper>
			</HeroContent>
		</HeroContainer >
	)
}

export default HeroSection