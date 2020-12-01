import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

export default function Header(props) {
	return (
		<div className='Header'>
			<Link to='/'>
				<img src='/logo.jpg' alt=''></img>
			</Link>
			<div className='pages'>
				<Link to='/'>Home</Link>
				<Link to='/about'>About</Link>
				<Link to='/blog'>Blog</Link>
				<Link to='/classes'>Classes</Link>
				<Link to='/contact'>Contact</Link>
			</div>
		</div>
	)
}