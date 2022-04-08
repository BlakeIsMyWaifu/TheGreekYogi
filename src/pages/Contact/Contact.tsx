import 'leaflet/dist/leaflet.css'

import Page from 'components/Page'
import L from 'leaflet'
import icon from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'
import { FaEnvelope, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

import { Address, Container, Link, LinkContainer, MapWrapper, Title } from './ContactElements'

const pos = [51.4194274, -0.083174] as L.LatLngTuple
const defaultIcon = L.icon({
	iconUrl: icon,
	shadowUrl: iconShadow
})
L.Marker.prototype.options.icon = defaultIcon

const Contact: React.FC = () => {
	return (
		<Page>
			<Container>
				<Title>Contact</Title>

				<LinkContainer>
					<Link href='mailto:stratis@thegreekyogi.info' target='_blank' rel='noopener noreferrer'><FaEnvelope /> stratis@thegreekyogi.info </Link>
					<Link href='//facebook.com/thegreekyogi' target='_blank' rel='noopener noreferrer'><FaFacebook /> facebook.com/thegreekyogi </Link>
					<Link href='//twitter.com/greek_yogi' target='_blank' rel='noopener noreferrer'><FaTwitter /> twitter.com/greek_yogi </Link>
					<Link href='//instagram.com/thegreekyogi' target='_blank' rel='noopener noreferrer'><FaInstagram /> instagram.com/thegreekyogi </Link>
				</LinkContainer>

				<Address>
					10 Westow Street, <br />
					London SE19 3AH
				</Address>

				<MapWrapper>
					<MapContainer center={pos} zoom={20} scrollWheelZoom={true} style={{
						height: '100%'
					}}>
						<TileLayer
							url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
							attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
						/>
						<Marker position={pos}>
							<Popup>10 Westow Street, London SE19 3AH</Popup>
						</Marker>
					</MapContainer>
				</MapWrapper>
			</Container>
		</Page>
	)
}

export default Contact
