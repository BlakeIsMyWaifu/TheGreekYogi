import React from 'react';
import './Home.scss';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function HomeScreen(props) {
	return (
		<div className='Home'>
			<Header />
			<div className='content'>
				<h1>Satnam (SAT = truth   NAM = my name, identity)</h1>
				<h2>Kundalini Yoga Class with @thegreekyogi</h2>
				<p>Kundalini Yoga is the limb of yoga that will unify your mind, body and soul to enable you to connect with the teacher within you and trust and follow your intuition in everyday life situations.</p>
				<p>You will find that your body will feel physically stronger, your mind will be sharper and you will face obstacles with clarity. </p>
				<p>Your stress levels will start dipping low and a greater form of well-being will surround you.</p>
				<p>There are many Kundalini Yoga sets that will target specific organs, body systems  and light up your way in your mental and spiritual paths. </p>
				<p>Kundalini practice has no levels; beginner, intermediate, advanced, we all practice together, in one unified group energy to the best of our ability. There is no competition in our practice.</p>
			</div>
		</div>
	)
}