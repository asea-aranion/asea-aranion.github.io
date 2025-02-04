import React from 'react';
import { useState } from 'react';

export interface SectionProps {
	titleColor: string,
	backgroundColor: string,
	title: string,
	paragraphs: string[],
	imageSrcs: string[]
}

const Section = (props: SectionProps) => {

	const [isOpen, setIsOpen] = useState(true);

	return (
		<div class="section">
			<div class="section-title-and-button">
				<h6 class="section-title" style={{backgroundColor: props.titleColor}}>{props.title}</h6>
				<button class="section-button" onClick={() => setIsOpen(!isOpen)} 
				style={{backgroundColor: props.titleColor, rotate: isOpen ? "90deg" : "0deg"}}>
					<i class="fa-solid fa-chevron-right"></i>
				</button>
			</div>
			<div class="section-content" style={{
				backgroundColor: props.backgroundColor, 
				height: isOpen ? "70vh" : "0px"
				}}>
				{props.paragraphs.map((paragraph: string) => {
					return (<p class="section-paragraph">{paragraph}</p>);
				})}
				<div class="section-images">
					{props.imageSrcs.map((src: string) => {
						return (<img class="section-image" src={src}></img>)
					})}
				</div>
				
			</div>
		</div>
	);
}

export default Section;