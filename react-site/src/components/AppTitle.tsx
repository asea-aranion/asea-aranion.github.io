import React from 'react';
import { useNavigate } from 'react-router-dom';

interface AppTitleProps {
	title: string,
	titleColor: string
}

const AppTitle = (props: AppTitleProps) => {

    const navigate = useNavigate();

	return (
		<div>
			<div class="apppage-title-container" style={{backgroundColor: props.titleColor}}>
				<h1 class="apppage-title">{props.title}</h1>
			</div>
			<button class="apppage-back" onClick={() => navigate("/")} style={{backgroundColor: props.titleColor}}>
				<i class="fa-solid fa-chevron-left"></i>Back
			</button>
		</div>
		
	);
}

export default AppTitle;