import svg from 'assets/stability.svg'

export default {
	id: 'about',
	format: 1,
	text: {
		category: 'About',
		title: 'About Yoga',
		description: 'What is yoga? Why do yoga? yes',
	},
	image: {
		imgStart: false,
		img: svg,
		alt: 'one'
	},
	button: {
		text: 'About',
		link: 'about-more',
		extend: true
	},
	more: [
		{
			title: 'The Calling',
			description: [
				'Tried Yoga to try to benefit my passion in freediving and scuba-diving; some months later it became a way of life, the only way forward was to share this way of life.',
				'I first tried a yoga class experimentally, after reading a book about freediving. In some casual conversation with fellow divers it was mentioned that a calm, steady, yogi style breath pattern will help with air consumption enabling longer dives. By chance, I met Lila, a yoga teacher, working part time in my local bakery and the rest is history. I started going to her class once a week, which, very fast, developed to thrice weekly. She encouraged me to follow the path of the teachings and join a Teacher Training Program.'
			]
		},
		{
			title: 'The Training',
			description: [
				'I joined one of the most reputable Kundalini Yoga Teacher Training programs with I-SKY and a year later and many hours of hard studying and practice I qualified and on the journey I made some amazing connections with the other students in my group and the teachers and instructors that guided us through the training.'
			]
		},
		{
			title: 'The Practice',
			description: [
				'In the ten years that I have practiced & trained, I noticed how everything changes and evolves and develops. Poses and postures that would seem undoable once upon a time, now they are a joy to use in daily practice and it is easier to project them to my now new students. The stillness that once seemed impossible is now my go-to-place. The little problems in the day to day life that once looked like a mountain are now an easy to negotiate small obstacle.'
			]
		},
		{
			title: 'The Spiritual Journey',
			description: [
				'Through regular practice the spirit becomes stronger and clarity in dealing with issues nourishes the mind. The mind then encourages the body to bypass physical obstacles and shortcomings. The cycle completes when the body with physical practice directs the spirit to connect to the higher self with strength and clarity and the whole process repeats.',
				'The word yoga means ‘union’, ‘oneness’ where mind, body, spirit connect in harmony. With dedication and practice the point of Shunia (stillness, tranquility) is reached.'
			]
		}
	]
}