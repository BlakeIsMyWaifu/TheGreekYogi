import 'leaflet/dist/leaflet.css'

import Page from 'components/Page'
import { FaEnvelope, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

import { Container, Link, LinkContainer, Title } from './ContactElements'

const Contact: React.FC = () => {
	return (
		<Page>
			<Container>
				<Title>Contact</Title>

				<LinkContainer>
					<Link href='mailto:stratis@thegreekyogi.info' target='_blank' rel='noopener noreferrer'><FaEnvelope /> stratis@thegreekyogi.info </Link>
					<Link href='//facebook.com/thegreekyogi' target='_blank' rel='noopener noreferrer'><FaFacebook /> facebook.com/thegreekyogi </Link>
					<Link href='//twitter.com/greek_yogi' target='_blank' rel='noopener noreferrer'><FaTwitter /> twitter.com/greek_yogi </Link>
					<Link href='//instagram.com/thegreekyogi' target='_blank' rel='noopener noreferrer'><FaInstagram /> instagram.com/thegreekyogi </Link>
				</LinkContainer>
			</Container>
		</Page>
	)
}

export default Contact
