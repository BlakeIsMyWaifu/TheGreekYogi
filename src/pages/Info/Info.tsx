import Page from 'components/Page'
import { InfoData } from 'sectionData/sectionData'

import { Container, SectionDescription, SectionTitle, SectionWrapper, Title } from './InfoElements'

interface InfoPageProps {
	data: InfoData;
}

const InfoPage: React.FC<InfoPageProps> = ({ data }) => {

	return (
		<Page>
			<Container id={data.id}>
				<Title>{data.text.title}</Title>
				{
					data.more.map(({ title, description }, i) => {
						return <SectionWrapper key={`title-${i}`}>
							<SectionTitle>{title}</SectionTitle>
							<SectionDescription>{description}</SectionDescription>
						</SectionWrapper>
					})
				}
			</Container>
		</Page>
	)
}

export default InfoPage
