import { Link as LinkR } from 'react-router-dom'
import styled from 'styled-components'

import { darkBlue, white } from 'utils/colours'

export const FooterContainer = styled.footer`
	background-color: ${darkBlue};
`

export const FooterWrap = styled.div`
	padding: 16px 12px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	max-width: 1100px;
	margin: 0 auto;
`

export const FooterLinksWrapper = styled.div`
	display: flex;
	@media screen and (max-width: 820px) {
		flex-direction: column;
	}
`

export const SocialMedia = styled.section`
	max-width: 1000px;
	width: 100%;
`

export const SocialMediaWrap = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	max-width: 1100px;
	margin: 40px auto 0 auto;
	@media screen and (max-width: 820px) {
		flex-direction: column;
	}
`

export const SocialLogo = styled(LinkR)`
	color: ${white};
	justify-self: start;
	cursor: pointer;
	text-decoration: none;
	font-size: 1.5rem;
	display: flex;
	align-items: center;
	margin-bottom: 16px;
	font-weight: bold;
`

export const Credits = styled.small`
	color: ${white};
	margin-bottom: 16px;
`

export const SocialIcons = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 240px;
`

export const SocialIconLink = styled.a`
	color: ${white};
	font-size: 24px;
`