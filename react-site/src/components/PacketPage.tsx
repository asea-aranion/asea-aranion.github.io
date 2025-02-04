import React from 'react';
import AppTitle from './AppTitle.tsx';
import SectionsContainer from './SectionsContainer.tsx';

interface PacketPageProps {

}

const PacketPage = (props: PacketPageProps) => {
	return (
		<div>
			<AppTitle title="Packet" titleColor="rgb(128, 155, 117)"></AppTitle>
			<SectionsContainer sections={[
				{
					titleColor: "rgb(184, 228, 165)",
					backgroundColor: "rgb(156, 242, 226)",
					title: "Features",
					paragraphs: [""],
					imageSrcs: []
				}, 
				{
					titleColor: "rgb(184, 228, 165)",
					backgroundColor: "rgb(156, 242, 226)",
					title: "Persistent Storage",
					paragraphs: [""],
					imageSrcs: []
				},
				{
					titleColor: "rgb(184, 228, 165)",
					backgroundColor: "rgb(156, 242, 226)",
					title: "Persistent Storage",
					paragraphs: [""],
					imageSrcs: []
				}
			]} />
		</div>
	);
}

export default PacketPage;