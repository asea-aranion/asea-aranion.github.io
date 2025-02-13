import React from 'react';
import AppTitle from './AppTitle.tsx';
import SectionsContainer from './SectionsContainer.tsx';
import CodeLinks from './CodeLinks.tsx';

interface PacketPageProps {

}

const PacketPage = (props: PacketPageProps) => {
	return (
		<div>
			<AppTitle title="Packet" titleColor="rgb(128, 155, 117)"></AppTitle>
			<CodeLinks links={[
				{
					href: "https://testflight.apple.com/join/HJpXrFTB",
					title: "TestFlight"
				},
				{
					href: "https://github.com/asea-aranion/Packet/tree/main/Packet",
					title: "Source Code"
				}
			]} />
			<SectionsContainer sections={[
				{
					titleColor: "rgb(184, 228, 165)",
					backgroundColor: "rgb(196, 242, 233)",
					title: "Packing Lists",
					paragraphs: [
						"Packet takes the stress out of packing for your trips.",
						"Create, edit, and organize lists for all your upcoming travels. To make sure you don't forget an item you've brought before, easily duplicate an existing list or build one from a template. Add an existing item to another list with a single tap.",
						"Keep track of where things are going by placing items in bags, such as your carry-on or your checked bag. You can filter items by bag or category to focus your packing.",
						"Customize each list and template with their own accent color."
					],
					imageSrcs: []
				},
				{
					titleColor: "rgb(184, 228, 165)",
					backgroundColor: "rgb(196, 242, 233)",
					title: "Location and Weather",
					paragraphs: [
						"When you enter the dates and destination of your trip, you can see a weather report right in the app as you decide which outfits and gear to bring.",
						"For trips within the next 10 days, you'll see an up-to-date forecast for your exact travel dates. If you're planning further into the future, Packet will display historical weather from the previous year.",
						"The location you enter is translated into coordinates by Apple's CoreLocation API, then provided to WeatherKit to fetch the weather data."
					],
					imageSrcs: []
				},
				{
					titleColor: "rgb(184, 228, 165)",
					backgroundColor: "rgb(196, 242, 233)",
					title: "Persistent Storage",
					paragraphs: [
						"Your data is synced via iCloud across all your Apple devices that have Packet installed. Compile your list on your iPad, then check off items on your phone.",
						"Each list, item, template, category, and bag you create is represented by a SwiftData model and stored in a CloudKit database.",
						"While you use the app, your device sends your edits to the cloud and periodically checks to make sure it has the most updated information about your packing lists."
					],
					imageSrcs: []
				},
				{
					titleColor: "rgb(184, 228, 165)",
					backgroundColor: "rgb(196, 242, 233)",
					title: "Design and Responsiveness",
					paragraphs: [
						"Packet's design is energetic and colorful while remaining clear and readable. The UI has been thoroughly tested in each color theme (more of which are coming soon!) and in both dark and light modes to ensure it retains functionality.",
						"Packet also adapts to any screen size it could be shown on, whether tablet or mobile.",
						"Every line of text in the app supports Dynamic Type, so it can be shown at larger sizes for users who have selected that accessibility option."
					],
					imageSrcs: []
				}
			]} />
		</div>
	);
}

export default PacketPage;