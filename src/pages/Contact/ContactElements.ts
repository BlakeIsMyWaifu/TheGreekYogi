import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	min-height: calc(100vh - 80px);
`

export const Title = styled.h1`
	text-align: center;
	padding: 36px;
`

export const LinkContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 12px;
	padding-left: 16px;
	@media screen and (max-width: 768px) {
		gap: 6px;
	}
`

export const Link = styled.a`
	text-decoration: none;
	color: black;
	font-size: 2rem;
	@media screen and (max-width: 768px) {
		font-size: 1rem;
	}
`