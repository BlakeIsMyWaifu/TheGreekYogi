import styled from 'styled-components'

import { black, white } from 'utils/colours'

export const MoreContainer = styled.div`
	height: ${({ show }) => show ? 'auto' : 0};
	background: ${({ format }) => format ? white : black};
	color: ${({ format }) => format ? black : white};
	overflow: hidden;
`

export const MoreWrapper = styled.div`
	padding: 20px;
`

export const MoreTitle = styled.h1``

export const MoreDescription = styled.p``