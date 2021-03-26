import meditationSvg from 'assets/mindfulness.svg'
import yogaSvg from 'assets/yoga.svg'

export default {
	id: 'classes',
	format: 0,
	data: [
		{
			id: 'kundalini',
			text: {
				title: 'Kundalini Yoga',
				description: 'Tuesday Evenings 19:00-20:15',
			},
			image: {
				img: yogaSvg,
				alt: 'one'
			},
			more: [
				'Kundalini Yoga is the technology that allows our body & mind to unite with the aid of asanas (physical exercises), pranayama (breathwork) and vibrational sound (chanting) to rise the energy through the Nadis (meridians) promoting wellbeing and a deeper connection with the higher self. This class is open to all levels and abilities of yogi and yoginis.',
				'Stratis is a Kundalini Yoga Teacher, a complementary health and well-being advisor and also a scuba diving Instructor. He has practiced yoga for over ten years. Passionate about yoga as the perfect way to grow stronger, more flexible and resilient, both on and off the mat, Stratis creates a friendly, relaxed and welcoming class that will help build strength, flexibility, and re-balance body and mind.',
				'His other passion being diving, Stratis has been teaching scuba diving for twelve years, having spent every free moment in the sea since childhood. He enjoys teaching and likes to share the magic of the ocean and the yoga teachings.'
			]
		},
		{
			id: 'hatha',
			text: {
				title: 'Hatha Yoga',
				description: 'Thursday Evenings 19:00-20:00',
			},
			image: {
				img: meditationSvg,
				alt: 'one'
			},
			more: [
				'Traditional yoga class for the everyone including beginner level and inviting ‘the inflexible male’. This class incorporates a short meditation to connect body, soul & mind and prepare us for the yoga set. This hatha class aims to help the body to find strength & flexibility. There are over 84 postures in yoga that a baby does during pregnancy. We will work to find the qualities that we were born with, (but have moved away from with our modern western lifestyle).',
				'All attendance must be pre-booked. Classes will be limited to 6 sudents to conform with Covid guidelines.'
			]
		}
	]
}