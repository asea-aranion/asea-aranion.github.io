import React from 'react';

interface AppBoxProps {
	imgSrc: string,
	color: string,
	appName: string,
	appLink: string,
	appDesc: string
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
          	<p class="appdesc">{props.appDesc}</p>
        </div>
      </div>
	);
}

export default AppBox;