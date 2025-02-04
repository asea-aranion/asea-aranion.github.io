import React from 'react';
import AppTitle from './AppTitle.tsx';
import SectionsContainer from './SectionsContainer.tsx';
import fish from '../fish72.png';
import seagrass from '../seagrass72.png';
import shark from '../shark72.png';
import coralGlow from '../coral-glow.gif'
import BigImage from './BigImage.tsx';
import CodeLinks from './CodeLinks.tsx';

interface UCPageProps {
}

const UCPage = (props: UCPageProps) => {

	return (
		<div>
			<AppTitle title="Underwater Clock" titleColor="rgb(127, 170, 201)"></AppTitle>
			<BigImage imageSrc={coralGlow} shadowColor="rgb(226, 214, 250)"></BigImage>
			<CodeLinks links={[
				{
					href: "https://github.com/tidbyt/community/blob/main/apps/underwaterclock/underwater_clock.star",
					title: "Source Code"
				}
			]}></CodeLinks>
			<SectionsContainer sections={[
				{
					title: "Design",
					titleColor: "rgb(127, 170, 201)",
					backgroundColor: "rgb(226, 214, 250)",
					paragraphs: [
						"The frames of the app's animations are drawn from 24 64x32 pixel images stored in its code in base64.",
						"It compiles the images corresponding to 2 hours before, 1 hour before, and the current hour into an animation, then calculates the duration of the final scene based on the Tidbyt user's chosen app duration."
					],
					imageSrcs: []
				},
				{
					title: "Bringing It to Life",
					titleColor: "rgb(127, 170, 201)",
					backgroundColor: "rgb(226, 214, 250)",
					paragraphs: [
						"Sea creatures such as fish, a reef shark, and seagrass are then added into the underwater scene.",
						"The next frame in each of their looping animations is layered on top of the background image.",
						"Plus, at night, you can see the coral polyps start to glow!"
					],
					imageSrcs: [fish, seagrass, shark]
				}
			]} ></SectionsContainer>
		</div>
	);
}

export default UCPage;