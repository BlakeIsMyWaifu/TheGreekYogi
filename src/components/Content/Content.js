import React from 'react';
import './Content.scss';
import AboutContent from '../../Content/About.json';
import ClassesContent from '../../Content/Classes.json';
import BlogContent from '../../Content/Blog.json';

export default function Content(props) {
	const pageIndex = {
		"about": AboutContent,
		"classes": ClassesContent,
		"blog": BlogContent
	};

	return (
		<div className='content'>
			{
				pageIndex[props.page].map((section, i) => {
					Object.keys(section).forEach(keys => {
						if (typeof section[keys] === 'string') {
							section[keys] = [section[keys]];
						}
					});
					return (
						<div className='section' key={`section-${section.title}`}>
							{section.title &&
								section.title.map(text => <h1 key={text}>{text}</h1>)
							}
							{section.subtitle &&
								section.subtitle.map(text => <h2 key={text}>{text}</h2>)
							}
							{section.text &&
								section.text.map(text => <p key={text}>{text}</p>)
							}
						</div>
					);
				})
			}
		</div>
	)
}