import mindfulnessSvg from 'assets/svg/mindfulness.svg'
import pilatesSvg from 'assets/svg/pilates.svg'
import yogaSvg from 'assets/svg/yoga.svg'

import { SectionData } from './sectionData'

interface ClassesData extends SectionData {
	data: {
		id: string;
		text: {
			title: string;
			description: string;
		},
		image: {
			img: string;
			alt: string;
		}
		more: string[];
	}[]
}

const Classes: ClassesData = {
	id: 'classes',
	format: 0,
	data: [
		{
			id: 'kundalini',
			text: {
				title: 'Kundalini Yoga',
				description: 'Tuesday Evenings 19:00-20:00',
			},
			image: {
				img: mindfulnessSvg,
				alt: 'one'
			},
			more: [
				'Kundalini Yoga is the technology that allows our body & mind to unite with the aid of asanas (physical exercises), pranayama (breathwork) and vibrational sound (chanting) to rise the energy through the Nadis (meridians) promoting wellbeing and a deeper connection with the higher self. This class is open to all levels and abilities of yogi and yoginis.',
				'All attendance must be pre-booked. Classes will be limited to 6 students to conform with Covid guidelines.'
			]
		},
		{
			id: 'hatha',
			text: {
				title: 'Hatha Yoga',
				description: 'Thursday Evenings 19:30-20:30',
			},
			image: {
				img: yogaSvg,
				alt: 'one'
			},
			more: [
				'Traditional yoga class for the everyone including beginner level and inviting ‘the inflexible male’. This class incorporates a short meditation to connect body, soul & mind and prepare us for the yoga set. This hatha class aims to help the body to find strength & flexibility. There are over 84 postures in yoga that a baby does during pregnancy. We will work to find the qualities that we were born with, (but have moved away from with our modern western lifestyle).',
				'All attendance must be pre-booked. Classes will be limited to 6 students to conform with Covid guidelines.'
			]
		},
		{
			id: 'one',
			text: {
				title: 'One to One',
				description: 'Private Classes'
			},
			image: {
				img: pilatesSvg,
				alt: 'one'
			},
			more: [
				'One to one classes are also available as well as group sessions, please contact me at stratis@thegreekyogi.info or through my social media pages if you have any questions and for pricing.'
			]
		}
	]
}

export default Classes