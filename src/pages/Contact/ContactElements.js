import styled from 'styled-components'

export const Container = styled.div`
	display: grid;
	height: calc(100vh - 80px);
	grid-template-rows: 6rem auto auto;
	grid-template-columns: auto 1fr;
	grid-template-areas: "title title" "links map" "address map";
	@media screen and (max-width: 768px) {
		grid-template-rows: 6rem 150px auto 4rem;
		grid-template-columns: auto;
		grid-template-areas: "title" "links" "map" "address";
	}
`

export const Title = styled.h1`
	grid-area: title;
	text-align: center;
	padding: 36px;
`

export const LinkContainer = styled.div`
	grid-area: links;
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

export const Address = styled.p`
	grid-area: address;
	text-align: center;
	font-size: 2rem;
	@media screen and (max-width: 768px) {
		font-size: 1rem;
	}
`

export const MapWrapper = styled.div`
	grid-area: map;
	margin: 16px;
`