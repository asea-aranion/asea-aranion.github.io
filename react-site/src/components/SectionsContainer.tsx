import React from 'react';
import Section, { SectionProps } from './Section.tsx';

interface SectionsContainerProps {
	sections: SectionProps[]
}

const SectionsContainer = (props: SectionsContainerProps) => {
	return (
		<div class="sections-container">
			{props.sections.map((section: SectionProps) => {
				return (
					<Section title={section.title} titleColor={section.titleColor}
					backgroundColor={section.backgroundColor} paragraphs={section.paragraphs} imageSrcs={section.imageSrcs}></Section>
				);
			})}
		</div>
	);
}

export default SectionsContainer;