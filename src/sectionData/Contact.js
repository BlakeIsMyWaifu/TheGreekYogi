import React from 'react'
import { FaEnvelope, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import styled from 'styled-components'

import contactSvg from 'assets/contact.svg'
import { black, white } from 'utils/colours'

const format = 1;

const Link = styled.a`
	text-decoration: none;
	color: ${format => format ? black : white};
`

const description = () => {
	return (
		<>
			<Link href='mailto:stratiskaratjas@yahoo.co.uk' target='_blank' rel='noopener noreferrer'><FaEnvelope /> stratiskaratjas@yahoo.co.uk </Link> <br></br>
			<Link href='//facebook.com/thegreekyogi' target='_blank' rel='noopener noreferrer'><FaFacebook /> facebook.com/thegreekyogi </Link> <br></br>
			<Link href='//twitter.com/greek_yogi' target='_blank' rel='noopener noreferrer'><FaTwitter /> twitter.com/greek_yogi </Link> <br></br>
			<Link href='//instagram.com/thegreekyogi' target='_blank' rel='noopener noreferrer'><FaInstagram /> instagram.com/thegreekyogi </Link>
		</>
	)
}

export default {
	id: 'contact',
	format,
	text: {
		category: 'Contact',
		title: 'Where to Contact',
		description
	},
	image: {
		imgStart: false,
		img: contactSvg,
		alt: 'one'
	},
	button: {
		text: 'View Classes',
		link: 'classes'
	}
}