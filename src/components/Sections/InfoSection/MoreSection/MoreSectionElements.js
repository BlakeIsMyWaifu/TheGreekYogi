import styled from 'styled-components'

import { black, white } from 'utils/colours'

export const MoreContainer = styled.div`
	height: ${({ show }) => show ? 'auto' : 0};
	min-height: ${({ height, show }) => show ? height - 80 : 0}px;
	background: ${({ format }) => format ? white : black};
	color: ${({ format }) => format ? black : white};
	overflow: hidden;
	padding-bottom: ${({ show }) => show ? 120 : 0}px;
`

export const MoreWrapper = styled.div`
	padding: 20px;
`

export const MoreTitle = styled.p`
	padding-left: 24px;
	font-size: 20px;
`

export const MoreDescription = styled.p``