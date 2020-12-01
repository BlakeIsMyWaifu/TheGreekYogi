import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.scss';
import HomeScreen from '../screens/Home';
import Header from '../components/Header';
import Content from '../components/Content';
import Footer from '../components/Footer';

export default function App() {
	function BasicPage(props) {
		return (
			<>
				<Header />
				<Content page={props.page} />
				<Footer />
			</>
		)
	}

	return (
		<BrowserRouter>
			<Route path='/blog' render={() => <BasicPage page='blog'/>} />
			<Route path='/about' render={() => <BasicPage page='about'/>} />
			<Route path='/classes' render={() => <BasicPage page='classes'/>} />
			<Route path='/' exact={true} component={HomeScreen} />
		</BrowserRouter>
	)
}