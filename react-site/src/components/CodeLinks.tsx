import React from 'react';

interface CodeLinksProps {
	links: {
		href: string,
		title: string
	}[]
}

const CodeLinks = (props: CodeLinksProps) => {
	return (
		<div class="codelinks-container">
			{props.links.map((link) => {
				return (<a href={link.href} class="codelink" target="_blank" rel="noreferrer">
					{link.title} 
					<i class="fa-solid fa-up-right-from-square"></i>
				</a>);
			})}
		</div>
	);
}

export default CodeLinks;