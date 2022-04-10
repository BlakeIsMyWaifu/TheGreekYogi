import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { black, green, white } from 'utils/colours'

interface InfoContainerProps {
	format: number;
	height: number;
}

export const InfoContainer = styled.div<InfoContainerProps>`
	color: ${white};
	background: ${({ format }) => format ? white : black};
	height: auto;
	min-height: ${({ height }) => `calc(${height}px - 80px)`};
	@media screen and (max-width: 768px) {
		padding: 100px 0;
	}
`

interface InfoWrapperProps {
	height: number;
}

export const InfoWrapper = styled.div<InfoWrapperProps>`
	display: grid;
	z-index: 1;
	height: auto;
	min-height: ${({ height }) => `calc(${height}px - 80px)`};
	width: 100%;
	max-width: 1100px;
	margin-right: auto;
	margin-left: auto;
	padding: 0 24px;
	justify-content: center;
`

interface InfoRowProps {
	imgStart: boolean;
}

export const InfoRow = styled.div<InfoRowProps>`
	display: grid;
	grid-auto-columns: minmax(auto, 1fr);
	align-items: center;
	grid-template-areas: ${({ imgStart }) => imgStart ? '\'col2 col1\'' : '\'col1 col2\''};
	@media screen and (max-width: 768px) {
		grid-template-areas: ${({ imgStart }) => imgStart ? '\'col1\' \'col2\'' : '\'col1 col1\' \'col2 col2\''};
	}
`

export const Column1 = styled.div`
	margin-bottom: 15px;
	padding: 0 15px;
	grid-area: col1;
`

export const Column2 = styled.div`
	margin-bottom: 15px;
	padding: 0 15px;
	grid-area: col2;
`

export const TextWrapper = styled.div`
	max-width: 540px;
	padding-top: 0;
	padding-bottom: 60px;
`

export const Category = styled.p`
	color: ${green};
	font-size: 16px;
	line-height: 16px;
	font-weight: 700;
	letter-spacing: 1.4px;
	text-transform: uppercase;
	margin-bottom: 16px;
`

interface HeadingProps {
	format: number;
}

export const Heading = styled.h1<HeadingProps>`
	margin-bottom: 24px;
	font-size: 48px;
	line-height: 1.1;
	font-weight: 600;
	color: ${({ format }) => format ? black : white};
	@media screen and (max-width: 480px) {
		font-size: 32px;
	}
`

interface DescriptionProps {
	format: number;
}

export const Description = styled.p<DescriptionProps>`
	max-width: 440px;
	margin-bottom: 35px;
	font-size: 18px;
	line-height: 24px;
	color: ${({ format }) => format ? black : white};
	white-space: pre-wrap;
`

export const ImgWrap = styled.div`
	max-width: 555px;
	height: 100%;
`

export const Img = styled.img`
	width: 100%;
	margin: 0 0 10px 0;
	padding-right: 0;
	pointer-events: none;
`

export const BtnWrap = styled(Link)`
	display: flex;
	justify-content: flex-start;
	text-decoration: none;
`

interface ButtonProps {
	size?: number;
	format: number;
}

export const Button = styled.button<ButtonProps>`
	border-radius: 50px;
	white-space: nowrap;
	background: ${green};
	padding: ${({ size }) => size ? '14px 48px' : '12px 30px'};
	color: ${black};
	font-size: ${({ size }) => size ? '20px' : '16px'};
	outline: none;
	border: none;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: all 0.2s ease-in-out;
	&:hover {
		transition: all 0.2s ease-in-out;
		background: ${({ format }) => format ? black : white};
		color: ${({ format }) => format ? white : black};
	}
`