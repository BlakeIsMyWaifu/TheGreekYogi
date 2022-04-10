import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { black, green, white } from 'utils/colours'

interface ButtonProps {
	size?: number;
	format?: number;
}

export const Button = styled(Link) <ButtonProps>`
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
	text-decoration: none;
	&:hover {
		transition: all 0.2s ease-in-out;
		background: ${({ format }) => format ? black : white};
		color: ${({ format }) => format ? white : black};
	}
`

export default Button