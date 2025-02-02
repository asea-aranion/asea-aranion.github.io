import React from 'react';

interface AppBoxProps {
	imgSrc: string,
	color: string,
	color2: string,
	appName: string,
	appLink: string,
	appDesc: string,
	appLang: string
}

const AppBox = (props: AppBoxProps) => {
	return (
		<div class="app">
        	<div class="img-container">
          		<img src={props.imgSrc} alt="A pixelated animation of a clock underwater" />
        	</div>
        <div class="appcover" style={{backgroundColor: props.color}}></div>
        <div class="apptext">
          	<a href={props.appLink} class="appname">{props.appName}</a>
          	<p class="appdesc" style={{color: props.color2}}>
				<span style={{fontStyle: "italic"}}>{props.appLang}</span>
				<i class="fa-solid fa-ellipsis-vertical"></i> 
				{props.appDesc}
			</p>
        </div>
      </div>
	);
}

export default AppBox;