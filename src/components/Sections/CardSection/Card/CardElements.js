import styled, { css, keyframes } from 'styled-components'

import { black, green, white } from 'utils/colours'

const slideUp = keyframes`
	0% {
		opacity: 0;
		transform: translateY(100px);
	}
	100% {
		opacity: 1;
		transform: translateY(0);
	}
`

const slideDown = keyframes`
	0% {
		opacity: 0;
		transform: translateY(-100px);
	}
	100% {
		opacity: 1;
		transform: translateY(0);
	}
`

const Container = css`
	background: ${({ format }) => format ? black : white};
	border-radius: 10px;
	max-height: 340px;
	padding: 30px;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
	display: flex;
	justify-content: flex-start;
	align-items: center;
	cursor: pointer;
`

export const CardNormalContainer = styled.div`
	${Container};
	flex-direction: column;
	transition: all 0.2s ease-in-out;
	width: 320px;
	&:hover {
		transform: scale(1.05);
		transition: all 0.2s ease-in-out;
	}
	animation: ${slideDown} 0.4s ease-in-out;
`

export const CardMoreContainer = styled.div`
	${Container};
	animation: ${slideUp} 0.4s ease-in-out;
	@media screen and (max-width: 758px) {
		min-height: ${({ height }) => height}px;
		flex-direction: column;
	}
`

export const CardMoreWrapper = styled.div`
	flex-direction: column;
	height: 100%;
	padding: 30px;
`

export const CardIcon = styled.img`
	height: 190px;
	width: 160px;
	margin-bottom: 10px;
`

export const CardH2 = styled.h2`
	font-size: 1.2rem;
	margin-bottom: 10px;
	color: ${({ format }) => format ? white : black};
`

export const CardP = styled.p`
	font-size: 1rem;
	text-align: center;
	margin-bottom: 10px;
	color: ${({ format }) => format ? white : black};
	white-space: pre-wrap;
	@media screen and (max-width: 768px) {
		font-size: 0.8rem;
	}
`

export const CardDetails = styled.p`
	font-size: 0.8rem;
	text-align: center;
	color: ${green};
`