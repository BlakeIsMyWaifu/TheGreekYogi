import styled from 'styled-components'
import { black, white } from 'utils/colours'

export const CardsContainer = styled.div`
	height: auto;
	min-height: ${({ height }) => `calc(${height}px - 80px)`};
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: ${({ format }) => format ? white : black};
	@media screen and (max-width: 768px) {
		justify-content: flex-start;
		padding-top: 100px;
		padding-bottom: 80px;
	}
`

export const CardsH1 = styled.h1`
	font-size: 3rem;
	color: ${({ format }) => format ? black : white};
	margin-bottom: 64px;
	@media screen and (max-width: 480px) {
		font-size: 2rem;
	}
`

export const CardsWrapper = styled.div`
	margin: 0 auto;
	display: grid;
	grid-auto-flow: column;
	align-items: center;
	grid-gap: 16px;
	padding: 0 50px;
	@media screen and (max-width: 768px) {
		grid-auto-flow: row;
		padding: 0 20px;
	}
`