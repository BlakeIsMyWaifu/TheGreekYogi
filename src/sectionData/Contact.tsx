import contactSvg from 'assets/svg/contact.svg'
import { FaEnvelope, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import styled from 'styled-components'
import { black, white } from 'utils/colours'

const format = 1

const Link = styled.a`
	text-decoration: none;
	color: ${format => format ? black : white};
`

const description: React.FC = () => {
	return (
		<>
			<Link href='mailto:stratis@thegreekyogi.info' target='_blank' rel='noopener noreferrer'><FaEnvelope /> stratis@thegreekyogi.info </Link> <br />
			<Link href='//facebook.com/thegreekyogi' target='_blank' rel='noopener noreferrer'><FaFacebook /> facebook.com/thegreekyogi </Link> <br />
			<Link href='//twitter.com/greek_yogi' target='_blank' rel='noopener noreferrer'><FaTwitter /> twitter.com/greek_yogi </Link> <br />
			<Link href='//instagram.com/thegreekyogi' target='_blank' rel='noopener noreferrer'><FaInstagram /> instagram.com/thegreekyogi </Link>
		</>
	)
}

const contact = {
	id: 'contact',
	format,
	text: {
		category: 'Contact',
		title: 'How to Contact',
		description
	},
	image: {
		imgStart: false,
		img: contactSvg,
		alt: 'one'
	}
}

export default contact